import React from "react";

const RegistrationClosed: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-orbitron">
      <div className="max-w-lg w-full p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-cyan-400">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400 drop-shadow-lg">Registration Closed</h1>
        <p className="text-lg text-center mb-4 text-gray-200">
          We're sorry, registration for this event is now closed.
        </p>
        <p className="text-center text-gray-400">
          Thank you for your interest! Please check back for future events or contact us for more information.
        </p>
      </div>
    </div>
  );
};

export default RegistrationClosed;
