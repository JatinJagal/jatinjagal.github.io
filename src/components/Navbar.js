import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Toast from './Toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/' && location.pathname !== '') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <>
      <nav>
        <h2 className="logo">Portfo<span>lio</span></h2>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a></li>
        </ul>
        <a href="#" className="btn" onClick={handleSubscribe}>Subscribe</a>
      </nav>
      <Toast 
        message="Subscribed successfully!" 
        show={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </>
  );
};

export default Navbar;

