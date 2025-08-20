import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import DigitalRain from './DigitalRain';

// Replace these with your real embed/form URLs
const MAP_EMBED_URL =
  // Manipal University Jaipur — query-based embed (replace with place-specific pb token if desired)
  'https://www.google.com/maps?q=Manipal+University+Jaipur&hl=en&z=16&output=embed';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

const conveners = [
  { name: 'Agam Bhasin', role: 'Convener', phone: '+91-9000000001' },
  { name: '..', role: 'Co-Convener', phone: '+91-9000000002' },
  { name: '..', role: 'Logistics', phone: '+91-9000000003' },
];

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-8 relative overflow-hidden">
      <DigitalRain />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-6 neon-text">CONTACT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Google Maps embed */}
          <div className="lg:col-span-7 col-span-1">
            <div className="w-full h-80 md:h-[520px] bg-black border-2 border-green-400 rounded-lg overflow-hidden shadow-2xl shadow-green-400/20">
              <iframe
                title="Location map"
                src={MAP_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact card with Google Form + conveners */}
          <div className="lg:col-span-5 col-span-1">
            <div className="bg-black border-2 border-pink-500/40 rounded-lg p-6 shadow-lg shadow-pink-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-md shadow-pink-500/30">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-sm text-pink-200">CONTACT FORM</div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 text-yellow-400 font-bold"
                  >
                    Open Google Form <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="border-t border-green-400/10 pt-4 mt-4">
                <div className="text-xs text-green-300 mb-2">CONVENERS</div>
                <div className="space-y-3">
                  {conveners.map((c) => (
                    <div key={c.phone} className="flex items-center justify-between bg-black bg-opacity-40 p-3 rounded-md border border-green-400/10">
                      <div>
                        <div className="text-green-200 font-bold">{c.name}</div>
                        <div className="text-xs text-green-300">{c.role}</div>
                      </div>
                      <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-yellow-400 font-mono">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{c.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle neon title style */}
      <style>{`
        .neon-text {
          color: #00ff41;
          text-shadow: 0 0 8px rgba(0,255,65,0.6), 0 0 16px rgba(0,255,65,0.25);
        }
      `}</style>
    </div>
  );
};

export default Contact;
