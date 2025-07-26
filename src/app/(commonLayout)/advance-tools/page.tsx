"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";

import pdfToImg from "../../../assets/advanceTools/pdfToImgCovert.png";
import pdfTopdfMerge from "../../../assets/advanceTools/pdfToPdfMerge.png";
import pdfAutoName from "../../../assets/advanceTools/pdfPackagerAndAutoName.png";
import imgToPdfs from "../../../assets/advanceTools/pdfToImgCovert.png";
import PDFToImageConverter from "@/components/advanceTools/fileUpload/ToolsFIleComponets";

export default function BuildAITools() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const tools = [
    {
      title: "PDF to Image Converter",
      description:
        "Convert PDF pages into .JPG or .PNG images for editing or attachments.",
      image: pdfToImg,
    },
    {
      title: "Auto Merge Submission PDF",
      description:
        "Combine PDFs in the order you want with the easiest PDF merger available.",
      image: pdfTopdfMerge,
    },
    {
      title: "PDF Packager & Auto Naming",
      description:
        "Automatically merges documents in correct order and renames files (e.g. Scan_1 → Klimatologio.pdf).",
      image: pdfAutoName,
    },
    {
      title: "Image to PDF Converter",
      description:
        "Convert .JPG images to PDF in seconds. Easily adjust orientation and margins.",
      image: imgToPdfs,
    },
  ];

  return (
    <div className=" w-[1320px] mx-auto bg-gradient-to-br my-10">
      <Head>
        <title>BuildAI – Advanced Tools</title>
        <meta
          name="description"
          content="Smart tools to streamline HTK folder submission"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500  mb-3 sm:mb-4">
            BuildAI <span className="text-blue-500">Advanced Tools</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Smart tools to streamline HTK folder submission
          </p>
        </div>

        {/* Tools Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} isMobile={isMobile} />
          ))}
        </div>

        <PDFToImageConverter />
      </main>
    </div>
  );
}

function ToolCard({ tool, isMobile }: any) {
  return (
    <div className="bg-[#F8F8F8] rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-500 active:translate-y-0 h-full flex flex-col border border-gray-100">
      <div className="p-6 flex-grow">
        <div className="relative  mb-4">
          <Image
            src={tool.image}
            width={200}
            height={20}
            alt={tool.title}
            className="object-contain w-16 h-16"
            // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 mt-6">
          {tool.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{tool.description}</p>
      </div>
    </div>
  );
}
