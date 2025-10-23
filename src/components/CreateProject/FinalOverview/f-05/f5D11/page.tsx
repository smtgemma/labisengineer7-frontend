


"use client"
import { useState } from "react";
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
    projectDescriptions?: string;
    ydom?: string;
    serviceId?: string;
}
// end editing 

interface allDataProps {
    owners: any[];
    engineers: any[];
    projectDescriptions: string;
    ydom: string;
    horizontalPropertyName: string;
    id: string;
    createdById: string;
    createdAt: string;
    serviceId?: string;
    specialty?: string;
    municipalityCommunity?: string;
    propertyAddress?: string;
    propertyPostalCode?: string;
    propertyPlace?: string;
    propertyNumber?: string;
}


export default function F5D11({ allData, ownerIndex }: { allData: allDataProps, ownerIndex: number }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const engineers = allData?.engineers || {};
    const owner = allData?.owners?.[ownerIndex];
    const { id, createdById, serviceId, horizontalPropertyName, municipalityCommunity, propertyAddress, propertyPostalCode, propertyPlace, propertyNumber, projectDescriptions, ydom, createdAt, specialty } = allData || {};

    const [updateProject] = useUpdateProjectMutation()
    // for editing data 
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInputs>({})

    // Submit handler
    const onSubmit = async (data: FormInputs) => {
        if (ownerIndex === null) return;

        // old owner copy
        const updatedOwners = [...allData.owners];

        //    owner replace of old owner 
        updatedOwners[ownerIndex] = {
            ...updatedOwners[ownerIndex],
            ...data
        };

        // make formData 
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            owners: updatedOwners,
            projectDescriptions: data.projectDescriptions || allData.projectDescriptions,
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

        } catch (error) {
            console.error("Update failed", error)
        }

    }

    return (
        <div className="arial">
            <div className="max-w-[796px] mx-auto bg-white mb-16">
                <div className="max-w-[796px] mx-auto bg-white">
                    <div className="text-right -mt-3">
                        <button
                            className="px-4 py-1"
                            onClick={() => {
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
                                <div className="flex-1 p-2 font-bold">{owner?.motherFirstLastName || owner?.mothers_first_last_name || "N/A"}</div>
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
                                <div className="w-72 p-2 border-r border-gray-400 font-bold">{owner?.idNumber || owner?.id_number || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">{owner?.phone || "N/A"}</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-35 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-50 p-2 border-r border-gray-400 font-bold ">{owner?.city || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-50 p-2 border-r border-gray-400 font-bold ">{owner?.ownerAddress || owner?.owner_address || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-12 p-2 border-r border-gray-400 font-bold ">{owner?.addressNumber || owner?.address_number || "N/A"}</div>
                                <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                <div className="w-25 p-2 font-bold">{owner?.postal_code || "N/A"}</div>
                            </div>
                        </div>

                        {/* Contact details row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm flex items-center">Αρ. Τηλεομοιότυπου (Fax):</div>
                                <div className="w-50 p-2 border-r border-gray-400 text-sm flex items-center">-</div>
                                <div className="w-52 p-2 border-r border-gray-400 text-sm flex items-center">
                                    <div className="text-sm">
                                        <div>Δ/νση Ηλεκτρ.</div>
                                        <div>Ταχυδρομ</div>
                                        <div>ίου (Email):</div>
                                    </div>
                                </div>
                                <div className="p-2 underline flex items-center ">{owner?.email || "N/A"}</div>
                            </div>
                        </div>

                        {/* VAT row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">
                                    Α.Φ.Μ.:
                                </div>
                                <div className="w-54 p-2 font-bold">
                                    {owner?.taxIdentificationNumber || owner?.tax_identification_number || "N/A"}
                                </div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">
                                    Δ.Ο.Υ.:
                                </div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                            </p>
                            <span className="mb-4">
                                ως κύριος/ιδιοκτήτης του ακινήτου <span className="font-bold">{horizontalPropertyName || "N/A"}</span> που βρίσκεται επί της οδού{" "}
                                <span className="font-bold">{propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                                    ΔΗΜΟΣ {municipalityCommunity || "N/A"}, ΤΚ {propertyPostalCode || "N/A"}{" "}</span>
                                αναθέτω στον/στην Διπλωματούχο Μηχανικό
                                ( {engineers[0]?.lastName || "N/A"}, {engineers[0]?.firstName || "N/A"}, {engineers[0]?.specialty || "N/A"}, {engineers[0]?.teeNumber})
                            </span>

                            <p className="mb-4 font-bold mt-2">για το έργο με τίτλο :</p>
                            <p className=" mb-6 font-bold">"{projectDescriptions || "N/A"}"</p>
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="space-y-4 text-sm m p-4">
                            <p>την επίβλεψη των προβλεπόμενων εργασιών που πρόκειται να εκτελεστούν στο ανωτέρω ακίνητο, στο πλαίσιο της διαδικασίας έκδοσης Έγκρισης
                                Εργασιών Μικρής Κλίμακας, σύμφωνα με τις ισχύουσες πολεοδομικές διατάξεις και ειδικότερα τις προβλέψεις του άρθρου 29 του Ν.4495/2017.</p>
                            <p>Η παρούσα ανάθεση αφορά την τεχνική καθοδήγηση και εποπτεία των εργασιών κατά την υλοποίησή τους, την τήρηση των σχετικών κανονισμών ασφαλείας,
                                καθώς και την ευθύνη για την πιστή εφαρμογή του εγκεκριμένου περιεχομένου της άδειας.</p>
                        </div>

                        {/* Signature section */}
                        <div className="flex justify-end">
                            <div className="flex justify-end p-4">
                                <div className="text-right space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Ημερομηνία :</span>
                                        <span className="text-sm font-medium">{createdAt
                                            ? format(new Date(createdAt), "dd/MM/yyyy")
                                            : "N/A"}</span>
                                    </div>
                                    <div className="text-sm mt-8 text-center">
                                        <div>( Υπογραφή )</div>
                                        <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs p-6">
                            <p> (1) Αναγράφεται από τον ενδιαφερόμενο πολίτη ή Αρχή ή η Υπηρεσία του δημόσιου τομέα, που απευθύνεται η αίτηση.</p>
                            <p>(2) Αναγράφεται ολογράφως.</p>
                            <p> (3) «Όποιος εν γνώσει του δηλώνει ψευδή γεγονότα ή αρνείται ή αποκρύπτει τα αληθινά με έγγραφη υπεύθυνη δήλωση του άρθρου 8 τιμωρείται με φυλάκιση τουλάχιστον τριών μηνών. Εάν ο υπαίτιος αυτών των πράξεων σκόπευε να προσπορίσει στον εαυτόν του ή σε άλλον περιουσιακό όφελος βλάπτοντας τρίτον ή σκόπευε να βλάψει άλλον, τιμωρείται με κάθειρξη μέχρι 10 ετών.</p>
                            <p>(4) Σε περίπτωση ανεπάρκειας χώρου η δήλωση συνεχίζεται στην πίσω όψη της και υπογράφεται από τον δηλούντα ή την δηλούσα.</p>
                        </div>
                    </div>
                    {/* EDIT MODAL */}
                    {isEditModalOpen && ownerIndex !== null && (
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
                                                {...register("ydom")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData?.ydom || ""}
                                            />
                                        </div>
                                        {/* Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα *:</label>
                                            <input
                                                type="text"
                                                {...register("firstName")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.firstName || ""}
                                            />
                                        </div>

                                        {/* Surname */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Επώνυμο *:</label>
                                            <input
                                                type="text"
                                                {...register("lastName")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.lastName || ""}
                                            />
                                        </div>

                                        {/* Father's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Πατρός *:</label>
                                            <input
                                                type="text"
                                                {...register("fatherFirstLastName")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.fatherFirstLastName || ""}
                                            />
                                        </div>

                                        {/* Mother's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Μητρός *:</label>
                                            <input
                                                type="text"
                                                {...register("mothersFirstLastName")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.mothersFirstLastName || ""}
                                            />
                                        </div>

                                        {/* Birth Date */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ημερομηνία Γέννησης *:</label>
                                            <input
                                                type="date"
                                                {...register("dateOfBirth")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.dateOfBirth || ""}
                                            />
                                        </div>

                                        {/* Birth Place */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τόπος Γέννησης *:</label>
                                            <input
                                                type="text"
                                                {...register("placeOfBirth")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.placeOfBirth || ""}
                                            />
                                        </div>

                                        {/* ID */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Ταυτότητας *:</label>
                                            <input
                                                type="text"
                                                {...register("idNumber")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.idNumber || ""}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τηλέφωνο *:</label>
                                            <input
                                                type="text"
                                                {...register("phone")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.phone || ""}
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Πόλη *:</label>
                                            <input
                                                type="text"
                                                {...register("city")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.city || ""}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Διεύθυνση *:</label>
                                            <input
                                                type="text"
                                                {...register("ownerAddress")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.ownerAddress || ""}
                                            />
                                        </div>

                                        {/* Address Number */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Διεύθυνσης *:</label>
                                            <input
                                                type="text"
                                                {...register("addressNumber")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.addressNumber || ""}
                                            />
                                        </div>

                                        {/* Postal Code */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ταχυδρομικός Κώδικας *:</label>
                                            <input
                                                type="text"
                                                {...register("postalCode")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.postalCode || ""}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Email *:</label>
                                            <input
                                                type="email"
                                                {...register("email")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.email || ""}
                                            />
                                        </div>

                                        {/* AFM */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Α.Φ.Μ. *:</label>
                                            <input
                                                type="text"
                                                {...register("taxIdentificationNumber")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.owners[ownerIndex]?.taxIdentificationNumber || ""}
                                            />
                                        </div>

                                        {/* Project Description */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Περιγραφή Έργου *:</label>
                                            <input
                                                type="text"
                                                {...register("projectDescriptions")}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData.projectDescriptions || ""}
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
        </div>
    )

}

