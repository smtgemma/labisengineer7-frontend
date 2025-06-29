'use client'
import Image from 'next/image';
import banner from '@/assets/landing-page/banner-bg.png';
import ButtonArrow from '../shared/ButtonArrow';
import Container from '../shared/Container/Container';


export default function Banner() {
  return (
    <main className="relative flex items-center justify-center min-h-screen  bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src={banner}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <Container>

<div className="relative z-10 text-center flex flex-col items-center justify-center transform -translate-y-30 lg:-translate-y-20">
        <h1 className="text-4xl md:text-[88px] font-bold leading-tight ">
          The Smart Platform For <br />
          <span className="bg-blue-600 text-white px-2">Civil Engineers</span>
        </h1>
        <p className="mt-8 text-lg md:text-[32px] text-gray-700 ">
          Automate HTK, e-Adeies, and Law 4495 with AI-powered tools.
        </p>
        <div className="mt-16 ">
                 <ButtonArrow title="Start for Free" onClick={() => alert('Button clicked!')}/>
        </div>

 
      </div>
      </Container>
      
    </main>
  );
}
