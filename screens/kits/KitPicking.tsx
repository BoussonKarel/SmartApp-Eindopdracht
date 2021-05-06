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
  // TODO, IN V1.1: implement the KitPicking page, similar to the OrderPicking page
  // GET a product (type bundle) by it's ID
  // The bundles' items are stored in the "bundled_items" property
  //  bundled_item {
  //    bundled_item_id
  //    product_id
  //    quantity_min / quantity_max / **quantity_default**
  //  }
  //  ! Name is not in the object of a bundled item, so you would need to GET this too
  return (
    <SadPlaceholder>This page is not yet implemented.</SadPlaceholder>
  )
}

export default KitPicking;