import { DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

export function useHooks() {
    const [statusBarVisible, setStatusBarVisible] = useState(true);
    const isDrawerOpen = useDrawerStatus(); // Get the drawer status

    useEffect(() => {
        // Show the status bar initially and then update based on drawer status
        StatusBar.setHidden(!statusBarVisible);
    }, [statusBarVisible]);

    useEffect(() => {
        // Update status bar visibility based on drawer state
        if (isDrawerOpen === 'open') {
            setStatusBarVisible(false);
        } else {
            setStatusBarVisible(true);
        }
    }, [isDrawerOpen]);

    const [expanded, setExpanded] = useState(null);
    const faqsData = [
        { 
            title: 'What is Local Eyes?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
        { 
            title: 'Lorem ipsum dolor sit amet.?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
        { 
            title: 'Lorem ipsum dolor sit amet.?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
        { 
            title: 'Lorem ipsum dolor sit amet.?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
        { 
            title: 'Lorem ipsum dolor sit amet.?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
        { 
            title: 'Lorem ipsum dolor sit amet.?', 
            detail: 'Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.'
        },
    ];
    const handleExpand = (index) => {
        setExpanded(prevIndex => (prevIndex === index ? null : index));
    };
    return {
        statusBarVisible,
        DrawerActions,
        expanded,
        handleExpand,
        faqsData
    }
}