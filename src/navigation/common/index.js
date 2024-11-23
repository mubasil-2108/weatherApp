import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Common from '../../screens/common';

const Stack = createNativeStackNavigator();

const CommonNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.termsOfService}
        >
            <Stack.Screen name={routes.termsOfService} component={Common.TermsOfService} />
            <Stack.Screen name={routes.howToUse} component={Common.HowToUse} />
        </Stack.Navigator>
    )
}
export default CommonNavigation
