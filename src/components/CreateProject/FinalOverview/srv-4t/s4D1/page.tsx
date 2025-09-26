// "use client"
// import { Dispatch, SetStateAction, useState } from "react";
// import StampComponent from "../../shared/signture/signture";
// import { useForm } from "react-hook-form";
// import { FaRegEdit, FaTimes } from "react-icons/fa";

// // Define the form data structure
// interface FormData {
//     recipient: string;
//     name: string;
//     surname: string;
//     fatherName: string;
//     motherName: string;
//     birthDate: string;
//     birthTown: string;
//     idNumber: string;
//     mobile: string;
//     town: string;
//     address: string;
//     addressNumber: string;
//     postalCode: string;
//     email: string;
//     vat: string;
//     projectDescription: string;
//     date: string;
// }

// export default function S4D1({ formData, setFormData }: {
//     formData: FormData, setFormData: Dispatch<SetStateAction<FormData>>
// }) {
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<FormData>({
//         defaultValues: formData
//     });

//     const onSubmit = (data: FormData) => {
//         console.log("Updated Data:", data);
//         setFormData(data);
//         setIsEditModalOpen(false);
//     };

//     const handleCancel = () => {
//         reset(formData);
//         setIsEditModalOpen(false);
//     };

//     console.log(formData, "form data ,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

//     return (
//         <div>
//             <div className="max-w-[796px] mx-auto bg-white my-16 relative">
//                 {/* Edit Button */}
//                 <div className="text-right -mt-20 mr-5 absolute right-0 top-0">
//                     <button
//                         className="mt-1 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
//                         onClick={() => setIsEditModalOpen(true)}
//                     >
//                         <FaRegEdit className="text-white" />
//                         Edit Document
//                     </button>
//                 </div>

//                 {/* Header with coat of arms */}
//                 <div className="text-center mb-6">
//                     <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
//                         <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
//                             <div className="w-8 h-8 bg-white rounded-sm"></div>
//                         </div>
//                     </div>
//                     <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
//                     <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
//                 </div>

//                 {/* Subtitle */}
//                 <div className="text-center mb-6 text-sm">
//                     <p>
//                         Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να ελεγχθεί με βάση το αρχείο άλλων
//                         υπηρεσιών
//                     </p>
//                     <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
//                 </div>

//                 {/* Form table */}
//                 <div className="border border-gray-400">
//                     {/* ΠΡΟΣ row */}
//                     <div className="border-b border-gray-400 bg-gray-50">
//                         <div className="flex">
//                             <div className="w-20 p-2 border-r border-gray-400 font-bold text-sm">ΠΡΟΣ(1):</div>
//                             <div className="flex-1 p-2 font-bold">{formData.recipient || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Name Owner row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
//                             <div className="w-40 p-2 border-r border-gray-400 font-bold">{formData.name || "N/A"}</div>
//                             <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
//                             <div className="flex-1 p-2 font-bold">{formData.surname || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Father's name row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
//                             <div className="flex-1 p-2 font-bold">{formData.fatherName || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Mother's name row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
//                             <div className="flex-1 p-2 font-bold">{formData.motherName || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Birth date row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
//                             <div className="flex-1 p-2 font-bold">{formData.birthDate || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Birth town row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
//                             <div className="flex-1 p-2 font-bold">{formData.birthTown || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* ID and mobile row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
//                             <div className="p-2 border-r border-gray-400 font-bold">{formData.idNumber || "N/A"}</div>
//                             <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
//                             <div className="flex-1 p-2 font-bold">{formData.mobile || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Address row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
//                             <div className="w-20 p-2 border-r border-gray-400 font-bold">{formData.town || "N/A"}</div>
//                             <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
//                             <div className="w-24 p-2 border-r border-gray-400 font-bold">{formData.address || "N/A"}</div>
//                             <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
//                             <div className="w-20 p-2 border-r border-gray-400 font-bold">{formData.addressNumber || "N/A"}</div>
//                             <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
//                             <div className="flex-1 p-2 font-bold">{formData.postalCode || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* Contact details row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Αρ. Τηλεομοιότυπου (Fax):</div>
//                             <div className="flex-1 p-2">
//                                 <div className="text-sm">
//                                     <div>Δ/νση</div>
//                                     <div>Ηλεκτρ.</div>
//                                     <div>Ταχυδρομ</div>
//                                     <div>ίου (Email):</div>
//                                 </div>
//                             </div>
//                             <div className="p-2 underline">{formData.email || "N/A"}</div>
//                         </div>
//                     </div>

//                     {/* VAT row */}
//                     <div className="border-b border-gray-400">
//                         <div className="flex">
//                             <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
//                             <div className="flex-1 p-2 font-bold">{formData.vat || "N/A"}</div>
//                             <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
//                         </div>
//                     </div>

//                     {/* Declaration text */}
//                     <div className="p-4 text-sm mb-6">
//                         <p className="mb-4">
//                             Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
//                         </p>
//                         <p className="text-sm">
//                             ως κύριος/ιδιοκτήτης του ακινήτου Description for building/ horiontal property που βρίσκεται επί της οδού ([{formData.address}, {formData.addressNumber}, {formData.town}, {formData.postalCode}], αναθέτω στον/στην Διπλωματούχο Μηχανικό ( Engineers Surname  ,  Engineer's Name, Specialty Engineer AM TEE)
//                         </p>

//                         <p className="mb-4">για το έργο με τίτλο :</p>
//                         <p className="mb-6">{formData.projectDescription}</p>
//                     </div>
//                     <div className="p-4">
//                         <p className="text-sm mb-4">● τη σύνταξη και υπογραφή της Τεχνικής Έκθεσης – Βεβαίωσης Μηχανικού για εργασίες του άρθρου 30 του ν.4495/2017</p>
//                         <p className="text-sm">●την υποβολή αιτήσεων και τη λήψη των απαιτούμενων εγκρίσεων από τις αρμόδιες αρχές, εφόσον αυτές προβλέπονται από την ισχύουσα νομοθεσία</p>
//                     </div>

//                     {/* Signature section */}
//                     <div className="flex justify-end">
//                         <div className="flex justify-end p-4">
//                             <div className="text-right space-y-2">
//                                 <div className="flex items-center gap-4">
//                                     <span className="text-sm">Ημερομηνία :</span>
//                                     <span className="text-sm font-medium">{formData.date}</span>
//                                 </div>
//                                 <div className="text-sm mt-8 text-center">
//                                     <div>( Υπογραφή )</div>
//                                     <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* EDIT MODAL */}
//                 {isEditModalOpen && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
//                         <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                             <div className="flex justify-between items-center p-4 border-b">
//                                 <h2 className="text-xl font-bold">Edit Document</h2>
//                                 <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
//                                     <FaTimes size={24} />
//                                 </button>
//                             </div>

//                             <form onSubmit={handleSubmit(onSubmit)} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">Recipient (ΠΡΟΣ)</label>
//                                     <input {...register("recipient")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Name (Όνομα)</label>
//                                     <input {...register("name")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Surname (Επώνυμο)</label>
//                                     <input {...register("surname")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">Father's Name (Πατέρας)</label>
//                                     <input {...register("fatherName")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">Mother's Name (Μητέρα)</label>
//                                     <input {...register("motherName")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Birth Date (Ημ. Γέννησης)</label>
//                                     <input {...register("birthDate")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Birth Town (Τόπος Γέννησης)</label>
//                                     <input {...register("birthTown")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">ID Number (Αριθ. Ταυτότητας)</label>
//                                     <input {...register("idNumber")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Mobile (Τηλ.)</label>
//                                     <input {...register("mobile")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Town (Πόλη)</label>
//                                     <input {...register("town")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Address (Οδός)</label>
//                                     <input {...register("address")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Address Number (Αριθ.)</label>
//                                     <input {...register("addressNumber")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Postal Code (ΤΚ)</label>
//                                     <input {...register("postalCode")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">Email</label>
//                                     <input {...register("email")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">VAT (Α.Φ.Μ.)</label>
//                                     <input {...register("vat")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2">
//                                     <label className="block text-sm font-medium mb-1">Project Description</label>
//                                     <textarea {...register("projectDescription")} className="w-full p-2 border rounded" rows={3} />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-1">Date (Ημερομηνία)</label>
//                                     <input {...register("date")} className="w-full p-2 border rounded" />
//                                 </div>

//                                 <div className="md:col-span-2 flex justify-end gap-4 mt-4">
//                                     <button
//                                         type="button"
//                                         onClick={handleCancel}
//                                         className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         type="submit"
//                                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                                     >
//                                         Save Changes
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }







"use client"
import { useState } from "react";
// import StampComponent from "../../shared/signture/signture";
import { format } from "date-fns"
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

interface FormInputs {
    firstName?: string;
    lastName?: string;
    fatherFirstLastName?: string;
    mothersFirstLastName?: string;
    dateOfBirth?: string;
    placeOfBirth?: string;
    idNumber?: string;
    phone?: string;
    city?: string;
    ownerAddress?: string;
    addressNumber?: string;
    postalCode?: string;
    email?: string;
    taxIdentificationNumber?: string;
    projectDescription?: string;
    ydom?: string;
    serviceId?: string;
}
// end editing 

interface allDataProps {
    owners: any[];
    engineers: any[];
    projectDescription: string;
    ydom: string;
    horizontalPropertyName: string;
    id: string;
    createdById: string;
    serviceId: string;
    specialty: string;
    createdAt: string;
}


export default function s4D1({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwnerIndex, setSelectedOwnerIndex] = useState<number | null>(null);

    const engineers = allData?.engineers || {};
    const { id, createdById, serviceId, horizontalPropertyName, projectDescription, ydom, specialty, createdAt } = allData || {};

    const [updateProject] = useUpdateProjectMutation()
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
        const updatedOwners = [...allData.owners];

        //    owner replace of old owner 
        updatedOwners[selectedOwnerIndex] = {
            ...updatedOwners[selectedOwnerIndex],
            ...data
        };

        // make formData 
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            owners: updatedOwners,
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
        <div>
            {allData?.owners ? (allData?.owners?.map((owner: any, index: number) => (
                <div key={index} className="max-w-[796px] mx-auto bg-white mb-16">
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
                                    <div className="flex-1 p-2  font-bold">{ydom || ""}</div>
                                </div>
                            </div>

                            {/* Name Owner row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                    <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner?.firstName || owner?.first_name || "N/A"}</div>
                                    <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                    <div className="flex-1 p-2  font-bold">{owner?.lastName || owner?.last_name || "N/A"}</div>
                                </div>
                            </div>

                            {/* Father's name row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.fatherFirstLastName || owner?.father_first_last_name || "N/A"}</div>
                                </div>
                            </div>

                            {/* Mother's name row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.mothersFirstLastName || owner?.mothers_first_last_name || "N/A"}</div>
                                </div>
                            </div>

                            {/* Birth date row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.dateOfBirth || owner?.date_of_birth || "N/A"}</div>
                                </div>
                            </div>

                            {/* Birth town row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.placeOfBirth || owner?.place_of_birth
                                    }</div>
                                </div>
                            </div>

                            {/* ID and mobile row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                    <div className=" p-2 border-r border-gray-400 font-bold">{owner?.idNumber || owner?.id_number || "N/A"}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.phone || "N/A"}</div>
                                </div>
                            </div>

                            {/* Address row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                    <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner?.city || "N/A"}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                    <div className="w-24 p-2 border-r border-gray-400 font-bold ">{owner?.ownerAddress || owner?.owner_address || "N/A"}</div>
                                    <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                    <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner?.addressNumber || owner?.address_number || "N/A"}</div>
                                    <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.postal_code || "N/A"}</div>
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
                                    <div className="p-2 underline ">{owner?.email || "N/A"}</div>
                                </div>
                            </div>

                            {/* VAT row */}
                            <div className="border-b border-gray-400">
                                <div className="flex">
                                    <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                                    <div className="flex-1 p-2 font-bold">{owner?.taxIdentificationNumber || owner?.tax_identification_number || "N/A"}</div>
                                    <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                                </div>
                            </div>

                            {/* Declaration text */}
                            <div className="p-4 text-sm">
                                <p className="mb-4">
                                    Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                                </p>
                                <p className="mb-4">
                                    ως κύριος/ιδιοκτήτης του ακινήτου Description for building/ {horizontalPropertyName || "N/A"} που βρίσκεται επί της οδού([{owner?.ownerAddress || "N/A"}, {owner?.phone || "N/A"}, {owner?.city || "N/A"}, {owner?.postal_code || "N/A"}], αναθέτω στον/στην Διπλωματούχο Μηχανικό ( {engineers[0]?.lastName || "N/A"} ,  {engineers[0]?.firstName || "N/A"}, {specialty || "N/A"} Engineer AM TEE)
                                </p>

                                <p className="mb-4 font-bold">για το έργο με τίτλο :</p>
                                <p className=" mb-6">{projectDescription || "N/A"}</p>
                            </div>

                            {/* Additional disclaimer text */}
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
                                            <span className="text-sm font-medium">{createdAt && format(new Date(createdAt), "dd/MM/yyyy")}</span>
                                        </div>
                                        <div className="text-sm mt-8 text-center">
                                            <div>( Υπογραφή )</div>
                                            <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* common component  */}
                            {/* <div className="flex items-center justify-end mt-6 p-4">
                                <StampComponent />
                            </div> */}
                        </div>
                        {/* EDIT MODAL */}
                        {isEditModalOpen && selectedOwnerIndex !== null && (
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
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {/* ydom */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">ΠΡΟΣ *:</label>
                                                <input
                                                    type="text"
                                                    {...register("ydom", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData?.ydom || ""}
                                                />
                                            </div>
                                            {/* Name */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Όνομα *:</label>
                                                <input
                                                    type="text"
                                                    {...register("firstName", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.firstName || ""}
                                                />
                                            </div>

                                            {/* Surname */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Επώνυμο *:</label>
                                                <input
                                                    type="text"
                                                    {...register("lastName", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.lastName || ""}
                                                />
                                            </div>

                                            {/* Father's Name */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Όνομα Πατρός *:</label>
                                                <input
                                                    type="text"
                                                    {...register("fatherFirstLastName", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.fatherFirstLastName || ""}
                                                />
                                            </div>

                                            {/* Mother's Name */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Όνομα Μητρός *:</label>
                                                <input
                                                    type="text"
                                                    {...register("mothersFirstLastName", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.mothersFirstLastName || ""}
                                                />
                                            </div>

                                            {/* Birth Date */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Ημερομηνία Γέννησης *:</label>
                                                <input
                                                    type="date"
                                                    {...register("dateOfBirth", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.dateOfBirth || ""}
                                                />
                                            </div>

                                            {/* Birth Place */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Τόπος Γέννησης *:</label>
                                                <input
                                                    type="text"
                                                    {...register("placeOfBirth", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.placeOfBirth || ""}
                                                />
                                            </div>

                                            {/* ID */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Αριθμός Ταυτότητας *:</label>
                                                <input
                                                    type="text"
                                                    {...register("idNumber", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.idNumber || ""}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Τηλέφωνο *:</label>
                                                <input
                                                    type="text"
                                                    {...register("phone", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.phone || ""}
                                                />
                                            </div>

                                            {/* City */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Πόλη *:</label>
                                                <input
                                                    type="text"
                                                    {...register("city", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.city || ""}
                                                />
                                            </div>

                                            {/* Address */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Διεύθυνση *:</label>
                                                <input
                                                    type="text"
                                                    {...register("ownerAddress", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.ownerAddress || ""}
                                                />
                                            </div>

                                            {/* Address Number */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Αριθμός Διεύθυνσης *:</label>
                                                <input
                                                    type="text"
                                                    {...register("addressNumber", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.addressNumber || ""}
                                                />
                                            </div>

                                            {/* Postal Code */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Ταχυδρομικός Κώδικας *:</label>
                                                <input
                                                    type="text"
                                                    {...register("postalCode", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.postalCode || ""}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Email *:</label>
                                                <input
                                                    type="email"
                                                    {...register("email", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.email || ""}
                                                />
                                            </div>

                                            {/* AFM */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Α.Φ.Μ. *:</label>
                                                <input
                                                    type="text"
                                                    {...register("taxIdentificationNumber", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.owners[selectedOwnerIndex]?.taxIdentificationNumber || ""}
                                                />
                                            </div>

                                            {/* Project Description */}
                                            <div className="flex flex-col gap-2">
                                                <label className="font-medium">Περιγραφή Έργου *:</label>
                                                <input
                                                    type="text"
                                                    {...register("projectDescription", { required: "This field is required" })}
                                                    className="flex-1 border p-2 rounded text-sm"
                                                    defaultValue={allData.projectDescription || ""}
                                                />
                                            </div>

                                            {/* Submit */}
                                            <div className="flex justify-end md:col-span-2">
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
                </div>
            ))) : (
                <h2 className="text-3xl font-bold p-10">Data not found</h2>
            )}
        </div>
    )

}
