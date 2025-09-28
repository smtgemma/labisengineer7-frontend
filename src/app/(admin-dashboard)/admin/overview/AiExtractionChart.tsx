"use client";
import {
  Briefcase,
  ChevronDown,
  Cpu,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import Loading from "@/components/Others/Loading";
import {
  useGetAllUserStatusQuery,
  useGetMetricsDataQuery,
} from "@/redux/features/adminOverView/adminUserSlice";

const AiExtractionChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("last 30 days");
  const [selectedChart, setSelectedChart] = useState("AI Extraction Activity");

  const { data, isLoading } = useGetAllUserStatusQuery("u");
  const { data: metrics } = useGetMetricsDataQuery("u");

  if (isLoading) {
    return <Loading />;
  }

  const { documentsGenerated, activeProjects, totalCompanies, totalEngineers } =
    data?.data || {};

  // Update status cards with live values
  const statusCards = [
    {
      title: "Joining Engineer",
      value: totalEngineers,
      change: "+2.8%",
      icon: TrendingUp,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "Joining Company",
      value: totalCompanies,
      change: "+2.8%",
      icon: Users,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Projects",
      value: activeProjects,
      change: "+3.8%",
      icon: Briefcase,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Documents Generated",
      value: documentsGenerated,
      change: "+2.8%",
      icon: FileText,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "AI Extractions Processed",
      value: "12",
      change: "+2.8%",
      icon: Cpu,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  // ---- Dynamic Reference Lines Setup ----
  const values = metrics?.data?.map((d: any) => d.value) || [];
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 100);
  const lineCount = 7; // number of reference lines you want
  const step = (max - min) / (lineCount - 1);
  const referenceLines = Array.from(
    { length: lineCount },
    (_, i) => min + i * step
  );

  return (
    <div className="py-6">
      <div>
        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {statusCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.bgColor}`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                  {card.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  {card.value}
                </h3>
                <p className="text-sm text-gray-600 leading-tight">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

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
                />

                {/* Dynamic Reference Lines */}
                {referenceLines.map((y, idx) => (
                  <ReferenceLine
                    key={idx}
                    y={y}
                    stroke="#D1D5DB"
                    strokeDasharray="4 4"
                  />
                ))}

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

export default AiExtractionChart;
