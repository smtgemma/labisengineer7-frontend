"use client"

import { FaRegEdit } from "react-icons/fa";

// for editing 
import { useForm } from "react-hook-form"
import { useState } from "react";

interface FormData {
    owner_name: string
    project_description: string
    owner_address: string
    owner_city: string
    owner_postal_code: string
}
// end editing 

interface allDataProps {
    owners: any[];
}
function F5D3({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners[0] || {};


    // for editing data 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({})

    const onSubmit = (data: FormData) => {
        console.log("Updated Data:", data)
        reset()
        setIsEditModalOpen(false)
    }
    return (
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
                    <div className="col-span-10">
                        {/* {project_description || "N/A"} */}
                    </div>
                </div>

                {/* Address Row */}
                <div className="grid grid-cols-12 gap-2 mb-4 ml-10">
                    <label className="col-span-2 ">Θέση:</label>
                    <div className="col-span-10">
                        <h3 className=" text-sm">{owner?.address || "N/A"}, {owner?.city || "N/A"}, {owner?.postalCode || "N/A"} ( FOR BUILDING)</h3>
                    </div>
                </div>

                {/* Consent Text */}
                <div className='mt-[100px]'>
                    <p className="mt-6 mb-2">
                        Εμείς οι κάτωθι υπογεγραμμένοι, συνιδιοκτήτες της πολυκατοικίας επί της οδού
                    </p>
                    <h3>
                        <span className="text-sm font-semibold">{owner?.address || "N/A"}, {owner?.city || "N/A"}, {owner?.postalCode || "N/A"} ( FOR BUILDING)</span>
                    </h3>
                    <p>
                        δηλώνουμε υπεύθυνα και ρητά συναινούμε στην εκτέλεση των παρακάτω εργασιών:</p>
                </div>

                {/* Works from Technical Description Section */}
                <div className="mt-4">
                    <p>επί της οδού {owner?.address || "N/A"}, {owner?.city || "N/A"}, {owner?.postalCode || "N/A"} ( FOR BUILDING)</p>
                    <p className="font-semibold text-sm my-6">[WORKS FROM TECHNICAL DESCRIPTION]</p>
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
                                {/* Employer */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Εργοδότες *:</label>
                                    <input
                                        placeholder={owner?.firstName || "owner_name"}
                                        type="text"
                                        {...register("owner_name", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Project */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Έργο *:</label>
                                    <input
                                        // placeholder={project_description || "Project description"}
                                        type="text"
                                        {...register("project_description", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Διεύθυνση Έργου *:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            placeholder={owner?.address || "Address"}
                                            {...register("owner_address", { required: "Address is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner?.city || "City"}
                                            {...register("owner_city", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner?.postalCode || "Postal Code"}
                                            {...register("owner_postal_code", { required: "Postal code is required" })}
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

export default F5D3