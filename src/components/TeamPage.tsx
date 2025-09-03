import React from "react";
import DigitalRain from "./DigitalRain";
import ProfileCard from "./ProfileCard";

const Section = ({ 
  title, 
  members, 
  layout = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full justify-items-stretch" 
}: { 
  title: string; 
  members: any[]; 
  layout?: string; 
}) => (
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

    <div className={layout}>
      {members.map((m, i) => (
        <div key={i} className="flex w-full transform scale-90">
  <ProfileCard
    name={m.name}
    title={m.title}
    handle={m.handle}
    avatarUrl={m.avatarUrl}
    showUserInfo={true}
    enableTilt={true}
    className="flex-1"
  />
</div>


      ))}
    </div>
  </div>
);



const TeamPage: React.FC = () => {
  const conveners = [
    { name: "Pranav Deshpande", title: "Convener", handle: "pranavD", avatarUrl: "/team/pranav.png" },
    { name: "Agam Bhasin", title: "Head Convener", handle: "agamB", avatarUrl: "/team/42.png",   },
    { name: "Parthav Shah", title: "Convener", handle: "parthavS", avatarUrl: "/team/1)ec reveal.png" },
  ];

  const directors = [
    { name: "SUKRIT SINHA", title: "Managing Director", handle: "sukritS", avatarUrl: "/team/17.png" },
    { name: "MUMUKSHU BOHARA", title: "Managing Director", handle: "mumukshuB", avatarUrl: "/team/3.png" },
  ];

  const advisors = [
    { name: "NEET JAIN", title: "Advisor", handle: "advisor1", avatarUrl: "/team/neetjain.png" },
    { name: "SARTHAK", title: "Advisor", handle: "advisor2", avatarUrl: "/team/18.png" },
  ];

  const technical = [
    { name: "ESHAAN SAHA", title: "Technical", handle: "eshaan", avatarUrl: "/team/9.png" },
    { name: "VARUN NARAYAN JAIN", title: "Technical", handle: "varun", avatarUrl: "/team/8.png" },
    { name: "MANAN DUBEY", title: "Technical", handle: "tech3", avatarUrl: "/team/16.png" },
    { name: "PRANAV", title: "Technical", handle: "tech4", avatarUrl: "/team/15.png" },
  ];

  const events = [
    { name: "SUBHASH", title: "Events", handle: "event1", avatarUrl: "/team/.png" },
    { name: "PRAKHAR SRIVASTAVA", title: "Events", handle: "event2", avatarUrl: "/team/1.png" },
    { name: "YASH SHARMA", title: "Events", handle: "event3", avatarUrl: "/team/14.png" },
    { name: "PARNIKA SUNDA", title: "Events", handle: "event4", avatarUrl: "/team/Parnika Sunda.png", avatarClassName: "parnika-avatar"  },
  ];

  const creativeDirectors = [
    { name: "NAMAN VERMA", title: "Creative Director", handle: "creative1", avatarUrl: "/team/10.png" },
    { name: "MANALEE TAMRAKAR", title: "Creative Director", handle: "creative2", avatarUrl: "/team/12.png" },
    { name: "SHIFA KHAN", title: "Creative Director", handle: "creative3", avatarUrl: "/team/11.png" },
  ];

  const financeRegistration = [
    { name: "ANSHIKA KUMARI", title: "Finance & Registration", handle: "finance1", avatarUrl: "/team/4.png" },
    { name: "ROHIT NALAWDE", title: "Finance & Registration", handle: "finance2", avatarUrl: "/team/5.png" },
  ];

  const partnership = [
    { name: "SIDDHAM GUPTA", title: "Partnership", handle: "partner1", avatarUrl: "/team/7.png",  },
    { name: "MAHI SACHDEVA", title: "Partnership", handle: "partner2", avatarUrl: "/team/34.png" },
    { name: "PRANJAL JAIN", title: "Partnership", handle: "partner3", avatarUrl: "/team/30.png" },
  ];

  const operations = [
    { name: "AKSHAT MISHRA", title: "Operations", handle: "ops1", avatarUrl: "/team/32.png" },
    { name: "OJAS KHETARPAL", title: "Operations", handle: "ops2", avatarUrl: "/team/Ojas_Khetarpal.png" },
    { name: "ISHITVA SINGH", title: "Operations", handle: "ops3", avatarUrl: "/team/ishitva.png" },
  ];

  const socialMedia = [
    { name: "PRAKRITI", title: "Social Media", handle: "sm1", avatarUrl: "/team/25.png" },
    { name: "PRIYA AGRAWAL", title: "Social Media", handle: "sm2", avatarUrl: "/team/24.png" },
    { name: "ANVI SARBHAI", title: "Social Media", handle: "sm3", avatarUrl: "/team/23.png" },
  ];

  const media = [
    { name: "MANISH", title: "Media", handle: "media1", avatarUrl: "/team/26.png" },
    { name: "ADITYA", title: "Media", handle: "media2", avatarUrl: "/team/27.png" },
    { name: "KANAV", title: "Media", handle: "media3", avatarUrl: "/team/29.png" },
    { name: "RISHIT", title: "Media", handle: "media4", avatarUrl: "/team/28.png" },
  ];

  return (

  <div className="relative bg-black text-white min-h-screen font-orbitron">
    <DigitalRain />

    <Section 
      title="CONVENERS" 
      members={conveners} 
      layout="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" 
    />
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
      
      {/* <Section title="MANAGING DIRECTORS" members={directors} />
      <Section title="MARKETING" members={marketing} />
      <Section title="OPERATIONS" members={operations} />
      <Section title="TECHNICAL" members={technical} />
      <Section title="SnC" members={snc} /> */}
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
  /* <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-8 font-bold text-center text-white-400 mb-8 md:mb-12"
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
<div className="flex flex-wrap justify-evenly items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">

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
<div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
  <h2
    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
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
    CONVENERS
  </h2>

  {/* Grid with 4 cards per row */}
<div className="w-full flex ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-80 max-w-20xl mr-[1200px] w-[1600px]">

      <div className="w-[60vw] max-w-[200px]">
      <ProfileCard
        name="Pranav Deshpande"
        title="Convener"
        handle="pranavD"
        avatarUrl="/team/pranav.png"
        showUserInfo={true}
        enableTilt={true}
      />
      </div>
  <div className="grid grid-cols-2 md:grid-cols-4 ml-8 lg:grid-cols-6 gap-80 max-w-20xl mr-[1200px] w-[1600px]">
    <div className="w-[60vw] max-w-[200px]">
      <ProfileCard
        name="Agam Bhasin"
        title="Head Convener"
        handle="agamB"
        avatarUrl="/team/agam.png"
        showUserInfo={true}
        enableTilt={true}
      />
    </div>

    <div className="w-[60vw] max-w-[200px]">
      <ProfileCard
        name="Parthav Shah"
        title="Convener"
        handle="parthavS"
        avatarUrl="/team/parthav.png"
        showUserInfo={true}
        enableTilt={true}
      />
   </div>

    <div className="w-[60vw] max-w-[200px]">
      <ProfileCard
        name="New Person"
        title="Convener"
        handle="newP"
        avatarUrl="/team/new.png"
        showUserInfo={true}
        enableTilt={true}
      />
    </div>
  </div>
</div>
</div>


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
  </div>

    <Section 
      title="MANAGING DIRECTORS" 
      members={directors} 
      layout="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center" 
    />

     <Section 
      title="ADVISORS" 
      members={advisors} 
      layout="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center" 
    />

    <Section 
      title="TECHNICAL" 
      members={technical} 
      layout="grid grid-cols-2 md:grid-cols-4 gap-[120px] ml-[-110px]" 
    />

    <Section 
      title="EVENTS" 
      members={events} 
      layout="grid grid-cols-2 md:grid-cols-4 gap-[120px] ml-[-110px]" 
    />

    <Section 
      title="CREATIVE DIRECTORS" 
      members={creativeDirectors} 
      layout="grid grid-cols-3 gap-12 justify-items-center" 
    />

    <Section 
      title="FINANCE & REGISTRATION" 
      members={financeRegistration} 
      layout="grid grid-cols-1 sm:grid-cols-2 gap-20 justify-items-center" 
    />

    <Section 
      title="PARTNERSHIP" 
      members={partnership} 
      layout="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center" 
    />

    <Section 
      title="OPERATIONS" 
      members={operations} 
      layout="grid grid-cols-3 gap-12 justify-items-center" 
    />

    <Section 
      title="SOCIAL MEDIA" 
      members={socialMedia} 
      layout="grid grid-cols-3 gap-12 justify-items-center" 
    />

    <Section 
      title="MEDIA" 
      members={media} 
      layout="grid grid-cols-2 md:grid-cols-4 gap-[120px] ml-[-110px]" 
    />
  </div>
);


</div>
  );

};



export default TeamPage;
