import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SALES_CHANNEL_DATA, COLORS } from "../../utils/constants";
import ChartContainer from "../Charts/ChartContainer";

function SalesChannelChart() {
  return (
    <ChartContainer title="Sales by Channels" isLargeSpan>
      <ResponsiveContainer>
        <BarChart data={SALES_CHANNEL_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41,55, 0.8)",
              borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {SALES_CHANNEL_DATA.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default SalesChannelChart;
