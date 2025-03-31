import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

interface Item {
  id: string;
  title: string;
  size: number; // Define dynamic size
}

const data: Item[] = [
  {
    id: '1',
    title:
      'Hello Welcome to my App Hello Welcome to my App Hello Welcome to my App ',
    size: 100,
  },
  {id: '2', title: 'Medium', size: 150},
  {id: '3', title: 'Large', size: 200},
  {id: '4', title: 'Small', size: 100},
  {id: '5', title: 'Medium', size: 150},
  {id: '6', title: 'Large', size: 200},
  {id: '7', title: 'Small', size: 100},
  {id: '8', title: 'Medium', size: 150},
];

const screenWidth = Dimensions.get('window').width;
const numColumns = 2; // Number of columns in the grid

const GridExample: React.FC = () => {
  const renderItem = ({item}: {item: Item}) => (
    <View
      style={[
        styles.gridItem,
        {height: item.size, width: screenWidth / numColumns - 10},
      ]}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 5,
  },
  gridItem: {
    backgroundColor: '#ff7e5f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default GridExample;
