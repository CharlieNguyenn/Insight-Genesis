import React from 'react';
import './Home.css';
import arrowButton from '../assets/arrow-button.png';
import loadButton from '../assets/load-button.png';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="energy-orb"></div>
          <div className="energy-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              OWN YOUR DESTINY<br />
              <span className="hero-subtitle-accent">with</span> AI PERSONAL INSIGHTS
            </h1>
                         <a href="https://insightgenie.ai" className="hero-link">
             <span>Get Your Own Insights Now</span>
             <img src={arrowButton} alt="arrow" className="arrow-icon" />
             </a>
            
            
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="company-description">
        <div className="container">
          <img src={loadButton} alt="load" className="load-button" />
          <p className="main-description">
          Insight Genesis is the innovative Web3 arm of Insight Genie, a proven AI industry leader
          </p>

        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="title">
            <h2>ABOUT INSIGHT GENIE</h2>
          </div>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-label">Has been in operation</div>
              <div className="stat-value">SINCE 2022</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Revenue Run rate</div>
              <div className="stat-value">$16.000.000</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Valuation</div>
              <div className="stat-value">$100.000.000</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Backed by</div>
              <div className="stat-value">HSBC, Vynn Capital, Orbit Startups</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">FDA Class 2-certified</div>
              <div className="stat-value">AI technology</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">AI data verification success rate</div>
              <div className="stat-value">93%</div>
            </div>
          </div>
          <div className="additional-stats">
          Building on Insight Genie’s Web2 success with proven AI tech—Insight Genesis empowers users to own, control, and monetize their data, revolutionizing self-discovery and success in the Web3 era.          
          <img src={loadButton} alt="arrow" className="arrow-icon" />        
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="container">
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">💰</div>
              <h3>Financial Services</h3>
              <p>Insight Genesis leverages advanced AI models combined with real-time financial data to create sophisticated predictive analytics for investors, traders, and financial institutions.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🏥</div>
              <h3>Health & Wellness</h3>
              <p>Combining artificial intelligence with personal health data and lifestyle factors, Insight Genesis delivers real-time health insights, personalized wellness recommendations, and predictive health analytics.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">👥</div>
              <h3>Human Resources</h3>
              <p>Revolutionizing HR processes through Human Resources AI analysis, Insight Genesis provides cutting-edge candidate screening, performance prediction, team compatibility assessment, and workforce optimization insights.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🎓</div>
              <h3>Education</h3>
              <p>Starting from early age education analytics, Insight Genesis employs AI to create personalized learning paths, predict academic performance, and optimize educational outcomes for learners and institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <p className="mission-text">
            Insight Genesis is committed to transforming lives by delivering Decentralized Personal Insights (DPI) through a secure Blockchain infrastructure. Our cutting-edge AI algorithms provide deep Intelligent about themselves for growth and fulfillment, while providing businesses with verified behavioral insights to drive progress, all built on privacy, ethics, and technological advancement.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features">
        <div className="container">
          <div className="feature-block">
            <div className="feature-content">
              <h2>Decentralization</h2>
              <div className="feature-points">
                <div className="point">• Real-time AI insights</div>
                <div className="point">• Secure data ownership</div>
                <div className="point">• Privacy-first approach</div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="decentralization-visual">
                <div className="center-node"></div>
                <div className="outer-nodes">
                  <div className="node"></div>
                  <div className="node"></div>
                  <div className="node"></div>
                  <div className="node"></div>
                  <div className="node"></div>
                  <div className="node"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-content">
              <h2>Tokenization</h2>
              <div className="feature-grid">
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
                <div className="token-item"></div>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-content">
              <h2>Empowering Users</h2>
              <p>We make our users unlock their potential and take control of their insights digital journey.</p>
            </div>
            <div className="feature-visual">
              <div className="empowering-visual">
                <div className="user-nodes">
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                  <div className="user-node"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Quote */}
      <section className="evolution">
        <div className="container">
          <p className="evolution-text">
            As all insights platforms continue to evolve, their role in shaping decentralized data ecosystems will be pivotal in driving innovation and user empowerment.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="container">
          <div className="cta-buttons">
            <button className="cta-btn">FAQ</button>
            <button className="cta-btn">DOCS</button>
            <button className="cta-btn">BLOG</button>
          </div>
          <div className="contact-info">
            <div className="logo">IGA@InsightGenesis.AI 🌐</div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Home; 