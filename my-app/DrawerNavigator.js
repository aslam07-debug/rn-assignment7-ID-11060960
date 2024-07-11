import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'; // Adjust the import path
import CustomDrawerContent from './CustomDrawerContent'; // Adjust the import path

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }} // This hides the header
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
