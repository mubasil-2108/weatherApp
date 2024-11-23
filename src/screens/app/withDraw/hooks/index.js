import { useState } from "react";

export function useHooks() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleWithDraw = async () => {
        setModalVisible(true);
    }

    return{
        modalVisible,
        handleWithDraw,
        setModalVisible
    }
}