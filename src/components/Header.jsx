import { CogIcon, User } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
function Header({ title }) {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex items-center space-x-4">
          <motion.button
            className="text-gray-100 hover:text-gray-300 focus:outline-none"
            whileHover={{
              y: -3,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
          >
            <CogIcon className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="text-gray-100 hover:text-gray-300  focus:outline-none "
            whileHover={{
              y: -3,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
          >
            <User className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
