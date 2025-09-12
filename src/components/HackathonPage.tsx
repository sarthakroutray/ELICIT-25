import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, ExternalLink } from 'lucide-react';
import GlitchText from './GlitchText';
import DigitalRain from './DigitalRain';

const HackathonPage: React.FC = () => {
  // Responsive style to fix title cut-off on mobile
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 480px) {
        .hackathon-title {
          font-size: 2.2rem !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
        <DigitalRain />
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <GlitchText 
              text="HACKATHON" 
              className="hackathon-title text-6xl font-bold text-cyan-400 mb-4"
            />
            <p className="text-xl font-mono text-gray-300">
              &gt; Initialize problem statements protocol...
            </p>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
            }}
          >
            <div className="flex items-center mb-6">
              <Code className="text-cyan-400 mr-3" size={32} />
              <h2 className="text-3xl font-mono text-cyan-300">Problem Statements</h2>
            </div>
            
            <p className="text-gray-300 mb-8 font-mono leading-relaxed">
              Access the official hackathon problem statements and challenge your coding skills 
              in this cyberpunk-themed programming competition. Download the PDF to view all 
              available challenges and their requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1R65zHm_XQo-t-H3IQwrQNA2lPyPH76y0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-black font-mono font-bold tracking-wider hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center relative z-10">
                  <ExternalLink className="mr-2" size={20} />
                  VIEW PROBLEM STATEMENTS
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.a>

                <motion.a
                  href="/problem_statements.pdf"
                  className="group relative px-8 py-4 bg-gray-700 text-cyan-400 font-mono font-bold tracking-wider hover:bg-gray-600 transition-all duration-300 border border-cyan-500/50"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={e => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.href = '/problem_statements.pdf';
                    link.download = 'problem_statements.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <span className="flex items-center justify-center relative z-10">
                    <Download className="mr-2" size={20} />
                    DOWNLOAD PDF
                  </span>
                </motion.a>
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm font-mono text-gray-500">
              &gt; System initialized. Good luck, hacker.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
