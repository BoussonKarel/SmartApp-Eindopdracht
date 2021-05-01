export default interface Product {
  id: number;
  name: string;
  type: string;
  sku: string;
  manage_stock: boolean;
  stock_quantity: number;
}