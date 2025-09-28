"use client";

import Loading from "@/components/Others/Loading";
import tokenCatch from "@/lib/token";
import {
  useGetAiStatusCardQuery,
  useGetAllUserDashboardQuery,
} from "@/redux/features/adminOverView/adminUserSlice";

type StatCard = {
  title: string;
  value: string;
  percentage: string;
};

export default function AiStatsCards() {
  const { data: StatusData, isLoading } = useGetAiStatusCardQuery("u");
  if (isLoading) {
    return <Loading />;
  }
  console.log("StatusData", StatusData);
  const { ocrConversions, gptUsageTokens, failedAITasks, aiExtractions } =
    StatusData?.data;

  const stats: StatCard[] = [
    {
      title: "AI Extractions (Today)",
      value: aiExtractions,
      percentage: "+2.98%",
    },
    {
      title: "GPT Usage (Tokens)",
      value: gptUsageTokens,
      percentage: "+2.98%",
    },
    { title: "OCR Conversions", value: ocrConversions, percentage: "+2.98%" },
    { title: "Failed AI Tasks", value: failedAITasks, percentage: "+2.98%" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((card: any, index: number) => (
        <div
          key={index}
          className="bg-white  p-5 rounded-xl shadow border border-zinc-200"
        >
          <div className="text-2xl md:text-4xl font-semibold text-zinc-800">
            {card.value}
          </div>

          <div className="flex justify-between">
            <div className="text-sm text-zinc-500 mb-2">{card.title}</div>

            <div className="text-green-500 text-sm font-medium mt-1">
              {card.percentage}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
