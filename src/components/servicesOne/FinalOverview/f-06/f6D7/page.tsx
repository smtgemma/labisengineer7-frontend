"use client"

import { useState } from "react"
import { format } from "date-fns"
// for editing 
import { useForm, Controller } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice"

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

interface allDataProps {
    owners: any[]
    allDescriptionTasks: any[]
    technical_description: string
    projectDescriptions: string
    id: string
    createdById: string
    propertyPostalCode: string
    propertyAddress: string
    propertyPlace: string
    createdAt: string
    horizontalPropertyName: string
}

type F6D5Props = {
    allData: any;
    setIsModalOpen: (value: boolean) => void;
};
// end editing 

export default function F6D7({ allData, setIsModalOpen }: F6D5Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners || []
    const allDescriptionTasks = allData?.allDescriptionTasks || {};
    const { id, createdById, serviceId, projectDescriptions, propertyPostalCode, propertyPlace, propertyAddress, createdAt, horizontalPropertyName, propertyNumber, municipalityCommunity } = allData || {}


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
            <div className="text-right -mt-9">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* Title */}
            <h2 className="text-center font-semibold underline text-xl mb-2">
                ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΤΗΣΗΣ ΜΕΛΕΤΗΣ ΗΛΕΚΤΡΟΜΗΧΑΝΟΛΟΓΙΚΩΝ ΕΓΚΑΤΑΣΤΑΣΕΩΝ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm text-center">{projectDescriptions || "N/A"}</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-[612px]">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">
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
                        Σύμφωνα με την{" "}
                        <span className="text-sm font-bold">
                            Απόφαση ΥΠΕΝ/ΔΑΟΚΑ/69701/4461/18 (ΦΕΚ 4520 Β/16.10.2018),
                        </span>{" "}
                        και ειδικότερα με το{" "}
                        <span className="text-sm font-bold">άρθρο 2, παράγραφος Ιζ),</span>{" "}
                        αναφέρεται ότι για την πραγματοποίηση εσωτερικών διαρρυθμίσεων εντός
                        υφιστάμενου κτιρίου, απαιτείται η υποβολή σχεδίου κάτοψης σε
                        κλίμακα 1:100 ή 1:50,{" "}
                        <span className="underline">
                            μόνο στην περίπτωση που από τις διαρρυθμίσεις αυτές προκύπτει
                            ανάγκη τροποποίησης υφιστάμενων μελετών του κτιρίου.
                        </span>
                    </p>
                </div>
                <div>
                    <p className="text-sm">Ενδεικτικά, τέτοιες μελέτες μπορεί να είναι:</p>
                    <p className="text-sm">• Μελέτη ηλεκτρομηχανολογικών εγκαταστάσεων (Η/Μ)</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold underline">
                        Ωστόσο, στη συγκεκριμένη περίπτωση, για το σύνολο των προβλεπόμενων
                        εργασιών, διαπιστώνεται ότι οι διαρρυθμίσεις δεν τροποποιούν τις
                        εγκεκριμένες μελέτες του κτιρίου και ιδίως δεν επηρεάζουν:
                    </h3>
                </div>
                <div>
                    <h3 className="text-sm font-bold mb-6">
                        Τις Μελέτες Ηλεκτρομηχανολογικών Εγκαταστάσεων
                    </h3>
                    <p className="text-sm mb-6">
                        Ως εκ τούτου, δεν απαιτείται η κατάθεση νέων ή τροποποιημένων
                        μελετών για την ενημέρωση του φακέλου της οικοδομικής άδειας. Το
                        παραπάνω επιβεβαιώνεται και από τις διατάξεις της παρ. 10 του άρθρου
                        42 του Ν.4495/2017, σύμφωνα με τις οποίες δεν απαιτείται
                        επικαιροποίηση μελετών για διαρρυθμίσεις που δεν επηρεάζουν τα
                        συστήματα πυροπροστασίας ή τις Η/Μ εγκαταστάσεις.
                    </p>
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
                                        {...register("projectDescriptions")}
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



