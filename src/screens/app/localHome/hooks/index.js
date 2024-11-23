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
    const [selectedTab, setSelectedTab] = useState('1');     
    const [name, setName] = useState(''); 
    // const [statusBarVisible, setStatusBarVisible] = useState(true);
    const isDrawerOpen = useDrawerStatus(); // Get the drawer status
    const [tabs, setTabs] = useState([
        { id: '1', label: 'Active' },
        { id: '2', label: 'Requests' },
        { id: '3', label: 'Scheduled' },
        { id: '4', label: 'History' },
      ]);

      const handleTabPress = (id) => {
        setSelectedTab(id); // Update selected tab
    };

    // useEffect(() => {
    //   // Show the status bar initially and then update based on drawer status
    //   StatusBar.setHidden(!statusBarVisible);
    // }, [statusBarVisible]);
  
    // useEffect(() => {
    //   // Update status bar visibility based on drawer state
    //   if (isDrawerOpen === 'open') {
    //     setStatusBarVisible(false);
    //   } else {
    //     setStatusBarVisible(true);
    //   }
    // }, [isDrawerOpen]);

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

    const historyData = [
        {
            id: 1,
            name: "John Doe",
            profileImage: appImages.profile1,
            status: "Completed",
            rating: 5.0,
            price: 13,
            location: "Bali, Indonesia",
            guests: "5 guests",
            stayInfo: "Feb 17-20 | 4 Days | 4 hours",
            total: 74.63,
            description: "Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem."
        },
        {
            id: 2,
            name: "John Doe",
            profileImage: appImages.profile2,
            status: "Cancelled",
            rating: 5.0,
            price: 13,
            location: "Bali, Indonesia",
            guests: "5 guests",
            stayInfo: "Feb 17-20 | 4 Days | 4 hours",
            total: 74.63,
            description: "Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem."
        },
        // Add more entries as needed
    ];
    const requestData = [
        {
            id: 1,
            name: "John Doe",
            profileImage: appImages.profile1,
            status: "Pending",
            rating: 5.0,
            price: 13,
            location: "Bali, Indonesia",
            guests: "5 guests",
            stayInfo: "Feb 17-20 | 4 Days | 4 hours",
            total: 74.63,
            description: "Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem."
        },
        {
            id: 2,
            name: "John Doe",
            profileImage: appImages.profile2,
            status: "Pending",
            rating: 5.0,
            price: 13,
            location: "Bali, Indonesia",
            guests: "5 guests",
            stayInfo: "Feb 17-20 | 4 Days | 4 hours",
            total: 74.63,
            description: "Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem."
        },
        // Add more entries as needed
    ];

    const handleBackPress = () => {
        navigate(routes.auth);
        return true;
    };

    // const data =['mmmml','kkko']

    return {
        goBack,
        search,
        imageData,
        setSearch,
        // isDrawerOpen,
        // statusBarVisible,
        DrawerActions,
        tabs,
        setTabs,
        handleTabPress,
        selectedTab,
        setName,
        name,
        historyData,
        requestData,
    }
}