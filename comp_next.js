import React from 'react';
import { useShopify } from '../hooks/useShopify';

const ProductList = () => {
  const { products } = useShopify();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.variants[0].price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
