import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProductDetail from '../screens/products/ProductDetail';

import Scanner from '../screens/scanner/Scanner';

const Stack = createStackNavigator();

const ScannerStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Product detail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ScannerStack;