import PaymentScreen from "../screens/Payment"
import ProfileScreen from "../screens/Profile"
import SettingScreen from "../screens/Settings"
import ScannerScreen from "../screens/Scanner"
import MapScreen from "../screens/Maps"
import ParkingSpaceScreen from "../screens/ParkingSpace"
import LogoutScreen from "../screens/Logout"
import ParkingLotDetails from "../screens/ParkingLotDetails"
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
    },
    {
        name: 'Maps',
        component: MapScreen,
        iconName:'map-outline'
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
    },
    {
        name: 'ParkingLotDetails',
        component: ParkingLotDetails,
    }
]