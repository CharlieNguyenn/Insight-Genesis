import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import narrowRightIcon from '../assets/icons/narrow-right.svg';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Insight Genesis" />
        </Link>
        
        <div className="header-actions">
          <Link to="/contact" className="get-in-touch">
            Get in touch
            <img src={narrowRightIcon} alt="arrow" className="touch-icon" />
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu" className="menu-icon" />
          </button>
        </div>
      </div>
      
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-items">
          <Link to="/about" className="menu-item">About Insight Genesis</Link>
          
          <div className="menu-section">
            <h3 className="menu-heading">Solutions</h3>
            <Link to="/solutions/decentralized-personal-insights" className="menu-item submenu-item">Decentralized Personal Insights ( DPI )</Link>
            <Link to="/solutions/finance" className="menu-item submenu-item">Finance</Link>
            <Link to="/solutions/health-wellness" className="menu-item submenu-item">Health & Wellness</Link>
            <Link to="/solutions/human-resource" className="menu-item submenu-item">Human Resources</Link>
            <Link to="/solutions/education" className="menu-item submenu-item">Education</Link>
          </div>
          
          <Link to="/get-ai-insight" className="menu-item">Get AI Insight</Link>
          <Link to="/staking" className="menu-item">Staking</Link>
          <Link to="/resource" className="menu-item">Resource</Link>
          <Link to="/blog" className="menu-item">Blog</Link>
          <Link to="/faq" className="menu-item">FAQ</Link>
        </div>
      </div>
      
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navigation; 