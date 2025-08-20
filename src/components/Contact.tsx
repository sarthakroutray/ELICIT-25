import React from 'react';
import { Phone } from 'lucide-react';
import DigitalRain from './DigitalRain';

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Manipal+University+Jaipur&hl=en&z=16&output=embed';

const conveners = [
  { name: 'Agam Bhasin', role: 'Head Convener', phone: '+91-9000000001' },
  { name: '..', role: 'Convener', phone: '+91-9000000002' },
  { name: '..', role: 'Convener', phone: '+91-9000000003' },
];

const Contact: React.FC = () => {
  return (
    <div className="min-h-[55vh] bg-black text-white font-mono p-6 relative overflow-hidden">
      <DigitalRain />
      <div className="max-w-7xl mx-auto">

        {/* Title */}
          <h1
            className="text-4xl text-center mb-8 font-extrabold text-green-400"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '3px',
              textShadow: '0 0 10px #22c55e, 0 0 20px #22c55e',
            }}
          >
            CONTACT
          </h1>
        {/* Outer Wrapper */}
        <div
          className="max-w-7xl mx-auto my-8 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black bg-black"
          style={{
            border: '1px solid #c1447eff', // change the color or style here
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.3)', // subtle glow if needed
            backdropFilter: 'blur(20px)',
          }}
                >

          

          {/* Grid: Map + Conveners */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Map */}
            <div className="lg:col-span-6 col-span-1 h-full">
              <div className="w-full h-full rounded-lg overflow-hidden border border-green-700/40 shadow-[0_0_12px_#22c55e70]">
                <iframe
                  title="Location map"
                  src={MAP_EMBED_URL}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Conveners */}
            <div className="lg:col-span-6 col-span-1 h-full">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-pink-500/30 shadow-[0_0_15px_#ec489960] h-full">
                <h2
                  className="text-2xl font-extrabold text-center mb-5 text-pink-400"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    letterSpacing: '2px',
                    textShadow: '0 0 8px #ec4899, 0 0 16px #ec4899',

                  }}
                >
                  CONVENERS
                </h2>
                <div className="space-y-3">
                  {conveners.map((c) => (
                    <div
                      key={c.phone}
                      className="flex items-center justify-between bg-black/60 p-3 rounded-md border border-pink-500/20 hover:border-pink-500/50 transition"
                    >
                      <div>
                        <div className="text-green-200 font-bold">{c.name}</div>
                        <div className="text-xs text-green-400">{c.role}</div>
                      </div>
                      <a
                        href={`tel:${c.phone}`}
                        className="flex items-center gap-2 text-yellow-400 font-mono hover:text-yellow-300"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{c.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-10">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-pink-500/30 shadow-[0_0_15px_#ec489960] w-full">
              <h2
                className="text-2xl font-extrabold text-pink-400 text-center mb-6"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  letterSpacing: '2px',
                  textShadow: '0 0 8px #ec4899, 0 0 15px #ec4899',
                }}
              >
                CONTACT FORM
              </h2>
              <form className="space-y-4 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                />
                <div className="flex gap-4">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                  <input
                    type="text"
                    placeholder="University"
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                </div>
                <textarea
                  placeholder="Your Query"
                  rows={4}
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60 resize-none"
                />
                <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md font-bold text-black bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_10px_#ec4899]"
                >
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
  