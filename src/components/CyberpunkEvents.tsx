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
  // Open registration URL for a specific event
  const openRegister = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
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

  // Always start at top when navigating here (especially on mobile)
  useEffect(() => {
    let prev: ScrollRestoration | undefined;
    try {
      prev = window.history.scrollRestoration as ScrollRestoration;
      window.history.scrollRestoration = 'manual';
    } catch {}
    // Scroll to top after mount
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => {
      try {
        if (prev) window.history.scrollRestoration = prev;
      } catch {}
    };
  }, []);

  const POSTER_FALLBACK = '/events/frames/Defuse.png';
  interface EventCard {
    title: string;
    description: string;
    date?: string;
    time?: string;
    venue?: string;
    prize?: string;
    organizer?: string;
    contact?: string;
    poster: string;
  registerUrl?: string; // Event-specific Google Form or registration link
  }
  const eventCards: EventCard[] = [
    {
      title: "Keyboard Warriors",
      description: "Your fingers have survived countless assignments. But are they fast enough to win? Face off in a furiously competitive, three-round showdown to be crowned the fastest typist on campus. Let your fingers fly!",
      date: "1st Sept 2025",
      time: "5:00 PM",
      venue: "Elicit Chowk",
      prize: "5K",
      organizer: "ACM MUJ",
  poster: "/events/frames/keyboard.png",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe2BUclCV4JXD0KR0jfxlwuIkpiJ6WZv9UrJoa7cqDWAmgW5A/viewform", // TODO: replace with Google Form URL
    },
    {
      title: "FUTSAL",
      description: "Get ready for a blast of pure energy! This is 3v3 football, where non-stop action and raw fun collide. In this fast-paced tournament, quick thinking and even quicker feet decide the winner. Grab two friends, form a team, and prepare for an adrenaline-fueled battle on the court.",
      date: "4th Sept 2025",
      time: "4:00pm",
      venue: "Elicit Chowk",
  poster: "/events/frames/futsal.png",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfoVZt0oTO74JTYMOzrqjxz2o5ChIVVTJW5lMmQ13MrF4Yf-Q/viewform", // TODO: replace with Google Form URL
    },
  //   {
  //     title: "Defuse 2.0",
  //     description: "A high-tension test of teamwork. One player is the 'Brains' with the puzzles, the other is the 'Hands' with the wire cutters. Your only connection is a walkie-talkie. In a race against time, clear communication is everything. Can your duo stay cool and cut the right wire?",
  //     date: "10th Sept 2025",
  //     venue: "Main Chowk",
  // poster: "/events/frames/defuse.png",
  // registerUrl: "/register", // TODO: replace with Google Form URL
  //   },
    {
      title: "Final Destination",
      description: "Hackers and developers unite\nto push the boundaries of\nwhat's possible in cyberspace\nLearn cutting-edge techniques\nand network with the elite\nof the digital underground",
      date: "6th Sept 2025",
      time: "10:30 AM",
      venue: "AB2 Lobby",
  poster: "/events/frames/fd.png",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc8rbmttZALn4JwGcM1VTI40KfYqvB_HbxKTBJv0Ke2NFX2uQ/viewform", // TODO: replace with Google Form URL
    },
    {
      title: "Hacks 10.0",
  description: "Thirty-six hours. One team. Endless possibilities. Welcome to Hacks, the 36-hour offline hackathon where ideas are forged into reality. You'll take your concept from an initial pitch to a working prototype through three intense rounds before the final presentation to the judges. Are you ready to build something incredible?",      date: "17th Sept 2025",
      time: "02:00 PM",
      venue: "AB1",
  poster: "/events/frames/hacks10.0.png",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdYYACaGPrY36eIwcMM-FBYs9UnpHH3NNJOPbwMynuidt38RQ/viewform", // TODO: replace with Google Form URL
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
    <div className="min-h-screen bg-black relative overflow-hidden font-orbitron">
      <DigitalRain />
      {/* Page Heading */}
  <div className="w-full flex justify-center pt-10 md:pt-8 pb-1 md:pb-0 select-none pointer-events-none">
        <h1
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider"
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
          aria-label="Event Details"
        >
          EVENT DETAILS
        </h1>
      </div>
      {isMobile ? (
        <div
          className="relative w-full flex flex-col items-center pt-2 pb-12 px-2 overflow-hidden select-none"
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
            <div className="text-green-400 font-orbitron text-[10px] tracking-widest">{currentCard + 1} / {eventCards.length}</div>
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
                    className={`w-[310px] h-[530px] bg-black border-2 border-green-400 shadow-lg flex flex-col p-4 rounded-md overflow-hidden relative pb-12 ${isActive ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={() => {
                      if (isActive && !isDragging && Math.abs(dragDX) < 8) openRegister(event.registerUrl);
                    }}
                    role={isActive ? 'button' : undefined}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => { if (isActive && (e.key === 'Enter' || e.key === ' ')) openRegister(event.registerUrl); }}
                    title={isActive ? (event.registerUrl ? 'Click to register' : 'Registration link unavailable') : undefined}
                  
                    style={{ boxShadow: isActive ? '0 0 22px #22c55e88' : '0 0 10px #22c55e55' }}>
                    <div className="w-full mb-3 flex justify-center">
                      <img
                        src={event.poster || POSTER_FALLBACK}
                        alt={`${event.title} Poster`}
                        className="max-h-40 object-contain rounded-md"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER_FALLBACK; }}
                      />
                    </div>
                    <h2 className="text-pink-500 font-orbitron font-bold text-lg mb-2 text-center glow-text-pink tracking-wide">{event.title}</h2>
                    <p className="text-green-400 font-orbitron text-[11px] whitespace-pre-line mb-3 text-center leading-snug px-1">{event.description}</p>
                    <div className="text-green-400 font-orbitron text-[11px] space-y-1 mt-5 text-center">
                      {event.date && <p><span className="text-pink-400">📅</span> {event.date}</p>}
                      {event.time && <p><span className="text-pink-400">⏰</span> {event.time}</p>}
                      {event.venue && <p><span className="text-pink-400">📍</span> {event.venue}</p>}
                      {event.prize && <p><span className="text-pink-400">🏆</span> {event.prize}</p>}
                      {event.organizer && <p><span className="text-pink-400">ORG:</span> {event.organizer}</p>}
                      {event.contact && <p><span className="text-pink-400">☎</span> {event.contact}</p>}
                      <p className="pt-1 text-[10px] tracking-widest text-green-500/70">CARD {i + 1} / {eventCards.length}</p>
                    </div>
                    {/* CTA: Click to register */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center select-none">
                      {event.registerUrl ? (
                        <a
                          href={event.registerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block px-3 py-1 border border-pink-500/70 text-pink-300 rounded-md text-[10px] tracking-widest shadow-[0_0_8px_rgba(236,72,153,0.6)] bg-black/60 backdrop-blur-sm hover:bg-black/80"
                        >
                          CLICK TO REGISTER
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1 border border-neutral-600 text-neutral-400 rounded-md text-[10px] tracking-widest bg-black/60 cursor-not-allowed">
                          REGISTRATION CLOSED
                        </span>
                      )}
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
                    onClick={() => { if (isActive) openRegister(event.registerUrl); }}
                    role={isActive ? 'button' : undefined}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => { if (isActive && (e.key === 'Enter' || e.key === ' ')) openRegister(event.registerUrl); }}
                    title={isActive ? (event.registerUrl ? 'Click to register' : 'Registration link unavailable') : undefined}
                  >
                    {/* Left side: poster & meta */}
                    <div className="flex flex-col items-center w-1/2">
                      <img
                        src={event.poster || POSTER_FALLBACK}
                        alt={`${event.title} Poster`}
                        className="rounded-lg shadow-lg max-h-[600px] object-contain mt-[-70px]"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER_FALLBACK; }}
                      />
                      <div className="text-green-400 font-orbitron text-sm text-center mt-[-70px] space-y-1">
                        <p className="font-bold text-pink-500 text-lg">{event.title}</p>
                        {event.organizer && <p>Organizer: {event.organizer}</p>}
                        {event.contact && <p>Contact: {event.contact}</p>}
                      </div>
                    </div>
                    {/* Right side: details */}
                    <div className="flex flex-col justify-center w-1/2 text-left">
                      <h2 className="text-pink-500 font-bold font-orbitron mb-4 text-2xl glow-text-pink">EVENT : {event.title}</h2>
                      <p className="text-green-400 font-orbitron text-sm whitespace-pre-line mb-6">{event.description}</p>
                      <div className="text-green-400 font-orbitron text-base space-y-2">
                        {event.date && <p><span className="text-pink-400">📅 Date:</span> {event.date}</p>}
                        {event.time && <p><span className="text-pink-400">⏰ Time:</span> {event.time}</p>}
                        {event.venue && <p><span className="text-pink-400">📍 Venue:</span> {event.venue}</p>}
                        {event.prize && <p><span className="text-pink-400">🏆 Prize Pool:</span> {event.prize}</p>}
                        <p className="text-green-400 text-xs font-mono pt-4">CARD {i + 1} / {eventCards.length}</p>
                      </div>
                      {/* CTA for desktop: explicit link */}
                      <div className="mt-6 select-none">
                        {event.registerUrl ? (
                          <a
                            href={event.registerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block px-4 py-2 border border-pink-500/70 text-pink-300 rounded-md text-xs tracking-widest shadow-[0_0_10px_rgba(236,72,153,0.6)] hover:bg-black/40"
                          >
                            CLICK TO REGISTER
                          </a>
                        ) : (
                          <span className="inline-block px-4 py-2 border border-neutral-600 text-neutral-400 rounded-md text-xs tracking-widest cursor-not-allowed">
                            REGISTRATION CLOSED
                          </span>
                        )}
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
