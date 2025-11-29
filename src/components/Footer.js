import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Jatin Jagal</p>
      <p>For more html, css, and coding tutorial - please click on the link below to subscribe my channel:</p>
      <div className="social">
        <a href="https://www.instagram.com/jatin_jagal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/jatin-jagal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556752981174" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
      <p className="address">
        <i className="fas fa-map-marker-alt"></i> 178, New Housing Board, Surendranagar, Gujarat - 363001
      </p>
      <p className="end">CopyRight &copy; By Jagal Jatin</p>
    </footer>
  );
};

export default Footer;

