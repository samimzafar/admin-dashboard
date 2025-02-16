import React from "react";
import ChartContainer from "../Charts/ChartContainer";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SALES_DATA } from "../../utils/constants";

function SalesTrendChart() {
  return (
    <ChartContainer title="Sales Trens">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={SALES_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41,55, 0.85)",
              borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
          <Line
            type="step"
            dataKey="sales"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, fill: "#ffff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default SalesTrendChart;
