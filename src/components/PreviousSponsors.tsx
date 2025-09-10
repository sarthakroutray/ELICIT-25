import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface PreviousSponsorsProps {
  items?: SponsorData[];
  title?: string;
}

const PreviousSponsors: React.FC<PreviousSponsorsProps> = ({ items, title }) => {
  // Default sponsor data if none provided
  const defaultSponsors: SponsorData[] = [
    {
      id: 1,
      name: "GHS",
      logo: "/sponsors/ghs.jpeg",
      description: "",
      year: "2024"
    }
  ];
  const sponsors: SponsorData[] = items && items.length ? items : defaultSponsors;

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
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      {/* Background/overlay provided by parent SponsorsPage for seamless stacking */}

      {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 md:py-8">
        
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
             className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-wider ps-header-title"
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
             {title ?? 'Housing Sponsor'}
           </h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          

          {/* Carousel */}
          <div className="relative h-[500px] overflow-hidden ps-carousel">
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
                      className="relative h-[450px] w-[440px] bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400 rounded-lg overflow-hidden ps-card"
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
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between ps-card-content">
                                                 {/* Header */}
                         <div className="text-center mb-6">
                           <div className="text-cyan-400 font-mono text-sm opacity-60 mb-2">
                             // SPONSOR_{sponsors[currentIndex].id.toString().padStart(2, '0')}
                           </div>
                           <h3 
                             className="text-white font-bold tracking-wider ps-card-title text-base sm:text-lg md:text-xl"
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
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-400 rounded-lg flex items-center justify-center overflow-hidden relative ps-logo-box">
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
                          <p className="text-gray-300 text-sm leading-relaxed font-mono ps-desc">
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

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .ps-carousel { height: 440px; }
          .ps-card { width: 400px; height: 400px; }
          .ps-logo-box { width: 7rem; height: 7rem; }
        }
        /* Phones */
        @media (max-width: 600px) {
          .ps-header-title { font-size: 1.75rem !important; }
          .ps-carousel { height: 420px; }
          .ps-card { width: 280px; height: 380px; }
          .ps-card-content { padding: 1rem !important; }
          .ps-card-title { font-size: 0.85rem !important; letter-spacing: 0.01em !important; line-height: 1.1 !important; word-break: break-word; hyphens: auto; }
          .ps-logo-box { width: 5.5rem; height: 5.5rem; }
          .ps-desc { font-size: 0.8rem !important; line-height: 1.25rem !important; }
          .ps-arrow { padding: 0.4rem !important; }
          .ps-arrow svg { width: 18px; height: 18px; }
        }
      `}</style>
    </div>
  );
};

export default PreviousSponsors;