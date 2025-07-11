import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        let glitchCount = 0;
        
        const glitchTimer = setInterval(() => {
          const newText = text.split('').map(char => {
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          }).join('');
          
          setGlitchText(newText);
          glitchCount++;
          
          if (glitchCount > 5) {
            clearInterval(glitchTimer);
            setGlitchText(text);
            setIsGlitching(false);
          }
        }, 50);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: isGlitching 
          ? ['0 0 0 #ff0040', '2px 0 0 #ff0040, -2px 0 0 #00ffff', '0 0 0 #ff0040']
          : '0 0 0 transparent'
      }}
      transition={{ duration: 0.1, repeat: isGlitching ? Infinity : 0 }}
    >
      <span className="relative z-10 glitch-text">{glitchText}</span>
      
      {/* Glitch layers */}
      <span 
        className="absolute inset-0 text-red-400 opacity-70"
        style={{
          transform: isGlitching ? 'translate(2px, 0)' : 'translate(0, 0)',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        }}
      >
        {glitchText}
      </span>
      
      <span 
        className="absolute inset-0 text-cyan-400 opacity-70"
        style={{
          transform: isGlitching ? 'translate(-2px, 0)' : 'translate(0, 0)',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        }}
      >
        {glitchText}
      </span>
    </motion.div>
  );
};

export default GlitchText;