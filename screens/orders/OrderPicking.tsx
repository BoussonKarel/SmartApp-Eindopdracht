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
        <Card
          style={pickingStyle.pickingItem}
          type="order"
          title="Jan Vermander"
          sub="21 apr. 2021"
          amount="1 / 2"
          complete={false} 
        />

        <View style={pickingStyle.pickingList} >
          <Card type="product" title="Kit Energierichting" sub="KIT-ENERGIE" amount="1 / 1" />
          <Card type="product" title="Resistor pakket - Klein" sub="PAK-RES-11" amount="0 / 1" complete={false} />
        </View>

        <View style={pickingStyle.buttonHolder}>
          <Button disabled color={theme[900]} title="NEXT" onPress={() => {console.log("ORDER PICKED")}} />
        </View>
    </View>
  )
}

export default OrderPicking;