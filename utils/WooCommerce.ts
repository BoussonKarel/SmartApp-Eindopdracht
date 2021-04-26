// @ts-ignore
import WooCommerceAPI from 'react-native-woocommerce-api';
import { cs, ck } from './secrets';

const WooCommerce = new WooCommerceAPI({
  url: 'https://dev.unikits.be', // Your store URL
  ssl: true,
  consumerKey: ck, // Your consumer secret
  consumerSecret: cs, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true
});

const API_get = async (endpoint : string, params : Object) => {
  params = {
    // per_page : 10,
    ...params
  }

  WooCommerce.get(endpoint, params)
    .then((data: any) => {
      console.log(`Fetched (${data.length}) ${endpoint}.`)
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
}

// --- Products - GET ---
export const getProducts = async (params : Object = {}) => {
  return API_get("products", params);
}

export const getOrders = async (params : Object = {}) => {
  return API_get("orders", params);
}

// --- Products - UPDATE ---
