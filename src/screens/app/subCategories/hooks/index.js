import { useState, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { navigate, goBack } from '../../../../navigation/rootNavigation';
import { appImages, routes } from '../../../../services';

export function useHooks() {

    // const [modalLogoutVisible, setModalLogoutVisible] = useState(false);
    const [search, setSearch] = useState('');
    // const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const [clickedProductItems, setClickedProductsItems] = useState({});

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


    
    const handlePressItem = (item,index) => {
        if (item.userName === 'ALL') {
            setClickedItems(prevClickedItems => ({
                // ...prevClickedItems,
                
                [item.id]: true // Set to true to indicate it's clicked
            }));
            // navigate(routes.allCategory); // replace 'showAllScreen' with your actual route name
        } else {
            setClickedItems(prevClickedItems => ({
                // ...prevClickedItems,
                [item.id]: true // Set to true to indicate it's clicked
            }));
        }
    };

    const handleProductPressItem = (item, index) => {
        // Check if the item is already clicked
        // if (!clickedItems[item.id]) {
        // Toggle the clicked state of the notification item
        setClickedProductsItems(prevClickedItems => ({
            // ...prevClickedItems,
            [item.id]: true // Set to true to indicate it's clicked
        }));
        // }
    };
    
    const dummyProductData = [
        {
            id: '1',
            userName: 'cardiologie',
            subCategory: [
                {
                    subName: 'Rythmologie',
                    products: [
                        {
                            productName: 'Bandage',
                            productImage: appImages.product1,
                            productPrice: 9.99,
                            productCapacity: '75ml',
                            productTablets: '100 tablets'
                        },
                        {
                            productName: 'Stethoscope',
                            productImage: appImages.product2,
                            productPrice: 19.99,
                            productCapacity: 'N/A',
                            productTablets: 'N/A'
                        },
                        {
                            productName: 'Microscope',
                            productImage: appImages.product2,
                            productPrice: 19.99,
                            productCapacity: 'N/A',
                            productTablets: 'N/A'
                        }
                    ]
                }
            ]
        },
        {
            id: '2',
            userName: 'oncologie',
            subCategory: [
                {
                    subName: 'Chemotherapy',
                    products: [
                        {
                            productName: 'Chemo Drug',
                            productImage: appImages.product3,
                            productPrice: 199.99,
                            productCapacity: '50ml',
                            productTablets: '200 tablets'
                        }
                    ]
                }
            ]
        },
        {
            id: '3',
            userName: 'cardiologie',
            subCategory: [
                {
                    subName: 'Rythmologie',
                    products: [
                        {
                            productName: 'Bandage',
                            productImage: appImages.product1,
                            productPrice: 9.99,
                            productCapacity: '75ml',
                            productTablets: '100 tablets'
                        },
                        {
                            productName: 'Stethoscope',
                            productImage: appImages.product2,
                            productPrice: 19.99,
                            productCapacity: 'N/A',
                            productTablets: 'N/A'
                        },
                        {
                            productName: 'Microscope',
                            productImage: appImages.product2,
                            productPrice: 19.99,
                            productCapacity: 'N/A',
                            productTablets: 'N/A'
                        }
                    ]
                }
            ]
        },
    ];
    const dummyData = [
        {
            id: '1',
            userName: 'All',
        },
        {
            id: '2',
            userName: 'Rythmologie',
        },
        {
            id: '3',
            userName: 'Electrophysiologie Equipment',
        },
        {
            id: '4',
            userName: 'Electrophysiologie consommable',
        },
        {
            id: '5',
            userName: 'chirurgie cardiaque',
        },
        {
            id: '6',
            userName: 'cardio pulmonaire',
        },
        {
            id: '7',
            userName: 'cardio-interventionaire',
        },
        {
            id: '8',
            userName: 'insuffisance cardiaque',
        },
    ];



    return {
        // modalHomeVisible,
        // modalHomeVisibility,
        goBack,
        // modalLogoutVisibility,
        // modalLogoutVisible,
        handlePressItem,
        dummyData,
        clickedItems,
        search,
        setSearch,
        handleProductPressItem,
        clickedProductItems,
        dummyProductData
    }
}