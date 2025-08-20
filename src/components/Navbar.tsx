import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black bg-opacity-90 border-b border-cyan-800 relative z-40">
      <div className="w-full px-0 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 md:gap-3 pl-4 md:pl-20">
            <img src="/logo.png" alt="ELICIT" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="text-cyan-300 text-xl md:text-3xl font-bold tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>ELICIT 25</span>
          </Link>
        </div>

        {/* Desktop nav (md and up) */}
        <nav className="hidden md:flex items-center gap-8 pr-20">
          <Link to="/events" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>EVENTS</Link>
          <Link to="/speakers" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>SPEAKERS</Link>
          <Link to="/about" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>ABOUT</Link>
          <Link to="/contact" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>CONTACT</Link>
          <Link to="/sponsors" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>SPONSORS</Link>
        </nav>

        {/* Hamburger button (mobile only) */}
        <div className="pr-4 md:hidden">
          <button
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
            className={`relative w-12 h-12 flex items-center justify-center rounded-md border border-cyan-700 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors group ${isOpen ? 'open' : ''}`}
          >
            <span className="sr-only">Menu</span>
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
            <span className="absolute inset-0 rounded-md pointer-events-none group-hover:shadow-[0_0_18px_#22d3ee] transition-shadow"></span>
          </button>
        </div>
      </div>

      {/* Overlay Menu (mobile only) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute top-4 right-4 w-72 max-w-[90vw] bg-black border border-cyan-700 rounded-lg shadow-xl p-4 menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-cyan-300 font-bold tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>MENU</span>
              <button
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="relative w-8 h-8 flex items-center justify-center rounded-md border border-cyan-700 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors"
              >
                <span className="block w-4 h-0.5 bg-current rotate-45 absolute"></span>
                <span className="block w-4 h-0.5 bg-current -rotate-45 absolute"></span>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <Link to="/events" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-900/30 transition-all">
                <span className="opacity-60 mr-2">&gt;</span> EVENTS
              </Link>
              <Link to="/speakers" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-900/30 transition-all">
                <span className="opacity-60 mr-2">&gt;</span> SPEAKERS
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-900/30 transition-all">
                <span className="opacity-60 mr-2">&gt;</span> ABOUT
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-900/30 transition-all">
                <span className="opacity-60 mr-2">&gt;</span> CONTACT
              </Link>
              <Link to="/sponsors" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-900/30 transition-all">
                <span className="opacity-60 mr-2">&gt;</span> SPONSORS
              </Link>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .hamburger-line {
          position: absolute;
          left: 50%;
          width: 24px;
          height: 2px;
          background: currentColor;
          transform: translateX(-50%);
          transition: transform 200ms ease, opacity 150ms ease, top 200ms ease;
          box-shadow: 0 0 6px #22d3ee, 0 0 12px rgba(34,211,238,0.4);
        }
        .line-1 { top: 16px; }
        .line-2 { top: 21px; }
        .line-3 { top: 26px; }
        .open .line-1 { top: 21px; transform: translateX(-50%) rotate(45deg); }
        .open .line-2 { opacity: 0; }
        .open .line-3 { top: 21px; transform: translateX(-50%) rotate(-45deg); }
        .menu-panel { 
          animation: slideIn 220ms ease-out;
          box-shadow: 0 0 14px #22d3ee44, 0 0 28px #22d3ee22;
        }
        @keyframes slideIn {
          from { transform: translateX(16px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
