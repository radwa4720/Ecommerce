import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../assets/products.json';
import { useCart } from '../context/CartContext';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 800);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
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

  // 🔄 Loading
  if (loading) {
    return (
      <div style={{ background: '#0f172a', minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container text-center text-white">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  // ❌ Not found
  if (!product) {
    return (
      <div style={{ background: '#0f172a', minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container text-center text-white">
          <h2>Product Not Found</h2>
          <Link to="/products" className="btn btn-primary-custom mt-3">
            Back to Products
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

          {/* Image */}
          <div className="col-lg-6 mb-4">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-100"
                style={{
                  height: '450px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Details */}
          <div className="col-lg-6">

            <h1 className="fw-bold mb-3">{product.title}</h1>

            {/* Rating + Price */}
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex me-3">
                {renderStars(product.rating)}
              </div>
              <h4 className="text-info fw-bold mb-0">
                ${product.price.toFixed(2)}
              </h4>
            </div>

            {/* Description */}
            <div
              className="p-3 mb-4 rounded"
              style={{ backgroundColor: '#020617' }}
            >
              <h6 className="fw-bold">
                Category: <span className="text-secondary">{product.category}</span>
              </h6>
              <p className="text-secondary">{product.description}</p>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="fw-bold mb-2">Quantity</label>

              <div className="input-group w-50">
                <button
                  className="btn btn-outline-light"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>

                <input
                  type="number"
                  className="form-control text-center bg-dark text-white border-secondary"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />

                <button
                  className="btn btn-outline-light"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">

              <button
                className="btn btn-primary-custom px-4 py-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <Link to="/cart" className="btn btn-outline-custom px-4 py-2">
                View Cart
              </Link>

            </div>

            {/* Back */}
            <div className="mt-4">
              <Link to="/products" className="text-info text-decoration-none">
                ← Back to Products
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;