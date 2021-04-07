import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

const Scanner = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('ProductDetail');
  }

  return (
    <View style={appStyle.container}>
        <TouchableOpacity onPress={detail}>
          <Text>Click to scan</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Scanner;