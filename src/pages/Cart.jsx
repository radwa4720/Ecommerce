// src/components/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-gray-900 text-white min-h-[60vh]">
        <div className="container mx-auto text-center">
          <i className="fas fa-shopping-cart text-6xl text-gray-500 mb-6"></i>
          <h2 className="text-3xl font-bold mb-3">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link 
            to="/products" 
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto grid gap-10 lg:grid-cols-12">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-t-lg">
              <h4 className="text-xl font-semibold flex items-center">
                <i className="fas fa-shopping-cart mr-2"></i>
                Shopping Cart ({getTotalItems()} items)
              </h4>
              {cart.length > 0 && (
                <button 
                  className="px-3 py-1 border border-white rounded hover:bg-white hover:text-gray-900 transition"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              )}
            </div>
            <div className="p-4 space-y-4">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 sticky top-20">
            <h5 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-receipt mr-2"></i> Order Summary
            </h5>
            <div className="flex justify-between mb-3">
              <span>Subtotal ({getTotalItems()} items):</span>
              <strong>${getTotalPrice().toFixed(2)}</strong>
            </div>
            <div className="flex justify-between mb-3">
              <span>Shipping:</span>
              <strong className="text-green-500">FREE</strong>
            </div>
            <div className="flex justify-between mb-4">
              <span>Tax (10%):</span>
              <strong>${(getTotalPrice() * 0.1).toFixed(2)}</strong>
            </div>
            <hr className="border-gray-600 mb-4" />
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-blue-500">
                ${(getTotalPrice() * 1.1).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                to="/checkout" 
                className="px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-center transition"
              >
                <i className="fas fa-credit-card mr-2"></i>
                Proceed to Checkout
              </Link>
              <Link 
                to="/products" 
                className="px-4 py-3 border border-blue-500 rounded-lg text-center hover:bg-blue-500 hover:text-white transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;