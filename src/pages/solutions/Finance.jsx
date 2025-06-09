import React from 'react';
import './Finance.css';

const Finance = () => {
  return (
    <div className="finance-page">
      {/* Background Particles */}
      <div className="particles-background">
        <div className="particle-cluster"></div>
      </div>

      {/* Header */}
      <header className="finance-header">
        <div className="container">
          <h1 className="main-title">
            FINANCIAL<br />
            SERVICES
          </h1>
        </div>
      </header>

      {/* Financial Inclusion Section */}
      <section className="financial-inclusion">
        <div className="container">
          <div className="section-grid">
            <div className="content-side">
              <div className="section-label">
                <span className="dot"></span>
                FINANCIAL<br />
                INCLUSION
              </div>
              
              <h2 className="section-title">
                ENABLING ACCESS TO ECONOMIC OPPORTUNITIES<br />
                FOR THE UNBANKED & UNDERBANKED
              </h2>

              <div className="feature-points">
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>Insight Genesis' Financial Inclusion empowers users with seamless access to financial services through AI-driven insights, while enabling companies to approve users faster and more accurately.</p>
                </div>
                
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>This enables financial institutions to extend credit access responsibly to new customer segments lacking traditional credit histories.</p>
                </div>
                
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>Genesis Score™ reduces Portfolio at Risk by 45% and can be used with or without traditional credit scores.</p>
                </div>
              </div>
            </div>

            <div className="visual-side">
              <div className="face-recognition">
                <div className="face-container">
                  <div className="face-image">
                    <div className="face-mesh">
                      <div className="mesh-lines"></div>
                      <div className="detection-points">
                        <div className="point point-1"></div>
                        <div className="point point-2"></div>
                        <div className="point point-3"></div>
                        <div className="point point-4"></div>
                        <div className="point point-5"></div>
                      </div>
                    </div>
                    <div className="processing-label">Processing...</div>
                  </div>
                </div>
                
                <div className="stats-panel">
                  <div className="main-stat">
                    <div className="stat-label">Intent to pay back</div>
                    <div className="stat-value">93%</div>
                  </div>
                  
                  <div className="stat-bars">
                    <div className="stat-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '75%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
                    </div>
                    
                    <div className="stat-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '60%'}}></div>
                      </div>
                      <span className="bar-value">6/10</span>
                    </div>
                    
                    <div className="stat-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '85%'}}></div>
                      </div>
                      <span className="bar-value">8/10</span>
                    </div>
                    
                    <div className="stat-bar">
                      <span className="bar-label">Burnout</span>
                      <div className="bar-container">
                        <div className="bar-fill" style={{width: '70%'}}></div>
                      </div>
                      <span className="bar-value">7/10</span>
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
                <span className="dot"></span>
                CREDIT RISK<br />
                ASSESSMENT
              </div>
              
              <h2 className="section-title">
                ASSESS INDIVIDUAL CREDIT RISK
              </h2>

              <div className="feature-points">
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>Incorporating voice and social media analysis, we can improve traditional credit scores or negate the need altogether.</p>
                </div>
                
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>More tailored analysis increases credit approval by 20% for Web3 projects</p>
                </div>
                
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <p>Easily integrates with traditional credit scores or other financial data</p>
                </div>
              </div>

              <button className="cta-button">
                Get Your Own Insights Now
                <span className="button-arrow">→</span>
              </button>
            </div>

            <div className="visual-side">
              <div className="risk-assessment">
                <div className="risk-header">
                  <div className="risk-title">Personal loan lending default probability</div>
                </div>
                
                <div className="main-percentage">36%</div>
                
                <div className="risk-bars">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance; 