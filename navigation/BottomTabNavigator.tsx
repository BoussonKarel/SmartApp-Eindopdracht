import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ProductStack from './ProductStack';
import KitStack from './KitStack';
import ScannerStack from './ScannerStack';
import OrderStack from './OrderStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Producten" component={ProductStack} />
        <Tab.Screen name="Kits" component={KitStack} />
        <Tab.Screen name="Scanner" component={ScannerStack} />
        <Tab.Screen name="Bestellingen" component={OrderStack} />
        <Tab.Screen name="Instellingen" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}