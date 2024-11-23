import { useNavigation, useRoute } from "@react-navigation/native";
import { appImages, routes } from "../../../../services";
import { useEffect, useState } from "react";

export function useHooks() {
    // const { navigate, goBack, dispatch } = props.navigation
    // const navigation =useNavigation();
    const [screenName, setScreenName] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const route = useRoute();
    const { editCard } = route.params || {};
    useEffect(() => {
        // This effect runs when the component mounts or when `editCard` changes
        if (editCard === 'editCard') {
            setScreenName('Edit Card Details');
            setButtonText('Save Changes');
        } else {
            setScreenName('Add Card Details');
            setButtonText('Add');
        }
    }, [editCard]);

    const handleSubmit = async () => {
        setModalVisible(true);
    }

    return {
        screenName,
        buttonText,
        modalVisible,
        handleSubmit,
        setModalVisible,
    }
}