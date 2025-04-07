import {combineReducers} from 'redux';
import cartReducer from './slice/cartSlice';
import authReducer from './slice/authSlice';
import {legacy_createStore as createStore} from 'redux';
// Extended type for Redux actions

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Define the store
const store = createStore(rootReducer);

export default store;
