import React, { useState } from 'react';
import './Contact.css';

// Import your icon images
import facebookIcon from '../assets/fb.png';
import emailIcon from '../assets/email.png';
import telegramIcon from '../assets/tg.png';

const CONTACT_LINKS = {
  facebook: 'https://www.facebook.com/your-profile', 
  email: 'mailto:your.email@example.com',
  telegram: 'https://t.me/your_telegram_username',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
     
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="contact-section-container">
      <h2 className="section-title">
        Contact Me
        <span className="section-title-underline"></span>
      </h2>

      <div className="contact-content-wrapper">
        
        {/* Left Side: Contact Form */}
        <div className="contact-form-side">
          <div className="form-box">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows={5}
              ></textarea>
              
              <button type="submit" className="form-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="contact-icons-side">
          <p className="contact-social-heading">Connect with me</p>
          
          <a 
            href={CONTACT_LINKS.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item-container"
          >
            {/* Using img tag for icon */}
            <img src={facebookIcon} alt="Facebook Icon" className="contact-icon-img" />
            <span className="contact-name">Facebook</span>
          </a>

          <a 
            href={CONTACT_LINKS.email} 
            className="contact-item-container"
          >
            {/* Using img tag for icon */}
            <img src={emailIcon} alt="Email Icon" className="contact-icon-img" />
            <span className="contact-name">Email</span>
          </a>

          <a 
            href={CONTACT_LINKS.telegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-item-container"
          >
             
            <img src={telegramIcon} alt="Telegram Icon" className="contact-icon-img" />
            <span className="contact-name">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;