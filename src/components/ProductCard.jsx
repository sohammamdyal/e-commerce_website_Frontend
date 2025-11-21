import React from 'react';
import { Link } from 'react-router-dom';
import "./../styles/productCard.css"; // IMPORTANT: add CSS file

export default function ProductCard({ product }) {
  return (
    <article className="product-card">

      <Link to={`/product/${product.id}`} className="product-link">

        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-body">
          <h5 className="product-title">{product.title}</h5>

          <p className="product-price">
            ₹{(product.price || 0).toFixed(2)}
          </p>
        </div>

      </Link>

    </article>
  );
}
