import { useState, useEffect, useRef } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Alert, Platform } from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function useHooks() {
    const route = useRoute();
    // const formData = route.params.formData || {};

    // const phoneNumber = route.params.phone || '';
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInputRef = useRef(null);
    const [userID, setUserID] = useState('');
    const [email, setEmail] = useState('');
    const [selectGender, setSelectGender] = useState('');
    const [date, setDate] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [preferences, setPreferences] = useState('');
    const [allPreferences, setAllPreferences] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    console.log("Route params:", route.params);
    const [profileImage, setProfileImage] = useState('');
    console.log("UIDD", userID);
    // console.log("UIDDD", phoneNumber);

    const [phoneNo, setPhoneNo] = useState('');
    console.log("Phone 2: ", phoneNo);

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            try {
                const storedPhoneNumber = await AsyncStorage.getItem('@phoneNumber');
                if (storedPhoneNumber) {
                    setPhoneNo(storedPhoneNumber);
                    console.log('Fetched Phone Number:', storedPhoneNumber);
                }
            } catch (error) {
                console.error('Error fetching phone number:', error);
            }
        };

        fetchPhoneNumber();
    }, []);

    const phoneNumberRef = () => {
        if (phoneInputRef.current) {
            // Get the phone number
            const phoneNumber = phoneInputRef.current.getValue();
            setPhoneNumber(phoneNumber);

        }
    };

    const uploadImage = async (imageUri, imageName) => {
        if (typeof imageUri !== 'string' || !imageUri) {
            throw new Error('Image URI must be a non-empty string.');
        }

        if (typeof imageName !== 'string' || !imageName) {
            throw new Error('Image name must be a non-empty string.');
        }

        const reference = storage().ref(imageName);
        const task = reference.putFile(imageUri);

        return new Promise((resolve, reject) => {
            task.on('state_changed', snapshot => {
                // Handle progress
            }, err => {
                reject(err);
            }, async () => {
                const downloadURL = await reference.getDownloadURL();
                resolve(downloadURL);
            });
        });
    };

    const saveProfileData = async (profileData) => {
        const user = auth().currentUser;
        console.log(user)
        if (user) {
            setUserID(user.uid); // Use user.uid instead of user
            setEmail(user.email);
            if (!profileData.userId || !profileData.fullName) {
                throw new Error('Missing required profile fields.');
            }

            try {
                await firestore().collection('profiles')
                    .doc(profileData.userId)
                    .set(profileData, { merge: true })
                // console.log('Profile data saved successfully!');
            } catch (error) {
                console.error('Error saving profile data:', error);
            }
        } else {
            throw new Error('No authenticated user found.');
        }
    };

    const handleProfileUpdate = async (profileImageUri, profileData) => {
        try {
            const imageName = `profileImages/${Date.now()}.jpg`;
            if (typeof profileImageUri !== 'string' || !profileImageUri) {
                throw new Error('Profile image URI must be a non-empty string.');
            }
            const imageUrl = await uploadImage(profileImageUri, imageName);

            const updatedProfileData = {
                ...profileData,
                profileImage: imageUrl
            };
            console.log('Submitting Profile Data:', updatedProfileData);

            await saveProfileData(updatedProfileData);
            console.log('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleSubmit = async () => {
        // const profileData = {
        //     userId: userID || '', // Ensure uid is defined
        //     email: email || '', // Add email
        //     phoneNumber: phoneNo || '',// Add phone number
        //     fullName: fullName || '', // Provide default values if necessary
        //     dateOfBirth: date || '',
        //     gender: selectGender || '', // Ensure genderData is defined
        //     address: address || '',
        //     travelPreference: allPreferences || []
        // };

        // if (profileImage) {
        //     await handleProfileUpdate(profileImage, profileData).then(() => {
        //         if (profileData) {
        //             setModalVisible(true);
        //         }
        //     });
        // } else {
        //     // If no profile image, just save the profile data
        //     await saveProfileData(profileData).then(() => {
        //         if (profileData) {
        //             setModalVisible(true);
        //         }
        //     })

        // }
        setModalVisible(true);

    };

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
    const truncateAddress = (address, maxLength) => {
        if (address.length > maxLength) {
            return address.slice(0, maxLength) + '...';
        }
        return address;
    };
    // const address = `${formData.street_1 || ''}, ${formData.street_2 || ''}, ${formData.country?.label || ''}, ${formData.state?.label || ''}, ${formData.city?.label || ''}, ${formData.postalCode || ''}`;
    // console.log(formData)
    // const hasAddress = formData.street_1 || formData.street_2 || formData.country?.label || formData.state?.label || formData.city?.label || formData.postalCode;
    // const truncatedAddress = hasAddress ? truncateAddress(address, 30) : '';
    const handleAdd = () => {
        if (preferences.trim()) {
            setAllPreferences([...allPreferences, preferences.trim()]);
            setPreferences(''); // Clear input after adding
        }
        setIsInputVisible(false);
    };

    // Function to chunk array into groups of 3
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const preferencesChunks = chunkArray(allPreferences, 3);

    const formatDate = (text) => {
        // Remove non-numeric characters and handle input
        let numbers = text.replace(/\D/g, '');

        // Apply formatting
        if (numbers.length >= 8) {
            numbers = `${numbers.slice(0, 4)}/${numbers.slice(4, 6)}/${numbers.slice(6, 8)}`;
        } else if (numbers.length >= 4) {
            numbers = `${numbers.slice(0, 4)}/${numbers.slice(4)}`;
        }

        return numbers;
    };
    const genderData = [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Others', value: '3' },
    ];

    const handleChangeText = (text) => {
        // Remove slashes and format the input
        const cleanedText = text.replace(/\//g, ''); // Remove existing slashes
        let formattedText = formatDate(cleanedText);

        // Update state with formatted text
        setDate(formattedText);
    };

    return {
        fullName,
        setFullName,
        date,
        handleChangeText,
        genderData,
        preferences,
        setPreferences,
        isInputVisible,
        setIsInputVisible,
        handleAdd,
        preferencesChunks,
        selectImage,
        profileImage,
        // formData,
        handleSubmit,
        // truncatedAddress,
        phoneInputRef,
        phoneNumber,
        phoneNumberRef,
        selectGender,
        setSelectGender,
        modalVisible,
        email,
        setEmail
    }
}