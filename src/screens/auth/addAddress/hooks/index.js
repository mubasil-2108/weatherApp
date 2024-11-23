import { useState, useEffect } from "react";
import { Country, City, State } from 'country-state-city';

export function useHooks() {
    const [street_1, setStreet_1] = useState('');
    const [street_2, setStreet_2] = useState('');

    const [date, setDate] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [preferences, setPreferences] = useState('');
    const [allPreferences, setAllPreferences] = useState([]);
    // const [postalCode, setPostalCode] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
    const [stateOptions, setStateOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    const [formData, setFormData] = useState({
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
    });

    const handleInputChange = (field, value) => {
        
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    useEffect(() => {
        const countries = Country.getAllCountries();
        console.log('Countries:', countries);
        setCountryOptions(countries.map(country => ({
            label: country.name,
            value: country.isoCode
        })));
    }, []);
    
    const handleCountryChange = (item) => {
        setSelectedCountry(item.value);
        const states = State.getStatesOfCountry(item.value);
        console.log('States:', states);
        setStateOptions(states.map(state => ({
            label: state.name,
            value: state.isoCode
        })));
        setSelectedState(null); // Reset state and city when country changes
        setCityOptions([]);
    };
    
    const handleStateChange = (item) => {
        console.log('Selected State:', item.value);
        setSelectedState(item.value);
        const cities = City.getCitiesOfState(selectedCountry, item.value);
        console.log('Cities:', cities);
        setCityOptions(cities.map(city => ({
            label: city.name,
            value: city.name
        })));
    };
    
    
    const handleAdd = () => {
        if (preferences.trim()) {
            setAllPreferences([...allPreferences, preferences.trim()]);
            setPreferences(''); // Clear input after adding
        }
        setIsInputVisible(false);
    };

    // Function to chunk array into groups of 3
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const preferencesChunks = chunkArray(allPreferences, 3);

    const formatDate = (text) => {
        // Remove non-numeric characters and handle input
        let numbers = text.replace(/\D/g, '');

        // Apply formatting
        if (numbers.length >= 8) {
            numbers = `${numbers.slice(0, 4)}/${numbers.slice(4, 6)}/${numbers.slice(6, 8)}`;
        } else if (numbers.length >= 4) {
            numbers = `${numbers.slice(0, 4)}/${numbers.slice(4)}`;
        }

        return numbers;
    };
    const genderData = [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Others', value: '3' },
    ];

    const handleChangeText = (text) => {
        // Remove slashes and format the input
        const cleanedText = text.replace(/\//g, ''); // Remove existing slashes
        let formattedText = formatDate(cleanedText);

        // Update state with formatted text
        setDate(formattedText);
    };

    return {
        street_1,
        setStreet_1,
        street_2,
        setStreet_2,
        date,
        handleChangeText,
        genderData,
        preferences,
        setPreferences,
        isInputVisible,
        setIsInputVisible,
        handleAdd,
        preferencesChunks,
        countryOptions,
        selectedState,
        stateOptions,
        cityOptions,
        handleCountryChange,
        handleStateChange,
        formData,
        handleInputChange,
        // postalCode
    }
}