import React, { useState } from 'react';
import './Staking.css';

const Staking = () => {
  const [stakingAmount, setStakingAmount] = useState('');
  const [stakingPeriod, setStakingPeriod] = useState('30');

  const stakingOptions = [
    { days: 30, apy: 8, risk: 'Low', minAmount: 100 },
    { days: 90, apy: 12, risk: 'Medium', minAmount: 500 },
    { days: 180, apy: 18, risk: 'Medium', minAmount: 1000 },
    { days: 365, apy: 25, risk: 'High', minAmount: 5000 }
  ];

  const calculateRewards = () => {
    const amount = parseFloat(stakingAmount);
    const option = stakingOptions.find(opt => opt.days.toString() === stakingPeriod);
    if (!amount || !option) return 0;
    return (amount * option.apy / 100 * option.days / 365).toFixed(2);
  };

  return (
    <div className="staking">
      <section className="staking-hero">
        <div className="container">
          <h1 className="page-title">IGT Staking</h1>
          <p className="page-subtitle">
            Stake your InSight Genesis Tokens (IGT) and earn rewards while supporting the network
          </p>
        </div>
      </section>

      <section className="staking-calculator">
        <div className="container">
          <div className="calculator-container">
            <div className="calculator-form">
              <h2>Staking Calculator</h2>
              <div className="form-group">
                <label>Amount to Stake (IGT)</label>
                <input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(e.target.value)}
                  placeholder="Enter IGT amount"
                  className="stake-input"
                />
              </div>
              <div className="form-group">
                <label>Staking Period</label>
                <select
                  value={stakingPeriod}
                  onChange={(e) => setStakingPeriod(e.target.value)}
                  className="period-select"
                >
                  {stakingOptions.map(option => (
                    <option key={option.days} value={option.days}>
                      {option.days} days - {option.apy}% APY
                    </option>
                  ))}
                </select>
              </div>
              <div className="rewards-preview">
                <h3>Estimated Rewards</h3>
                <div className="reward-amount">{calculateRewards()} IGT</div>
                <p>Plus network fees and governance rewards</p>
              </div>
              <button className="btn btn-primary stake-btn">
                Start Staking
              </button>
            </div>

            <div className="staking-info">
              <h3>Current Staking Stats</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">2.5M</div>
                  <div className="stat-label">Total Staked IGT</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">15,432</div>
                  <div className="stat-label">Active Stakers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">68%</div>
                  <div className="stat-label">Network Participation</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">$12.5M</div>
                  <div className="stat-label">Total Value Locked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="staking-options">
        <div className="container">
          <h2 className="section-title">Staking Options</h2>
          <div className="options-grid">
            {stakingOptions.map((option, index) => (
              <div key={index} className="option-card">
                <div className="option-header">
                  <h3>{option.days} Days</h3>
                  <div className={`risk-badge ${option.risk.toLowerCase()}`}>
                    {option.risk} Risk
                  </div>
                </div>
                <div className="apy-display">
                  <span className="apy-number">{option.apy}%</span>
                  <span className="apy-label">APY</span>
                </div>
                <div className="option-features">
                  <div className="feature">
                    <span className="icon">💰</span>
                    <span>Min: {option.minAmount} IGT</span>
                  </div>
                  <div className="feature">
                    <span className="icon">🔒</span>
                    <span>Locked for {option.days} days</span>
                  </div>
                  <div className="feature">
                    <span className="icon">📊</span>
                    <span>Governance rights</span>
                  </div>
                  <div className="feature">
                    <span className="icon">⚡</span>
                    <span>Auto-compounding</span>
                  </div>
                </div>
                <button className="btn btn-outline select-btn">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Staking Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Earn Passive Income</h3>
              <p>Nhận thưởng định kỳ từ việc stake IGT tokens với APY hấp dẫn lên đến 25%</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🗳️</div>
              <h3>Governance Rights</h3>
              <p>Tham gia quyết định tương lai của nền tảng thông qua voting và proposals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Network Security</h3>
              <p>Góp phần bảo mật mạng lưới và nhận thêm phần thưởng từ network fees</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Early Access</h3>
              <p>Ưu tiên truy cập các tính năng mới và products của InSight Genesis</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Staking Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Connect Wallet</h3>
                <p>Kết nối ví crypto của bạn để bắt đầu staking</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Choose Amount & Period</h3>
                <p>Chọn số lượng IGT và thời gian stake phù hợp</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Confirm Transaction</h3>
                <p>Xác nhận giao dịch và tokens sẽ được stake</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Earn Rewards</h3>
                <p>Nhận rewards tự động theo thời gian</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staking; 