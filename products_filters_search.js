import { useState } from 'react';
import { getProductList } from '../utils/shopify';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    const newProducts = await getProductList(searchTerm);
    setProducts(newProducts);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search products..." />
        <button type="submit">Search</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
