export interface FoodItem {
  id: number;
  title: string;
  price: number;
  foodCategory?: string;
  image: any;
}

export interface CartItem extends FoodItem {
  quantity: number;
}
