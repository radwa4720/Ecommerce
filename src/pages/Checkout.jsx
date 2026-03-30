// src/components/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate('/success', { replace: true });
    }, 2000);
  };

  const total = getTotalPrice() * 1.1; // with tax

  return (
    <div className="py-20 min-h-[80vh] text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className=" rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white text-center py-6">
              <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
                <i className="fas fa-credit-card"></i> Checkout
              </h2>
              <div className="w-3/4 mx-auto mt-3 h-2 rounded-full">
                <div 
                  className="h-2 bg-green-500 rounded-full transition-all"
                  style={{ width: `${step * 50}%` }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              {step === 1 && (
                <form onSubmit={() => setStep(2)} className="space-y-6">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <i className="fas fa-user text-blue-400"></i> Shipping Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" name="firstName" placeholder="First Name *"
                      value={formData.firstName} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                      required
                    />
                    <input 
                      type="text" name="lastName" placeholder="Last Name *"
                      value={formData.lastName} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                      required
                    />
                    <input 
                      type="email" name="email" placeholder="Email *"
                      value={formData.email} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                      required
                    />
                    <input 
                      type="tel" name="phone" placeholder="Phone"
                      value={formData.phone} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                    />
                    <textarea 
                      name="address" placeholder="Address *" rows="2"
                      value={formData.address} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full md:col-span-2"
                      required
                    />
                    <input 
                      type="text" name="city" placeholder="City *"
                      value={formData.city} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                      required
                    />
                    <input 
                      type="text" name="zipCode" placeholder="ZIP Code *"
                      value={formData.zipCode} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <button type="button" onClick={() => navigate('/cart')}
                      className="px-6 py-3 border border-gray-400 rounded-lg hover:transition"
                    >
                      Back to Cart
                    </button>
                    <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition">
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <i className="fas fa-credit-card text-green-400"></i> Payment Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" name="cardNumber" placeholder="Card Number *"
                      value={formData.cardNumber} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none md:col-span-2"
                      required
                    />
                    <input 
                      type="text" name="expiry" placeholder="MM/YY *"
                      value={formData.expiry} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
                      required
                    />
                    <input 
                      type="text" name="cvv" placeholder="CVV *"
                      value={formData.cvv} onChange={handleInputChange}
                      className="p-3 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="p-3 rounded-lg flex items-center gap-2">
                    <i className="fas fa-lock"></i> Your payment information is secure and encrypted.
                  </div>
                  <div className="flex justify-between gap-4">
                    <button type="button" onClick={() => setStep(1)}
                      className="px-6 py-3 border border-gray-400 rounded-lg hover:transition"
                    >
                      Back
                    </button>
                    <button type="submit" className={`px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition flex items-center justify-center`} disabled={loading}>
                      {loading ? (
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                      ) : (
                        <>
                          Complete Order - ${total.toFixed(2)}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;