import SimpleActivityFeedTable from "./ActivityFeed";
import AiExtractionChart from "./AiExtractionChart";
import OverviewCards from "./OverviewCard";

export default function page() {
  return (
    <main className="">
      <div className="">
        <OverviewCards />
        <AiExtractionChart />
        <SimpleActivityFeedTable />
      </div>
    </main>
  );
}
