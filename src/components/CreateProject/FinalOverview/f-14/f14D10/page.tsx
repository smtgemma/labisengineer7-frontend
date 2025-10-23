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
    municipalityCommunity: string;
    propertyNumber: string;
}



export default function F14D10({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwnerIndex, setSelectedOwnerIndex] = useState<number | null>(null);

    const engineers = Array.isArray(allData?.engineers) ? allData.engineers : [];
    const projectDescription = allData?.projectDescription || "";
    const { ydom } = allData || {};
    const { propertyAddress, propertyPlace, propertyNumber, municipalityCommunity, propertyPostalCode, id, createdById, serviceId, createdAt } = allData || {};


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
                                <div className=" p-2 border-r border-gray-400 font-bold">{engineer?.idCardNumber || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.phone || "N/A"}</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-20 p-2 border-r border-gray-400 font-bold ">{engineer?.town || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-24 p-2 border-r border-gray-400 font-bold ">{engineer?.streetAddress || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-20 p-2 border-r border-gray-400 font-bold ">{engineer?.streetNumber || "N/A"}</div>
                                <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                <div className="flex-1 p-2 font-bold">{engineer?.postalCode || "N/A"}</div>
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
                                <div className="flex-1 p-2 font-bold">{engineer?.engVatNumber || "N/A"}</div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                            </p>

                            <p className=" font-bold">για το οικοδομικό έργο με τίτλο :</p>
                            <p className=" mb-6 font-bold">"{projectDescription || "N/A"}"</p>
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="space-y-4 text-sm m p-4">
                            <h3 className=" text-sm"> <span className="mr-1">επί της οδού</span>
                                <span className="font-bold">
                                    {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                                    ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                                    ΤΚ {propertyPostalCode || "N/A"}</span>
                            </h3>
                            <p className="mb-4">
                                <span className="text-sm font-bold">ΔΕΝ επηρεάζεται, δεν τροποποιείται και δεν θίγεται,</span> καθ’ οιονδήποτε τρόπο ο φέρων οργανισμός (στατικός φορέας) του κτιρίου, και οι εργασίες δεν επιφέρουν καμία επιβάρυνση
                                ή αλλαγή στα στατικά ή γεωμετρικά χαρακτηριστικά του φέροντος οργανισμού, όπως αυτά υφίστανται σύμφωνα με την υφιστάμενη Οικοδομική Άδεια.
                            </p>
                            <p>
                                Οι εργασίες θα εκτελεστούν σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές, τις ελάχιστες απαιτήσεις ασφάλειας και υγείας,
                                καθώς και με πλήρη συμμόρφωση προς τις πολεοδομικές και λοιπές σχετικές διατάξεις.
                            </p>
                        </div>

                        {/* Signature section */}
                        <div className="flex justify-end">
                            <div className="flex justify-end p-4">
                                <div className="text-right space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Ημερομηνία :</span>
                                        <span className="text-sm font-medium">{createdAt && format(new Date(createdAt), "dd/MM/yyyy") || "N/A"}</span>
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
                            <img src={signature} alt="" className="w-[150px] h-[150px]" />
                        </div>
                        <div className="text-xs p-6">
                            <p> (1) Αναγράφεται από τον ενδιαφερόμενο πολίτη ή Αρχή ή η Υπηρεσία του δημόσιου τομέα, που απευθύνεται η αίτηση.</p>
                            <p>(2) Αναγράφεται ολογράφως.</p>
                            <p> (3) «Όποιος εν γνώσει του δηλώνει ψευδή γεγονότα ή αρνείται ή αποκρύπτει τα αληθινά με έγγραφη υπεύθυνη δήλωση του άρθρου 8 τιμωρείται με φυλάκιση τουλάχιστον τριών μηνών. Εάν ο υπαίτιος αυτών των πράξεων σκόπευε να προσπορίσει στον εαυτόν του ή σε άλλον περιουσιακό όφελος βλάπτοντας τρίτον ή σκόπευε να βλάψει άλλον, τιμωρείται με κάθειρξη μέχρι 10 ετών.</p>
                            <p>(4) Σε περίπτωση ανεπάρκειας χώρου η δήλωση συνεχίζεται στην πίσω όψη της και υπογράφεται από τον δηλούντα ή την δηλούσα.</p>
                        </div>
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
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.firstName || ""}
                                            />
                                        </div>

                                        {/* Surname */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Επώνυμο *:</label>
                                            <input
                                                type="text"
                                                {...register("lastName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.lastName || ""}
                                            />
                                        </div>

                                        {/* Father's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Πατρός *:</label>
                                            <input
                                                type="text"
                                                {...register("fatherName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.fatherName || ""}
                                            />
                                        </div>

                                        {/* Mother's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Μητρός *:</label>
                                            <input
                                                type="text"
                                                {...register("motherName", { required: "This field is required" })}
                                                className="flex-1 border motherName-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.motherName || ""}
                                            />
                                        </div>

                                        {/* Birth Date */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ημερομηνία Γέννησης *:</label>
                                            <input
                                                type="date"
                                                {...register("bornDate", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.bornDate || ""}
                                            />
                                        </div>

                                        {/* Birth Place */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τόπος Γέννησης *:</label>
                                            <input
                                                type="text"
                                                {...register("bornTown", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.bornTown || ""}
                                            />
                                        </div>

                                        {/* ID */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Ταυτότητας *:</label>
                                            <input
                                                type="text"
                                                {...register("idCardNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.idCardNumber || ""}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τηλέφωνο *:</label>
                                            <input
                                                type="text"
                                                {...register("phone", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.phone || ""}
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Πόλη *:</label>
                                            <input
                                                type="text"
                                                {...register("town", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.town || ""}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Διεύθυνση *:</label>
                                            <input
                                                type="text"
                                                {...register("streetAddress", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.streetAddress || ""}
                                            />
                                        </div>

                                        {/* Address Number */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Διεύθυνσης *:</label>
                                            <input
                                                type="text"
                                                {...register("streetNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.streetNumber || ""}
                                            />
                                        </div>

                                        {/* Postal Code */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ταχυδρομικός Κώδικας *:</label>
                                            <input
                                                type="text"
                                                {...register("postalCode", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.postalCode || ""}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Email *:</label>
                                            <input
                                                type="email"
                                                {...register("email", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.email || ""}
                                            />
                                        </div>

                                        {/* AFM */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Α.Φ.Μ. *:</label>
                                            <input
                                                type="text"
                                                {...register("engVatNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.engineers[selectedOwnerIndex]?.engVatNumber || ""}
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
            ))) : (
                <h2 className="text-3xl font-bold p-10">Data not found</h2>
            )}
        </div>
    )
}
