import React from 'react';
import './VideoAnalysis.css';
import videoDetect from '../../assets/form-assets/video-detect.png';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import { useNavigate } from 'react-router-dom';
import importIcon from '../../assets/form-assets/import-icon.svg';
const VideoAnalysis = () => {
  const navigate = useNavigate();
  return (
    <div className="video-analysis-root">
      <header className="video-analysis-header">
        <h1 className="video-analysis-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="video-analysis-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="video-analysis-card-row">
        <div className="video-analysis-card" onClick={() => navigate('/form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Face Scan Analysis</div>          
        </div>
        <div className="video-analysis-card" onClick={() => navigate('/form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Voice Analysis</div>          
        </div>
        <div className="video-analysis-card" onClick={() => navigate('/form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Digital Footprint</div>          
        </div>
      </div>
      <section className="video-analysis-section">
        <div className="video-analysis-section-title">
          <h2>VOICE ANALYSIS</h2>
          <p>Our pre-built voice module, trained on over hundreds of thousands voice samples is used by banks, insurance companies and employers to model fraud detection, job suitability and repayment intent.</p>
        </div>
        
        <div className="video-analysis-upload">
          <img src={importIcon} alt="Upload" className="video-analysis-upload-icon" />
          <div className="video-analysis-upload-text">Record Now or Upload Audio</div>
        </div>

        <div className="video-analysis-industry">
          <div className="video-analysis-industry-label">Choose your industry</div>
          <select className="video-analysis-industry-select">
            <option value="mortgage">Mortgage Lending</option>
            <option value="insurance">Insurance</option>
            <option value="banking">Banking</option>
            <option value="hr">Human Resources</option>
          </select>
        </div>

        <button onClick={() => navigate('/form/result')} className="video-analysis-submit">Show insight</button>
      </section>
    </div>
  );
};

export default VideoAnalysis; 