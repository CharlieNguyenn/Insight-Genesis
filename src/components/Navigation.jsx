import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h2>InSight Genesis</h2>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About InSight Genesis</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Solutions</span>
            <ul className="dropdown-menu">
              <li><Link to="/solutions/finance" className="dropdown-link">Finance</Link></li>
              <li><Link to="/solutions/health-wellness" className="dropdown-link">Health & Wellness</Link></li>
              <li><Link to="/solutions/human-resource" className="dropdown-link">Human Resource</Link></li>
              <li><Link to="/solutions/education" className="dropdown-link">Education</Link></li>
              <li><Link to="/solutions/decentralized-personal-insights" className="dropdown-link">Decentralized Personal Insights</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/get-ai-insight" className="nav-link">Get AI Insight</Link>
          </li>
          <li className="nav-item">
            <Link to="/staking" className="nav-link">Staking</Link>
          </li>
          <li className="nav-item">
            <Link to="/resource" className="nav-link">Resource</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 