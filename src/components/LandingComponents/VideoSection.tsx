"use client";
import { useState } from "react";
import videoImage from "../../assets/landing-page/videoImage.png";

export default function VideoSeciton() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Live Demo Tutorials
        </h2>
        <p className="mt-4 text-gray-600 text-2xl">
          Experience real-time examples and practical workflows.
        </p>
      </div>

      {/* Video Container */}
      <div className="relative w-full max-w-5xl rounded-[24px] border-14  border-blue-300 overflow-hidden bg-gray-50">
        {!isPlaying ? (
          <div className="relative">
            {/* Thumbnail Image */}
            <img
              src="./details.png"
              alt="Demo Preview"
              className="w-full h-auto max-w-[1111px]"
            />
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className=" transition p-6 cursor-pointer rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // 🔗 use your video link here
            controls
            autoPlay
            muted
            className="w-full h-auto"
          />
        )}
      </div>
    </section>
  );
}
