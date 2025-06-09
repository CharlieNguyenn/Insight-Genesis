import React, { useState } from "react";
import "./Home.css";
import arrowButton from "../assets/arrow-button.png";
import loadButton from "../assets/load-button.png";
import serviceIcon1 from "../assets/service-icon1.png";
import serviceIcon2 from "../assets/service-icon2.png";
import serviceIcon3 from "../assets/service-icon3.png";
import serviceIcon4 from "../assets/service-icon4.png";
import coreFeature1 from "../assets/core-1.png";
import coreFeature2 from "../assets/core-2.png";
import coreFeature3 from "../assets/core-3.png";

const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

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
              OWN YOUR DESTINY
              <br />
              <span className="hero-subtitle-accent">with</span> AI PERSONAL
              INSIGHTS
            </h1>
          </div>
          <a href="#" className="hero-link">
            <span>Get Your Own Insights Now</span>
            <img src={arrowButton} alt="arrow" className="arrow-icon" />
          </a>
        </div>
      </section>

      {/* Company Description */}
      <section className="company-description">
        <div className="container">
          <img src={loadButton} alt="load" className="load-button" />
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
              <div className="stat-value">$16.000.000</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Valuation</div>
              <div className="stat-value">$100.000.000</div>
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
            Building on Insight Genie’s Web2 success with proven AI tech—Insight
            Genesis empowers users to own, control, and monetize their data,
            revolutionizing self-discovery and success in the Web3 era.
            <img src={loadButton} alt="arrow" className="arrow-icon" />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="container">
          <div className="solutions-header">
            <h2 className="solutions-title">WHAT WE DO</h2>
            <p className="solutions-description">
              We harness cutting-edge AI to forecast human behavior, delivering
              powerful insights through a secure, up-to-date, and accurate data
              passport, empowering individuals with Decentralized Personal
              Insights.
            </p>
            <a href="#" className="solutions-cta">
              <span>Get Your Own Insights Now</span>
              <img src={arrowButton} alt="arrow" className="arrow-icon" />
            </a>
          </div>

          <div className="solutions-grid">
            <div className="solution-row">
              <div className="solution-title">
                <div className="solution-number">01</div>
                <h3>
                  Financial
                  <br />
                  Services
                </h3>
              </div>
              <div className="solution-description">
                <p>
                  Insight Genesis empowers{" "}
                  <span className="highlight">financial institutions</span> to
                  extend credit and reduce fraud while enabling all users,
                  including unbanked, to securely own, monetize, and{" "}
                  <span className="highlight">
                    benefit from their behavioral data.
                  </span>
                </p>
              </div>
              <div className="solution-icon">
                <img src={serviceIcon1} alt="Financial Services" />
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-title">
                <div className="solution-number">02</div>
                <h3>
                  Health &<br />
                  Wellness
                </h3>
              </div>
              <div className="solution-description">
                <p>
                  Empowering telehealth companies and users with personalized
                  health insights derived from cutting-edge AI, our
                  Decentralized Personal Insights{" "}
                  <span className="highlight">
                    inspire proactive wellness, smarter health decisions, and
                    vibrant, data-driven lives.
                  </span>
                </p>
              </div>
              <div className="solution-icon">
                <img src={serviceIcon2} alt="Health & Wellness" />
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-title">
                <div className="solution-number">03</div>
                <h3>
                  Human
                  <br />
                  Resources
                </h3>
              </div>
              <div className="solution-description">
                <p>
                  Revolutionizing enterprises and career guidance organizations,
                  our{" "}
                  <span className="highlight">
                    AI-powered Decentralized Personal Insights deliver dynamic,
                  </span>{" "}
                  data-driven solutions, inspiring precise candidate matching,
                  boosting employee engagement, and empowering individuals to
                  thrive in their careers.
                </p>
              </div>
              <div className="solution-icon">
                <img src={serviceIcon3} alt="Human Resources" />
              </div>
            </div>

            <div className="solution-row">
              <div className="solution-title">
                <div className="solution-number">04</div>
                <h3>Education</h3>
              </div>
              <div className="solution-description">
                <p>
                  Igniting the future for both educational institutions and
                  students, our AI-driven Decentralized Personal Insights
                  analyze{" "}
                  <span className="highlight">
                    interests and strengths to deliver tailored guidance,
                  </span>{" "}
                  inspiring confident career paths and empowering informed
                  choices.
                </p>
              </div>
              <div className="solution-icon">
                <img src={serviceIcon4} alt="Education" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <div className="mission-header">
            <h2 className="mission-title">OUR VISION</h2>
          </div>
          <div className="mission-content">
            <p className="mission-text">
              Insight Genesis is committed to transforming lives by delivering
              Decentralized Personal Insights (DPI) through a secure,
              Blockchain-powered platform. We enable individuals to gain deep,
              actionable intelligence about themselves for growth and
              fulfillment, while providing businesses with verified behavioral
              insights to drive progress, all built on privacy, collaboration,
              and advanced AI technology
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
          <div className="stacked-cards">
            <div
              className={`feature-card ${activeCard === 0 ? "active" : ""}`}
              onClick={() => handleCardClick(0)}
              style={{ zIndex: activeCard === 0 ? 3 : 1 }}
            >
              <div className="card-content">
                <h2>Decentralization</h2>
                <p>
                  {" "}
                  The decentralized nature of this approach empowers users to
                  control their data, reducing reliance on centralized
                  platforms. This not only enhances security but also fosters
                  trust among participants.
                </p>
                <img src={coreFeature1} alt="Decentralization" />
              </div>
            </div>

            <div
              className={`feature-card ${activeCard === 1 ? "active" : ""}`}
              onClick={() => handleCardClick(1)}
              style={{ zIndex: activeCard === 1 ? 3 : 2 }}
            >
              <div className="card-content">
                <h2>
                  Tokenization
                  <br />
                  of data
                </h2>
                <p>
                  Once collected, this data can be tokenized, transforming it
                  into digital assets that represent ownership or access rights.
                  Tokenization opens up new economic models, allowing users to
                  monetize their contributions.
                </p>
                <img src={coreFeature2} alt="Tokenization" />
              </div>
            </div>

            <div
              className={`feature-card ${activeCard === 2 ? "active" : ""}`}
              onClick={() => handleCardClick(2)}
              style={{ zIndex: activeCard === 2 ? 3 : 1 }}
            >
              <div className="card-content">
                <h2>
                  Empowering
                  <br />
                  Users
                </h2>
                <p>
                  This model not only democratizes data access but also
                  incentivizes user participation, creating a more vibrant and
                  inclusive digital economy.
                </p>
                <img src={coreFeature3} alt="Empowering Users" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Quote */}
      <section className="evolution">
        <video autoPlay muted loop className="evolution-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="evolution-overlay"></div>
        <div className="container">
          <p className="evolution-text">
            As all insights platforms continue to evolve, their role in shaping
            decentralized data ecosystems will be pivotal in driving innovation
            and user empowerment.
          </p>
        </div>
      </section>
      
             {/* Resources Section */}
       <section className="resources-section">
         <video autoPlay muted loop className="resources-video">
           <source src={bgVideo} type="video/mp4" />
         </video>
         <div className="resources-overlay"></div>
         <div className="container">
           <div className="resources-content">
             <h2 className="resources-title">RESOURCES</h2>
             <div className="resources-buttons">
               <button className="resource-btn">FAQ</button>
               <button className="resource-btn central-btn">DOCS</button>
               <button className="resource-btn">BLOG</button>
             </div>
             <div className="resources-visual">
               <div className="central-particle-effect">
                 <div className="effect-core"></div>
                 <div className="effect-particles">
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                   <div className="effect-particle"></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </section>
             {/* Social Section */}
       <section className="social-section">
         <div className="container">
           <div className="social-content">
             <div className="contact-email">
               <span className="email-text">IGAi@InsightGenesis.Ai</span>
               <img src={arrowButton} alt="arrow" className="email-arrow" />
             </div>
             <div className="social-links">
               <a href="#" className="social-link">Linkedin</a>
               <a href="#" className="social-link">Telegram</a>
               <a href="#" className="social-link">X (Twitter)</a>
             </div>
           </div>
         </div>
       </section>
      
              {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              {/* Column 1: Logo and CTA */}
              <div className="footer-column">
                <div className="footer-logo">
                  <img src={logo} alt="Insight Genesis" className="logo-image" />                  
                </div>
                <a href="#" className="footer-cta-btn">
                  <span>Get Your Own Insights Now</span>
                  <img src={arrowButton} alt="arrow" className="cta-arrow" />
                </a>
              </div>

              {/* Column 2: Solutions */}
              <div className="footer-column">
                <h3 className="footer-title">Solutions</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Decentralized Personal Insight ( DPI )</a></li>
                  <li><a href="#" className="footer-link">Financial Inclusion</a></li>
                  <li><a href="#" className="footer-link">Health & Wellness</a></li>
                  <li><a href="#" className="footer-link">Human Resource</a></li>
                  <li><a href="#" className="footer-link">Education</a></li>
                </ul>
              </div>

              {/* Column 3: Resource */}
              <div className="footer-column">
                <h3 className="footer-title">Resource</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">FAQ</a></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                  <li><a href="#" className="footer-link">Docs</a></li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="footer-column">
                <h3 className="footer-title">Contact</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Linkedin</a></li>
                  <li><a href="#" className="footer-link">Telegram Channel</a></li>
                  <li><a href="#" className="footer-link">Telegram Group Chat</a></li>
                  <li><a href="#" className="footer-link">X (Twitter)</a></li>
                  <li><a href="mailto:IGAi@insightgenesis.ai" className="footer-link">IGAi@insightgenesis.ai</a></li>
                </ul>
              </div>

              {/* Column 5: Legal */}
              <div className="footer-column">
                <h3 className="footer-title">Legal</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Terms Of Service</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
              <p className="copyright">© 2025 Insight Genesis</p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Home;
