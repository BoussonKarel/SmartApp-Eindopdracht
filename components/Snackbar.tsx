import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { snackbarStyle } from '../styles/components/snackbar';


const Snackbar = ({ closeEvent, children } : any) => {
  return (
    <View style={snackbarStyle.bar}>
      <Text style={snackbarStyle.message}>{ children }</Text>
      <TouchableOpacity onPress={closeEvent}><Text style={snackbarStyle.button}>DISMISS</Text></TouchableOpacity>
    </View>
  )
}

export default Snackbar;