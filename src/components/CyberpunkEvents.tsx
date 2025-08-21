import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DigitalRain from "./DigitalRain";

const CyberpunkEventInterface: React.FC = () => {
  const params = useParams();
  const requestedId = params.id ? parseInt(params.id, 10) : NaN;
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

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
      title: "DEFUSE 2.0",
      description: "Every second counts in this thrilling bomb defusal challenge.\nTest your logic, speed, and teamwork under pressure!",
      date: "15th Sept 2025",
      time: "12:30 PM",
      venue: "Old Mess",
      prize: "5K",
      contact: "+91-XXXXXXXXXX",
      organizer: "ACM MUJ",
      poster: "events/Defuse.png",
    },
    {
      title: "FUTSAL",
      description: "Digital revolution meets reality\nin this groundbreaking showcase\nof tomorrow's technology today\nExperience virtual worlds and\naugmented possibilities that will\nredefine your perception",
      date: "16th Sept 2025",
      time: "10:00 AM",
      venue: "Innovation Hub",
      organizer: "Tech Council",
      poster: "/events/frames/futsal.png",
    },
    {
      title: "NEON NIGHTS FESTIVAL",
      description: "Electric beats pulse through\nthe midnight air as artists\nfrom across the grid converge\nDance until dawn breaks over\nthe neon-lit cityscape while\nbass lines shake your core",
      date: "16th Sept 2025",
      time: "09:00 PM",
      venue: "Main Arena",
      poster: POSTER_FALLBACK,
    },
    {
      title: "MATRIX CODE SUMMIT",
      description: "Hackers and developers unite\nto push the boundaries of\nwhat's possible in cyberspace\nLearn cutting-edge techniques\nand network with the elite\nof the digital underground",
      date: "17th Sept 2025",
      time: "11:00 AM",
      venue: "Auditorium A",
      organizer: "Dev Guild",
      poster: POSTER_FALLBACK,
    },
    {
      title: "HOLOGRAM GALLERY OPENING",
      description: "Step into a world where art\ntranscends physical limitations\nInteractive holographic displays\nrespond to your presence while\ncreating immersive experiences\nthat blur reality and fiction",
      date: "17th Sept 2025",
      time: "02:00 PM",
      venue: "Gallery Wing",
      poster: POSTER_FALLBACK,
    },
    {
      title: "QUANTUM GAMING TOURNAMENT",
      description: "Compete in next-generation\nvirtual reality competitions\nwhere skill meets technology\nPrize pools worth millions\nof credits await the champions\nof this digital colosseum",
      date: "18th Sept 2025",
      time: "01:30 PM",
      venue: "eSports Lab",
      prize: "10K",
      poster: POSTER_FALLBACK,
    },
    {
      title: "SYNTHWAVE CONCERT SERIES",
      description: "Retro-futuristic sounds fill\nthe air as legendary artists\nperform live under laser lights\nNostalgic melodies meet\nmodern production in this\nepic audiovisual journey",
      date: "18th Sept 2025",
      time: "07:30 PM",
      venue: "Open Grounds",
      poster: POSTER_FALLBACK,
    },
  ];

  const handleNext = () =>
    setCurrentCard((prev) => (prev + 1) % eventCards.length);
  const handlePrev = () =>
    setCurrentCard((prev) => (prev - 1 + eventCards.length) % eventCards.length);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DigitalRain />
  {isMobile ? (
        <div className="relative w-full flex flex-col items-center pt-24 pb-24 px-4">
          {/* Mobile arrows */}
          <div className="flex items-center justify-between w-full max-w-md mb-4">
            <button
              aria-label="Previous event"
              onClick={handlePrev}
              className="text-pink-500 text-3xl px-4 py-2 rounded hover:text-pink-300 transition-colors"
            >&larr;</button>
            <div className="text-green-400 font-mono text-xs tracking-widest">{currentCard + 1} / {eventCards.length}</div>
            <button
              aria-label="Next event"
              onClick={handleNext}
              className="text-pink-500 text-3xl px-4 py-2 rounded hover:text-pink-300 transition-colors"
            >&rarr;</button>
          </div>
          {/* Active card simplified layout */}
          {(() => {
            const event = eventCards[currentCard];
            return (
              <div className="w-full max-w-md bg-black border-2 border-green-400 shadow-lg p-4 rounded-md relative overflow-hidden" style={{ boxShadow: '0 0 18px #22c55e55' }}>
                <div className="w-full mb-3 flex justify-center">
                  <img
                    src={event.poster || POSTER_FALLBACK}
                    alt={`${event.title} Poster`}
                    className="max-h-64 object-contain rounded-md"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER_FALLBACK; }}
                  />
                </div>
                <h2 className="text-pink-500 font-mono font-bold text-xl mb-2 text-center glow-text-pink">{event.title}</h2>
                <p className="text-green-400 font-mono text-xs whitespace-pre-line mb-4 text-center">{event.description}</p>
                <div className="text-green-400 font-mono text-xs space-y-1">
                  {event.date && <p><span className="text-pink-400">📅</span> {event.date}</p>}
                  {event.time && <p><span className="text-pink-400">⏰</span> {event.time}</p>}
                  {event.venue && <p><span className="text-pink-400">📍</span> {event.venue}</p>}
                  {event.prize && <p><span className="text-pink-400">🏆</span> {event.prize}</p>}
                  {event.organizer && <p><span className="text-pink-400">ORG:</span> {event.organizer}</p>}
                  {event.contact && <p><span className="text-pink-400">☎</span> {event.contact}</p>}
                </div>
              </div>
            );
          })()}
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
                    className="w-[900px] h-[600px] bg-black border-4 shadow-lg flex p-6 gap-6"
                    style={{
                      borderColor: '#22c55e',
                      boxShadow: isActive ? '0 0 30px #22c55e' : '0 0 10px rgba(34,197,94,0.5)',
                    }}
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
