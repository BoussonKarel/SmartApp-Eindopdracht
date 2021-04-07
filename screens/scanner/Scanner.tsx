import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Scanner = ({ navigation } : any) => {
  return (
    <View>
        <Text>Scanner</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('ProductDetail')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Scanner;