import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteCard = async () => {
    try {
      let response = await axios.delete(
        `https://dummyjson.com/products/${props.product.id}`
      );
      setIsDeleted(response.data.isDeleted);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <>
      {isDeleted ? null : (
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <div key={props.product.id} className="card">
            <img
              src={props.product.thumbnail}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.title}</h5>
              <p className="card-text">{props.product.description}</p>
              <Link to={`/products/${props.product.id}`} className="btn btn-primary">
                Details
              </Link>
              <button onClick={deleteCard} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}