import ProductProfileScreen from "../../screens/Profile/ProductProfile"
import SettingScreen from "../../screens/Settings"
import RealTimeScreen from "../../screens/RealTime"
import MapScreen from "../../screens/Maps"
import LogoutScreen from "../../screens/Logout"

// icons website: https://ionic.io/ionicons

export default [
    {
        name: 'Profile',
        component: ProductProfileScreen,
        iconName: 'home'
    },
    {
        name: 'Maps',
        component: MapScreen,
        iconName:'map-outline'
    },
    {
        name: 'Real Time Data',
        component: RealTimeScreen,
        iconName: 'analytics-outline',
    },
    {
        name: 'Logout Screen',
        component: LogoutScreen,
        iconName: 'log-out-outline',
    }
]