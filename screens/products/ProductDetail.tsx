import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import Operation from '../../components/Operation';
import { appStyle } from '../../styles/generic';

const ProductDetail = ({ navigation } : any) => {
  return (
    <View>
      <Card type="product" title="Productnaam" sub="SKU" amount="4" />
      <Operation />
    </View>
  )
}

export default ProductDetail;