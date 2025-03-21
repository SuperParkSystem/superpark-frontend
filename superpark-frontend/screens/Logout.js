import { useAuth } from "../context/AuthContext";
import { Platform } from "react-native";

const LogoutScreen = () => {
    const {setAuth} = useAuth();

    // on web platform remove local storage token
    if(Platform.OS === 'web') {
        localStorage.removeItem('SuperParkToken');
        localStorage.removeItem('UserType');
    }

    setAuth(false);
}

export default LogoutScreen;