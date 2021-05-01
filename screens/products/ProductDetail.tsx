import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Card from '../../components/Card';
import { useFeedback } from '../../components/FeedbackProvider';
import Loading from '../../components/Loading';
import Operation from '../../components/Operation';
import SadPlaceholder from '../../components/SadPlaceholder';
import Product from '../../models/Product';
import { appStyle } from '../../styles/generic';
import { createProductObject } from '../../utils/product';
import { woocommerce } from '../../utils/WooCommerce';

const ProductDetail = ({ route, navigation } : any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();
  const [stockOperation, setStockOperation] = useState<number>(0);
  
  const getProduct = (id: number) => {
    console.log("LOADING Product detail, by id");
    // Product ophalen adhv id
    setLoading(true);

    woocommerce.get.product(id)
    .then(response => {
      if (!response.code) {
        const p : Product = createProductObject(response);
        setProduct(p)
        setStockOperation(0);

        // Stop the loading indicator
        setLoading(false);
      }
      else {
        feedback.showWarning(`${response.data.status}`, `Could not find a product with SKU ""`)
        navigation.goBack();
      }
    });
  }

  const getProductBySKU = (sku: string) => {
    console.log("LOADING Product detail, by SKU");
    // Product ophalen adhv id
      setLoading(true);
  
      woocommerce.get.products({sku: sku})
      .then(response => {  
        if (!response.code) {
          if (response.length > 0) {
            const p : Product = createProductObject(response[0]);
            setProduct(p)
            setStockOperation(0);
    
            // Stop the loading indicator
            setLoading(false);
          }
          else {
            feedback.showWarning("Not found", `Could not find a product with SKU "${sku}"`)
            navigation.goBack();
          }
        }
      });
    }

  useEffect(() => {
    // getProduct(route.params.id);
  }, []);

  const feedback = useFeedback();

  useFocusEffect(
    useCallback(() => {
      // Adhv id
      if (route.params && route.params.id) {
        getProduct(route.params.id);
      }
      else if (route.params && route.params.sku) {
        getProductBySKU(route.params.sku);
      }
      else {
        feedback.showWarning("Can't get product", "No id / sku given.")
        navigation.goBack();
      }
    }, [])
  );

  const saveChanges = () => {
    if (product) {
      console.log("Current stock:", product.stock_quantity)
      console.log("Operation:", stockOperation);
      const newStock = product.stock_quantity + stockOperation;
      console.log("-----");
      console.log("New stock:", newStock);

      const data = {
        stock_quantity: newStock
      }

      woocommerce.put.product(product.id, data)
      .then((response) => {
        if (response.code) {
          feedback.showWarning(`ERROR ${response.data.status}`, `Kon product niet updaten.`)
        }
      });

      // Stock succesvol geupdate
      // welke feedback hier tonen?
      feedback.showWarning("Stock geüpdate", `[${product.sku}]\n${product.stock_quantity} > ${newStock}`);
      navigation.goBack();
    }
  }

  if (loading) return ( <Loading /> )
  else if (!product) return (
    <SadPlaceholder>Product not found.</SadPlaceholder>
  )
  else return (
    <View>
      <Card type="product" title={product.name} sub={product.sku} amount={product.stock_quantity} />
      <Operation
        subtract={() => {setStockOperation(s => s-1)}}
        add={() => {setStockOperation(s => s+1)}}
        save={saveChanges}
      >
        {stockOperation}
      </Operation>
    </View>
  )
}

export default ProductDetail;