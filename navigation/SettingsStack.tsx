import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Settings from '../screens/settings/Settings';

const Stack = createStackNavigator();

const ScannerStack = ({ navigation } : any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instellingen" component={Settings} />
    </Stack.Navigator>
  )
}

export default ScannerStack;