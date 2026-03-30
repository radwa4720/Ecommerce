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
    // Simulate API call
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 800);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const productWithQuantity = { ...product, quantity };
      addToCart(productWithQuantity);
    }
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

  if (loading) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <div className="loading-spinner" style={{width: '60px', height: '60px'}}></div>
              <p className="mt-3">Loading product details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Product Not Found</h2>
              <Link to="/products" className="btn btn-primary">Back to Products</Link>
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
          <div className="col-lg-6 mb-4">
            <div className="position-relative overflow-hidden rounded shadow-lg">
              <img 
                src={product.image} 
                alt={product.title}
                className="img-fluid w-100"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3">{product.title}</h1>
            
            <div className="d-flex align-items-center mb-4">
              <div className="d-flex me-3">
                {renderStars(product.rating)}
              </div>
              <span className="h5 fw-bold text-primary mb-0">${product.price.toFixed(2)}</span>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <h6 className="fw-bold mb-2">Category: <span className="text-muted">{product.category}</span></h6>
              <p>{product.description}</p>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">Quantity:</label>
                <div className="input-group w-75">
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number"
                    className="form-control text-center"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button 
                className="btn btn-primary-custom btn-lg px-5 me-md-2 mb-2"
                onClick={handleAddToCart}
              >
                <i className="fas fa-cart-plus me-2"></i>
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-outline-primary btn-lg px-5 mb-2">
                <i className="fas fa-shopping-cart me-2"></i>
                View Cart
              </Link>
            </div>

            <div className="mt-4">
              <Link to="/products" className="btn btn-link">
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