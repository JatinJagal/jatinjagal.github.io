import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate('/contact-details');
  };

  return (
    <div className="contact-me" id="contact">
      <p>Let me get you a beautiful application.</p>
      <button className="button-two" onClick={handleHireMe}>Hire Me</button>
    </div>
  );
};

export default Contact;

