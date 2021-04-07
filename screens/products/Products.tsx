import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Products = ({ navigation } : any) => {
  return (
    <View>
        <Text>Products</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('ProductDetail')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Products;