import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes} from '../../services';
import * as App from '../../screens/app';


const AppStack = createNativeStackNavigator();


const AppNavigation = () => {

    return (
        <AppStack.Navigator initialRouteName={routes.home} screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={routes.home} component={App.Home}/>
        </AppStack.Navigator>
    )
}

export default AppNavigation