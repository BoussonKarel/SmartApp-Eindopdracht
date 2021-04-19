import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { cardStyle } from '../styles/components/card';
import { operationStyle } from '../styles/components/operation';
import { neutral, theme } from '../styles/utils/colors';

const Card = ({ onPress, type, title, sub, amount } : any) => {
  return (
    <View style={operationStyle.card}>
      <View style={operationStyle.container}>
        <TouchableOpacity onPress={() => {console.log("-")}}>
          <MaterialIcons style={operationStyle.operation} name="remove" size={64} color={theme[900]} />
        </TouchableOpacity>
        <Text style={operationStyle.amount}>0</Text>
        <TouchableOpacity onPress={() => {console.log("+")}}>
          <MaterialIcons style={operationStyle.operation} name="add" size={64} color={theme[900]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={operationStyle.button} onPress={() => {console.log("SAVE")}}>
        <Text style={operationStyle.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card;