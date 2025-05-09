import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  CartItem,
} from '../action/cartAction';

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = (
  state: CartState = initialState,
  action: any,
): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(
        item => item.title === action.payload.title,
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.title === action.payload.title
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, {...action.payload, quantity: 1}],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
