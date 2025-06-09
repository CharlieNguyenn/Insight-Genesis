import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is InSight Genesis?',
          answer: 'InSight Genesis là nền tảng kết hợp AI và Blockchain để cung cấp intelligent insights cho nhiều lĩnh vực khác nhau. Chúng tôi giúp democratize access to advanced analytics và tạo ra một hệ sinh thái phi tập trung.'
        },
        {
          question: 'How does the platform work?',
          answer: 'Nền tảng của chúng tôi sử dụng advanced machine learning algorithms chạy trên blockchain infrastructure. Dữ liệu được xử lý securely và privately, với results được verified through our decentralized network.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. Chúng tôi sử dụng end-to-end encryption và blockchain technology để đảm bảo data security và privacy. Dữ liệu của bạn never leaves your control và được processed locally whenever possible.'
        }
      ]
    },
    {
      category: 'Tokens & Staking',
      questions: [
        {
          question: 'What is IGT token?',
          answer: 'InSight Genesis Token (IGT) là native token của platform, được sử dụng cho governance, staking rewards, và payment for AI services. IGT holders có voting rights và nhiều benefits khác.'
        },
        {
          question: 'How do I stake IGT tokens?',
          answer: 'Bạn có thể stake IGT tokens through our staking page. Chọn staking period (30-365 days), deposit tokens của bạn, và start earning rewards. APY ranges từ 8% đến 25% depending on staking duration.'
        },
        {
          question: 'When can I withdraw my staked tokens?',
          answer: 'Staked tokens có lock-up period dựa trên plan bạn chọn. Sau khi period ends, bạn có thể withdraw cả principal và rewards. Early withdrawal có penalty fees.'
        }
      ]
    },
    {
      category: 'AI Services',
      questions: [
        {
          question: 'What types of AI insights can I get?',
          answer: 'Our AI platform provides insights cho Finance, Healthcare, Education, HR, và nhiều domains khác. Services include predictive analytics, pattern recognition, risk assessment, và optimization recommendations.'
        },
        {
          question: 'How accurate are the AI predictions?',
          answer: 'Our AI models achieve 90-99% accuracy depending on the use case và data quality. Chúng tôi continuously train và improve models using latest techniques và user feedback.'
        },
        {
          question: 'Can I integrate AI services into my application?',
          answer: 'Yes! Chúng tôi provide comprehensive APIs và SDKs for JavaScript, Python, và other languages. Check our Resource page for documentation và integration guides.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Which blockchains do you support?',
          answer: 'Currently, chúng tôi support Ethereum, Polygon, và Binance Smart Chain. Chúng tôi đang expanding to other networks including Solana và Cardano trong 2024.'
        },
        {
          question: 'What wallets are compatible?',
          answer: 'Platform tương thích với MetaMask, WalletConnect, Coinbase Wallet, và most popular crypto wallets. Mobile wallets cũng được support through WalletConnect protocol.'
        },
        {
          question: 'Do you have an API rate limit?',
          answer: 'Free tier có 1000 requests per month. Paid plans offer higher limits ranging từ 10K đến unlimited requests. Enterprise customers receive custom rate limits based on needs.'
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
      <section className="faq-hero">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Find answers to common questions about InSight Genesis
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-grid">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="questions-list">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div key={questionIndex} className="faq-item">
                        <button
                          className={`faq-question ${isOpen ? 'open' : ''}`}
                          onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                        >
                          <span>{item.question}</span>
                          <span className="accordion-icon">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="container">
          <div className="help-content">
            <h2>Still have questions?</h2>
            <p>Không tìm thấy câu trả lời bạn cần? Team support của chúng tôi sẵn sàng giúp đỡ!</p>
            <div className="help-buttons">
              <button className="btn btn-primary">Contact Support</button>
              <button className="btn btn-secondary">Join Discord</button>
              <button className="btn btn-outline">View Documentation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 