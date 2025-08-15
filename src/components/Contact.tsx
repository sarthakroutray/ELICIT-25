import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white font-mono p-8">
      <h1 className="text-4xl mb-6">Contact</h1>
      <p className="max-w-xl mb-4 text-cyan-300">A dedicated contact section will appear here soon. For now, reach out via our social links on the landing page.</p>
      <a href="/" className="text-cyan-400 underline">Return Home</a>
    </div>
  );
};

export default Contact;
