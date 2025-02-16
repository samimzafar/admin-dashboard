import React from "react";
import { motion } from "framer-motion";

const ChartContainer = ({ title, children, isLargeSpan = false }) => {
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${
        isLargeSpan ? "lg:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">{title}</h2>
      <div className="h-80">{children}</div>
    </motion.div>
  );
};

export default ChartContainer;
