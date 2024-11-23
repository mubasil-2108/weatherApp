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
    return {
        statusBarVisible,
    DrawerActions,
    }
}