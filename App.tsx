import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Kits from './screens/kits/Kits';
import Orders from './screens/orders/Orders';
import Products from './screens/products/Products';
import Scanner from './screens/Scanner';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Producten" component={Products} />
        <Tab.Screen name="Kits" component={Kits} />
        <Tab.Screen name="Scanner" component={Scanner} />
        <Tab.Screen name="Bestellingen" component={Orders} />
        <Tab.Screen name="Instellingen" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
