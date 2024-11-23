import { useState } from "react";
import { appImages } from "../../../../services";
import { useRoute } from "@react-navigation/native";

export function useHooks() {
    const route = useRoute();
    const { payment } = route.params || {};
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState([]);

    const handleRadioButtonPress = (id) => {
        if (selected.includes(id)) {
            // If the card is already selected, remove it from the selection
            setSelected(selected.filter(cardId => cardId !== id));
        } else {
            // If the card is not selected, add it to the selection
            setSelected([...selected, id]);
        }
    };
    const handlePayNow = async () => {
        setModalVisible(true);
    }

    const data = [
        {
            id: '1',
            title: 'Card 1',
            placeholder: '**** **** 0582 4672'
        },
        {
            id: '2',
            title: 'Card 2',
            placeholder: '**** **** 1234 5678'
        },
        {
            id: '3',
            title: 'Card 3',
            placeholder: '**** **** 9876 5432'
        },
    ];

    return {
        data,
       selected,
       handleRadioButtonPress,
       pressed,
       setPressed,
       modalVisible,
       setModalVisible,
       handlePayNow,
       payment
    }
}