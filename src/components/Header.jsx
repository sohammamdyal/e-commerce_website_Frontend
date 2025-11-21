import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import "./../styles/header.css"

export default function Header() {
  const { totalItems, totalPrice } = useCart()

  return (
    <header className="custom-header">
  <div className="container d-flex align-items-center justify-content-between">

    <Link to="/" className="navbar-brand fs-5 fw-bold text-white">
      E-Shop
    </Link>

    <nav className="d-flex gap-4">
      <Link to="/" className="text-white text-decoration-none">Home</Link>
      <Link to="/cart" className="text-white text-decoration-none position-relative">
        Cart <span className="badge bg-warning text-dark">{totalItems}</span>
      </Link>
    </nav>

    <div className="total-price px-3 rounded fw-bold">
      ₹{totalPrice.toFixed(2)}
    </div>

  </div>
</header>

  )
}
