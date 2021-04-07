import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ProductStack from './ProductStack';
import KitStack from './KitStack';
import ScannerStack from './ScannerStack';
import OrderStack from './OrderStack';
import SettingsStack from './SettingsStack';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { neutral, theme } from '../styles/utils/colors';
import { navigationStyle } from '../styles/components/navigation';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Products':
              return <MaterialCommunityIcons name="archive" color={color} size={size} />
            case 'Kits':
              return <MaterialCommunityIcons name="cube" color={color} size={size} />
            case 'Scanner':
              return <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
            case 'Orders':
              return <MaterialIcons name="receipt" color={color} size={size} />
            case 'Settings':
              return <MaterialIcons name="settings" color={color} size={size} />
            default:
              return <MaterialIcons name="help" color={color} size={size} />
          }
        }
      })}

      // Wrapper rond Screen content 
      sceneContainerStyle={{}}

      //
      tabBarOptions={{
        activeTintColor: theme[900],
        inactiveTintColor: neutral[500],
        // activeBackgroundColor: '',
        // inactiveBackgroundColor: '',
        style: {...navigationStyle.tab},
        tabStyle: {...navigationStyle.tab},
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductStack}
      />
      <Tab.Screen
        name="Kits"
        component={KitStack}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerStack}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
}