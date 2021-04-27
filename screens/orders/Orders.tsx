import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { woocommerce } from '../../utils/WooCommerce';
import Order from '../../models/Order';
import { createOrderObject } from '../../utils/order';
import Loading from '../../components/Loading';

const Orders = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const detail = ( order : Order ) => {
    navigation.navigate('Order picking', { order: order });
  }

  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = async () => {
    setLoading(true);

    woocommerce.get.orders()
    .then(response => {
      const orderList : Order[] = [];

      for (let order of response) {
        orderList.push(createOrderObject(order));
      }

      setOrders(orderList);

      // Stop the loading indicator
      setLoading(false);
    });
  }

  useEffect(() => {
    getOrders();
  }, [])

  if (loading) return ( <Loading />)
  else if (orders?.length < 1) return (
    <View style={appStyle.container}>
      <Text>Geen orders gevonden!</Text>
    </View>
  )
  else return (
    <View style={appStyle.container}>
      { orders.map((o: Order) => (
        <TouchableNativeFeedback key={o.id} onPress={() => { detail(o) }}>
          <Card type="order" title={o.full_name} sub={o.order_date} amount={`€ ${o.total}`} />
        </TouchableNativeFeedback>
      ))}
    </View>
  )
}

export default Orders;