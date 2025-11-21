import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCategories } from '../api';
import "../styles/filterbar.css";

export default function FilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  const selected = (searchParams.get("category") || "").split(",").filter(Boolean);
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    fetchCategories()
      .then(cats => setCategories(cats))
      .catch(() => setCategories([]));
  }, []);

  function setCategory(value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("category", value);
    else params.delete("category");
    setSearchParams(params);
  }

  function setSort(value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("sort", value);
    else params.delete("sort");
    setSearchParams(params);
  }

  return (
    <aside className="filter-bar shadow-sm">
      <h5 className="filter-title">Category</h5>
      <select
        className="filter-select"
        value={selected[0] || ""}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <h5 className="filter-title mt-4">Sort</h5>
      <select
        className="filter-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Default</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </aside>
  );
}
