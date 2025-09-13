import { RootState, store } from "@/redux/store";
import { downloadZip } from "client-zip";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FileSpreadsheet, FileText } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Provider, useSelector } from "react-redux";
import FileOneDesignEleven from "./file-one/design-eleven/page";
import TemplateFile from "./Template";
// import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";

import { useGetOwnerTemplateQuery } from "@/redux/features/templates/allTemplateSlice";

interface Owner {
  id: string;
  firstName: string;
  surname: string;
  fatherName: string;
  vatNo: string;
}

interface FinalOverviewProps {
  files: File[];
  extractedData: any;
  selectedOwners: Owner[];
  selectedActions: string[];
  onComplete: () => void;
}

const FinalOverview: React.FC<FinalOverviewProps> = ({
  files,
  extractedData,
  selectedOwners,
  selectedActions,
  onComplete,
}) => {
  const printRef = React.useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const allTempate = stepByStepData.actionSelection;
  const dataAllFIled = stepByStepData.aiInputData;
  const subCategoryData = stepByStepData.subcategory;
  const id = stepByStepData?.projectIdCode;
  const ownerId = id?.result?.project?.id;

  const { data: ownerData } = useGetOwnerTemplateQuery(ownerId);
  console.log(ownerData?.data, "===============================");
  const allData = ownerData?.data;

  console.log(ownerId, "projectId");

  const buildingMods = subCategoryData["building-modifications"] || [];
  const energy = subCategoryData["energy-systems"] || [];
  const fencing = subCategoryData["fencing"] || [];
  const landscaping = subCategoryData["landscaping-2"] || [];
  const operational = subCategoryData["operational-space"] || [];
  const property = subCategoryData["property-documentation"] || [];
  const small = subCategoryData["small-construction"] || [];


  const { owners } = dataAllFIled;

  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // modal close click outside
  const modalContentRef = useRef<HTMLDivElement>(null);

  // ✅ 2. DOWNLOAD CSV FILE
  const downloadCSV = () => {
    const headers = ["First Name", "Surname", "Father Name", "VAT No"];
    const rows = selectedOwners.map((owner) =>
      [owner.firstName, owner.surname, owner.fatherName, owner.vatNo].join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "owners.csv");
  };

  const templates = [
    { name: "TemplateFile", component: <TemplateFile /> },

    {
      name: "ProjectDescriptionSix",
      component: <FileOneDesignEleven />,
    },
  ];

  console.log(selected);

  // pdf file download
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };

  const handleZipDownload = async () => {
    const files = await Promise.all(
      templates.map(async (t) => {
        const html = ReactDOMServer.renderToStaticMarkup(
          <Provider store={store}>{t.component}</Provider>
        );

        const container = document.createElement("div");
        container.innerHTML = html;
        container.style.width = "794px";
        container.style.background = "#fff";
        document.body.appendChild(container);

        const canvas = await html2canvas(container, {
          scale: 3,
          useCORS: true,
        });
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          unit: "px",
          format: [imgWidth, imgHeight],
        });
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        const pdfBlob = pdf.output("blob");
        document.body.removeChild(container);

        return {
          name: `${t.name}.pdf`,
          lastModified: new Date(),
          input: pdfBlob,
        };
      })
    );

    const zipBlob = await downloadZip(files).blob();
    saveAs(zipBlob, "templates.zip");
  };

  const handlePdfDownloadTempate = () => {
    if (templates.length === 0) {
      handleDownloadPdf();
    } else {
      handleZipDownload();
    }
  };
  // 🔹 Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <div className="space-y-8 ">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Final Overview
        </h1>
        <p className="text-gray-600 text-lg">Preview & download your files</p>
      </div>

      {/* Cards */}
      <div className="min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* <div
          // onClick={openPreview}
          className="bg-white border border-gray-200 hover:bg-blue-50 p-6 rounded-lg cursor-pointer  hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Preview file
              </h3>
              <p className="text-sm text-gray-500">Open in new tab</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Click to preview Word-style output
          </p>
        </div> */}

          {/* fdf */}
          <div
            onClick={handlePdfDownloadTempate}
            className="bg-white border border-gray-200 hover:bg-blue-50 p-6 rounded-lg cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Pdf File
                </h3>
                <p className="text-sm text-gray-500">Download pdf</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Click to download document.docx
            </p>
          </div>
          {/* CSV */}
          <div
            onClick={downloadCSV}
            className="bg-white border-gray-200 hover:bg-blue-50 border p-6 rounded-lg cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  CSV File
                </h3>
                <p className="text-sm text-gray-500">Structured spreadsheet</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Click to download owners.csv
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default FinalOverview;
