import React, { useEffect, useRef, useState } from 'react';
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

const CyberpunkLanding: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);

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
    <div className="relative w-full h-screen bg-black overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff, 0 0 80px #00ffff',
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
        <div className="flex-1 flex items-center justify-center">
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
                    className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-green-400 mb-6"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <GlitchText 
                      text="ELICIT FEST INITIATED..."
                      className="text-lg md:text-xl font-mono text-red-400 mb-8"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 2.2
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Calendar, label: 'EVENTS', color: 'text-cyan-400' },
                { icon: Users, label: 'SPEAKERS', color: 'text-lime-400' },
                { icon: Info, label: 'ABOUT', color: 'text-purple-400' },
                { icon: Phone, label: 'CONTACT', color: 'text-yellow-400' },
                { icon: Zap, label: 'SPONSORS', color: 'text-pink-400' },
                { icon: Monitor, label: 'REGISTER', color: 'text-red-400' },
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 0 30px currentColor, inset 0 0 20px rgba(255,255,255,0.1)',
                    y: -5
                  }}
                  whileTap={{ 
                    scale: 0.92,
                    boxShadow: '0 0 40px currentColor, inset 0 0 30px rgba(255,255,255,0.2)'
                  }}
                  className={`group relative p-4 border border-current ${item.color} bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 font-mono tracking-wider`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                  onClick={() => playSound('/audio/click.mp3')} // Play sound on click
                >
                  <div className="flex flex-col items-center space-y-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

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