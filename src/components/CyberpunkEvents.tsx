import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DigitalRain from "./DigitalRain";

const CyberpunkEventInterface: React.FC = () => {
  const params = useParams();
  const requestedId = params.id ? parseInt(params.id, 10) : NaN;
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));
  // Drag/swipe state (mobile)
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDX, setDragDX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // Linktree destination (hardcoded here per request)
  const LINKTREE_URL = 'https://linktr.ee/ROAD_TO_ELICIT_25'; // TODO: replace with your actual Linktree URL
  const openLinktree = () => {
    if (!LINKTREE_URL) return;
    window.open(LINKTREE_URL, '_blank', 'noopener,noreferrer');
  };

  // If route provides an id param, focus that card on mount
  useEffect(() => {
    if (!isNaN(requestedId)) {
      const idx = Math.max(0, Math.min(requestedId - 1, eventCards.length - 1));
      setCurrentCard(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedId]);

  // Track viewport width for responsive switch
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const POSTER_FALLBACK = '/events/frames/Defuse.png';
  const eventCards = [
    {
      title: "Keyboard Warriors",
      description: "Your fingers have survived countless assignments. But are they fast enough to win? Face off in a furiously competitive, three-round showdown to be crowned the fastest typist on campus. Let your fingers fly!",
      date: "15th Sept 2025",
      time: "12:30 PM",
      venue: "Old Mess",
      prize: "5K",
      contact: "+91-XXXXXXXXXX",
      organizer: "ACM MUJ",
      poster: "/events/frames/keyboard.png",
    },
    {
      title: "FUTSAL",
      description: "Get ready for a blast of pure energy! This is 3v3 football, where non-stop action and raw fun collide. In this fast-paced tournament, quick thinking and even quicker feet decide the winner. Grab two friends, form a team, and prepare for an adrenaline-fueled battle on the court.",
      date: "16th Sept 2025",
      time: "10:00 AM",
      venue: "Innovation Hub",
      organizer: "Tech Council",
      poster: "/events/frames/futsal.png",
    },
    {
      title: "Defuse 2.0",
      description: "A high-tension test of teamwork. One player is the 'Brains' with the puzzles, the other is the 'Hands' with the wire cutters. Your only connection is a walkie-talkie. In a race against time, clear communication is everything. Can your duo stay cool and cut the right wire?",
      date: "16th Sept 2025",
      time: "09:00 PM",
      venue: "Main Arena",
      poster: "/events/frames/defuse.png",
    },
    {
      title: "Final Destination",
      description: "Hackers and developers unite\nto push the boundaries of\nwhat's possible in cyberspace\nLearn cutting-edge techniques\nand network with the elite\nof the digital underground",
      date: "17th Sept 2025",
      time: "11:00 AM",
      venue: "Auditorium A",
      organizer: "Dev Guild",
      poster: "/events/frames/fd.png",
    },
    {
      title: "Hacks 10.0",
      description: "Thirty-six hours. One team. Endless possibilities. Welcome to Hacks, the 36-hour offline hackathon where ideas are forged into reality. You'll take your concept from an initial pitch to a working prototype through three intense rounds before the final presentation to the judges. Are you ready to build something incredible?",      date: "17th Sept 2025",
      time: "02:00 PM",
      venue: "Gallery Wing",
      poster: "/events/frames/hacks10.0.png",
    },
    {
      title: "PC Building Tournament",
      description: "",
      date: "18th Sept 2025",
      time: "01:30 PM",
      venue: "eSports Lab",
      prize: "10K",
      poster: "/events/frames/pcbuilding.png",
    },
  ];

  const handleNext = () =>
    setCurrentCard((prev) => (prev + 1) % eventCards.length);
  const handlePrev = () =>
    setCurrentCard((prev) => (prev - 1 + eventCards.length) % eventCards.length);

  // Pointer / touch handlers for mobile swipe
  const MIN_SWIPE = 60; // px threshold
  const rubberBand = (d: number, constant = 180) => {
    // asymptotic resistance using tanh
    return constant * Math.tanh(d / constant);
  };
  const handlePointerDown = (clientX: number) => {
    if (!isMobile) return;
    setDragStartX(clientX);
    setDragDX(0);
    setIsDragging(true);
  };
  const handlePointerMove = (clientX: number) => {
    if (!isMobile || !isDragging || dragStartX === null) return;
    const dx = clientX - dragStartX;
    setDragDX(dx);
  };
  const endDrag = () => {
    if (!isMobile || !isDragging) return;
    if (dragDX > MIN_SWIPE) {
      handlePrev();
    } else if (dragDX < -MIN_SWIPE) {
      handleNext();
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragDX(0);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DigitalRain />
      {/* Page Heading */}
      <div className="w-full flex justify-center pt-10 md:pt-8 pb-4 md:pb-0 select-none pointer-events-none">
        <h1
          className="relative text-center font-mono font-bold tracking-[0.35em] text-sm sm:text-base md:text-2xl lg:text-3xl px-4 py-2 text-cyan-300"
          style={{
            textShadow: `0 0 6px #06b6d4, 0 0 14px #06b6d4, 0 0 28px #22c55e, 2px 2px 4px rgba(0,0,0,0.9)`,
            letterSpacing: '0.35em'
          }}
          aria-label="Event Details"
        >
          <span className="after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-cyan-400/10 after:to-transparent after:pointer-events-none">
            EVENT DETAILS
          </span>
        </h1>
      </div>
      {isMobile ? (
        <div
          className="relative w-full flex flex-col items-center pt-20 pb-16 px-2 overflow-hidden select-none"
          onPointerDown={(e) => handlePointerDown(e.clientX)}
          onPointerMove={(e) => handlePointerMove(e.clientX)}
          onPointerUp={endDrag}
          onPointerLeave={() => { if (isDragging) endDrag(); }}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
          onTouchEnd={endDrag}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Mobile progress & arrows */}
          <div className="flex items-center justify-between w-full max-w-sm mb-3 px-2">
            <button
              aria-label="Previous event"
              onClick={handlePrev}
              className="text-pink-500 text-3xl px-3 py-1 rounded hover:text-pink-300 active:scale-90 transition-all"
            >&larr;</button>
            <div className="text-green-400 font-mono text-[10px] tracking-widest">{currentCard + 1} / {eventCards.length}</div>
            <button
              aria-label="Next event"
              onClick={handleNext}
              className="text-pink-500 text-3xl px-3 py-1 rounded hover:text-pink-300 active:scale-90 transition-all"
            >&rarr;</button>
          </div>
          <div className="relative w-full h-[520px] flex items-center justify-center">
            {eventCards.map((event, i) => {
              const offset = i - currentCard;
              const total = eventCards.length;
              const half = Math.floor(total / 2);
              let rel = offset;
              if (offset > half) rel -= total;
              if (offset < -half) rel += total;
              if (Math.abs(rel) > 2) return null; // prune far cards
              const isActive = rel === 0;
      const effectiveDX = isDragging ? rubberBand(dragDX) : 0;
      const translate = rel * 210 + effectiveDX; // horizontal shift (px) plus resisted drag offset
      const extraScale = isActive && isDragging ? Math.min(Math.abs(dragDX) / 900, 0.07) : 0;
      const scale = (isActive ? 1.05 : 0.78) + extraScale;
              const opacity = isActive ? 1 : 0.35;
              const zIndex = isActive ? 30 : 10 - Math.abs(rel);
              return (
                <div
                  key={i}
                  className="absolute transition-all ease-in-out"
                  style={{
        transitionDuration: isDragging ? '0ms' : '480ms',
        transitionTimingFunction: isDragging ? 'linear' : 'cubic-bezier(0.22, 0.68, 0.35, 1.2)',
                    transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                    left: '50%',
                    top: '50%',
                    opacity,
                    zIndex,
                  }}
                >
                  <div
                    className={`w-[310px] h-[480px] bg-black border-2 border-green-400 shadow-lg flex flex-col p-4 rounded-md overflow-hidden ${isActive ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={() => {
                      if (isActive && !isDragging && Math.abs(dragDX) < 8) openLinktree();
                    }}
                    role={isActive ? 'button' : undefined}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => { if (isActive && (e.key === 'Enter' || e.key === ' ')) openLinktree(); }}
                    title={isActive ? 'Click to register' : undefined}
                  
                    style={{ boxShadow: isActive ? '0 0 22px #22c55e88' : '0 0 10px #22c55e55' }}>
                    <div className="w-full mb-3 flex justify-center">
                      <img
                        src={event.poster || POSTER_FALLBACK}
                        alt={`${event.title} Poster`}
                        className="max-h-40 object-contain rounded-md"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER_FALLBACK; }}
                      />
                    </div>
                    <h2 className="text-pink-500 font-mono font-bold text-lg mb-2 text-center glow-text-pink tracking-wide">{event.title}</h2>
                    <p className="text-green-400 font-mono text-[11px] whitespace-pre-line mb-3 text-center leading-snug px-1">{event.description}</p>
                    <div className="text-green-400 font-mono text-[11px] space-y-1 mt-5 text-center">
                      {event.date && <p><span className="text-pink-400">📅</span> {event.date}</p>}
                      {event.time && <p><span className="text-pink-400">⏰</span> {event.time}</p>}
                      {event.venue && <p><span className="text-pink-400">📍</span> {event.venue}</p>}
                      {event.prize && <p><span className="text-pink-400">🏆</span> {event.prize}</p>}
                      {event.organizer && <p><span className="text-pink-400">ORG:</span> {event.organizer}</p>}
                      {event.contact && <p><span className="text-pink-400">☎</span> {event.contact}</p>}
                      <p className="pt-1 text-[10px] tracking-widest text-green-500/70">CARD {i + 1} / {eventCards.length}</p>
                    </div>
                    {/* CTA: Click to register */}
                    <div className="mt-3 text-center select-none">
                      <span className="inline-block px-3 py-1 border border-pink-500/70 text-pink-300 rounded-md text-[10px] tracking-widest shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                        CLICK TO REGISTER
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
  <div className="flex items-center justify-center min-h-[100vh] py-2 relative">
          {/* Left arrow */}
          <div
            className="text-pink-500 text-6xl cursor-pointer hover:text-pink-400 absolute left-6 z-30 select-none"
            onClick={handlePrev}
          >&larr;</div>
          {/* Cards container */}
          <div className="relative w-full h-[760px] lg:h-[820px] flex items-center justify-center overflow-hidden">
            {eventCards.map((event, i) => {
              const offset = i - currentCard;
              const total = eventCards.length;
              const half = Math.floor(total / 2);
              let relativeOffset = offset;
              if (offset > half) relativeOffset -= total;
              if (offset < -half) relativeOffset += total;
              if (Math.abs(relativeOffset) > 2) return null;
              const isActive = relativeOffset === 0;
              const cardWidth = 600;
              const gap = 40;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${relativeOffset * (cardWidth + gap)}px) scale(${isActive ? 1.15 : 0.85})`,
                    opacity: isActive ? 1 : 0.45,
                    zIndex: isActive ? 20 : 10 - Math.abs(relativeOffset),
                  }}
                >
                  <div
                    className={`w-[900px] h-[600px] bg-black border-4 shadow-lg flex p-6 gap-6 ${isActive ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{
                      borderColor: '#22c55e',
                      boxShadow: isActive ? '0 0 30px #22c55e' : '0 0 10px rgba(34,197,94,0.5)',
                    }}
                    onClick={() => { if (isActive) openLinktree(); }}
                    role={isActive ? 'button' : undefined}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => { if (isActive && (e.key === 'Enter' || e.key === ' ')) openLinktree(); }}
                    title={isActive ? 'Click to register' : undefined}
                  >
                    {/* Left side: poster & meta */}
                    <div className="flex flex-col items-center w-1/2">
                      <img
                        src={event.poster || POSTER_FALLBACK}
                        alt={`${event.title} Poster`}
                        className="rounded-lg shadow-lg max-h-[600px] object-contain mt-[-70px]"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER_FALLBACK; }}
                      />
                      <div className="text-green-400 font-mono text-sm text-center mt-[-70px] space-y-1">
                        <p className="font-bold text-pink-500 text-lg">{event.title}</p>
                        {event.organizer && <p>Organizer: {event.organizer}</p>}
                        {event.contact && <p>Contact: {event.contact}</p>}
                      </div>
                    </div>
                    {/* Right side: details */}
                    <div className="flex flex-col justify-center w-1/2 text-left">
                      <h2 className="text-pink-500 font-bold font-mono mb-4 text-2xl glow-text-pink">EVENT : {event.title}</h2>
                      <p className="text-green-400 font-mono text-sm whitespace-pre-line mb-6">{event.description}</p>
                      <div className="text-green-400 font-mono text-base space-y-2">
                        {event.date && <p><span className="text-pink-400">📅 Date:</span> {event.date}</p>}
                        {event.time && <p><span className="text-pink-400">⏰ Time:</span> {event.time}</p>}
                        {event.venue && <p><span className="text-pink-400">📍 Venue:</span> {event.venue}</p>}
                        {event.prize && <p><span className="text-pink-400">🏆 Prize Pool:</span> {event.prize}</p>}
                        <p className="text-green-400 text-xs font-mono pt-4">CARD {i + 1} / {eventCards.length}</p>
                      </div>
                      {/* CTA: Click to register */}
                      <div className="mt-6 select-none">
                        <span className="inline-block px-4 py-2 border border-pink-500/70 text-pink-300 rounded-md text-xs tracking-widest shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                          CLICK TO REGISTER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right arrow */}
          <div
            className="text-pink-500 text-6xl cursor-pointer hover:text-pink-400 absolute right-6 z-30 select-none"
            onClick={handleNext}
          >&rarr;</div>
        </div>
      )}

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <style>{`
        .glow-text-pink {
          text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899;
        }
      `}</style>
    </div>
  );
};

export default CyberpunkEventInterface;
