import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DigitalRain from "./DigitalRain";

// Simple in-file lazy video loader using IntersectionObserver
const LazyVideo: React.FC<React.VideoHTMLAttributes<HTMLVideoElement> & { src: string }> = ({ src, autoPlay, ...rest }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Fallback: set src immediately
      if (!el.src) el.src = src;
      if (autoPlay) el.play?.().catch(() => {});
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = src;
          if (autoPlay) el.play?.().catch(() => {});
          observer.disconnect();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [src, autoPlay]);

  return <video ref={ref} preload="none" {...rest} />;
};

const AboutSection: React.FC = () => {
  return (
    <div
      id="about-section"
      className="bg-black text-white font-orbitron uppercase min-h-screen relative"
      style={{
        fontFamily: "'Orbitron', sans-serif",
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

      {/* Desktop Layout (unchanged) */}
      <div className="hidden md:flex px-8 pl-48 overflow-y-auto overflow-x-hidden min-h-screen select-none about-section-content z-10 relative flex-col items-center mt-12 mb-8">
        {/* Your entire existing desktop JSX code goes here exactly as is */}
        <div className="uppercase text-sm tracking-widest text-cyan-400 mr-44 font-mono drop-shadow-[0_0_6px_#c77dff] mb-2">
          SYSTEM CORE[03]
        </div>
    <h1 
      className="text-4xl mr-[160px] md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider text-center"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #d7e60eff,
                0 0 20px #ffff00ff,
                0 0 30px #d4d804ff
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            ABOUT
          </h1>
        <div className="uppercase mr-44 mb-10 text-xs tracking-widest text-white font-mono mt-0 drop-shadow-[0_0_6px_#e879f9]">
          MAIN SYSTEM POWERS
        </div>

        <div className="mb-32 mr-40">
          <div className="overflow-y-auto">
            <div
              className="relative flex justify-center items-start gap-8 rounded-lg"
              style={{
                clipPath:
                  "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                boxShadow:
                  "0 0 8px #adccd5ff, 0 0 18px #f4f6f7ff, 0 0 28px #f7fafbff, inset 0 0 12px #d8e1e4ff",
              }}
            ></div>

  <div
  className="relative mx-auto mt-4 mb-12 h-[500px] w-full max-w-[1200px] flex-shrink-0"
  style={{
    overflow: "hidden", // make sure video doesn't overflow rounded corners
    borderRadius: "1rem",
    boxShadow: `
      0 0 12px 2px #e1e0e304,
      0 0 24px 6px rgba(230, 226, 234, 0.11),
      inset 0 0 12px rgba(192, 132, 252, 0.25),
      inset 0 0 24px rgba(192, 132, 252, 0.15)
    `,
  }}
>
 <LazyVideo
  src="/About/Elicit.mp4"
  autoPlay
  loop
  muted
  playsInline
  poster="/logo.png"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1rem",
  }}
 />

  <div className="absolute inset-0 flex items-center justify-center">
    {/* overlay content if needed */}
  </div>

            </div>

            <p
              className="text-center text-6xl font-extrabold tracking-wider text-white drop-shadow-lg mb-2"
              style={{
                textShadow:
                  "0 0 16px #92e1e4, 0 0 32px #36d4d9, 0 0 64px #199cbd",
                letterSpacing: "0.08em",
              }}
            >
              10 YEARS OF MUJ ACM!
            </p>

            <div className="flex justify-center">
              <hr className="w-24 border-t-4 border-cyan-300 rounded-full mb-2" />
            </div>

            <p
              className="mx-auto mt-6 text-lg max-w-3xl text-center text-yellow-200 leading-relaxed"
              style={{
                textShadow: "0 0 8px rgba(247,236,37,0.7)",
              }}
            >
              <span className="font-semibold text-white">
                The Association for Computing Machinery (ACM)
              </span>{" "}
              stands at the forefront of the computing world as the world’s
              largest educational and scientific computing society.
              <br />
              <br />
              With a rich history and an expansive network, ACM is dedicated to
              advancing computing as a discipline and profession.
            </p>

            <div className="flex gap-4 ml-20 mt-12">
              <div className="relative w-[400px] h-[500px]">
                <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-15 blur-lg pointer-events-none"></div>

                <img
                  src="/About/elicit.png"
                  alt="Techy Background"
                  className="relative w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8 max-w-sm">
                    <h2
                      className="text-5xl font-extrabold text-white-300 mb-24"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        letterSpacing: "2px",
                        textShadow: "0 0 10px #2ba3c4ff, 0 0 20px #55cff7ff",
                      }}
                    >
                      ELICIT
                    </h2>
                    <p
                      className="text-sm text-cyan-100 leading-relaxed"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        textShadow: "0 0 8px #a855f7",
                      }}
                    >
                      A futuristic platform that blends creativity with innovation.
                      Explore the possibilities of design, tech, and imagination
                      coming together in harmony. This is Elicit 25. The biggest
                      techfest of MUJ. A must have experience. We celebrate 10 years
                      of ACM as well as ELICIT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mr-[100px] flex-col justify-between h-[500px] w-[740px]">
                <div className="overflow-hidden rounded-xl h-[280px] flex items-center">
                  <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: ["0%", "-50%"] }} // shift by half because of duplication
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {[1, 2, 3].concat([1, 2, 3]).map((i, idx) => (
                      <img
                        key={`top-${i}-${idx}`}
                        src={`/About/carousel/img${i}.png`}
                        alt={`carousel top ${i}`}
                        className="w-60 h-40 object-cover rounded-lg"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (img.src.endsWith(`/About/carousel/img${i}.png`)) {
                            img.src = '/About/elicit.png';
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                <div className="overflow-hidden rounded-xl h-[240px] flex items-center">
                  <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: ["-50%", "0%"] }} // reverse direction
                    transition={{
                      repeat: Infinity,
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {[4, 5, 6].concat([4, 5, 6]).map((i, idx) => (
                      <img
                        key={`bottom-${i}-${idx}`}
                        src={`/About/carousel/img${i}.png`}
                        alt={`carousel bottom ${i}`}
                        className="w-60 h-40 object-cover rounded-lg"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (img.src.endsWith(`/About/carousel/img${i}.png`)) {
                            img.src = '/About/elicit.png';
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: visible only on small screens */}
      <div className="flex flex-col md:hidden px-4 py-8 max-w-screen-sm mx-auto select-none relative z-10">
        <div className="uppercase text-sm tracking-widest text-cyan-400 font-mono drop-shadow-[0_0_6px_#c77dff] mb-2 text-center">
          SYSTEM CORE[03]
        </div>

        <h1
          className="font-bold text-white uppercase tracking-widest mb-6 text-center text-4xl"
          style={{
            fontFamily: "Orbitron, monospace",
            textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #d7e60eff,
                0 0 20px #ffff00ff,
                0 0 30px #d4d804ff
              `,
            filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.9))",
          }}
        >
          ABOUT
        </h1>

        <div className="uppercase mb-10 text-xs tracking-widest text-white font-mono text-center drop-shadow-[0_0_6px_#e879f9]">
          MAIN SYSTEM POWERS
        </div>

        {/* Left info box simplified */}
<div
  className="bg-[rgba(49,120,136,0.09)] rounded-lg mb-6 shadow-inner overflow-hidden flex items-center justify-center"
  style={{
    boxShadow: `
      0 0 12px 2px #e1e0e304,
      0 0 24px 6px rgba(230, 226, 234, 0.11),
      inset 0 0 12px rgba(192, 132, 252, 0.25),
      inset 0 0 24px rgba(192, 132, 252, 0.15)
    `,
    height: "200px",
  }}
>
  <LazyVideo
    src="/About/Elicit.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="rounded-lg"
    poster="/About/elicit.png"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "1rem",
    }}
  />
</div>


        {/* 10 YEARS OF ACM heading */}
        <p
          className="text-3xl font-extrabold tracking-wider text-white drop-shadow-lg mb-2 text-center"
          style={{
            textShadow: "0 0 16px #92e1e4, 0 0 32px #36d4d9, 0 0 64px #199cbd",
            letterSpacing: "0.06em",
          }}
        >
          10 YEARS OF MUJ ACM!
        </p>

  <hr className="w-24 border-t-4 border-cyan-300 rounded-full mx-auto mb-6" />

        <p
          className="text-yellow-200 text-center text-lg leading-relaxed mb-6"
          style={{
            textShadow: "0 0 8px rgba(247,236,37,0.7)",
          }}
        >
          <span className="font-semibold text-white">
            The Association for Computing Machinery (ACM)
          </span>{" "}
          stands at the forefront of the computing world as the world’s largest
          educational and scientific computing society.
          <br />
          <br />
          With a rich history and an expansive network, ACM is dedicated to
          advancing computing as a discipline and profession.
        </p>

        {/* Mobile image */}
    <div className="flex flex-col md:hidden pt-10 min-h-screen select-none relative z-10">

  {/* Glowing cyan text box with same shape and styling */}
<div
  className="relative mb-24 mx-auto"
  style={{
    width: '350px',       // Match frame width to your layout, e.g. 350px
    height: '350px',      // Match frame height to actual frame PNG
    maxWidth: '95vw',     // Responsive
  }}
>
  {/* PNG frame */}
  <img
    src="/About/elicit.png"
    alt="Border Frame"
    className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none z-0"
    loading="lazy"
  />

  {/* Text inside PNG frame */}
  <div
    className="absolute"
    style={{
      top: '36px',     // Adjust this to clear the frame's border. Tweak as needed!
      left: '24px',
      right: '24px',
      bottom: '36px',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "'Orbitron', monospace",
      color: "#a0ffff",
      textShadow: "0 0 8px #00ffff",
      padding: "0 6px",
    }}
  >
    <h2
      className="text-cyan-300 font-extrabold mb-6 text-xl"
      style={{ textShadow: "0 0 10px #00ffff" }}
    >
      ELICIT
    </h2>
    <p
      className="font-light text-center justify-center text-xs leading-relaxed"
      style={{
        whiteSpace: "pre-line",
        color: "#c4ffff",
        textShadow: "0 0 6px #00ffff",
      }}
    >
      A futuristic platform that 
      {"\n"}blends creativity with
      {"\n"}innovation.
      {"\n"}Explore the possibilities of 
      {"\n"}design, tech, and imagination 
      {"\n"}coming together in harmony.
      {"\n"}This is Elicit 25 – MUJ's 
      {"\n"}biggest techfest.
      {"\n"}Celebrate 10 years of 
      ACM and ELICIT!
    </p>
  </div>
</div>





  {/* Additional mobile content below... */}

  {/* Carousel here if needed */}
  <div className="w-full overflow-hidden ">
    <motion.div
      className="flex gap-4"
      style={{ width: 'max-content' }}
      animate={{
        x: ['0%', '-50%']
      }}
      transition={{
  repeat: Infinity,
  duration: 20,
        ease: "linear"
      }}
    >
      {/* Duplicate images for seamless animation */}
      {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, idx) => (
        <img
          key={i+"-"+idx}
          src={`/About/carousel/img${i}.png`}
          alt={`carousel mobile ${i}`}
          className="h-32 w-44 flex-shrink-0 rounded-lg object-cover border border-cyan-600 bg-black/30"
          style={{ minWidth: '176px' }}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.src.endsWith(`/About/carousel/img${i}.png`)) {
              img.src = '/About/elicit.png';
            }
          }}
        />
      ))}
    </motion.div>
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