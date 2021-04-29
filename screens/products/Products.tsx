import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Button, Vibration, ActivityIndicator } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Product from '../../models/Product';
import { woocommerce } from '../../utils/WooCommerce';
import { theme } from '../../styles/utils/colors';
import * as Haptics from 'expo-haptics';
import Loading from '../../components/Loading';

const Products = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const detail = (params: Object) => {
    navigation.navigate('Product detail', params);
  }

  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = () => {
    setLoading(true);

    woocommerce.get.products()
    .then(response => {
      console.log(response);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, [])

  if (loading) return ( <Loading /> )
  else if (products.length < 1) return (
    <View style={appStyle.container}>
      <Text>No products found.</Text>
    </View>
  )
  else return (
    <View style={appStyle.container}>

    { products.map((p: Product) => (
      <TouchableNativeFeedback onPress={() => {detail(p)}}>
        <Card type="product" title={p.name} sub={p.sku} amount={p.stock_quantity} />
      </TouchableNativeFeedback>
    ))}
    </View>
  )
}

export default Products;