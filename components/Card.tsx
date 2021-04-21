import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { cardStyle } from '../styles/components/card';
import { neutral } from '../styles/utils/colors';

const Card = ({ onPress, type, title, sub, amount, complete = true } : any) => {
  let iconName : any;

  switch (type) {
    case 'product':
      iconName = 'archive';
      break;
    case 'kit':
      iconName = 'cube';
      break;
    case 'order':
      iconName = 'receipt';
      break;
    default:
      iconName = 'help';
      break;
  } 

  return (
    <View style={cardStyle.card}>
      <MaterialCommunityIcons style={cardStyle.icon} name={iconName} size={24} color={neutral[500]} />
      <View style={cardStyle.text}>
        <Text style={cardStyle.title}>{title}</Text>
        <Text style={cardStyle.sub}>{sub}</Text>
      </View>
      <Text style={complete ? cardStyle.amount : [cardStyle.amount, {color: "red"}]}>{amount}</Text>
    </View>
  )
}

export default Card;