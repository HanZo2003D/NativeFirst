import {FoodItem} from './type/type';

export type RootStackParamList = {
  Home: undefined;
  Detail: {food: FoodItem};
  Cart: undefined;
  Profile: undefined;
};
