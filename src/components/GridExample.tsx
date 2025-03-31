import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GridExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 1</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 2</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 3</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 4</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 5</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.itemText}>Item 6</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row', // Align items in a row
    flexWrap: 'wrap', // Wrap items into new rows
    justifyContent: 'space-around', // Distribute space between items
    width: '90%', // Make sure grid fits within the screen
  },
  gridItem: {
    width: '30%', // Each item takes 30% of the container's width
    height: 100, // Fixed height for each grid item
    backgroundColor: '#ff7e5f', // Background color for each item
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5, // Space between grid items
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GridExample;
