"use client";
import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "1200+", label: "User’s" },
    { value: "4+", label: "Total Service" },
    { value: "120+", label: "Service Category" },
    { value: "4.8", label: "Star (120 Review’s)" },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-r last:border-r-0 border-gray-200"
            >
              {/* Gradient Text Only */}
              <h2
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.value}
              </h2>

              <p className="text-gray-600 mt-2 text-base md:text-xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
