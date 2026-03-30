import React from 'react';

const About = () => (
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">About ShopZone</h1>
          <p className="lead mb-5">
            ShopZone is your trusted online marketplace offering thousands of products 
            across various categories at competitive prices.
          </p>
          
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                <h5>Fast Shipping</h5>
                <p className="text-muted">Get your orders delivered within 2-5 business days</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                <h5>Secure Payments</h5>
                <p className="text-muted">SSL encryption & trusted payment gateways</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="fas fa-headset fa-3x text-warning mb-3"></i>
                <h5>24/7 Support</h5>
                <p className="text-muted">Customer support available round the clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;