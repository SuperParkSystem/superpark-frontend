import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import DriverDrawerItems from '../constants/DrawerItems/DriverDrawerItems';
import ProductOwnerDrawerItems from '../constants/DrawerItems/ProductOwnerDrawerItems';
import ParkingOwnerDrawerItems from '../constants/DrawerItems/ParkingOwnerDrawerItems';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {

  const usertype = localStorage.getItem('UserType');

  if(usertype === 'Driver') {
    return (
      <Drawer.Navigator>
        {
          DriverDrawerItems.map((item, index) => (
            <Drawer.Screen key={index} name={item.name} component={item.component}
              options={{
                title: item.name,
                drawerIcon: ({focused, size}) => (
                  <Ionicons 
                    name={item.iconName}
                    size={size}
                    color={focused? '#7cc': '#ccc'}
                  />
                )
              }}
              initialParams={{headerShown: true}}
            />
          ))
        }
      </Drawer.Navigator>
    )
  } else if (usertype === 'Parking Lot Owner') {
    return (
      <Drawer.Navigator>
        {
          ParkingOwnerDrawerItems.map((item, index) => (
            <Drawer.Screen key={index} name={item.name} component={item.component}
              options={{
                title: item.name,
                drawerIcon: ({focused, size}) => (
                  <Ionicons 
                    name={item.iconName}
                    size={size}
                    color={focused? '#7cc': '#ccc'}
                  />
                )
              }}
              initialParams={{headerShown: true}}
            />
          ))
        }
      </Drawer.Navigator>
    )
  } else if (usertype === 'Product Owner') {
    return (
      <Drawer.Navigator>
        {
          ProductOwnerDrawerItems.map((item, index) => (
            <Drawer.Screen key={index} name={item.name} component={item.component}
              options={{
                title: item.name,
                drawerIcon: ({focused, size}) => (
                  <Ionicons 
                    name={item.iconName}
                    size={size}
                    color={focused? '#7cc': '#ccc'}
                  />
                )
              }}
              initialParams={{headerShown: true}}
            />
          ))
        }
      </Drawer.Navigator>
    )
  }
};

export default DrawerScreens;