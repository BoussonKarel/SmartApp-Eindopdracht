import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import Operation from '../../components/Operation';
import { appStyle } from '../../styles/generic';

const ProductDetail = ({ route, navigation } : any) => {
  // Product ophalen adhv SKU
  // Of volledige product doorsturen?
  
  return (
    <View>
      <Card type="product" title="Productnaam" sub={route.params.sku} amount="4" />
      <Operation />
    </View>
  )
}

export default ProductDetail;