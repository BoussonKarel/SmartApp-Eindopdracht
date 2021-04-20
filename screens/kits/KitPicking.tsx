import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';

const KitPicking = ({ navigation } : any) => {
  return (
    <View style={appStyle.container}>
        <View style={[scannerStyle.card, scannerStyle.smallContainer]}>
          <BarCodeScanner style={scannerStyle.small} />
        </View>
        <Card type="order" title="Productnaam" sub="SKU" amount="11" />
        <View>
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
        </View>
    </View>
  )
}

export default KitPicking;