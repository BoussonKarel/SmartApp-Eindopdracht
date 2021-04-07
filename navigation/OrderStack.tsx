import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Orders from '../screens/orders/Orders';
import OrderPicking from '../screens/orders/OrderPicking';

const Stack = createStackNavigator();

const KitStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bestellingen" component={Orders} />
      <Stack.Screen name="Order picking" component={OrderPicking} />
    </Stack.Navigator>
  )
}

export default KitStack;