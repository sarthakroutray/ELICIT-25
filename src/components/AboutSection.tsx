import React from "react";
import { motion } from "framer-motion";
import DigitalRain from "./DigitalRain";


const AboutSection: React.FC = () => {
  return (
    <div
      id="about-section"
      className="px-8 pl-48 bg-black text-white font-orbitron uppercase"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        minHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Digital rain background */}
      <DigitalRain />

      {/* Shared overlay to match site look */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      <div
        className="w-full flex flex-col items-center mt-12 mb-8 select-none about-section-content"
        style={{ zIndex: 2, position: "relative" }}
      >
        <div className="uppercase text-sm tracking-widest text-purple-400 mr-44 font-mono drop-shadow-[0_0_6px_#c77dff] mb-2">
          SYSTEM CORE[03]
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mr-44 font-bold text-white mb-6 tracking-wider"
          style={{
            fontFamily: "Orbitron, monospace",
            textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #a855f7,
                0 0 20px #c084fc,
                0 0 30px #e879f9
              `,
            filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.9))",
          }}
        >
          ABOUT
        </h1>
        <div className="uppercase mr-44 mb-10 text-xs tracking-widest text-white font-mono mt-0 drop-shadow-[0_0_6px_#e879f9]">
          MAIN SYSTEM POWERS
        </div>

        {/* Wrapper */}
        <div
          className="mb-32 mr-40 rounded-2xl bg-[rgba(10,10,10,0.75)] w-3/4 
  shadow-[0_0_15px_#a855f7,0_0_30px_#c77dff,0_0_45px_#9333ea,inset_0_0_15px_#c084fc]"
        >
          {/* NEW SCROLL CONTAINER */}
          <div className="max-h-[70vh] overflow-y-auto neon-scrollbar">
            <div
              className="relative pb-2 bg-[rgba(0,0,0,0.25)] border-2 border-white 
      flex justify-center items-start gap-8 rounded-lg"
              style={{
                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                boxShadow:
                  "0 0 8px #adccd5ff, 0 0 18px #f4f6f7ff, 0 0 28px #f7fafbff, inset 0 0 12px #d8e1e4ff",
              }}
            ></div>

            {/* LEFT RECTANGLE BOX */}
            <div
              className="relative pl-16 pr-16 flex-shrink-0 h-[400px] m-8 mr-2 mt-8"
              style={{
                overflow: "visible",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  background: "rgba(20, 10, 25, 0.8)",
                  border: "1px solid #c084fc",
                  borderRadius: "1rem",
                  boxShadow: `
        0 0 12px 2px #e1e0e304,
        0 0 24px 6px rgba(230, 226, 234, 0.11),
        inset 0 0 12px rgba(192, 132, 252, 0.25),
        inset 0 0 24px rgba(192, 132, 252, 0.15)
      `,
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(2px)",
                }}
              >
                {/* content here */}
              </div>
            </div>
            <p
              className="ml-8 pt-4 text-center text-6xl font-bold text-white-900"
              style={{
                textShadow:
                  "0 0 10px #c084fc, 0 0 20px #e879f9, 0 0 40px #9333ea",
              }}
            >
              10 YEARS OF ACM!
            </p>
            <p
              className="ml-8 mr-8 mt-6 text-md text-center text-white-200"
              style={{
                textShadow: "0 0 6px rgba(246, 242, 250, 0.6)",
              }}
            >
              The Association for Computing Machinery (ACM) stands at the
              forefront of the computing world as the world’s largest
              educational and scientific computing society. <br />
              <br />
              With a rich history and an expansive network, ACM is dedicated to
              advancing computing as a discipline and profession. Through its
              commitment to research, education, and collaboration, ACM serves
              as a vital hub for connecting computing professionals, fostering
              innovation, and promoting ethical practices.
            </p>

            {/* FLEX ROW: PNG (left) + CAROUSELS (right) */}
            <div className="flex gap-8 ml-24 mt-12 mr-24 mb-12 flex ">
              {/* PNG BOX */}
              <div className="relative w-[400px] h-[500px]">
                {/* Soft violet inner glow only */}
                <div className="absolute inset-0 rounded-xl bg-violet-400 opacity-15 blur-lg pointer-events-none"></div>

                {/* PNG itself */}
                <img
                  src="/About/elicit.png"
                  alt="Techy Background"
                  className="relative w-full h-full object-cover rounded-xl"
                />

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8 max-w-sm">
                    <h2
                      className="text-5xl font-extrabold text-violet-300 mb-24"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        letterSpacing: "2px",
                        textShadow: "0 0 10px #c084fc, 0 0 20px #a855f7",
                      }}
                    >
                      ELICIT
                    </h2>
                    <p
                      className="text-sm text-violet-200 leading-relaxed"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        textShadow: "0 0 8px #a855f7",
                      }}
                    >
                      A futuristic platform that blends creativity with
                      innovation. Explore the possibilities of design, tech, and
                      imagination coming together in harmony. This is Elicit 25.
                      The biggest techfest of MUJ. A must have experience. We
                      celebrate 10 years of ACM as well as ELICIT.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: TWO CAROUSELS */}
              <div className="flex flex-col justify-between h-[50vh] w-[70vh] flex justify-center mb-[10vh]">
                {/* TOP CAROUSEL */}
                <div className="overflow-hidden rounded-xl h-[240px] flex items-center">
                  <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear",
                    }}
                  >
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((i) => (
                      <img
                        key={`top-${i}`}
                        src={`About/carousel/img${i}.png`}
                        alt={`carousel ${i}`}
                        className="w-40 h-40 object-cover rounded-lg" />
                      
                    ))}
                  </motion.div>
                  
                </div>

                {/* BOTTOM CAROUSEL */}
                <div className="overflow-hidden  rounded-xl h-[240px] flex items-center">
                  <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear",
                    }}
                  >
                    {[5, 6, 7, 8, 5, 6, 7, 8].map((i) => (
                      <img
                        key={`bottom-${i}`}
                        src={`/About/carousel/img${i}.png`}
                        alt={`carousel ${i}`}
                        className="w-40 h-40 object-cover rounded-lg"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations and responsive styles */}
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
  );
};

export default AboutSection;