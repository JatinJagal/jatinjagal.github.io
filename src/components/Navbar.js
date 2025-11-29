import React, { useState } from 'react';
import Toast from './Toast';

const Navbar = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <>
      <nav>
        <h2 className="logo">Portfo<span>lio</span></h2>
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

