import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './CartScreen';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    
     <Tab.Navigator initialRouteName="HomeScreem" screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
      
    
  );
};

export default TabNavigator;
