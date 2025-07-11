import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const SystemWarnings: React.FC = () => {
  const [warnings, setWarnings] = useState<Array<{ id: number; message: string; type: 'error' | 'warning' | 'info' }>>([]);
  const [nextId, setNextId] = useState(1);

  const warningMessages = [
    { message: 'UNAUTHORIZED ACCESS DETECTED', type: 'error' as const },
    { message: 'NETWORK INTRUSION ALERT', type: 'warning' as const },
    { message: 'SYSTEM FIREWALL BYPASSED', type: 'error' as const },
    { message: 'DATA CORRUPTION IN PROGRESS', type: 'warning' as const },
    { message: 'SECURITY PROTOCOLS OFFLINE', type: 'info' as const },
    { message: 'ENCRYPTION KEYS COMPROMISED', type: 'error' as const },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const randomWarning = warningMessages[Math.floor(Math.random() * warningMessages.length)];
        const newWarning = {
          id: nextId,
          ...randomWarning,
        };
        
        setWarnings(prev => [...prev, newWarning]);
        setNextId(prev => prev + 1);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
          setWarnings(prev => prev.filter(w => w.id !== newWarning.id));
        }, 5000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [nextId]);

  const removeWarning = (id: number) => {
    setWarnings(prev => prev.filter(w => w.id !== id));
  };

  const getWarningColor = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'error': return 'border-red-400 bg-red-900 text-red-200';
      case 'warning': return 'border-yellow-400 bg-yellow-900 text-yellow-200';
      case 'info': return 'border-blue-400 bg-blue-900 text-blue-200';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 space-y-2 max-w-xs">
      <AnimatePresence>
        {warnings.map((warning) => (
          <motion.div
            key={warning.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            className={`p-3 border ${getWarningColor(warning.type)} bg-opacity-90 backdrop-blur-sm font-mono text-xs`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{warning.message}</span>
              </div>
              <button
                onClick={() => removeWarning(warning.id)}
                className="text-current hover:opacity-70 transition-opacity ml-2"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SystemWarnings;