
// // import F5D2 from '@/components/CreateProject/FinalOverview/f-05/f5D2/page'
// // import F5D3 from '@/components/CreateProject/FinalOverview/f-05/f5D3/page'
// // import F5D4 from '@/components/CreateProject/FinalOverview/f-05/f5D4/page'
// // import F5D6 from '@/components/CreateProject/FinalOverview/f-05/f5D6/page'
// // import F5D7 from '@/components/CreateProject/FinalOverview/f-05/f5D7/page'
// // import F5D8 from '@/components/CreateProject/FinalOverview/f-05/f5D8/page'
// // import F5D9 from '@/components/CreateProject/FinalOverview/f-05/f5D9/page'
// // import F5D10 from '@/components/CreateProject/FinalOverview/f-05/f5D10/page'
// // import F5D11 from '@/components/CreateProject/FinalOverview/f-05/f5D11/page'
// // import F5D12 from '@/components/CreateProject/FinalOverview/f-05/f5D12/page'
// // import F5D13 from '@/components/CreateProject/FinalOverview/f-05/f5D13/page'
// // import F5D14 from '@/components/CreateProject/FinalOverview/f-05/f5D14/page'
// // import F5D15 from '@/components/CreateProject/FinalOverview/f-05/f5D15/page'
// // import F5D16 from '@/components/CreateProject/FinalOverview/f-05/f5D16/page'
// // import F5D17 from '@/components/CreateProject/FinalOverview/f-05/f5D17/page'

// import F7D1 from '@/components/CreateProject/FinalOverview/f-07/f7D1/page'
// import F7D2 from '@/components/CreateProject/FinalOverview/f-07/f7D2/page'

// function Test(allData: any) {
//   return (
//     <div>
//       {/* <F5D2 allData={allData}/>
//         <F5D3 allData={allData}/>
//         <F5D4 allData={allData}/> */}

//       {/* <F5D6 allData={allData}/>
//         <F5D7 allData={allData}/>
//         <F5D8 allData={allData}/>
//         <F5D9 allData={allData}/>
//         <F5D10 allData={allData}/>
//         <F5D11 allData={allData}/>
//         <F5D12 allData={allData}/>
//         <F5D13 allData={allData}/>
//         <F5D14 allData={allData}/>
//         <F5D15 allData={allData}/>
//         <F5D16 allData={allData}/>
//         <F5D17 allData={allData}/> */}

//       {/* <F7D1 allData={allData}/> */}
//       <F7D2 allData={allData} />


//     </div>
//   )
// }


// export default Test



"use client"

import { useState } from "react"
import { format } from "date-fns"
// for editing 
import { useForm, Controller } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice"

interface FormData {
    projectDescription: string;
    propertyAddress: string;
    propertyPlace: string;
    propertyPostalCode: string;
    owners: {
        firstName: string;
        lastName: string;
    }[];
}

interface allDataProps {
    owners: any[]
    allDescriptionTasks: any[]
    technical_description: string
    horizontalPropertyName: string
    projectDescription: string
    id: string
    createdById: string
    propertyPostalCode: string
    propertyAddress: string
    propertyPlace: string
    createdAt: string
}

type F6D5Props = {
    allData: any;
    setIsModalOpen: (value: boolean) => void;
};
// end editing 

interface allDataProps {
    owners: any[];
    allDescriptionTasks: any[]
    projectDescription: string;
    horizontalPropertyName: string
    createdAt: string
    municipalityCommunity: string
}

export default function F6D4({ allData, setIsModalOpen }: F6D5Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners || []
    const allDescriptionTasks = allData?.allDescriptionTasks || {};
    const { id, createdById, serviceId, projectDescription, propertyPostalCode, propertyPlace, propertyAddress, createdAt, horizontalPropertyName, propertyNumber, municipalityCommunity } = allData || {}
    console.log(allData, "alldata========")

    const [updateProject] = useUpdateProjectMutation()
    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature
    // for editing data 
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            projectDescription: allData?.projectDescription || "",
            propertyAddress: allData?.propertyAddress || "",
            propertyPlace: allData?.propertyPlace || "",
            propertyPostalCode: allData?.propertyPostalCode || "",
            owners: [
                {
                    firstName: allData?.owners?.[0]?.firstName || "",
                    lastName: allData?.owners?.[0]?.lastName || "",
                },
            ],
        },
    })

    const onSubmit = async (data: FormData) => {
        console.log("Updated Data:", data)
        const addNewData = {
            serviceId: serviceId,
            ...data
        }
        const formData = new FormData()
        formData.append("data", JSON.stringify(addNewData))

        try {
            const responsive = await updateProject({ projectId: id, userId: createdById, formData }).unwrap()
            console.log(responsive)
        } catch (error) {
            console.log(error)
        }

        reset()
        setIsEditModalOpen(false)
        setIsModalOpen(false)
    }

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white arial">
            <div className="text-right -mt-9">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΣΗΣ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm text-center">{projectDescription || "N/A"}</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">
                        {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                        ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                        ΤΚ {propertyPostalCode || "N/A"}
                    </h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className="text-sm">Ιδιοκτήτης:</span>
                    <div className="flex items-center justify-center gap-2">
                        {
                            owner?.map((e: any, i: number) => (
                                <h3 key={i} className="text-sm">
                                    {e.firstName || e.first_name || "N/A"} {e.lastName || e.last_name || "N/A"}
                                </h3>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <div>
                    <span className="font-semibold">

                        <span className="mr-1">Στο ακίνητο {horizontalPropertyName || "N/A"} </span>
                    </span>
                    επί της οδού
                    <span className="">
                        <span className="ml-1">{propertyAddress || "N/A"} </span>{propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                        ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                        <span className="mr-1">ΤΚ {propertyPostalCode || "N/A"}</span>
                    </span>
                    πρόκειται να <br />εκτελεσθούν οι παρακάτω εργασίες :
                </div>
            </div>

            <div className="space-y-6 ml-10">

                {Array.isArray(allDescriptionTasks) &&
                    allDescriptionTasks.map((task: any, index: number) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold">● {task?.id}</h3>
                            <p className="text-sm">{task?.description}</p>
                        </div>
                    ))
                }
                <div>
                    <p className="text-sm mb-6">
                        <span className="font-bold">Βάσει των ισχυουσών πολεοδομικών και αστικών διατάξεων</span> για τις προβλεπόμενες εργασίες που πρόκειται να υλοποιηθούν στη συγκεκριμένη ιδιοκτησία, <span className="font-bold">δεν απαιτείται η συναίνεση των λοιπών συνιδιοκτητών της πολυκατοικίας.</span></p>
                    <p className="text-sm mb-6">Ο λόγος είναι ότι:
                    </p>
                    <p className="text-sm">● Το σύνολο των εργασιών πρόκειται να εκτελεστεί αποκλειστικά εντός του περιγράμματος της ιδιοκτησίας, χωρίς επέμβαση σε κοινόχρηστους ή κοινόκτητους χώρους.
                    </p>
                    <p className="text-sm">● Δεν υφίσταται επέμβαση σε στατικά, φέροντα ή κοινόχρηστα δομικά στοιχεία του κτιρίου.
                    </p>
                    <p className="text-sm mb-6">● Δεν πραγματοποιούνται επεμβάσεις σε δίκτυα ή υποδομές που εξυπηρετούν άλλες ιδιοκτησίες (όπως δίκτυα θέρμανσης, ύδρευσης ή πυρασφάλειας κοινόχρηστων χώρων).
                    </p>
                    <p className="text-sm mb-6 font-bold underline">Συνεπώς, δεν απαιτείται σύγκληση ή απόφαση γενικής συνέλευσης ή άλλη μορφή συναίνεσης των υπολοίπων συνιδιοκτητών, για την εκτέλεση των εν λόγω εργασιών.
                    </p>
                    <p className="text-sm">Η παρούσα δήλωση αποτελεί στοιχείο τεκμηρίωσης για τον φάκελο του έργου, σύμφωνα και με το ισχύον νομικό πλαίσιο (Ν. 4495/2017).</p>
                </div>

                {/* {/* Signature Section */}
                <div className="mt-6 text-right flex items-center justify-center p-5">
                    <div className="max-w-[300px]">

                        <div className="text-center">
                            <p>Ημερομηνία :</p>
                            <p>{createdAt && format(new Date(createdAt), "dd/MM/yyyy")}</p>
                        </div>
                        <div className="">
                            <h3 className="text-center mb-4">Ο ΜΗΧΑΝΙΚΟΣ</h3>
                            <div className="flex items-center justify-end p-4">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* EDIT MODAL */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
                            onClick={() => setIsEditModalOpen(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-lg font-bold mb-4">✍️ Edit Data</h2>
                        <div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 p-4 border rounded-lg bg-white shadow-md"
                            >
                                {/* Project */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Έργο *:</label>
                                    <input
                                        defaultValue={projectDescription || "Project Description "}
                                        type="text"
                                        {...register("projectDescription", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Θέση*:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            defaultValue={propertyAddress || "propertyAddress"}
                                            {...register("propertyAddress", { required: "Address is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPlace || "propertyPlace"}
                                            {...register("propertyPlace", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPostalCode || "propertyPostalCode"}
                                            {...register("propertyPostalCode", { required: "Postal code is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                    </div>
                                </div>
                                {/* Address */}
                                {/* First Name */}
                                <Controller
                                    name="owners.0.firstName"
                                    control={control}
                                    rules={{ required: "First name is required" }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="First Name"
                                            className="border p-2 rounded text-sm w-full"
                                        />
                                    )}
                                />
                                {/* Last Name */}
                                <Controller
                                    name="owners.0.lastName"
                                    control={control}
                                    rules={{ required: "Last name is required" }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Last Name"
                                            className="border p-2 rounded text-sm w-full"
                                        />
                                    )}
                                />

                                {/* Submit */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


























// import { RootState } from "@/redux/store";
// import { saveAs } from "file-saver";
// import { FileSpreadsheet, FileText } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";

// // import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";

// import {
//   useDownloadTemplatePdfQuery,
//   useExeclDownloadTemplateQuery,
//   useGetProject2Query,
// } from "@/redux/features/templates/allTemplateSlice";

// import { FaRegCopy } from "react-icons/fa6";
// import { toast } from "sonner";
// import PrimaryButton from "../shared/primaryButton/PrimaryButton";
// import { FormDataOne, FormDataTwo } from "./template";
// import S2D1 from "../CreateProject/FinalOverview/srv-2rt/s2D1/page";
// import S2D2 from "../CreateProject/FinalOverview/srv-2rt/s2D2/page";
// import S2D3 from "../CreateProject/FinalOverview/srv-2rt/s2D3/page";

// export interface UserData {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   profilePic?: string;
//   isVerified?: boolean;
//   role?: "ENGINEER" | "ADMIN" | "USER" | string;
//   status?: "ACTIVE" | "INACTIVE" | "PENDING" | string;
//   teeRegistration?: string;
//   vatNumber?: string;
//   hexToken?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// interface Owner {
//   id: string;
//   firstName: string;
//   surname: string;
//   fatherName: string;
//   vatNo: string;
// }

// interface FinalOverviewProps {
//   files: File[];
//   extractedData: any;
//   selectedOwners: Owner[];
//   selectedActions: string[];
//   onComplete: () => void;
// }

// const FinalSteps: React.FC<FinalOverviewProps> = ({
//   files,
//   extractedData,
//   selectedOwners,
//   selectedActions,
//   onComplete,
// }) => {
//   const printRef = React.useRef(null);
//   const stepByStepData: any = useSelector((state: RootState) => state.aiData);
//   const allTemplate = stepByStepData?.selectTemplate;
//   const violations = stepByStepData?.violations;
//   const question = stepByStepData?.question;
//   const projectCodeId = stepByStepData?.projectIdCode;
//   const projectId = stepByStepData?.projectIdCode?.id;

//   const { data: allTemplateData } = useGetProject2Query(projectId || "");
//   useDownloadTemplatePdfQuery("");
//   useExeclDownloadTemplateQuery("");

//   const allData = allTemplateData?.data || {};
//   console.log(allData, "=====================all data====================")

//   const [ownerIndex, setOwnerIndex] = useState<number | null>(null);
//   const [selected, setSelected] = useState<string | null>(null);
//   const [projectHexCode, setProjectHexCode] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const modalContentRef = useRef<HTMLDivElement>(null);

//   const userData = useSelector((state: any) => state.user.userData);

//   const downloadCSV = () => {
//     const headers = ["First Name", "Surname", "Father Name", "VAT No"];
//     const rows = selectedOwners.map((owner) =>
//       [owner.firstName, owner.surname, owner.fatherName, owner.vatNo].join(",")
//     );

//     const csvContent = [headers.join(","), ...rows].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "owners.csv");
//   };

//   const projectAndUserHexCode =
//     userData?.hexToken + `-${projectCodeId?.result?.projectCode}`;

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(projectAndUserHexCode);
//       toast.success("Successfully copied! Use this ID in your extension.");
//       setProjectHexCode(projectAndUserHexCode);
//     } catch (err) {
//       console.error("Copy failed:", err);
//     }
//   };

//   const handleDownloadPdf = async () => {
//     try {
//       const response = await fetch(
//         `https://api.buildai.gr/generated-files/generated_files_1.zip`
//       );
//       if (!response.ok) throw new Error("Network response was not ok");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "generated_pdf_files.zip";
//       document.body.appendChild(link);
//       link.click();

//       link.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Download failed:", error);
//     }
//   };

//   const handleDownloadExcel = async () => {
//     try {
//       const response = await fetch(
//         "https://api.buildai.gr/generated-files/generated_excel_files.zip"
//       );
//       if (!response.ok) throw new Error("Network response was not ok");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "generated_excel_files.zip";
//       document.body.appendChild(link);
//       link.click();

//       link.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Download failed:", error);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         modalContentRef.current &&
//         !modalContentRef.current.contains(event.target as Node)
//       ) {
//         setIsModalOpen(false);
//       }
//     };

//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Final Overview</h1>
//         <p className="text-gray-600 text-lg">Preview & download your files</p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {allTemplate &&
//           allTemplate.find((item: { id: string }) => item.id === "autofill") && (
//             <div
//               onClick={handleCopy}
//               className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
//                   <FaRegCopy className="w-6 h-6 text-yellow-600" />
//                 </div>
//                 <div className="relative">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Auto-Fill Government Form
//                   </h3>
//                   <p className="text-sm text-gray-500">User and Project ID</p>
//                   {projectHexCode && (
//                     <p className="text-gray-600 text-sm mt-2 absolute left-0 top-12">
//                       <button className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
//                         {`Id: ${projectHexCode}`}
//                       </button>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//         <div
//           onClick={handleDownloadPdf}
//           className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//               <FileText className="w-6 h-6 text-red-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">Pdf File</h3>
//               <p className="text-sm text-gray-500">Download pdf</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Click to download document.docx
//           </p>
//         </div>

//         <div
//           onClick={handleDownloadExcel}
//           className="bg-white border border-gray-300 p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//               <FileSpreadsheet className="w-6 h-6 text-green-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">CSV File</h3>
//               <p className="text-sm text-gray-500">Structured spreadsheet</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">Click to download owners.csv</p>
//         </div>
//       </div>

//       {/* Template buttons */}
//       <div ref={printRef} className="space-y-3">
//         <div className="flex items-center flex-wrap gap-3">
//           {allTemplate?.length > 0 ? (
//             allTemplate.map((template: any) => (
//               <div key={template.id}>
//                 {template.id !== "autofill" && (
//                   <button
//                     className="bg-white px-4 py-2 rounded-lg cursor-pointer"
//                     onClick={() => {
//                       if (template.id.startsWith(template.id)) {
//                         const index = Number(template.id.split("_")[1]);
//                         setOwnerIndex(index); //
//                         console.log("template id=======================:", template.id)
//                         console.log("Owner Index Setzx=================:", index);
//                       }
//                       setSelected(template.id);
//                       setIsModalOpen(true);
//                     }}
//                   >
//                     {template.title}
//                   </button>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No available</p>
//           )}
//         </div>

//         {/* Modal */}
//         {isModalOpen && allData && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div
//               className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto relative"
//               ref={modalContentRef}
//             >
//               {/* Close Button */}
//               <button
//                 className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 ✕
//               </button>

//               {selected === "template_1" && <S2D1 allData={allData} />}
//               {selected === "template_2" && (
//                 <S2D2
//                   allData={allData}
//                   question={question}
//                   violations={violations}
//                 />
//               )}

//               {selected?.startsWith("template3_") && ownerIndex !== null && (
//                 <S2D3
//                   allData={allData}
//                   owner={allData?.owners?.[ownerIndex]}
//                 />
//               )}
//               {selected?.startsWith("template4_") && ownerIndex !== null && (
//                 <S2D3
//                   allData={allData}
//                   owner={allData?.owners?.[ownerIndex]}
//                 />
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex justify-end w-fit ml-auto">
//         <PrimaryButton onClick={onComplete}>Save & Continue</PrimaryButton>
//       </div>
//     </div>
//   );
// };

// export default FinalSteps;





