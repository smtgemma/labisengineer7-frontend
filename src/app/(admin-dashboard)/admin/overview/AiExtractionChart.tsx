"use client";

import ButtonGlobal from "@/components/shared/GlobalButton";
import tokenCatch from "@/lib/token";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

interface ArrowDotProps {
  cx?: number;
  cy?: number;
  index?: number;
  dataLength?: number;
}

const ArrowDot: React.FC<ArrowDotProps> = ({ cx, cy, index, dataLength }) => {
  if (index === dataLength! - 1) {
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={4}
          stroke="#2563eb"
          strokeWidth={2}
          fill="white"
        />
        <polygon
          points={`${cx! + 8},${cy} ${cx! + 18},${cy! - 4} ${cx! + 18},${
            cy! + 4
          }`}
          fill="#2563eb"
          stroke="#2563eb"
          strokeWidth={1}
        />
      </g>
    );
  } else if (index === 0) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="#2563eb"
        strokeWidth={2}
        fill="white"
      />
    );
  }
  return null;
};

export default function AiExtractionChart({ title }: { title: string }) {
  const [isClient, setIsClient] = useState(false);
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const fetchMetrics = async () => {
      try {
        const token = tokenCatch();
        const res = await axios.get(
          "https://api.buildai.gr/api/v1/ai/usage-graph",
          {
            headers: { Authorization: token },
          }
        );
        const grap = res?.data?.data;
        setChartData(grap?.data || []);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (!isClient || loading) {
    return (
      <div className="w-full h-[561px] p-4 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 p-6 rounded-lg bg-white mt-6">
      {title !== "AI usage over time" ? (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 md:gap-0">
          <select
            id="activityType"
            className="md:text-2xl font-semibold focus:outline-none"
          >
            <option value="AI Extraction Activity">
              AI Extraction Activity
            </option>
            <option value="User Signups">User Signups</option>
            <option value="Documents by Service Type">
              Documents by Service Type
            </option>
          </select>
          <ButtonGlobal title="Last 30 days" />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 md:gap-0">
          <h1 className="md:text-2xl font-semibold">{title}</h1>
          <select
            id="activityType"
            className="font-semibold focus:outline-none"
          >
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 60 days">Last 60 days</option>
          </select>
        </div>
      )}

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 50, bottom: 20, left: 20 }}
        >
          <CartesianGrid horizontal vertical={false} stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            domain={[0, 500]}
            ticks={[100, 200, 300, 400, 500]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend align="right" wrapperStyle={{ paddingTop: "20px" }} />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#2563eb"
            strokeWidth={3}
            dot={(props) => (
              <ArrowDot {...props} dataLength={chartData.length} />
            )}
            activeDot={{
              r: 6,
              stroke: "#2563eb",
              strokeWidth: 2,
              fill: "white",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
