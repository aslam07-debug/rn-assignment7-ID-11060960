import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dress({ address, title, price }) {
  const addToCart = async () => {
    try {
      const item = { address, title, price };
      const storedCartItems = JSON.parse(await AsyncStorage.getItem('cart')) || [];
      storedCartItems.push(item);
      await AsyncStorage.setItem('cart', JSON.stringify(storedCartItems));
      console.log('Item added to cart');
    } catch (error) {
      console.error('Error adding item to cart', error);
    }
  };

  return (
    <View style={styles.dressContainer}>
      <Image source={{ uri: address }} style={styles.image} />
      <TouchableOpacity onPress={addToCart} style={styles.icon}>
        <Icon name="add-circle-outline" size={33} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>reversible angora cardigan</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dressContainer: {
    top: 20,
    left: 19,
    marginBottom: 20,
    marginRight: 10,
    right: 20,
  },
  image: {
    height: 240,
    width: 183,
  },
  icon: {
    position: 'absolute',
    left: 140,
    bottom: 80,
  },
  title: {
    left: 3,
    fontWeight: 'bold',
    width: 150,
  },
  description: {
    left: 3,
    color: 'grey',
    fontSize: 14.5,
  },
  price: {
    left: 3,
    fontSize: 20,
    color: 'orange',
  },
});
