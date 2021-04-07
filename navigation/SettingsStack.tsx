import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Settings from '../screens/settings/Settings';
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
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default ScannerStack;