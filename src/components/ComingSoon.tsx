import React from 'react';

interface ComingSoonProps {
  title?: string;
  note?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title = 'COMING SOON', note = 'We\'re cooking up something awesome. Check back soon!' }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-center px-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-cyan-300 tracking-widest mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          {title}
        </h1>
        <p className="text-green-300/80 font-mono">
          {note}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
