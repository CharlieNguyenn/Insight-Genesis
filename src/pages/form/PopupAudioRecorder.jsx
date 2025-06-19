import React, { useState, useRef, useEffect } from 'react';
import './PopupAudioRecorder.css';

const SECRET_KEY = 'c5UqVPihwtydCKe57YJPtpyE2ryB9AJn';

const PopupAudioRecorder = ({ open, onClose, industryOptions = [], selectedIndustry, onAnalysisComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const chunksRef = useRef([]);

  // Tạo audioURL từ recordedBlob
  useEffect(() => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob);
      setAudioURL(url);
      
      // Cleanup URL khi component unmount hoặc blob thay đổi
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [recordedBlob]);

  if (!open) return null;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
        setRecordedBlob(blob);
        setRecordingComplete(true);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      setRecordingComplete(false);

      // Đếm thời gian recording
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          const newTime = prev + 1;
          // Tự động dừng sau 45 giây
          if (newTime >= 45) {
            stopRecording();
          }
          return newTime;
        });
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Không thể truy cập microphone. Vui lòng cho phép quyền truy cập microphone.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const analyzeRecordedAudio = async () => {
    if (!recordedBlob) return;
    
    setIsAnalyzing(true);
    
    try {
      // Convert recordedBlob to File with MP4 format
      const audioFile = new File([recordedBlob], 'recorded-audio.mp4', { type: 'audio/mp4' });

      const formData = new FormData();
      formData.append('audio', audioFile);
      formData.append('audioServiceType', 'loanDefault');

      // Gọi API mới
      const response = await fetch('https://api.insightgenie.ai/unprotected-file-upload/audio/end-to-end-demo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      
      if (result && result.immediateScoreInfo) {
        // Xử lý kết quả
        if (onAnalysisComplete) {
          onAnalysisComplete(result);
        }
        
        // Đóng popup sau khi phân tích xong
        onClose();
      } else {
        throw new Error('Invalid response data');
      }
      
    } catch (error) {
      console.error('Error analyzing recorded audio:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert('Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại.');
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        alert(`Có lỗi xảy ra khi phân tích voice: ${errorMessage}`);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleReset = () => {
    setRecordedBlob(null);
    setRecordingComplete(false);
    setRecordingTime(0);
    setIsAnalyzing(false);
    setAudioURL(null);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="popup-recorder-overlay" onClick={onClose}>
      <div className="popup-recorder-modal" onClick={e => e.stopPropagation()}>
        <button className="popup-recorder-close" onClick={onClose}>&times;</button>
        
        <h2 className="popup-recorder-title">Voice Recording</h2>
        
        <div className="recorder-content">
          {/* Microphone Icon */}
          <div className={`recorder-mic-icon ${isRecording ? 'recording' : ''}`}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </div>
          
          {/* Recording Status */}
          <div className="recorder-status">
            {isRecording && (
              <div className="recording-indicator">
                <span className="recording-dot"></span>
                Recording...
              </div>
            )}
            
            {recordingComplete && !isAnalyzing && (
              <div className="recording-complete-indicator">
                ✓ Recording Complete
              </div>
            )}
            
            {isAnalyzing && (
              <div className="analyzing-indicator">
                🔄 Analyzing...
              </div>
            )}
          </div>
          
          {/* Timer */}
          <div className="recorder-timer">
            {formatTime(recordingTime)} / 0:45
            {recordingTime >= 45 && <span className="timer-complete"> ✓</span>}
          </div>

          {audioURL && recordingComplete && (
            <div className="w-full mt-8">
              <audio controls className="w-full">
                <source src={audioURL} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
            )}
          
          {/* Instructions */}
          <div className="recorder-instructions">
            {!isRecording && !recordingComplete && (
              "Click the button below to start recording. Talk for at least 45 seconds about anything you like."
            )}
            {isRecording && (
              "Keep talking... You can stop manually or wait for auto-stop at 45 seconds."
            )}
            {recordingComplete && !isAnalyzing && (
              "Recording complete! Click 'Analyze' to process your voice or 'Record Again' to start over."
            )}
            {isAnalyzing && (
              "Please wait while we analyze your voice recording..."
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="recorder-actions">
            {!recordingComplete && (
              <button 
                className={`recorder-btn primary ${isRecording ? 'stop' : 'start'}`}
                onClick={handleRecordClick}
                disabled={isAnalyzing}
              >
                {isRecording ? `Stop Recording (${formatTime(recordingTime)})` : 'Start Recording'}
              </button>
            )}
            
            {recordingComplete && !isAnalyzing && (
              <>
                <button 
                  className="recorder-btn primary"
                  onClick={analyzeRecordedAudio}
                >
                  Analyze Recording
                </button>
                <button 
                  className="recorder-btn secondary"
                  onClick={handleReset}
                >
                  Record Again
                </button>
              </>
            )}
            
            {isAnalyzing && (
              <button className="recorder-btn disabled" disabled>
                Analyzing...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAudioRecorder;