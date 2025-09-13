"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import stepShapeDefault from "@/assets/landing-page/Vector.png";

export interface StepTextBlockProps {
  title: string;
  description: string;
  stepNumber?: string;
  buttonText?: string;
  buttonLink?: string;
  stepShape?: StaticImageData;
  list?: string[];
  formats?: string[];
}

export default function StepTextBlock({
  title,
  description,
  stepNumber,
  buttonText,
  buttonLink,
  stepShape = stepShapeDefault,
  list,
  formats,
}: StepTextBlockProps) {
  const [endClass, setEndClass] = useState("");

  const stepNum = Number(stepNumber?.split(" ")[1]);

  useEffect(() => {
    if (stepNum % 2 == 0) {
      setEndClass("flex justify-end");
    }
  }, []);

  return (
    <div className="w-full md:w-1/2 text-center md:text-left">
      {/* Step shape + number */}
      {/* {stepNumber && (
                <div className={`md:${ endClass}`}>
                    <div className="relative inline-block w-[128px] h-[110px] mb-4 ">
                        <Image src={stepShape} alt="step shape" fill className="object-contain" />
                        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-primary">
                            {stepNumber}
                        </h2>
                    </div>
                </div>

            )} */}

      {/* Title */}
      <h3 className="text-2xl md:text-[42px] font-bold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-info mb-6 text-base md:text-lg leading-relaxed">
        {description}
      </p>

      {/* Optional: List */}
      {list && list.length > 0 && (
        <ul className="text-left mb-6 list-disc list-inside text-gray-700">
          {list.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Optional: Formats */}
      {formats && formats.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
          <span className="font-medium">Supported formats:</span>
          {formats.map((format, index) => (
            <span key={index} className="">
              {format}
              {index < formats.length - 1 && ","}
            </span>
          ))}
        </div>
      )}

      {/* Optional: Button */}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}
