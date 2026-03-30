// src/components/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  // 🛒 Empty Cart
  if (cart.length === 0) {
    return (
      <div
        style={{
          background: '#0f172a',
          minHeight: '100vh',
          paddingTop: '120px',
          color: 'white'
        }}
      >
        <div className="container text-center">
          <h2 className="mb-3">Your cart is empty</h2>
          <p className="text-secondary mb-4">
            Looks like you haven't added anything yet.
          </p>

          <Link to="/products" className="btn btn-primary-custom px-4 py-2">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: '#0f172a',
        minHeight: '100vh',
        paddingTop: '120px',
        color: 'white'
      }}
    >
      <div className="container">

        <div className="row">

          {/* 🛍 Cart Items */}
          <div className="col-lg-8 mb-4">

            <div className="p-4 rounded" style={{ background: '#020617' }}>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">
                  Shopping Cart ({getTotalItems()} items)
                </h4>

                <button
                  className="btn btn-outline-custom"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>

              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}

            </div>

          </div>

          {/* 💳 Summary */}
          <div className="col-lg-4">

            <div
              className="p-4 rounded"
              style={{
                background: '#020617',
                position: 'sticky',
                top: '100px'
              }}
            >

              <h5 className="mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>${getTotalPrice().toFixed(2)}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <strong className="text-success">FREE</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Tax (10%):</span>
                <strong>${(getTotalPrice() * 0.1).toFixed(2)}</strong>
              </div>

              <hr style={{ borderColor: '#333' }} />

              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong className="text-info">
                  ${(getTotalPrice() * 1.1).toFixed(2)}
                </strong>
              </div>

              <div className="d-grid gap-3">

                <Link to="/checkout" className="btn btn-primary-custom">
                  Proceed to Checkout
                </Link>

                <Link to="/products" className="btn btn-outline-custom">
                  Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;