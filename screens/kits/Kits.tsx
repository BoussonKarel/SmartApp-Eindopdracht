import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Product from '../../models/Product';
import { appStyle } from '../../styles/generic';
import { createProductObject } from '../../utils/product';
import { woocommerce } from '../../utils/WooCommerce';

const Kits = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [kits, setKits] = useState<Product[]>([]);

  const detail = (k: Product) => {
    navigation.navigate('Kit picking');
  }

  const getKits = () => {
    setLoading(true);

    woocommerce.get.products({type: 'bundle'})
    .then(response => {
      const productList : Product[] = [];

      for (let product of response) {
        productList.push(createProductObject(product));
      }

      //console.log({productList});
      setKits(productList);

      // Stop the loading indicator
      setLoading(false);
    });
  }

  useEffect(() => {
    // getProducts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("LOADING KITS");
      getKits();
    }, [])
  );

  if (loading) return ( <Loading /> )
  else if (kits.length < 1) return (
    <View style={appStyle.container}>
      <Text>No kits found.</Text>
    </View>
  )
  else return (
    <View style={appStyle.container}>

    { kits.map((k: Product) => (
      <TouchableNativeFeedback key={k.id} onPress={() => {detail(k)}}>
        <Card type="kit" title={k.name} sub={k.sku ? k.sku : "-"} amount={k.stock_quantity} />
      </TouchableNativeFeedback>
    ))}
    </View>
  )
}

export default Kits;