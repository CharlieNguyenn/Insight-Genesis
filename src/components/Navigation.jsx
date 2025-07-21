import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import narrowRightIcon from '../assets/icons/narrow-right.svg';
import LoginPopup from './LoginPopup';
import ContactFormPopup from './ContactFormPopup';
import { useAuth } from '../hooks/useAuth';

// Helper: shorten wallet address
function shortAddress(addr) {
  if (!addr) return '';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// Helper: format IGAIR
function formatIGAIR(balance) {
  if (!balance) return '0';
  const igair = Number(balance) / 1e18;
  return igair.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sideMenuRef = useRef(null);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const { isAuthenticated, walletAddress, logout } = useAuth();

  // IGAIR/referral info state
  const [igairInfo, setIgairInfo] = useState(null);
  const [igairLoading, setIgairLoading] = useState(false);
  const [igairError, setIgairError] = useState(null);
  // Wallet name (handle) from localStorage
  const [walletName, setWalletName] = useState('');

  useEffect(() => {
    setWalletName(localStorage.getItem('handle') || '');
  }, [isAuthenticated, walletAddress]);

  // Fetch IGAIR/referral info async when authenticated
  useEffect(() => {
    if (!isAuthenticated || !walletAddress) return;
    let ignore = false;
    setIgairLoading(true);
    setIgairError(null);
    setIgairInfo(null);
    fetch(`https://api.insightgenesis.ai/info?addr=${walletAddress}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch IGAIR info');
        return res.json();
      })
      .then(data => {
        if (!ignore) setIgairInfo(data);
      })
      .catch(err => {
        if (!ignore) setIgairError('Failed to load IGAIR info');
      })
      .finally(() => {
        if (!ignore) setIgairLoading(false);
      });
    return () => { ignore = true; };
  }, [isAuthenticated, walletAddress]);

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
          {isAuthenticated && (
            <div className="user-info-box">
              <div className="user-info-content">
                <div className="user-info-handle">{walletName ? `@${walletName}` : ''}</div>
                <div className="user-info-address">{shortAddress(walletAddress)}</div>
                {igairLoading ? (
                  <div className="user-info-loading">Loading...</div>
                ) : igairError ? (
                  <div className="user-info-error">{igairError}</div>
                ) : igairInfo && (
                  <>
                    {/* Remove IGAIR balance line */}
                    {igairInfo.upline && (
                      <div className="user-info-upline">Upline: {shortAddress(igairInfo.upline)}</div>
                    )}
                    {igairInfo.downlines && igairInfo.downlines.length > 0 && (
                      <div className="user-info-downlines">Downlines: {igairInfo.downlines.map(shortAddress).join(', ')}</div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          {/* <Link to="/insights-form" className="get-in-touch">
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
          
          <Link to="/insights-form" className="menu-item">Get AI Insight</Link>
          {/* <Link to="/staking" className="menu-item">Staking</Link> */}
          <Link to="https://docs.insightgenesis.ai/" target="_blank" rel="noopener noreferrer" className="menu-item">Whitepaper</Link>
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