import Product from "../models/Product";

export const createOrderObject = (fullProduct : any) : Product => {
  return {
    id: fullProduct.id,
    name: fullProduct.name,
    type: fullProduct.type,
    sku: fullProduct.sku,
    manage_stock: fullProduct.manage_stock,
    stock_quantity: fullProduct.stock_quantity,
  }
}