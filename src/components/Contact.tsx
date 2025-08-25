import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import DigitalRain from "./DigitalRain";


const GOOGLE_MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8771334119424!2d75.56265401189974!3d26.843859962947285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1756131010590!5m2!1sen!2sin';

const conveners = [
  { name: "Agam Bhasin", role: "Head Convener", phone: "+91-8601444494" },
  { name: "Parthav Shah", role: "Convener", phone: "+91-9082691836" },
  { name: "Pranav Deshpande", role: "Convener", phone: "+91-7758089319" },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // const base = (import.meta.env.VITE_API_BASE || '').replace(/\/+$/, '');
      const url = 'https://elicit-25-backend-production.up.railway.app/api/contact';
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", university: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
  } catch (error) {
      console.error(error);
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <div className="min-h-[55vh] bg-black text-white font-mono p-6 relative overflow-hidden">
      <DigitalRain />
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="text-green-400 font-mono text-sm tracking-wider mb-4 opacity-60">
            [03] COMMUNICATION GRID
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue mb-6 tracking-wider"
            style={{
              fontFamily: "Orbitron, monospace",
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 10px #22c55e,
                0 0 20px #22c55e,
                0 0 30px #22c55e
              `,
              filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.9))",
            }}
          >
            CONTACT
          </h1>
          <div className="text-green-400 font-mono text-lg tracking-wider">
            SYSTEM CONNECT
          </div>
        </motion.div>

        {/* Outer Wrapper */}
        <div
          className="max-w-7xl mx-auto my-8 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black bg-black"
          style={{
            border: "2px solid #c1447e",
            boxShadow: "0 0 0 4px rgba(193, 68, 126, 0.3)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Grid: Map + Conveners */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Map */}
            <div className="lg:col-span-6 col-span-1 h-full">
              <div className="w-full max-h-[300px] rounded-lg overflow-hidden border border-green-700/40 shadow-[0_0_12px_#22c55e70]">
                <div className="map-responsive">
                  <iframe src={ GOOGLE_MAP_URL }
                    loading="lazy" 
                    style={{ height: "300px", width: "100%",  }}
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>

            {/* Right: Conveners */}
            <div className="lg:col-span-6 col-span-1 h-full">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-pink-500/30 shadow-[0_0_15px_#ec489960] h-full">
                <h2
                  className="text-2xl font-extrabold text-center mb-5 text-pink-400"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    letterSpacing: "2px",
                    textShadow: "0 0 8px #ec4899, 0 0 16px #ec4899",
                  }}
                >
                  CONVENERS
                </h2>
                <div className="space-y-3">
                  {conveners.map((c) => (
                    <div
                      key={c.phone}
                      className="flex items-center justify-between bg-black/60 p-3 rounded-md border border-pink-500/20 hover:border-pink-500/50 transition"
                    >
                      <div>
                        <div className="text-green-200 font-bold">{c.name}</div>
                        <div className="text-xs text-green-400">{c.role}</div>
                      </div>
                      <a
                        href={`tel:${c.phone}`}
                        className="flex items-center gap-2 text-yellow-400 font-mono hover:text-yellow-300"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{c.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-10">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-pink-500/30 shadow-[0_0_15px_#ec489960] w-full">
              <h2
                className="text-2xl font-extrabold text-green-400 text-center mb-6"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  letterSpacing: "2px",
                  textShadow: "0 0 8px #22c55e, 0 0 15px #22c55e",
                }}
              >
                ANY QUERIES?
              </h2>
              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No."
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="University"
                    className="flex-1 p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Query"
                  rows={4}
                  className="w-full p-3 rounded-md bg-black/70 border border-pink-500/30 text-green-200 placeholder-green-400/50 focus:outline-none focus:ring-1 focus:ring-pink-500/60 resize-none"
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-md font-bold text-black bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 hover:opacity-90 transition-all shadow-[0_0_10px_#ec4899]"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {status && (
                <p className="text-center mt-4 text-sm text-green-400">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
