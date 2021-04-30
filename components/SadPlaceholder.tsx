import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { appStyle } from '../styles/generic';
import { placeHolderStyle } from '../styles/components/placeholder';
import { neutral } from '../styles/utils/colors';

const SadPlaceholder = ({ children } : any) => {
  return (
    <View style={placeHolderStyle.container}>
      <MaterialCommunityIcons name="emoticon-sad-outline" size={64} color={neutral[500]} />
      <Text style={placeHolderStyle.text}>{children}</Text>
    </View>
  )
}

export default SadPlaceholder;