import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  price: number;
};

const FoodCard = ({title, price}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../screens/assets/item1.jpg')}
        style={styles.chickenImage}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 120,
    marginRight: 20,
  },
  chickenImage: {
    height: 150,
    width: '100%',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 6,
  },
  price: {
    fontSize: 12,
    color: '#327958',
  },
});
export default FoodCard;
