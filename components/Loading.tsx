import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { appStyle } from '../styles/generic';
import { theme } from '../styles/utils/colors';

const Operation = () => {
  return (
    <View style={[appStyle.container, appStyle.loadingContainer]}>
      <ActivityIndicator size="large" color={theme[900]} />
    </View>
  )
}

export default Operation;