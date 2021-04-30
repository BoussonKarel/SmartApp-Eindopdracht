import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FeedbackProvider } from './components/FeedbackProvider';

import BottomTabNavigator from './navigation/BottomTabNavigator';

const Tab = createBottomTabNavigator();

export default function App() {  
  return (
    <FeedbackProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </FeedbackProvider>
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
