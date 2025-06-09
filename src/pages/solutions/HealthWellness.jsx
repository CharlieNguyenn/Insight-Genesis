import React from 'react';
import '../Solutions.css';

const HealthWellness = () => {
  return (
    <div className="solution-page health-wellness">
      <section className="solution-hero">
        <div className="container">
          <h1 className="page-title">Health & Wellness Solutions</h1>
          <p className="page-subtitle">
            AI-powered healthcare insights while preserving patient privacy
          </p>
        </div>
      </section>

      <section className="solution-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>Intelligent Healthcare Analytics</h2>
              <p>
                Revolutionize healthcare với AI-powered diagnostic tools, patient monitoring systems, 
                và personalized treatment recommendations. Our blockchain-based platform ensures 
                patient data privacy while enabling powerful analytics.
              </p>
              <ul className="feature-list">
                <li>🩺 AI Diagnostic Assistance</li>
                <li>📊 Patient Data Analytics</li>
                <li>💊 Drug Discovery & Development</li>
                <li>🔬 Medical Research Insights</li>
                <li>🏥 Hospital Operations Optimization</li>
              </ul>
            </div>
            <div className="overview-visual">
              <div className="health-visual">
                <div className="health-icon">🏥</div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Healthcare Applications</h2>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-icon">🩺</div>
              <h3>Clinical Decision Support</h3>
              <p>AI-powered diagnostic recommendations và treatment planning based on patient data</p>
            </div>
            <div className="case-card">
              <div className="case-icon">💊</div>
              <h3>Drug Discovery</h3>
              <p>Accelerate pharmaceutical research với AI-driven compound analysis</p>
            </div>
            <div className="case-card">
              <div className="case-icon">📱</div>
              <h3>Remote Patient Monitoring</h3>
              <p>Real-time health tracking và early warning systems for chronic conditions</p>
            </div>
            <div className="case-card">
              <div className="case-icon">🧬</div>
              <h3>Genomic Analysis</h3>
              <p>Personalized medicine through genetic data analysis và biomarker discovery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Healthcare Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Improved Patient Outcomes</h3>
              <p>Early disease detection và personalized treatment plans</p>
            </div>
            <div className="benefit-item">
              <h3>Enhanced Privacy</h3>
              <p>Blockchain-secured patient data với selective sharing capabilities</p>
            </div>
            <div className="benefit-item">
              <h3>Cost Reduction</h3>
              <p>Streamlined operations và reduced diagnostic errors</p>
            </div>
            <div className="benefit-item">
              <h3>Research Acceleration</h3>
              <p>Faster clinical trials và drug development processes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Healthcare with AI</h2>
            <p>Join healthcare organizations revolutionizing patient care</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Schedule Demo</button>
              <button className="btn btn-secondary">Download Case Study</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthWellness; 