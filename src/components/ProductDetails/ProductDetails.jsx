import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Diğer ürün detay bilgileri */}
    </div>
  );
};

export default ProductDetail;
