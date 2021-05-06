import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useFeedback } from '../../components/FeedbackProvider';
import Order from '../../models/Order';
import { placeHolderStyle } from '../../styles/components/placeholder';
import { neutral, theme } from '../../styles/utils/colors';

const OrderPickingSuccess = ({ route, navigation } : any) => {
  const [order, setOrder] = useState<Order|null>(null);

  const feedback = useFeedback();

  useEffect(() => {
    // Permission for BarcodeScanner
    if (route.params.order) {
      setOrder(route.params.order)
    }
    else {
      navigation.goBack();
      feedback.showWarning("Can't open order", "No order given.")
    }
  }, []);

  return (
    <View style={placeHolderStyle.container}>
      <MaterialCommunityIcons name="check-all" size={64} color={theme[900]} />
      <Text style={placeHolderStyle.text}>Order #{order?.order_number} succesfully picked!</Text>
      <Text style={{...placeHolderStyle.text, marginTop: 16, fontWeight: "normal"}}>Your next step would be to create a shipping label.</Text>
    </View>
  )
}

export default OrderPickingSuccess;