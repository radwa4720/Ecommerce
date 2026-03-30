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
        i <= rating
          ? <FaStar key={i} className="text-warning" />
          : <FaRegStar key={i} className="text-secondary" />
      );
    }
    return stars;
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          backgroundColor: '#020617',
          color: 'white',
          transition: '0.3s'
        }}
      >

        {/* Image */}
        <Link to={`/product/${product.id}`} className="overflow-hidden">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{
              height: '200px',
              objectFit: 'cover',
              transition: '0.4s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        </Link>

        {/* Body */}
        <div className="card-body d-flex flex-column">

          <h6 className="fw-bold mb-2">
            <Link
              to={`/product/${product.id}`}
              className="text-white text-decoration-none"
            >
              {product.title}
            </Link>
          </h6>

          {/* Rating */}
          <div className="d-flex align-items-center mb-2">
            <div className="d-flex me-2">
              {renderStars(product.rating)}
            </div>
            <small className="text-secondary">({product.rating})</small>
          </div>

          {/* Price */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 fw-bold text-info">
              ${product.price.toFixed(2)}
            </h5>
            <span className="badge bg-dark border border-secondary">
              {product.category}
            </span>
          </div>

          {/* Button */}
          <button
            className="btn w-100 mt-auto"
            onClick={handleAddToCart}
            style={{
              background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
              color: 'white',
              border: 'none'
            }}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;