import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalRain from './DigitalRain';

// Vertical poster mode:
// Provide 12 poster images named poster1.png .. poster12.png (or .jpg) inside /public/events/frames
// Adjust POSTER_EXT if needed. Missing images will fall back to the first available file.

interface PosterBox { id: number; poster: string; }

// EDIT THESE PATHS LATER: supply the actual poster image for each event (must live under /public)
// You can use .png/.jpg/.webp etc. Example: '/events/frames/hackathon.png'
const POSTER_PATHS: string[] = [
  '/events/frames/pcbu.png', // 2
  '/events/frames/Defuse2.png', // 3
  '/events/frames/fd.png', // 4
  '/events/frames/hacks10.0.png', // 5, // 6
  '/events/frames/devcon.png', // 7
  '/events/frames/ballerbot.png', // 8
  '/events/frames/codelofi.png',
  '/events/frames/keyboard.png', // 1
  '/events/frames/futsal.png', // 9
  '/events/frames/comingsoon.png', // 10
  '/events/frames/comingsoon.png', // 11
  '/events/frames/comingsoon.png',// 12
];

const FALLBACK_POSTER = '/events/frames/Defuse.png';

const buildBoxes = (): PosterBox[] =>
  POSTER_PATHS.map((p, idx) => ({ id: idx + 1, poster: p }));

const EventsGrid: React.FC = () => {
  const boxes = buildBoxes();
  const [hovered, setHovered] = useState<number | null>(null);

  // Transition state for animated navigation
  interface Shard {
    x: number; // left within rect
    y: number; // top within rect
    w: number;
    h: number;
    bx: number; // background-position-x (negative)
    by: number; // background-position-y (negative)
    tx: number; // translate x on explode
    ty: number; // translate y on explode
    rot: number; // rotation deg on explode
    delay: number; // ms
  }

  interface TransitionState {
    id: number;
    poster: string;
    rect: { top: number; left: number; width: number; height: number } | null;
    phase: 'expand' | 'shatter';
    expandStarted: boolean;
    shatterStarted: boolean;
    dx: number;
    dy: number;
    scale: number;
    shards: Shard[];
    totalMs: number; // for shatter phase only
  }
  const [transition, setTransition] = useState<TransitionState | null>(null);

  // Start the current phase on next frame so initial style can paint first
  useEffect(() => {
    if (!transition) return;
    if (transition.phase === 'expand' && !transition.expandStarted) {
      const raf = requestAnimationFrame(() => {
        setTransition(t => (t ? { ...t, expandStarted: true } : t));
      });
      return () => cancelAnimationFrame(raf);
    }
    if (transition.phase === 'shatter' && !transition.shatterStarted) {
      const raf = requestAnimationFrame(() => {
        setTransition(t => (t ? { ...t, shatterStarted: true } : t));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transition]);

  const handlePosterClick = (box: PosterBox, target: HTMLDivElement) => {
    if (transition) return; // prevent double clicks
  const rect = target.getBoundingClientRect();
  // Hide the original poster to avoid double-visibility beneath shards
  try { target.style.opacity = '0'; } catch {}

  // Compute center translation and target scale for expand phase
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dx = vw / 2 - (rect.left + rect.width / 2);
  const dy = vh / 2 - (rect.top + rect.height / 2);
  const scale = Math.min((vw * 0.9) / rect.width, (vh * 0.9) / rect.height);

  // Build shards grid (lower counts for better performance, adaptive by viewport)
  const isMobile = window.innerWidth < 640;
  const COLS = isMobile ? 4 : 6; // 24 or 54 shards
  const ROWS = isMobile ? 6 : 9;
    const tileW = rect.width / COLS;
    const tileH = rect.height / ROWS;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
  const baseMs = 500; // base animation duration per shard
  const maxDelay = 120; // max stagger
    const shards: Shard[] = [];
    let maxTotal = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * tileW;
        const y = r * tileH;
        const mx = x + tileW / 2;
        const my = y + tileH / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.hypot(dx, dy) + 1;
        const nx = dx / dist;
        const ny = dy / dist;
  const spread = 90 + Math.min(180, dist * 0.4) + Math.random() * 40;
        const tx = nx * spread;
        const ty = ny * spread;
        const rot = (Math.random() - 0.5) * 45; // -22.5 to 22.5 deg
        const delay = Math.random() * maxDelay;
        const total = delay + baseMs;
        if (total > maxTotal) maxTotal = total;
        shards.push({
          x,
          y,
          w: tileW,
          h: tileH,
          bx: -x,
          by: -y,
          tx,
          ty,
          rot,
          delay,
        });
      }
    }

    setTransition({
      id: box.id,
      poster: box.poster,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
      phase: 'expand',
      expandStarted: false,
      shatterStarted: false,
      dx,
      dy,
      scale,
      shards,
      totalMs: Math.ceil(maxTotal),
    });
  };
  return (
    <div className="relative min-h-screen bg-black text-white font-orbitron py-16 px-6 overflow-hidden">
      <DigitalRain />
  <h1
    className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 tracking-wider"
    style={{
      fontFamily: 'Orbitron, monospace',
      textShadow: `
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
  0 0 10px #00ff41,
  0 0 20px #00ff41,
  0 0 30px #00ff41
      `,
      filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
    }}
  >
    EVENTS
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 max-w-screen-2xl mx-auto px-2 relative overflow-visible">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`relative group aspect-[3/4] select-none min-h-[220px] md:min-h-[300px] xl:min-h-[340px] overflow-visible transition-all duration-300 ease-out will-change-transform pointer-events-auto
                ${hovered === box.id
                  ? 'z-30 scale-[1.14] md:scale-[1.18] xl:scale-[1.22]'
                  : hovered
                    ? 'scale-[0.88] md:scale-[0.9] xl:scale-[0.92] opacity-80'
                    : 'scale-[1.04]'}
              `}
            onMouseEnter={() => setHovered(box.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e) => handlePosterClick(box, e.currentTarget)}
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
      {/* Transition Overlay - 2 phases: expand then shatter */}
      {transition && transition.rect && (
        <div className="fixed inset-0 z-[999] pointer-events-none">
          {/* subtle fade */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            transition.phase === 'expand' ? (transition.expandStarted ? 'bg-black/40 opacity-100' : 'bg-black/0 opacity-0')
            : (transition.shatterStarted ? 'bg-black/60 opacity-100' : 'bg-black/40 opacity-100')
          }`} />

          {/* Phase 1: Expand the full poster to center */}
          {transition.phase === 'expand' && (
            <img
              src={transition.poster}
              alt="Transition Poster"
              className="rounded-lg"
              style={{
                position: 'fixed',
                top: transition.rect!.top,
                left: transition.rect!.left,
                width: transition.rect!.width,
                height: transition.rect!.height,
                objectFit: 'cover',
                transform: transition.expandStarted
                  ? `translate3d(${transition.dx}px, ${transition.dy}px, 0) scale(${transition.scale})`
                  : 'translate3d(0,0,0) scale(1)',
                transition: 'transform 420ms cubic-bezier(0.2,0.7,0.2,1)',
                willChange: 'transform',
              }}
              onTransitionEnd={() => {
                // Switch to shatter phase
                setTransition(t => (t ? { ...t, phase: 'shatter', shatterStarted: false } : t));
              }}
            />
          )}

          {/* Phase 2: Shatter into shards */}
          {transition.phase === 'shatter' && (
            <div
              className="absolute"
              style={{
                top: transition.rect!.top,
                left: transition.rect!.left,
                width: transition.rect!.width,
                height: transition.rect!.height,
                overflow: 'visible',
                contain: 'layout paint',
                transform: `translate3d(${transition.dx}px, ${transition.dy}px, 0) scale(${transition.scale})`,
                willChange: 'transform',
              }}
            >
              {transition.shards.map((s, i) => (
                <div
                  key={i}
                  className="absolute will-change-transform"
                  style={{
                    top: s.y,
                    left: s.x,
                    width: s.w,
                    height: s.h,
                    backgroundImage: `url(${transition.poster})`,
                    backgroundPosition: `${s.bx}px ${s.by}px`,
                    backgroundSize: `${transition.rect!.width}px ${transition.rect!.height}px`,
                    backfaceVisibility: 'hidden',
                    transform: transition.shatterStarted
                      ? `translate3d(${s.tx}px, ${s.ty}px, 0) rotateZ(${s.rot}deg)`
                      : 'translate3d(0px, 0px, 0) rotateZ(0deg)',
                    opacity: transition.shatterStarted ? 0 : 1,
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.2,0.7,0.2,1)',
                    transitionDelay: `${s.delay}ms`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Cyan scanline accent */}
          <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 ${
            transition.phase === 'shatter' && transition.shatterStarted ? 'opacity-40' : ''
          }`} />
        </div>
      )}
      <style>{`
        .aspect-[3/4] { position: relative; }
        /* Slight nudge effect for neighbors using data attributes could be added later if precise push directions needed */
      `}</style>
      {/* Trigger navigation once shards have scattered */}
      {transition && transition.phase === 'shatter' && transition.shatterStarted && (
        <NavigateAfter ms={transition.totalMs} to={`/events/${transition.id}`} onNavigate={() => setTransition(null)} />
      )}
    </div>
  );
};

// Helper component to perform delayed navigation without tying to any single shard's onTransitionEnd
const NavigateAfter: React.FC<{ ms: number; to: string; onNavigate?: () => void }> = ({ ms, to, onNavigate }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => {
      navigate(to);
      onNavigate?.();
    }, Math.max(0, ms));
    return () => clearTimeout(t);
  }, [ms, to, navigate, onNavigate]);
  return null;
};

export default EventsGrid;