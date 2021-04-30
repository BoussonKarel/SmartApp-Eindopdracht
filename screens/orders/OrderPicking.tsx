import { useFocusEffect, useIsFocused } from '@react-navigation/core';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Vibration, Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { useFeedback } from '../../components/FeedbackProvider';
import Loading from '../../components/Loading';
import SadPlaceholder from '../../components/SadPlaceholder';
import Order from '../../models/Order';
import OrderItem from '../../models/OrderItem';
import { pickingStyle } from '../../styles/components/picking';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';
import { theme } from '../../styles/utils/colors';
import { createOrderObject } from '../../utils/order';
import { feedback } from '../../utils/ux';

const OrderPicking = ({ route, navigation } : any) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [camera, setCamera] = useState<Camera|null>(null);

  const [order, setOrder] = useState<Order|null>(null);

  const [scanned, setScanned] = useState<boolean>(false);

  const isFocused = useIsFocused();

  const feedback = useFeedback();

  useEffect(() => {
    // Permission for BarcodeScanner
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    
    // Current order
    route.params.order
    ? setOrder(route.params.order)
    : console.error("No order given!")
  }, []);

  // Barcode has been scanned
  const handleBarcodeScanned = ({ type, data } : BarCodeScannerResult) => {
    setScanned(true);
    setTimeout(() => { setScanned(false) }, 1000);

    // Add 1 to the picked items
    let item : OrderItem | undefined = order?.order_items.find((o: OrderItem) => o.sku == data);
    if(order && item) {
      if (item.picked_quantity != item.quantity) {
        feedback.userSuccess();
        item.picked_quantity += 1;

        // Update the whole order
        order.picked_items += 1;
      }
      else {
        feedback.showError("Item already fully picked!")
      }
    }
    else
      feedback.showError("Barcode not in order!")
  }

  if (order)
    return (
      <View style={[pickingStyle.container, appStyle.container]}>
        <View style={[pickingStyle.pickingScanner, scannerStyle.card, scannerStyle.smallContainer]}>
          {
            isFocused
            ?
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
              style={scannerStyle.small}
            />
            :
            <Loading />
          }
          
        </View>

        <Card
          style={pickingStyle.pickingItem}
          type="order"
          title={order.full_name}
          sub={order.order_date}
          amount={`${order.picked_items} / ${order.order_items.length}`}
          complete={order.picked_items == order.order_items.length} 
        />

        <ScrollView style={pickingStyle.pickingList} >
          {/* Item uit lijst halen indien gepickt */}
          { order.order_items.filter((i: OrderItem) => i.picked_quantity != i.quantity).map((i: OrderItem) => (
            <Card
              key={i.id}
              type="product"
              title={i.name}
              sub={i.sku}
              amount={`${i.picked_quantity} / ${i.quantity}`}
              complete={i.picked_quantity == i.quantity} 
            />
          ))}
        </ScrollView>

        <View style={pickingStyle.buttonHolder}>
          <Button disabled color={theme[900]} title="NEXT" onPress={() => {console.log("ORDER PICKED")}} />
        </View>
      </View>
    )
  else
    return (
      <SadPlaceholder>Order ophalen mislukt.</SadPlaceholder>
    )

}

export default OrderPicking;