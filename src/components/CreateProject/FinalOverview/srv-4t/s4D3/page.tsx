"use client"

import { useState } from "react"
// for editing 
import { useForm, Controller } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import StampComponent from "../../shared/signture/signture"
import { format } from "date-fns"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice"


type F6D13Props = {
    allData: any;
    setIsModalOpen: (value: boolean) => void;
};

interface FormData {
    firstName: string
    lastName: string
    projectDescription: string
    propertyAddress: string
    propertyPostalCode: string
    municipalityCommunity: string
    propertyNumber: string
    technicalDescription: string
    technicalDescriptionTwo: string
}
// end editing 
interface Owner {
    firstName: string
    lastName: string
    specialty: string
}

interface FormData {
    owners: Owner[]
}


export default function F4D3({ allData,
    setIsModalOpen
}: F6D13Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners || []
    const engineers = allData?.engineers || {}
    const allDescriptionTasks = allData?.allDescriptionTasks || {};
    const { id, createdById, serviceId, specialty } = allData || {}

    const { projectDescription,
        propertyAddress,
        propertyNumber,
        municipalityCommunity,
        propertyPostalCode,
        createdAt,
        technicalDescription,
        technicalDescriptionTwo,
        propertyPlace,
    } = allData || {};


    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({

        defaultValues: {
            owners: allData?.owners || [{ firstName: "", lastName: "" }],
        },
    })

    const [updateProject] = useUpdateProjectMutation()
    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature

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
        setIsModalOpen(false)
    }



    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
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
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ -ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
            </h2>
            <p className="text-center text-sm mb-5">Για την έκδοση Άδειας Μικρής Κλίμακας σύμφωνα με το άρθρο 29 του Ν.4495/2017</p>

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
            <div className="space-y-6 ml-10">
                <div>
                    <h3 className="text-sm font-bold mb-2">1. Εισαγωγή</h3>
                    <p className="text-sm mb-5">Η παρούσα Τεχνική Έκθεση – Βεβαίωση συντάσσεται σύμφωνα με τις διατάξεις του άρθρου 30 του Ν.4495/2017,
                        το οποίο καθορίζει τις κατηγορίες εργασιών που εκτελούνται χωρίς την απαίτηση έκδοσης οικοδομικής άδειας ή άδειας μικρής κλίμακας.
                    </p>
                    <p className="text-sm">
                        Οι εργασίες που περιγράφονται είναι ήπιες, αφορούν τη συντήρηση και επισκευή χώρων και δεν επηρεάζουν τον φέροντα οργανισμό ή τα στατικά στοιχεία του κτιρίου.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-bold mb-2">2. Στοιχεία Ακινήτου</h3>
                    <p className="text-sm mb-5">
                        {technicalDescription || "N/A"}
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-bold mb-2">3. Περιγραφή Εργασιών (Άρθρο 30)
                    </h3>
                    <p className="text-sm">Οι εργασίες που θα εκτελεστούν εντάσσονται στις προβλεπόμενες από το άρθρο 30 του Ν.4495/2017. Ενδεικτικά αναφέρονται: </p>

                    {Array.isArray(allDescriptionTasks) &&
                        allDescriptionTasks.map((task: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-sm font-bold">● {task?.label}</h3>
                                <p className="text-sm mb-6">{task?.description}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h3 className="text-sm font-bold mb-2">4. Νομιμότητα / Πολεοδομική Υπόσταση</h3>
                    {technicalDescriptionTwo || "N/A"}
                </div>

                {/* {/* Signature Section */}
                <div className="mt-6 text-right flex items-center justify-center p-5">
                    <div className="max-w-[300px]">

                        <div className="text-center mb-10 space-y-1">
                            <p>Hμερομηνία </p>
                            <p>{createdAt
                                ? format(new Date(createdAt), "dd/MM/yyyy")
                                : "N/A"}</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p>Ο Συντάξας Μηχανικός
                            </p>
                            <p>{engineers?.firstName} {engineers?.lasttName}</p>
                            <p>{specialty || "N/A"}</p>
                            <p>Α.Μ. ΤΕΕ: 123456
                            </p>
                        </div>
                    </div>
                </div>
                {/* Signature */}
                <div className="mt-6 text-right flex items-center justify-center p-5">
                    <img src={signature} alt="" />
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
                                            defaultValue={propertyNumber || "propertyNumber"}
                                            {...register("propertyNumber", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={municipalityCommunity || "municipalityCommunity"}
                                            {...register("municipalityCommunity", { required: "Postal code is required" })}
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



