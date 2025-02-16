import React from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import { motion } from "framer-motion";
import ProductTable from "../components/products/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import { STATS } from "../utils/constants";
function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-h-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0.1, y: 20 }}
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
        <ProductTable />
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
