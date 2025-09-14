"use client";
import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const StatsSection = () => {
  const stats: Stat[] = [
    { value: 1200, suffix: "+", label: "User’s" },
    { value: 4, suffix: "+", label: "Total Service" },
    { value: 120, suffix: "+", label: "Service Category" },
    { value: 4.8, suffix: "", label: "Star (120 Review’s)" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <CounterBox key={index} {...item} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterBoxProps extends Stat {
  animate: boolean;
}

const CounterBox: React.FC<CounterBoxProps> = ({
  value,
  suffix,
  label,
  animate,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [animate, value]);

  return (
    <div className="flex flex-col items-center justify-center border-r last:border-r-0 border-gray-200">
      <h2
        className="text-3xl md:text-7xl font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </h2>
      <p className="text-gray-600 mt-2 text-base md:text-xl">{label}</p>
    </div>
  );
};

export default StatsSection;
