import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';

const ProductGrid = ({ products, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All'];
    products.forEach(product => {
      if (!cats.includes(product.category)) {
        cats.push(product.category);
      }
    });
    return cats;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container py-4">

      {/* 🔥 Filters */}
      <div
        className="row mb-4 p-3 rounded"
        style={{ backgroundColor: '#020617' }}
      >
        <div className="col-md-6 mb-3 mb-md-0">
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select bg-dark text-white border-secondary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🔥 Results count */}
      <div className="mb-4">
        <small className="text-secondary">
          Showing {filteredProducts.length} of {products.length} products
        </small>
      </div>

      {/* 🔥 Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-12 text-center py-5 text-white">
            <h5>No products found</h5>
            <p className="text-secondary">Try adjusting your search</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductGrid;