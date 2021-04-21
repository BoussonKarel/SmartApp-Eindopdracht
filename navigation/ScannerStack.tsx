import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProductDetail from '../screens/products/ProductDetail';

import Scanner from '../screens/scanner/Scanner';
import { navigationStyle } from '../styles/components/navigation';
import { neutral } from '../styles/utils/colors';

const Stack = createStackNavigator();

const ScannerStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {...navigationStyle.header},
        headerTitleStyle: {...navigationStyle.headerTitle},
        headerTintColor: neutral[100]
      }}
    >
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Product detail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ScannerStack;