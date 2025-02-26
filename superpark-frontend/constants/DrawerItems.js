import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import PaymentScreen from "../screens/Paymentbak"

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
    }
]