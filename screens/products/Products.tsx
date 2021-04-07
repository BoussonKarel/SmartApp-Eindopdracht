import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

const Products = ({ navigation } : any) => {
  return (
    <View style={appStyle.container}>
        <Text>Products</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('ProductDetail')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Products;