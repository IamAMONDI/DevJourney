import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
        </main>
        <footer className="text-center py-6 mt-10">
          <p className="text-muted-foreground">&copy; 2026 TechTrack Advisor. All rights reserved.</p>
        </footer>
        <Toaster />
      </div>
    </Router>
  );
}



export default App;
