import React from 'react';
import './VideoAnalysis.css';
import videoDetect from '../../assets/form-assets/video-detect.png';
import faceIcon from '../../assets/form-assets/face.svg';
import videoIcon from '../../assets/form-assets/video.svg';
import footPrintIcon from '../../assets/form-assets/foot-print.svg';
import { useNavigate } from 'react-router-dom';
import importIcon from '../../assets/form-assets/import-icon.svg';
import PopupUploadFile from './PopupUploadFile';
import { useState } from 'react';
import PopupUploadOrRecord from './PopupUploadOrRecord';
import PopupAudioDropzone from './PopupAudioDropzone';
import AudioAnalysisResult from './AudioAnalysisResult';

const industryOptions = [
  {
    value: "mortgageLending",
    label: "Mortgage Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "commercialBanking",
    label: "Commercial Banking",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "p2pLending",
    label: "Peer-to-Peer (P2P) Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "smallBusinessLending",
    label: "Small Business Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "studentLoanLending",
    label: "Student Loan Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "autoLoanLending",
    label: "Auto Loan Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "personalLoanLending",
    label: "Personal Loan Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "paydayLoanLending",
    label: "Payday Loan Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "agriculturalFarmLending",
    label: "Agricultural and Farm Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "equipmentFinancingLending",
    label: "Equipment Financing Lending",
    groupValue: "loanDefault",
    groupLabel: "Loan Default"
  },
  {
    value: "debtRepaymentProbability",
    label: "Debt Repayment Probability",
    groupValue: "debtCollection",
    groupLabel: "Debt Collection"
  },
  {
    value: "mentalWellnessProbability",
    label: "Mental Wellness",
    groupValue: "mentalWellness",
    groupLabel: "Mental Wellness"
  },
  {
    value: "employeeChurn",
    label: "Employee Churn",
    groupValue: "employeeChurn",
    groupLabel: "Employee Churn"
  },
  {
    value: "creditCardFraud",
    label: "Credit Card Fraud Detection",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "insuranceFraud",
    label: "Insurance Fraud",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "retailFraud",
    label: "Retail Fraud Prevention",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "healthcareFraud",
    label: "Healthcare Fraud Detection",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "cybersecurityFraud",
    label: "Cybersecurity Fraud",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "mortgageFraud",
    label: "Mortgage Fraud",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "telecommunicationsFraud",
    label: "Telecommunications Fraud Management",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "taxEvasion",
    label: "Tax Evasion Detection",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "identityTheft",
    label: "Identity Theft Prevention",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "securitiesFraud",
    label: "Securities and Investment Fraud",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "generalFraud",
    label: "General Fraud",
    groupValue: "fraud",
    groupLabel: "Fraud"
  },
  {
    value: "general",
    label: "Candidate Success General",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "construction",
    label: "Construction",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "management",
    label: "Management",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "programmingTech",
    label: "Programming Tech",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "salesMarketing",
    label: "Sales Marketing",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "sales",
    label: "Sales",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "marketing",
    label: "Marketing",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "AIContentTranslation",
    label: "AI Content Translation",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "legalFinance",
    label: "Legal Finance",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "designCreativity",
    label: "Design Creativity",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "accountant",
    label: "Accountant",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "recruiter",
    label: "Recruiter",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "operationManager",
    label: "Operation Manager",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "customerServiceRepresentative",
    label: "Customer Service Representative",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "technicalSupportSpecialist",
    label: "Technical Support Specialist",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  },
  {
    value: "telesalesAgents",
    label: "Telesales Agents",
    groupValue: "candidateSuccess",
    groupLabel: "Candidate Success"
  }
];

const VideoAnalysis = () => {
  const navigate = useNavigate();
  const [openUploadPopup, setOpenUploadPopup] = useState(false);
  const [openUploadOrRecord, setOpenUploadOrRecord] = useState(false);
  const [openAudioDropzone, setOpenAudioDropzone] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(industryOptions[0]?.value || '');
  const [analysisResult, setAnalysisResult] = useState(null);

  // Group options by their groupValue
  const groupedOptions = industryOptions.reduce((acc, option) => {
    if (!acc[option.groupValue]) {
      acc[option.groupValue] = {
        label: option.groupLabel,
        options: []
      };
    }
    acc[option.groupValue].options.push(option);
    return acc;
  }, {});

  return (
    <div className="video-analysis-root">
      <header className="video-analysis-header">
        <h1 className="video-analysis-title">
          TEST OUR <span className="blue">PRE-BUILT BEHAVIOR<br/>MODULES</span> FOR YOURSELF
        </h1>
        <p className="video-analysis-subtitle">
          Our integrated behavior modules enable you to get started immediately. Try it for yourself.
        </p>
      </header>
      <div className="video-analysis-card-row">
        <div className="video-analysis-card" onClick={() => navigate('/form/face-analysis')}>
          <img src={faceIcon} alt="Face Scan" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Face Scan Analysis</div>          
        </div>
        <div className="video-analysis-card" onClick={() => navigate('/form/video-analysis')}>
          <img src={videoIcon} alt="Voice" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Voice Analysis</div>          
        </div>
        <div className="video-analysis-card" onClick={() => navigate('/form/digital-footprint')}>
          <img src={footPrintIcon} alt="Digital Footprint" className="video-analysis-card-icon" />
          <div className="video-analysis-card-title">Digital Footprint</div>          
        </div>
      </div>
      <section className="video-analysis-section">
        <div className="video-analysis-section-title">
          <h2>VOICE ANALYSIS</h2>
          <p>Our pre-built voice module, trained on over hundreds of thousands voice samples is used by banks, insurance companies and employers to model fraud detection, job suitability and repayment intent.</p>
        </div>
        
        <div className="video-analysis-upload" onClick={() => setOpenUploadPopup(true)}>
          <img src={importIcon} alt="Upload" className="video-analysis-upload-icon" />
          <div className="video-analysis-upload-text">Record Now or Upload Audio</div>
        </div>
        <PopupUploadFile 
          open={openUploadPopup} 
          onClose={() => setOpenUploadPopup(false)}
          onAgree={() => {
            setOpenUploadPopup(false);
            setOpenUploadOrRecord(true);
          }}
        />
        <PopupUploadOrRecord 
          open={openUploadOrRecord} 
          onClose={() => setOpenUploadOrRecord(false)}
          onUploadAudio={() => {
            setOpenUploadOrRecord(false);
            setOpenAudioDropzone(true);
          }}
        />
        <PopupAudioDropzone 
          open={openAudioDropzone} 
          onClose={() => setOpenAudioDropzone(false)}
          industryOptions={industryOptions}
          selectedIndustry={selectedIndustry}
          onAnalysisComplete={result => {
            setAnalysisResult(result);
            setOpenAudioDropzone(false);
          }}
        />

        <div className="video-analysis-industry">
          <div className="video-analysis-industry-label">Choose your industry</div>
          <select className="video-analysis-industry-select" value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)}>
            {Object.entries(groupedOptions).map(([groupValue, group]) => (
              <optgroup key={groupValue} label={group.label}>
                {group.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <button onClick={() => navigate('/form/result')} className="video-analysis-submit">Show insight</button>
      </section>
      {analysisResult && (
        <AudioAnalysisResult result={analysisResult} industryOptions={industryOptions} />
      )}
    </div>
  );
};

export default VideoAnalysis; 