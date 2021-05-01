import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { cardStyle } from '../styles/components/card';
import { operationStyle } from '../styles/components/operation';
import { neutral, theme } from '../styles/utils/colors';

const Operation = ({add, subtract, save, children} : any) => {
  return (
    <View style={operationStyle.card}>
      <View style={operationStyle.container}>
        {/* + */}
        <TouchableOpacity onPress={subtract}>
          <MaterialIcons style={operationStyle.operation} name="remove" size={64} color={theme[900]} />
        </TouchableOpacity>

        <Text style={operationStyle.amount}>{children}</Text>

        {/* - */}
        <TouchableOpacity onPress={add}>
          <MaterialIcons style={operationStyle.operation} name="add" size={64} color={theme[900]} />
        </TouchableOpacity>
      </View>
      <Button color={theme[900]} title="SAVE" onPress={save} disabled={save ? false : true} />
      
    </View>
  )
}

export default Operation;