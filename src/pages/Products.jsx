// src/components/products/Products.jsx
import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import productsData from '../assets/products.json';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="products-section bg-gray-900 text-white mt-50px py-16 px-4 mt:px-12 ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
            All Products
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Browse our entire collection
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <LoadingSpinner />
          </div>
        ) : (
          // Products Grid
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductGrid products={products} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;