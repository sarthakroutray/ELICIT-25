import React from "react";
import DigitalRain from "./DigitalRain"; // correct relative path
import ProfileCard from "./ProfileCard"; // correct relative path

const TeamPage: React.FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen font-orbitron">
      {/* Digital rain in background */}
      <DigitalRain />

      {/* Optional overlay (like in AboutSection) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Team content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white-400 mb-8 md:mb-12"
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
          >OUR TEAM</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">

        <div className="flex justify-center">
          <div className="w-[90vw] max-w-[240px]">
            <ProfileCard
          name="Agam Bhasin"
          title="Head Convener"
          handle="agamB"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/speakers/speaker1.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[90vw] max-w-[250px]">
            <ProfileCard
          name="Pranav Deshpande"
          title="Convener"
          handle="pranavD"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/speakers/speaker1.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[90vw] max-w-[240px]">
            <ProfileCard
          name="Charlie Davis"
          title="Coordinator"
          handle="charlieD"
          status="Busy"
          contactText="Ping Me"
          avatarUrl="/speakers/speaker1.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>
        </div>
      </div>

    {/* Executives content */}
    <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
  <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-8 font-bold text-center text-white-400 mb-8 md:mb-12"
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
          >EXECUTIVES</h2>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">


          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[240px]">
      <ProfileCard
      name="Diana Prince"
      title="Executive 1"
      handle="dianaP"
      status="Online"
      contactText="Connect"
      avatarUrl="/speakers/speaker1.png"
      showUserInfo={true}
      enableTilt={true}
      />
    </div>
  </div>
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[240px]">
      <ProfileCard
      name="Ethan Hunt"
      title="Executive 2"
      handle="ethanH"
      status="Offline"
      contactText="Say Hi"
      avatarUrl="/speakers/speaker1.png"
      showUserInfo={true}
      enableTilt={true}
      />
    </div>
  </div>
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[240px]">
      <ProfileCard
      name="Fiona Carter"
      title="Executive 3"
      handle="fionaC"
      status="Busy"
      contactText="Ping Me"
      avatarUrl="/speakers/speaker1.png"
      showUserInfo={true}
      enableTilt={true}
      />
    </div>
  </div>
          <div className="flex justify-center">
            <div className="w-[90vw] max-w-[240px]">
      <ProfileCard
      name="George Miller"
      title="Executive 4"
      handle="georgeM"
      status="Available"
      contactText="Message"
      avatarUrl="/speakers/speaker1.png"
      showUserInfo={true}
      enableTilt={true}
      />
    </div>
  </div>
  </div>
    </div>
    
    </div>
  );
};

export default TeamPage;