import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    name: "NEURAL HACK SESSION",
    description: "A cyberpunk-themed hackathon with hardcore code and neon lights.",
    date: "2024-08-15",
    time: "18:00",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "QUANTUM CODING WORKSHOP",
    description: "Advanced algorithms and neural circuits, for real coding freaks.",
    date: "2024-08-16",
    time: "14:30",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "CYBER SECURITY BOOTCAMP",
    description: "Defend your matrix. Learn security from the ground up.",
    date: "2024-08-17",
    time: "10:00",
    image: "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "AI WARZONE",
    description: "Battle AIs in real-time. Strategy meets code.",
    date: "2024-08-18",
    time: "15:00",
    image: "https://images.unsplash.com/photo-1581091870632-3e01fcfa3be4?q=80&w=736&auto=format&fit=crop"
  },
];

const getRelativeIndex = (index: number, current: number, total: number) => {
  const half = Math.floor(total / 2);
  let rel = index - current;
  if (rel > half) rel -= total;
  if (rel < -half) rel += total;
  return rel;
};

const CyberpunkEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i + 1) % events.length);

  // Use the same outline PNG for all events (replace with your actual path)
  const outlinePng = "/events/events-box.png";

  return (
    <section
      className="relative w-full px-6 md:px-12 py-20 text-white overflow-hidden font-mono bg-[radial-gradient(#00ffbb1a_1px,transparent_1px)] [background-size:40px_40px]"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-3 text-cyber-green relative hacker-title-new z-10"
        data-text="// LIVE EVENTS"
      >
        // LIVE EVENTS
      </h2>

      <div className="relative flex justify-center items-center gap-6">
        <button onClick={prev} className="z-20 text-cyber-pink hover:text-white transition">
          <ChevronLeft size={40} />
        </button>

        {/* Only show the current event, inside an outlined box with 3 sections - bigger and better aligned */}
        <div className="relative w-full max-w-7xl h-[750px] flex justify-center items-center overflow-visible">
          <div className="relative group flex flex-col items-center">
            <div className="relative h-[750px] w-[1200px] max-w-full flex flex-col items-stretch overflow-visible">
              <img
                src={outlinePng}
                alt="Card outline"
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                style={{
                  zIndex: 3,
                  transform: 'scale(1.25)',
                  margin: '0',
                  filter: 'drop-shadow(0 0 32px #00ffff) drop-shadow(0 0 64px #00ffff80)'
                }}
                draggable={false}
              />
              {/* 3-box layout: left big image, right top name, right bottom info */}
              <div className="absolute inset-0 z-10 flex" style={{ padding: '4.5% 4.5%' }}>
                {/* Left big box: event image */}
                <div style={{ width: '57%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={events[currentIndex].image}
                    alt={events[currentIndex].name}
                    className="object-cover rounded-xl shadow-2xl"
                    style={{ width: '100%', height: '95%', borderRadius: '22px', background: '#111', boxShadow: '0 0 32px #00ffff80' }}
                    onError={e => (e.target.style.display = 'none')}
                  />
                </div>
                {/* Right side: two stacked boxes with adjustable heights */}
                {(() => {
                  // Set these variables to adjust heights independently
                  const headingBoxHeight = '110%'; // e.g. '40%' or '300px'
                  const infoBoxHeight = '60%'; // e.g. '60%' or '400px'
                  return (
                    <div style={{ width: '60%', height: '90%', display: 'flex', flexDirection: 'column' }}>
                      {/* Top right: event name - perfectly centered */}
                      <div style={{ height: headingBoxHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10%' }}>
                        <h3 className="text-cyan-400 text-4xl md:text-5xl font-bold tracking-wider text-center" style={{ fontFamily: 'Orbitron, monospace', textShadow: '0 0 18px #00ffff, 0 0 32px #00ffff', margin: 0, width: '100%' }}>
                          {events[currentIndex].name}
                        </h3>
                      </div>
                      {/* Bottom right: event info - vertically and horizontally centered */}
                      <div style={{ height: infoBoxHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 6%', gap: '2.5rem' }}>
                        <p className="text-gray-200 text-lg leading-relaxed font-mono text-center" style={{ fontSize: '18px', lineHeight: '1.7', textShadow: '0 0 8px #00ffff80', margin: 0, width: '100%' }}>
                          {events[currentIndex].description}
                        </p>
                        <div className="flex gap-8 text-cyber-green text-base justify-center w-full">
                          <div className="flex items-center gap-2 border border-cyber-green px-6 py-3 rounded-full glitch-chip text-lg" style={{ minWidth: '140px', justifyContent: 'center' }}>
                            <Calendar size={22} />
                            <span>{events[currentIndex].date}</span>
                          </div>
                          <div className="flex items-center gap-2 border border-cyber-green px-6 py-3 rounded-full glitch-chip text-lg" style={{ minWidth: '140px', justifyContent: 'center' }}>
                            <Clock size={22} />
                            <span>{events[currentIndex].time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        <button onClick={next} className="z-20 text-cyber-pink hover:text-white transition">
          <ChevronRight size={40} />
        </button>
      </div>

      <style>{`
        .hacker-title-new::before,
        .hacker-title-new::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          mix-blend-mode: screen;
          opacity: 0.6;
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

        .glitchy-title::before,
        .glitchy-title::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          pointer-events: none;
          white-space: nowrap;
        }
        .glitchy-title::before {
          top: -1px;
          color: #ff00d4;
          animation: glitchSmall 2s infinite ease-in-out;
          z-index: -1;
        }
        .glitchy-title::after {
          top: 1px;
          color: cyan;
          animation: glitchSmall 2s infinite ease-in-out;
          z-index: -2;
        }

        @keyframes glitchSmall {
          0%, 100% { transform: translate(0); opacity: 1; }
          20% { transform: translate(-1px, 1px); opacity: 0.9; }
          40% { transform: translate(1px, -1px); opacity: 1; }
          60% { transform: translate(1px, 1px); opacity: 0.8; }
          80% { transform: translate(-1px, -1px); opacity: 0.95; }
        }

        @keyframes scanline {
          0%, 100% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
        }

        .animate-scanline {
          animation: scanline 2.5s ease-in-out infinite;
          transform-origin: left;
        }

        .pulse {
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 8px #00ffb2, inset 0 0 8px #00ffb2; }
          50% { box-shadow: 0 0 14px #00ffb2, inset 0 0 14px #00ffb2; }
        }

        .clipped-card {
          clip-path: polygon(4% 0%, 100% 0%, 100% 96%, 96% 100%, 0% 100%, 0% 4%);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .clipped-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1.5px solid #00ffb2;
          box-shadow: 0 0 12px #00ffb2, 0 0 18px #00ffb2 inset;
          clip-path: polygon(4% 0%, 100% 0%, 100% 96%, 96% 100%, 0% 100%, 0% 4%);
          z-index: 1;
          pointer-events: none;
          animation: borderFlicker 3s infinite ease-in-out;
        }

        @keyframes borderFlicker {
          0%, 100% {
            box-shadow: 0 0 12px #00ffb2, 0 0 12px #00ffb2 inset;
          }
          50% {
            box-shadow: 0 0 18px #00ffd5, 0 0 12px #00ffd5 inset;
          }
        }

        .glitch-chip {
          animation: flicker 2s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
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

        .glow-line {
          box-shadow: 0 0 6px #ff00d4, 0 0 10px #ff00d4;
        }
      `}</style>
    </section>
  );
};

export default CyberpunkEvents;
