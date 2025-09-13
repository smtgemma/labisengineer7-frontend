"use client";
import Image from "next/image";
import banner from "@/assets/landing-page/banner.png";
import Container from "../shared/Container/Container";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <>
      <main className="relative flex items-center justify-center min-h-[700px]  bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
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
            <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left mt-10">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  The Smart <br />
                  Platform For <br></br>{" "}
                  <span className="bg-[#017AFF] text-white">
                    Civil Engineers
                  </span>
                </h1>
                <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
                  Automate HTK, e-Adeies, and Law 4495 with AI-powered tools.
                </p>
                <button
                  className=" 
        flex items-center justify-center gap-2
        px-6 py-3 rounded-md font-medium text-white
        bg-gradient-to-r from-blue-500 to-sky-400
        hover:from-sky-500 hover:to-blue-500
        transition-all duration-300 shadow-md
      "
                >
                  Start for Free
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* <button
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
                </button> */}
              </div>

              {/* Right Image (Laptop Preview) */}
              <div className="flex justify-center lg:justify-end"></div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
