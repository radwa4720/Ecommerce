import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import productsData from '../assets/products.json';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to ShopZone
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeInUp">
            Discover amazing products at unbeatable prices. 
            Fast shipping nationwide!
          </p>
          <a href="/products" className="btn btn-light btn-lg px-5 py-3 fw-bold">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
            <p className="lead text-muted">Best sellers this week</p>
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