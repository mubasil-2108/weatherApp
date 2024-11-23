import { useState, useEffect, useRef } from "react"
import { BackHandler } from 'react-native'
import { navigate, goBack } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services";
import { useNavigation, useRoute } from "@react-navigation/native";


export function useHooks() {
    const navigation = useNavigation();
    // const { navigate, goBack, route } = props.navigation;
    const route = useRoute();
    const { fromSignin } = route.params || {};
    const [accepted, setAccepted] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const phoneInputRef = useRef(null);

    const handleSigninPress = () => {
        if (fromSignin === 'local') {
            // Prevent navigating back to SigninScreen2
            navigation.replace(routes.localSignin);
        } else {
            navigation.replace(routes.signin);
        }
    };
    const handleProfilePress = () => {
        if (fromSignin === 'local') {
            // Prevent navigating back to SigninScreen2
            navigation.replace(routes.localProfile);
        } else {
            navigation.replace(routes.createProfile);
        }


    };
    // Function to handle button press

    const phoneNumberRef = () => {
        if (phoneInputRef.current) {
            // Get the phone number
            const phoneNumber = phoneInputRef.current.getValue();
            setPhoneNumber(phoneNumber);

        }
    };
    // console.log("Phone Number: ",phoneNumber)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!showConfirmPassword);
    };


    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        navigation.replace(routes.signin);
        return true;
    };

    return {
        accepted,
        setAccepted,
        handleProfilePress,
        toggleCheckbox,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
        setEmail,
        email,
        handleSigninPress,
        setName,
        name,
        showPassword,
        showConfirmPassword,
        setPassword,
        setConfirmPassword,
        confirmPassword,
        password,
        isChecked,
        goBack,
        phoneInputRef,
        phoneNumber,
        phoneNumberRef
    }
}