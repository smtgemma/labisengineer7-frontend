"use client";
import Image from "next/image";
import banner from "@/assets/landing-page/banner-bg.png";
import Container from "../shared/Container/Container";
import { ArrowRight } from "lucide-react";

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
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="relative z-10 text-center flex flex-col items-center justify-center transform -translate-y-30 lg:-translate-y-20"
        >
          <h1 className="text-4xl md:text-[88px] font-bold leading-tight ">
            The Smart Platform For <br />
            <span className="bg-blue-600 text-white px-2">Civil Engineers</span>
          </h1>
          <p className="mt-8 text-lg md:text-[32px] text-gray-700 ">
            Automate HTK, e-Adeies, and Law 4495 with AI-powered tools.
          </p>
          <div className="mt-16 ">
            <button
              className="
        flex items-center justify-center gap-2 
        px-6 py-3 rounded-xl font-medium text-white 
        bg-gradient-to-r from-blue-500 to-sky-400
        hover:from-sky-500 hover:to-blue-500
        transition-all duration-300 shadow-md
      "
            >
              Start for Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="
        flex items-center justify-center gap-2 
        px-6 py-3 rounded-xl font-medium text-white 
        bg-gradient-to-bl from-blue-500 to-sky-400
        hover:from-sky-500 hover:to-blue-500
        transition-all duration-300 shadow-md
      "
            >
              Start for Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
