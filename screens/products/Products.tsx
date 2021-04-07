import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';

const Products = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('ProductDetail');
  }

  return (
    <View style={appStyle.container}>
      <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="5" />
      <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="4" />
      <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="5" />
      <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="11" />
    </View>
  )
}

export default Products;