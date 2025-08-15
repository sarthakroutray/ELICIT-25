import React from 'react';
import Carousel from './Carousel';
import PreviousSponsors from './PreviousSponsors';
import DigitalRain from './DigitalRain';


const SponsorsPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      <DigitalRain />

      {/* Shared overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent animate-pulse mix-blend-overlay" />
      </div>

      <div className="py-8 md:py-10">
        <Carousel />
      </div>

      <div className="py-6 md:py-8 -mt-6">
        <PreviousSponsors />
      </div>
    </div>
  );
};

export default SponsorsPage;
