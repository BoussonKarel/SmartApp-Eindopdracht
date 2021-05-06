import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { operationStyle } from '../styles/components/operation';
import { theme } from '../styles/utils/colors';

const Operation = ({add, subtract, onValueChange, value, onSave} : {add: any, subtract: any, onValueChange: any, value: number, onSave: any}) => {
  return (
    <View style={operationStyle.card}>
      <View style={operationStyle.container}>
        {/* + */}
        <TouchableOpacity onPress={subtract}>
          <MaterialIcons style={operationStyle.operation} name="remove" size={64} color={theme[900]} />
        </TouchableOpacity>

        <TextInput
          style={operationStyle.amount}
          onChangeText={(text: string) => {
            if (text != "" && text != "-")
              onValueChange(parseInt(text))
          }}
          keyboardType="numeric"
        >
          {value}
        </TextInput>

        {/* - */}
        <TouchableOpacity onPress={add}>
          <MaterialIcons style={operationStyle.operation} name="add" size={64} color={theme[900]} />
        </TouchableOpacity>
      </View>
      <Button color={theme[900]} title="SAVE" onPress={onSave} disabled={onSave ? false : true} />
      
    </View>
  )
}

export default Operation;