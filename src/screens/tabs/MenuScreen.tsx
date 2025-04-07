import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {foodItems} from '../../data/Data';
import FoodCard from '../../components/FoodCard';

type Props = {};

const MenuScreen = ({navigation}: {navigation: any}) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

  // Function to filter food items based on category
  const filteredData =
    selectedCategory === 'All'
      ? foodItems // Show all items if "All" is selected
      : foodItems.filter(item => item.foodCategory === selectedCategory);

  const categories = [
    'All',
    'Fast Food',
    'Italian',
    'Japanese',
    'Mexican',
    'Healthy',
    'American',
    'Indian',
    'Chinese',
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      {/* Category Buttons */}
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory, // Highlight selected category
            ]}
            onPress={() => setSelectedCategory(category)} // Update selected category
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Food Items */}
      <View
        style={{
          marginLeft: 14,
        }}>
        <FlatList
          data={filteredData}
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
          numColumns={2} // Displays two items per row
          columnWrapperStyle={styles.row}
          style={{
            marginBottom: 180,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  heading: {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: 20,
    textAlign: 'center',
    color: '#327958',
  },
  categoryContainer: {flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20},
  categoryButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 5,
  },
  selectedCategory: {backgroundColor: '#327958'},
  categoryText: {color: '#000', fontSize: 14},
  selectedCategoryText: {color: '#fff'},
  item: {padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd'},
  itemTitle: {fontSize: 16, fontWeight: 'bold'},
  itemPrice: {fontSize: 14, color: '#888'},
  row: {
    marginBottom: 20,

    columnGap: 20,
  },
});

export default MenuScreen;
