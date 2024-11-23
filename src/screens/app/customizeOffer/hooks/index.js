import { useRoute } from "@react-navigation/native";
import { useState } from "react";

export function useHooks() {
    const [pressed, setPressed] = useState(false);
    const [idCard, setIdCard] = useState('');

    const handleIDCard = ()=>{
        ImagePicker.openPicker({
            cropping: true,
            mediaType: 'photo',
            // width: 700,
            // height: 700,
        }).then(image => {
            console.log('Selected Gallery Image:', image); // Check the image object
            if (image && image.path) {
                setIdCard(image.path);
            }
        }).catch(error => {
            console.log('Gallery Error: ', error);
        });
    }
    return {
        setPressed,
        pressed,
        handleIDCard,
        idCard,
        setIdCard
    }
}