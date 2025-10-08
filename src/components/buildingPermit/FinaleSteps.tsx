


import { RootState } from "@/redux/store";
import { saveAs } from "file-saver";
import { FileSpreadsheet, FileText } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";

import {
    useDownloadTemplatePdfQuery,
    useExeclDownloadTemplateQuery,
    useGetProject2Query,
} from "@/redux/features/templates/allTemplateSlice";

import { FaRegCopy } from "react-icons/fa6";
import { toast } from "sonner";
import S2D1 from "../CreateProject/FinalOverview/srv-2rt/s2D1/page";
import S2D2 from "../CreateProject/FinalOverview/srv-2rt/s2D2/page";
import S2D3 from "../CreateProject/FinalOverview/srv-2rt/s2D3/page";
import S2D4 from "../CreateProject/FinalOverview/srv-2rt/s2D4/page";
import PrimaryButton from "../shared/primaryButton/PrimaryButton";
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
    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    // const projectId = stepByStepData?.projectIdCode?.result?.id;
    const allTempate = stepByStepData?.actionSelection;
    const violations = stepByStepData?.violations;
    const question = stepByStepData?.question;
    const allTemplate = stepByStepData?.selectTemplate;
    const projectCodeId = stepByStepData?.projectIdCode;
    const projectId = stepByStepData?.projectIdCode?.id;

    const { data: allTemplateData } = useGetProject2Query(projectId || "");
    const { data: pdfdownload } = useDownloadTemplatePdfQuery("");
    const { data: execlDownload } = useExeclDownloadTemplateQuery("");

    console.log(question, violations, "===========================>>")

    const allData = allTemplateData?.data || {};
    console.log(allData, "======================allData===============allData")

    // const store = makeStore();
    const [ownerIndex, setOwnerIndex] = useState<number | null>(null)
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

    const handleDownloadPdf = async () => {
        console.log("download clicked");
        try {
            const response = await fetch(`https://api.buildai.gr/generated-files/generated_files_1.zip`);

            if (!response.ok) throw new Error("Network response was not ok");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "generated_pdf_files.zip";
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };


    const handleDownloadExcel = async () => {
        console.log("download clicked");
        try {
            const response = await fetch("https://api.buildai.gr/generated-files/generated_excel_files.zip");

            if (!response.ok) throw new Error("Network response was not ok");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "generated_excel_files.zip"; // 👈 corrected filename
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };




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
                {
                    allTemplate &&
                    allTemplate.find((item: { id: string }) => item.id === "autofill") && (
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
                    )
                }

                {/* fdf */}

                <div
                    onClick={() => handleDownloadPdf()}
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
                    onClick={() => handleDownloadExcel()}
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
                    {
                        allTemplate?.length > 0 ? (
                            allTemplate.map((template: any) => (
                                <div key={template.id}>
                                    {template.id !== "autofill" && (
                                        <button
                                            className="bg-white px-4 py-2 rounded-lg cursor-pointer"
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
                        )
                    }
                </div>
                {/* Modal */}
                {isModalOpen && allData && (
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

                            {selected === "template_1" && (
                                <S2D1 allData={allData} />
                            )}
                            {selected ===
                                "template_2" && (
                                    <div>
                                        <S2D2 allData={allData} question={question} violations={violations} />
                                    </div>
                                )}
                            {selected?.startsWith("template3_") && ownerIndex !== null && (
                                <S2D3
                                    allData={allData}
                                    owner={allData?.owners?.[ownerIndex]}
                                />
                            )}
                            {selected?.startsWith("template4_") && ownerIndex !== null && (
                                <S2D4
                                    allData={allData}
                                    ownerIndex={ownerIndex}
                                    violations={violations}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-end w-fit ml-auto">
                <PrimaryButton
                    onClick={onComplete}
                >
                    Save & Continue
                </PrimaryButton>
            </div>
        </div>
    );
};

export default FinalSteps;

