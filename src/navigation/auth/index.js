import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Auth from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
            initialRouteName={routes.onBoarding}
        >
            {/* <AuthStack.Screen name={routes.splash} component={Auth.Splash}/> */}
            <AuthStack.Screen name={routes.onBoarding} component={Auth.OnBoarding}/>
            <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
            <AuthStack.Screen name={routes.createAccount} component={Auth.CreateAccount} />
            <AuthStack.Screen name={routes.createProfile} component={Auth.CreateProfile} />
            <AuthStack.Screen name={routes.addAddress} component={Auth.AddAddress} />
            <AuthStack.Screen name={routes.forgetPassword} component={Auth.ForgetPassword}/>
            <AuthStack.Screen name={routes.localSignin} component={Auth.LocalSignin} />
            <AuthStack.Screen name={routes.localProfile} component={Auth.LocalProfile} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation