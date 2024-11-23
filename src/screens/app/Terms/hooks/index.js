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

    const guideLines = `Lorem ipsum dolor sit amet. Qui nostrum sint hic magni voluptatem sed eligendi veritatis qui voluptatibus officiis aut neque asperiores ut accusantium itaque. Nam unde harum 33 autem nihil et recusandae soluta et fuga tenetur ex itaque esse. Non neque nulla aut itaque totam quo perferendis voluptatem eum repudiandae omnis in rerum magnam ut accusamus magni. Qui quibusdam sunt et error nihil At quis fuga ex inventore alias.
Qui ipsum omnis et sint fugiat et exercitationem nemo non quos minima. Aut dolores eaque qui sint ullam qui tempora aspernatur aut velit corrupti ab ipsa enim. Sit facere minus rem totam dolorem ut minus officiis qui consequuntur aperiam ut nobis sunt.
Qui voluptatem dolore et aliquid Quis rem sunt velit et reiciendis tenetur est repellat libero eos quae officiis et veniam placeat. Non fugiat autem cum omnis dolore ea earum deserunt et voluptas consequatur est laboriosam optio et tempora atque.`
    return {
        guideLines,
        statusBarVisible,
        DrawerActions,
    }
}