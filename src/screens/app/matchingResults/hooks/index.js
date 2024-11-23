import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appIcons, appImages, routes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export function useHooks() {
    const [search, setSearch] = useState('');
    const [statusBarVisible, setStatusBarVisible] = useState(true);
    const isDrawerOpen = useDrawerStatus(); // Get the drawer status

    useEffect(() => {
      // Show the status bar initially and then update based on drawer status
      StatusBar.setHidden(!statusBarVisible);
    }, [statusBarVisible]);
  
    useEffect(() => {
      // Update status bar visibility based on drawer state
      if (isDrawerOpen === 'open') {
        setStatusBarVisible(false);
      } else {
        setStatusBarVisible(true);
      }
    }, [isDrawerOpen]);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const imageData = [
      { id: '1', source: appIcons.nearBy, text: 'Nearby', isNearby: true },
      { id: '2', source: appImages.Location1, text: 'Prague' },
      { id: '3', source: appImages.Location2, text: 'Brno' },
      { id: '4', source: appImages.Location3, text: 'Pilsen' },
      { id: '5', source: appImages.Location4, text: 'Ostrava' },
    ];
    const data = [
      {
        id: '1',
        name: 'John Doe',
        image: appImages.profile1,
        rating: '5.0',
        rate: 13,
        description: 'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',
        badges: ['Certified Tour Guide', 'Local with Transport', '10+ Year Local', 'Local Enthusiast'],
      },
      {
        id: '2',
        name: 'John Doe',
        image: appImages.profile2,
        rating: '5.0',
        rate: 13,
        description: 'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',
        badges: ['Certified Tour Guide', 'Local with Transport', '10+ Year Local', 'Local Enthusiast'],
      },
      {
        id: '3',
        name: 'John Doe',
        image: appImages.profile3,
        rating: '5.0',
        rate: 13,
        description: 'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',
        badges: ['Certified Tour Guide', 'Local with Transport', '10+ Year Local', 'Local Enthusiast'],
      },
    ];
    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    // const data =['mmmml','kkko']

    return {
        data,
        goBack,
        search,
        imageData,
        setSearch,
        isDrawerOpen,
        statusBarVisible,
        DrawerActions
    }
}