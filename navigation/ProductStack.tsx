import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Products from '../screens/products/Products';
import ProductDetail from '../screens/products/ProductDetail';
import { navigationStyle } from '../styles/components/navigation';
import { neutral } from '../styles/utils/colors';

const Stack = createStackNavigator();

const ProductStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {...navigationStyle.header},
        headerTitleStyle: {...navigationStyle.headerTitle},
        headerTintColor: neutral[100]
      }}
    >
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ProductStack;