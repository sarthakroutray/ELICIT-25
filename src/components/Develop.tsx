import React from "react";
import DigitalRain from "./DigitalRain";
import ProfileCard from "./ProfileCard";

const DevelopPage: React.FC = () => {
  // All 18 team members
  const developers = [
    { name: "Himanshi Pal", title: " ", handle: "parthavS", avatarUrl: "/DEVELOP/Himanshi.png" },
    { name: "Sarthak Routray", title: " ", handle: "agamB", avatarUrl: "/DEVELOP/Sarthak.png" },
    { name: "Aarushi Sharma", title: " ", handle: "sukritS", avatarUrl: "/DEVELOP/Aarushi.png" },
    { name: "Soumyajit Chatterjee", title: " ", handle: "mumukshuB", avatarUrl: "/DEVELOP/Soumyajeet.png" },
    { name: "Vidha", title: " ", handle: "disha", avatarUrl: "/DEVELOP/Vidha.png" },
    { name: "Jai Ratna", title: " ", handle: "akshat", avatarUrl: "/DEVELOP/Jai.png" },
    { name: "Aditya Rai", title: " ", handle: "harman", avatarUrl: "/DEVELOP/Aditya.png" },
    { name: "Agam Yadav", title: " ", handle: "pranavD", avatarUrl: "/DEVELOP/Agam.png" },
    { name: "Srikunj", title: " ", handle: "nirmit", avatarUrl: "/DEVELOP/Srikunj.png" },
  
  ];

  return (
    <div className="relative bg-black text-white min-h-screen font-orbitron">
      <DigitalRain />

      {/* Background Overlay Glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* DEVELOPING TEAM Section */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
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
          DEVELOPING TEAM
        </h2>

        {/* Grid of 18 Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {developers.map((dev, i) => (
            <div key={i} className="w-[90vw] max-w-[250px] flex justify-center">
              <ProfileCard
                name={dev.name}
                title={dev.title}
                handle={dev.handle}
                avatarUrl={dev.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopPage;
