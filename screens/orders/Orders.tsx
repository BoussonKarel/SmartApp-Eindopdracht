import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Orders = ({ navigation } : any) => {
  return (
    <View>
        <Text>Orders</Text>

        <TouchableOpacity onPress={()=> {navigation.navigate('OrderPicking')}}>
          <Text>Click for detail</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Orders;