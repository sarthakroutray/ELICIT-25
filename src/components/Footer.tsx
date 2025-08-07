import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-cyan-400 font-techno px-8 py-12 border-t border-cyan-400 z-50 overflow-hidden">
      {/* Matrix-style Background Overlay */}
      <div className="absolute inset-0 bg-[url('/matrix-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Address */}
        <div>
          <h3 className="text-cyan-300 text-xl mb-4 tracking-widest">ELICIT '25</h3>
          <p className="text-sm leading-loose uppercase">
            hello@pliskencorp.com<br />
            17888 67TH COURT NORTH<br />
            LOXAHATCHEE, FL 33470 US
          </p>
        </div>

        {/* Quick Links */}
        <ul className="text-sm space-y-2 uppercase">
  <li><a href="#about" className="glitch-hover transition duration-300">About</a></li>
  <li><a href="#blog" className="glitch-hover transition duration-300">Blog</a></li>
  <li><a href="#faq" className="glitch-hover transition duration-300">FAQ</a></li>
  <li><a href="#privacy" className="glitch-hover transition duration-300">Privacy Policy</a></li>
  <li><a href="#login" className="glitch-hover transition duration-300">Login</a></li>
  <li><a href="#terms" className="glitch-hover transition duration-300">Terms of Use</a></li>
  <li><a href="#signup" className="glitch-hover transition duration-300">Sign Up</a></li>
</ul>

        {/* Placeholder Column */ }
        <div>
          <h3 className="text-cyan-300 text-xl mb-4 tracking-widest">CONTACT / INFO</h3>
          <ul className="text-sm space-y-2 uppercase">
            <li><a href="#support" className="glitch-hover transition duration-300">Support</a></li>
            <li><a href="#sponsors" className="glitch-hover transition duration-300">Sponsorships</a></li>
            <li><a href="#team" className="glitch-hover transition duration-300">Team</a></li>
            <li><a href="#updates" className="glitch-hover transition duration-300">Get Updates</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-xs text-cyan-500 mt-12 uppercase">
        &copy; 2025 ELICIT Fest. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
