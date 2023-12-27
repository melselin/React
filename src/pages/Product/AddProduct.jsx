import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    brand: "",
    category: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
 
  };

  const handleProductAdd = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        ...formData,
      });

      console.log("Product added successfully:", response.data);

    
      history("/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-8" style={{ margin: "auto" }}>
        {}
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleProductAdd}
          >
            Ürün ekle
          </button>
        </div>
      </div>
    </div>
  );
}