import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginPopup.css';

const LoginPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'M/F',
    email: ''
  });
  const [showWalletSelection, setShowWalletSelection] = useState(false);

  // Thêm useEffect để load script igai.min.js khi popup mở
// useEffect(() => {
//   if (!document.querySelector('script[src="/igai.min.js"]')) {
//     // Load script igai.min.js khi popup mở
//     const script = document.createElement('script');
//     script.src = '/igai.min.js'; // hoặc từ CDN
//     script.async = true;
//     document.head.appendChild(script);
//   }
// }, []);

// Thêm vào useEffect để kiểm tra kết quả đăng nhập
useEffect(() => {
  // Kiểm tra xem có địa chỉ ví trong localStorage không
  const walletAddress = localStorage.getItem('a');
  const savedFormData = localStorage.getItem('formData');
  
  if (walletAddress && savedFormData) {
    // Đăng nhập thành công, có thể đóng popup và thông báo
    console.log('Login successful with wallet:', walletAddress);
    console.log('Form data:', JSON.parse(savedFormData));
    
    // Có thể gọi callback hoặc cập nhật state cha
    onClose();
  }
}, []);

  const wallets = [
    // Crypto Wallets
    { name: 'MetaMask', icon: '🦊', installed: true, type: 'wallet' },
    { name: 'Abstract', icon: '🟢', installed: false, type: 'wallet' },
    { name: 'Ronin Wallet', icon: '🔷', installed: true, type: 'wallet' },
    { name: 'Nightly', icon: '🌙', installed: true, type: 'wallet' },
    { name: 'Coinbase Wallet', icon: '🔵', installed: false, type: 'wallet' },
    { name: 'WalletConnect', icon: '🌊', installed: false, type: 'wallet' },
    
    // Social Login Options
    { name: 'Google', icon: '🔍', installed: true, type: 'social' },
    { name: 'Facebook', icon: '📘', installed: true, type: 'social' },
    { name: 'Apple', icon: '🍎', installed: true, type: 'social' },
    // { name: 'Microsoft', icon: '🪟', installed: true, type: 'social' },
    // { name: 'Discord', icon: '💬', installed: true, type: 'social' },
    // { name: 'Twitter', icon: '🐦', installed: true, type: 'social' },
    
    // // Developer Platforms
    // { name: 'GitHub', icon: '🐙', installed: true, type: 'developer' },
    // { name: 'GitLab', icon: '🦊', installed: true, type: 'developer' },
    // { name: 'Bitbucket', icon: '🪣', installed: true, type: 'developer' },
    
    // // Gaming/Streaming
    // { name: 'Twitch', icon: '🎮', installed: true, type: 'gaming' },
    // { name: 'LinkedIn', icon: '💼', installed: true, type: 'professional' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConnectWallet = () => {
    // Kiểm tra validation
    if (!formData.age || formData.gender === 'M/F') {
      alert('Please fill in Age and Gender information completely before connecting wallet!');
      return;
    }
    
    // Hiển thị popup wallet selection
    setShowWalletSelection(true);
  };

  const handleWalletSelect = (wallet) => {
    console.log('Selected wallet:', wallet.name);
    
    // Lưu form data vào localStorage trước khi chuyển hướng
    localStorage.setItem('formData', JSON.stringify(formData));
    
    // Xác định loại đăng nhập dựa trên wallet
    let loginType;
    switch(wallet.name.toLowerCase()) {
      case 'metamask':
        loginType = 'metamask';
        break;
      case 'google':
        loginType = 'google';
        break;
      case 'facebook':
        loginType = 'facebook';
        break;
      case 'apple':
        loginType = 'apple';
        break;
      case 'github':
        loginType = 'github';
        break;
      case 'linkedin':
        loginType = 'linkedin';
        break;
      case 'twitter':
        loginType = 'twitter';
        break;
      case 'bitbucket':
        loginType = 'bitbucket';
        break;
      case 'gitlab':
        loginType = 'gitlab';
        break;
      case 'twitch':
        loginType = 'twitch';
        break;
      case 'microsoft':
        loginType = 'microsoft';
        break;
      case 'discord':
        loginType = 'discord';
        break;
      case 'coinbase wallet':
        loginType = 'metamask'; // hoặc có thể dùng 'coinbase' nếu API hỗ trợ
        break;
      case 'walletconnect':
        loginType = 'metamask'; // WalletConnect thường dùng chung với metamask
        break;
      default:
        loginType = 'metamask'; // fallback cho các ví crypto khác
    }
    const currentUrl = new URL(location.href);
    currentUrl.search = "";
    
    // Chuyển hướng đến API InsightGenesis
    const apiUrl = `https://api.insightgenesis.ai/lg?t=${loginType}&u=${currentUrl.toString()}`;
    
    // Thêm các tham số từ form data
    const url = new URL(apiUrl);
    if (formData.age) {
      url.searchParams.set('age', formData.age);
    }
    if (formData.gender && formData.gender !== 'M/F') {
      url.searchParams.set('gender', formData.gender.toLowerCase());
    }
    
    // Chuyển hướng
    window.location.href = url.toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const handleManualWalletAddress = () => {
    const walletAddress = prompt('Nhập địa chỉ ví BIP44 của bạn:');
    
    if (walletAddress && walletAddress.trim()) {
      // Kiểm tra định dạng cơ bản (bắt đầu bằng 0x và có độ dài phù hợp)
      if (walletAddress.startsWith('0x') && walletAddress.length === 42) {
        // Lưu địa chỉ ví vào localStorage
        localStorage.setItem('a', walletAddress);
        
        // Lưu thông tin form
        localStorage.setItem('formData', JSON.stringify(formData));
        
        alert('Wallet address saved successfully!');
        onClose();
      } else {
        alert('Invalid wallet address. Please enter a valid Ethereum address.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay popup-login" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        
        {!showWalletSelection ? (
          <div className="popup-content">
            <h2 className="popup-title">GET STARTED</h2>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label className="form-label">Your Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="40"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Your Gender</label>
                <div className="select-wrapper">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="M/F">M/F</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
              </div>
              
              <div className="form-divider">
                <span className="divider-text">THEN</span>
              </div>
              
              <button 
                type="button" 
                className={`connect-wallet-btn ${
                  !formData.age || formData.gender === 'M/F' ? 'disabled' : ''
                }`}
                onClick={handleConnectWallet}
                disabled={!formData.age || formData.gender === 'M/F'}
              >
                Connect Wallet
              </button>

              <Link 
                to="/form" className="connect-wallet-btn" style={{lineHeight: '22px'}}
                onClick={onClose}
              >
                Scan Now
              </Link>
              
              <div className="form-divider">
                <span className="divider-text">OR</span>
              </div>
              
              <div className="form-group">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="david@gmail.com"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="popup-content wallet-selection">
            <h2 className="popup-title">SELECT WALLET</h2>
            <button 
              className="back-button"
              onClick={() => setShowWalletSelection(false)}
            >
              ← Back
            </button>
            
            // Trong phần wallet-selection, thêm sau wallet-list
            <div className="wallet-list">
              {wallets.map((wallet, index) => (
                <div 
                  key={index}
                  className="wallet-item"
                  onClick={() => handleWalletSelect(wallet)}
                >
                  <div className="wallet-info">
                    <span className="wallet-icon">{wallet.icon}</span>
                    <span className="wallet-name">{wallet.name}</span>
                  </div>
                  {wallet.installed && (
                    <span className="wallet-status">Installed</span>
                  )}
                </div>
              ))}
              
              <div className="wallet-item manual-wallet" onClick={handleManualWalletAddress}>
                <div className="wallet-info">
                  <span className="wallet-icon">✏️</span>
                  <span className="wallet-name">Manual Wallet Address</span>
                </div>
              </div>
              
              <div className="wallet-item more-options">
                <span className="wallet-name">More Wallet Options</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;


