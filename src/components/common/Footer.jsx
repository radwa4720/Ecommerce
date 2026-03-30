import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark text-light py-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5><i className="fas fa-store me-2 text-warning"></i>ShopZone</h5>
          <p className="text-muted">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>
        <div className="col-md-2 col-sm-6 mb-4">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
            <li><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
            <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <h6>Customer Service</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Shipping</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h6>Contact</h6>
          <p className="text-muted">
            <i className="fas fa-envelope me-2"></i>support@shopzone.com<br/>
            <i className="fas fa-phone me-2"></i>+1 (555) 123-4567
          </p>
        </div>
      </div>
      <hr className="my-4" />
            <div className="row">
        <div className="col-md-6">
          <p className="text-muted mb-0">&copy; 2024 ShopZone. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="text-muted me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-muted me-3"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-muted me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-muted"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;