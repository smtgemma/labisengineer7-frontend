"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Play, X, FileText, Building, Award, Scale } from "lucide-react";
import Container from "@/components/shared/Container/Container";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  videoUrl: string;
  thumbnail: string;
}

const LiveDemoTutorials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Tutorial | null>(null);
  console.log(selectedVideo);

  const tutorials: Tutorial[] = [
    {
      id: 1,
      title: "HTK – Electronic Building ID",
      description:
        "Convert PDF pages into JPG or PNG images for editing or attachments.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "./videoImage.png",
    },
    {
      id: 2,
      title: "e-Adeies – Building Permit",
      description:
        "Convert PDF pages into JPG or PNG images for editing or attachments.",
      icon: <Building className="w-8 h-8 text-blue-500" />,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail:
        "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg",
    },
    {
      id: 3,
      title: "Engineer Certificate",
      description:
        "Convert PDF pages into JPG or PNG images for editing or attachments.",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail:
        "https://images.pexels.com/photos/15109999/pexels-photo-15109999.jpeg",
    },
    {
      id: 4,
      title: "Law 4495/17 – Unauthorized Declarations",
      description:
        "Convert PDF pages into JPG or PNG images for editing or attachments.",
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail:
        "https://images.pexels.com/photos/15109992/pexels-photo-15109992.jpeg",
    },
  ];

  const openVideo = (tutorial: Tutorial): void => {
    setSelectedVideo(tutorial);
  };

  const closeVideo = (): void => {
    setSelectedVideo(null);
  };

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 mb-10">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center my-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Live Demo Tutorials
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience real-time examples and practical workflows.
            </p>
          </div>

          {/* Tutorial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial: Tutorial) => (
              <div
                key={tutorial.id}
                className="group bg-white border border-blue-300 hover:border-blue-600 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-100 cursor-pointer"
              >
                {/* Card Image with Play Button */}
                <div className="relative overflow-hidden">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 sm:h-70 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      style={{
                        background:
                          "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
                      }}
                      onClick={() => openVideo(tutorial)}
                      className="transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-6 shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-label={`Play video for ${tutorial.title}`}
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </button>
                  </div>

                  {/* Corner Icon */}
                  {/* <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    {tutorial.icon}
                  </div> */}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tutorial.description}
                  </p>

                  {/* Action Button */}
                  <button
                    style={{
                      background:
                        "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
                    }}
                    onClick={() => openVideo(tutorial)}
                    className="w-full cursor-pointer  hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label={`Watch demo for ${tutorial.title}`}
                  >
                    <Play className="w-4 h-4" fill="currentColor" />
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal with React Player */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] bg-opacity-90 p-4">
              <div className="relative w-full max-w-5xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Video Container */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* React Player */}
                  <div className="relative aspect-video">
                    <ReactPlayer
                      src={selectedVideo?.videoUrl}
                      width="100%"
                      height="100%"
                      controls={true}
                      muted={true}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-blue-600 text-white rounded-full p-2 flex-shrink-0">
                        {selectedVideo.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {selectedVideo.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{selectedVideo.description}</p>
                  </div>
                </div>
              </div>

              {/* Click outside to close */}
              <div
                className="absolute inset-0 -z-10"
                onClick={closeVideo}
                aria-label="Close video modal"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LiveDemoTutorials;
