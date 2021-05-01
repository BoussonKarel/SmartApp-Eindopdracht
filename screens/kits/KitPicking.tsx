import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Vibration, Button } from 'react-native';
import Card from '../../components/Card';
import SadPlaceholder from '../../components/SadPlaceholder';
import { pickingStyle } from '../../styles/components/picking';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';
import { theme } from '../../styles/utils/colors';

const KitPicking = ({ navigation } : any) => {
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
    <SadPlaceholder>This page is not yet implemented.</SadPlaceholder>
  )
}

export default KitPicking;