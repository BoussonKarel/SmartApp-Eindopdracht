import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';

const Orders = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('OrderPicking');
  }

  return (
    <View style={appStyle.container}>
      <Card onPress={detail} type="order" title="Henk de Kleine" sub="29 mrt. 2021" amount="€ 420,00" />
      <Card onPress={detail} type="order" title="Jan Van Langeghem" sub="29 mrt. 2021" amount="€ 69,99" />
      <Card onPress={detail} type="order" title="Stella Van Biervliet" sub="30 mrt. 2021" amount="€ 77,77" />
      <Card onPress={detail} type="order" title="Roekoe Postduif" sub="1 apr. 2021" amount="€ 9000,00" />
    </View>
  )
}

export default Orders;