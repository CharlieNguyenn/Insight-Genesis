import React, { useRef, useState } from 'react';
import './PopupAudioDropzone.css';

const SECRET_KEY = 'c5UqVPihwtydCKe57YJPtpyE2ryB9AJn';

const PopupAudioDropzone = ({ open, onClose, industryOptions = [], selectedIndustry, onAnalysisComplete }) => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const inputRef = useRef();

  if (!open) return null;

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    let APIToken = localStorage.getItem('APIToken') || '';

    const authenticate = async () => {
      const payload = {
        key: "6738b6f4-1390-404b-95ac-59b6ade17773",
        secret: "a4dc7b7f-a6fd-4441-8a0a-53c62957ef55"
      };
      try {
        const response = await fetch('https://api.insightgenie.ai/auth/authenticate', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          throw new Error('Failed to authenticate');
        }
        const data = await response.json();
        APIToken = data.token || '';
        localStorage.setItem('APIToken', APIToken);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error:', error.message);
        } else {
          console.error('Unexpected error:', error);
        }
        return;
      }
    };

    const uploadAudio = async () => {
      try {
        const selectedOption = industryOptions.find(option => option.value === selectedIndustry);
        const groupValue = selectedOption ? selectedOption.groupValue : selectedIndustry;
        const formData = new FormData();
        formData.append('audio', file);
        formData.append('audioServiceType', groupValue);
        formData.append('isImmediateResult', 'true');
        const response = await fetch('https://api.insightgenie.ai/upload-file/audio', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${APIToken}`
          },
          body: formData,
        });
        const result = await response.json();
        if (response.status === 401 && result.errorCode === 'UNAUTHORIZED') {
          localStorage.removeItem('APIToken');
          await authenticate();
          await uploadAudio();
        }
        if (result && result.immediateScoreInfo && !result.isStillPending) {
          if (onAnalysisComplete) {
            onAnalysisComplete(result);
          }
          const audioServiceType = result.immediateScoreInfo.packagesData.audioUpload.audioServiceType;
          const audioVarName = "audio" + audioServiceType.charAt(0).toUpperCase() + audioServiceType.slice(1);
          const resultData = {
            audio: result.immediateScoreInfo.packagesData[audioVarName],
            cityName: result.immediateScoreInfo.cityName,
            countryName: result.immediateScoreInfo.countryName,
          }
          setAnalysisResult(resultData);
        } else {
          throw new Error('Invalid response data');
        }
      } catch (error) {
        console.error('Error analyzing file:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        alert(`Có lỗi xảy ra khi phân tích file: ${errorMessage}`);
      } finally {
        setIsAnalyzing(false);
      }
    }

    if (!APIToken) {
      await authenticate();
    }
    await uploadAudio();
  };

  return (
    <div className="popup-upload-overlay" onClick={onClose}>
      <div className="popup-upload-modal" onClick={e => e.stopPropagation()}>
        <button className="popup-upload-close" onClick={onClose}>&times;</button>
        <div className="audio-dropzone-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <input
            type="file"
            accept="audio/*, .mp3, .mp4, .wav, .ogg, .flac, .aac, .aiff, .alac, .pcm, .wma"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={handleFileChange}
          />
          <div className="audio-dropzone-icon">&#8682;</div>
          <div className="audio-dropzone-text">
            {file ? file.name : 'Drag and drop your audio file here, or click to select'}
          </div>
        </div>
        <div className="audio-dropzone-note">
          Please talk continuously for 45 seconds to get an accurate result. Talk about the weather, your job, your family, or anything else you like.
        </div>
        <button className="audio-dropzone-analyze" disabled={!file || isAnalyzing} onClick={handleAnalyze}>
          {isAnalyzing ? 'Analyzing...' : 'Analyze now'}
        </button>
      </div>
    </div>
  );
};

export default PopupAudioDropzone; 