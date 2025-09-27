"use client"

import { FaRegEdit } from "react-icons/fa";

// for editing 
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

interface FormData {
    projectDescription: string
    propertyAddress: string
    propertyPostalCode: string
    propertyPlace: string
}
// end editing 

interface allDataProps {
    owners: any[];
    allDescriptionTasks: any[]
    projectDescription: string
    propertyAddress: string
    propertyPlace: string
    propertyPostalCode: string
    serviceId: string;
    id: string;
    createdById: string;
}
function F8D6({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners?.[0] || {};
    const { allDescriptionTasks } = allData || {}
    const { propertyPlace, propertyAddress, propertyPostalCode, projectDescription, serviceId, id, createdById } = allData || {};

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({})
    const [updateProject] = useUpdateProjectMutation()

    // for editing data 
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
        // setIsModalOpen(false)
    }
    return (
        <div className="arial">
            {
                owner ? (
                    <div className="max-w-[794px] mx-auto">
                        <div className="text-right -mt-3">
                            <button
                                className="mt-1 px-4 py-1"
                                onClick={() => setIsEditModalOpen(true)}
                            >
                                <FaRegEdit className="text-black text-2xl cursor-pointer" />
                            </button>
                        </div>
                        <div className=" bg-white">
                            {/* Title */}
                            <h2 className="text-center font-semibold text-sm mb-6 underline">
                                ΣΥΝΑΙΝΕΣΗ ΣΥΝΔΙΟΚΤΗΤΩΝ
                            </h2>

                            {/* Project Row */}
                            <div className="grid grid-cols-12 gap-2 mb-4 ml-10">
                                <label className="col-span-2">Έργο:</label>
                                <div className="col-span-10 text-sm">
                                    {projectDescription || "N/A"}
                                </div>
                            </div>

                            {/* Address Row */}
                            <div className="grid grid-cols-12 gap-2 mb-4 ml-10">
                                <label className="col-span-2 ">Θέση:</label>
                                <div className="col-span-10">
                                    <h3 className=" text-sm">{propertyAddress || "N/A"}, {propertyPlace || "N/A"}, {propertyPostalCode || "N/A"} ( FOR BUILDING)</h3>
                                </div>
                            </div>

                            {/* Consent Text */}
                            <div className='mt-[100px]'>
                                <p className="mt-6 mb-2">
                                    Εμείς οι κάτωθι υπογεγραμμένοι, συνιδιοκτήτες της πολυκατοικίας επί της οδού
                                </p>
                                <h3>
                                    <span className="text-sm font-semibold">{propertyAddress || "N/A"}, {propertyPlace || "N/A"}, {propertyPostalCode || "N/A"} ( FOR BUILDING)</span>
                                </h3>
                                <p>
                                    δηλώνουμε υπεύθυνα και ρητά συναινούμε στην εκτέλεση των παρακάτω εργασιών:</p>
                            </div>

                            {/* Works from Technical Description Section */}
                            <div className="mt-4">
                                <div className="mb-4">
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
                                </div>
                                <p className="text-sm ">
                                    Η συναίνεση αφορά την υλοποίηση των ανωτέρω εργασιών στις κοινές όψεις/κοινόχρηστα μέρη του κτιρίου ή επεμβάσεις που επηρεάζουν την
                                    αισθητική και λειτουργική ενότητα του ακινήτου. Οι εργασίες θα εκτελεστούν από εξουσιοδοτημένο μηχανικό σύμφωνα με την πολεοδομική νομοθεσία
                                    (Ν.4495/2017) και με σεβασμό στην ασφάλεια και στην κοινή χρήση του ακινήτου
                                </p>
                            </div>
                        </div>
                        {/* table  */}
                        <div className="my-20">
                            <table className="table-auto w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-sm">A/A</th>
                                        <th className="border px-4 py-2 text-sm">Ονοματεπώνυμο</th>
                                        <th className="border px-4 py-2 text-sm">Ιδιότητα / Ιδιοκτησία</th>
                                        <th className="border px-4 py-2 text-sm">Υπογραφή</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Repeat this for each row */}
                                    {[...Array(10)].map((_, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2"></td>
                                            <td className="border px-4 py-2"></td>
                                            <td className="border px-4 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                                                    defaultValue={projectDescription || "projectDescription"}
                                                    type="text"
                                                    {...register("projectDescription", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                />
                                            </div>

                                            {/* Address */}
                                            <div className="flex items-center gap-4">
                                                <label className="font-medium w-1/4">Διεύθυνση Έργου *:</label>
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
                ) : (
                    <h2>Data not found</h2>
                )
            }
        </div>
    )
}

export default F8D6