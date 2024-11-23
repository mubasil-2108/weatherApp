import { useState } from "react";

export function useHooks() {
    const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [pressed, setPressed] = useState({});
    
  // Function to toggle the pressed state for a specific index
  const togglePressed = (index) => {
    setPressed((prev) => ({
    //   ...prev,
      [index]: !prev[index],
    }));
  };

  // Sample data for buttons (could be fetched from elsewhere)
  const buttonData = [
    '9:00 am - 2:00 pm',
    '10:00 am - 1:00 pm',
    '8:00 am - 7:00 pm',
    '11:00 am - 12:00 pm',
    '9:00 am - 3:00 pm'
  ];

    const onDatePress = (date) => {
        setSelectedDate(date.dateString); // Use dateString for comparison
        handleDateChange(date.dateString); // Existing functionality to handle date change
    };
    
    const modalLogoutVisibility = () => {
        setModalLogoutVisible(!modalLogoutVisible);
    };
    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };
    

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    return{
        modalLogoutVisible,
        modalLogoutVisibility,
        setModalLogoutVisible,
        modalHomeVisible,
        modalHomeVisibility,
        setModalHomeVisible,
        selectedDate,
        handleDateChange,
        onDatePress,
        setSelectedDate,
        pressed,
        togglePressed,
        buttonData,
        setPressed,
    }
}