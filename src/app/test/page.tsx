
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

import { useState } from "react";
import { format } from "date-fns"
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

interface FormInputs {
    bornDate?: string;
    bornTown?: string;
    email?: string;
    engVatNumber?: string;
    fatherName?: string;
    firstName?: string;
    idCardNumber?: string;
    lastName?: string;
    motherName?: string;
    phone?: string;
    postalCode?: string;
    signature?: string;
    streetAddress?: string;
    streetNumber?: string;
    town?: string;
    projectDescription?: string;
    ydom?: string;
    serviceId?: string;
}
// end editing 


interface allDataProps {
    engineers: any[];
    projectDescription?: string;
    ydom?: string;
    propertyPostalCode?: string;
    propertyAddress?: string;
    propertyPlace?: string;
    id: string;
    createdById: string;
    serviceId: string;
    createdAt: string;
}



export default function F6D10({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwnerIndex, setSelectedOwnerIndex] = useState<number | null>(null);

    const engineers = Array.isArray(allData?.engineers) ? allData.engineers : [];
    const projectDescription = allData?.projectDescription || "";
    const { ydom } = allData || {};
    const { propertyAddress, propertyPlace, propertyPostalCode, id, createdById, serviceId, createdAt } = allData || {};


    const [updateProject] = useUpdateProjectMutation()
    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature
    // for editing data 
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInputs>({})

    // Submit handler
    const onSubmit = async (data: FormInputs) => {
        if (selectedOwnerIndex === null) return;

        // old owner copy
        const updatedOwners = [...allData.engineers];

        //    owner replace of old owner 
        updatedOwners[selectedOwnerIndex] = {
            ...updatedOwners[selectedOwnerIndex],
            ...data
        };

        // make formData 
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            engineers: updatedOwners,
            projectDescription: data.projectDescription || allData.projectDescription,
            ydom: data.ydom || allData.ydom,
            serviceId: serviceId
        }));

        try {
            await updateProject({
                projectId: id,
                userId: createdById,
                formData: formData,
            }).unwrap()

            reset();
            setIsEditModalOpen(false)
            setSelectedOwnerIndex(null)

        } catch (error) {
            console.error("Update failed", error)
        }

    }

    return (
        <div className="arial">
            {engineers.length > 0 ? (engineers?.map((engineer: any, index: number) => (
                <div className="max-w-[796px] mx-auto bg-white">
                    <div className="text-right -mt-3">
                        <button
                            className="px-4 py-1"
                            onClick={() => {
                                setSelectedOwnerIndex(index);
                                setIsEditModalOpen(true);
                            }}
                        >
                            <FaRegEdit className="text-black text-2xl cursor-pointer" />
                        </button>
                    </div>
                    {/* Header with coat of arms */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/templateLogo/templateLogo.jpg" alt="Template Logo" />
                        </div>
                        <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
                        <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
                    </div>

                    {/* Subtitle */}
                    <div className="text-center mb-6 text-sm">
                        <p>
                            Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να ελεγχθεί με βάση το αρχείο άλλων
                            υπηρεσιών
                        </p>
                        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
                    </div>

                    {/* Form table */}
                    <div className="border border-gray-400">
                        {/* ΠΡΟΣ row */}
                        <div className="border-b border-gray-400 bg-gray-50">
                            <div className="flex">
                                <div className="w-20 p-2 border-r border-gray-400 font-bold text-sm">ΠΡΟΣ(1):</div>
                                <div className="flex-1 p-2  font-bold">{ydom || "N/A"}</div>
                            </div>
                        </div>

                        {/* Name Owner row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                <div className="w-40 p-2 border-r border-gray-400  font-bold">{engineer?.firstName || "N/A"}</div>
                                <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                <div className="flex-1 p-2  font-bold">{engineer?.lastName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Father's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.fatherName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.motherName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth date row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.bornDate && format(new Date(engineer?.bornDate), "dd/MM/yyyy") || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth town row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.bornTown || "N/A"}</div>
                            </div>
                        </div>

                        {/* ID and mobile row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                <div className="w-72 p-2 border-r border-gray-400 font-bold">{engineer?.idCardNumber || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.phone || "N/A"}</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-50 p-2 border-r border-gray-400 font-bold ">{engineer?.town || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-50 p-2 border-r border-gray-400 font-bold ">{engineer?.streetAddress || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-12 p-2 border-r border-gray-400 font-bold ">{engineer?.streetNumber || "N/A"}</div>
                                <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                <div className="w-25 p-2 font-bold">{engineer?.postalCode || "N/A"}</div>
                            </div>
                        </div>

                        {/* Contact details row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αρ. Τηλεομοιότυπου (Fax):</div>
                                <div className="flex-1 p-2">
                                    <div className="text-sm">
                                        <div>Δ/νση</div>
                                        <div>Ηλεκτρ.</div>
                                        <div>Ταχυδρομ</div>
                                        <div>ίου (Email):</div>
                                    </div>
                                </div>
                                <div className=" p-2 underline ">{engineer?.email || "N/A"}</div>
                            </div>
                        </div>

                        {/* VAT row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                                <div className="w-72 p-2 font-bold">{engineer?.engVatNumber || "N/A"}</div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                            </p>

                            <p className=" font-bold">για το οικοδομικό έργο με τίτλο :</p>
                            <p className=" mb-6">{projectDescription || "N/A"}</p>
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="space-y-4 text-sm m p-4">
                            <p>επί της οδού {propertyAddress || "N/A"}, {propertyPlace || "N/A"} , {propertyPostalCode || "N/A"}</p>
                            <p>
                                από την ανάλυση του συνόλου των προβλεπόμενων εργασιών προκύπτει <span className="font-bold">ότι δεν πραγματοποιούνται επεμβάσεις σε φέροντα στοιχεία του οργανισμού του κτιρίου.</span>
                                Οι εργασίες περιορίζονται αποκλειστικά σε μη φέροντα στοιχεία και δεν επηρεάζουν καθ’ οποιονδήποτε τρόπο την ευστάθεια, φέρουσα ικανότητα ή δομική λειτουργία του κτιρίου.
                                Η παρούσα δήλωση τεκμηριώνεται σύμφωνα με τις διατάξεις του άρθρου 29 του Ν.4495/2017.
                            </p>
                        </div>

                        {/* Signature section */}
                        <div className="flex justify-end">
                            <div className="flex justify-end p-4">
                                <div className="text-right space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Ημερομηνία :</span>
                                        <span className="text-sm font-medium">{createdAt && format(new Date(createdAt), "dd/MM/yyyy")}</span>
                                    </div>
                                    <div className="text-sm mt-8 text-center">
                                        <div>( Υπογραφή )</div>
                                        <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* signature  */}
                        <div className="flex items-center justify-end p-4">
                            <img src={signature} alt="" />
                        </div>
                        <div className="text-xs p-6">
                            <p> (1) Αναγράφεται από τον ενδιαφερόμενο πολίτη ή Αρχή ή η Υπηρεσία του δημόσιου τομέα, που απευθύνεται η αίτηση.</p>
                            <p>(2) Αναγράφεται ολογράφως.</p>
                            <p> (3) «Όποιος εν γνώσει του δηλώνει ψευδή γεγονότα ή αρνείται ή αποκρύπτει τα αληθινά με έγγραφη υπεύθυνη δήλωση του άρθρου 8 τιμωρείται με φυλάκιση τουλάχιστον τριών μηνών. Εάν ο υπαίτιος αυτών των πράξεων σκόπευε να προσπορίσει στον εαυτόν του ή σε άλλον περιουσιακό όφελος βλάπτοντας τρίτον ή σκόπευε να βλάψει άλλον, τιμωρείται με κάθειρξη μέχρι 10 ετών.</p>
                            <p>(4) Σε περίπτωση ανεπάρκειας χώρου η δήλωση συνεχίζεται στην πίσω όψη της και υπογράφεται από τον δηλούντα ή την δηλούσα.</p>
                        </div>
                    </div>
                </div>
            ))) : (
                <h2 className="text-3xl font-bold p-10">Data not found</h2>
            )}
        </div>
    )
}







{/* <h3 className=" text-sm">
    {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
    ΔΗΜΟΣ {municipalityCommunity || "N/A"},
    ΤΚ {propertyPostalCode || "N/A"}
</h3> */}

{/* <div className="flex items-center justify-center gap-2">
    {
        owner?.map((e: any, i: number) => (
            <h3 key={i} className="text-sm">
                {e.firstName || e.first_name || "N/A"} {e.lastName || e.last_name || "N/A"}
            </h3>
        ))
    }
</div> */}


{/* <div className="mb-8 space-y-4">
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
            </div> */}


















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





