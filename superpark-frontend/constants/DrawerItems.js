import PaymentScreen from "../screens/Payment"
import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import ScannerScreen from "../screens/Scanner"

import SignupPage from "../screens/Greeters/SignupPage_react"
import UserTypeSelection from "../screens/Greeters/UserTypeSelection"
import Greeter from "../screens/Greeters/Login"

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
        name: 'Payment',
        component: PaymentScreen,
        iconName: 'card-outline'
    },
    {
        name: 'Scanner',
        component: ScannerScreen,
        iconName: 'scan'
    }
]