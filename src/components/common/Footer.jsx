// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4 md:px-12 mt-12">
    <div className="container mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Shop Info */}
        <div>
          <h5 className="text-xl font-bold mb-3 flex items-center">
            <i className="fas fa-store text-yellow-400 mr-2"></i> ShopZone
          </h5>
          <p className="text-gray-400">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>


        {/* Customer Service */}
        <div>
          <h6 className="text-lg font-semibold mt-3">Customer Service</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="text-lg font-semibold mt-3">Contact</h6>
          <p className="text-gray-400 mb-2">
            <i className="fas fa-envelope mr-2"></i>  support@shopzone.com
          </p>
          <p className="text-gray-400 mb-2">
            <i className="fas fa-phone mr-2"></i>  +1 (555) 123-4567
          </p>
          <div className="flex space-3 mt-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <hr className="my-11 border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>&copy; 2024 ShopZone. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with ❤️ by Radwa Khaled</p>
      </div>
    </div>
  </footer>
);

export default Footer;