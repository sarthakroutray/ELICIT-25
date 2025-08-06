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

        <div className="relative w-full max-w-6xl h-[480px] flex justify-center items-center overflow-hidden">
          {events.map((event, index) => {
            const rel = getRelativeIndex(index, currentIndex, events.length);
            if (Math.abs(rel) > 1) return null;

            const isCenter = rel === 0;
            const translate = rel * 105;

            return (
              <div
                key={event.id}
                className={`absolute transition-transform duration-700 ease-in-out ${
                  isCenter ? 'z-30 scale-100 opacity-100' : 'z-10 scale-95 opacity-70 blur-[1px]'
                }`}
                style={{ transform: `translateX(${translate}%)` }}
              >
                <div className="w-[320px] md:w-[460px] bg-black glow-card clipped-card px-6 py-8 relative hover:rotate-[0.5deg] transition-transform duration-500">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3
                    className="text-2xl font-bold text-cyber-pink glitchy-title relative z-10 mb-3"
                    data-text={event.name}
                  >
                    {event.name}
                    <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-cyber-pink animate-scanline z-20 glow-line" />
                  </h3>
                  <p className="text-cyber-green/80 text-sm mt-2">{event.description}</p>
                  <div className="flex gap-4 mt-4 text-cyber-green text-xs">
                    <div className="flex items-center gap-2 border border-cyber-green px-3 py-1 rounded-full glitch-chip">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 border border-cyber-green px-3 py-1 rounded-full glitch-chip">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
