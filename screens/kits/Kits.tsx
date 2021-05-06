import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Product from '../../models/Product';
import { appStyle } from '../../styles/generic';
import { createProductObject } from '../../utils/product';
import { woocommerce } from '../../utils/WooCommerce';

const Kits = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [kits, setKits] = useState<Product[]>([]);

  const detail = (k: Product) => {
    navigation.navigate('Kit picking');
  }

  const getKits = () => {
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
      setRefreshing(false);
    });
  }

  const refreshEvent = useCallback(() => {
    setRefreshing(true);
    getKits();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("LOADING KITS");
      setLoading(true);
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
    <FlatList
      style={appStyle.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshEvent} />
      }
      data={kits}
      renderItem={({item} : {item: Product}) =>
        <TouchableNativeFeedback key={item.id} onPress={() => {detail(item)}}>
          <Card type="kit" title={item.name} sub={item.sku ? item.sku : "-"} amount={item.stock_quantity} />
        </TouchableNativeFeedback>
      }
      keyExtractor={(product) => product.id.toString()}

      /*
        TODO IN V1.1: Page selector in Products, Kits, Orders... (prev/[current])/next)
        Now it only shows the first 10 products, orders...
      */
    />
  )
}

export default Kits;