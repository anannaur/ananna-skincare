
export interface Product {
  id: string;
  name: string;
  category: 'Cleanser' | 'Serum' | 'Moisturizer' | 'Oil' | 'Mask';
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  skinType: 'All' | 'Dry' | 'Oily' | 'Sensitive' | 'Combination';
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
