"use client"
import { Dispatch, SetStateAction, useState } from "react";
import StampComponent from "../../shared/signture/signture";
import { useForm } from "react-hook-form";
import { FaRegEdit, FaTimes } from "react-icons/fa";

// Define the form data structure
interface FormData {
    recipient: string;
    name: string;
    surname: string;
    fatherName: string;
    motherName: string;
    birthDate: string;
    birthTown: string;
    idNumber: string;
    mobile: string;
    town: string;
    address: string;
    addressNumber: string;
    postalCode: string;
    email: string;
    vat: string;
    projectDescription: string;
    date: string;
}

export default function S4D1({ formData, setFormData }: {
    formData: FormData, setFormData: Dispatch<SetStateAction<FormData>>
}) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: formData
    });

    const onSubmit = (data: FormData) => {
        console.log("Updated Data:", data);
        setFormData(data);
        setIsEditModalOpen(false);
    };

    const handleCancel = () => {
        reset(formData);
        setIsEditModalOpen(false);
    };

    console.log(formData, "form data ,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

    return (
        <div>
            <div className="max-w-[796px] mx-auto bg-white my-16 relative">
                {/* Edit Button */}
                <div className="text-right -mt-20 mr-5 absolute right-0 top-0">
                    <button
                        className="mt-1 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        <FaRegEdit className="text-white" />
                        Edit Document
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
                            <div className="flex-1 p-2 font-bold">{formData.recipient}</div>
                        </div>
                    </div>

                    {/* Name Owner row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                            <div className="w-40 p-2 border-r border-gray-400 font-bold">{formData.name}</div>
                            <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                            <div className="flex-1 p-2 font-bold">{formData.surname}</div>
                        </div>
                    </div>

                    {/* Father's name row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                            <div className="flex-1 p-2 font-bold">{formData.fatherName}</div>
                        </div>
                    </div>

                    {/* Mother's name row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                            <div className="flex-1 p-2 font-bold">{formData.motherName}</div>
                        </div>
                    </div>

                    {/* Birth date row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                            <div className="flex-1 p-2 font-bold">{formData.birthDate}</div>
                        </div>
                    </div>

                    {/* Birth town row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                            <div className="flex-1 p-2 font-bold">{formData.birthTown}</div>
                        </div>
                    </div>

                    {/* ID and mobile row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                            <div className="p-2 border-r border-gray-400 font-bold">{formData.idNumber}</div>
                            <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                            <div className="flex-1 p-2 font-bold">{formData.mobile}</div>
                        </div>
                    </div>

                    {/* Address row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                            <div className="w-20 p-2 border-r border-gray-400 font-bold">{formData.town}</div>
                            <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                            <div className="w-24 p-2 border-r border-gray-400 font-bold">{formData.address}</div>
                            <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                            <div className="w-20 p-2 border-r border-gray-400 font-bold">{formData.addressNumber}</div>
                            <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                            <div className="flex-1 p-2 font-bold">{formData.postalCode}</div>
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
                            <div className="p-2 underline">{formData.email}</div>
                        </div>
                    </div>

                    {/* VAT row */}
                    <div className="border-b border-gray-400">
                        <div className="flex">
                            <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                            <div className="flex-1 p-2 font-bold">{formData.vat}</div>
                            <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                        </div>
                    </div>

                    {/* Declaration text */}
                    <div className="p-4 text-sm mb-6">
                        <p className="mb-4">
                            Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                        </p>
                        <p className="text-sm">
                            ως κύριος/ιδιοκτήτης του ακινήτου Description for building/ horiontal property που βρίσκεται επί της οδού ([{formData.address}, {formData.addressNumber}, {formData.town}, {formData.postalCode}], αναθέτω στον/στην Διπλωματούχο Μηχανικό ( Engineers Surname  ,  Engineer's Name, Specialty Engineer AM TEE)
                        </p>

                        <p className="mb-4">για το έργο με τίτλο :</p>
                        <p className="mb-6">{formData.projectDescription}</p>
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
                                    <span className="text-sm font-medium">{formData.date}</span>
                                </div>
                                <div className="text-sm mt-8 text-center">
                                    <div>( Υπογραφή )</div>
                                    <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDIT MODAL */}
                {isEditModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-xl font-bold">Edit Document</h2>
                                <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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

                                <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}