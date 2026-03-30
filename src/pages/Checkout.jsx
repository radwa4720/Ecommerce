import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate('/success', { replace: true });
    }, 2000);
  };

  const total = getTotalPrice() * 1.1; // with tax

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center py-4">
                <h2 className="mb-0">
                  <i className="fas fa-credit-card me-3"></i>
                  Checkout
                </h2>
                <div className="progress mt-3" style={{height: '4px'}}>
                  <div 
                    className="progress-bar bg-success" 
                    style={{width: `${step * 50}%`}}
                    role="progressbar"
                  ></div>
                </div>
              </div>

              <div className="card-body p-0">
                {step === 1 && (
                  <div className="p-5">
                    <h4 className="mb-4">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Shipping Information
                    </h4>
                    <form onSubmit={() => setStep(2)}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-bold">First Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-bold">Last Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-bold">Email *</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-bold">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="form-label fw-bold">Address *</label>
                          <textarea 
                            className="form-control" 
                            rows="2"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-bold">City *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-bold">ZIP Code *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Link to="/cart" className="btn btn-outline-secondary">
                          Back to Cart
                        </Link>
                        <button 
                          type="submit" 
                          className="btn btn-primary-custom px-5"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 2 && (
                  <div className="p-5">
                    <h4 className="mb-4">
                      <i className="fas fa-credit-card me-2 text-success"></i>
                      Payment Information
                    </h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label className="form-label fw-bold">Card Number *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="1234 5678 9012 3456"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label fw-bold">Expiry Date *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="MM/YY"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label fw-bold">CVV *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="123"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="alert alert-info">
                        <i className="fas fa-lock me-2"></i>
                        Your payment information is secure and encrypted.
                      </div>

                      <div className="d-flex justify-content-between">
                        <button 
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setStep(1)}
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="btn btn-success px-5"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-check me-2"></i>
                              Complete Order - ${total.toFixed(2)}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;