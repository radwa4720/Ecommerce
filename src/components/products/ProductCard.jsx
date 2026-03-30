import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? 
        <FaStar key={i} className="text-warning" /> : 
        <FaRegStar key={i} className="text-muted" />
      );
    }
    return stars;
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card product-card h-100">
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <img 
            src={product.image} 
            className="card-img-top product-image" 
            alt={product.title}
            loading="lazy"
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title fw-bold mb-2">
            <Link to={`/product/${product.id}`} className="text-dark text-decoration-none">
              {product.title}
            </Link>
          </h6>
          
          <div className="d-flex align-items-center mb-2">
            <div className="d-flex me-2">
              {renderStars(product.rating)}
            </div>
            <small className="text-muted">({product.rating})</small>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 fw-bold text-primary">${product.price.toFixed(2)}</h5>
            <span className="badge bg-light text-dark px-2 py-1">
              {product.category}
            </span>
          </div>

          <button 
            className="btn btn-primary-custom w-100 mt-auto"
            onClick={handleAddToCart}
          >
            <i className="fas fa-cart-plus me-1"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;