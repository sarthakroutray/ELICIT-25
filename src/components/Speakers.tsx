import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DigitalRain from './DigitalRain';

interface SpeakerData {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  outline: string; // This will be the JPG file path
}

const Speakers: React.FC = () => {
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

      {/* Speaker Cards Container with left GIF */}
      <motion.div
        className="flex flex-col lg:flex-row gap-0 lg:gap-0 max-w-5xl w-full items-stretch justify-center"
        style={{ position: 'relative', left: '0px' }}
        id="speakers-scroll-section"
      >
        {/* Left GIF - vertically centered relative to speaker boxes */}
        <div className="hidden lg:flex items-center" style={{ minWidth: '120px', marginLeft: '0px', marginRight: '200px' }}>
          <img src="/speakers/left-gif.gif" alt="Cyberpunk GIF" className="w-32 h-32 object-cover rounded-lg shadow-lg" style={{ display: 'block' }} />
        </div>
        {/* Speaker Boxes */}
        {speakers.map((speaker, index) => {
          const sectionRef = React.useRef<HTMLDivElement>(null);
          const { scrollYProgress } = useScroll({ container: undefined, target: sectionRef });
          // Animation: boxes move together as you scroll into section, then move apart after passing it
          const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [index === 0 ? -60 : 60, 0, 0, index === 0 ? 60 : -60]);
          return (
            <motion.div
              key={speaker.id}
              ref={sectionRef}
              style={{ x, marginRight: index === 0 ? '135px' : '0px' }}
              className="relative group flex flex-col items-center"
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
