"use client";
import PDFToImageConverter from "@/components/advanceTools/fileUpload/ToolsFIleComponets";
import React from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const toolName = pathname.split("/")[2];
  console.log(toolName);
  return (
    <div>
      <PDFToImageConverter />
    </div>
  );
};

export default page;
