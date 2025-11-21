// api.js
const BASE = "http://localhost:4000";

// ✅ Fetch all products (with filters)
export async function fetchProducts(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`https://e-commerce-website-backend-2-mxpy.onrender.com/api/products?${query}`);
    const data = await res.json();
  
    return Array.isArray(data) ? data : [];
  }

// ✅ Fetch single product
export async function fetchProductById(id) {
  const res = await fetch(`https://e-commerce-website-backend-2-mxpy.onrender.com/api/products/${id}`);
  return await res.json();
}

// ✅ Fetch categories
export async function fetchCategories() {
    const res = await fetch("https://e-commerce-website-backend-2-mxpy.onrender.com/api/categories");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  }
  
