import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import productsData from '../assets/products.json';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          height: '70vh',
          background: 'linear-gradient(to right, #020617, #0f172a)',
          color: 'white'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">
            Welcome to ShopZone
          </h1>

          <p className="lead mb-4 text-secondary">
            Discover amazing products at unbeatable prices.  
            Fast shipping nationwide!
          </p>

          <Link
            to="/products"
            className="btn btn-lg px-5 py-3 fw-bold"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
              color: 'white',
              border: 'none'
            }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-5"
        style={{
          backgroundColor: '#0f172a',
          color: '#ffffff'
        }}
      >
        <div className="container">
          
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Featured Products</h2>
            <p className="text-secondary">Best sellers this week</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <ProductGrid products={products} isLoading={loading} />
          )}

        </div>
      </section>
    </>
  );
};

export default Home;