import React from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart, CartItem} from '../store/action/cartAction';
import Button from '../components/ButtonComponent';

const DetailScreen: React.FC<{route: any}> = ({route}) => {
  const dispatch = useDispatch();
  const {id, title, price, image, foodCategory} = route.params;

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: Math.random().toString(),
      title,
      price,
      image,
      foodCategory,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <View style={styles.container} key={id}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{foodCategory}</Text>
      <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
      <View style={{padding: 20, flex: 1}}>
        <Button
          title="Add to Cart"
          onPress={handleAddToCart}
          key={id}
          style={{
            position: 'absolute',
            bottom: 30,
            width: '100%',
            left: '50%', // Place the button horizontally in the center
            transform: [{translateX: '-44%'}],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    height: 480,
    width: '100%',
    marginBottom: 20,
    padding: 0,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',

    paddingHorizontal: 20,
  },
  price: {fontSize: 18, marginBottom: 10, paddingHorizontal: 20},
});

export default DetailScreen;
