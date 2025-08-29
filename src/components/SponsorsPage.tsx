import React from 'react';
import Carousel from './Carousel';
import PreviousSponsors from './PreviousSponsors';
import DigitalRain from './DigitalRain';

const SponsorsPage: React.FC = () => {
  const [videoEnded, setVideoEnded] = React.useState(false);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      <DigitalRain />

      {/* Shared overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Sponsors Section */}
      <div className="relative z-10 flex flex-col items-center text-center py-16 space-y-24">

        {/* Title Sponsor */}
        {/* Title Sponsor */}
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 30px #00ffff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            TITLE SPONSOR
          </h1>

          {/* Permanent box for video/logo */}
          <div className="mx-auto w-[500px] md:w-[600px] h-auto mb-6 flex items-center justify-center bg-black rounded-lg overflow-hidden ">
            {!videoEnded ? (
              <video
                src="/sponsors/VIVOLOAD.mp4"
                autoPlay
                muted
                onEnded={() => setVideoEnded(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="/sponsors/vivoo.jpg"
                alt="Vivo Tagline"
                className="w-full h-full object-contain"
              />
            )}
          </div>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Vivo is a global technology company specializing in smartphones and
            innovative devices. As our Title Sponsor, Vivo brings performance,

            style, and innovation to the forefront of this event.

          
          </p>
           <div className="mt-4 text-center">
        <a
          href="https://www.vivo.com"   // 🔗 official Vivo link
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline text-lg font-semibold"
        >
          Visit Vivo
        </a>
      </div>
        </div>



        {/* Gaming Partners */}
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 30px #00ffff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            GAMING PARTNERS
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center mt-28 mb-4 gap-24">
            <img
              src="/sponsors/amd.png"
              alt="AMD Logo"
              className="mx-auto w-[300px] md:w-[400px] h-auto mb-0"
            />
            <img
              src="/sponsors/gigabyte.png"
              alt="Gigabyte Logo"
              className="mx-auto w-[300px] md:w-[400px] h-auto mb-0"
            />
          </div>
        </div>

        {/* Associate Sponsor */}
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-24 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #00ffff,
                0 0 20px #00ffff,
                0 0 30px #00ffff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            ASSOCIATE SPONSOR
          </h1>
          <img
            src="/sponsors/skullcandy.png"
            alt="Skullcandy Logo"
            className="mx-auto w-[500px] md:w-[600px] h-auto mb-0"
          />
        </div>
      </div>
        <div className="w-full flex justify-center my-12">
        <div className="w-3/4 h-[4px] bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff,0_0_30px_#00ffff]" />
      </div>

      {/* Previous Sponsors */}
      <div className="py-12 md:py-16">
        <PreviousSponsors />
      </div>

      {/* Carousel */}
      <div className="py-12 md:py-16 -mt-6">
        <Carousel />
      </div>
    </div>
  );
};

export default SponsorsPage;