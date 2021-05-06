import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';
import { FlatList, ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Product from '../../models/Product';
import { woocommerce } from '../../utils/WooCommerce';
import { createProductObject } from '../../utils/product';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/core';
import SadPlaceholder from '../../components/SadPlaceholder';

const Products = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const [products, setProducts] = useState<Product[]>([]);

  const detail = (product: Product) => {
    navigation.navigate('Product detail', {id: product.id});
  }

  const getProducts = () => {
    woocommerce.get.products()
    .then(response => {
      const productList : Product[] = [];

      for (let product of response) {
        // Only show products with managed stock
        if (product.manage_stock)
          productList.push(createProductObject(product));
      }

      //console.log({productList});
      setProducts(productList);

      // Stop the loading indicator
      setLoading(false);
      setRefreshing(false);
    });
  }

  const refreshEvent = useCallback(() => {
    setRefreshing(true);
    getProducts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("LOADING PRODUCTS");
      setLoading(true);
      getProducts();
    }, [])
  );

  if (loading) return (
    <Loading />
  )
  else if (products.length < 1) return (
    <SadPlaceholder>No products found.</SadPlaceholder>
  )
  else return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshEvent} />
      }
      data={products}
      renderItem={({item} : {item: Product}) =>
        <TouchableNativeFeedback key={item.id} onPress={() => {detail(item)}}>
          <Card type="product" title={item.name} sub={item.sku} amount={item.stock_quantity} />
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

export default Products;