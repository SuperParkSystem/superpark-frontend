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
    // stores 600,000 ms = 10 min
    const duration = 600000;

    if(Platform.OS === 'web') {
        const tok = JSON.parse(localStorage.getItem('SuperParkToken'));
        if (tok === null) {
            return false
        } else {
            // if time duration exceeded, token not valid
            if (parseInt(Date.now()) - parseInt(tok.Timestamp, 10) > duration) {
                return false
            } else {
                // refresh token timestamp and store it
                tok.Timestamp = Date.now();
                localStorage.setItem('SuperParkToken', JSON.stringify(tok));
            }        
        }
        return true;
    } else {
        //TEMP CODE TO ALLOW AUTOMATIC LOGIN FOR PHONE
        return true;
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