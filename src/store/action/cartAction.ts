export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string; // Image URL
  quantity: number;
  foodCategory: string;
}

// Add to Cart Action
export const addToCart = (item: CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

// Remove from Cart Action
export const removeFromCart = (id: string) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// Increase Quantity Action
export const increaseQuantity = (id: string) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

// Decrease Quantity Action
export const decreaseQuantity = (id: string) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});

// Clear Cart Action
export const clearCart = () => ({
  type: CLEAR_CART,
});
