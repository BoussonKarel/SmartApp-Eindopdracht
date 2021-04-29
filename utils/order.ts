import Order from "../models/Order";
import OrderItem from "../models/OrderItem"

export const createOrderObject = (fullOrder : any) : Order => {
  const orderItems : OrderItem[] = [];

  for (let lineItem of fullOrder.line_items) {
    // Als het geen bundle onderdeel is
    if (!lineItem.bundled_by || lineItem.bundled_by != "") {
      // Is het een bundle?
      let bundle;
      lineItem.bundled_items.length > 0 ? bundle = true : bundle = false

      orderItems.push({
        id: lineItem.id,
        name: lineItem.name,
        bundle: bundle,
        picked_quantity: 0,
        quantity: lineItem.quantity,
        sku: lineItem.sku,
      });
    }
  }

  return {
    id: fullOrder.id,
    order_number: fullOrder.number,
    status: fullOrder.status,
    total: fullOrder.total,
    order_date: fullOrder.date_created,
    full_name: `${fullOrder.billing.first_name} ${fullOrder.billing.last_name}`,
    picked_items: 0,
    order_items: orderItems,
  }
}

export const formatDate = (date : Date) : string => {
  return "";
}