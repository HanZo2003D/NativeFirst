import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FoodCard from '../../components/FoodCard';
import {foodItems} from '../../data/Data';

type Props = {};

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState('');

  const filteredData = foodItems
    .map(item => item.title) // Extract titles only
    .filter(title => title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      {/* Overlaying Search Results */}
      {searchText ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          style={styles.overlayList} // Custom style to overlay content
        />
      ) : null}
      {/* Content Below Search */}
      <View style={styles.bottomContent}>
        <Text style={{color: 'white', marginBottom: 5}}>Delivery to Home</Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 10,
            fontWeight: 400,
            fontSize: 12,
          }}>
          Haritcolony street no 8,Gwarko
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 60,
            paddingVertical: 4,
            borderRadius: 8,
          }}>
          <Text style={styles.bottomText}>2.4km</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContents}>
        <View>
          <Text
            style={{
              color: '#000',
              marginBottom: 2,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Chicken Teriyaki
          </Text>
          <Text
            style={{
              color: '#000',
              marginBottom: 12,
              fontWeight: 400,
              fontSize: 12,
            }}>
            Discount 25%
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#327958',
              width: 120,
              paddingVertical: 10,

              borderRadius: 8,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Order Now</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../assets/chicken.webp')}
          style={styles.chickenImage}
        />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 15,
        }}>
        Top of Week
      </Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <FoodCard
            title={item.title}
            price={item.price}
            navigation={navigation}
            foodCategory={item.foodCategory}
            image={item.image}
          />
        )}
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides the scrollbar
        // Adds spacing and styling
        style={{marginBottom: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,

    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',

    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24, // Ensure the input stays above any other content
  },
  overlayList: {
    position: 'absolute', // Overlay the list
    top: 100, // Position it below the search bar
    left: 20,
    right: 0,

    backgroundColor: 'white', // Add background to prevent transparency
    borderWidth: 1,
    borderColor: '#ccc',

    zIndex: 1, // Ensure it appears above other content
    maxHeight: 250, // Add a limit to the height for better usability
    width: '40%',
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    textAlign: 'center',
  },
  bottomContent: {
    marginTop: 20, // Ensure there's space between this and the search bar

    backgroundColor: '#327958',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  bottomContents: {
    marginTop: 20, // Ensure there's space between this and the search bar

    backgroundColor: '#CDE0D5',

    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  bottomText: {
    fontSize: 14,
    color: '#327958',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chickenImage: {
    height: '100%',
    width: '60%',
  },
});

export default HomeScreen;
