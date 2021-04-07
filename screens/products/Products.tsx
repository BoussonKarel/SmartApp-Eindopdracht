import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';

const Products = ({ navigation } : any) => {
  return (
    <View style={appStyle.container}>
      <Card type="product" title="Productnaam" sub="SKU" amount="€ 250,00" />
      <Card type="product" title="Productnaam" sub="SKU" amount="€ 250,00" />
      <Card type="product" title="Productnaam" sub="SKU" amount="€ 250,00" />
      <Card type="product" title="Productnaam" sub="SKU" amount="€ 250,00" />

      <TouchableOpacity onPress={()=> {navigation.navigate('ProductDetail')}}>
        <Text>Click for detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Products;