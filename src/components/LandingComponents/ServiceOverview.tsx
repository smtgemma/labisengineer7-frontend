'use client';

import Image from "next/image";
import Container from "../shared/Container/Container";
import serviceImg from "@/assets/landing-page/service.jpg"

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
        <div >

            <Container>

                <section className="bg-white px-6  ">
                    <h2 className="text-3xl md:text-5xl font-bold text-center  text-primary">
                        Our Services
                    </h2>

                    <div className="grid gap-10 md:grid-cols-2 ">
                        {services.map((service, i) => (
                            <section className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
                                {/* Left: Image */}
                                <div className="md:w-1/2 h-64 md:h-auto">
                                    <Image
                                        src={service.image}
                                        alt="Modern kitchen representing property"
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        HTK – Electronic Building ID
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Instantly create and manage HTK files for your property. Upload your documents, and the platform does the rest—powered by AI.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline text-sm font-medium"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </section>

                        ))}
                    </div>
                </section>
            </Container>

        </div>

    );
}