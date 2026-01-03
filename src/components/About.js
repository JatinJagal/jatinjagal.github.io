import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleLetsTalk = () => {
    navigate('/contact-details');
  };

  return (
    <section className="about" id="about">
      <div className="main">
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Flutter <span>Developer</span></h5>
          <p>
            I am a Flutter Developer specializing in building cross-platform mobile applications with clean code and pixel-perfect designs. I create interactive and engaging Android applications with smooth animations and excellent user experience. My expertise includes developing dating apps, medical applications, and media sharing platforms. I focus on creating responsive and accessible applications that work seamlessly across all devices, ensuring optimal performance and user satisfaction.
          </p>
          <button type="button" onClick={handleLetsTalk}>Let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default About;

