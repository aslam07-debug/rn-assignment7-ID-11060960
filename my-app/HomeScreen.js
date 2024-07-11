import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dress from './components/Dress';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <Icon name="menu-outline" size={40} color="#000" />
            <Image source={require("./assets/Logo.png")} style={styles.logo} />
            <Icon name="search-outline" size={40} color="#000" style={styles.searchIcon} />
            <Icon name="bag-outline" size={40} color="#000" />
          </View>
          <View style={styles.storyContainer}>
            <Text style={styles.storyText}>OUR STORY</Text>
            <View style={styles.storyIcons}>
              <Icon name="list" size={30} color="grey" />
              <Icon name="filter" size={30} color="orange" />
            </View>
          </View>
        </View>
        <View style={styles.grid}>
          {products.map((item) => (
            <Dress
              address={item.image} // Assuming 'image' contains the URL of the product image
              price={item.price}
              title={item.title}
              key={item.id}
            />
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 180,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerIcons: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    left: 70,
  },
  searchIcon: {
    marginLeft: 80,
    left: 8,
  },
  storyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storyText: {
    fontSize: 20,
    fontFamily: 'Lato', // Updated font property
  },
  storyIcons: {
    flexDirection: 'row',
    gap: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
