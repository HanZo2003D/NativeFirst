import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import CartCard from '../../components/CartCart';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../store/action/cartAction';
import SummaryCard from '../../components/SummaryCard';
import Button from '../../components/ButtonComponent';

const CartScreen: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => dispatch(removeFromCart(id));
  const handleIncrease = (id: string) => dispatch(increaseQuantity(id));
  const handleDecrease = (id: string) => dispatch(decreaseQuantity(id));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      {cart.length === 0 ? (
        // Show "Cart is empty" message if no items are in the cart
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Cart is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CartCard
              id={item.id}
              foodCatogery={item.foodCategory}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              onRemove={handleRemove}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<SummaryCard cartItems={cart} />}
        />
      )}
      <Button
        title="Check Out"
        onPress={console.log}
        style={{
          position: 'absolute',
          bottom: 20,
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    position: 'relative',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777',
  },
});

export default CartScreen;
