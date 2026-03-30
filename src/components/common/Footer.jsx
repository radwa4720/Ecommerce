import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#020617',
        color: '#ccc',
        padding: '50px 0',
        marginTop: '50px'
      }}
    >
      <div className="container">

        <div className="row">

          {/* Logo */}
          <div className="col-md-4 mb-4">
            <h4 className="text-white fw-bold">ShopZone</h4>
            <p className="text-secondary">
              Your one-stop shop for the best products online.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h6 className="text-white">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Returns</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h6 className="text-white">Contact</h6>
            <p className="text-secondary">support@shopzone.com</p>
            <p className="text-secondary">+20 100 000 0000</p>
          </div>

        </div>

        <hr style={{ borderColor: '#333' }} />

        <div className="text-center text-secondary">
          <small>© 2026 ShopZone - Designed by Radwa</small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;