"use client";
import banner from "@/assets/landing-page/banner.png";
import Container from "../shared/Container/Container";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <main
      className="h-[770px] bg-left bg-no-repeat bg-[100% 100%]"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <Container>
        <div className="flex items-center h-[770px] ">
          {/* Left Content (center vertically in grid) */}
          <div className="  space-y-4 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              The Smart <br />
              Platform For <br />
              <span className="bg-[#017AFF] text-white mt-3 inline-block px-2">
                Civil Engineers
              </span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Automate HTK, e-Adeies, and Law 4495 with AI-powered tools.
            </p>

            <div className="flex justify-center lg:justify-start mt-16">
              <button
                style={{
                  borderRadius: "6px",
                  background:
                    "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
                }}
                className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-4 cursor-pointer rounded-md font-medium text-white text-sm md:text-base "
              >
                Start for Free
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* Right Image (optional preview) */}
          <div className="hidden lg:flex justify-end items-center">
            {/* Add preview image if needed */}
          </div>
        </div>
      </Container>
    </main>
  );
}
