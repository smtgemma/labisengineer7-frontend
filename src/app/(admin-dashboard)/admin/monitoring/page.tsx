"use client";
import SimpleAILogTable from "./SimpleAILogTable";

import AiStatsCards from "./MonitorCard";
import AiMertrics from "./AiMeritics";

const page = () => {
  return (
    <div>
      <AiStatsCards />
      <AiMertrics />
      <SimpleAILogTable />
    </div>
  );
};

export default page;
