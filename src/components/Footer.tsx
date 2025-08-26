import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

interface FooterSection {
  id: string;
  title: string;
  links: { label: string; href: string }[];
}

const sections: FooterSection[] = [
  {
    id: 'core',
    title: "ELICIT '25",
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: 'https://medium.com/@acmmuj' },
      { label: 'Register', href: '/events' },
    ],
  },
  {
    id: 'info',
    title: 'Contact / Info',
    links: [
      { label: 'Support', href: '/contact' },
      { label: 'Sponsorships', href: '/sponsors' },
      { label: 'Team', href: '/team' },
      { label: 'Get Updates', href: '/updates' },
    ],
  },
  
];

const Footer: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setOpen(o => ({ ...o, [id]: !o[id] }));

  return (
    <footer className="relative bg-black text-cyan-300 font-mono px-5 sm:px-8 py-10 sm:py-14 border-t border-cyan-500/40 z-50 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#09494940,transparent_70%)] opacity-80 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/matrix-bg.svg')] bg-cover bg-center opacity-[0.07] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Social Row (mobile first) */}
        <div className="flex flex-col items-center gap-4 mb-8 sm:mb-10">
          <div className="scale-90 sm:scale-100"><SocialLinks /></div>
          <div className="text-xs tracking-wider text-cyan-500/80 uppercase">Connect • Engage • Amplify</div>
        </div>

        {/* Mobile Accordion / Desktop Grid */}
        <div className="md:grid md:grid-cols-3 md:gap-12">
          {sections.map(sec => {
            const isOpen = open[sec.id] ?? true; // default expanded; we control collapse only on mobile
            return (
              <div key={sec.id} className="border-b border-cyan-700/30 md:border-none py-3 md:py-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between md:justify-start md:cursor-default group"
                  aria-expanded={isOpen}
                  onClick={() => toggle(sec.id)}
                >
                  <span className="text-lg tracking-widest font-semibold text-cyan-200 group-hover:text-white transition-colors md:text-xl md:mb-4 md:pr-2">
                    {sec.title.toUpperCase()}
                  </span>
                  <span className="md:hidden ml-4 text-cyan-400 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
                </button>
                <ul
                  className={`pl-1 pr-2 mt-2 md:mt-0 space-y-2 text-sm tracking-wide uppercase overflow-hidden transition-[max-height,opacity] duration-400 ease-out md:max-h-none ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:opacity-100'} md:space-y-2`}
                >
                  {sec.links.map(l => {
                    const isInternal = l.href.startsWith('/');
                    return (
                      <li key={l.label}>
                        {isInternal ? (
                          <Link
                            to={l.href}
                            className="relative inline-block py-0.5 text-cyan-300 hover:text-white focus:text-white transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                          >
                            {l.label}
                          </Link>
                        ) : (
                          <a
                            href={l.href}
                            className="relative inline-block py-0.5 text-cyan-300 hover:text-white focus:text-white transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                          >
                            {l.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-cyan-400/80 tracking-widest uppercase text-center sm:text-left">
            Ignite the grid. Be part of ELICIT '25.
          </div>
          <Link
            to="/events"
            className="px-6 py-3 rounded-md border border-cyan-400/60 hover:border-white text-cyan-200 hover:text-white bg-black/40 hover:bg-cyan-500/10 transition-all text-sm tracking-wide font-semibold shadow-[0_0_10px_rgba(0,255,255,0.25)]"
          >
            VIEW EVENTS
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-wider text-cyan-500/70 uppercase">
          <div>&copy; 2025 ELICIT Fest. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-cyan-300">Privacy</Link>
            <Link to="/terms" className="hover:text-cyan-300">Terms</Link>
            <a href="#top" className="hover:text-cyan-300">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
