import Container from "@/components/shared/Container/Container";
import React from "react";

type VerticalStepLineProps = {
  steps: number;
};

export default function VerticalStepLine({ steps }: VerticalStepLineProps) {
  return (
    <div className="hidden  [@media(min-width:1650px)]:block">
      <div className="absolute left-[10%]   flex flex-col items-center top-[200px] bottom-[350px]">
        {/* Vertical dashed line */}
        <div className="absolute top-0 bottom-0 w-0.5 border-l-2 border-dashed border-blue-300" />

        {/* Step circles spaced inside */}
        <div className="flex flex-col justify-between h-full">
          {Array.from({ length: steps }, (_, i) => (
            <div
              key={i}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center border-2 border-white shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
