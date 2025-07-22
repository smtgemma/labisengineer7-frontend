import React from "react";
import img from "@/assets/project-card/project-card-img.jpg";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  // image: string;
  title: string;
  description: string;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  // image,
  title,
  description,
  id,
}) => {
  return (
    <div className="bg-white rounded-3xl border-2 border-transparent hover:border-[#017AFF] overflow-hidden max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            width={220}
            height={220}
            src={img}
            alt="Modern kitchen interior"
            className=" object-cover rounded-2xl"
            style={{ aspectRatio: "1/1" }}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-black mb-5 leading-tight tracking-tight">
            {title}
          </h1>

          <p className="text-gray-700 text-xl leading-relaxed mb-8 font-normal">
            {description}
          </p>

          <div>
            <Link
              href={"/service/sub-category"}
              className="bg-[#017AFF] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Begin Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
