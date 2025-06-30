'use client';
import about from '@/assets/landing-page/aboutus.png'
import Image from 'next/image';
import Container from '../shared/Container/Container';
export default function AboutUs() {
    return (

        <div className='bg-background'>
            <Container>

                <section className="flex flex-col md:flex-row items-center justify-between  px-6 py-16 md:px-20 gap-[86px]">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src={about}
                            alt="Engineer at construction site"
                            className="rounded-lg object-cover w-full"
                            width={531}
                            height={548}
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-2xl font-bold text-primary mb-4">
                            About Us
                        </h2>
                        <p className="text-lg md:text-[32px]  font-semibold mb-2">
                            Dedicated to simplifying engineering documentation in Greece.
                        </p>
                        <p className="text-info text-base md:text-lg leading-relaxed">
                            We are a team of engineers and developers committed to building
                            intuitive, AI-powered solutions that help civil engineers focus on
                            their projects—not paperwork. Our mission is to modernize technical
                            documentation through smart automation.
                        </p>
                    </div>
                </section>
            </Container>

        </div>

    );
}