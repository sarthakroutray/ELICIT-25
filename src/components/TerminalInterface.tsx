import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TerminalInterfaceProps {
  onClose: () => void;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ onClose }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);
  const navigate = useNavigate();

  const commands = {
    help: `Available commands:
• help - Show this help message
• sponsors (s) - Navigate to Sponsors page
• events (e) - Navigate to Events page
• speakers (sp) - Navigate to Speakers page
• about (a) - Navigate to About page
• contact (c) - Navigate to Contact page
• register (r) - Navigate to Registration page

Quick navigation: Type "s" for sponsors, "e" for events, etc.`,
    sponsors: 'NAVIGATING_TO_SPONSORS_PAGE... [████████████████████] 100%\nRedirecting to sponsors section...',
    events: 'NAVIGATING_TO_EVENTS_PAGE... [████████████████████] 100%\nRedirecting to events section...',
    speakers: 'NAVIGATING_TO_SPEAKERS_PAGE... [████████████████████] 100%\nRedirecting to speakers section...',
    about: 'NAVIGATING_TO_ABOUT_PAGE... [████████████████████] 100%\nRedirecting to about section...',
    contact: 'NAVIGATING_TO_CONTACT_PAGE... [████████████████████] 100%\nRedirecting to contact section...',
    register: 'NAVIGATING_TO_REGISTRATION_PAGE... [████████████████████] 100%\nRedirecting to registration section...',
  };

  const navigationCommands = {
    sponsors: '/sponsors',
    events: '/events',
    speakers: '/speakers',
    about: '/about',
    contact: '/contact',
    register: '/register',
  };

  const navigationOptions = [
    'sponsors',
    'events', 
    'speakers',
    'about',
    'contact',
    'register'
  ];

  // Auto-scroll to bottom when output changes
  const scrollToBottom = () => {
    if (outputRef.current) {
      outputRef.current.scrollTo({
        top: outputRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll whenever output changes
  useEffect(() => {
    scrollToBottom();
  }, [output]);

  useEffect(() => {
    console.log('TerminalInterface useEffect running, hasInitialized:', hasInitialized.current);
    
    // Only run initialization once
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    
    console.log('Starting initialization sequence');
    
    // Set initial output immediately
    setOutput([
      'CONNECTING TO ELICIT NETWORK...',
      '',
      'QUICK START:',
      '• Type "help" to see available commands',
      ''
    ]);
    
    // Set typing to false after a short delay
    setTimeout(() => {
      setIsTyping(false);
      inputRef.current?.focus();
    }, 1000);
    
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.toLowerCase().trim();
    setOutput(prev => [...prev, `> ${input}`]);
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    // Command aliases
    const commandAliases: { [key: string]: string } = {
      's': 'sponsors',
      'e': 'events',
      'sp': 'speakers',
      'a': 'about',
      'c': 'contact',
      'r': 'register'
    };

    // Resolve command (check aliases first, then direct commands)
    const resolvedCommand = commandAliases[command] || command;

    if (resolvedCommand === 'help') {
      setOutput(prev => [...prev, commands.help]);
      setShowOptions(true);
      setOutput(prev => [...prev, '', 'Type one of the options above to navigate:']);
    } else if (resolvedCommand in commands) {
      // Handle navigation commands
      if (resolvedCommand in navigationCommands) {
        if (showOptions) {
          setOutput(prev => [...prev, commands[resolvedCommand as keyof typeof commands]]);
          setTimeout(() => {
            navigate(navigationCommands[resolvedCommand as keyof typeof navigationCommands]);
            onClose(); // Close terminal after navigation
          }, 2000); // Give user time to see the message
        } else {
          setOutput(prev => [...prev, 'Type "help" first to see available options.']);
        }
      } else {
        setOutput(prev => [...prev, commands[resolvedCommand as keyof typeof commands]]);
      }
    } else {
      if (showOptions) {
        setOutput(prev => [...prev, `Invalid option: ${command}. Type "help" to see available options.`]);
      } else {
        setOutput(prev => [...prev, `Command not found: ${command}. Type "help" for available commands.`]);
      }
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
        <div ref={outputRef} className="p-4 overflow-y-auto font-mono text-sm" style={{ height: 'calc(100% - 60px)' }}>
          <div className="space-y-1">
            {/* Debug info */}
            <div className="text-red-400 text-xs mb-2">
              Debug: Output length: {output.length}, IsTyping: {isTyping.toString()}, HasInitialized: {hasInitialized.current.toString()}
            </div>
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
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-green-400 outline-none"
                  placeholder={showOptions ? "Type navigation option (e.g., events)..." : "Enter command..."}
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