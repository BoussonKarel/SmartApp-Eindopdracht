import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Kits from '../screens/kits/Kits';
import KitPicking from '../screens/kits/KitPicking';

const Stack = createStackNavigator();

const KitStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kits" component={Kits} />
      <Stack.Screen name="KitPicking" component={KitPicking} />
    </Stack.Navigator>
  )
}

export default KitStack;