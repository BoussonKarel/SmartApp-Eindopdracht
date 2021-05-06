import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../../styles/generic';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SadPlaceholder from '../../components/SadPlaceholder';

const Settings = ({ navigation } : any) => {
  const [perPage, setPerPage] = useState<number>(10);

  // Settings opslaan
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify({
        perPage: perPage,
      }));

      const settings = await AsyncStorage.getItem('settings');
      if (settings) console.log('Settings saved:', JSON.parse(settings))
    }
    catch {
      console.error('Could not save settings.');
    }
  }

  // Settings ophalen
  const restoreSettings = async () => {
    const settings = await AsyncStorage.getItem('settings');
    if (settings) {
      const { perPage } = JSON.parse(settings);
      setPerPage(perPage);
    }
  }

  // Settings ophalen bij het openen
  useEffect(() => {
    restoreSettings();
  }, []);

  // Settings opslaan als ze wijzigen
  useEffect(() => {
    saveSettings();
  }, [perPage]);

  return (
    <View style={appStyle.container}>
        {/* TODO IN V1.1: Settings page
        Now, you get 10 result by default, which is good a small test shop with < 10 orders, products
        But if I want to use this app for real, I would need to implement this
        
        ALSO TODO IN V1.1: Page selector in Products, Kits, Orders... (prev/[current])/next)*/}
        <SadPlaceholder>This page is empty (for now...)</SadPlaceholder>
    </View>
  )
}

export default Settings;