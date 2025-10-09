import { RootState, store } from "@/redux/store";
import { downloadZip } from "client-zip";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FileSpreadsheet, FileText } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Provider, useSelector } from "react-redux";

// import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";
import F6D1 from "./f-06/f6D1/page";
import F6D10 from "./f-06/f6D10/page";
import F6D2 from "./f-06/f6D2/page";
import F6D3 from "./f-06/f6D3/page";
import F6D4 from "./f-06/f6D4/page";
import F6D7 from "./f-06/f6D7/page";
import F6D8 from "./f-06/f6D8/page";
import F6D9 from "./f-06/f6D9/page";

import {
  useDownloadTemplatePdfQuery,
  useExeclDownloadTemplateQuery,
  useGetOwnerTemplateQuery,
} from "@/redux/features/templates/allTemplateSlice";

import { FaRegCopy } from "react-icons/fa6";
import { toast } from "sonner";
import F6D12 from "./f-06/f6D12/page";
import F6D5 from "./f-06/f6D5/page";
import F6D6 from "./f-06/f6D6/page";
import F6D13 from "./f-06/f6D13/page";
import F6D14 from "./f-06/f6D14/page";
import F6D15 from "./f-06/f6D15/page";
import F5D6 from "./f-05/f5D6/page";
import F5D7 from "./f-05/f5D7/page";
import F5D8 from "./f-05/f5D8/page";
import F5D9 from "./f-05/f5D9/page";
import F5D10 from "./f-05/f5D10/page";
import F5D11 from "./f-05/f5D11/page";
import F5D12 from "./f-05/f5D12/page";
import F5D13 from "./f-05/f5D13/page";
import F5D14 from "./f-05/f5D14/page";
import F5D15 from "./f-05/f5D15/page";
import F5D16 from "./f-05/f5D16/page";
import F5D17 from "./f-05/f5D17/page";
import F10D4 from "./f-10/f10D4/page";
import F10D5 from "./f-10/f10D5/page";
import F10D6 from "./f-10/f10D6/page";
import F10D7 from "./f-10/f10D7/page";
import F10D8 from "./f-10/f10D8/page";
import F10D9 from "./f-10/f10D9/page";
import F10D10 from "./f-10/f10D10/page";
import F10D11 from "./f-10/f10D11/page";
import F10D12 from "./f-10/f10D12/page";
import F10D13 from "./f-10/f10D13/page";
import F10D14 from "./f-10/f10D14/page";
import F10D15 from "./f-10/f10D15/page";
import Test from "@/app/test/page";
import F7D1 from "./f-07/f7D1/page";
import F7D2 from "./f-07/f7D2/page";
import F7D3 from "./f-07/f7D3/page";
import F7D4 from "./f-07/f7D4/page";
import F7D5 from "./f-07/f7D5/page";
import F7D6 from "./f-07/f7D6/page";
import F7D7 from "./f-07/f7D7/page";
import F7D8 from "./f-07/f7D8/page";
import F7D9 from "./f-07/f7D9/page";
import F7D10 from "./f-07/f7D10/page";
import F7D11 from "./f-07/f7D11/page";
import F14D1 from "./f-14/f14D1/page";
import F14D2 from "./f-14/f14D2/page";
import F14D3 from "./f-14/f14D3/page";
import F14D4 from "./f-14/f14D4/page";
import F14D5 from "./f-14/f14D5/page";
import F14D6 from "./f-14/f14D6/page";
import F14D7 from "./f-14/f14D7/page";
import F14D10 from "./f-14/f14D10/page";
import F14D11 from "./f-14/f14D11/page";
import F14D12 from "./f-14/f14D12/page";
import F2D1 from "./f-02/f2D1/page";
import F2D2 from "./f-02/f2D2/page";
import F2D3 from "./f-02/f2D3/page";
import F4D4 from "./f-04/f4D4/page";
import F2D4 from "./f-02/f2D4/page";
import F2D5 from "./f-02/f2D5/page";
import F2D6 from "./f-02/f2D6/page";
import F2D7 from "./f-02/f2D7/page";
import F2D8 from "./f-02/f2D8/page";
import F8D1 from "./f-08/f8D1/page";
import F8D2 from "./f-08/f8D2/page";
import F8D3 from "./f-08/f8D3/page";
import F8D4 from "./f-08/f8D4/page";
import F8D5 from "./f-08/f8D5/page";
import F8D6 from "./f-08/f8D6/page";
import F8D7 from "./f-08/f8D7/page";
import F14D8 from "./f-14/f14D8/page";
import F14D9 from "./f-14/f14D9/page";
import F7D12 from "./f-07/f7D12/page";

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic?: string;
  isVerified?: boolean;
  role?: "ENGINEER" | "ADMIN" | "USER" | string;
  status?: "ACTIVE" | "INACTIVE" | "PENDING" | string;
  teeRegistration?: string;
  vatNumber?: string;
  hexToken?: string;
  createdAt?: string;
  updatedAt?: string;
}

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
  const allTemplate = stepByStepData.selectTemplate;
  const projectCodeId = stepByStepData.projectIdCode;
  const id = stepByStepData?.projectIdCode;
  const projectId = stepByStepData?.projectIdCode?.result.id;
  const userId = dataAllFIled?.createdById;

  console.log(stepByStepData?.projectIdCode?.id);

  const { data: allTemplateData } = useGetOwnerTemplateQuery(projectId || "");
  const { data: pdfdownload } = useDownloadTemplatePdfQuery("");
  const { data: execlDownload } = useExeclDownloadTemplateQuery("");

  const allData = allTemplateData?.data || {};


  console.log(
    stepByStepData,
    "all data for template from stepBySteData =========================="
  );
  console.log(
    allData,
    "allData from database by api=========================="
  );

  console.log("pdf", pdfdownload);
  console.log("execl", execlDownload);

  const buildingMods = subCategoryData["building-modifications"] || [];
  const energy = subCategoryData["energy-systems"] || [];
  const fencing = subCategoryData["fencing"] || [];
  const landscaping = subCategoryData["landscaping-2"] || [];
  const operational = subCategoryData["operational-space"] || [];
  const property = subCategoryData["property-documentation"] || [];
  const small = subCategoryData["small-construction"] || [];

  // const store = makeStore();
  const [ownerIndex, setOwnerIndex] = useState<number | null>(null)
  const [selected, setSelected] = useState<string | null>(null);
  const [projectHexCode, setProjectHexCode] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // modal close click outside
  const modalContentRef = useRef<HTMLDivElement>(null);

  const userData = useSelector((state: any) => state.user.userData);

  console.log(userData, "projectCodeId:", projectCodeId?.result?.projectCode);
  //2. DOWNLOAD CSV FILE
  const downloadCSV = () => {
    const headers = ["First Name", "Surname", "Father Name", "VAT No"];
    const rows = selectedOwners.map((owner) =>
      [owner.firstName, owner.surname, owner.fatherName, owner.vatNo].join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "owners.csv");
  };

  // const templates = [
  //   { name: "TemplateFile", component: <TemplateFile /> },

  //   {
  //     name: "ProjectDescriptionSix",
  //     component: <FileOneDesignEleven />,
  //   },
  // ];


  const projectAndUserHexCode =
    userData?.hexToken + `-${projectCodeId?.result?.projectCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(projectAndUserHexCode);
      toast.success("successfully Id copy !. Use is id your extension.");
      setProjectHexCode(projectAndUserHexCode);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement("a");
    link.href =
      "https://api.buildai.gr/generated-files/generated_pdf_files.zip";
    link.download = "generated_pdf_files.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadExecl = () => {
    const link = document.createElement("a");
    link.href =
      "https://api.buildai.gr/generated-files/generated_excel_files.zip";
    link.download = "generated_pdf_files.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleZipDownload = async () => {
  //   const files = await Promise.all(
  //     templates.map(async (t) => {
  //       const html = ReactDOMServer.renderToStaticMarkup(
  //         <Provider store={store}>{t.component}</Provider>
  //       );

  //       const container = document.createElement("div");
  //       container.innerHTML = html;
  //       container.style.width = "794px";
  //       container.style.background = "#fff";
  //       document.body.appendChild(container);

  //       const canvas = await html2canvas(container, {
  //         scale: 3,
  //         useCORS: true,
  //       });
  //       const imgWidth = canvas.width;
  //       const imgHeight = canvas.height;
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF({
  //         unit: "px",
  //         format: [imgWidth, imgHeight],
  //       });
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //       const pdfBlob = pdf.output("blob");
  //       document.body.removeChild(container);

  //       return {
  //         name: `${t.name}.pdf`,
  //         lastModified: new Date(),
  //         input: pdfBlob,
  //       };
  //     })
  //   );

  //   const zipBlob = await downloadZip(files).blob();
  //   saveAs(zipBlob, "templates.zip");
  // };

  // const handlePdfDownloadTempate = () => {
  //   if (templates.length === 0) {
  //     handleDownloadPdf();
  //   } else {
  //     handleZipDownload();
  //   }
  // };
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

  // const templates = [
  //   {
  //     id: "template3",
  //     name: "F6D3.pdf",
  //     component: <F6D8 allData={allData} />,
  //   },
  // ];

  console.log(selected, "selected==================");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Final Overview
        </h1>
        <p className="text-gray-600 text-lg">Preview & download your files</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* aufil groverment */}
        {allTemplate &&
          allTemplate.find(
            (item: { id: string }) => item.id === "autofill"
          ) && (
            <div
              onClick={handleCopy}
              className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
            >
              <div
                title="The click copy user id"
                className="flex items-center space-x-4 mb-4"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  {/* <FileText className="w-6 h-6 text-yellow-600" /> */}
                  <FaRegCopy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className=" relative ">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Auto-Fill Government Form
                  </h3>
                  <p className="text-sm text-gray-500">User and Project id</p>
                  {projectHexCode && (
                    <p className="text-gray-600 text-sm mt-2 absolute left-0 top-12 ">
                      <button className="bg-blue-400 text-white px-4 py-1  rounded hover:bg-blue-700 cursor-pointer">
                        {`Id: ${projectHexCode}`}
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        {/* fdf */}

        <div
          onClick={handleDownloadPdf}
          className="bg-white border border-blue-400  p-6 rounded-lg cursor-pointer hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Pdf File</h3>
              <p className="text-sm text-gray-500">Download pdf</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Click to download document.docx
          </p>
        </div>

        {/* CSV */}

        <div
          onClick={handleDownloadExecl}
          className="bg-white border border-blue-400 p-6 rounded-lg cursor-pointer hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">CSV File</h3>
              <p className="text-sm text-gray-500">Structured spreadsheet</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Click to download owners.csv</p>
        </div>
      </div>
      <div ref={printRef} className="space-y-3">
        <div className="flex items-center flex-wrap gap-3">
          {allTemplate?.length > 0 ? (
            allTemplate.map((template: any) => (
              <div key={template.id}>
                {template.id !== "autofill" && (
                  <button
                    className="bg-white border border-blue-400 px-4 py-2 rounded-lg cursor-pointer"
                    onClick={() => {
                      if (template.id.startsWith(template.id)) {
                        const index = Number(template.id.split("_")[1]);
                        setOwnerIndex(index)
                      }
                      setSelected(template.id);
                      setIsModalOpen(true);
                    }}
                  >
                    {template.title}
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No available</p>
          )}
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div
              className="bg-white p-6 rounded-xl   shadow-lg w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto relative"
              ref={modalContentRef}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              {/* file 5======== */}
              <div>
                {selected === "51" && (
                  <F5D6 allData={allData} /> // 1
                )}
                {selected === "52" && (
                  <F5D7 allData={allData} setIsModalOpen={setIsModalOpen} /> // 2
                )}
                {selected === "53" && (
                  <F5D8 allData={allData} /> // 3
                )}
                {selected === "54" && (
                  <F5D9 allData={allData} setIsModalOpen={setIsModalOpen} /> // 4
                )}
                {selected === "55" && (
                  <F5D10 allData={allData} /> // 5
                )}
                {/* {selected === "56" && (
                  <F5D11 allData={allData} /> // 6
                )} */}
                {selected?.startsWith("template56_") && ownerIndex !== null && (
                  <F5D11
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {/* {selected === "57" && (
                  <F5D12 allData={allData} /> // 7
                )} */}
                {selected?.startsWith("template57_") && ownerIndex !== null && (
                  <F5D12
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {selected === "58" && (
                  <F5D13 allData={allData} /> // 8
                )}
                {selected === "59" && (
                  <F5D14 allData={allData} /> // 9
                )}
                {selected === "510" && (
                  <F5D15 allData={allData} /> // 10
                )}
                {selected === "511" && (
                  <F5D16 allData={allData} /> // 11
                )}
                {selected === "512" && (
                  <F5D17 allData={allData} setIsModalOpen={setIsModalOpen} /> // 12
                )}
              </div>
              {/* file 6======== */}
              <div>
                {selected?.startsWith("template1_") && ownerIndex !== null && (
                  <F6D8
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {selected === "62" && (
                  <F6D9 allData={allData} /> // 2
                )}
                {selected === "63" && (
                  <F6D10 allData={allData} /> // 3
                )}
                {selected === "64" && (
                  <F6D13 allData={allData} setIsModalOpen={setIsModalOpen} /> // 4
                )}
                {selected === "65" && (
                  <F6D1 allData={allData} /> // 5
                )}
                {selected === "66" && (
                  <F6D5 allData={allData} setIsModalOpen={setIsModalOpen} /> // 6
                )}
                {selected === "67" && (
                  <F6D6 allData={allData} /> // 7
                )}
                {selected === "68" && (
                  <F6D12 allData={allData} /> // 8
                )}
                {selected === "69" && (
                  <F6D2 allData={allData} setIsModalOpen={setIsModalOpen} /> // 9
                )}
                {selected === "610" && (
                  <F6D14 allData={allData} setIsModalOpen={setIsModalOpen} /> // 10
                )}
                {selected === "611" && (
                  <F6D7 allData={allData} setIsModalOpen={setIsModalOpen} /> // 11
                )}
                {selected === "612" && (
                  <F6D15 allData={allData} setIsModalOpen={setIsModalOpen} /> // 12
                )}
                {selected === "613" && (
                  <F6D3 allData={allData} setIsModalOpen={setIsModalOpen} /> // 13
                )}
                {selected === "614" && (
                  <F6D4 allData={allData} setIsModalOpen={setIsModalOpen} /> // 14
                )}
              </div>
              {/* file 10======== */}
              <div>
                {selected === "101" && (
                  <F10D4 allData={allData} /> // 1
                )}
                {selected === "102" && (
                  <F10D6 allData={allData} /> // 2
                )}
                {selected === "103" && (
                  <F10D7 allData={allData} setIsModalOpen={setIsModalOpen} /> // 3
                )}
                {selected === "104" && (
                  <F10D8 allData={allData} /> // 4
                )}
                {/* {selected === "105" && (
                  <F10D10 allData={allData} /> // 5
                )} */}
                {selected?.startsWith("template105_") && ownerIndex !== null && (
                  <F10D10
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {selected === "106" && (
                  <F10D12 allData={allData} /> // 6
                )}
                {selected === "107" && (
                  <F10D9 allData={allData} /> // 7
                )}
                {selected === "108" && (
                  <F10D11 allData={allData} /> // 8
                )}
                {selected === "109" && (
                  <F10D14 allData={allData} /> // 9
                )}
                {selected === "1010" && (
                  <F10D15 allData={allData} /> // 10
                )}
              </div>
              {/* file 7  */}
              <div>
                {selected === "71" && (
                  <F7D1 allData={allData} /> // 1
                )}
                {selected === "72" && (
                  <F7D2 allData={allData} /> // 2
                )}
                {selected === "73" && (
                  <F7D3 allData={allData} setIsModalOpen={setIsModalOpen} /> // 3
                )}
                {selected === "74" && (
                  <F7D4 allData={allData} /> // 4
                )}
                {selected === "75" && (
                  <F7D5 allData={allData} setIsModalOpen={setIsModalOpen} /> // 5
                )}
                {selected === "76" && (
                  <F7D6 allData={allData} /> // 6
                )}
                {/* {selected === "77" && (
                  <F7D7 allData={allData} /> // 7
                )} */}
                {
                  selected?.startsWith("owner7_") && ownerIndex !== null && (
                    <F7D7
                      allData={allData}
                      ownerIndex={ownerIndex}
                    />
                  )}
                {selected === "78" && (
                  <F7D8 allData={allData} /> // 8
                )}
                {selected === "79" && (
                  <F7D9 allData={allData} /> // 9
                )}
                {selected === "710" && (
                  <F7D10 allData={allData} /> // 10
                )}
                {selected === "711" && (
                  <F7D11 allData={allData} setIsModalOpen={setIsModalOpen} /> // 11
                )}
                {selected === "712" && (
                  <F7D12 allData={allData} setIsModalOpen={setIsModalOpen} /> // 11
                )}
              </div>
              {/* file 14  */}
              <div>
                {selected === "141" && (
                  <F14D1 allData={allData} /> // 1
                )}
                {selected === "142" && (
                  <F14D2 allData={allData} setIsModalOpen={setIsModalOpen} /> // 2
                )}
                {selected === "143" && (
                  <F14D3 allData={allData} /> // 3
                )}
                {selected === "144" && (
                  <F14D4 allData={allData} /> // 4
                )}
                {/* {selected === "145" && (
                  <F14D5 allData={allData} /> // 5
                )} */}
                {selected?.startsWith("owner145_") && ownerIndex !== null && (
                  <F14D5
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {/* {selected === "146" && (
                  <F14D6 allData={allData} /> // 6
                )} */}
                {selected?.startsWith("owner146_") && ownerIndex !== null && (
                  <F14D6
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {selected === "147" && (
                  <F14D7 allData={allData} /> // 7
                )}
                {selected === "148" && (
                  <F14D8 allData={allData} /> // 8
                )}
                {selected === "149" && (
                  <F14D9 allData={allData} /> // 9
                )}
                {selected === "1410" && (
                  <F14D10 allData={allData} /> // 10
                )}
                {selected === "1411" && (
                  <F14D11 allData={allData} /> // 11
                )}
                {selected === "1412" && (
                  <F14D12 allData={allData} /> // 12
                )}
              </div>
              {/* file 2  */}
              <div>
                {selected === "21" && (
                  <F2D1 allData={allData} /> // 1
                )}
                {selected === "22" && (
                  <F2D2 allData={allData} /> // 2
                )}
                {selected === "23" && (
                  <F2D3 allData={allData} setIsModalOpen={setIsModalOpen} /> // 3
                )}
                {selected === "24" && (
                  <F2D4 allData={allData} /> // 4
                )}
                {selected === "25" && (
                  <F2D5 allData={allData} setIsModalOpen={setIsModalOpen} /> // 5
                )}
                {/* {selected === "26" && (
                  <F2D6 allData={allData} /> // 6
                )} */}
                {selected?.startsWith("owner26_") && ownerIndex !== null && (
                  <F2D6
                    allData={allData}
                    ownerIndex={ownerIndex}
                  />
                )}
                {selected === "27" && (
                  <F2D7 allData={allData} /> // 7
                )}
                {selected === "28" && (
                  <F2D8 allData={allData} /> // 8
                )}
              </div>
              {/* file 8  */}
              <div>
                {selected === "81" && (
                  <F8D1 allData={allData} /> // 1
                )}
                {selected === "82" && (
                  <F8D2 allData={allData} setIsModalOpen={setIsModalOpen} /> // 2
                )}
                {/* {selected === "83" && (
                  <F8D3 allData={allData} /> // 3
                )} */}
                {selected?.startsWith("template83_") && ownerIndex !== null && (
                  <F8D3 
                  allData={allData} 
                  ownerIndex={ownerIndex}
                  />
                )}
                {selected === "84" && (
                  <F8D4 allData={allData} /> // 4
                )}
                {selected === "85" && (
                  <F8D5 allData={allData} /> // 5
                )}
                {selected === "86" && (
                  <F8D6 allData={allData} /> // 6
                )}
                {selected === "87" && (
                  <F8D7 allData={allData} setIsModalOpen={setIsModalOpen} /> // 7
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          style={{
            background:
              "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
          }}
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
