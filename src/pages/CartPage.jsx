import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './../styles/CartPage.css'; // Separate CSS file

function CartPage() {
  const { items, totalItems, totalPrice, remove, updateQty, clear } = useCart();

  return (
    <div className="page container cart-page">
      <h1 className="page-title">Your Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="shop-link">Go shopping</Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map(it => (
              <li key={it.product.id} className="cart-item">
                <img src={it.product.image} alt={it.product.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{it.product.title}</h3>
                  <div className="cart-item-price">₹{(it.product.price || 0).toFixed(2)}</div>
                  <div className="cart-item-qty">
                    Qty: 
                    <input
                      type="number"
                      min={1}
                      value={it.quantity}
                      onChange={e => updateQty(it.product.id, Number(e.target.value))}
                    />
                  </div>
                  <button className="remove-btn" onClick={() => remove(it.product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <div>Total items: <strong>{totalItems}</strong></div>
            <div>Total price: <strong>₹{totalPrice.toFixed(2)}</strong></div>
            <button className="clear-btn" onClick={clear}>Clear Cart</button>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
