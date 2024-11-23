import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { Signin } from '../../../../services/utilities/firebaseUtil/firebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useHooks() {

    // const handleLogin = (email, password) => {
    //     navigate(routes.app)
    // }
    

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const modalVisibility = () => {
        setModalVisible(!modalVisible);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const storeUserType = async (userType) => {
        try {
          await AsyncStorage.setItem('userType', userType);
          console.log('User type stored:', userType);
        } catch (error) {
          console.error('Error storing user type:', error);
        }
      };

      const handleSignIn = async () => {
        // Your sign-in logic, e.g., API call
        // const signInSuccessful = await Signin(email, password); // Uncomment this and implement proper sign-in logic
        // if (signInSuccessful) {
          await storeUserType('locale'); // Store 'locale' in AsyncStorage
          navigate(routes.app); // Navigate to the main app
        // }
      };
    // const handleBackButtonPress = () => {
    //     if (modalVisible) {
    //         modalVisibility(); // Close the modal if it's visible
    //         return true; // Tell React Native that the back press is handled
    //     }
    //     return false; // Let React Native handle the back press
    // };

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         handleBackButtonPress
    //     );

    //     // Clean up the event listener when the component unmounts
    //     return () => backHandler.remove();
    // }, [modalVisible]);

    return {
        // handleLogin,
        toggleCheckbox,
        togglePasswordVisibility,
        setEmail,
        email,
        showPassword,
        setPassword,
        password,
        isChecked,
        modalVisible,
        modalVisibility,
        Signin,
        handleSignIn
    }
}