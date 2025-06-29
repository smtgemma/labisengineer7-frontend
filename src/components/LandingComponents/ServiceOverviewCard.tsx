import Image, { StaticImageData } from 'next/image';
import React from 'react';
import serviceImg from '@/assets/landing-page/service.jpg';

export interface IService {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export default function ServiceOverviewCard({ service }: { service: IService }) {
  return (
    <section className="bg-white rounded-xl  border border-gray-200 overflow-hidden flex flex-col md:flex-row max-w-[648px] mx-auto p-4">
      {/* Image Section */}
      <div className="relative h-[210px] w-full md:w-[210px] md:h-auto flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="md:ml-6 flex flex-col justify-center text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-2xl font-bold text-start  mb-2">{service.title}</h3>
        <p className="text-info mb-4 text-start">{service.description}</p>
        <a
          href={service.link}
          className="text-primary hover:underline text-sm font-medium underline text-end "
        >
          Learn More 
        </a>
      </div>
    </section>
  );
}
