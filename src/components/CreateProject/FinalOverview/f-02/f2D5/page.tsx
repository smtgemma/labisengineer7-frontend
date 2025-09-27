"use client"

import { useState } from "react"
import StampComponent from "../../shared/signture/signture"
import { format } from "date-fns"
// for editing 
import { useForm, Controller } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice"


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
    projectDescription: string
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

export default function F2D5({ allData, setIsModalOpen }: F6D5Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners?.[0] || {}
    const allDescriptionTasks = allData?.allDescriptionTasks || {};
    const { id, createdById, serviceId, projectDescription, propertyPostalCode, propertyPlace, propertyAddress, createdAt, horizontalPropertyName } = allData || {}

    const [updateProject] = useUpdateProjectMutation()

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
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ- Άρθρο 4, ΥΑ ΦΕΚ Β' 1843/2020
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm">{projectDescription || "N/A"}</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">
                        {propertyAddress || "N/A"}, {propertyPlace || "N/A"},
                        {propertyPostalCode || "N/A"} ( FOR BUILDING)
                    </h3>
                </div>

                <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
                    <span className="">Ιδιοκτήτης:</span>
                    <h3 className=" text-sm">{owner?.firstName || "N/A"} {owner?.lastName || "N/A"}</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ {horizontalPropertyName || "N/A"} </span> επί της οδού <br /> <span className="font-semibold">{owner?.ownerAddress || "N/A"}, {owner?.city} , {owner?.postal_code} ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
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
                    <h3 className="text-sm font-bold underline mb-6">Άρθρο 4, ΥΑ ΦΕΚ Β' 1843/2020</h3>

                    <div className="mb-4">
                        <h3 className="text-sm font-bold">1. Αντικείμενο Εργασιών</h3>
                        <p className="text-sm">Η παρούσα τεχνική έκθεση αφορά την ανακατασκευή της υφιστάμενης στέγης του κτιρίου, σύμφωνα
                            με τις προβλέψεις του άρθρου 4 της ΥΑ ΦΕΚ Β' 1843/2020 και τις διατάξεις του Ν.4495/2017 περί έκδοσης Άδειας Μικρής Κλίμακας.  </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-sm font-bold">2. Αναγκαιότητα Εργασιών</h3>
                        <p className="text-sm">Η ανάγκη εκτέλεσης των εργασιών προκύπτει λόγω της προχωρημένης φθοράς και παλαιότητας της υφιστάμενης στέγης, καθώς έχουν παρατηρηθεί εκτεταμένες φθορές στα υλικά επικάλυψης (π.χ. κεραμίδια), στο φέρον ξύλινο σκελετό, καθώς και σε στοιχεία στεγανοποίησης και υδρορροών. Επιπλέον, έχουν
                            εντοπιστεί διαρροές υγρασίας στους υπερκείμενους χώρους του κτιρίου, οι οποίες χρήζουν άμεσης αποκατάστασης για λόγους ασφάλειας, υγιεινής και διατήρησης της δομικής ακεραιότητας.  </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-sm font-bold">3. Δήλωση Συμμόρφωσης – Πολεοδομική Νομιμότητα</h3>
                        <p className="text-sm">Δηλώνεται ότι οι παραπάνω εργασίες:
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm mb-4">● Δεν θίγουν ή τροποποιούν τον φέροντα οργανισμό του κτιρίου </p>
                        <p className="text-sm mb-4">● Δεν αυξάνουν τον όγκο, το ύψος ή τη γεωμετρία της στέγης </p>
                        <p className="text-sm mb-4">● Δεν παραβιάζουν τις ισχύουσες πολεοδομικές διατάξεις</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-sm font-bold underline">Εκτελούνται σύμφωνα με το άρθρο 29 του Ν.4495/2017 και το άρθρο 4 της ΥΑ ΦΕΚ Β’ 1843/2020.</h3>
                    </div>
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
                            {/* Dashed Border Box = common component*/}
                            <StampComponent
                                title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
                                instructions={[
                                    "Με δεξί κλικ",
                                    "Αλλαγή εικόνας",
                                    " Βάζετε την σφραγίδα σας",
                                ]}
                            />
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
                                            defaultValue={propertyPlace || "propertyNumber"}
                                            {...register("propertyPlace", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPostalCode || "municipalityCommunity"}
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



