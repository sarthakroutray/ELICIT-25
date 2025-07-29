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

const CyberpunkLanding: React.FC = () => {
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
        className="fixed w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none transition-transform duration-[200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]"
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
                    className="text-2xl md:text-4xl lg:text-5xl font-mono font-bold text-[#00ff41] mb-8"
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
                    className="mb-8"
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
                      className="text-3xl md:text-4xl font-mono text-green-400 mb-12"
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
            <div className="absolute top-96 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-8">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 2.5
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
              ].map((item) => (
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
                  className={`group relative px-1 py-3 border border-current ${item.color} bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 font-mono tracking-wider`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                  onClick={() => playSound('/audio/click.mp3')}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5" />
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