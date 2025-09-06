"use client";
import PDFToImageConverter from "@/components/advanceTools/fileUpload/ToolsFIlePdfToImg";
import { usePathname } from "next/navigation";
import ImageToPdfConverter from "@/components/advanceTools/fileUpload/ToolsFIleImgToPdf";
import PdfPackageAutoName from "@/components/advanceTools/fileUpload/ToolsAutoNamePdf";
import PdfToPdfMerge from "@/components/advanceTools/fileUpload/ToolsPdfMerge";

const page = () => {
  const pathname = usePathname();
  const toolName = pathname.split("/")[2];
  console.log(toolName);
  if (toolName === "PDFtoImageConverter") {
    return <PDFToImageConverter />;
  } else if (toolName === "PDFPackager&ImagetoPDFConverter") {
    return <ImageToPdfConverter />;
  } else if (toolName === "PDFPackager&AutoNaming") {
    return <PdfPackageAutoName />;
  } else if (toolName === "AutoMergeSubmissionPDF") {
    return <PdfToPdfMerge />;
  }
};

export default page;
