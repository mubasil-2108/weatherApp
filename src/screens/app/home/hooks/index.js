import { useState, useEffect, useCallback } from 'react';
import { BackHandler, PermissionsAndroid } from 'react-native'
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { countryList, routes } from '../../../../services';
import { debounce } from 'lodash'
import { API_KEY, TIME_ZONE } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

export function useHooks() {
    const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
    const [timezone, setTimezone] = useState('');
    const [search, setSearch] = useState('');
    const [coords, setCoords] = useState(null);
    const [loader, setLoader] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [weatherResults, setWeatherResults] = useState([])
    const [searchButton, setSearchButton] = useState(false);
    const [result, setResult] = useState(true);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState('');
    const [sunRise, setSunRise] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    let groupedWeatherResults = {};
    let weatherResultsArray = {}

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(async () => {
            setLoader(true);
            await getCurentLocation();
            setRefreshing(false);
        }, 2000)
    }, [])

    useEffect(() => {
        const requestPermission = async () => {
            const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Permission',
                message: 'This app needs access to your location to show you the weather',
            });
            if (permission === PermissionsAndroid.RESULTS.GRANTED) {
                setLoader(true)
                getCurentLocation()

            }
        }
        requestPermission()
    }, [])
    const fetchedData = async () =>{
        try {
            const city = await AsyncStorage.getItem('city');
            const country = await AsyncStorage.getItem('country');
            const main = await AsyncStorage.getItem('description');
            const temperature = await AsyncStorage.getItem('temperature');
            const humidity = await AsyncStorage.getItem('humidity');
            const wind = await AsyncStorage.getItem('wind');
            const sunrise = await AsyncStorage.getItem('sunrise');
            const timeZone = await AsyncStorage.getItem('timeZone');
            if (main && wind && sunrise && timeZone && humidity && temperature && city && country) {
                setCity(city);
                setCountry(country);
                setDescription(main)
                setTemperature(parseInt(temperature))
                setHumidity(parseInt(humidity))
                setWind(parseFloat(wind))
                setSunRise(sunrise);
                setTimezone(timeZone)
                console.log('Hello Async')
            }else{
            setLoader(true)
            getCurentLocation()
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchedData()
    }, [])

    const getCurentLocation = () => {
        setLoader(true);
        Geolocation.getCurrentPosition(async (position) => {
            const cords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            try {
                await AsyncStorage.setItem('latitude', cords.latitude.toString());
                await AsyncStorage.setItem('longitude', cords.longitude.toString());
            } catch (error) {
                console.log(error)
            }
            setCoords(cords);
            console.log(cords.latitude + ' ' + cords.longitude)
            setSearch('');
            setSearchButton(false);
            await checkWeather(cords.latitude, cords.longitude);
            await currentWeatherCheck();
        }, (error) => {
            console.log('Location Error : ', error)
        }, {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 1000
        })
    }
    const checkWeather = async (latitude, longitude) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            let response = await fetch(url);
            response = await response.json();
            if (response) {

                const country = await getCountryName(response.sys.country)
                const tempKelvin = response.main.temp;
                const tempCelsius = tempKelvin - 273.15;

                const sunriseTimestamp = response.sys.sunrise;
                const sunriseDate = new Date(sunriseTimestamp * 1000);
                const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIME_ZONE}&format=json&by=position&lat=${latitude}&lng=${longitude}`
                let result = await fetch(url);
                result = await result.json();
                setTimezone(result.zoneName)
                const sunriseTime = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: result.zoneName }).format(sunriseDate);

                setWeatherResults(response.list); //mmmmmmmmm
                setCity(response.name)
                setCountry(country);
                setDescription(response.weather[0].main)
                setTemperature(parseInt(tempCelsius))
                setHumidity(response.main.humidity)
                setWind(response.wind.speed)
                setIcon(response.weather[0].main)
                setSunRise(sunriseTime);

                await AsyncStorage.setItem('city', response.name);
                await AsyncStorage.setItem('country', country);
                await AsyncStorage.setItem('description', response.weather[0].main);
                await AsyncStorage.setItem('temperature', tempCelsius.toString());
                await AsyncStorage.setItem('humidity', response.main.humidity.toString());
                await AsyncStorage.setItem('wind', response.wind.speed.toString());
                await AsyncStorage.setItem('sunrise', sunriseTime);
                await AsyncStorage.setItem('timeZone', result.zoneName);


            }
        } catch (error) {
            console.log('Error ', error)
        }
    }

    const currentWeatherCheck = async () => {
        try {
            const latitude = await AsyncStorage.getItem('latitude');
            const longitude = await AsyncStorage.getItem('longitude');
            if (latitude && longitude) {
                const lat = coords?.latitude || latitude;
                const lon = coords?.longitude || longitude;
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                let response = await fetch(url);
                response = await response.json();
                if (response && response.list) {
                    setWeatherResults(response.list);
                    setLoader(false);
                } else {
                    console.log('Try Again')
                    return null;
                }
            }
        } catch (error) {
            console.log('Error ', error)
        }

    }

    if (Array.isArray(weatherResults) && weatherResults.length > 0) {
        groupedWeatherResults = weatherResults.reduce((acc, item) => {
            const date = item.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = item;
            }
            return acc;
        }, {})
        weatherResultsArray = Object.values(groupedWeatherResults);
    } else {
        console.error("weatherResults is not an array or is undefined");
    }


    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const geoLocation = async (text) => {
        setSearch(text);
        if (text.length > 2) {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=${5}&appid=${API_KEY}`
            let response = await fetch(url);
            response = await response.json();
            if (response) {
                setResult(true);
                setSearchResults(response);
                setSearch('')
            } else {
                console.log('Location not found');
                return null
            }
        }

    }
    const getCountryName = (code) => {
        const country = countryList.find(c => c.code === code);
        return country ? country.name : code; // Return code if not found
    };
    const weatherCheck = async (index) => {
        setLoader(true);
        const lat = searchResults[index].lat;
        const lon = searchResults[index].lon;
        await checkWeather(lat, lon);
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        let response = await fetch(url);
        response = await response.json();
        if (response) {
            // setWeatherResults([]);
            setWeatherResults(response.list);
            const country = await getCountryName(response.city.country)
            setSearchButton(false);
            setCity(response.city.name)
            setCountry(country);
            setLoader(false);
            setSearch('');
        } else {
            // setWeatherResults([])
            console.log('Try Again')
        }
    }
    const handleTextDebounce = useCallback(debounce((text) => geoLocation(text), 300), []);
    const handleBackPress = () => {
        BackHandler.exitApp();
        return true;
    };

    return {
        goBack,
        search,
        setSearch,
        searchButton,
        setSearchButton,
        geoLocation,
        weatherResults,
        handleTextDebounce,
        weatherCheck,
        searchResults,
        result,
        city,
        country,
        getCurentLocation,
        description,
        humidity,
        wind,
        temperature,
        icon,
        refreshing,
        onRefresh,
        sunRise,
        weatherResultsArray,
        loader,
        timezone,
        ShimmerPlaceholder
    }
}