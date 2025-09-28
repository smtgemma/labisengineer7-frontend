import SimpleActivityFeedTable from "./ActivityFeed";
import AiExtractionChart from "./AiExtractionChart";
import OverviewCards from "./OverviewCard";

export default function page() {
  return (
    <main className="">
      <div className="">
        <SimpleActivityFeedTable />
        <AiExtractionChart />
        <SimpleActivityFeedTable />
      </div>
    </main>
  );
}
