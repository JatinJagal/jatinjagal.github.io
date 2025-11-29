import React, { useState } from 'react';
import Navbar from './Navbar';

const Hero = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!message.trim()) {
      setError('Please write a message');
      return;
    }

    // Clear error if message is valid
    setError('');

    // Create mailto link with email and message
    const email = 'jatinjagal912@gmail.com';
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(message.trim());
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
    
    // Clear the message field after submission
    setMessage('');
  };

  return (
    <div className="hero" id="home">
      <Navbar />
      <div className="content">
        <h4>Hello, my name is</h4>
        <h1>Jatin <span>Jagal</span></h1>
        <h3>I'am a Flutter Developer.</h3>
        <div className="newslatter">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              id="mail"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError(''); // Clear error when user starts typing
              }}
            />
            <input type="submit" name="submit" value="Let's Talk" />
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Hero;

