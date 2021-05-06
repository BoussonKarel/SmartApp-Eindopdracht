import React from 'react';
import SadPlaceholder from '../../components/SadPlaceholder';

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