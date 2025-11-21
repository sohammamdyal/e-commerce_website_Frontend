import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../api";
import ProductGrid from "../components/ProductGrid";
import FilterBar from "../components/FilterBar";
import "../styles/Home.css";

export default function Home() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const categories = (searchParams.get("category") || "")
      .split(",")
      .filter(Boolean);

    const sort = searchParams.get("sort") || undefined;

    setLoading(true);
    fetchProducts({ category: categories.join(","), sort })
      .then((data) => {
        console.log("PRODUCT LIST:", data);
        setProducts(data);
      })
      .catch(() => setError("Something went wrong while loading products."))
      .finally(() => setLoading(false));
  }, [searchParams]);

  return (
    <div className="container-fluid py-4">
  <div className="row gx-4">

    {/* Filter Sidebar */}
    <div className="col-lg-2 col-md-3">
      <FilterBar />
    </div>

    {/* Main Products Section */}
    <main className="col-lg-10 col-md-9">
      <h1 className="mb-4 fw-bold">Our Products</h1>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <ProductGrid products={products} />
    </main>

  </div>
</div>

  );
}
