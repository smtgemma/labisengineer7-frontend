import React from "react";
import AiStatsCards from "./monitoring/MonitorCard";
import AiExtractionChart from "./overview/AiExtractionChart";
import SimpleAILogTable from "./monitoring/SimpleAILogTable";

const page = () => {
  return (
    <div>
      <AiStatsCards />
      <AiExtractionChart />
      <SimpleAILogTable />
    </div>
  );
};
k
export default page;
