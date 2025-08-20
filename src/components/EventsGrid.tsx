import React, { useState } from 'react';
import DigitalRain from './DigitalRain';

// Expected frame image naming convention placed under /public/events/frames
// One frame PER ROW, 3 rows total:
// frame1.jpg -> used for row 1 (events 1-4)
// frame2.jpg -> used for row 2 (events 5-8)
// frame3.jpg -> used for row 3 (events 9-12)
// Inner photos can still be unique: /public/events/photos/photo1.jpg ... photo12.jpg

interface EventBox {
  id: number;
  title?: string;
  frame: string; // path to frame image
}

const buildBoxes = (): EventBox[] => {
  const ROWS = 3;
  const COLS = 4;
  const total = ROWS * COLS; // 12
  return Array.from({ length: total }, (_, i) => {
    const row = Math.floor(i / COLS); // 0,1,2
    // Use a single frame per row: frame1.png for row 1 (items 1-4), frame2.png for row 2, frame3.png for row 3
    return {
      id: i + 1,
      frame: `/events/frames/frame${row + 1}.png`,
    };
  });
};

const EventsGrid: React.FC = () => {
  const boxes = buildBoxes();
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative min-h-screen bg-black text-white font-mono py-16 px-6 overflow-hidden">
      <DigitalRain />
  <h1 className="text-center text-4xl mb-12 tracking-widest text-cyan-300" style={{ fontFamily: 'Orbitron, monospace' }}>EVENTS</h1>
	<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6 max-w-screen-2xl mx-auto px-2 relative overflow-visible">
        {boxes.map(box => (
          <div
            key={box.id}
            className={`relative group aspect-[4/3] select-none min-h-[170px] md:min-h-[210px] xl:min-h-[240px] overflow-visible transition-all duration-300 ease-out will-change-transform
              ${(() => {
                const row = Math.floor((box.id - 1) / 4); // 0,1,2
                const isRow3 = row === 2; // third row uses frame3
                if (hovered === box.id) {
                  // Larger target scale for row3 to compensate smaller asset
                  return isRow3
                    ? 'z-30 scale-[1.14] md:scale-[1.18] xl:scale-[1.21]'
                    : 'z-30 scale-[1.08] md:scale-[1.12] xl:scale-[1.15]';
                }
                if (hovered) {
                  // Non-hovered while some hovered: shrink a bit more but keep row3 slightly larger than others
                  return isRow3
                    ? 'scale-[0.92] md:scale-[0.94] xl:scale-[0.95] opacity-80'
                    : 'scale-[0.9] md:scale-[0.92] xl:scale-[0.93] opacity-80';
                }
                // Idle state (no hover): row3 slightly bigger baseline
                return isRow3 ? 'scale-[1.04] md:scale-[1.05] xl:scale-[1.06]' : 'scale-100';
              })()}
            `}
            onMouseEnter={() => setHovered(box.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Frame only */}
            <img
              src={box.frame}
              alt={`Frame ${box.id}`}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
      <style>{`
        .aspect-[4/3] { position: relative; }
        /* Slight nudge effect for neighbors using data attributes could be added later if precise push directions needed */
      `}</style>
    </div>
  );
};

export default EventsGrid;
