import { Camera } from 'expo-camera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { View, Vibration } from 'react-native';
import { scannerStyle } from '../../styles/components/scanner';
import { feedback } from '../../utils/ux';

const Scanner = ({ navigation } : any) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const detail = (params : Object = {}) => {
    navigation.navigate('Product detail', params);
  }

  const [scanned, setScanned] = useState<boolean>(false);

  // Permission for Camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Barcode has been scanned
  const handleBarcodeScanned = ({ type, data } : BarCodeScannerResult) => {
    setScanned(true);
    setTimeout(() => { setScanned(false) }, 1000);

    // Feedback (UX)
    feedback.success();

    // Navigate to the product detail page
    detail({sku: data})
  }

  // TODO: Animation of the page turning blue from the bottom
  return (
    <View style={scannerStyle.card}>
      <Camera
        style={scannerStyle.big}
        onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
      />
    </View>
  )
}

export default Scanner;