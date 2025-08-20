import React, { useState } from 'react';
import DigitalRain from './DigitalRain';

// Vertical poster mode:
// Provide 12 poster images named poster1.png .. poster12.png (or .jpg) inside /public/events/frames
// Adjust POSTER_EXT if needed. Missing images will fall back to the first available file.

interface PosterBox { id: number; poster: string; }

// EDIT THESE PATHS LATER: supply the actual poster image for each event (must live under /public)
// You can use .png/.jpg/.webp etc. Example: '/events/frames/hackathon.png'
const POSTER_PATHS: string[] = [
  '/events/frames/Defuse.png', // 1
  '/events/frames/Defuse.png', // 2
  '/events/frames/Defuse.png', // 3
  '/events/frames/Defuse.png', // 4
  '/events/frames/Defuse.png', // 5
  '/events/frames/Defuse.png', // 6
  '/events/frames/Defuse.png', // 7
  '/events/frames/Defuse.png', // 8
  '/events/frames/Defuse.png', // 9
  '/events/frames/Defuse.png', // 10
  '/events/frames/Defuse.png', // 11
  '/events/frames/Defuse.png', // 12
];

const FALLBACK_POSTER = '/events/frames/Defuse.png';

const buildBoxes = (): PosterBox[] =>
  POSTER_PATHS.map((p, idx) => ({ id: idx + 1, poster: p }));

const EventsGrid: React.FC = () => {
  const boxes = buildBoxes();
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative min-h-screen bg-black text-white font-mono py-16 px-6 overflow-hidden">
      <DigitalRain />
  <h1 className="text-center text-4xl mb-12 tracking-widest text-cyan-300" style={{ fontFamily: 'Orbitron, monospace' }}>EVENTS</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 max-w-screen-2xl mx-auto px-2 relative overflow-visible">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`relative group aspect-[3/4] select-none min-h-[220px] md:min-h-[300px] xl:min-h-[340px] overflow-visible transition-all duration-300 ease-out will-change-transform
                ${hovered === box.id
                  ? 'z-30 scale-[1.14] md:scale-[1.18] xl:scale-[1.22]'
                  : hovered
                    ? 'scale-[0.88] md:scale-[0.9] xl:scale-[0.92] opacity-80'
                    : 'scale-[1.04]'}
              `}
            onMouseEnter={() => setHovered(box.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={box.poster}
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_POSTER; }}
              alt={`Event poster ${box.id}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
              style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,255,0.18))' }}
            />
          </div>
        ))}
      </div>
      <style>{`
        .aspect-[3/4] { position: relative; }
        /* Slight nudge effect for neighbors using data attributes could be added later if precise push directions needed */
      `}</style>
    </div>
  );
};

export default EventsGrid;
