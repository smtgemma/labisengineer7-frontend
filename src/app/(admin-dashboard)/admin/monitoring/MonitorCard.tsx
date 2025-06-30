    type StatCard = {
  title: string;
  value: string;
  percentage: string;
};

const stats: StatCard[] = [
  { title: 'AI Extractions (Today)', value: '312', percentage: '+2.98%' },
  { title: 'GPT Usage (Tokens)', value: '54,120', percentage: '+2.98%' },
  { title: 'OCR Conversions', value: '178', percentage: '+2.98%' },
  { title: 'Failed AI Tasks', value: '6', percentage: '+2.98%' },
];

export default function AiStatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((card, index) => (
        <div
          key={index}
          className="bg-white  p-5 rounded-xl shadow border border-zinc-200"
        >
             <div className="text-2xl md:text-4xl font-semibold text-zinc-800">{card.value}</div>

             <div className="flex justify-between">
          <div className="text-sm text-zinc-500 mb-2">{card.title}</div>
         
          <div className="text-green-500 text-sm font-medium mt-1">{card.percentage}</div>
             </div>

        </div>
      ))}
    </section>
  );
}