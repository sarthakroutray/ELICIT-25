import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DigitalRain from './DigitalRain';

interface SpeakerData {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  outline: string; // This will be the JPG file path
}

const AUTO_FLIP_INTERVAL = 3000; // 3 seconds

const Speakers: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  // Sample speaker data - you can replace with actual data
  const speakers: SpeakerData[] = [
    {
      id: 1,
      name: "CONVERSATIONAL AI WITH NEO",
      title: "AI SPECIALIST",
      description: "The Elize model powers responsive dialogue, delivering smart, believable back-and-forth with players. Use this open framework to embed lifelike agents into Roblox-based AI-driven games.",
      image: "/speakers/speaker1.jpg",
      outline: "/speakers/outline1.png"
    },
    {
      id: 2,
      name: "PERSISTENT PLAYER MEMORY", 
      title: "MEMORY ARCHITECT",
      description: "Game agents remember key player events - like coins earned, levels, or tasks finished. This lets them speak more relevant, informed way during future conversations.",
      image: "/speakers/speaker2.jpg",
      outline: "/speakers/outline2.png"
    }
  ];

  // Detect mobile (below 1024px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // Manual flip (tap) still works
  const toggleCard = (id: number) => {
    setFlippedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [id]
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Digital Rain Background */}
      <DigitalRain />
      
      {/* Static Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* ID Text */}
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 opacity-60">
            [02] MAIN SYSTEM POWERS
          </div>
          
          {/* Main Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 30px #00ffff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            SPEAKERS
          </h1>
          
          {/* Subtitle */}
          <div className="text-cyan-400 font-mono text-lg tracking-wider">
            MAIN SYSTEM POWERS
          </div>
        </motion.div>

      {/* Desktop Layout (lg and up) - Original side-by-side */}
      <div className="hidden lg:block">
        {/* Speaker Cards Container with left GIF */}
        <motion.div
          className="flex flex-col lg:flex-row gap-0 lg:gap-0 max-w-5xl w-full items-stretch justify-center"
          style={{ position: 'relative', left: '0px' }}
          id="speakers-scroll-section"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } }
          }}
        >
          {/* Left GIF - vertically centered relative to speaker boxes */}
          <div className="hidden lg:flex items-center" style={{ minWidth: '120px', marginLeft: '0px', marginRight: '200px' }}>
            <img src="/speakers/left-gif.gif" alt="Cyberpunk GIF" className="w-32 h-32 object-cover rounded-lg shadow-lg" style={{ display: 'block' }} />
          </div>
          {/* Speaker Boxes */}
          {speakers.map((speaker, index) => {
            return (
              <motion.div
                key={speaker.id}
                className="relative group flex flex-col items-center"
                style={{ marginRight: index === 0 ? '20px' : '0px' }}
                variants={{
                  hidden: { x: index === 0 ? -160 : 160, opacity: 0 },
                  show: { x: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } }
                }}
              >
                {/* Card with outline PNG as border */}
                <div 
                  className="relative h-[600px] w-[445px] max-w-md flex flex-col items-stretch overflow-show"
                >
                  <img
                    src={speaker.outline}
                    alt="Card outline"
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    style={{
                      zIndex: 3,
                      transform: `scale(${index === 1 ? '1.2' : '1.2'})`,
                      margin: '-3%',
                      filter: 'drop-shadow(0 0 16px #00ffff) drop-shadow(0 0 32px #00ffff80)'
                    }}
                    draggable={false}
                  />
                  {/* Scaled-down content */}
                  <div style={{ transform: 'scale(1)', width: '100%', height: '100%' }}>
                    <div className="relative z-10 w-full h-full flex flex-col justify-between items-stretch pt-16 pb-16 px-12">
                      {/* Top Row: ID and Speaker Image */}
                      <div className="flex flex-row justify-between items-start mb-4">
                        <div className="text-cyan-400 font-mono text-sm opacity-60">// 0{speaker.id}</div>
                        <div className="w-14 h-14 bg-black overflow-hidden shadow-lg">
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-white text-lg font-bold mb-2 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {speaker.name}
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed font-mono" style={{ fontSize: '11px', lineHeight: '1.6' }}>
                          {speaker.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );})}
        </motion.div>
      </div>

      {/* Mobile Layout (below lg) - Cool card flip effect */}
      <div className="block lg:hidden w-full max-w-md mx-auto">
        {/* Mobile Header with animated GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <img src="/speakers/left-gif.gif" alt="Cyberpunk GIF" className="w-20 h-20 object-cover rounded-lg shadow-lg mb-4" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg opacity-20 blur-lg animate-pulse"></div>
          </div>
          <div className="text-cyan-400 font-mono text-xs tracking-wider opacity-80">
            TAP TO REVEAL
          </div>
        </motion.div>

        {/* Mobile Speaker Cards with Flip Effect */}
        <div className="space-y-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              className="relative"
            >
              {/* Neon Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl border border-cyan-400/30 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(90deg, transparent 98%, #00ffff 100%),
                      linear-gradient(0deg, transparent 98%, #00ffff 100%)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>

              {/* Flip Card Container */}
              <div 
                className="relative h-80 w-full cursor-pointer perspective-1000"
                onClick={() => toggleCard(speaker.id)}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d transition-transform duration-700"
                  animate={{ rotateY: flippedCards.includes(speaker.id) ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative h-full w-full bg-black/80 rounded-xl border-2 border-cyan-400/50 p-6 flex flex-col justify-center items-center text-center">
                      {/* Glitch Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl animate-pulse"></div>
                      
                      {/* Speaker ID */}
                      <div className="text-cyan-400 font-mono text-sm opacity-80 mb-4 tracking-wider">
                        // 0{speaker.id}
                      </div>
                      
                      {/* Speaker Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full p-1 mb-4">
                        <div className="w-full h-full bg-black rounded-full overflow-hidden">
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Speaker Name */}
                      <h3 className="text-white text-lg font-bold mb-2 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {speaker.name}
                      </h3>
                      
                      {/* Tap Instruction */}
                      <div className="text-cyan-400 font-mono text-xs opacity-60 mt-4">
                        TAP TO FLIP
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative h-full w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-xl border-2 border-purple-400/50 p-6 flex flex-col justify-center">
                      {/* Content */}
                      <div className="text-center mb-4">
                        <div className="text-purple-400 font-mono text-sm opacity-80 mb-2">
                          {speaker.title}
                        </div>
                        <h3 className="text-white text-base font-bold mb-3 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {speaker.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs leading-relaxed font-mono text-center">
                        {speaker.description}
                      </p>
                      
                      {/* Tap to Flip Back */}
                      <div className="text-purple-400 font-mono text-xs opacity-60 mt-4 text-center">
                        TAP TO FLIP BACK
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 w-full max-w-md"
        >
          <div className="text-right text-cyan-400 font-mono text-xs mb-2">
            Initializing.../var/src/
          </div>
          <div className="w-full h-1 bg-gray-800 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakers;
