import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import { SnackBarProvider } from './utils/SnackbarProvider';

const Tab = createBottomTabNavigator();

export default function App() {  
  return (
    <SnackBarProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SnackBarProvider>
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
