import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { woocommerce } from '../../utils/WooCommerce';
import Order from '../../models/Order';
import { createOrderObject } from '../../utils/order';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/native';
import Product from '../../models/Product';
import SadPlaceholder from '../../components/SadPlaceholder';

const Orders = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [orders, setOrders] = useState<Order[]>([]);

  const detail = ( order : Order ) => {
    navigation.navigate('Order picking', { order: order });
  }

  const getOrders = async () => {
    woocommerce.get.orders()
    .then(response => {
      const orderList : Order[] = [];

      for (let order of response) {
        orderList.push(createOrderObject(order));
      }

      setOrders(orderList);

      // Stop the loading indicator
      setLoading(false);
      setRefreshing(false);
    });
  }

  useEffect(() => {
    // getOrders();
  }, [])

  const refreshEvent = useCallback(() => {
    setRefreshing(true);
    getOrders();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("LOADING ORDERS");
      setLoading(true);
      getOrders();
    }, [])
  );

  if (loading) return ( <Loading />)
  else if (orders.length < 1) return (
    <SadPlaceholder>No orders found.</SadPlaceholder>
  )
  else return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshEvent} />
      }
      data={orders}
      renderItem={({item} : {item: Order}) =>
        <TouchableNativeFeedback key={item.id} onPress={() => { detail(item) }}>
          <Card type="order" title={item.full_name} sub={item.order_date} amount={`€ ${item.total}`} />
        </TouchableNativeFeedback>
      }
      keyExtractor={(order: Order) => order.id.toString()}
      /*
        TODO IN V1.1: Page selector in Products, Kits, Orders... (prev/[current])/next)
        Now it only shows the first 10 products, orders...
      */
    />
  )
}

export default Orders;