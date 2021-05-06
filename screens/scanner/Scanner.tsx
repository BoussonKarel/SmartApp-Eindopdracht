import { Camera } from 'expo-camera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { scannerStyle } from '../../styles/components/scanner';
import { useIsFocused } from '@react-navigation/native';
import SadPlaceholder from '../../components/SadPlaceholder';
import { useFeedback } from '../../components/FeedbackProvider';

const Scanner = ({ navigation } : any) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);

  const isFocused = useIsFocused();

  const detail = (sku: string) => {
    navigation.navigate('Product detail', {sku: sku});
  }

  const feedback = useFeedback();

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
    detail(data)
  }

  // TODO (EXTRA): Animation of the page turning blue from the bottom
  return (
    <View style={scannerStyle.card}>
      {
        isFocused && hasPermission
        ?
        <Camera
          style={scannerStyle.big}
          onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
        />
        :
        <SadPlaceholder>Couldn't open camera.{"\n"}Please check your permissions / close other Camera apps.</SadPlaceholder>
      }
    </View>
  )
}

export default Scanner;