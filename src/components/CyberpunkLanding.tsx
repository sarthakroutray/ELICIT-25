import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import CyberpunkScene from './CyberpunkScene';
import GlitchText from './GlitchText';
import TerminalInterface from './TerminalInterface';
import SystemWarnings from './SystemWarnings';
import CountdownTimer from './CountdownTimer';
import SocialLinks from './SocialLinks';
import DigitalRain from './DigitalRain';
import { playSound } from '../utils/audio';
import { Monitor, Zap, Users, Calendar, Info, Phone } from 'lucide-react';

interface CyberpunkLandingProps {
  onSpeakersClick?: () => void;
  onAboutClick?: () => void; 
  onEventsClick?: () => void;
}

const CyberpunkLanding: React.FC<CyberpunkLandingProps> = ({ onSpeakersClick, onAboutClick, onEventsClick }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ // Directly use clientX and clientY for accurate cursor position
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInfiltrate = () => {
    setShowTerminal(true);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" style={{ cursor: 'none' }}>
      {/* Custom Cursor */}
      <div 
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none transition-transform duration-[50ms] ease-linear will-change-transform"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6, 0 0 80px #3b82f6',
          zIndex: 9999,
        }}
      />

      {/* Digital Rain Background */}
      <DigitalRain />

      {/* 3D Scene */}
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 10, 20]} fov={60} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <CyberpunkScene mousePosition={mousePosition} />
      </Canvas>

      {/* Static Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Main UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Monitor className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-lg tracking-wider">ELICIT FEST</span>
            </div>
            <div className="text-red-400 font-mono text-xs tracking-widest">
              NETWORK_STATUS: CORRUPTED
            </div>
          </motion.div>
          
          <CountdownTimer />
        </div>

        {/* Hero Section */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="text-center">
            <AnimatePresence>
              {isInitialized && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <GlitchText 
                    text="SYSTEM CORRUPTION DETECTED"
                    className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-[#00ff41] mb-16"
                    style={{
                      textShadow: `
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000,
                        0 0 5px #00ff41,
                        0 0 10px #00ff41,
                        2px 0 5px #ff1a1a
                      `,
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  />

                  {/* Logo Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mb-16"
                  >
                    <img
                      src="/logo.png"
                      alt="ELICIT FEST Logo"
                      className="mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 20px #00ff41) drop-shadow(0 0 40px #ff0040)'
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <GlitchText 
                      text="ELICIT FEST INITIATED..."
                      className="text-4xl md:text-4xl lg:text-5xl font-mono font-bold text-green-400 mb-12"
                      style={{
                        textShadow: `
                          -2px -2px 0 #000,
                          2px -2px 0 #000,
                          -2px 2px 0 #000,
                          2px 2px 0 #000,
                          0 0 10px #00ff41,
                          0 0 20px #00ff41,
                          0 0 30px #00ff41,
                          4px 4px 8px rgba(0,0,0,0.8)
                        `,
                        filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9)) drop-shadow(0 0 15px #00ff41)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Grid */}
          </div>
        </div>

        {/* Unified Navigation Row */}
        <AnimatePresence>
          {isInitialized && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="absolute top-[65%] right-[21%] transform -translate-x-1/2 -translate-y-1/2 flex gap-12"
            >
              {[
                { icon: Calendar, label: 'EVENTS', color: 'border-cyan-400 text-cyan-400', glowColor: '#00ffff' },
                { icon: Users, label: 'SPEAKERS', color: 'border-lime-400 text-lime-400', glowColor: '#00ff41' },
                { icon: Info, label: 'ABOUT', color: 'border-purple-400 text-purple-400', glowColor: '#8b5cf6' },
                { icon: Phone, label: 'CONTACT', color: 'border-yellow-400 text-yellow-400', glowColor: '#fbbf24' },
                { icon: Zap, label: 'SPONSORS', color: 'border-pink-400 text-pink-400', glowColor: '#f472b6' },
                { icon: Monitor, label: 'REGISTER', color: 'border-red-400 text-red-400', glowColor: '#ff0040' },
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 25px ${item.glowColor}, inset 0 0 15px rgba(255,255,255,0.1)`
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    playSound('/audio/click.mp3');
                    if (item.label === 'SPEAKERS' && onSpeakersClick) {
                      onSpeakersClick();
                    }
                    else if (item.label === 'ABOUT' && onAboutClick) {
                      onAboutClick();
                    }
                    else if(item.label === 'EVENTS' && onEventsClick) {
                      onEventsClick();
                    }
                  }}
                  className={`group relative w-32 h-32 ${item.color} bg-black bg-opacity-80 hover:bg-opacity-90 transition-all duration-300 font-mono text-xs tracking-wider overflow-hidden`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    boxShadow: `0 0 10px ${item.glowColor}40`,
                  }}
                >
                  {/* Decorative effects remain unchanged */}
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-px bg-current"
                        style={{ top: `${20 + i * 20}%` }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3 + i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-1">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <item.icon className="w-6 h-6" />
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          boxShadow: [
                            `0 0 5px ${item.glowColor}`,
                            `0 0 15px ${item.glowColor}, 0 0 25px ${item.glowColor}`,
                            `0 0 5px ${item.glowColor}`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="text-[10px] leading-tight text-center">{item.label}</span>
                  </div>

                  {/* Glitch / scan effects */}
                  <motion.div
                    className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10"
                    animate={{ opacity: [0, 0.1, 0], scaleY: [1, 1.1, 1] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <motion.div
                    className="absolute left-0 w-full h-px bg-current opacity-0 group-hover:opacity-60"
                    animate={{ y: [0, 64, 0], opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>


        {/* Bottom Bar */}
        <div className="flex justify-between items-end">
          <SocialLinks />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
          >
            <button
              onClick={handleInfiltrate}
              className="group relative px-8 py-3 bg-red-500 text-black font-mono font-bold tracking-wider hover:bg-red-400 transition-all duration-300 hover:scale-105"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                boxShadow: '0 0 20px #ff0040',
              }}
            >
              <span className="relative z-10">&gt; INFILTRATE SYSTEM</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Pulsing border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-red-400"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* System Warnings */}
      <SystemWarnings />

      {/* Terminal Interface */}
      <AnimatePresence>
        {showTerminal && (
          <TerminalInterface onClose={() => setShowTerminal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CyberpunkLanding;