import React, { useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

export default function Homepage() {

 const [products, setProducts] = useState([]);

 useEffect(() => {
  fetchProducts();
 }, []);

 const fetchProducts = async () => {
  let response = await axios.get("https://dummyjson.com/products");
  setProducts(response.data.products);
 }

 return (
 <div className="container mt-5">
 <div className="row">
   {products.map(product =>(
     <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
     <ProductCard product={product} />
     </div>
   ))}
</div>
</div>
    
  );
}




/* <div>
      <button className='btn btn-primary'>Homepage</button>
    <br/>
    <Link to={"/about"}>About'a git</Link></div>

   const makeAsyncCall = async () => {};

  const makeHttpCall = async () => {
    //fetch("https://dummyjson.com/products")
    //  .then(response => response.json())
    //  .then(json => console.log(json)
    //  .catch(err => console.log(err));
    //zincirleme promise

    let response = await fetch("https://dummyjson.com/products")
    let json = await response.json();
    console.log(json);
  }

const myAsyncFunction = () => {
  return new Promise((resolve, reject)=>{
    resolve("HTTP");
  });
};

  useEffect(()=> {
    myAsyncFunction().then((response) => {
      console.log("İşlem başarılı cevap:", response);
    })
    .catch(error => {"İşlem başarısız:", error})
    .finally(()=> {"İşlem bitti."});
  }, []);*/