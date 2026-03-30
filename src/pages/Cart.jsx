import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
              <h2 className="mb-3">Your cart is empty</h2>
              <p className="lead text-muted mb-4">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/products" className="btn btn-primary-custom btn-lg px-5">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="card shadow-lg mb-4">
              <div className="card-header bg-dark text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">
                    <i className="fas fa-shopping-cart me-2"></i>
                    Shopping Cart ({getTotalItems()} items)
                  </h4>
                  {cart.length > 0 && (
                    <button 
                      className="btn btn-outline-light btn-sm"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  )}
                </div>
              </div>
              <div className="card-body p-0">
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow-lg sticky-top" style={{ top: '20px' }}>
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">
                  <i className="fas fa-receipt me-2"></i>
                  Order Summary
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal ({getTotalItems()} items):</span>
                  <strong>${getTotalPrice().toFixed(2)}</strong>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <strong className="text-success">FREE</strong>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>Tax (10%):</span>
                  <strong>${(getTotalPrice() * 0.1).toFixed(2)}</strong>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="h5 mb-0">Total:</span>
                  <span className="h4 mb-0 fw-bold text-primary">
                    ${(getTotalPrice() * 1.1).toFixed(2)}
                  </span>
                </div>
                <div className="d-grid gap-2">
                  <Link 
                    to="/checkout" 
                    className="btn btn-success btn-lg fw-bold"
                  >
                    <i className="fas fa-credit-card me-2"></i>
                    Proceed to Checkout
                  </Link>
                  <Link to="/products" className="btn btn-outline-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;