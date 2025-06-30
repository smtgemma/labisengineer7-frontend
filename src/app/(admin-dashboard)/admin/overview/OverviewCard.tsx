import Image from "next/image";
import icon1 from '@/assets/landing-page/icon1.jpg';
import icon2 from '@/assets/landing-page/icon2.jpg';
import icon3 from '@/assets/landing-page/icon3.jpg';
import icon4 from '@/assets/landing-page/icon4.jpg';
import icon5 from '@/assets/landing-page/icon5.jpg';



const data = [
  { label: 'Joining Engineers', value: '1,200', delta: '+12%', image: icon1 },
  { label: 'Joining Companies', value: '600', delta: '+8%', image: icon2 },
  { label: 'Active Projects', value: '1,252', delta: '+15%', image: icon3 },
  { label: 'Documents Generated', value: '09', delta: '+3%', image: icon4 },
  { label: 'AI Extractions', value: '12', delta: '+9%', image: icon5 },
];

export default function OverviewCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 xl:grid-cols-5  gap-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white  py-6 px-4 rounded-xl shadow flex justify-between gap-1"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xl md:text-[42px] font-bold text-zinc-800">{item.value}</span>
            <span className="text-sm text-zinc-500">{item.label}</span>
          </div>


          <div className="flex flex-col gap-3">

            <Image
              src={item.image}
              alt="icons"
              height={56}
              width={56}
            />
            <span className="text-green-600  font-medium">{item.delta}</span>
          </div>


        </div>
      ))}
    </section>
  );
}