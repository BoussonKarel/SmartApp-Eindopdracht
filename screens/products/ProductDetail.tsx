import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import Operation from '../../components/Operation';
import { appStyle } from '../../styles/generic';
import { woocommerce } from '../../utils/WooCommerce';

const ProductDetail = ({ route, navigation } : any) => {
  // Product ophalen adhv SKU
  // Of volledige product doorsturen?

  useEffect(() => {
    if (route.params.sku) {
      woocommerce.get.products({sku: route.params.sku});
    }
    else {
      console.error("No SKU given!")
    }
  }, [])
  
  return (
    <View>
      <Card type="product" title="Productnaam" sub={route.params.sku} amount="4" />
      <Operation />
    </View>
  )
}

export default ProductDetail;