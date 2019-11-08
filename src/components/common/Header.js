import React, { useState } from 'react';
import '../../App.scss';
import logo from '../../assets/UKAFL_Logo.png';
import logodark from '../../assets/UKAFL_Logo.png';

function Header() {

  const [mobileNav, setMobileNav] = useState({show: false});

  const toggleBox = () => {
    setMobileNav(prevState => ({ show: !prevState.show }));
    console.log(mobileNav)
  };

  return (
    <header role="banner" className="position-absolute">
      <nav className="background-transparent background-primary-dott full-width sticky">
        <div className="top-nav">
          <div className="logo hide-l hide-xl hide-xxl">
            <a href="/" className="logo">
              <img className="logo-white" src={logo} alt="" />
              <img className="logo-dark" src={logodark} alt="" />
            </a>
          </div>
          <span onClick={toggleBox}><p className="nav-text"></p></span>

          <div className="top-nav left-menu">
            <ul className={`right top-ul chevron ${mobileNav.show ? "show-menu" : ""}`}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <ul className="logo-menu">
            <a href="#" className="logo">
              <img className="logo-white" src={logo} alt="" />
                <img className="logo-dark" src={logodark} alt="" />
            </a>
          </ul>
          <div className="top-nav right-menu">
            <ul className={`top-ul chevron ${mobileNav.show ? "show-menu" : ""}`}>
              <li>
                <ul className="top-ul chevron">
                  <li>
                    <a>Standings</a>
                    <ul>
                      <li><a href="/standings-bucs-prem">BUCS Premier Division</a></li>
                      <li><a href="/standings-bucs-1">BUCS Division One</a></li>
                    </ul>
                  </li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;