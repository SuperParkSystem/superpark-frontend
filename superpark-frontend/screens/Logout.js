import { useAuth } from "../context/AuthContext";
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';

const LogoutScreen = () => {
    const {setAuth} = useAuth();
    setAuth(false);

    // on web platform remove local storage token
    if(Platform.OS === 'web') {
        localStorage.removeItem('SuperParkToken');
        localStorage.removeItem('UserType');
    } else if(Platform.OS === 'android' || Platform.OS === 'ios') {
        SecureStore.setItem('SuperParkToken', '')
        SecureStore.setItem('UserType', '')
    }
}

export default LogoutScreen;