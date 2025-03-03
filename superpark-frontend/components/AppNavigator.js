import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../context/AuthContext';

import DrawerScreens from './DrawerScreens';
import LoginScreen from '../screens/Greeters/Login';
import SignupPage from '../screens/Greeters/SignupPage';
import UserTypeSelection from '../screens/Greeters/UserTypeSelection';

const linking = {
    prefixes: ['http://localhost:8081'],
    config: {
        screens: {
            Drawer: 'dashboard',
            'User Type': 'select-user',
            Login: 'login',
            'Sign Up': 'signup',
        }
    }
}

// function to check if login sesion is valid
const validSession = () => {
    if(Platform.OS === 'web') {
        return (localStorage.getItem('token') != null)
    } else {
        //TEMP CODE TO ALLOW AUTOMATIC LOGIN FOR PHONE
        return false;
    }
}

const AppNavigator = () => {
    const { auth } = useAuth();
    const Stack = createStackNavigator();

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {
                    (auth || validSession()) ? (
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