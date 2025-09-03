import React, { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, FileText } from "lucide-react";
import { saveAs } from "file-saver";
import ReactDOMServer from "react-dom/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TemplateFile from "./Template";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { downloadZip } from "client-zip";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
import FileOneDesignEleven from "./file-one/design-eleven/page";
import F1D4 from "@/components/CreateProject/FinalOverview/f-01/f1D4/page";
import F1D5 from "@/components/CreateProject/FinalOverview/f-01/f1D5/page";
import F1D6 from "@/components/CreateProject/FinalOverview/f-01/f1D6/page";
import F1D7 from "@/components/CreateProject/FinalOverview/f-01/f1D7/page";
import F1D8 from "@/components/CreateProject/FinalOverview/f-01/f1D8/page";
import F1D9 from "@/components/CreateProject/FinalOverview/f-01/f1D9/page";
import F2D1 from "./f-02/f2D1/page";
import F2D2 from "./f-02/f2D2/page";
import F2D3 from "./f-02/f2D3/page";
import F3D1 from "./f-03/f3D1/page";
import F3D2 from "./f-03/f3D2/page";
import F3D3 from "./f-03/f3D3/page";
import F3D4 from "./f-03/f3D4/page";
import F3D5 from "./f-03/f3D5/page";
import F3D6 from "./f-03/f3D6/page";
// import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";
import F4D1 from "./f-04/f4D1/page";
import F4D2 from "./f-04/f4D2/page";
import F4D3 from "./f-04/f4D3/page";
import F4D6 from "./f-04/f4D6/page";
import F4D7 from "./f-04/f4D7/page";
import F4D8 from "./f-04/f4D8/page";
import F4D9 from "./f-04/f4D9/page";
import F4D11 from "./f-04/f4D11/page";
import F5D1 from "./f-05/f5D1/page";
import F5D2 from "./f-05/f5D2/page";
import F5D3 from "./f-05/f5D3/page";
import F6D1 from "./f-06/f6D1/page";
import F6D2 from "./f-06/f6D2/page";
import F6D3 from "./f-06/f6D3/page";
import F6D4 from "./f-06/f6D4/page";
import F6D7 from "./f-06/f6D7/page";
import F6D8 from "./f-06/f6D8/page";
import F6D9 from "./f-06/f6D9/page";
import F6D10 from "./f-06/f6D10/page";
import F7D1 from "./f-07/f7D1/page";
import F7D2 from "./f-07/f7D2/page";
import F7D3 from "./f-07/f7D3/page";
import F7D4 from "./f-07/f7D4/page";
import F7D5 from "./f-07/f7D5/page";
import F8D1 from "./f-08/f8D1/page";
import F8D2 from "./f-08/f8D2/page";
import F8D3 from "./f-08/f8D3/page";
import F9D1 from "./f-09/f9D1/page";
import F9D2 from "./f-09/f9D2/page";
import F9D3 from "./f-09/f9D3/page";
import F10D1 from "./f-10/f10D1/page";
import F10D2 from "./f-10/f10D2/page";
import F10D3 from "./f-10/f10D3/page";
import F11D1 from "./f-11/f11D1/page";
import F11D2 from "./f-11/f11D2/page";
import F12D1 from "./f-12/f11D1/page";
import F12D2 from "./f-12/f12D2/page";
import F13D1 from "./f-13/f13D1/page";
import F13D2 from "./f-13/f13D2/page";
import F13D3 from "./f-13/f13D3/page";
import F13D4 from "./f-13/f13D4/page";
import F13D5 from "./f-13/f13D5/page";
import F13D6 from "./f-13/f13D6/page";
import F14D1 from "./f-14/f14D1/page";
import F14D2 from "./f-14/f14D2/page";
import F14D3 from "./f-14/f14D3/page";
import F15D1 from "./f-15/f15D1/page";

import { useGetOwnerTemplateQuery } from "@/redux/features/templates/allTemplateSlice";
import F1D1 from "./f-01/f1d1/page";
import F1D2 from "./f-01/f1d2/page";
import F1D3 from "./f-01/f1d3/page";

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

  const store = makeStore();

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
