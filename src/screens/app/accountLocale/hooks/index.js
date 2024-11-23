import { Alert } from "react-native";
import { appImages } from "../../../../services";
import { useState } from "react";

export function useHooks() {
    const [modalVisible, setModalVisible] = useState(false);
    const [profileImage, setProfileImage] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = useState(true);
    const [pressed, setPressed] = useState(false);

    const handleTogglePrivacyPolicy = () => {
        setPrivacyPolicyEnabled((prev) => !prev);
      };
  const handleToggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };
    const languageMapping = {
        1: 'English',
        2: 'Indonesia',
        3: 'Thailand',
        4: 'Chinese',
    };
    const languageToIsoCodeMap = {
        English: 'US',    // United States
        Indonesia: 'ID',  // Indonesia
        Thailand: 'TH',   // Thailand
        Chinese: 'CN',
    };
    const handleLanguageSelection = (language) => {
        setSelectedLanguages((prevSelectedLanguages) => {
            if (prevSelectedLanguages.includes(language)) {
                return prevSelectedLanguages.filter((lang) => lang !== language);
            } else {
                return [...prevSelectedLanguages, language];
            }
        });
    };
    const selectedLanguageNames = selectedLanguages.map(id => languageMapping[id] || 'Unknown');

    const selectImage = async () => {
        Alert.alert(
            'Select Photo',
            'Choose to take a new photo or select from the gallery.',
            [
                {
                    text: 'Take Photo',
                    onPress: () => {
                        ImagePicker.openCamera({
                            cropping: true,
                            mediaType: 'photo',
                            width: 700,
                            height: 700,
                        }).then(image => {
                            console.log('Selected Camera Image:', image); // Check the image object
                            if (image && image.path) {
                                setProfileImage(image.path);
                            }
                        }).catch(error => {
                            console.log('Camera Error: ', error);
                        });
                    },
                },
                {
                    text: 'Choose from Gallery',
                    onPress: () => {
                        ImagePicker.openPicker({
                            cropping: true,
                            mediaType: 'photo',
                            width: 700,
                            height: 700,
                        }).then(image => {
                            console.log('Selected Gallery Image:', image); // Check the image object
                            if (image && image.path) {
                                setProfileImage(image.path);
                            }
                        }).catch(error => {
                            console.log('Gallery Error: ', error);
                        });
                    },
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };
    return {
       selectImage,
       profileImage,
       languageToIsoCodeMap,
       handleLanguageSelection,
       selectedLanguageNames,
       modalVisible,
       setModalVisible,
       selectedLanguages,
       notificationsEnabled,
       handleToggleNotifications,
       privacyPolicyEnabled,
       handleTogglePrivacyPolicy,
       pressed,
       setPressed
    }
}