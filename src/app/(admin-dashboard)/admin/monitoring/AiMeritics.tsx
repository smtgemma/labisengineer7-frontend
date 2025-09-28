"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
  CartesianGrid, // ✅ Added
} from "recharts";
import {
  ChevronDown,
  TrendingUp,
  Users,
  Briefcase,
  FileText,
  Cpu,
} from "lucide-react";

import Loading from "@/components/Others/Loading";
import { useGetMonitoringMertricsDataQuery } from "@/redux/features/adminOverView/adminUserSlice";

const AiMertrics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("last 30 days");
  const [selectedChart, setSelectedChart] = useState("AI Extraction Activity");

  const { data: metrics, isLoading } = useGetMonitoringMertricsDataQuery("u");

  if (isLoading) {
    return <Loading />;
  }

  // ---- Dynamic Reference Lines Setup ----
  const values = metrics?.data?.map((d: any) => d.value) || [];
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 100);
  const lineCount = 7; // number of reference lines
  const step = (max - min) / (lineCount - 1);
  const referenceLines = Array.from(
    { length: lineCount },
    (_, i) => min + i * step
  );

  return (
    <div className="py-6">
      <div>
        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* Chart Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {selectedChart}
              </h2>
              <button
                onClick={() =>
                  setSelectedChart(
                    selectedChart === "AI Extraction Activity"
                      ? "Processing Activity"
                      : "AI Extraction Activity"
                  )
                }
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                style={{
                  background:
                    "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
                }}
                onClick={() => setSelectedPeriod("last 7 days")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white`}
              >
                last 7 days
              </button>
            </div>
          </div>

          {/* Chart Container */}
          <div className="w-full" style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={metrics?.data}
                margin={{
                  top: 0,
                  right: 30,
                  left: 20,
                  bottom: 0,
                }}
              >
                <CartesianGrid stroke="#E5E7EB" strokeDasharray="4 4" />{" "}
                {/* ✅ Horizontal & vertical grid lines */}
                <XAxis
                  dataKey="day"
                  axisLine={true}
                  tickLine={true}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  dy={10}
                />
                <YAxis
                  axisLine={true}
                  tickLine={true}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  domain={["dataMin - 0", "dataMax + 20"]}
                  tickCount={6}
                  tickFormatter={(value) => `${Math.round(value)}m`}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `${Math.round(value)}m`,
                    "Value",
                  ]}
                  labelStyle={{ color: "#374151", fontWeight: "bold" }}
                  contentStyle={{ borderRadius: "8px", borderColor: "#E5E7EB" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={4}
                  dot={true}
                  activeDot={{
                    r: 6,
                    fill: "#3B82F6",
                    strokeWidth: 3,
                    stroke: "#fff",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Footer */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Time Duration</span>
              </div>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiMertrics;
