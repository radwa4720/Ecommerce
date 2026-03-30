// src/components/pages/About.jsx
import React from 'react';

const About = () => (
  <section className="about-section bg-gray-900 text-white py-20 px-4 md:px-12">
    <div className="container mx-auto text-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        About ShopZone
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-12">
        ShopZone is your trusted online marketplace offering thousands of products 
        across various categories at competitive prices.
      </p>

      {/* Features */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Fast Shipping */}
        <div className="feature-card p-6 bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
          <i className="fas fa-shipping-fast text-blue-500 text-4xl mb-4"></i>
          <h5 className="text-xl font-semibold mb-2">Fast Shipping</h5>
          <p className="text-gray-300">Get your orders delivered within 2-5 business days</p>
        </div>

        {/* Secure Payments */}
        <div className="feature-card p-6 bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
          <i className="fas fa-shield-alt text-green-500 text-4xl mb-4"></i>
          <h5 className="text-xl font-semibold mb-2">Secure Payments</h5>
          <p className="text-gray-300">SSL encryption & trusted payment gateways</p>
        </div>

        {/* 24/7 Support */}
        <div className="feature-card p-6 bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
          <i className="fas fa-headset text-yellow-400 text-4xl mb-4"></i>
          <h5 className="text-xl font-semibold mb-2">24/7 Support</h5>
          <p className="text-gray-300">Customer support available round the clock</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;