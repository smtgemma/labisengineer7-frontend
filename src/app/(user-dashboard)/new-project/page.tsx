import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Header from "@/components/shared/Header/Header";
import React from "react";

export default function NewProject() {
  const projects = [
    {
      title: "HTK – Electronic Building ID",
      description:
        "Instantly create and manage HTK files for your property. Upload your documents, and the platform does the rest—powered by AI.",
    },
    {
      title: "e-Adeies – Building Permit",
      description:
        "Prepare and submit your Building Permit documents faster. All data is auto-filled from your uploads and prepped for e-adeies.tee.gr.",
    },
    {
      title: "Law 4495/17 – Unauthorized Declarations",
      description:
        "Automatically generate the required declarations and forms under Law 4495/17. Greatly reduce manual data entry.",
    },
    {
      title: "Engineer Certificate",
      description:
        "Quickly produce valid engineer certificates for property sales and transactions. AI checks and fills all necessary details.",
    },
  ];

  return (
    <div>
      <Header
        title="Start a New Project"
        subtitle="Select the type of documentation you need to generate."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {projects.map((project, idx) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
