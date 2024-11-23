import { useState, useEffect, useCallback } from 'react';
import { BackHandler, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { width, height, totalSize } from 'react-native-dimension';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appFonts, appIcons, appImages, colors, fontSizes, routes, sizes } from '../../../../services';
import firestore from '@react-native-firebase/firestore';
import { LocaleConfig } from 'react-native-calendars';
import { DrawerActions } from '@react-navigation/native';

export function useHooks() {
    const [selectGender, setSelectGender] = useState('');

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const customDayNames = ['SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    LocaleConfig.locales['en'] = {
        monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        today: "Today"
    };

    LocaleConfig.defaultLocale = 'en';

    const onDatePress = (date) => {
        setSelectedDate(date.dateString); // Use dateString for comparison
        handleDateChange(date.dateString); // Existing functionality to handle date change
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
    const genderData = [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Others', value: '3' },
    ];
    return {
        genderData,
        goBack,
        DrawerActions,
        customDayNames,
        selectedDate,
        setSelectedDate,
        onDatePress,
        handleDateChange,
        LocaleConfig,
        selectGender,
        setSelectGender
    }
}