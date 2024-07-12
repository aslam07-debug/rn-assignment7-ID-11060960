import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'; 
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Store" component={TabNavigator} />
      <Drawer.Screen name="Locations" component={TabNavigator} />
      <Drawer.Screen name="Blog" component={TabNavigator} />

      <Drawer.Screen name="Jewelery" component={TabNavigator} />
      <Drawer.Screen name="Electronic" component={TabNavigator} />
      <Drawer.Screen name="Clothing" component={TabNavigator} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
