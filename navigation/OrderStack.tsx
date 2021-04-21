import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Orders from '../screens/orders/Orders';
import OrderPicking from '../screens/orders/OrderPicking';
import { navigationStyle } from '../styles/components/navigation';
import { neutral } from '../styles/utils/colors';
import { useFocusEffect } from '@react-navigation/core';

const Stack = createStackNavigator();

const KitStack = ({ navigation } : any) => {
  // useFocusEffect(
  //   // Hook dat als je naar hier gaat, je op de homepage komt
    
  // ); 

  

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {...navigationStyle.header},
        headerTitleStyle: {...navigationStyle.headerTitle},
        headerTintColor: neutral[100]
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order picking" component={OrderPicking} />
    </Stack.Navigator>
  )
}

export default KitStack;