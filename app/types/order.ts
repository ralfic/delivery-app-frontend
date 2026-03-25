export interface IOrderItem {
  name: string;
  image: string;
}
export interface IOrder {
  id: string;
  date: string;
  total: number;
  status: string;
  items: IOrderItem[];
}
