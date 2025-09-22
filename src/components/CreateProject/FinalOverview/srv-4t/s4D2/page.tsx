"use client"
import { FormDataTwo } from "@/components/create-eng-certificates/template";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit, FaSave, FaTimes } from "react-icons/fa";

// Define the form data structure


export default function S4D2({ secondData, setSecondData, data }: { secondData: FormDataTwo, setSecondData: Dispatch<SetStateAction<FormDataTwo>>, data: any }) {
    const [isEditMode, setIsEditMode] = useState(false);


    // Initialize the form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormDataTwo>({
        defaultValues: secondData
    });

    const onSubmit = (data: FormDataTwo) => {
        console.log("Updated Data:", data);
        setSecondData(data);
        setIsEditMode(false);
    };

    const handleCancel = () => {
        reset(secondData);
        setIsEditMode(false);
    };
    useEffect(() => {
        console.log(data, "under data")
    }, [])

    return (
        <div>
            <div className="max-w-[796px] mx-auto bg-white my-16 relative">
                {/* Action Buttons */}
                <div className="text-right -mt-20 mr-5 absolute right-0 top-0 flex gap-2">
                    {!isEditMode ? (
                        <>
                            <button
                                className="mt-1 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                                onClick={() => setIsEditMode(true)}
                            >
                                <FaRegEdit className="text-white" />
                                Edit
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="mt-1 px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2"
                                onClick={handleCancel}
                            >
                                <FaTimes className="text-white" />
                                Cancel
                            </button>
                            <button
                                className="mt-1 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                                onClick={handleSubmit(onSubmit)}
                            >
                                <FaSave className="text-white" />
                                Save
                            </button>
                        </>
                    )}
                </div>

                {/* EDIT MODE */}
                {isEditMode ? (
                    <div className="border border-gray-400 p-4">
                        <h2 className="text-xl font-bold mb-4 text-center">Edit Document</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Recipient (ΠΡΟΣ)</label>
                                <input {...register("recipient")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Name (Όνομα)</label>
                                <input {...register("name")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Surname (Επώνυμο)</label>
                                <input {...register("surname")} className="w-full p-2 border rounded" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Father's Name (Πατέρας)</label>
                                <input {...register("fatherName")} className="w-full p-2 border rounded" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Mother's Name (Μητέρα)</label>
                                <input {...register("motherName")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Birth Date (Ημ. Γέννησης)</label>
                                <input {...register("birthDate")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Birth Town (Τόπος Γέννησης)</label>
                                <input {...register("birthTown")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">ID Number (Αριθ. Ταυτότητας)</label>
                                <input {...register("idNumber")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Mobile (Τηλ.)</label>
                                <input {...register("mobile")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Town (Πόλη)</label>
                                <input {...register("town")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Address (Οδός)</label>
                                <input {...register("address")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Address Number (Αριθ.)</label>
                                <input {...register("addressNumber")} className="w-full p-2 border rounded" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Postal Code (ΤΚ)</label>
                                <input {...register("postalCode")} className="w-full p-2 border rounded" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input {...register("email")} className="w-full p-2 border rounded" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">VAT (Α.Φ.Μ.)</label>
                                <input {...register("vat")} className="w-full p-2 border rounded" />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Project Description</label>
                                <textarea {...register("projectDescription")} className="w-full p-2 border rounded" rows={3} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Date (Ημερομηνία)</label>
                                <input {...register("date")} className="w-full p-2 border rounded" />
                            </div>
                        </form>
                    </div>
                ) : (
                    /* PREVIEW MODE */
                    <>
                        {/* Header with coat of arms */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                                </div>
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
                                    <div className="flex-1 p-2 font-bold">{secondData.recipient}</div>
                                </div>
                            </div>

                            {/* Name Owner row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                    <div className="w-40 p-2 border-r border-gray-400 font-bold">{secondData.name}</div>
                                    <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.surname}</div>
                                </div>
                            </div>

                            {/* Father's name row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.fatherName}</div>
                                </div>
                            </div>

                            {/* Mother's name row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.motherName}</div>
                                </div>
                            </div>

                            {/* Birth date row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.birthDate}</div>
                                </div>
                            </div>

                            {/* Birth town row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.birthTown}</div>
                                </div>
                            </div>

                            {/* ID and mobile row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                    <div className="p-2 border-r border-gray-400 font-bold">{secondData.idNumber}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.mobile}</div>
                                </div>
                            </div>

                            {/* Address row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                    <div className="w-20 p-2 border-r border-gray-400 font-bold">{secondData.town}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                    <div className="w-24 p-2 border-r border-gray-400 font-bold">{secondData.address}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                    <div className="w-20 p-2 border-r border-gray-400 font-bold">{secondData.addressNumber}</div>
                                    <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.postalCode}</div>
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
                                    <div className="p-2 underline">{secondData.email}</div>
                                </div>
                            </div>

                            {/* VAT row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                                    <div className="flex-1 p-2 font-bold">{secondData.vat}</div>
                                    <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                                </div>
                            </div>

                            {/* Declaration text */}
                            <div className="p-4 text-sm mb-6">
                                <p className="mb-4">
                                    Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                                </p>
                                <p className="text-sm">
                                    ως κύριος/ιδιοκτήτης του ακινήτου Description for building/ horiontal property που βρίσκεται επί της οδού ([{secondData.address}, {secondData.addressNumber}, {secondData.town}, {secondData.postalCode}], αναθέτω στον/στην Διπλωματούχο Μηχανικό ( {secondData.surname}  ,  {secondData.name}, Specialty Engineer AM TEE)
                                </p>

                                <p className="mb-4">για το έργο με τίτλο :</p>
                                <p className="mb-6">{secondData.projectDescription}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-sm mb-4">● τη σύνταξη και υπογραφή της Τεχνικής Έκθεσης – Βεβαίωσης Μηχανικού για εργασίες του άρθρου 30 του ν.4495/2017</p>
                                <p className="text-sm">●την υποβολή αιτήσεων και τη λήψη των απαιτούμενων εγκρίσεων από τις αρμόδιες αρχές, εφόσον αυτές προβλέπονται από την ισχύουσα νομοθεσία</p>
                            </div>

                            {/* Signature section */}
                            <div className="flex justify-end">
                                <div className="flex justify-end p-4">
                                    <div className="text-right space-y-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm">Ημερομηνία :</span>
                                            <span className="text-sm font-medium">{secondData.date}</span>
                                        </div>
                                        <div className="text-sm mt-8 text-center">
                                            <div>( Υπογραφή )</div>
                                            <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}