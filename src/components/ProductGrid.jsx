import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {

  // Normalize products
  const list = Array.isArray(products)
    ? products
    : (products?.products || products?.data || []);

  if (list.length === 0)
    return <div className="empty">No products found</div>;

  return (
    <div className="row g-4">
  {list.map(p => (
    <div key={p.id} className="col-6 col-md-4 col-lg-3">
      <ProductCard product={p} />
    </div>
  ))}
</div>

  );
}
