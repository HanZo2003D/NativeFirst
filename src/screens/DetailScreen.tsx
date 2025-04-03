import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const DetailScreen = ({route}: {route: any}) => {
  const {title, price, foodCategory} = route.params; // Get the title and price from navigation params
  const [quantity, setQuantity] = useState(1); // State to track the number of items

  // Calculate the total price
  const totalPrice = quantity * parseFloat(price);

  // Increment function
  const increment = () => setQuantity(quantity + 1);

  // Decrement function
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../screens/assets/item1.jpg')}
          style={{width: '100%', height: 200}}
        />
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.title}> {foodCategory}</Text>
        <Text style={styles.title}>Price:${price}</Text>
        <Text style={styles.total}>Total Price: ${totalPrice.toFixed(2)}</Text>

        {/* Quantity Control */}
        <View style={styles.controls}>
          <Button title="-" onPress={decrement} />
          <Text style={styles.quantity}>{quantity}</Text>
          <Button title="+" onPress={increment} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'lightgrey',
  },
  subContainer: {
    height: '95%',
    backgroundColor: '#fff',
    width: '100%',

    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default DetailScreen;
