import React from "react";
import img from "@/assets/project-card/project-card-img.jpg";
import Image from "next/image";

interface ProjectCardProps {
  // image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  // image,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-3xl border-2 border-transparent hover:border-[#017AFF] overflow-hidden max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            width={320}
            height={320}
            src={img}
            alt="Modern kitchen interior"
            className="w-80 h-80 object-cover rounded-2xl"
            style={{ aspectRatio: "1/1" }}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-black mb-8 leading-tight tracking-tight">
            {title}
          </h1>

          <p className="text-gray-700 text-xl leading-relaxed mb-12 font-normal">
            {description}
          </p>

          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Begin Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
