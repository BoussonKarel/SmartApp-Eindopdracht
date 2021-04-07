import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Products from '../screens/products/Products';
import ProductDetail from '../screens/products/ProductDetail';

const Stack = createStackNavigator();

const ProductStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Producten" component={Products} />
      <Stack.Screen name="Product detail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ProductStack;