import React, { useRef } from 'react';
import CyberpunkLanding from './components/CyberpunkLanding';
import Speakers from './components/Speakers';
import AboutSection from './components/AboutSection';
import PreviousSponsors from './components/PreviousSponsors';
import CyberpunkEvents from './components/CyberpunkEvents';
import Carousel from "./components/Carousel";
import Footer from './components/Footer';
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

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about-section');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEvents = () => {
    const eventsElement = document.getElementById('events-section');
    if (eventsElement) {
      eventsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSponsors = () => {
    const sponsorsElement = document.getElementById('sponsors-section');
    if (sponsorsElement) {
      sponsorsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-black">
      {/* Landing Page Section */}
      <div className="h-screen overflow-hidden">
        <CyberpunkLanding 
          onSpeakersClick={scrollToSpeakers} 
          onAboutClick={scrollToAbout} 
          onEventsClick={scrollToEvents} 
          onSponsorsClick={scrollToSponsors} 
        />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Events Section */}
      <div id="events-section">
        <CyberpunkEvents />
      </div>

      {/* Speakers Section */}
      <div ref={speakersRef} className="min-h-screen">
        <Speakers />
      </div>

      {/* Carousel Section */}
      <div id="carousel-section" className="min-h-screen">
        <Carousel />
      </div>

      {/* Previous Sponsors Section */}
      <div id="sponsors-section">
        <PreviousSponsors />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
