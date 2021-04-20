import React from 'react';
import { View, Text, TouchableOpacity, Pressable, Button, Vibration } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Products = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('ProductDetail');
  }

  return (
    <View style={appStyle.container}>
      <TouchableNativeFeedback onPress={detail}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="product" title="Productnaam" sub="SKU" amount="4" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="product" title="Productnaam" sub="SKU" amount="5" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card onPress={detail} type="product" title="Productnaam" sub="SKU" amount="11" />
      </TouchableNativeFeedback>
    </View>
  )
}

export default Products;