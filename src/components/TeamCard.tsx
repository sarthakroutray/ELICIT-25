import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-md object-cover"
      />

      {/* Name + Role */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-blue-600">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-sky-400">
          <FaTwitter className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
