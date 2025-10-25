
"use client"
import { useState } from "react";
import { format } from "date-fns"
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProject2Mutation } from "@/redux/features/templates/allTemplateSlice";

interface FormInputs {
    firstName?: string;
    lastName?: string;
    fatherFirstLastName?: string;
    mothersFirstLastName?: string;
    dateOfBirth?: string;
    placeOfBirth?: string;
    idNumber?: string;
    mobile?: string;
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
    propertyAddress: string;
    propertyPlace: string;
    firstName: string;
    lastName: string;
    floorProperty: string;
    declaration_owner_for_4495_2017: string;
}

type modalFnProps = {
    setIsModalOpen: (value: boolean) => void;
}


export default function Flow2D3({ allData, ownerIndex }: { allData: allDataProps, ownerIndex: number }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    console.log(allData?.owners,"============al", ownerIndex)

    const engineers = allData?.engineers?.[0] || {};
    const owner = allData?.owners?.[ownerIndex]
    console.log(owner, "======================")
    // Removed duplicate 'owner' declaration
    const { id, createdById, serviceId, horizontalPropertyName, ydom, specialty, propertyAddress, propertyPlace, floorProperty, createdAt, declaration_owner_for_4495_2017 } = allData || {};
    const [updateProject2] = useUpdateProject2Mutation()
    // const { data: userData } = useGetMeQuery()
    // const signature = userData?.data?.signature
    // for editing data 
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInputs>({})

    // Submit handler
    const onSubmit = async (data: FormInputs) => {
        if(ownerIndex === null) return;

        // old owner copy 
        const updatedOwners = [...allData.owners]

        // owner replace of old owner 
        updatedOwners[ownerIndex] = {
            ...updatedOwners[ownerIndex],
            ...data
        }
        // make formData 
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            owners: updatedOwners,
            serviceId: serviceId
        }));

        try {
            await updateProject2({
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
                <div className="text-right -mt-3">
                    <button
                        className="mt-1 px-4 py-1"
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        <FaRegEdit className="text-black text-2xl cursor-pointer" />
                    </button>
                </div>
                <div className="max-w-[796px] mx-auto bg-white">
                    {/* Header with coat of arms */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/templateLogo/templateLogo.jpg" alt="Template Logo" />
                        </div>
                        <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
                        <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
                    </div>

                    {/* Subtitle */}
                    <div className="text-center mb-6 text-sm border p-1">
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
                                <div className="flex-1 p-2  font-bold">ΥΠ.ΕΝ</div>
                            </div>
                        </div>

                        {/* Name Owner row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner?.first_name || "N/A"}</div>
                                <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                <div className="flex-1 p-2  font-bold">{owner?.last_name || "N/A"}</div>
                            </div>
                        </div>

                        {/* Father's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                <div className="flex-1 p-2 font-bold">{owner?.father_first__last_name || "N/A"}</div>
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                <div className="flex-1 p-2 font-bold">{owner?.mother_first__last_name || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth date row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                <div className="flex-1 p-2 font-bold">{owner?.date_of_birth || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth town row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                <div className="flex-1 p-2 font-bold">{owner?.place_of_birth || "N/A"}</div>
                            </div>
                        </div>

                        {/* ID and mobile row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                <div className="w-72 p-2 border-r border-gray-400 font-bold">{owner?.id_number || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">{owner?.mobile || "N/A"}</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-35 p-2 text-center border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-50 p-2 text-center border-r border-gray-400 font-bold ">{owner?.city || "N/A"}</div>
                                <div className="w-16 p-2 text-center border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-50 p-2 text-center border-r border-gray-400 font-bold ">{owner?.owner_address || "N/A"}</div>
                                <div className="w-16 p-2 text-center border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-12 p-2 text-center border-r border-gray-400 font-bold ">{owner?.address_number || "N/A"}</div>
                                <div className="w-12 p-2 text-center border-r border-gray-400 text-sm">ΤΚ</div>
                                <div className="w-25 p-2 font-bold">{owner?.postal_code || "N/A"}</div>
                            </div>
                        </div>

                        {/* Contact details row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-55 p-2 border-r border-gray-400 text-sm flex items-center">Αρ. Τηλεομοιότυπου (Fax):</div>
                                <div className="w-31 p-2 border-r border-gray-400 text-sm flex items-center">-</div>
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
                                    {owner?.tax_identification_number || "N/A"}
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
                            
                              { declaration_owner_for_4495_2017 || "N/A"}, εξουσιοδοτώ 
                            </p>
                            <p className="mb-1">
                                τον /την ({engineers?.lastName || "N/A"} {engineers?.firstName || "N/A"})-({specialty || "N/A"}) με ΑΜ ΤΕΕ (TEE NUMBER),
                            </p>
                            <p className="mb-1">
                                για να προβεί σε όλες τις απαραίτητες ενέργειες σχετικά με τη ρύθμιση αυθαίρετων κατασκευών, όπως αυτές περιγράφονται στο κεφάλαιο ΦΕΚ 167Α/3-11-2017 του Ν.4495/2017.
                            </p>
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="text-sm my-3 ml-5">
                            <div className="w-[90%] mx-left">
                                <div className="flex justify-between mb-3">
                                    <p>Βεβαιώνεται το γνήσιο της υπογραφής</p>
                                    <div>
                                        <p> Ημερομηνία: {createdAt && format(new Date(createdAt), "dd/MM/yyyy")}</p>
                                        <p className="text-center mt-2 ">Ο – Η Δηλ.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-xs p-5">
                            <p> (1) Αναγράφεται από τον ενδιαφερόμενο πολίτη ή Αρχή ή η Υπηρεσία του δημόσιου τομέα, που απευθύνεται η αίτηση.</p>
                            <p>(2) Αναγράφεται ολογράφως.</p>
                            <p> (3) «Όποιος εν γνώσει του δηλώνει ψευδή γεγονότα ή αρνείται ή αποκρύπτει τα αληθινά με έγγραφη υπεύθυνη δήλωση του άρθρου 8 τιμωρείται με φυλάκιση τουλάχιστον τριών μηνών. Εάν ο υπαίτιος αυτών των πράξεων σκόπευε να προσπορίσει στον εαυτόν του ή σε άλλον περιουσιακό όφελος βλάπτοντας τρίτον ή σκόπευε να βλάψει άλλον, τιμωρείται με κάθειρξη μέχρι 10 ετών.</p>
                            <p>(4) Σε περίπτωση ανεπάρκειας χώρου η δήλωση συνεχίζεται στην πίσω όψη της και υπογράφεται από τον δηλούντα ή την δηλούσα.</p>
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
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {/* ydom */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">ΠΡΟΣ *:</label>
                                            <input
                                                type="text"
                                                {...register("ydom", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={ydom || ""}
                                            />
                                        </div>
                                        {/* Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα *:</label>
                                            <input
                                                type="text"
                                                {...register("firstName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.first_name || ""}
                                            />
                                        </div>

                                        {/* Surname */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Επώνυμο *:</label>
                                            <input
                                                type="text"
                                                {...register("lastName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.last_name || ""}
                                            />
                                        </div>

                                        {/* Father's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Πατρός *:</label>
                                            <input
                                                type="text"
                                                {...register("fatherFirstLastName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.father_first_last_name || ""}
                                            />
                                        </div>

                                        {/* Mother's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Μητρός *:</label>
                                            <input
                                                type="text"
                                                {...register("mothersFirstLastName", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.mothers_first_last_name || ""}
                                            />
                                        </div>

                                        {/* Birth Date */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ημερομηνία Γέννησης *:</label>
                                            <input
                                                type="date"
                                                {...register("dateOfBirth", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.date_of_birth || ""}
                                            />
                                        </div>

                                        {/* Birth Place */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τόπος Γέννησης *:</label>
                                            <input
                                                type="text"
                                                {...register("placeOfBirth", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.place_of_birth || ""}
                                            />
                                        </div>

                                        {/* ID */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Ταυτότητας *:</label>
                                            <input
                                                type="text"
                                                {...register("idNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.id_number || ""}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τηλέφωνο *:</label>
                                            <input
                                                type="text"
                                                {...register("mobile", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.mobile || ""}
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Πόλη *:</label>
                                            <input
                                                type="text"
                                                {...register("city", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.city || ""}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Διεύθυνση *:</label>
                                            <input
                                                type="text"
                                                {...register("ownerAddress", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.owner_address || ""}
                                            />
                                        </div>

                                        {/* Address Number */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Διεύθυνσης *:</label>
                                            <input
                                                type="text"
                                                {...register("addressNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.address_number || ""}
                                            />
                                        </div>

                                        {/* Postal Code */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ταχυδρομικός Κώδικας *:</label>
                                            <input
                                                type="text"
                                                {...register("postalCode", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.postal_code || ""}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Email *:</label>
                                            <input
                                                type="email"
                                                {...register("email", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.email || ""}
                                            />
                                        </div>

                                        {/* AFM */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Α.Φ.Μ. *:</label>
                                            <input
                                                type="text"
                                                {...register("taxIdentificationNumber", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={owner?.tax_identification_number || ""}
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

