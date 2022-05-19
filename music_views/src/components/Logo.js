import React from 'react';
import logo from '../images/logo.jpeg'; // Tell webpack this JS file uses this image
import '../containers/home.css';

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} className="center" alt="Logo" />;
}

export default Header;
