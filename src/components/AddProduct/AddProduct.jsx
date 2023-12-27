import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    onAddProduct(newProduct);
    setNewProduct({
      name: '',
      price: 0,
      description: '',
    });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} />

        <label>Price:</label>
        <input type="number" name="price" value={newProduct.price} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={newProduct.description} onChange={handleChange} />

        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
