import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CyberpunkLanding from './components/CyberpunkLanding';
import AboutSection from './components/AboutSection';
import CyberpunkEvents from './components/CyberpunkEvents';
import Speakers from './components/Speakers';
import Carousel from './components/Carousel';
// PreviousSponsors is now composed inside SponsorsPage
import SponsorsPage from './components/SponsorsPage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Register from './components/Register';
import './styles/glitch.css';


// Simple wrapper to add spacing + footer for section pages
const SectionPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full min-h-screen bg-black flex flex-col">
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<CyberpunkLanding />} />
      <Route path="/about" element={<SectionPage><AboutSection /></SectionPage>} />
      <Route path="/events" element={<SectionPage><CyberpunkEvents /></SectionPage>} />
      <Route path="/speakers" element={<SectionPage><Speakers /></SectionPage>} />
  <Route path="/carousel" element={<SectionPage><Carousel /></SectionPage>} />
  <Route path="/sponsors" element={<SectionPage><SponsorsPage /></SectionPage>} />
  <Route path="/contact" element={<SectionPage><Contact /></SectionPage>} />
  <Route path="/register" element={<SectionPage><Register /></SectionPage>} />
      <Route path="*" element={<SectionPage><div className="text-center text-white py-32 font-mono">
        <h1 className="text-4xl mb-4">404</h1>
        <p className="mb-6">Route not found.</p>
        <a href="/" className="text-cyan-400 underline">Return Home</a>
      </div></SectionPage>} />
    </Routes>
  );
}

export default App;
