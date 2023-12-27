import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  //benim route içerisinde kullandığım parametreleri getiriyor.
  let { id } = useParams();
  const [product, setProduct] = useState({})
  // const [images, setImages] = useState([])

  useEffect(() => {
    axiosGet();
  }, [])

  const axiosGet = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(response.data);
  };

  return (
    <div className="container mt-0 mt-md-5">
     
      <div className="row">
        
        <div className="card" style={{ marginRight: 18 + 'em' }}>
          <div className="card-body">
            <h5 className="card-title">{product.brand}</h5>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} TL</p>
            <a href="#" className="btn btn-primary">Satın Al</a>
          </div>
        </div>
      </div>
    </div>
  )
}