import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

interface TerminalInterfaceProps {
  onClose: () => void;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ onClose }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: help, events, speakers, about, contact, register, clear, exit',
    events: 'EVENTS_MODULE_LOADING... [████████████████████] 100%\nTech talks, workshops, hackathons, and more!',
    speakers: 'ACCESSING_SPEAKER_DATABASE... [████████████████████] 100%\nIndustry experts and thought leaders confirmed.',
    about: 'ELICIT_FEST.EXE - A premier tech festival bringing together innovators.',
    contact: 'CONTACT_CHANNELS_ACTIVE:\n> Email: info@elicitfest.com\n> Discord: ElicitFest#2025',
    register: 'REDIRECTING_TO_REGISTRATION_PORTAL... [████████████████████] 100%',
    clear: 'CLEAR_TERMINAL',
    exit: 'EXIT_TERMINAL',
  };

  useEffect(() => {
    const initSequence = [
      'INITIALIZING TERMINAL...',
      'CONNECTING TO ELICIT NETWORK...',
      'ACCESS GRANTED - WELCOME TO ELICIT FEST TERMINAL',
      'Type "help" for available commands',
      ''
    ];

    let index = 0;
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (index < initSequence.length) {
        setOutput(prev => [...prev, initSequence[index]]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        inputRef.current?.focus();
      }
    }, 500);

    return () => clearInterval(typeInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.toLowerCase().trim();
    setOutput(prev => [...prev, `> ${input}`]);

    if (command === 'clear') {
      setOutput([]);
    } else if (command === 'exit') {
      onClose();
    } else if (command in commands) {
      setOutput(prev => [...prev, commands[command as keyof typeof commands]]);
    } else {
      setOutput(prev => [...prev, `Command not found: ${command}. Type "help" for available commands.`]);
    }

    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="w-full max-w-4xl h-96 bg-black border-2 border-cyan-400 shadow-2xl relative"
        style={{
          boxShadow: '0 0 30px #00ffff, inset 0 0 30px rgba(0, 255, 255, 0.1)',
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-cyan-400 bg-gray-900">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">ELICIT_TERMINAL.EXE</span>
          </div>
          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-4 h-full overflow-y-auto font-mono text-sm">
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index} className="text-green-400">
                {line}
              </div>
            ))}
            
            {!isTyping && (
              <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-2">
                <span className="text-cyan-400">{'>'}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 outline-none"
                  placeholder="Enter command..."
                />
                <span className="text-cyan-400 animate-pulse">_</span>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalInterface;