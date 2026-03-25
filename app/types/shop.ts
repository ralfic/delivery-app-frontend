export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export interface IShop {
  id: number;
  name: string;
  products: IProduct[];
  active: boolean;
}
