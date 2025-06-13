import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import iconLoad from "../assets/icons/icon-load.svg";
import logo from "../assets/logo.svg";
import arrowButton from "../assets/arrow-button.png";
import loadButton from "../assets/load-button.png";
import serviceIcon1 from "../assets/service-icon1.svg";
import serviceIcon2 from "../assets/service-icon2.svg";
import serviceIcon3 from "../assets/service-icon3.svg";
import serviceIcon4 from "../assets/service-icon4.png";
import coreFeature1 from "../assets/core-1.png";
import coreFeature2 from "../assets/core-2.png";
import coreFeature3 from "../assets/core-3.png";
import viewer from "../assets/svgviewer-output.svg";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/mp4/bg-homepage1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            OWN YOUR DESTINY
            <br />
            <span className="hero-subtitle-accent">with</span> AI PERSONAL INSIGHTS
          </h1>
          <Link to="/" className="hero-link">
            <span>Get Your Own Insights Now</span>
            <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Company Description */}
      <section className="company-description">
        <div className="container">
          <img src={iconLoad} alt="load" className="load-icon" />
          <p className="main-description">
            Insight Genesis is the innovative Web3 arm of Insight Genie, a
            proven AI industry leader
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
              <div className="stat-value">$16,000,000</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Valuation</div>
              <div className="stat-value">$100,000,000</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Backed by</div>
              <div className="stat-value">
                HSBC, Vynn Capital, Orbit Startups
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">FDA Class 2-certified</div>
              <div className="stat-value">AI technology</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">
                AI data verification success rate
              </div>
              <div className="stat-value">93%</div>
            </div>
          </div>
          <div className="additional-stats">
            Building on Insight Genie's Web2 success with proven AI tech—Insight
            Genesis empowers users to own, control, and monetize their data,
            revolutionizing self-discovery and success in the Web3 era.  
            &nbsp;
            <img src={iconLoad} alt="arrow" className="load-icon" />           
          </div>          
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container">
          <div className="title">
            <h2>ABOUT INSIGHT GENIE</h2>
          </div>
          <div className="section-header">
            <h2>We harness cutting-edge AI to forecast human behavior, delivering powerful insights through a secure, up-to-date, and accurate data passport, empowering individuals with Decentralized Personal Insights.</h2>
            <Link to="/" className="cta-button">
              <span>Get Your Own Insights Now</span>
              <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="service-item">
            <div className="service-number">
              01
              <div className="line"></div>
              </div>
            <div className="content">
              <div className="service-label">
                <h1>
                  <div className="text-left"><span className="parabole-font">F</span>inancial</div>
                  <div className="services-line"><span className="parabole-font">S</span>ervices</div>
                </h1>
              </div>
              <div className="service-content">
                <p>Insight Genesis empowers <span className="highlight">financial institutions</span> to extend credit and reduce fraud while enabling all users, including unbanked, to securely own, monetize, and <span className="highlight">benefit from their behavioral data.</span></p>
              </div>
              {/* <div className="service-visual">
              </div> */}
              <div className="service-graphic financial"></div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-number">
              02
              <div className="line"></div>
              </div>
            <div className="content">
              <div className="service-label">
                <h1>
                  <div className="text-left">Health <span className="parabole-font">&</span></div>
                  <div className="services-line">W<span className="parabole-font">e</span>llness</div>
                </h1>
              </div>
            <div className="service-content">
              <p>Empowering telehealth companies and users with personalized health insights derived from cutting-edge AI, our Decentralized Personal Insights <span className="highlight">inspire proactive wellness, smarter health decisions, and vibrant, data-driven lives.</span></p>
            </div>
            <div className="service-visual">
              <div className="service-graphic health"></div>
            </div>
          </div>
          </div>

          <div className="service-item">
            <div className="service-number">
              03
              <div className="line"></div>
            </div>
            <div className="content">
              <div className="service-label">
                  <h1>
                    <div className="text-left">Human<span className="parabole-font"></span></div>
                    <div className="services-line"><span className="parabole-font">R</span>es<span className="parabole-font">o</span>urces</div>
                  </h1>
              </div>
              <div className="service-content">
              <p>Revolutionizing enterprises and career guidance organizations, our <span className="highlight">AI-powered Decentralized Personal Insights deliver dynamic,</span> data-driven solutions, inspiring precise candidate matching, boosting employee engagement, and empowering individuals to thrive in their careers.</p>
            </div>
            <div className="service-visual">
              <div className="service-graphic hr"></div>
            </div>
            </div>

          </div>

          <div className="service-item">
            <div className="service-number">
              04
              <div className="line"></div>
              </div>
              <div className="content">
                <div className="service-label">
                  <h1>
                    <div className="text-left">Education</div>
                  </h1>
                </div>
                <div className="service-content">
                <p>Igniting the future for both educational institutions and students, our AI-driven Decentralized Personal Insights analyze <span className="highlight">interests and strengths to deliver tailored guidance,</span> inspiring confident career paths and empowering informed choices.</p>
              </div>
              <div className="service-visual">
                <div className="service-graphic education"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <div className="mission-header">
            <div className="title">
              <h2>OUR VISION</h2>
            </div>
          </div>
          <div className="mission-content">
            <p className="mission-text">
              <span>Insight Genesis</span> is committed to transforming lives by delivering Decentralized Personal Insights (DPI) through a secure, Blockchain-powered platform. We enable individuals to gain deep, actionable intelligence about themselves for growth and fulfillment, while providing businesses with verified behavioral insights to drive progress, all built on privacy, collaboration, and advanced AI technology
            </p>
          </div>
          <div className="mission-commitment">
            <div className="commitment-point">
              <span className="bullet">●</span>
              <p>
                This ensures users retain full ownership and control over their
                data while fostering trust, transparency, and collaboration
                among individuals, researchers, and organizations.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features">
        <div className="container">
          <div className="feature-cards-container">
            <div className="feature-card feature-card-1" style={{backgroundColor: '#1e4d6b', color: 'white'}}>
              <h2 style={{color: 'white'}}>Decentralization</h2>
              <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>The decentralized nature of this approach empowers users to control their data, reducing reliance on centralized platforms. This not only enhances security but also fosters trust among participants.</p>
            </div>
            
            <div className="feature-card feature-card-2" style={{backgroundColor: '#153743', color: 'white'}}>
              <h2 style={{color: 'white'}}>Tokenization</h2>
              <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>Once collected, this data can be tokenized, transforming it into digital assets that represent ownership or access rights. Tokenization opens up new economic models, allowing users to monetize their contributions.</p>
            </div>
            
            <div className="feature-card feature-card-3" style={{backgroundColor: '#0c1b23', color: 'white'}}>
              <h2 style={{color: 'white'}}>Empowering Users</h2>
              <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>This model not only democratizes data access but also incentivizes user participation, creating a more vibrant and inclusive digital economy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Quote */}
      <section className="evolution">
        <video autoPlay muted loop className="evolution-video">
          <source src="/mp4/bg-homepage2.mp4" type="video/mp4" />
        </video>
        <div className="evolution-overlay"></div>
        <div className="container">
          <p className="evolution-text">
            As AI insights platforms continue to evolve, their role in shaping decentralized data ecosystems and tokenization will be pivotal in driving innovation and user empowerment.
          </p>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="resources-section">
        <video autoPlay muted loop className="resources-video">
          <source src="/mp4/bg-homepage3.mp4" type="video/mp4" />
        </video>
        <div className="resources-overlay"></div>
        <div className="container">
          <div className="resources-content">
            <h2 className="resources-title">RESOURCES</h2>
            <div className="resources-buttons">
              <Link to="/faq" className="resource-btn">FAQ</Link>
              <Link to="/docs" className="resource-btn central-btn">DOCS</Link>
              <Link to="/blog" className="resource-btn">BLOG</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <video autoPlay muted loop className="contact-video">
          <source src="/mp4/bg-homepage4.mp4" type="video/mp4" />
        </video>
        <div className="contact-overlay"></div>
        <div className="container">
          <div className="contact-content">
            <div className="contact-email">
              <a href="mailto:IGAi@InsightGenesis.Ai" className="email-link">
                <span className="email-text">IGAi@InsightGenesis.Ai</span>
                <svg className="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
