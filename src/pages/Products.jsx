import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import productsData from '../assets/products.json';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">All Products</h1>
          <p className="lead">Browse our entire collection</p>
        </div>
        <ProductGrid products={products} isLoading={loading} />
      </div>
    </div>
  );
};

export default Products;