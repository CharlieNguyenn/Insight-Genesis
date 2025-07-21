import React, { useState, useEffect } from 'react';
import './FaceAnalysis.css';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import faceScanningImg from '../../assets/form-assets/face-scanning.png';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../../assets/form-assets/group3.svg';
import uncheckIcon from '../../assets/form-assets/group4.svg';

import cameraIcon from '../../assets/form-assets/group2.svg';

const SECRET_KEY = 'c5UqVPihwtydCKe57YJPtpyE2ryB9AJn';

const FaceAnalysis = () => {
  const navigate = useNavigate();
  const [apiResult, setApiResult] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [iFrameURL, setIFrameURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Thêm useEffect để gọi API mới
  useEffect(() => {
    const callNewApi = async () => {
      setIsLoading(true);
      try {
        // Lấy dữ liệu từ localStorage
        const savedFormData = localStorage.getItem('formData');
        const walletAddress = localStorage.getItem('a');
        let gender = 'male'; // default
        let age = '30'; // default

        if (!walletAddress) {
          setApiError('Wallet address not found. Please log in again.');
          setIsLoading(false);
          return;
        }
        
        if (savedFormData) {
          const formData = JSON.parse(savedFormData);
          // Chuyển đổi gender từ formData
          if (formData.gender && formData.gender !== 'M/F') {
            gender = formData.gender.toLowerCase() === 'male' ? 'male' : 
                    formData.gender.toLowerCase() === 'female' ? 'female' : 'male';
          }
          if (formData.age) {
            age = formData.age;
          }
        }
        
        console.log('Calling API with:', { gender, age });
        
        const response = await fetch(`https://api.insightgenesis.ai/iframe?g=${gender}&y=${age}&a=${encodeURIComponent(walletAddress)}`, {
          method: 'GET',
          headers: {
            'auth': SECRET_KEY
          }
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }
        
        // API trả về URL của iframe
        const iframeUrl = await response.text();
        setIFrameURL(iframeUrl.trim());
        setApiError(null);
        
        console.log('Iframe URL received:', iframeUrl);
        
      } catch (err) {
        console.error('API Error:', err);
        setApiError(err.message);
        setIFrameURL(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    callNewApi();
  }, []);

  // Hàm để xử lý khi nhận kết quả từ iframe
  useEffect(() => {
    const handleMessage = (event) => {
      const d = event.data;
      const walletAddress = localStorage.getItem('a');
      if (d.analysisData && d.analysisData.vitalSigns) {
        console.log('Event Data', d);
        fetch("https://api.insightgenesis.ai/store", {
          method: "POST",
          headers: { addr: walletAddress, type: "1", "Content-Type": "application/json" },
          body: JSON.stringify(d.analysisData),
        });
      }

      // Kiểm tra origin để bảo mật
      if (event.origin !== 'https://api.insightgenesis.ai') {
        return;
      }
      
      // Xử lý kết quả từ iframe
      if (event.data && event.data.type === 'FACE_ANALYSIS_RESULT') {
        console.log('Kết quả face analysis:', event.data.result);
        setApiResult(event.data.result);
        
        // Có thể chuyển hướng đến trang kết quả
        // navigate('/form/result', { state: { result: event.data.result } });
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //     return '';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   const authenticateAndFetchVideoToken = async () => {
  //     let APIToken = localStorage.getItem('APIToken') || '';

  //     const authenticate = async () => {
  //       const payload = {
  //         key: "6738b6f4-1390-404b-95ac-59b6ade17773",
  //         secret: "a4dc7b7f-a6fd-4441-8a0a-53c62957ef55"
  //       };

  //       try {
  //         const response = await fetch('https://api.insightgenie.ai/auth/authenticate', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(payload)
  //         });

  //         if (!response.ok) {
  //           const errorData = await response.json();
  //           console.error('Error response:', errorData);
  //           throw new Error('Failed to authenticate');
  //         }

  //         const data = await response.json();
  //         APIToken = data.token || '';
  //         localStorage.setItem('APIToken', APIToken);
  //       } catch (error) {
  //         if (error instanceof Error) {
  //           console.error('Error:', error.message);
  //         } else {
  //           console.error('Unexpected error:', error);
  //         }
  //         return;
  //       }
  //     };

  //     const fetchVideoToken = async () => {
  //       try {
  //         const payload = {
  //           "clientId": "123456789",
  //           "age": 18,
  //           "gender": "male",
  //           "showResults": "display",
  //           "noDesign": false,
  //           // "buttonBgColor": "#ebfbff",
  //           // "buttonTextColor": "#ebfbff",
  //           "isVoiceAnalysisOn": true,
  //           "voiceAnalysisType": "fraud"
  //         };
  //         const videoResponse = await fetch('https://api.insightgenie.ai/face-scan/generate-video-token', {
  //           method: 'POST',
  //           headers: {
  //             'Authorization': `Bearer ${APIToken}`,
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(payload)
  //         });

  //         if (!videoResponse.ok) {
  //           const errorData = await videoResponse.json();
  //           console.error('Error response:', errorData);

  //           if (videoResponse.status === 401 && errorData.errorCode === 'UNAUTHORIZED') {
  //             localStorage.removeItem('APIToken');
  //             await authenticate();
  //             await fetchVideoToken();
  //           } else {
  //             throw new Error('Failed to fetch video token');
  //           }
  //         } else {
  //           const videoData = await videoResponse.json();
  //           setIFrameURL(videoData.videoIframeUrl);
  //           console.log('Video URL:', videoData.videoIframeUrl);
  //         }
  //       } catch (error) {
  //         if (error instanceof Error) {
  //           console.error('Error:', error.message);
  //         } else {
  //           console.error('Unexpected error:', error);
  //         }
  //       }
  //     };

  //     if (!APIToken) {
  //       await authenticate();
  //     }
  //     await fetchVideoToken();
  //   };

  //   authenticateAndFetchVideoToken();

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div className="face-analysis-root">
      <header className="face-analysis-header">
        <h1 className="face-analysis-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="face-analysis-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="face-analysis-card-row">
        <div className="face-analysis-card" onClick={() => navigate('/insights-form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="face-analysis-card-icon" />
          <div className="face-analysis-card-title">Face Scan Analysis</div>          
        </div>
        <div className="face-analysis-card" onClick={() => navigate('/insights-form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="face-analysis-card-icon" />
          <div className="face-analysis-card-title">Voice Analysis</div>          
        </div>
        <div className="face-analysis-card" onClick={() => navigate('/insights-form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="face-analysis-card-icon" />
          <div className="face-analysis-card-title">Digital Footprint</div>          
        </div>
      </div>
      <section className="face-analysis-feature-section">
        <div className="face-analysis-feature-title">
          FACE SCAN ANALYSIS
        </div>
        <div className="face-analysis-feature-desc">
          A 30-second video clip from a webcam or phone provides enough information for our video module to enhance your understanding of a person's physiological health and wellbeing.
        </div>
        
        {isLoading && (
          <div className="loading-container">
            <p>Preparing face recognition interface. Please wait...</p>
          </div>
        )}
        
        {apiError && (
          <div className="error-container" style={{color:'red', padding: '20px', background: '#ffe6e6', borderRadius: '8px', margin: '20px 0'}}>
            <h3>Lỗi khi tải face scanning:</h3>
            <p>{apiError}</p>
          </div>
        )}
        
        {iFrameURL && !isLoading && (
          <div className="face-analysis-iframe-container">
            <iframe
              src={iFrameURL}
              allow="camera;microphone;fullscreen;display-capture"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
              title="Face Analysis Scanner"
            />
          </div>
        )}
        
        {!iFrameURL && !isLoading && !apiError && (
          <div className="face-analysis-form">
            <div className="face-analysis-checkbox">
              <input type="checkbox" id="add-hypertension" />
              <label htmlFor="add-hypertension">Add hypertension and diabetes analysis?</label>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Your weight</label>
                <input type="text" placeholder="70kg" />
              </div>
              <div className="face-analysis-field">
                <label>Your height</label>
                <input type="text" placeholder="180cm" />
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Are you smoked?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="face-analysis-field">
                <label>Do you have depression?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Do you have heart disease?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="face-analysis-field">
                <label>Do you have hypertension?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Do you use any blood pressure medication?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="face-analysis-field">
                <label>Regularly used blood pressure medication?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Parents have hypertension?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="face-analysis-field">
                <label>What is your physical activity?</label>
                <select>
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Your waist circumference</label>
                <input type="text" placeholder="80cm" />
              </div>
              <div className="face-analysis-field">
                <label>What is your total cholesterol?</label>
                <input type="text" placeholder="200 mg/DL" />
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>What is your high-density lipoprotein cholesterol?</label>
                <input type="text" placeholder="50 mg/DL" />
              </div>
              <div className="face-analysis-field">
                <label>Has a history of high blood glucose been found?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Are you diabetic?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="face-analysis-field">
                <label>Is there a family history of diabetes mellitus Type 1 or Type 2?</label>
                <select>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-row">
              <div className="face-analysis-field">
                <label>Consume vegetables, fruits, or berries?</label>
                <select>
                  <option value="">Select</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="rarely">Rarely</option>
                </select>
              </div>
            </div>

            <div className="face-analysis-camera-section">
              <div className="face-analysis-question">
                Please answer the following question:<br/>
                What advice would you give to someone who is just starting out in their career?<br/>
                Note: Your response should be at least 45 seconds long.
              </div>

              <div className="face-analysis-camera-preview">
                <img src={faceScanningImg} alt="Face Scanning" />
              </div>
              <div className="face-analysis-camera-preview-note">
                <img src={cameraIcon} alt="Camera" />              
                It is necessary to allow us to use the camera to start the test.
              </div>
            </div>
            <div className="face-analysis-requirements">
              <div className="face-analysis-requirement">
                <div className="face-analysis-requirement-header">
                  <img src={checkIcon} alt="Check" />
                  <div className="face-analysis-requirement-title">Lighting</div>
                </div>
                <span>Make sure you are in good lighting room</span>
              </div>
              <div className="face-analysis-requirement">
                <div className="face-analysis-requirement-header">
                  <img src={uncheckIcon} alt="unCheck" />
                  <div className="face-analysis-requirement-title">Centered</div>
                </div>
                <span>You must be in the center of the camera</span>
              </div>
              <div className="face-analysis-requirement">
                <div className="face-analysis-requirement-header">
                  <img src={uncheckIcon} alt="unCheck" />
                  <div className="face-analysis-requirement-title">Distance</div>
                </div>
                <span>Must fit within the icon borders</span>
              </div>
              <div className="face-analysis-requirement">
                <div className="face-analysis-requirement-header">
                  <img src={uncheckIcon} alt="unCheck" />
                  <div className="face-analysis-requirement-title">Movement</div>
                </div>
                <span>During the scan you should not move</span>
              </div>
              <div className="face-analysis-requirement">
                <div className="face-analysis-requirement-header">
                  <img src={uncheckIcon} alt="unCheck" />
                  <div className="face-analysis-requirement-title">Microphone</div>
                </div>
                <span>To start the test allow using microphone</span>
              </div>
            </div>
            <button className="face-analysis-submit" onClick={() => navigate('/insights-form/result')}>
              Show insight
            </button>
            {apiResult && (
              <pre style={{background:'#222',color:'#8feaff',padding:12,borderRadius:8,marginTop:12}}>
                {JSON.stringify(apiResult, null, 2)}
              </pre>
            )}
            {apiError && (
              <div style={{color:'red',marginTop:12}}>{apiError}</div>
            )}
          </div>
          )}

          {/* {iFrameURL && (
            <div className="face-analysis-field face-iframe">
              <iframe
                title='face analysis form'
                id='face-analysis'
                src={iFrameURL}
                allow="camera;microphone;display-capture"
                width='100%'
                height='2000px'
                style={{maxWidth: '850px'}}
              />
            </div>
          )} */}

        </section>
      </div>
    );
};

export default FaceAnalysis;