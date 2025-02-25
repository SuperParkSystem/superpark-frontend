import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import ScannerScreen from "../screens/Scanner"

// uses https://icons.expo.fyi/Index for icons

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
        name: 'Scanner',
        component: ScannerScreen,
        iconName: 'scan'
    }
]