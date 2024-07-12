import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
    
  );
};

export default TabNavigator;
