import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

type CartCardProps = {
  id: string;
  title: string;
  price: number;
  image: any; // Image URL or path
  foodCatogery: string;
  quantity: number; // Quantity of the item
  onRemove: (id: string) => void; // Callback to remove the item
  onIncrease: (id: string) => void; // Callback to increase quantity
  onDecrease: (id: string) => void; // Callback to decrease quantity
};

const CartCard: React.FC<CartCardProps> = ({
  id,
  title,
  price,
  image,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
  foodCatogery,
}) => {
  const total = (quantity * price).toFixed(2);
  return (
    <View style={styles.card}>
      {/* Item Image */}
      <Image source={image} style={styles.image} />

      {/* Item Details */}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{fontSize: 12}}>{foodCatogery}</Text>
        <Text style={styles.price}>${total}</Text>

        {/* Quantity Management */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => onDecrease(id)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => onIncrease(id)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onRemove(id)}
            style={styles.removeButton}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>

        {/* Remove Item Button */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#327958',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    marginTop: 10,
  },
  removeText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 80,
    marginBottom: 10,
  },
});

export default CartCard;
