import React, { useState } from 'react'; // <-- Step 1: Add useState
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import DigitalRain from './DigitalRain';
import DarkMap from './DarkMap';
import { supabase } from '../../supabaseClient'; // <-- Step 1: Import supabase

// Step 2: Define the shape of your form data
interface IFormData {
  name: string;
  contact_no: string;
  query: string;
  university: string;
}

const conveners = [
  { name: 'Agam Bhasin', role: 'Head Convener', phone: '+91-9000000001' },
  { name: '..', role: 'Convener', phone: '+91-9000000002' },
  { name: '..', role: 'Convener', phone: '+91-9000000003' },
];

const Contact: React.FC = () => {
  // Step 2: Add state hooks for the form
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    contact_no: '',
    query: '',
    university: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Step 3: Add handler functions for form logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const { error } = await supabase
      .from('queries')
      .insert([formData]);

    setIsSubmitting(false);

    if (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again.');
    } else {
      setMessage('Your query has been submitted successfully!');
      setFormData({
        name: '',
        contact_no: '',
        query: '',
        university: ''
      });
    }
  };

  return (
    <div className="min-h-[55vh] bg-black text-white font-mono p-6 relative overflow-hidden">
      <DigitalRain />
      <div className="max-w-7xl mx-auto">

        {/* Title (No changes here) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* ...your title JSX... */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue mb-6 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #22c55e,
                0 0 20px #22c55e,
                0 0 30px #22c55e
              `,
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.9))',
            }}
          >
            CONTACT
          </h1>
          <div className="text-green-400 font-mono text-lg tracking-wider">
            SYSTEM CONNECT
          </div>
        </motion.div>

        {/* Outer Wrapper (No changes here) */}
        <div
          className="max-w-7xl mx-auto my-8 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black bg-black"
          style={{
            border: "2px solid #c1447e",
            boxShadow: "0 0 0 4px rgba(193, 68, 126, 0.3)",
            backdropFilter: 'blur(20px)',
          }}
        >

          {/* Grid: Map + Conveners (No changes here) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ...your map and conveners JSX... */}
          </div>

          {/* Contact Form (This is where we make changes) */}
          <div className="mt-10">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-pink-500/30 shadow-[0_0_15px_#ec489960] w-full">
              <h2
                className="text-2xl font-extrabold text-green-400 text-center mb-6"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  letterSpacing: '2px',
                  textShadow: '0 0 8px #22c55e, 0 0 15px #22c55e',
                }}
              >
                ANY QUERIES?
              </h2>
              {/* Step 4: Update the form tag */}
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name" // Add name attribute
                  value={formData.name} // Add value attribute
                  onChange={handleChange} // Add onChange handler
                  required // Keep required
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    name="contact_no" // Add name attribute
                    value={formData.contact_no} // Add value attribute
                    onChange={handleChange} // Add onChange handler
                    required // Keep required
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                  <input
                    type="text"
                    placeholder="University"
                    name="university" // Add name attribute
                    value={formData.university} // Add value attribute
                    onChange={handleChange} // Add onChange handler
                    required // Keep required
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                </div>
                <textarea
                  placeholder="Your Query"
                  name="query" // Add name attribute
                  value={formData.query} // Add value attribute
                  onChange={handleChange} // Add onChange handler
                  required // Keep required
                  rows={4}
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60 resize-none"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className="px-8 py-3 rounded-md font-bold text-black bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_10px_#ec4899] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                {/* Add a message display area */}
                {message && (
                  <p className="text-center text-green-400 mt-4">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;