import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Vibration, Button } from 'react-native';
import Card from '../../components/Card';
import { pickingStyle } from '../../styles/components/picking';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';
import { theme } from '../../styles/utils/colors';

const OrderPicking = ({ navigation } : any) => {
  const [hasPermission, setHasPermission] = useState<boolean|any>(null);
  const [lastBarCode, setLastBarCode] = useState<string|null>(null);

  // Permission for BarcodeScanner
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Barcode has been scanned
  const handleBarcodeScanned = ({ type, data } : BarCodeScannerResult) => {
    // Make sure the barcode isn't scanned twice
    if (data != lastBarCode) {
      setLastBarCode(data);
      // After 1s, the same barcode can be scanned again
      setTimeout(() => { setLastBarCode(null) }, 1000);

      // Feedback
      console.log("Scanned product, code: " + data)
      Vibration.vibrate()
    }
    else {
      console.log("Wait before scanning the same thing again")
    }
  }

  return (
    <View style={appStyle.container}>
        <View style={[scannerStyle.card, scannerStyle.smallContainer]}>
          <Camera onBarCodeScanned={handleBarcodeScanned} style={scannerStyle.small} />
        </View>
        <Card style={pickingStyle.pickingItem} type="order" title="Productnaam" sub="SKU" amount="11" />
        <View style={pickingStyle.pickingList} >
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
          <Card type="product" title="Productnaam" sub="SKU" amount="11" />
        </View>
        <View style={pickingStyle.buttonHolder}>
          <Button color={theme[900]} title="Volgende" onPress={() => {console.log("SAVE")}} />
        </View>
    </View>
  )
}

export default OrderPicking;