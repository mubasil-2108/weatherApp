import { useRoute } from "@react-navigation/native";

export function useHooks() {
    const route = useRoute();
    const { locale, offerSend } = route.params || {};
    return {
        locale,
        offerSend
    }
}