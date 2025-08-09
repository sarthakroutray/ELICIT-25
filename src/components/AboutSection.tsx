import React from 'react';
import { Canvas } from '@react-three/fiber';
import CyberpunkScene from './CyberpunkScene';


const AboutSection: React.FC = () => {
  return (
    <div
      id="about-section"
      className="px-8 pl-48 bg-black text-white font-orbitron uppercase"
      style={{ fontFamily: "'Orbitron', sans-serif", minHeight: '100vh', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}
    >
     
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 20, 30], fov: 60 }} style={{ pointerEvents: 'none' }}>
          <CyberpunkScene mousePosition={{ x: 0, y: 0 }} />
        </Canvas>
      </div>
      
      
  <div
    className="w-full flex flex-col items-center mt-12 mb-8 select-none about-section-content"
    style={{ zIndex: 2, position: 'relative' }}
  >
  <div className="uppercase text-sm tracking-widest text-green-400 mr-44 font-mono drop-shadow-[0_0_6px_#00fff7] mb-2">
    SYSTEM CORE[03]
  </div>
 <h1 
            className="text-4xl md:text-5xl lg:text-6xl mr-44 font-bold text-white mb-6 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #18a04eff,
                0 0 20px #6acb8dff,
                0 0 30px #a9ef94ff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            ABOUT
          </h1>
  <div className="uppercase mr-44 mb-10 text-xs tracking-widest text-white font-mono mt-0 drop-shadow-[0_0_6px_#17ff6b]">
    MAIN SYSTEM POWERS
  </div>



      {/* Wrapper */}
      <div
        className=" mb-32  mr-40 rounded-2xl bg-[rgba(10,10,10,0.75)] w-3/4 shadow-[0_0_40px_#39ff14,0_0_80px_#39ff14,0_0_100px_#39ff14,inset_0_0_25px_#39ff14]
"
      >
        <div
          // Neon border with clip-path polygon effect - no direct Tailwind support, inline style used
          className="relative pb-2 bg-[rgba(0,0,0,0.25)] border-2 border-white flex justify-center items-start gap-8 rounded-lg"
          style={{
            clipPath:
              "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
            boxShadow:
              "0 0 10px #d1e8d8ff, 0 0 25px #bfddd0ff, 0 0 45px #0ff, inset 0 0 20px #429f6cff",
          }}
        >
          {/* LEFT RECTANGLE BOX */}
       <div
  className="relative flex-shrink-0 h-[400px] w-[480px] m-8 mr-2 mt-8"
  style={{
    overflow: "visible",
  }}
>
  <div
    style={{
      height: "100%",
      width: "100%",
      background: "rgba(10, 20, 15, 0.8)",
      border: "1px solid #00ff66",
      borderRadius: "1rem",
      boxShadow: `
        0 0 12px 2px #00ff66,
        0 0 24px 6px rgba(0, 255, 102, 0.4),
        inset 0 0 12px rgba(0, 255, 102, 0.15),
        inset 0 0 24px rgba(0, 255, 102, 0.1)
      `,
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(2px)",
    }}
  >
    {/* content here */}
  </div>
</div>


          {/* Right stacked yellow boxes */}
          <div className="flex flex-col gap-8 w-3/5 pr-8 h-[340px] my-8 about-section-rightboxes">
            {/* About Section Box */}
            <div
              className="flex flex-col justify-center flex-1 h-1/2 p-4 rounded-lg border-2 border-green-400"
              style={{
                backgroundColor: "rgba(0,0,0,0.25)",
               boxShadow: "0 0 10px #adff2f, 0 0 25px #ccffcc, 0 0 45px #b6ff00, inset 0 0 20px #7eb47eff",

                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
              }}
            >
              <h2
                className="mb-2 text-green-400 text-xl"
                style={{ textShadow: "0 0 10px #28462aff" }}
              >
                ABOUT ACM
              </h2>
              <p className="leading-relaxed text-xs">
                PLACEHOLDER TEXT STYLED IN A NEON LAYOUT.
                <br />
                REFLECTING GLOWING EDGES AND CYBERPUNK DESIGN.
                <br />
                SHORTER BLOCKS JUST LIKE THE REFERENCE IMAGE.
              </p>
            </div>

            {/* Bizendint Section */}
            <div
              className="flex justify-between gap-4 items-start p-2 rounded-lg border-2  border-green-400"
              style={{
                backgroundColor: "rgba(0,0,0,0.25)",
                boxShadow: "0 0 10px #adff2f, 0 0 25px #ccffcc, 0 0 45px #b6ff00, inset 0 0 20px #dfffdf",

                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
              }}
            >
              <div className="flex flex-col justify-center">
                <h2
                  className="mb-2 text-green-400 text-lg"
                  style={{ textShadow: "0 0 10px #a2cfaaff" }}
                >
                  BIZENDINT
                </h2>
                <p className="leading-relaxed text-xs">
                  DATA MATRIX VALUES, SIMULATION FLUX.
                  <br />
                  YELLOW NUMBER MATRIX IN COLUMN.
                  <br />
                  SEGMENT LOGIC ACTIVE.
                  <br/>
                  ACM IS RANKED #1 
                  <br/>
                  WE ROCKING IT!
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

      {/* Animations and responsive styles as global styles */}
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

          /* Responsive styles for About Section */
          @media (max-width: 1024px) {
            #about-section .about-section-rightboxes {
              transform: scale(0.92);
              transform-origin: top center;
            }
            #about-section .about-section-rightboxes h2,
            #about-section .about-section-rightboxes p {
              font-size: 90% !important;
            }
            #about-section {
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            #about-section .mr-44, #about-section .mr-40 {
              margin-right: 0 !important;
            }
            #about-section .w-3\/4 {
              width: 98% !important;
            }
            #about-section .h-\[400px\], #about-section .h-\[340px\] {
              height: 180px !important;
            }
            #about-section .w-\[480px\] {
              width: 98vw !important;
              min-width: 0 !important;
              max-width: 100% !important;
            }
            #about-section .flex-col.gap-8.w-3\/5.pr-8.h-\[340px\].my-8 {
              width: 100% !important;
              padding-right: 0 !important;
              height: auto !important;
              gap: 0.5rem !important;
              margin: 0 !important;
            }
          }
          @media (max-width: 768px) {
            #about-section .about-section-rightboxes {
              transform: scale(0.82);
              transform-origin: top center;
            }
            #about-section .about-section-rightboxes h2,
            #about-section .about-section-rightboxes p {
              font-size: 80% !important;
            }
            #about-section {
              padding-left: 0.1rem !important;
              padding-right: 0.1rem !important;
            }
            #about-section .w-3\/4 {
              width: 100% !important;
            }
            #about-section .h-\[400px\], #about-section .h-\[340px\] {
              height: 110px !important;
            }
            #about-section .w-\[480px\] {
              width: 100vw !important;
              min-width: 0 !important;
              max-width: 100% !important;
            }
            #about-section .flex-col.gap-8.w-3\/5.pr-8.h-\[340px\].my-8 {
              width: 100% !important;
              padding-right: 0 !important;
              height: auto !important;
              gap: 0.2rem !important;
              margin: 0 !important;
            }
          }
          @media (max-width: 600px) {
            #about-section .about-section-rightboxes {
              transform: scale(0.7);
              transform-origin: top center;
            }
            #about-section .about-section-rightboxes h2,
            #about-section .about-section-rightboxes p {
              font-size: 65% !important;
            }
            #about-section {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            #about-section .w-3\/4 {
              width: 100% !important;
            }
            #about-section .h-\[400px\], #about-section .h-\[340px\] {
              height: 70px !important;
            }
            #about-section .w-\[480px\] {
              width: 100vw !important;
              min-width: 0 !important;
              max-width: 100% !important;
            }
            #about-section .flex-col.gap-8.w-3\/5.pr-8.h-\[340px\].my-8 {
              width: 100% !important;
              padding-right: 0 !important;
              height: auto !important;
              gap: 0.1rem !important;
              margin: 0 !important;
            }
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default AboutSection;