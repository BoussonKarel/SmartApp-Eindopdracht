import { Camera } from 'expo-camera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Vibration } from 'react-native';
import { scannerStyle } from '../../styles/components/scanner';
import { feedback } from '../../utils/ux';
import { useFocusEffect } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import Loading from '../../components/Loading';
import SadPlaceholder from '../../components/SadPlaceholder';

const Scanner = ({ navigation } : any) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [camera, setCamera] = useState<Camera|null>(null);

  const detail = (params : Object = {}) => {
    navigation.navigate('Product detail', params);
  }

  const [scanned, setScanned] = useState<boolean>(false);

  const isFocused = useIsFocused();

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
    feedback.userSuccess();

    // Navigate to the product detail page
    detail({sku: data})
  }

  // TODO: Animation of the page turning blue from the bottom
  return (
    <View style={scannerStyle.card}>
      {
        isFocused
        ?
        <Camera
          style={scannerStyle.big}
          onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
        />
        :
        <SadPlaceholder>Kon camera niet openen.</SadPlaceholder>
      }
    </View>
  )
}

export default Scanner;