import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Vibration } from 'react-native';
import { scannerStyle } from '../../styles/components/scanner';
import { appStyle } from '../../styles/generic';

const Scanner = ({ navigation } : any) => {
  const detail = () => {
    navigation.navigate('ProductDetail');
  }

  const [hasPermission, setHasPermission] = useState<boolean|any>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  // Permission for BarcodeScanner
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
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
    detail();

    // After 1 second, reset the scanner
    setTimeout(() => { setScanned(false) }, 1000);
  }

  // TODO: Animation of the page turning blue from the bottom
  return (
    <View style={scannerStyle.card}>
      <BarCodeScanner style={scannerStyle.big} onBarCodeScanned={scanned ? undefined : handleBarcodeScanned} />
    </View>
  )
}

export default Scanner;