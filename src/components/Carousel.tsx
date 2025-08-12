
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CyberpunkScene from './CyberpunkScene';
      
//// --- Sponsor Data ---
const sponsors = [
  { id: 1, name: 'Yahoo', logoSrc: '/logos/3.png' },
  { id: 2, name: 'Kodak', logoSrc: '/logos/4.png' },
  { id: 3, name: 'Nokia', logoSrc: '/logos/5.png' },
  { id: 4, name: 'Canon', logoSrc: '/logos/6.png' },
  { id: 5, name: 'Microsoft', logoSrc: '/logos/7.png' },
  { id: 6, name: 'IBM', logoSrc: '/logos/8.png' },
  { id: 7, name: 'Xerox', logoSrc: '/logos/9.png' },
];

const getRelativeIndex = (index: number, current: number, total: number) => {
  const half = Math.floor(total / 2);
  let rel = index - current;
  if (rel > half) rel -= total;
  if (rel < -half) rel += total;
  return rel;
};

const SponsorsCarousel = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayInterval = 3000; // 3 seconds
  
  // Use a ref to hold the interval ID so it can be cleared from anywhere
  const intervalRef = useRef<number | null>(null);

  // --- NEW: Autoplay Logic ---

  // useCallback ensures these functions don't get recreated on every render,
  // preventing issues with useEffect dependencies.
  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % sponsors.length);
  }, []);

  const prev = () => {
    setCurrentIndex((current) => (current === 0 ? sponsors.length - 1 : current - 1));
  };

  const startAutoplay = useCallback(() => {
    // Clear any existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(next, autoplayInterval);
  }, [next]);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // useEffect to start and stop autoplay
  useEffect(() => {
    startAutoplay();
    // Cleanup function to clear the interval when the component unmounts
    return () => stopAutoplay();
  }, [startAutoplay]);

  // --- NEW: Handlers to reset timer on manual click ---
  const handlePrevClick = () => {
    stopAutoplay();
    prev();
    startAutoplay();
  };

  const handleNextClick = () => {
    stopAutoplay();
    next();
    startAutoplay();
  };


  return (
    <section
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      className="relative w-full px-6 md:px-12 py-20 text-white overflow-hidden font-mono bg-black"
    >
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
          <CyberpunkScene mousePosition={{ x: 0, y: 0 }} />
        </Canvas>
      </div>

      {/* Centered foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        <h1
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-wider"
          style={{
            fontFamily: 'Orbitron, monospace',
            textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #18a04eff,
                0 0 20px #6acb8dff,
                0 0 30px #a9ef94ff
              `,
            filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
          }}
        >
          OUR SPONSORS
        </h1>

        <div className="flex justify-center items-center gap-4 md:gap-6 w-full">
          <button onClick={handlePrevClick} className="z-20 text-cyber-pink hover:text-white transition-colors duration-300">
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-4xl h-[100px] flex justify-center items-center overflow-hidden">
            {sponsors.map((sponsor, index) => {
              const rel = getRelativeIndex(index, currentIndex, sponsors.length);
              if (Math.abs(rel) > 2) return null;
              const isCenter = rel === 0;
              const translate = rel * 50;
              const scale = isCenter ? 1 : 0.7;
              const opacity = isCenter ? 1 : 0.5;
              const zIndex = isCenter ? 20 : 10 - Math.abs(rel);
              const blur = isCenter ? 'blur(0)' : 'blur(1px)';
              return (
                <div
                  key={sponsor.id}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${translate}%) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter: blur,
                  }}
                >
                  <div className="w-[500px] h-[200px] flex justify-center items-center">
                    <img
                      src={sponsor.logoSrc}
                      alt={`${sponsor.name} logo`}
                      className="max-w-full max-h-full object-contain logo-glow"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={handleNextClick} className="z-20 text-cyber-pink hover:text-white transition-colors duration-300">
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      <style>{`
        .hacker-title-new::before,
        .hacker-title-new::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          width: 100%;
          overflow: hidden;
          mix-blend-mode: screen;
          opacity: 0.7;
          pointer-events: none;
        }
        .hacker-title-new::before {
          color: #ff00d4;
          animation: rgbShift 3s infinite ease-in-out;
          z-index: -1;
        }
        .hacker-title-new::after {
          color: cyan;
          animation: rgbShiftAlt 2.5s infinite ease-in-out;
          z-index: -2;
        }
        
        @keyframes rgbShift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, -1px); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(1px, 1px); }
        }

        @keyframes rgbShiftAlt {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-2px, 1px); }
          60% { transform: translate(2px, -1px); }
        }
        
        .logo-glow {
          filter: brightness(0) invert(1);
          transition: all 0.3s ease-in-out;
        }

        .z-20 .logo-glow {
          filter: brightness(0) invert(1) drop-shadow(0 0 6px #00ffbb) drop-shadow(0 0 12px #00ffbb);
        }
      `}</style>
    </section>
  );
};

export default SponsorsCarousel;