export default interface OrderItem {
  id: number;
  name: string;
  bundle: boolean;
  picked_quantity: number;
  quantity: number;
  sku: string;
}