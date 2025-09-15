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

import {
    useDownloadTemplatePdfQuery,
    useExeclDownloadTemplateQuery,
    useGetOwnerTemplateQuery,
} from "@/redux/features/templates/allTemplateSlice";

import { FaRegCopy } from "react-icons/fa6";
import { toast } from "sonner";
import F6D8 from "../CreateProject/FinalOverview/f-06/f6D8/page";
import F6D9 from "../CreateProject/FinalOverview/f-06/f6D9/page";
import S4D2 from "../CreateProject/FinalOverview/srv-4t/s4D2/page";
import S4D1 from "../CreateProject/FinalOverview/srv-4t/s4D1/page";
import { FormDataOne } from "./template";
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

const FinalSteps: React.FC<FinalOverviewProps> = ({
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

    // const store = makeStore();
    const [selected, setSelected] = useState<string | null>(null);
    const [projectHexCode, setProjectHexCode] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // modal close click outside
    const modalContentRef = useRef<HTMLDivElement>(null);

    const userData = useSelector((state: any) => state.user.userData);

    console.log(userData, "projectCodeId:", projectCodeId?.result?.projectCode)
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

    const [formData, setFormData] = useState<FormDataOne>({
        recipient: "ydom",
        name: "Name Owner",
        surname: "Surname Owner",
        fatherName: "Fathers name and surname Owner",
        motherName: "Mothers name and surname Owner",
        birthDate: "Born date Owner",
        birthTown: "Born Town owner",
        idNumber: "ID",
        mobile: "mobile",
        town: "Town",
        address: "Address",
        addressNumber: "Number",
        postalCode: "postal code",
        email: "email owner",
        vat: "VAT owner",
        projectDescription: "PROJECT DESCRIPTION",
        date: "8/18/2025"
    });


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
    //     {
    //         id: "template3",
    //         name: "F6D3.pdf",
    //         component: <F6D8 allData={allData} />,
    //     },

    // ]

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

                            {/* file 6======== */}
                            {selected === "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ" && (
                                <S4D1 formData={formData} setFormData={setFormData} />
                            )}
                            {selected ===
                                "ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ" && (
                                    <S4D2 />
                                )}
                        </div>
                    </div>
                )}
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

export default FinalSteps;
