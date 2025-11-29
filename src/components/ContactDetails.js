import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ContactDetails = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="contact-details-wrapper">
      <Navbar />
      <div className="contact-details-page">
        <div className="contact-details-container">
          <button className="back-button" onClick={handleBackHome}>
            <i className="fas fa-arrow-left"></i> Back to Home
          </button>
        
        <div className="contact-details-header">
          <h1>Contact <span>Details</span></h1>
          <p>Get in touch with me</p>
        </div>

        <div className="contact-details-content">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-info">
              <h3>Phone Number</h3>
              <a href="tel:+919106677446">+91 9106677446</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info">
              <h3>Email Address</h3>
              <a href="mailto:jatinjagal912@gmail.com">jatinjagal912@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info">
              <h3>Home Address</h3>
              <p>178, New Housing Board, Surendranagar, Gujarat - 363001</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jatin-jagal/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-social-links">
          <a href="https://www.instagram.com/jatin_jagal/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jatin-jagal/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556752981174" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactDetails;

