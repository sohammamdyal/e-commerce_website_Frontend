import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api';
import { useCart } from '../context/CartContext';
import './../styles/ProductDetail.css'; // separate CSS file

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { add } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchProductById(id)
      .then(p => setProduct(p))
      .catch(err => setError(err?.message || 'Error fetching product'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="page container">Loading...</div>;
  if (error) return <div className="page container">Error: {error}</div>;
  if (!product) return <div className="page container">Product not found</div>;

  return (
    <div className="page container product-detail">
      <Link to="/" className="back-link">← Back to home</Link>

      <div className="detail-grid">
        <div className="image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="info">
          <h2 className="title">{product.title}</h2>
          <p className="price">₹{(product.price || 0).toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <button className="add-btn" onClick={() => add(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
