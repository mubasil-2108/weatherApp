import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { width, height, totalSize } from 'react-native-dimension';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appFonts, appIcons, appImages, colors, fontSizes, routes, sizes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { DrawerActions } from '@react-navigation/native';

export function useHooks() {
    const [search, setSearch] = useState('');
    const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = useState({});

    const handleTogglePrivacyPolicy = (id) => {
        setPrivacyPolicyEnabled(prevStates => ({
            ...prevStates,
            [id]: !prevStates[id] // Toggle the state for this switch
        }));
      };

    const handleSelect = (option) => {
        setSelected(option);
    };

    const data = [
        {
          id: '1',
          day: 'Monday',
          time: '09:00 am - 11:00 pm',
          rate: '$13',
          transport: '$5',
          timezone: 'Eastern Time - US & Canada',
        },
        {
            id: '2',
            day: 'Monday',
            time: '09:00 am - 11:00 pm',
            rate: '$13',
            transport: '$5',
            timezone: 'Eastern Time - US & Canada',
          },
          {
            id: '3',
            day: 'Monday',
            time: '09:00 am - 11:00 pm',
            rate: '$13',
            transport: '$5',
            timezone: 'Eastern Time - US & Canada',
          },
        // Add more data as needed
      ];

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);

    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    return {
        goBack,
        search,
        setSearch,
        // isDrawerOpen,
        // statusBarVisible,
        DrawerActions,
        handleSelect,
        handleTogglePrivacyPolicy,
        privacyPolicyEnabled,
        data
    }
}