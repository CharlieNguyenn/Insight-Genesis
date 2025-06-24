import React, { useEffect } from 'react';
import './InsightForm.css';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import arrowIcon from '../../assets/form-assets/arrow.svg';
import voiceDetectImg from '../../assets/form-assets/voice-detect.png';
import videoDetectImg from '../../assets/form-assets/video-detect.png';
import faceDetectImg1 from '../../assets/form-assets/face-detect.png';
import { useNavigate } from 'react-router-dom';

const InsightForm = () => {
  const navigate = useNavigate();
  
  // useEffect để xử lý URL callback từ API
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const addressFromUrl = urlParams.get('a');
    
    if (addressFromUrl) {
      // Lưu địa chỉ từ URL vào localStorage
      localStorage.setItem('a', addressFromUrl);
      
      // Xóa parameter khỏi URL để clean up
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('a');
      window.history.replaceState({}, '', newUrl);
      
      console.log('Đã lưu địa chỉ từ API callback:', addressFromUrl);
    }
  }, []);
  
  return (
    <div className="insightform-root">
      <header className="insightform-header">
        <h1 className="insightform-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="insightform-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="insightform-card-row">
        <div className="insightform-card" onClick={() => navigate('/form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="insightform-card-icon" />
          <div className="insightform-card-title">Face Scan Analysis</div>          
        </div>
        <div className="insightform-card" onClick={() => navigate('/form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="insightform-card-icon" />
          <div className="insightform-card-title">Voice Analysis</div>          
        </div>
        <div className="insightform-card" onClick={() => navigate('/form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="insightform-card-icon" />
          <div className="insightform-card-title">Digital Footprint</div>          
        </div>
      </div>
      {/* Voice Analysis Section */}
      <section className="insightform-feature-section">
        <div className="insightform-feature-text">
          <div className="insightform-feature-label">VOICE ANALYSIS</div>
          <div className="insightform-feature-title">
            DECODE YOUR PERSONALITY WITH A <span className="blue">45 SECONDS VOICE RECORDING</span>
          </div>
          <div className="insightform-feature-desc">
            Our pre-built voice models, trained on over hundreds of thousands voice samples, is used by banks, insurance companies and employers to model fraud detection, job suitability and repayment intent.
          </div>
          <button className="insightform-feature-btn" onClick={() => navigate('/form/video-analysis')}>
            Try now &emsp;<img src={arrowIcon} alt="arrow" className="insightform-arrow" />
          </button>
        </div>
        <div className="insightform-feature-imgwrap">
          <img src={faceDetectImg1} alt="Voice Analysis" className="insightform-feature-img" />
        </div>
      </section>
      {/* Video Analysis Section */}
      <section className="insightform-feature-section" id="video-analysis-section">
        <div className="insightform-feature-text">
          <div className="insightform-feature-label">VIDEO ANALYSIS</div>
          <div className="insightform-feature-title">
            DO A <span className="blue">30 SECOND FACE SCAN</span> TO GET YOUR WELLNESS DATA
          </div>
          <div className="insightform-feature-desc">
            A 30-second video clip from a webcam or phone provides enough information for our video module to enhance your understanding of a person's physiological health and wellbeing
          </div>
          <button className="insightform-feature-btn" onClick={() => navigate('/form/face-analysis')}>
            Try now &emsp;<img src={arrowIcon} alt="arrow" className="insightform-arrow" />
          </button>
        </div>
        <div className="insightform-feature-imgwrap">
          <img src={videoDetectImg} alt="Video Analysis" className="insightform-feature-img" />
        </div>
      </section>
      {/* Digital Footprint Section */}
      <section className="insightform-feature-section">
        <div className="insightform-feature-text">
          <div className="insightform-feature-label">DIGITAL FOOTPRINT</div>
          <div className="insightform-feature-title">
            <span className="blue">ENHANCE UNDERSTANDING</span> OF YOUR BEHAVIOR AND PREFERENCES WITH DIGITAL FOOTPRINT ANALYSIS
          </div>
          <div className="insightform-feature-desc">
            The Digital Footprints module enables improved sales conversions and enhanced risk profiles by modeling customer mobile and email usage.
          </div>
          <button className="insightform-feature-btn" onClick={() => navigate('/form/digital-footprint')}>
            Try now &emsp;<img src={arrowIcon} alt="arrow" className="insightform-arrow" />
          </button>
        </div>
        <div className="insightform-feature-imgwrap">
          <img src={voiceDetectImg} alt="Digital Footprint" className="insightform-feature-img" />
        </div>
      </section>
      <footer className="insightform-footer-placeholder"></footer>
    </div>
  );
};

export default InsightForm;