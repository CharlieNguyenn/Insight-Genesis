import React, { useState } from 'react';
import './FAQ.css';
import faqIcon from '../assets/faq-icon1.png';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is InSight Genesis?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          question: 'How does the platform work?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          question: 'What is IGT token?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      
              <section className="faq-content">
          <div className="container">
            <div className="faq-main-grid">
              <div className="faq-left-column">
                <div className="faq-title-section">
                  <h1 className="faq-main-title"><span className="parabole-font">F</span>REQUENTLY<br /><span className="parabole-font">A</span>SKED QUESTI<span className="parabole-font">O</span>NS</h1>
                </div>
                
                <div className="faq-icon-container">
                  <div className="faq-icon-background">
                    <img src={faqIcon} alt="FAQ Icon" className="faq-main-icon" />                    
                  </div>
                </div>
              </div>
              
              <div className="faq-right-column">
                <div className="faq-list">
                  {faqData.map((category, categoryIndex) => 
                    category.questions.map((item, questionIndex) => {
                      const index = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === index;
                      
                      return (
                        <div key={index} className="faq-item">
                          <button
                            className={`faq-question ${isOpen ? 'open' : ''}`}
                            onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                          >
                            <div className="question-content">
                              <div className="question-icon">
                                <div className="icon-dots">
                                  <span className="dot"></span>
                                  <span className="dot"></span>
                                  <span className="dot"></span>
                                </div>
                              </div>
                              <div className="question-text">
                                <span>{item.question}</span>
                              </div>
                            </div>
                            <span className="accordion-arrow">
                              <svg 
                                width="12" 
                                height="8" 
                                viewBox="0 0 12 8" 
                                fill="none"
                                className={isOpen ? 'rotated' : ''}
                              >
                                <path 
                                  d="M1 1.5L6 6.5L11 1.5" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                          <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default FAQ; 