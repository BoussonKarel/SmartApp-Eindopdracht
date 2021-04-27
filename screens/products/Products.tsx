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
  else return (
    <View style={appStyle.container}>
      <TouchableNativeFeedback onPress={() => {detail({sku: "howest-mct-rpi"})}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail({sku: "test"})}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="4" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail({sku: "abcdef"})}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail({sku: "123456"})}}>
        <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="11" />
      </TouchableNativeFeedback>
    </View>
  )
}

export default Products;