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
import F5D4 from "./f-05/f5D4/page";
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

import {
  useDownloadTemplatePdfQuery,
  useExeclDownloadTemplateQuery,
  useGetOwnerTemplateQuery,
} from "@/redux/features/templates/allTemplateSlice";

import F6D11 from "./f-06/f6D11/page";
import { setActionSelectName } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { toast } from "sonner";
import { FaRegCopy, FaRegCopyright } from "react-icons/fa6";
import F5D5 from "./f-05/f5D5/page";
import F6D12 from "./f-06/f6D12/page";
import { ProjectResponse } from "./shared/allDataType";
import PdfZipDownloader from "@/utility/PdfZipDownloader";
import F6D5 from "./f-06/f6D5/page";
import F6D6 from "./f-06/f6D6/page";

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

  console.log(stepByStepData)
  console.log(stepByStepData?.projectIdCode?.id)
  console.log(projectId)

  const { data: allTemplateData } = useGetOwnerTemplateQuery(projectId || "");
  const { data: pdfdownload } = useDownloadTemplatePdfQuery("");
  const { data: execlDownload } = useExeclDownloadTemplateQuery("");

  const allData = allTemplateData?.data || {};
  console.log(allTemplateData, "===============================");
  console.log(allData, "all data for all template===================================================================")


  console.log("pdf", pdfdownload);
  console.log("execl", execlDownload);
  // console.log(dataAllFIled, "======================dataAllFiled");

  console.log("======================allTemplate,", allTemplate);

  const buildingMods = subCategoryData["building-modifications"] || [];
  const energy = subCategoryData["energy-systems"] || [];
  const fencing = subCategoryData["fencing"] || [];
  const landscaping = subCategoryData["landscaping-2"] || [];
  const operational = subCategoryData["operational-space"] || [];
  const property = subCategoryData["property-documentation"] || [];
  const small = subCategoryData["small-construction"] || [];

  const store = makeStore();
  const [selected, setSelected] = useState<string | null>(null);
  const [projectHexCode, setProjectHexCode] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // modal close click outside
  const modalContentRef = useRef<HTMLDivElement>(null);

  const userData = useSelector(
    (state: RootState) => state.user.userData as UserData | null
  );

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
    userData?.hexToken + `-${projectCodeId?.projectCode}`;

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

  const templates = [
    {
      id: "template3",
      name: "F6D3.pdf",
      component: <F6D8 allData={allData} />,
    },

  ]

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

        {/* fdf */}

        <div
          onClick={handleDownloadPdf}
          className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
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
          className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
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
                <button
                  className="bg-white px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    setSelected(template.title);
                    setIsModalOpen(true);
                  }}
                >
                  {template.title}
                </button>
              </div>
            ))
          ) : (
            <p>No  available</p>
          )}
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div
              className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto relative"
              ref={modalContentRef}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              {/* building-modifications */}
              {/* file 1======== */}
              {/* {selected === "ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ_4495_2017" && (
                <F1D1 allData={allData} />
              )}
              {selected === "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΤΗΣΗΣ" && (
                <F1D2 allData={allData} />
              )}
              {selected === "ΣΑΥ_ΦΑΥ" && <F1D3 allData={allData} />}
              {selected === "ΣΔΑ ΕΡΓΟΥ" && <F1D4 allData={allData} />}
              {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_ΑΛΛΑΓΗ ΧΡΗΣΗΣ_15" && (
                <F1D5 allData={allData} />
              )}
              {selected === "ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ_16" && (
                <F1D6 allData={allData} />
              )}
              {selected === "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ" && (
                <F1D7 allData={allData} />
              )}
              {selected === "ΥΔ ΜΗ ΥΠΑΡΞΗΣ ΑΕΚΚ_ΣΔΑ" && (
                <F1D8 allData={allData} />
              )}
              {selected === "ΥΔ ΦΕΡΟΝΤΑ ΟΡΓΑΝΙΣΜΟΥ" && (
                <F1D9 allData={allData} />
              )} */}

              {/* file 2======= */}
              {/* {selected === "Άρθρο 4, ΥΑ ΦΕΚ Β' 1843_2020" && (
                <F2D1 allData={allData} />
              )}
              {selected === "ΑΝΑΚΑΤΑΣΚΕΥΗ ΣΤΕΓΗΣ" && <F2D2 allData={allData} />}
              {selected === "ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ_23" && (
                <F2D3 allData={allData} />
              )} */}

              {/* energy-systems  */}
              {/* file 3======== */}
              {/* {selected === "ΑΝΤΛΙΑ ΘΕΡΜΟΤΗΤΑΣ" && <F3D1 allData={allData} />}
              {selected === "άρθρο 4 της ΥΑ ΦΕΚ Β’ 1843_2020" && (
                <F3D2 allData={allData} />
              )}
              {selected === "άρθρο 4 της ΥΑ ΦΕ" && <F3D3 allData={allData} />}
              {selected === "ΛΕΒΗΤΑΣ Φ.Α" && <F3D4 allData={allData} />}
              {selected === "ΥΔ ΑΝΑΛΗΨΗΣ ΕΠΙΒΛΕΨΗΣ ΕΡΓΟΥ" && (
                <F3D5 allData={allData} />
              )}
              {selected === "ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ" && (
                <F3D6 allData={allData} />
              )} */}

              {/* file 4======== */}
              {/* {selected === "ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ" && (
                <F4D1 allData={allData} />
              )}
              {selected === "_ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ" && (
                <F4D2 allData={allData} />
              )}
              {selected ===
                "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΤΗΣΗΣ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ" && (
                <F4D3 allData={allData} />
              )}
              {selected ===
                "_ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ" && (
                <F4D6 allData={allData} />
              )}
              {selected ===
                "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ" && (
                <F4D7 allData={allData} />
              )}
              {selected === "_ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ" && (
                <F4D8 allData={allData} />
              )}
              {selected === "_ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ" && (
                <F4D9 allData={allData} />
              )}
              {selected === "_ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ" && (
                <F4D11 allData={allData} />
              )} */}

              {/* file 5======== */}
              {/* {selected === "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΣΧΕΔΙΩΝ ΟΨΕΩΝ" && (
                <F5D1 allData={allData} />
              )}
              {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ" && (
                <F5D2 allData={allData} />
              )}
              {selected === "_ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ_53" && (
                <F5D3 allData={allData} />
              )}
              {selected === "ΦΕΡΟΝΤΑΣ ΟΡΓΑΝΙΣΜΟΣ_ΔΙΑΤΑΞΕΙΣ" && (
                <F5D4 allData={allData} />
              )}

              {selected === "ΠΙΝΑΚΑΣ 3_" && (
                <F5D5 allData={allData} />
              )} */}

              {/* file 6======== */}
              {selected === "YΔ Ανάθεσης Ιδιοκτήτη" && (
                <F6D1 allData={allData} />
              )}
              {selected ===
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ενεργητικής Πυροπροστασίας" && (
                  <F6D2 allData={allData} />
                )}
              {selected ===
                "Ενημερωτικό Σημείωμα μη απαίτησης Συναίνεσης Συνιδιοκτητών" && (
                  <F6D3 allData={allData} />
                )}
              {selected === "YΔ Φέροντα Οργανισμού" && (
                <F6D4 allData={allData} />
              )}
              {selected === "YΔ Συνιδιοκτητών" && (
                <F6D7 allData={allData} />
              )}
              {selected === "Τεχνική Έκθεση / Τεχνική Περιγραφή Έργου" && (
                <F6D8 allData={allData} />
              )}
              {selected === "Αναλυτικός Προϋπολογισμός Εργασιών" && (
                <F6D9 allData={allData} />
              )}
              {selected === "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)" && (
                <F6D10 allData={allData} />
              )}
              {selected === "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)" && (
                <F6D11 allData={allData} />
              )}
              {selected === "ylSUSNZTkC0rKv46VI1lKk0Q5_612" && (
                <F6D12 allData={allData} />
              )}

              {/* file 7======== */}
              {/* {selected ===
                "ΒΕΒΑΙΩΣΗ_ΥΔ ΜΗΧΑΝΙΚΟΥ ΓΙΑ ΤΗΡΗΣΗ ΟΨΕΩΝ ΚΑΙ ΠΟΛΕΟΔΟΜΙΚΩΝ ΔΙΑΤΑΞΕΩΝ" && (
                <F7D1 allData={allData} />
              )}
              
              {selected ===
                "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΤΗΣΗΣ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ_" && (
                <F7D2 allData={allData} />
              )}
              {selected === "_ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_73" && (
                <F7D3 allData={allData} />
              )}
              {selected === "_ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_74" && (
                <F7D4 allData={allData} />
              )}
              {selected === "_ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ_" && (
                <F7D5 allData={allData} />
              )}  */}

              {/* file 8======== */}
              {/* {selected === "_ΚΟΠΗ ΠΕΥΚΩΝ" && <F8D1 allData={allData} />}
              {selected === "ΥΔ ΜΗ ΥΠΑΡΞΗΣ ΑΕΚΚ_ΣΔΑ_" && (
                <F8D2 allData={allData} />
              )}
              {selected === "ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ_" && (
                <F8D3 allData={allData} />
              )} */}

              {/* file 9======== */}
              {/* {selected === "ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΥΠΟΛΟΓΙΣΜ" && (
                <F9D1 allData={allData} />
              )}
              {selected === "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΤΗΣ" && (
                <F9D2 allData={allData} />
              )}
              {selected === "Ιδιωτική Σύμβαση " && <F9D3 />} */}

              {/* file 10=== */}
              {selected === "ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΣΧΕΔΙΩΝ ΟΨΕΩΝ_" && (
                <F10D1 allData={allData} />
              )}
              {/* {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_102" && (
                <F10D2 allData={allData} />
              )} */}
              {/* {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ_ ΦΕΡΟΝΤΑΣ ΟΡ" && (
                <F10D3 allData={allData} />
              )} */}

              {/* file 11  */}
              {/* {selected === "ΠΕΡΙΤΟΙΧΗΣΗΣ Π" && <F11D1 allData={allData} />}
              {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ ΓΙΑ ΑΠΟΣΤΑΣΗ ΑΝΩ ΤΩΝ" && (
                <F11D2 allData={allData} />
              )} */}

              {/* file 12  */}
              {/* {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_121" && (
                <F12D1 allData={allData} />
              )}
              {selected === "ΣΤΕΓΕΣ" && <F12D2 allData={allData} />} */}

              {/* file 13  */}
              {/* {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_ΠΙΣΙΝΑ COMPACT ΕΩΣ" && (
                <F13D1 allData={allData} />
              )}
              {selected === "ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ_132" && (
                <F13D2 allData={allData} />
              )}
              {selected === "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ_133" && (
                <F13D3 allData={allData} />
              )}
              {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ ΓΙΑ Η_Μ ΑΣΦΑΛΕΙΑ" && (
                <F13D4 allData={allData} />
              )}
              {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ ΓΙΑ ΣΤΑΤΙΚΗ ΑΣΦΑΛΕΙΑ" && (
                <F13D5 allData={allData} />
              )}
              {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ_άρθρου 4 ΥΑ ΦΕΚ Β" && (
                <F13D6 allData={allData} />
              )} */}

              {/* file 14  */}
              {/* {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_141" && (
                <F14D1 allData={allData} />
              )}
              {selected === "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ_142" && (
                <F14D2 allData={allData} />
              )}
              {selected === "ΥΔ ΜΗΧΑΝΙΚΟΥ_ΣΤΑΤΙΚΟΣ ΦΟΡΕΑΣ ΚΤΙΡΙΟΥ" && (
                <F14D3 allData={allData} />
              )} */}

              {/* file 15  */}
              {/* {selected === "ΙΚΡΙΩΜΑΤΑ" && <F15D1 allData={allData} />} */}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <PdfZipDownloader templates={templates} zipName="Invoices.zip" />
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
