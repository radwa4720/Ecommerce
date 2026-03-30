// src/components/products/Products.jsx
import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import productsData from '../assets/products.json';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        backgroundColor: '#0f172a',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '50px',
        color: 'white'
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-2">All Products</h1>
          <p className="text-secondary">Browse our collection</p>
        </div>

        {/* Loading */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ProductGrid products={products} />
        )}

      </div>
    </section>
  );
};

export default Products;