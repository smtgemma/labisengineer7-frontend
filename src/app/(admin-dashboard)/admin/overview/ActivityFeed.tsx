const activities = [
  {
    name: 'Maria K.',
    role: 'Engineer',
    action: 'Submitted HTK Project',
    date: '2025-06-19 09:02',
  },
  {
    name: 'Saifur Rahman',
    action: 'Edited Law 4495 Template',
    date: '2025-06-18 17:41',
  },
  {
    name: 'Yannis D.',
    role: 'Company',
    action: 'Generated Engineer Certificate',
    date: '2025-06-18 15:00',
  },
];

export default function ActivityFeed() {
  return (
    <section className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-100 mb-4">
        Activity Feed
      </h2>
      <ul className="space-y-3">
        {activities.map((a, i) => (
          <li
            key={i}
            className="text-sm text-zinc-700 dark:text-zinc-200 border-l-4 border-blue-500 pl-3"
          >
            <span className="font-medium">{a.name}</span>
            {a.role && <span className="text-xs text-zinc-500"> ({a.role})</span>}: {a.action}
            <div className="text-xs text-zinc-500">{a.date}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}