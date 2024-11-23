import { useState } from "react";
import { appImages } from "../../../../services";

export function useHooks() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState([]); // Store only a single selected ID
    const [search, setSearch] = useState('');
    // State to track selected items
    const [selectedItems, setSelectedItems] = useState([]);

    const [selectedLanguages, setSelectedLanguages] = useState([]);
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
    // Function to handle selection
    const handleSelection = (item) => {
        if (selectedItems.includes(item)) {
            // Remove item from selectedItems if already selected
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            // Add item to selectedItems
            setSelectedItems([...selectedItems, item]);
        }
    };

    // Function to check if item is selected
    const isItemSelected = (item) => selectedItems.includes(item);

    const handleRadioButtonPress = (id) => {
        if (selected.includes(id)) {
            // If the item is already selected, remove it from the selection
            setSelected(selected.filter(selectedId => selectedId !== id));
        } else {
            // Otherwise, add the item to the selection
            setSelected([...selected, id]);
        }
    };
    // const handleModalToggle = (visible) => {
    //     setModalVisible(visible);
    //     if (!visible) {
    //         setSelectedLanguages([]); // Clear selected languages when modal is closed
    //     }
    // };
    return {
        selected,
        handleRadioButtonPress,
        search,
        setSearch,
        handleSelection,
        isItemSelected,
        modalVisible,
        setModalVisible,
        selectedLanguages,
        handleLanguageSelection,
        selectedLanguageNames,
        languageToIsoCodeMap
    }
}