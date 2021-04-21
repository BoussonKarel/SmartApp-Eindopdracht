import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Constants from 'expo-constants';

const WooCommerce = new WooCommerceRestApi({
  url: 'https://dev.unikits.be',
  consumerKey: 'consumer_key', // Secret
  consumerSecret: 'consumer_secret', // Secret
  version: 'wc/v3'
});