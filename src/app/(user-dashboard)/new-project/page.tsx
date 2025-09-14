"use client";
import Loading from "@/components/Others/Loading";
import ProjectCard from "@/components/Projects/Card/ProjectCard";
import Header from "@/components/shared/Header/Header";

import { useGetTheServiceQuery } from "@/redux/features/projectService/projectServiceSlice";
import React from "react";

export default function page() {
  const { data, isLoading } = useGetTheServiceQuery("");
  if (isLoading) {
    return <Loading />;
  }

  const projects = data?.data;
  console.log("============", projects);
  return (
    <section className="bg-[#F1F5F9] py-8 ">
      <Header
        title="Start a New Project"
        subtitle="Select the type of documentation you need to generate."
      />
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
    </section>
  );
}
