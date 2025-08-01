import React from 'react';
import { Canvas } from '@react-three/fiber';
import CyberpunkScene from './CyberpunkScene';


const AboutSection: React.FC = () => {
  return (
    <div
      id="about-section"
      className="relative px-8 pl-48 bg-black text-white font-orbitron uppercase overflow-hidden"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {/* 3D Scene Canvas absolutely fills the AboutSection */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
          <CyberpunkScene mousePosition={{ x: 0, y: 0 }} />
        </Canvas>
      </div>
      
      {/* Overlay content goes here */}
     <div className="w-full flex flex-col items-center mt-12 mb-8 select-none z-10">
  <div className="uppercase text-sm tracking-widest text-cyan-400 font-mono drop-shadow-[0_0_6px_#00fff7] mb-2">
    SYSTEM CORE[03]
  </div>
  <h1
    className="text-5xl md:text-6xl font-black tracking-widest text-white neon-glow"
    style={{
      textShadow: `
        0 0 8px #fff,
        0 0 32px #00fff7,
        0 0 64px #0ff
      `
    }}
  >
    ABOUT
  </h1>
  <div className="uppercase mb-4 text-xs tracking-widest text-white font-mono mt-2 drop-shadow-[0_0_6px_#17ff6b]">
    MAIN SYSTEM POWERS
  </div>



      {/* Wrapper */}
      <div
        className=" mb-32 ml-4 mr-20 rounded-2xl bg-[rgba(10,10,10,0.75)] w-3/4 shadow-[0_0_40px_#0ff,0_0_80px_#0ff,0_0_100px_#0ff,inset_0_0_25px_#0ff]"
      >
        <div
          // Neon border with clip-path polygon effect - no direct Tailwind support, inline style used
          className="relative pb-16 bg-[rgba(0,0,0,0.25)] border-2 border-cyan-400 flex justify-center items-start gap-8 rounded-lg"
          style={{
            clipPath:
              "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
            boxShadow:
              "0 0 10px #00ffff, 0 0 25px #00ffff, 0 0 45px #0ff, inset 0 0 20px #00ffff",
          }}
        >
          {/* LEFT RECTANGLE BOX */}
          <div
  className="flex-shrink-0 h-[340px] w-[480px] m-8 mr-2 mt-16 rounded-2xl"
  style={{
    background: "rgba(10, 20, 15, 0.8)",
    boxShadow:
      "inset 0 0 16px #0ff, inset 0 0 36px #12ff5e, 0 0 6px #0ff, 0 0 16px #12ff5e",
    border: "2px solid #0ff",
    clipPath:
      "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)"
  }}
>
  {/* Optional: Insert content here if needed */}
</div>


          {/* Right stacked yellow boxes */}
          <div className="flex flex-col gap-8 w-3/5 pr-8 h-[340px] my-8">
            {/* About Section Box */}
            <div
              className="flex flex-col justify-center flex-1 h-1/2 p-4 rounded-lg border-2 border-yellow-400"
              style={{
                backgroundColor: "rgba(0,0,0,0.25)",
                boxShadow:
                  "0 0 10px #ffff33, 0 0 25px #ffff33, 0 0 45px #ff0, inset 0 0 20px #ffff33",
                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
              }}
            >
              <h2
                className="mb-4 text-yellow-400 text-lg"
                style={{ textShadow: "0 0 10px #ffff33" }}
              >
                ABOUT ACM
              </h2>
              <p className="leading-relaxed">
                PLACEHOLDER TEXT STYLED IN A NEON LAYOUT.
                <br />
                REFLECTING GLOWING EDGES AND CYBERPUNK DESIGN.
                <br />
                SHORTER BLOCKS JUST LIKE THE REFERENCE IMAGE.
              </p>
            </div>

            {/* Bizendint Section */}
            <div
              className="flex justify-between gap-4 items-start p-2 rounded-lg border-2  border-yellow-400"
              style={{
                backgroundColor: "rgba(0,0,0,0.25)",
                boxShadow:
                  "0 0 10px #ffff33, 0 0 25px #ffff33, 0 0 45px #ff0, inset 0 0 20px #ffff33",
                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
              }}
            >
              <div className="flex flex-col justify-center">
                <h2
                  className="mb-4 text-yellow-400 text-lg"
                  style={{ textShadow: "0 0 10px #ffff33" }}
                >
                  BIZENDINT
                </h2>
                <p className="leading-relaxed">
                  DATA MATRIX VALUES, SIMULATION FLUX.
                  <br />
                  YELLOW NUMBER MATRIX IN COLUMN.
                  <br />
                  SEGMENT LOGIC ACTIVE.
                </p>
              </div>
              <div
                className="flex flex-col justify-evenly text-right text-yellow-400 text-xl"
                style={{ textShadow: "0 0 15px #ffff33" }}
              >
                <p>2000</p>
                <p>2U88*</p>
                <p>2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations as global styles */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 18ch }
          }
          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #770d75 }
          }
          @keyframes neon-flicker {
            0%   { text-shadow: 0 0 4px #87237f, 0 0 8px #892977; }
            50%  { text-shadow: 0 0 10px #d98ed3, 0 0 20px #ec8de1, 0 0 30px #a43da5; }
            100% { text-shadow: 0 0 6px #d110a1, 0 0 12px #de48c8; }
          }
          @keyframes glow-pulse {
            0%   { transform: scale(1); }
            50%  { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          .font-orbitron {
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default AboutSection;