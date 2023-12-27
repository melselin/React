import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
export default function Products() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		axiosGet();
	}, []);

	useEffect(() => {
		console.log("useEffect: " + products.product); 
	}, [products]); 

	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
	};

	// responsive?
	return (
		<div className="container mt-0 mt-md-5">
			<button type="button" class="btn btn-warning">
				<Link to={"/products/add"}>Ekle</Link>
			</button>
			<div className="row">
				{products.map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
}