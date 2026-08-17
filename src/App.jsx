import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Pathways from './pages/Pathways';
import LowLevel from './pages/pathways/LowLevel';
import FullStack from './pages/pathways/FullStack';
import ArVr from './pages/pathways/ArVr';
import MachineLearning from './pages/pathways/MachineLearning';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import { Toaster } from '@/components/ui/sonner';
import './index.css';

import Footer from './components/Footer';

/**
 * Main Application Component
 * Configures global routing and layout structure.
 * Uses HashRouter to ensure compatibility with GitHub Pages static hosting.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary/30 flex flex-col">
        {/* Global Navigation Bar */}
        <Navbar />
        
        {/* Main Content Routing Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pathways" element={<Pathways />} />
            <Route path="/pathways/low-level" element={<LowLevel />} />
            <Route path="/pathways/full-stack" element={<FullStack />} />
            <Route path="/pathways/ar-vr" element={<ArVr />} />
            <Route path="/pathways/machine-learning" element={<MachineLearning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
        
        {/* Global Footer */}
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}



export default App;
