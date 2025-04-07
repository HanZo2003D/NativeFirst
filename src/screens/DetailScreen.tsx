import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{foodCategory}</Text>
      <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
      <Button
        title="Add to Cart"
        onPress={handleAddToCart}
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
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  image: {height: 200, width: '100%', marginBottom: 20},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  price: {fontSize: 18, marginBottom: 20},
});

export default DetailScreen;
