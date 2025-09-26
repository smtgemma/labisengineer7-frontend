"use client";
import SimpleAILogTable from "./SimpleAILogTable";
import AiExtractionChart from "../overview/AiExtractionChart";

import AiStatsCards from "./MonitorCard";

const page = () => {
  return (
    <div>
      <AiStatsCards />
      <AiExtractionChart />
      <SimpleAILogTable />
    </div>
  );
};

export default page;
