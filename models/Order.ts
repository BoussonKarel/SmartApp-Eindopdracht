import OrderItem from "./OrderItem";

export default interface Order {
  id: number;
  order_number: string;
  status: string;
  total: number;
  order_date: Date;
  full_name: string;
  picked_items: number;
  total_items: number;
  order_items: OrderItem[];
}