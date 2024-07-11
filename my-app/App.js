import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import Store from "./Store";
import DrawerNavigator from "./DrawerNavigator";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
       
    </NavigationContainer>
  );
}