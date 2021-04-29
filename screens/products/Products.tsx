import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../../styles/generic';

import Card from '../../components/Card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Product from '../../models/Product';
import { woocommerce } from '../../utils/WooCommerce';
import { createProductObject } from '../../utils/product';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/core';

const Products = ({ navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const detail = (product: Product) => {
    navigation.navigate('Product detail', {id: product.id});
  }

  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = () => {
    setLoading(true);

    woocommerce.get.products()
    .then(response => {
      const productList : Product[] = [];

      for (let product of response) {
        // Only show products with managed stock
        if (product.manage_stock)
          productList.push(createProductObject(product));
      }

      console.log({productList});
      setProducts(productList);

      // Stop the loading indicator
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return ( <Loading /> )
  else if (products.length < 1) return (
    <View style={appStyle.container}>
      <Text>No products found.</Text>
    </View>
  )
  else return (
    <View style={appStyle.container}>

    { products.map((p: Product) => (
      <TouchableNativeFeedback onPress={() => {detail(p)}}>
        <Card type="product" title={p.name} sub={p.sku} amount={p.stock_quantity} />
      </TouchableNativeFeedback>
    ))}
    </View>
  )
}

export default Products;