import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyle } from '../../styles/generic';

const Orders = ({ navigation } : any) => {
  return (
    <View style={appStyle.container}>
        <Text>Orders</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('OrderPicking')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Orders;