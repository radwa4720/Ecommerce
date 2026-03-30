import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="row align-items-center py-3 border-bottom">
      <div className="col-md-2">
        <img 
          src={item.image} 
          alt={item.title}
          className="img-fluid rounded shadow-sm"
          style={{ height: '80px', objectFit: 'cover', alignItems:'center' }}
        />
      </div>
      <div className="col-md-4">
        <h6 className="mb-1">{item.title}</h6>
        <small className="text-muted">{item.category}</small>
      </div>
      <div className="col-md-2 text-center">
        <h6 className="mb-0">${item.price.toFixed(2)}</h6>
      </div>
      <div className="col-md-2">
        <div className="d-flex align-items-center justify-content-center">
          <button 
            className="btn btn-sm btn-outline-secondary me-1"
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            <FaMinus />
          </button>
          <span className="fw-bold mx-2">{item.quantity}</span>
          <button 
            className="btn btn-sm btn-outline-secondary ms-1"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="col-md-2 text-end">
        <h6 className="mb-0">${subtotal}</h6>
        <button 
          className="btn btn-sm btn-outline-danger mt-1"
          onClick={() => removeFromCart(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;