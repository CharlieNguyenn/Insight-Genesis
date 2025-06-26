import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import narrowRightIcon from '../assets/icons/narrow-right.svg';
import LoginPopup from './LoginPopup';
import ContactFormPopup from './ContactFormPopup';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sideMenuRef = useRef(null);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const { isAuthenticated, walletAddress, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  // Đóng menu khi chuyển trang
  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Insight Genesis" />
        </Link>
        
        <div className="header-actions">
          {/* <Link to="/form" className="get-in-touch">
            Get in touch
            <img src={narrowRightIcon} alt="arrow" className="touch-icon" />
          </Link> */}
          <div>
            <button 
            className='get-in-touch'
              onClick={() => setShowPopup(true)}
            >
              Get in touch
              <img src={narrowRightIcon} alt="arrow" className="touch-icon" />
            </button>
            <ContactFormPopup 
              isOpen={showPopup} 
              onClose={() => setShowPopup(false)} 
            />
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu" className="menu-icon" />
          </button>
        </div>
      </div>
      
      <div className={`side-menu ${menuOpen ? 'open' : ''}`} ref={sideMenuRef}>
        <button className="close-menu" onClick={closeMenu}>
          <span className="close-icon">×</span>
        </button>
        <div className="menu-items">
          <Link to="/" className="menu-item">About Insight Genesis</Link>
          
          <div className="menu-section">
            <h3 className="menu-heading">Solutions</h3>
            <Link to="/solutions/decentralized-personal-insights" className="menu-item submenu-item">Decentralized Personal Insights</Link>
            <Link to="/solutions/finance" className="menu-item submenu-item">Finance</Link>
            <Link to="/solutions/health-wellness" className="menu-item submenu-item">Health & Wellness</Link>
            <Link to="/solutions/human-resource" className="menu-item submenu-item">Human Resources</Link>
            <Link to="/solutions/education" className="menu-item submenu-item">Education</Link>
          </div>
          
          <Link to="/" className="menu-item">Get AI Insight</Link>
          {/* <Link to="/staking" className="menu-item">Staking</Link> */}
          <Link to="/" className="menu-item">Whitepaper</Link>
          <Link to="/blog" className="menu-item">Blog</Link>
          <Link to="/faq" className="menu-item">FAQ</Link>
          
          {/* Authentication Status */}
          {isAuthenticated && (
            <div className="menu-section">
              <h3 className="menu-heading">Account</h3>
              <button 
                className="menu-item submenu-item logout-btn" 
                onClick={handleLogout}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'inherit', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  padding: '8px 0'
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navigation;