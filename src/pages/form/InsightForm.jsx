import React, { useEffect, useState } from 'react';
import './InsightForm.css';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import arrowIcon from '../../assets/form-assets/arrow.svg';
import voiceDetectImg from '../../assets/form-assets/voice-detect.png';
import videoDetectImg from '../../assets/form-assets/video-detect.png';
import faceDetectImg1 from '../../assets/form-assets/face-detect.png';
import { useNavigate } from 'react-router-dom';

// Hàm định dạng balance từ wei sang IGAIR, làm tròn 2 chữ số thập phân
function formatIGAIR(balance) {
  if (!balance) return '0';
  const igair = Number(balance) / 1e18;
  return igair.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

// Component hiển thị trạng thái IGAIR
const IGAIRDisplay = ({ igairLoading, igairError, igairInfo, formatIGAIRPrefix = '', showPrefix = false }) => {
  if (igairLoading) {
    return <span className="igair-loading">Loading IGAIR...</span>;
  } else if (igairError) {
    return <span className="igair-error">{igairError}</span>;
  } else if (igairInfo && igairInfo.balance) {
    return (
      <span className="igair-value">
        {showPrefix ? formatIGAIRPrefix : ''}{formatIGAIR(igairInfo.balance)} IGAIR
      </span>
    );
  } else {
    return null;
  }
};

const InsightForm = () => {
  const navigate = useNavigate();
  const [igairInfo, setIgairInfo] = useState(null);
  const [igairLoading, setIgairLoading] = useState(false);
  const [igairError, setIgairError] = useState(null);

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
  
  // Fetch IGAIR info balance
  useEffect(() => {
    const fetchIGAIrInfo = async () => {
      const address = localStorage.getItem('a');
      if (!address) return;
      setIgairLoading(true);
      setIgairError(null);
      try {
        const res = await fetch(`https://api.insightgenesis.ai/info?addr=${address}`);
        if (!res.ok) throw new Error('Failed to fetch IGAIr info');
        const data = await res.json();
        setIgairInfo(data);
      } catch (err) {
        setIgairError('Failed to load IGAIr info');
      } finally {
        setIgairLoading(false);
      }
    };
    fetchIGAIrInfo();
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
        <div className='web3-balance-container'>
          <div className='web3-balance-card'>
            <div className='web3-balance-header'>
              <div className='web3-balance-icon'>
                <div className='web3-icon-inner'>💎</div>
                <div className='web3-icon-glow'></div>
              </div>
              <div className='web3-balance-info'>
                <div className='web3-balance-label'>TOTAL IGAIR</div>
                <div className='web3-balance-value'>
                  <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className="insightform-card-row">
        <div className="insightform-card" onClick={() => navigate('/insights-form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="insightform-card-icon" />
          <div className="insightform-card-title">Face Scan Analysis</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
        </div>
        <div className="insightform-card" onClick={() => navigate('/insights-form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="insightform-card-icon" />
          <div className="insightform-card-title">Voice Analysis</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
        </div>
        <div className="insightform-card" onClick={() => navigate('/insights-form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="insightform-card-icon" />
          <div className="insightform-card-title">Digital Footprint</div>
          <div>
            <IGAIRDisplay igairLoading={igairLoading} igairError={igairError} igairInfo={igairInfo} />
          </div>
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
          <button className="insightform-feature-btn" onClick={() => navigate('/insights-form/video-analysis')}>
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
          <button className="insightform-feature-btn" onClick={() => navigate('/insights-form/face-analysis')}>
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
          <button className="insightform-feature-btn" onClick={() => navigate('/insights-form/digital-footprint')}>
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