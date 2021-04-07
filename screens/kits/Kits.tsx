import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';

const Kits = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('KitPicking');
  }

  return (
    <View style={appStyle.container}>
      <Card onPress={detail} type="kit" title="[MCT] Prototyping kit" sub="KIT-HW-MCT" amount="39" />
      <Card onPress={detail} type="kit" title="[MCT] Raspberry Pi kit" sub="KIT-HW-MCTPI" amount="39" />
      <Card onPress={detail} type="kit" title="[IoT] Prototyping kit" sub="KIT-HW-IOT" amount="21" />
      <Card onPress={detail} type="kit" title="[Devine] Arduino kit" sub="KIT-HW-DVN" amount="50" />
      <Card onPress={detail} type="kit" title="[Energiemanagement] Basiskit" sub="KIT-HW-EMG" amount="10" />
    </View>
  )
}

export default Kits;