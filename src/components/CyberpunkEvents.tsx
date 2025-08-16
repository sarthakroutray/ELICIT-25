import React, { useState } from 'react';
import DigitalRain from './DigitalRain';

const CyberpunkEventInterface: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const eventCards = [
    {
      title: "ANY EVENT NAME",
      description: "Basic cards are too but the\nbest of you read a brown what\nu know how was a good boy\nday at all my mom and u\nwant a few days a little bit\nof me know you so"
    },
    {
      title: "CYBER NEXUS EXPO",
      description: "Digital revolution meets reality\nin this groundbreaking showcase\nof tomorrow's technology today\nExperience virtual worlds and\naugmented possibilities that will\nredefine your perception"
    },
    {
      title: "NEON NIGHTS FESTIVAL",
      description: "Electric beats pulse through\nthe midnight air as artists\nfrom across the grid converge\nDance until dawn breaks over\nthe neon-lit cityscape while\nbass lines shake your core"
    },
    {
      title: "MATRIX CODE SUMMIT",
      description: "Hackers and developers unite\nto push the boundaries of\nwhat's possible in cyberspace\nLearn cutting-edge techniques\nand network with the elite\nof the digital underground"
    },
    {
      title: "HOLOGRAM GALLERY OPENING",
      description: "Step into a world where art\ntranscends physical limitations\nInteractive holographic displays\nrespond to your presence while\ncreating immersive experiences\nthat blur reality and fiction"
    },
    {
      title: "QUANTUM GAMING TOURNAMENT",
      description: "Compete in next-generation\nvirtual reality competitions\nwhere skill meets technology\nPrize pools worth millions\nof credits await the champions\nof this digital colosseum"
    },
    {
      title: "SYNTHWAVE CONCERT SERIES",
      description: "Retro-futuristic sounds fill\nthe air as legendary artists\nperform live under laser lights\nNostalgic melodies meet\nmodern production in this\nepic audiovisual journey"
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => {
      const next = (prev + 1) % eventCards.length;
      console.log('Next clicked! From:', prev, 'To:', next);
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentCard((prev) => {
      const next = (prev - 1 + eventCards.length) % eventCards.length;
      console.log('Prev clicked! From:', prev, 'To:', next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
  <DigitalRain />
      {/* Enhanced grid background with multiple layers */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(255, 0, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(40%)',
          animation: 'gridPulse 4s ease-in-out infinite alternate'
        }}
      />
      
      {/* Glitch scanlines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.05) 2px,
            rgba(0, 255, 0, 0.05) 4px
          )`,
          animation: 'scanlines 2s linear infinite'
        }}
      />

      {/* Left sidebar card */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="bg-black border-2 border-green-400 p-4 w-40 h-56 relative shadow-lg shadow-green-400/20 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-2 left-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
          </div>
          <div className="text-green-400 text-xs font-mono mt-6 mb-3 glow-text break-words">
            EVENT : {eventCards[(currentCard - 1 + eventCards.length) % eventCards.length].title}
          </div>
          <div className="text-green-400 text-xs font-mono leading-tight opacity-80 break-words overflow-hidden">
            {eventCards[(currentCard - 1 + eventCards.length) % eventCards.length].description.substring(0, 100)}...
          </div>
          <div className="absolute bottom-2 right-2 text-pink-500 text-xs font-mono opacity-50">
            &lt;&lt;
          </div>
        </div>
      </div>

      {/* Right sidebar card */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <div className="bg-black border-2 border-green-400 p-4 w-40 h-56 relative shadow-lg shadow-green-400/20 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-green-400/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-2 left-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
          </div>
          <div className="text-green-400 text-xs font-mono mt-6 mb-3 glow-text break-words">
            EVENT : {eventCards[(currentCard + 1) % eventCards.length].title}
          </div>
          <div className="text-green-400 text-xs font-mono leading-tight opacity-80 break-words overflow-hidden">
            {eventCards[(currentCard + 1) % eventCards.length].description.substring(0, 100)}...
          </div>
          <div className="absolute bottom-2 right-2 text-pink-500 text-xs font-mono opacity-50">
            &gt;&gt;
          </div>
        </div>
      </div>

      {/* Main central content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        
        {/* Left arrow - SUPER SIMPLE VERSION */}
        <div 
          className="text-pink-500 text-8xl mr-8 cursor-pointer hover:text-pink-400 select-none z-50"
          onClick={handlePrev}
          style={{ userSelect: 'none', fontSize: '80px', lineHeight: '1' }}
        >
          &larr;
        </div>

        {/* Main event card */}
        <div className="bg-black border-4 border-green-400 p-8 max-w-2xl relative shadow-2xl shadow-green-400/30">
          
          {/* Top decorative element */}
          <div className="absolute -top-4 -left-4 z-20">
            <div className="w-8 h-8 bg-pink-500 transform rotate-45 flex items-center justify-center shadow-lg shadow-pink-500/50 animate-pulse">
              <div className="text-white text-sm font-bold transform -rotate-45">✦</div>
            </div>
          </div>

          {/* Glitch effect corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-pink-500 opacity-60"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-pink-500 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-pink-500 opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-pink-500 opacity-60"></div>

          <div className="flex relative z-10">
            {/* Left side - Image placeholder */}
            <div className="w-64 h-80 border-2 border-green-400 mr-8 bg-gray-900 relative overflow-hidden shadow-lg shadow-green-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-pink-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-green-400 font-mono text-lg glow-text">
                IMG_{String(currentCard + 1).padStart(3, '0')}
              </div>
              {/* Scanning line effect */}
              <div 
                className="absolute w-full h-px bg-green-400 opacity-60"
                style={{ animation: 'scan 3s linear infinite' }}
              ></div>
            </div>

            {/* Right side - Event details */}
            <div className="flex-1">
              <h1 className="text-pink-500 text-2xl font-bold mb-6 font-mono glow-text-pink">
                EVENT : {eventCards[currentCard].title}
              </h1>

              <p className="text-green-400 text-lg mb-8 font-mono leading-relaxed whitespace-pre-line glow-text">
                {eventCards[currentCard].description}
              </p>

              {/* Date input */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-pink-500 mr-3 flex items-center justify-center shadow-lg shadow-pink-500/50 animate-pulse">
                    <div className="text-white text-xs">📅</div>
                  </div>
                  <input 
                    type="text" 
                    className="bg-transparent border-b-2 border-green-400 text-green-400 font-mono focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 w-48 glow-text placeholder-green-400/50"
                    placeholder="2077.12.25"
                  />
                </div>
              </div>

              {/* Time input */}
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-pink-500 mr-3 flex items-center justify-center shadow-lg shadow-pink-500/50 animate-pulse">
                    <div className="text-white text-xs">🕐</div>
                  </div>
                  <input 
                    type="text" 
                    className="bg-transparent border-b-2 border-green-400 text-green-400 font-mono focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/30 transition-all duration-300 w-48 glow-text placeholder-green-400/50"
                    placeholder="23:59"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BIG VISIBLE COUNTER */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-green-400 font-mono text-xl glow-text bg-black px-4 py-2 border border-green-400">
            CARD: {currentCard + 1} / {eventCards.length} | {eventCards[currentCard].title}
          </div>

          {/* Status indicators */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Right arrow - SUPER SIMPLE VERSION */}
        <div 
          className="text-pink-500 text-8xl ml-8 cursor-pointer hover:text-pink-400 select-none z-50"
          onClick={handleNext}
          style={{ userSelect: 'none', fontSize: '80px', lineHeight: '1' }}
        >
          &rarr;
        </div>
        
      </div>

      {/* Enhanced ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* CSS animations and styles */}
  <style>{`
        @keyframes gridPulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        
        @keyframes dataStream {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        
        .glow-text {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        
        .glow-text-pink {
          text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899;
        }
      `}</style>
    </div>
  );
};

export default CyberpunkEventInterface;