import { goBack } from "../../../../navigation/rootNavigation"
import { useEffect, useState } from "react";
import { BackHandler } from 'react-native'
import { format } from 'date-fns';

export function useHooks() {
    const currentDateTime = new Date();
    const formattedDateTime = format(currentDateTime, "EEE, MMM d, yyyy h:mm aaa");
    const [clickedItems, setClickedItems] = useState({});

    const handlePressItem = (item, index) => {
        // Check if the item is already clicked
        if (!clickedItems[item.id]) {
            // Toggle the clicked state of the notification item
            setClickedItems(prevClickedItems => ({
                ...prevClickedItems,
                [item.id]: true // Set to true to indicate it's clicked
            }));
        }
    };
    
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
    

    const dummyData = [
        {
            id: '1',
            userName: 'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.',
            // userImage: appImages.user1, // Replace with a valid image source
            timeStamp: formattedDateTime,
            notificationText: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.',
        },
        {
            id: '2',
            userName: 'Bob Smith',
            // userImage: appImages.user2, // Replace with a valid image source
            timeStamp: '1 day ago',
            notificationText: 'commented on your photo',
        },
        {
            id: '3',
            userName: 'Charlie Brown',
            // userImage: appImages.user3, // Replace with a valid image source
            timeStamp: '3 days ago',
            notificationText: 'started following you',
        },
        {
            id: '4',
            userName: 'David Wilson',
            // userImage: appImages.user4, // Replace with a valid image source
            timeStamp: '5 days ago',
            notificationText: 'shared your post',
        },
        {
            id: '5',
            userName: 'Eva Green',
            // userImage: appImages.user5, // Replace with a valid image source
            timeStamp: '1 week ago',
            notificationText: 'mentioned you in a comment',
        },
    ];

    return {
        goBack,
        dummyData,
        clickedItems,
        handlePressItem
    }
}