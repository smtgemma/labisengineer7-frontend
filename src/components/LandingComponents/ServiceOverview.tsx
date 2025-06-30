'use client';

import Image from "next/image";
import Container from "../shared/Container/Container";
import serviceImg from "@/assets/landing-page/service.jpg"
import ServiceOverviewCard from "./ServiceOverviewCard";


const services = [
    {
        title: 'HTK – Electronic Building ID',
        description:
            'Instantly create and manage HTK files for your property. Upload your documents, and the platform does the rest—powered by AI.',
        image: serviceImg  ,
        link: '#',
    },
    {
        title: 'e-Adeies – Building Permit',
        description:
            'Prepare and submit your Building Permit documents faster. All data is auto-filled from your uploads and prepped for e-adeies.tee.gr.',
        image: serviceImg ,
        link: '#',
    },
    {
        title: 'Law 4495/17 – Unauthorized Declarations',
        description:
            'Automatically generate the required declarations and forms under Law 4495/17. Greatly reduce manual data entry.',
        image: serviceImg  ,
        link: '#',
    },
    {
        title: 'Engineer Certificate',
        description:
            'Quickly produce valid engineer certificates for property sales and transactions. AI checks and fills all necessary details.',
        image: serviceImg,
        link: '#',
    },
];

export default function ServicesOverview() {
    return (
        <div className="py-[100px]">

            <Container>

                <section className="bg-white px-6  ">
                    <h2 className="text-3xl md:text-5xl font-bold text-center  text-primary mb-12">
                        Services Overview
                    </h2>

                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 ">
                        {services.map((service, i) => (
                          <ServiceOverviewCard key={service.title} service={service}/>

                        ))}
                    </div>
                </section>
            </Container>

        </div>

    );
}