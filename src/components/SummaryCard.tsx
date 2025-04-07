import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type SummaryCardProps = {
  cartItems: CartItem[]; // Array of cart items
};

const SummaryCard: React.FC<SummaryCardProps> = ({cartItems}) => {
  // Calculate subtotal for each item and total for the cart
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Cart Summary</Text>
      <View style={styles.line} />

      {/* Display each item's subtotal */}
      {cartItems.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.itemText}>
            {item.title} (x{item.quantity})
          </Text>
          <Text style={styles.priceText}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      ))}

      <View style={styles.line} />

      {/* Display total value */}
      <View style={styles.row}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPriceText}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
    marginBottom: 90,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#327958',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#327958',
  },
});

export default SummaryCard;
