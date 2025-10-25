"use client"

import { format } from "date-fns"

// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";
import { useState } from "react";

interface FormData {
    projectDescriptions: string;
    propertyAddress: string;
    propertyPlace: string;
    propertyPostalCode: string;
    municipalityCommunity: string;
    propertyNumber: string;
    owners: {
        firstName: string;
        lastName: string;
    }[];
}
// end editing 
interface allDataProps {
    owners: any[]
    allDescriptionTasks: any[]
    technical_description: string
    Horizontal_property_name: string
    projectDescriptions: string
    id: string
    createdById: string
    propertyPostalCode: string
    propertyAddress: string
    propertyPlace: string
    createdAt: string
    horizontalPropertyName: string
    serviceId: string
}
type F6D5Props = {
    allData: any;
    setIsModalOpen: (value: boolean) => void;
};

export default function F5D7({ allData, setIsModalOpen }: F6D5Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners || [];
    const { allDescriptionTasks } = allData || {}
    const { id, createdById, serviceId, projectDescriptions, propertyPostalCode, propertyPlace, propertyAddress, createdAt, horizontalPropertyName, propertyNumber, municipalityCommunity } = allData || {}
    console.log(allDescriptionTasks)


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
            projectDescriptions: allData?.projectDescriptions || "",
            propertyAddress: allData?.propertyAddress || "",
            propertyPlace: allData?.propertyPlace || "",
            propertyPostalCode: allData?.propertyPostalCode || "",
            // owners: [
            //     {
            //         firstName: allData?.owners?.[0]?.firstName || "",
            //         lastName: allData?.owners?.[0]?.lastName || "",
            //     },
            // ],
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
            <div className="text-right -mt-7">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΣΗΣ ΣΧΕΔΙΩΝ ΟΨΕΩΝ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start">
                    <span className=" min-w-[120px] text-sm">Έργο:</span>
                    <h3 className=" text-sm text-center">{projectDescriptions || "N/A"}</h3>
                </div>

                <div className="flex items-start">
                    <span className="min-w-[120px] text-sm">Θέση:</span>
                    <h3 className=" text-sm text-center">
                        {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                        ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                        ΤΚ {propertyPostalCode || "N/A"}
                    </h3>
                </div>

                <div className="flex">
                    <span className="text-sm">Ιδιοκτήτης:</span>
                    <div className="flex-1">
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
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <div>
                    <span className="mr-1">Στο ακίνητο <span className="font-bold">{horizontalPropertyName || "N/A"}</span> </span>
                    επί της οδού
                    <span className="font-bold">
                        <span className="ml-1">{propertyAddress || "N/A"} </span>{propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                        ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                        <span className="mr-1">ΤΚ {propertyPostalCode || "N/A"}</span>
                    </span>
                    πρόκειται να <br />εκτελεσθούν οι παρακάτω εργασίες :
                </div>
            </div>

            <div className="space-y-6 ml-10">
                {
                    allDescriptionTasks ? (allDescriptionTasks?.map((task: any, index: number) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold">● {task?.id}</h3>
                            <p className="text-sm">{task?.description}</p>
                        </div>
                    ))) : (
                        <h2 className="text-3xl font-bold">Data not found</h2>
                    )
                }
                <div>
                    <p className="text-sm mb-6">Για το σύνολο των προβλεπόμενων εργασιών <span className="text-sm font-bold">δεν απαιτείται η υποβολή αρχιτεκτονικών όψεων,</span> καθώς:</p>
                    <p className="text-sm mb-6">● Οι εργασίες δεν τροποποιούν το αρχιτεκτονικό περίγραμμα ή τα γεωμετρικά χαρακτηριστικά των όψεων (όπως ανοίγματα, εξώστες, μορφολογικά στοιχεία).
                    </p>
                    <p className="text-sm mb-6">● Δεν πραγματοποιούνται επεμβάσεις που θα είχαν ως αποτέλεσμα την αισθητική ή λειτουργική αλλοίωση των υφιστάμενων όψεων.
                    </p>
                    <p className="text-sm mb-6">● Οι εργασίες αφορούν συντηρήσεις, επισκευές ή επαναχρωματισμούς επί των όψεων, με χρήση υλικών παρόμοιων ή ταυτόσημων με τα υφιστάμενα.
                    </p>
                    <p className="text-sm mb-6">Η μορφή και η εικόνα του κτιρίου παραμένει αμετάβλητη, συνεπώς δεν απαιτείται η υποβολή όψεων σύμφωνα με τις διατάξεις του άρθρου 29 του Ν.4495/2017 και τις σχετικές ερμηνευτικές εγκυκλίους.</p>
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
                                <img src={signature} alt="" className="w-[150px] h-[150px]" />
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
                                    <label className="font-medium w-1/8">Έργο *:</label>
                                    <input
                                        defaultValue={projectDescriptions || "Project Description "}
                                        type="text"
                                        {...register("projectDescriptions", { required: "projectDescriptions is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/8">Θέση*:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            defaultValue={propertyAddress || "propertyAddress"}
                                            {...register("propertyAddress")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyNumber || "propertyNumber"}
                                            {...register("propertyNumber")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={municipalityCommunity || "municipalityCommunity"}
                                            {...register("municipalityCommunity")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPostalCode || "propertyPostalCode"}
                                            {...register("propertyPostalCode")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPlace || "propertyPlace"}
                                            {...register("propertyPlace")}
                                            className="border p-2 rounded text-sm"
                                        />
                                    </div>
                                </div>
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



