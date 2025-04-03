import ProfileScreen from "../../screens/ParkingLotOwnerProfile"
import SettingScreen from "../../screens/Settings"
import ParkingSpaceScreen from "../../screens/ParkingSpace"
import LogoutScreen from "../../screens/Logout"

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
        name: 'Parking Spaces',
        component: ParkingSpaceScreen,
        iconName: 'grid-outline',
    },
    {
        name: 'Logout Screen',
        component: LogoutScreen,
        iconName: 'log-out-outline',
    }
]