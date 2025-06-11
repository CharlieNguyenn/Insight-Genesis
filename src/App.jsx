import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GetAIInsight from './pages/GetAIInsight';
import Staking from './pages/Staking';
import Resource from './pages/Resource';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Finance from './pages/solutions/Finance';
import HealthWellness from './pages/solutions/HealthWellness';
import HumanResource from './pages/solutions/HumanResource';
import Education from './pages/solutions/Education';
import DecentralizedPersonalInsights from './pages/solutions/DecentralizedPersonalInsights';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-ai-insight" element={<GetAIInsight />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/solutions/finance" element={<Finance />} />
            <Route path="/solutions/health-wellness" element={<HealthWellness />} />
            <Route path="/solutions/human-resource" element={<HumanResource />} />
            <Route path="/solutions/education" element={<Education />} />
            <Route path="/solutions/decentralized-personal-insights" element={<DecentralizedPersonalInsights />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
