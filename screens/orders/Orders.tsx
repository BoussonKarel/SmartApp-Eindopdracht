import React from 'react';
import { View } from 'react-native';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Orders = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('Order picking');
  }

  return (
    <View style={appStyle.container}>
      <TouchableNativeFeedback onPress={detail}>
        <Card type="order" title="Henk de Kleine" sub="29 mrt. 2021" amount="€ 420,00" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="order" title="Jan Van Langeghem" sub="29 mrt. 2021" amount="€ 69,99" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="order" title="Stella Van Biervliet" sub="30 mrt. 2021" amount="€ 77,77" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="order" title="Roekoe Postduif" sub="1 apr. 2021" amount="€ 9000,00" />
      </TouchableNativeFeedback>
    </View>
  )
}

export default Orders;