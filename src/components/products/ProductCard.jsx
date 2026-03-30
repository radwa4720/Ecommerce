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
    return [...Array(5)].map((_, i) =>
      i < Math.floor(rating) ? (
        <FaStar key={i} className="text-warning me-1" />
      ) : (
        <FaRegStar key={i} className="text-secondary me-1" />
      )
    );
  };

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div
        className="card h-100 border-0 shadow-lg product-card-custom"
        style={{
          backgroundColor: '#020617',
          color: 'white',
          borderRadius: '15px',
          overflow: 'hidden'
        }}
      >

        {/* Image */}
        <Link to={`/product/${product.id}`} className="overflow-hidden">
          <img
            src={product.image}
            className="card-img-top product-image-custom"
            alt={product.title}
          />
        </Link>

        {/* Body */}
        <div className="card-body d-flex flex-column">

          <h6 className="fw-bold mb-2">
            <Link
              to={`/product/${product.id}`}
              className="text-white text-decoration-none product-title"
            >
              {product.title}
            </Link>
          </h6>

          {/* Rating */}
          <div className="d-flex align-items-center mb-2">
            <div className="d-flex">
              {renderStars(product.rating)}
            </div>
            <small className="text-secondary ms-2">
              ({product.rating})
            </small>
          </div>

          {/* Price + Category */}
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
            className="btn btn-primary-custom w-100 mt-auto"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;