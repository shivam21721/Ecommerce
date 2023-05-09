export interface ProductType {
  brand: string;
  category: string;
  current_stock: string;
  description: string;
  discount_percent: number;
  discount_price: number;
  image_url: string;
  max_price: number;
  rating: number;
  title: string;
  total_reviews: number;
  wishlisted: boolean;
  product_id: string;
  quantity: number;
}

export interface StateType {
  productReducer: object[];
  userReducer: object;
  filterReducer: object;
}

export interface UserInfoType {
  userStatus: boolean;
  name: string;
  email: string;
  order_history: OrderHistoryType[];
  wishlist_items: ProductType[];
  cart_items: ProductType[];
}

export interface FilterType {
  maxPrice: number;
  minPrice: number;
  minRating: number;
  maxRating: number;
}

export interface OrderHistoryType {
  orders_list:ProductType[];
  total_amount:number;
  order_id:string;
}

