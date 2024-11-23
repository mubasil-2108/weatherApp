import { useState } from "react";
import { appImages } from "../../../../services";
import { LocaleConfig } from 'react-native-calendars';


export function useHooks() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [isChecked, setIsChecked] = useState(false);
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
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return {
        customDayNames,
        selectedDate,
        setSelectedDate,
        onDatePress,
        handleDateChange,
        LocaleConfig,
        isChecked,
        toggleCheckbox
        // hour,
        // hours,
        // setHour
    }
}