import React from 'react';
import './DigitalFootprint.css';
import footPrint from '../../assets/form-assets/foot-print.svg';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import { useNavigate } from 'react-router-dom';

const DigitalFootprint = () => {
  const navigate = useNavigate();
  return (
    <div className="footprint-root">
      <header className="footprint-header">
        <h1 className="footprint-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="footprint-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="footprint-card-row">
        <div className="footprint-card" onClick={() => navigate('/form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="footprint-card-icon" />
          <div className="footprint-card-title">Face Scan Analysis</div>          
        </div>
        <div className="footprint-card" onClick={() => navigate('/form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="footprint-card-icon" />
          <div className="footprint-card-title">Voice Analysis</div>          
        </div>
        <div className="footprint-card" onClick={() => navigate('/form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="footprint-card-icon" />
          <div className="footprint-card-title">Digital Footprint</div>          
        </div>
      </div>
      <section className="footprint-section">
        <div className="footprint-section-title">
          <h2>DIGITAL FOOTPRINT</h2>
          <p>The Digital Footprints module enables improved sales conversions and enhanced risk profiles by modelling customer mobile and email usage.</p>
        </div>
        <form className="footprint-form">
          <div className="footprint-form-group">
            <label className="footprint-form-label">Full name</label>
            <input type="text" className="footprint-form-input" placeholder="John Doe" />
          </div>
          <div className="footprint-form-row">
            <div className="footprint-form-group">
              <label className="footprint-form-label">Gender</label>
              <select className="footprint-form-select">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="footprint-form-group">
              <label className="footprint-form-label">Birthdate</label>
              <input type="text" className="footprint-form-input" placeholder="dd/mm/yy" />
            </div>
          </div>
          <div className="footprint-form-group">
            <label className="footprint-form-label">Email</label>
            <input type="email" className="footprint-form-input" placeholder="john@somemail.com" />
          </div>
          <div className="footprint-form-row">
            <div className="footprint-form-group">
              <label className="footprint-form-label">Country code</label>
              <select className="footprint-form-select">
                <option value="">Code</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+81">+81 (JP)</option>
              </select>
            </div>
            <div className="footprint-form-group">
              <label className="footprint-form-label">Phone number</label>
              <input type="tel" className="footprint-form-input" placeholder="Phone number" />
            </div>
          </div>
          <p className="footprint-form-terms">
            By clicking 'Show insights', you agree to the InsightGenie's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
          <button type="submit" onClick={() => navigate('/form/result')} className="footprint-submit">Show insight</button>
        </form>
      </section>
    </div>
  );
};

export default DigitalFootprint; 