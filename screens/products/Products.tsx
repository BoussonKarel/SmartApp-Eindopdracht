import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Button, Vibration } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Product from '../../models/Product';

const Products = ({ navigation } : any) => {
  const detail = (sku : string) => {
    navigation.navigate('ProductDetail', {sku: sku});
  }

  return (
    <View style={appStyle.container}>
      <TouchableNativeFeedback onPress={() => {detail("howest-mct-rpi")}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail("test")}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="4" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail("abcdef")}}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => {detail("123456")}}>
        <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="11" />
      </TouchableNativeFeedback>
    </View>
  )
}

export default Products;