import ActivityFeed from "./ActivityFeed";
import AiExtractionChart from "./AiExtractionChart";

import OverviewCards from "./OverviewCard";


export default function DashboardPage() {
  return (
    <main className="">
      <div className="">
        
        <OverviewCards />
        <AiExtractionChart />
        
        
        <ActivityFeed />
      </div>
    </main>
  );
}