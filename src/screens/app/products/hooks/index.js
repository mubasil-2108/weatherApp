import { useEffect, useState } from "react";
import { appImages } from "../../../../services";
import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export function useHooks() {
    const [locationPermission, setLocationPermission] = useState(false);
    // const [markerCoordinate, setMarkerCoordinate] = useState(null);
    const [markerCoordinates, setMarkerCoordinates] = useState([]);

    const handleMapPress = (event) => {
      const { latitude, longitude } = event.nativeEvent.coordinate;
      setMarkerCoordinates(prevCoordinates => [
          ...prevCoordinates,
          { latitude, longitude }
      ]);
  };
    useEffect(() => {
        async function requestLocationPermission() {
          if (Platform.OS === 'ios') {
            const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            setLocationPermission(result === RESULTS.GRANTED);
          } else {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            setLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
          }
        }
        requestLocationPermission();
      }, []);
    
      if (!locationPermission) {
        return null; // Or render a fallback UI
      }
    return {
        handleMapPress,
        markerCoordinates
    }
}