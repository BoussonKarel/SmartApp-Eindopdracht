import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

const Kits = ({ navigation } : any) => {
  return (
    <View style={appStyle.container}>
        <Text>Kits</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('KitPicking')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Kits;