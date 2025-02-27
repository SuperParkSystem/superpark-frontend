import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../context/AuthContext';

import DrawerScreens from './DrawerScreens';
import LoginScreen from '../screens/Greeters/Login';
import SignupPage from '../screens/Greeters/SignupPage_react';
import UserTypeSelection from '../screens/Greeters/UserTypeSelection';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { auth } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {
                    auth ? (
                        <Stack.Screen name="Drawer" component={DrawerScreens} />
                    ) : (
                        <Stack.Group>
                            <Stack.Screen name="User Type" component={UserTypeSelection} options={{headerShown: false}} />
                            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                            <Stack.Screen name="Sign Up" component={SignupPage} options={{headerShown: false}} />
                        </Stack.Group>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;