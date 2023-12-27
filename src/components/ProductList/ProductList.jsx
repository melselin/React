import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default ProductList;
