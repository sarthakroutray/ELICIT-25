import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CyberpunkLanding from './components/CyberpunkLanding';
import AboutSection from './components/AboutSection';
import EventsGrid from './components/EventsGrid';
import Carousel from './components/Carousel';
import CyberpunkEventInterface from './components/CyberpunkEvents';
// PreviousSponsors is now composed inside SponsorsPage
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Register from './components/Register';
import ComingSoon from './components/ComingSoon';
import TeamPage from './components/TeamPage';
import './styles/glitch.css';
import { Analytics } from '@vercel/analytics/react';
import SponsorsPage from './components/SponsorsPage';


// Simple wrapper to add spacing + footer for section pages
const SectionPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full min-h-screen bg-black flex flex-col">
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CyberpunkLanding />} />
        <Route path="/about" element={<SectionPage><AboutSection /></SectionPage>} />
            <Route path="/events" element={<SectionPage><EventsGrid /></SectionPage>} />
            {/* Route for individual event view / carousel focus */}
            <Route path="/events/:id" element={<SectionPage><CyberpunkEventInterface /></SectionPage>} />
    <Route path="/speakers" element={<SectionPage><ComingSoon title="SPEAKERS – COMING SOON" note="Stay tuned for the speaker lineup." /></SectionPage>} />
    <Route path="/carousel" element={<SectionPage><Carousel /></SectionPage>} />
    <Route path="/sponsors" element={<SectionPage><SponsorsPage /></SectionPage>} />
    <Route path="/contact" element={<SectionPage><Contact /></SectionPage>} />
    <Route path="/register" element={<SectionPage><Register /></SectionPage>} />
    <Route path="/team" element={<SectionPage><TeamPage /></SectionPage>} />
        <Route path="*" element={<SectionPage><div className="text-center text-white py-32 font-mono">
          <h1 className="text-4xl mb-4">404</h1>
          <p className="mb-6">Route not found.</p>
          <a href="/" className="text-cyan-400 underline">Return Home</a>
        </div></SectionPage>} />
      </Routes>
  <Analytics />
    </>
  );
}

export default App;
