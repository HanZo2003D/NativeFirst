import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

interface Item {
  id: string;
  title: string;
}

const data: Item[] = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
  {id: '9', title: 'Item 1'},
  {id: '10', title: 'Item 2'},
  {id: '11', title: 'Item 11'},
  {id: '12', title: 'Item 12'},
  {id: '13', title: 'Item 5'},
  {id: '14', title: 'Item 14'},
  {id: '15', title: 'Item 7'},
  {id: '16', title: 'Item 16'},
];

const Map = () => {
  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.gridItem}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

    backgroundColor: 'lightgrey',

    paddingVertical: 20,

    gap: 10,
  },
  gridItem: {
    width: 120, // Fixed width for each item
    height: 100,
    backgroundColor: '#ff7e5f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    marginBottom: 50,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Map;
