import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="#">About</a>
      <a href="#">Support</a>
      <a href="#">Contact Us</a>
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
      <a href="#">© {new Date().getFullYear()} Centria</a>
    </div>
  );
};

export default Footer;
