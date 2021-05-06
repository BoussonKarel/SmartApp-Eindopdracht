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
        {/* TODO: Uitwerken settings pagina, het selecteren van meer dan 10 resultaten per keer */}
        <SadPlaceholder>This page is empty (for now...)</SadPlaceholder>
    </View>
  )
}

export default Settings;