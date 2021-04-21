import { Camera } from 'expo-camera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Vibration } from 'react-native';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';

const Scanner = ({ navigation } : any) => {
  const detail = (sku : string) => {
    navigation.navigate('ProductDetail', {sku: sku});
  }

  const [hasPermission, setHasPermission] = useState<boolean|any>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  // Permission for BarcodeScanner
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Barcode has been scanned
  const handleBarcodeScanned = ({ type, data } : BarCodeScannerResult) => {
    setScanned(true);

    // Feedback
    console.log("Scanned product, code: " + data)
    Vibration.vibrate()
    
    // Product detail page
    detail(data);

    // After 1 second, reset the scanner
    setTimeout(() => { setScanned(false) }, 1000);
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