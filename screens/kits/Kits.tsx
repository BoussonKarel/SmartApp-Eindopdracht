import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { appStyle } from '../../styles/generic';

const Kits = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('KitPicking');
  }

  return (
    <View style={appStyle.container}>
      <TouchableNativeFeedback onPress={detail}>
        <Card type="kit" title="[MCT] Prototyping kit" sub="KIT-HW-MCT" amount="39" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="kit" title="[MCT] Raspberry Pi kit" sub="KIT-HW-MCTPI" amount="39" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="kit" title="[IoT] Prototyping kit" sub="KIT-HW-IOT" amount="21" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="kit" title="[Devine] Arduino kit" sub="KIT-HW-DVN" amount="50" />
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={detail}>
        <Card type="kit" title="[Energiemanagement] Basiskit" sub="KIT-HW-EMG" amount="10" />
      </TouchableNativeFeedback>
    </View>
  )
}

export default Kits;