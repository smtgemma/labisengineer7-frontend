import React from "react";
import SimpleAILogTable from "./SimpleAILogTable";
import AiExtractionChart from "../overview/AiExtractionChart";
// import OverviewCards from "../overview/OverviewCard";
import AiStatsCards from "./MonitorCard";

const page = () => {
  return (
    <div>
      <AiStatsCards />
      <AiExtractionChart title="AI usage over time" />
      <SimpleAILogTable />
    </div>
  );
};

export default page;
