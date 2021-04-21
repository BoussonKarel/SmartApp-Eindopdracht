import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Kits from '../screens/kits/Kits';
import KitPicking from '../screens/kits/KitPicking';
import { navigationStyle } from '../styles/components/navigation';
import { neutral } from '../styles/utils/colors';

const Stack = createStackNavigator();

const KitStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {...navigationStyle.header},
        headerTitleStyle: {...navigationStyle.headerTitle},
        headerTintColor: neutral[100]
      }}
    >
      <Stack.Screen name="Kits" component={Kits} />
      <Stack.Screen name="Kit picking" component={KitPicking} />
    </Stack.Navigator>
  )
}

export default KitStack;