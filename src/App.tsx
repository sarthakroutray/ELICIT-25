import React, { useRef } from 'react';
import CyberpunkLanding from './components/CyberpunkLanding';
import Speakers from './components/Speakers';
import AboutSection from './components/AboutSection';
import './styles/glitch.css';

function App() {
  const speakersRef = useRef<HTMLDivElement>(null);

  const scrollToSpeakers = () => {
    if (speakersRef.current) {
      const targetY = speakersRef.current.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 1200; // ms
      let startTime: number | null = null;

      function step(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutQuad(progress));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }

      function easeInOutQuad(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      window.requestAnimationFrame(step);
    }
  };

  // Scroll to About section handler (still here for passing to CyberpunkLanding)
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about-section');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-black">
      {/* Landing Page Section */}
      <div className="h-screen overflow-hidden">
        <CyberpunkLanding onSpeakersClick={scrollToSpeakers} onAboutClick={scrollToAbout} />
      </div>

      {/* Speakers Section */}
      <div ref={speakersRef} className="min-h-screen">
        <Speakers />
      </div>

      {/* AboutSection in the page */}
      <div id="about-section">
        <AboutSection />
      </div>
    </div>
  );
}

export default App;

