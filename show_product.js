// pages/product/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import { useShopify } from '../../hooks/useShopify';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useShopify();

  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.variants[0].price}</p>
    </div>
  );
};

export default ProductPage;
