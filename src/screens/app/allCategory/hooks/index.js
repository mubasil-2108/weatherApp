import { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { goBack } from "../../../../navigation/rootNavigation";

export function useHooks() {
    const [search, setSearch] = useState('');
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            backHandler.remove();
        };
    }, []);
    const handleBackPress = () => {
        goBack();
        return true;
    };
    return (
        search,
        setSearch
    )
}