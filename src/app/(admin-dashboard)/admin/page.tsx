import React from "react";
import AiStatsCards from "./monitoring/MonitorCard";
import AiExtractionChart from "./overview/AiExtractionChart";
import SimpleAILogTable from "./monitoring/SimpleAILogTable";
import ActivityFeed from "./overview/ActivityFeed";

const page = () => {
  return (
    <div>
      <AiExtractionChart />
      <ActivityFeed />
    </div>
  );
};
k
export default page;
