import React, { useState } from 'react';
import './ContactFormPopup.css';

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    try {
      // Gửi form qua EmailJS hoặc endpoint backend
      // Ví dụ với EmailJS (cần cấu hình thêm):
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Gửi thất bại. Vui lòng thử lại!');
    }
    setSending(false);
  };

  if (!isOpen) return null;
  
  return (
    <div className="popup-contact popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button className="popup-close" onClick={onClose}>
          ×
        </button>
        
        <div className="popup-header">
          {/* <div className="contact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
          <h2>GET IN TOUCH</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input 
              id="name"
              name="name" 
              placeholder="Your name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input 
              id="email"
              name="email" 
              type="email" 
              placeholder="david@gmail.com" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your question</label>
            <textarea 
              id="message"
              name="message" 
              placeholder="Ask me anything!" 
              value={form.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <button type="submit" className="submit-btn" disabled={sending}>
            {sending ? (
              <>
                <div className="spinner"></div>
                Đang gửi...
              </>
            ) : (
              'Send'
            )}
          </button>
          
          {sent && (
            <div className="success-msg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Sent successfully!
            </div>
          )}
          
          {error && (
            <div className="error-msg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopup;