import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Kits = ({ navigation } : any) => {
  return (
    <View>
        <Text>Kits</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('KitPicking')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Kits;