import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-black bg-opacity-90 border-b border-cyan-800">
      <div className="w-full px-0 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 pl-20">
            <img src="/logo.png" alt="ELICIT" className="w-12 h-12 object-contain" />
            <span className="text-cyan-300 text-2xl md:text-3xl font-bold tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>ELICIT 25</span>
          </Link>
        </div>

  <nav className="hidden md:flex items-center gap-8 pr-20">
          <Link to="/events" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>EVENTS</Link>
          <Link to="/speakers" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>SPEAKERS</Link>
          <Link to="/about" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>ABOUT</Link>
          <Link to="/contact" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>CONTACT</Link>
          <Link to="/sponsors" className="text-cyan-300 hover:text-cyan-100" style={{ fontFamily: 'Orbitron, monospace' }}>SPONSORS</Link>
        </nav>

        <div className="md:hidden">
          <Link to="/sponsors" className="text-cyan-300" style={{ fontFamily: 'Orbitron, monospace' }}>SPONSORS</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
