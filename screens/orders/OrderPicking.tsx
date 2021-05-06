import { useIsFocused } from '@react-navigation/core';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { useFeedback } from '../../components/FeedbackProvider';
import SadPlaceholder from '../../components/SadPlaceholder';
import Order from '../../models/Order';
import OrderItem from '../../models/OrderItem';
import { pickingStyle } from '../../styles/components/picking';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';
import { theme } from '../../styles/utils/colors';

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
    
    if (route.params.order) {
      setOrder(route.params.order)
    }
    else {
      navigation.goBack();
      feedback.showWarning("Can't open order", "No order given.")
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: `#${order?.order_number}`
    })
  }, [order])

  useEffect(() => {
    if (order) {
      setOrder(order => (sortByPicked(order!)))

      if (order?.picked_items === order?.total_items) {
        console.log("Order fully picked!")
      }
    }
  }, [order?.picked_items])

  const sortByPicked = (order: Order) : Order => {
    order.order_items.sort(
      (a, b) => {
        const aFullyPicked = a.picked_quantity === a.quantity;
        const bFullyPicked = b.picked_quantity === b.quantity;

        // Allebei volledig gepickt? Gelijk = 0
        // A volledig gepickt? Komt eerst
        return (
          aFullyPicked === bFullyPicked
          ? 0
          : (aFullyPicked ? 1 : -1)
        )
         
      }
    )

    return (order);
  }

  const orderPicked = () => {
    navigation.replace('Order picked', {order: order});
  }

  // Barcode has been scanned
  const handleBarcodeScanned = ({ type, data } : BarCodeScannerResult) => {
    setScanned(true);
    setTimeout(() => { setScanned(false) }, 1000);

    if (order) {
      // Welk item is gepickt?
      let item : OrderItem | undefined = order?.order_items.find((o: OrderItem) => o.sku == data);

      // Item gevonden?
      if (item) {
        // Is het item al genoeg gescand?
        if (item.picked_quantity != item.quantity) {
          feedback.userSuccess();
          item.picked_quantity += 1;

          // Update the picked items qty
          order.picked_items += 1
        }
        else
          feedback.showError("Item already fully picked!")
      }
      else
        feedback.showError("Barcode not in order!")
    }
    else
      feedback.showWarning("Geen order", "Er is geen order geopend.") // Deze warning wordt nooit getoond, aangezien de scanner niet getoond wordt als er geen order is.
    
  }

  if (order)
    return (
      <View style={[pickingStyle.container, appStyle.container]}>
        <View style={[pickingStyle.pickingScanner, scannerStyle.card, scannerStyle.smallContainer]}>
          {
            isFocused && hasPermission
            ?
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
              style={scannerStyle.small}
            />
            :
            <SadPlaceholder>Couldn't open camera.{"\n"}Please check your permissions / close other Camera apps.</SadPlaceholder>
          }
          
        </View>

        <Card
          style={pickingStyle.pickingItem}
          type="order"
          title={order.full_name}
          sub={order.order_date}
          amount={`${order.picked_items} / ${order.total_items}`}
          complete={order.picked_items == order.total_items} 
        />

        <ScrollView style={pickingStyle.pickingList} >
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
        </ScrollView>

        <View style={pickingStyle.buttonHolder}>
          <Button disabled={order.total_items === order.picked_items ? false : true} color={theme[900]} title="NEXT" onPress={orderPicked} />
        </View>
      </View>
    )
  else
    return (
      <SadPlaceholder>Order ophalen mislukt.</SadPlaceholder>
    )

}

export default OrderPicking;