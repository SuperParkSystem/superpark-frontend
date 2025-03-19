import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import MapScreen from "../screens/Maps"
import LogoutScreen from "../screens/Logout"

// icons website: https://ionic.io/ionicons

export default [
    {
        name: 'Profile',
        component: ProfileScreen,
        iconName: 'home'
    },
    {
        name: 'Settings',
        component: SettingScreen,
        iconName: 'settings'
    },
    {
        name: 'Maps',
        component: MapScreen,
        iconName:'map-outline'
    },
    {
        name: 'Logout Screen',
        component: LogoutScreen,
        iconName: 'log-out-outline',
    }
]