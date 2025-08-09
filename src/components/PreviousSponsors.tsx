import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DigitalRain from './DigitalRain';

interface SponsorData {
  id: number;
  name: string;
  logo: string;
  description: string;
  year: string;
}

interface LogoState {
  [key: string]: 'loading' | 'loaded' | 'error';
}

const PreviousSponsors: React.FC = () => {
  // Updated sponsor data - keeping only specified sponsors
  const sponsors: SponsorData[] = [
    {
      id: 1,
      name: "JET BRAINS",
      logo: "/sponsors/jetbrains.png",
      description: "Leading developer tools and IDE provider, empowering developers worldwide with intelligent coding solutions.",
      year: "2024"
    },
    {
      id: 2,
      name: "FILECOIN",
      logo: "/sponsors/filecoin.png", 
      description: "Decentralized storage network revolutionizing how we store and access data on the blockchain.",
      year: "2024"
    },
    {
      id: 3,
      name: "AIRTEL",
      logo: "/sponsors/airtel.png",
      description: "India's leading telecommunications provider, connecting millions with innovative digital solutions.",
      year: "2024"
    },
    {
      id: 4,
      name: "DEVFOLIO",
      logo: "/sponsors/devfolio.png",
      description: "Hackathon platform empowering developers to build, showcase, and launch their innovative projects.",
      year: "2024"
    },
    {
      id: 5,
      name: "CODING BLOCKS",
      logo: "/sponsors/coding_blocks.jpg",
      description: "Premier coding education platform, training the next generation of software developers.",
      year: "2024"
    },
    {
      id: 6,
      name: "ONGC",
      logo: "/sponsors/ONGC_Logo.svg.png",
      description: "India's largest oil and gas exploration company, fueling the nation's energy security.",
      year: "2024"
    },
    {
      id: 7,
      name: "GEEKS FOR GEEKS",
      logo: "/sponsors/GeeksforGeeks.svg.png",
      description: "Premier computer science portal for geeks, providing comprehensive programming resources and tutorials.",
      year: "2024"
    },
    {
      id: 8,
      name: "SNAPCHAT",
      logo: "/sponsors/snapchat.webp",
      description: "Social media giant revolutionizing communication through innovative AR and messaging technologies.",
      year: "2024"
    },
    {
      id: 9,
      name: "CISCO",
      logo: "/sponsors/cisco.png",
      description: "Networking technology pioneer, connecting the world through innovative communication solutions.",
      year: "2024"
    },
    {
      id: 10,
      name: "LENOVO",
      logo: "/sponsors/Lenovo.png",
      description: "Global technology leader, innovating across PCs, smart devices, and data center solutions.",
      year: "2024"
    },
    {
      id: 11,
      name: "BHARAT PETROLEUM",
      logo: "/sponsors/bharatpetroleum.png",
      description: "Leading energy company, powering India's growth with sustainable energy solutions.",
      year: "2024"
    },
    {
      id: 12,
      name: "GIVE MY CERTIFICATE",
      logo: "/sponsors/givemycertificate.png",
      description: "Digital certificate platform, making credential verification seamless and secure.",
      year: "2024"
    },
    {
      id: 13,
      name: "INTERVIEW CAKE",
      logo: "/sponsors/InterviewCake.png",
      description: "Coding interview preparation platform, helping developers ace their technical interviews.",
      year: "2024"
    },
    {
      id: 14,
      name: "ZEBRONICS",
      logo: "/sponsors/zebronics.jpg",
      description: "Always Ahead - Premium audio and technology products for the modern lifestyle.",
      year: "2024"
    },
    {
      id: 15,
      name: "LUMOS",
      logo: "/sponsors/lumos.png",
      description: "Cutting-edge technology company specializing in advanced lighting and display solutions.",
      year: "2024"
    },
    {
      id: 16,
      name: "WAYSPIRE",
      logo: "/sponsors/wayspire.png",
      description: "Innovative technology solutions driving digital transformation and business growth.",
      year: "2024"
    },
    {
      id: 17,
      name: "AXURE",
      logo: "/sponsors/axure.png",
      description: "Professional prototyping and wireframing platform for UX/UI designers.",
      year: "2024"
    },
    {
      id: 18,
      name: ".XYZ",
      logo: "/sponsors/xyz.png",
      description: "Next-generation domain registry, empowering the future of the internet.",
      year: "2024"
    },
    {
      id: 19,
      name: "KWIKPIC",
      logo: "/sponsors/kwikpic.png",
      description: "Photo sharing platform revolutionizing how we capture and share life's precious moments.",
      year: "2024"
    },
    {
      id: 20,
      name: "LITT",
      logo: "/sponsors/litt.png",
      description: "Innovative technology solutions provider, driving digital transformation across industries.",
      year: "2024"
    },
    {
      id: 21,
      name: "POLYGON",
      logo: "/sponsors/polygon.png",
      description: "Ethereum scaling solution, making blockchain technology accessible and scalable.",
      year: "2024"
    },
    {
      id: 22,
      name: "EAT SURE",
      logo: "/sponsors/eatsure.png",
      description: "Court on an App - Revolutionary food delivery platform with innovative features.",
      year: "2024"
    },
    {
      id: 23,
      name: "COINDCX",
      logo: "/sponsors/coindcx.png",
      description: "India's most trusted cryptocurrency exchange, making crypto accessible to millions.",
      year: "2024"
    },
    {
      id: 24,
      name: "NEWTON SCHOOL",
      logo: "/sponsors/newtonschool.png",
      description: "Coding education platform, transforming careers through technology learning.",
      year: "2024"
    },
    {
      id: 25,
      name: "JARS",
      logo: "/sponsors/jars.png",
      description: "Innovative technology company creating solutions for tomorrow's challenges.",
      year: "2024"
    },
    {
      id: 26,
      name: "JIO",
      logo: "/sponsors/jio.png",
      description: "Digital revolution leader, transforming India's connectivity and digital services landscape.",
      year: "2024"
    },
    {
      id: 27,
      name: "GROWW",
      logo: "/sponsors/groww.png",
      description: "Investment platform democratizing financial services for India's growing investor community.",
      year: "2024"
    },
    {
      id: 28,
      name: "NZXT",
      logo: "/sponsors/nzxt.png",
      description: "Premium gaming hardware manufacturer, crafting the ultimate gaming experience for enthusiasts.",
      year: "2024"
    },
    {
      id: 29,
      name: "INTERNSHALA",
      logo: "/sponsors/internshala.png",
      description: "Internships that matter - connecting students with meaningful career opportunities.",
      year: "2024"
    },
    {
      id: 30,
      name: "UNSTOP",
      logo: "/sponsors/unstop.png",
      description: "Platform connecting students with opportunities, bridging the gap between education and industry.",
      year: "2024"
    },
    {
      id: 31,
      name: "SPYKAR",
      logo: "/sponsors/spykar.png",
      description: "Fashion brand embodying 'Young & Restless' spirit, connecting with the dynamic youth culture.",
      year: "2024"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [logoStates, setLogoStates] = useState<LogoState>({});

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [sponsors.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + sponsors.length) % sponsors.length);
  };



  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Digital Rain Background */}
      <DigitalRain />
      
      {/* Static Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* ID Text */}
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 opacity-60">
            [04] SPONSORSHIP MATRIX
          </div>
          
                     {/* Main Title */}
           <h1 
             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider"
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
           >
             PREVIOUS SPONSORS
           </h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-cyan-400 p-3 rounded-full border border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-cyan-400 p-3 rounded-full border border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="relative h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="flex justify-center items-center h-full">
                  <div className="relative group">
                    {/* Sponsor Card */}
                    <div 
                      className="relative h-[450px] w-[400px] bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400 rounded-lg overflow-hidden"
                      style={{
                        boxShadow: `
                          0 0 20px #00ffff,
                          0 0 40px rgba(0, 255, 255, 0.3),
                          inset 0 0 20px rgba(0, 255, 255, 0.1)
                        `,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Glitch Effect Overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-transparent to-green-400/20 animate-pulse" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                                 {/* Header */}
                         <div className="text-center mb-6">
                           <div className="text-cyan-400 font-mono text-sm opacity-60 mb-2">
                             // SPONSOR_{sponsors[currentIndex].id.toString().padStart(2, '0')}
                           </div>
                           <h3 
                             className="text-white text-2xl font-bold tracking-wider"
                             style={{ 
                               fontFamily: 'Orbitron, monospace',
                               textShadow: '0 0 10px #00ffff'
                             }}
                           >
                             {sponsors[currentIndex].name}
                           </h3>
                           <div className="text-cyan-400 font-mono text-sm mt-2">
                             {sponsors[currentIndex].year}
                           </div>
                         </div>

                                               {/* Logo Display */}
                       <div className="flex justify-center mb-6">
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-400 rounded-lg flex items-center justify-center overflow-hidden relative">
                            {/* Loading State */}
                            {logoStates[sponsors[currentIndex].logo] === 'loading' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
                            
                            {/* Logo Image */}
                            <img 
                              src={sponsors[currentIndex].logo}
                              alt={`${sponsors[currentIndex].name} logo`}
                              className={`w-full h-full object-contain p-2 filter brightness-90 hover:brightness-110 transition-all duration-300 ${
                                logoStates[sponsors[currentIndex].logo] === 'loaded' ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => {
                                setLogoStates(prev => ({ 
                                  ...prev, 
                                  [sponsors[currentIndex].logo]: 'loaded' 
                                }));
                              }}
                              onError={() => {
                                setLogoStates(prev => ({ 
                                  ...prev, 
                                  [sponsors[currentIndex].logo]: 'error' 
                                }));
                              }}
                              onLoadStart={() => {
                                setLogoStates(prev => ({ 
                                  ...prev, 
                                  [sponsors[currentIndex].logo]: 'loading' 
                                }));
                              }}
                            />
                            
                            {/* Error/Placeholder State */}
                            {logoStates[sponsors[currentIndex].logo] === 'error' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-cyan-400 text-xs font-mono text-center">
                                  {sponsors[currentIndex].name}<br/>LOGO
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="text-center">
                          <p className="text-gray-300 text-sm leading-relaxed font-mono">
                            {sponsors[currentIndex].description}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-6">
                          <div className="text-cyan-400 font-mono text-xs opacity-60">
                            PARTNERSHIP ACTIVE
                          </div>
                        </div>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 w-full max-w-md"
        >
          <div className="text-right text-cyan-400 font-mono text-xs mb-2">
            Loading.../sponsors/database/
          </div>
          <div className="w-full h-1 bg-gray-800 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviousSponsors;