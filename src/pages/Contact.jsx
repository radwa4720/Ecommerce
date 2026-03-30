import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="text-center mb-5">Contact Us</h1>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center p-5">
                    <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                    <h5>Visit Us</h5>
                    <p className="text-muted">
                      123 Shopping Street<br/>
                      Commerce City, CC 12345
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center p-5">
                    <i className="fas fa-phone fa-3x text-success mb-3"></i>
                    <h5>Call Us</h5>
                    <p className="text-muted">
                      <a href="tel:+15551234567" className="text-decoration-none">
                        +1 (555) 123-4567
                      </a><br/>
                      Mon-Sat 9AM-8PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow mt-4">
              <div className="card-body p-5">
                <h4 className="mb-4">Send us a message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Subject *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Message *</label>
                      <textarea 
                        className="form-control" 
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary-custom btn-lg px-5">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;