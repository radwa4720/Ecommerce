import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'shadow-lg' : ''}`} style={{ backgroundColor: '#020617' }}>
      
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          ShopZone
        </Link>

        {/* Toggle */}
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active text-info' : 'text-light'}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/products' ? 'active text-info' : 'text-light'}`} to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex mx-3" style={{ maxWidth: '300px', width: '100%' }}>
            <input
              className="form-control me-2 bg-dark text-white border-secondary"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-info" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Cart */}
          <Link to="/cart" className="position-relative text-decoration-none">
            <FaShoppingCart size={22} className="text-white" />
            {getTotalItems() > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {getTotalItems()}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;