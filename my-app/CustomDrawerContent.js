
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Aslam</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{right:220,bottom:20}}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <DrawerItemList {...props} labelStyle={styles.drawerItem} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    top:40
  },
  line: {
    width: 120,
    height: 1,
    backgroundColor: 'orange',
    marginVertical: 30,
    left:20,
    top:10
  },
  drawerItem: {
    fontSize: 50, 
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
