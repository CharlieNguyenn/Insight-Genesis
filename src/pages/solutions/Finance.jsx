import React from 'react';
import './css/Finance.css';
import bgFinance from "../../assets/bg-finance.png";
import Footer from '../../components/Footer';

const Finance = () => {
  return (
    <div className="finance-wrapper">
      {/* Video Background và Overlay ở cấp cao nhất */}
      <video autoPlay muted loop className="finance-video-bg">
        <source src="/mp4/085e4b8dcc96a5df48e607c966bcfbfec4318516hls_abr_3_00001.mp4" type="video/mp4" />
      </video>
      <div className="finance-overlay"></div>
      
      <div className="finance-page">
        {/* Header */}
        <header className="finance-header">
          <div className="container">
            <h1 className="main-title">
              <div className="text-left"><span className="parabole-font">F</span>INANCIAL</div>
              <div className="services-line">SERVI<span className="parabole-font">C</span>ES</div>
            </h1>
          </div>
        </header>

        {/* Financial Inclusion Section */}
        <section className="financial-inclusion">
          <div className="container">
            <div className="section-grid">
              <div className="content-side">
                <div className="section-label">
                  <div className="badge-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                  </div>
                  <h1>
                    <div className="text-left"><span className="parabole-font">F</span>INANCIAL</div>
                    <div className="services-line">INCLUSI<span className="parabole-font">O</span>N</div>
                  </h1>
                </div>
                
                <h2 className="section-title">
                Enabling access to economic opportunities for the unbanked & underbanked
                </h2>

                <div className="feature-points">
                  <div className="feature-point">
                    <div className='mark'>
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>                  
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>
                    </div>
                    <p>Insight Genesis' Financial Inclusion empowers users with seamless access to financial services through AI-driven insights, while enabling companies to approve users faster and more accurately.</p>
                  </div>
                  
                  <div className="feature-point">
                    <div className='mark'>
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>                  
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>
                    </div>
                    <p>This enables financial institutions to extend credit access responsibly to new customer segments lacking traditional credit histories.</p>
                  </div>
                  
                  <div className="feature-point">
                    <div className='mark'>
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>                  
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>
                    </div>
                    <p>Genesis Score™ reduces Portfolio at Risk by 45% and can be used with or without traditional credit scores.</p>
                  </div>
                </div>
              </div>

              <div className="visual-side">
                <div className="finance-image-container">
                  <div className="finance-analysis">
                    <div className="face-scan">
                      <img src="/src/assets/facial-recognition-software 1.png" alt="Face Scan" className="scan-image" />
                      {/* <div className="scan-overlay"></div> */}
                    </div>
                    <div className="analysis-data">
                      <div className="intent-score">
                        <h3>Intent to pay back</h3>
                        <div className="score">93<span>%</span></div>
                      </div>
                      <div className="connection-line">
                        <div className='outline-dot'>
                          <div className="dot left"></div>
                        </div>
                        <div className="line"></div>
                        <div className='outline-dot'>
                          <div className="dot right"></div>
                        </div>  
                      </div>
                      <div className="burnout-metrics">
                        {Array(4).fill(null).map((_, index) => (
                          <div key={index} className="metric-row">
                            <div className="metric-info">
                              <span className="metric-label">Burnout</span>
                              <span className="metric-score">7<span>/10</span></span>
                            </div>
                            <div className="metric-bar">
                              <div className="bar-fill" style={{width: '70%'}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Risk Assessment Section */}
        <section className="credit-risk">
          <div className="container">
            <div className="section-grid">
              <div className="content-side">
                <div className="section-label">
                  <div className="badge-dots">
                      <span className="dot active"></span>
                      <span className="dot"></span>
                    </div>
                    <h1>
                      <div className="text-left">CREDIT RI<span className="parabole-font">S</span>K</div>
                      <div className="services-line">A<span className="parabole-font">S</span>SESMENT</div>
                    </h1>
                </div>
                
                <h2 className="section-title">
                  Assess individual credit risk
                </h2>

                <div className="feature-points">
                  <div className="feature-point label">
                    <p>Incorporating voice and social media analysis, we can improve traditional credit scores or negate the need altogether.</p>
                  </div>
                  
                  <div className="feature-point">
                  <div className='mark'>
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>                  
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>
                    </div>
                    <p>More tailored analysis increases credit approval by 20% for Web3 projects</p>
                  </div>
                  
                  <div className="feature-point">
                    <div className='mark'>
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>                  
                      <div className="feature-dots">
                        <span className="dot-blue"></span>
                        <span className="dot-blue"></span>
                      </div>
                    </div>
                    <p>Easily integrates with traditional credit scores or other financial data</p>
                  </div>
                </div>

                <a href="/form" className="cta-button">
                  Get Your Own Insights Now
                  <span className="button-arrow">→</span>
                </a>
              </div>

              <div className="visual-side">
                <div className="risk-assessment">
                  <div className="risk-header">
                    <div className="risk-title">Personal loan lending default probability</div>
                  </div>
                  
                  <div className="circular-progress">
                    <div className="progress-circle">
                      <div className="main-percentage">36%</div>
                    </div>
                  </div>
                  
                  {/* <div className="risk-bars">
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="risk-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                  </div> */}
                  <div className='metrics'>
                    <div className="burnout-metrics">
                      {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Burnout</span>
                            <span className="metric-score">7<span>/10</span></span>
                          </div>
                          <div className="metric-bar">
                            <div className="bar-fill" style={{width: '70%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="burnout-metrics-2">
                      {Array(3).fill(null).map((_, index) => (
                        <div key={index} className="metric-row">
                          <div className="metric-info">
                            <span className="metric-label">Burnout</span>
                            <span className="metric-score">7<span>/10</span></span>
                          </div>
                          <div className="metric-bar">
                            <div className="bar-fill" style={{width: '70%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Finance;