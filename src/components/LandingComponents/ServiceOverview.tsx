import React from "react";
import { Search, FileText, Scale, HardHat, LucideIcon } from "lucide-react";
import Container from "../shared/Container/Container";
import Loading from "../Others/Loading";
import { useGetTheServiceQuery } from "@/redux/features/projectService/projectServiceSlice";
import ProjectCard from "../Projects/Card/ProjectCard";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

const ServicesOverview: React.FC = () => {
  const handleServiceClick = (serviceTitle: string): void => {
    console.log(`Starting service: ${serviceTitle}`);
    // Add your service navigation logic here
  };

  const { data, isLoading } = useGetTheServiceQuery("");
  if (isLoading) {
    return <Loading />;
  }
  const projects = data?.data;
  console.log(projects);

  return (
    <Container>
      <div className="w-full  my-14 px-4 py-12  sm:px-6 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#017AFF] mb-4">
            Services Overview
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 my-6">
          {projects?.map((project: any, idx: number) => (
            <ProjectCard
              title={project.serviceName}
              image={project.imageUrl}
              description={project.serviceDescription}
              id={project.id}
              key={idx}
              serviceTitle={project.serviceTitle}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServicesOverview;
