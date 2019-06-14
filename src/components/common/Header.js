import React from 'react';
import '../../App.scss';
import logo from '../../assets/UKAFL_Logo.png';
import logodark from '../../assets/UKAFL_Logo.png';

function Header() {
  return (
    <header role="banner" className="position-absolute">
      <nav className="background-transparent background-primary-dott full-width sticky">
        <div className="top-nav">
          <div className="logo hide-l hide-xl hide-xxl">
            <a href="index.html" className="logo">
              <img className="logo-white" src={logo} alt="" />
                <img className="logo-dark" src={logodark} alt="" />
            </a>
          </div>
          <p className="nav-text"></p>

          <div className="top-nav left-menu">
            <ul className="right top-ul chevron">
              <li><a href="index.html">Home</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="services.html">Our Services</a></li>
            </ul>
          </div>

          <ul className="logo-menu">
            <a href="index.html" className="logo">
              <img className="logo-white" src={logo} alt="" />
                <img className="logo-dark" src={logodark} alt="" />
            </a>
          </ul>
          <div className="top-nav right-menu">
            <ul className="top-ul chevron">
              <li>
                <a>Products</a>
                <ul>
                  <li><a>Product 1</a></li>
                  <li><a>Product 2</a></li>
                </ul>
              </li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;