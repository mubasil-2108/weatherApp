import { useEffect, useState } from "react";
import { appImages } from "../../../../services";
import { useNavigation } from "@react-navigation/native";

export function useHooks() {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            key: '1',
            title: 'Find a familiar face in\n an unknown place',
            text: 'LocalEyes connects Travelers to Locals\n throughout Czechia',
            backgroundImage: appImages.imgBackground1,
            animation: 'fadeIn'
        },
        {
            key: '2',
            title: 'Discover Through The\n Eyes Of A Local',
            text: 'Make every outing memorable with a\n completely personalized view of the area',
            backgroundImage: appImages.imgBackground2,
            animation: 'fadeIn'
        },
        {
            key: '3',
            title: 'Connect With Real\n People In Real Places',
            text: 'We strive to provide unforgettable experiences\n with strangers who become friends',
            backgroundImage: appImages.imgBackground3,
            animation: 'fadeIn'
        },
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 1500); // Change slide every 3 seconds

        return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }, [slides.length]);

    const currentSlide = slides[currentIndex];

    return {
        slides,
        currentIndex,
        currentSlide,
        navigation
    }
}