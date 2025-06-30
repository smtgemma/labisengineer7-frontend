'use client';

import ButtonGlobal from '@/components/shared/GlobalButton';
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

const data = [
  { name: 'Sun', uv: 250, pv: 2400, amt: 2400 },
  { name: 'Mon', uv: 360, pv: 2210, amt: 2290 },
  { name: 'Tues', uv: 200, pv: 2290, amt: 2000 },
  { name: 'Wed', uv: 400, pv: 2100, amt: 2100 },
  { name: 'Thu', uv: 310, pv: 2000, amt: 2200 },
  { name: 'Fri', uv: 480, pv: 2150, amt: 2100 },
  { name: 'Sat', uv: 350, pv: 2250, amt: 2300 },
];

// Custom dot: only render on first and last points
// const CustomDot = (props) => {
//   const { cx, cy, index } = props;

//   if (index === 0 || index === data.length - 1) {
//     return (
//       <circle
//         cx={cx}
//         cy={cy}
//         r={4}
//         stroke="#2563eb"
//         strokeWidth={2}
//         fill="white"
//       />
//     );
//   }
//   return null;
// };

// Custom arrow dot for the end point
interface ArrowDotProps {
  cx?: number;
  cy?: number;
  index?: number;
}

const ArrowDot: React.FC<ArrowDotProps> = (props) => {
  const { cx, cy, index } = props;

  if (index === data.length - 1) {
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
          points={`${cx! + 8},${cy} ${cx! + 18},${cy! - 4} ${cx! + 18},${cy! + 4}`}
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

export default function AiExtractionChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render the chart on the server
  if (!isClient) {
    return (
      <div className="w-full h-[561px] p-4 flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }




  // const [selectedOption, setSelectedOption] = useState('User Signups');

  return (
    <div className="w-full h-96 p-6 rounded-lg bg-white mt-6">

      <div className='flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 md:gap-0'>

        <select
          id='activityType'

          className=' rounded-md  md:text-2xl font-semibold focus:outline-none  '
        >
          <option value='User Signups'>      AI Extraction Activity</option>
          <option value='User Signups'>User Signups</option>
          <option value='Documents by Service Type'>Documents by Service Type</option>
        </select>


        <ButtonGlobal title='Last 30 days' />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 50, bottom: 20, left: 20 }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#2563eb"
              />
            </marker>
          </defs>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            domain={[0, 500]}
            ticks={[100, 200, 300, 400, 500]}
            label={{
              value: 'UV',
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend
            align="right"
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#2563eb"
            strokeWidth={3}
            name=""
            dot={<ArrowDot />}
            activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2, fill: 'white' }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}