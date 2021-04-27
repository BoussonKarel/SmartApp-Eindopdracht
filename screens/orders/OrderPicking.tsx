import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Vibration, Button, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
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

  const [order, setOrder] = useState<Order|null>(null);
  const [picked, setPicked] = useState<number>(0);

  const [scanned, setScanned] = useState<boolean>(false);

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
    if(item) {
      if (item.picked_quantity != item.quantity) {
        feedback.userSuccess(`Picked [${data}]`); // Feedback (UX)
        item.picked_quantity += 1;
        setPicked(picked => (picked+1))
      }
      else {
        feedback.warning("Item already fully picked!")
      }
    }
    else
      feedback.error("Barcode not in order!")
  }

  if (order)
    return (
      <View style={appStyle.container}>
        <View style={[scannerStyle.card, scannerStyle.smallContainer]}>
          <Camera onBarCodeScanned={scanned ? undefined : handleBarcodeScanned} style={scannerStyle.small} />
        </View>

        <Card
          style={pickingStyle.pickingItem}
          type="order"
          title={order.full_name}
          sub={order.order_date}
          amount={`${picked} / ${order.order_items.length}`}
          complete={picked == order.order_items.length} 
        />

        <View style={pickingStyle.pickingList} >
          { order.order_items.map((i: OrderItem) => (
            <Card
              key={i.id}
              type="product"
              title={i.name}
              sub={i.sku}
              amount={`${i.picked_quantity} / ${i.quantity}`}
              complete={i.picked_quantity == i.quantity} 
            />
          ))}
        </View>

        <View style={pickingStyle.buttonHolder}>
          <Button disabled color={theme[900]} title="NEXT" onPress={() => {console.log("ORDER PICKED")}} />
        </View>
      </View>
    )
  else
    return (
      <Text>Geen order!</Text>
    )

}

export default OrderPicking;