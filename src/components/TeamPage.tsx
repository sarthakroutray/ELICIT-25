import React from "react";
import DigitalRain from "./DigitalRain";
import ProfileCard from "./ProfileCard";

const Section = ({ title, members }: { title: string; members: any[] }) => (
  <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 max-w-7xl mx-auto">
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
      {title}
    </h2>

   <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-10 place-items-center w-full">
  {members.map((m, i) => (
    <ProfileCard
      key={i}
      name={m.name}
      title={m.title}
      handle={m.handle}
      avatarUrl={m.avatarUrl}
      showUserInfo={true}
      enableTilt={true}
    />
  ))}
</div>

  </div>
);

const TeamPage: React.FC = () => {
  const conveners = [
    { name: "Pranav Deshpande", title: "Convener", handle: "pranavD", avatarUrl: "/team/pranav.png" },
    { name: "Agam Bhasin", title: "Head Convener", handle: "agamB", avatarUrl: "/team/agam.png" },
    { name: "Parthav Shah", title: "Convener", handle: "parthavS", avatarUrl: "/team/parthav.png" },
  ];

  const directors = [
    { name: "SUKRIT SINHA", title: "Managing Director", handle: "sukritS", avatarUrl: "/team/sukrit.png" },
    { name: "MUMUKSHU BOHARA", title: "Managing Director", handle: "mumukshuB", avatarUrl: "/team/mumukshu.png" },
  ];

  const marketing = [
    { name: "DISHA", title: "Marketing", handle: "disha", avatarUrl: "/team/dishaa.png" },
    { name: "HARMAN BHAMBRA", title: "Marketing", handle: "harman", avatarUrl: "/team/harman.png" },
    { name: "NIRMIT", title: "Marketing", handle: "nirmit", avatarUrl: "/team/nirmit.png" },
  ];

  const operations = [
    { name: "AKSHAT MISHRA", title: "Operations", handle: "akshat", avatarUrl: "/team/akshat.png" },
    { name: "ISHITVA SINHA", title: "Operations", handle: "ishitva", avatarUrl: "/team/ishitva.png" },
    { name: "OJAS KHETRAPAL", title: "Operations", handle: "ojas", avatarUrl: "/team/Ojas_Khetarpal.png" },
  ];

  const technical = [
    { name: "ESHAAN SAHA", title: "Technical", handle: "eshaan", avatarUrl: "/team/Eshaan saha .png" },
    { name: "VARUN NARAYANAN JAIN", title: "Technical", handle: "varun", avatarUrl: "/team/VarunNarayanJain.png" },
  ];

  const snc = [
    { name: "SIDDHAM GUPTA", title: "SnC", handle: "siddham", avatarUrl: "/team/Siddham gupta.png" },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen font-orbitron">
      <DigitalRain />

      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Sections */}
      <Section title="CONVENERS" members={conveners} />
      <Section title="MANAGING DIRECTORS" members={directors} />
      <Section title="MARKETING" members={marketing} />
      <Section title="OPERATIONS" members={operations} />
      <Section title="TECHNICAL" members={technical} />
      <Section title="SnC" members={snc} />
    </div>
  );
};

export default TeamPage;
