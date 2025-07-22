"use client";
import Loading from "@/components/Others/Loading";
import ProjectCard from "@/components/Projects/Card/ProjectCard";
import Header from "@/components/shared/Header/Header";
import tokenCatch from "@/lib/token";
import { useGetTheServiceQuery } from "@/redux/features/projectService/projectServiceSlice";
import React from "react";

export default function NewProject() {
  const token = tokenCatch();
  console.log(token);

  const { data, isLoading } = useGetTheServiceQuery(token);

  if (isLoading) {
    return <Loading />;
  }

  const projects = data?.data;
  console.log(projects);

  return (
    <section className="bg-[#F1F5F9] py-8 px-12">
      <Header
        title="Start a New Project"
        subtitle="Select the type of documentation you need to generate."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {projects?.map((project: any, idx: number) => (
          <ProjectCard
            title={project.serviceTitle}
            description={project.serviceDescription}
            id={project.createdById}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
