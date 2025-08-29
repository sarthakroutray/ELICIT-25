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
          >CONVENERS</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">

       
        <div className="flex justify-center">
          <div className="w-[90vw] max-w-[250px]">
            <ProfileCard
          name="Pranav Deshpande"
          title="Convener"
          handle="pranavD"
          avatarUrl="/team/pranav.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>

         <div className="flex justify-center">
          <div className="w-[90vw] max-w-[240px]">
            <ProfileCard
          name="Agam Bhasin"
          title="Head Convener"
          handle="agamB"
          avatarUrl="/team/agam.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[90vw] max-w-[240px]">
            <ProfileCard
          name="Parthav Shah"
          title="Convener"
          handle="parthavS"
          avatarUrl="/team/parthav.png"
          showUserInfo={true}
          enableTilt={true}
            />
          </div>
        </div>

        
        </div>
      </div>


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
          >MANAGING DIRECTORS</h2>
  
<div className="flex flex-wrap justify-evenly items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
  {/* Sukrit */}
  <div className="w-[90vw] max-w-[240px]">
    <ProfileCard
      name="SUKRIT SINHA"
      title="Managing Director"
      handle="sukritS"
      avatarUrl="/team/sukrit.png"
      showUserInfo={true}
      enableTilt={true}
    />
  </div>

  {/* Mumukshu */}
  <div className="w-[90vw] max-w-[240px]">
    <ProfileCard
      name="MUMUKSHU BOHARA"
      title="Managing Director"
      handle="mumukshuB"
      avatarUrl="/team/mumukshu.png"
      showUserInfo={true}
      enableTilt={true}
    />
  </div>
</div>
 

{/* ===== EXECUTIVES ===== */}
<div className="relative z-10  px-4 sm:px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto justify-evenly">
  <h2
    className="text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-8 font-bold text-center mb-8 md:mb-12"
    style={{
      fontFamily: "Orbitron, monospace",
      textShadow: `
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 30px #00ffff
      `,
      filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.9))",
    }}
  >
    EXECUTIVES
  </h2>

  {/* Grid Layout */}
  <div className="flex flex-wrap gap-24 justify-evenly mr-2 gap-y-10 w-full max-w-10xl mx-auto">
    {[
      {
        name: "Executive 1",
        title: "Executive",
        handle: "exec1",
        avatarUrl: "/team/exec1.png",
      },
      {
        name: "Executive 2",
        title: "Executive",
        handle: "exec2",
        avatarUrl: "/team/exec2.png",
      },
      {
        name: "Executive 3",
        title: "Executive",
        handle: "exec3",
        avatarUrl: "/team/exec3.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      {
        name: "Executive 4",
        title: "Executive",
        handle: "exec4",
        avatarUrl: "/team/exec4.png",
      },
      // 👉 keep adding up to 30 (or however many you want)
   ].map((member, i) => (
  <div key={i} className="w-full max-w-[240px] mx-auto ">
    <ProfileCard
      name={member.name}
      title={member.title}
      handle={member.handle}
      avatarUrl={member.avatarUrl}
      showUserInfo={true}
      enableTilt={true}
    />
  </div>
))}
  </div>
</div>
  </div>
    </div>


  );
};

export default TeamPage;