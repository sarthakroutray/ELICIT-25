import React, { useState } from "react";
import DigitalRain from "./DigitalRain";

const CyberpunkEventInterface: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const eventCards = [
    {
      title: "DEFUSE 2.0",
      description:
        "Every second counts in this thrilling bomb defusal challenge.\nTest your logic, speed, and teamwork under pressure!",
      date: "15th Sept 2025",
      time: "12:30 PM",
      venue: "Old Mess",
      prize: "5K",
      contact: "+91-XXXXXXXXXX",
      organizer: "ACM MUJ",
      poster: "/desfuse-poster.png", // put your poster in public folder
    },
    {
      title: "CYBER NEXUS EXPO",
      description:
        "Digital revolution meets reality\nin this groundbreaking showcase\nof tomorrow's technology today\nExperience virtual worlds and\naugmented possibilities that will\nredefine your perception",
    },
    {
      title: "NEON NIGHTS FESTIVAL",
      description:
        "Electric beats pulse through\nthe midnight air as artists\nfrom across the grid converge\nDance until dawn breaks over\nthe neon-lit cityscape while\nbass lines shake your core",
    },
    {
      title: "MATRIX CODE SUMMIT",
      description:
        "Hackers and developers unite\nto push the boundaries of\nwhat's possible in cyberspace\nLearn cutting-edge techniques\nand network with the elite\nof the digital underground",
    },
    {
      title: "HOLOGRAM GALLERY OPENING",
      description:
        "Step into a world where art\ntranscends physical limitations\nInteractive holographic displays\nrespond to your presence while\ncreating immersive experiences\nthat blur reality and fiction",
    },
    {
      title: "QUANTUM GAMING TOURNAMENT",
      description:
        "Compete in next-generation\nvirtual reality competitions\nwhere skill meets technology\nPrize pools worth millions\nof credits await the champions\nof this digital colosseum",
    },
    {
      title: "SYNTHWAVE CONCERT SERIES",
      description:
        "Retro-futuristic sounds fill\nthe air as legendary artists\nperform live under laser lights\nNostalgic melodies meet\nmodern production in this\nepic audiovisual journey",
    },
  ];

  const handleNext = () =>
    setCurrentCard((prev) => (prev + 1) % eventCards.length);
  const handlePrev = () =>
    setCurrentCard((prev) => (prev - 1 + eventCards.length) % eventCards.length);

  return (
    
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DigitalRain />

      {/* Carousel wrapper */}
      <div className="flex items-center justify-center h-[1500px] relative">
        {/* Left arrow */}
        <div
          className="text-pink-500 text-6xl cursor-pointer hover:text-pink-400 absolute left-6 z-30 select-none"
          onClick={handlePrev}
        >
          &larr;
        </div>

        {/* Cards container */}
        <div className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden">
          {eventCards.map((event, i) => {
            const offset = i - currentCard;
            const total = eventCards.length;
            const half = Math.floor(total / 2);

            let relativeOffset = offset;
            if (offset > half) relativeOffset -= total;
            if (offset < -half) relativeOffset += total;

            if (Math.abs(relativeOffset) > 2) return null;

            const isActive = relativeOffset === 0;
            const cardWidth = 600;
            const gap = 40;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${relativeOffset * (cardWidth + gap)}px)
                    scale(${isActive ? 1.2 : 0.85})
                  `,
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 20 : 10 - Math.abs(relativeOffset),
                }}
              >
                {/* Special layout for DEFUSE 2.0 */}
                {event.title === "DEFUSE 2.0" ? (
                  <div
                    className="w-[900px] h-[600px] bg-black border-4 shadow-lg flex p-6 gap-6"
                    style={{
                      borderColor: "#22c55e",
                      boxShadow: isActive
                        ? "0 0 30px #22c55e"
                        : "0 0 10px rgba(34,197,94,0.5)",
                    }}
                  >
                    {/* Left side → poster + extra details */}
                    <div className="flex flex-col items-center w-1/2">
                      <img
  src={event.poster}
  alt="Defuse 2.0 Poster"
  className="rounded-lg shadow-lg max-h-[600px] object-contain mt-[-70px]"
/>

                      <div className="top-[200px] text-green-400 font-mono text-sm text-center">
                        <p className="font-bold text-pink-500 text-lg mt-[-80px]">
                          {event.title}
                        </p>
                        <p className= ''>Organizer: {event.organizer}</p>
                        <p>Contact: {event.contact}</p>
                      </div>
                    </div>

                    {/* Right side → description + details */}
                    <div className="flex flex-col justify-center w-1/2 text-left">
                      <h2 className="text-pink-500 font-bold font-mono mb-4 text-2xl glow-text-pink">
                        EVENT : {event.title}
                      </h2>
                      <p className="text-green-400 font-mono text-sm whitespace-pre-line mb-6">
                        {event.description}
                      </p>
                      <div className="text-green-400 font-mono text-base space-y-2">
                        <p>
                          <span className="text-pink-400">📅 Date:</span>{" "}
                          {event.date}
                        </p>
                        <p>
                          <span className="text-pink-400">⏰ Time:</span>{" "}
                          {event.time}
                        </p>
                        <p>
                          <span className="text-pink-400">📍 Venue:</span>{" "}
                          {event.venue}
                        </p>
                        <p>
                          <span className="text-pink-400">🏆 Prize Pool:</span>{" "}
                          {event.prize}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  


                  
                  /* Default layout for other cards */
                  <div
                    className={`w-[600px] h-[550px] bg-black border-4 shadow-lg flex flex-col p-6`}
                    style={{
                      borderColor: "#22c55e",
                      boxShadow: isActive
                        ? "0 0 30px #22c55e"
                        : "0 0 10px rgba(34,197,94,0.5)",
                    }}
                  >
                    <div className="flex flex-col flex-1 items-center justify-center text-center">
                      <h2 className="text-pink-500 font-bold font-mono   text-2xl glow-text-pink">
                        EVENT : {event.title}
                      </h2>
                      <p className="text-green-400 font-mono text-sm whitespace-pre-line max-w-[90%]">
                        {event.description}
                      </p>
                    </div>
                    <div className="text-green-400 text-xs font-mono text-center mt-4">
                      CARD {i + 1} / {eventCards.length}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <div
          className="text-pink-500 text-6xl cursor-pointer hover:text-pink-400 absolute right-6 z-30 select-none"
          onClick={handleNext}
        >
          &rarr;
        </div>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <style>{`
        .glow-text-pink {
          text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899;
        }
      `}</style>
    </div>
  );
};

export default CyberpunkEventInterface;
