import PaymentScreen from "../screens/Payment"
import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import ScannerScreen from "../screens/Scanner"

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
        name: 'Payment',
        component: PaymentScreen,
        iconName: 'card-outline'
    },
    {
        name: 'Scanner',
        component: ScannerScreen,
        iconName: 'scan'
    },
]