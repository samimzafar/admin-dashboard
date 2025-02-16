import React from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import { motion } from "framer-motion";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import SalesPreviewChart from "../components/overview/SalesPreviewChart";
import { STATS } from "../utils/constants";
function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-h-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {STATS.map((stat, index) => (
            <StatCard
              key={index}
              name={stat.name}
              icon={stat.icon}
              value={stat.value}
              color={stat.color}
            />
          ))}
        </motion.div>
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesPreviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default OverviewPage;
