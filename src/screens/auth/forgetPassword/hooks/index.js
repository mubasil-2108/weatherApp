import { navigate, goBack } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { ResetPassword } from "../../../../services/utilities/firebaseUtil/firebaseAuth";

export function useHooks() {

    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleResetPassword = async () => {
        setModalVisible(true);
        // await ResetPassword(email, setEmail).then(()=>{
        //     if(email){
        //         setModalVisible(true);
        //     }
        // }) // Call the ResetPassword function
         // Show modal after successful reset
    };


    return {
       setEmail,
        email,
        goBack,
        modalVisible,
        handleResetPassword
    }
}