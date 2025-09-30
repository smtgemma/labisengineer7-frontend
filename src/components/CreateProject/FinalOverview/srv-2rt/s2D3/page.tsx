


"use client"
import { useState } from "react";
import { format } from "date-fns"
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"
import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

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


export default function S2D3({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwnerIndex, setSelectedOwnerIndex] = useState<number | null>(null);

    const engineers = allData?.engineers || {};
    const { id, createdById, serviceId, horizontalPropertyName, projectDescription, ydom, specialty, createdAt } = allData || {};

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
        <div className="arial">
            <div className="max-w-[796px] mx-auto bg-white mb-16">
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
                                <div className="flex-1 p-2  font-bold">{ydom || ""}</div>
                            </div>
                        </div>

                        {/* Name Owner row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                <div className="w-40 p-2 border-r border-gray-400  font-bold">first name</div>
                                <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                <div className="flex-1 p-2  font-bold">last name</div>
                            </div>
                        </div>

                        {/* Father's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                <div className="flex-1 p-2 font-bold">fatherFirstLastName</div>
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                <div className="flex-1 p-2 font-bold">mothersFirstLastName</div>
                            </div>
                        </div>

                        {/* Birth date row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                <div className="flex-1 p-2 font-bold">dateOfBirth</div>
                            </div>
                        </div>

                        {/* Birth town row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                <div className="flex-1 p-2 font-bold">placeOfBirth</div>
                            </div>
                        </div>

                        {/* ID and mobile row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                <div className=" p-2 border-r border-gray-400 font-bold">idNumber</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">phone</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-20 p-2 border-r border-gray-400 font-bold ">city</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-24 p-2 border-r border-gray-400 font-bold ">ownerAddress</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-20 p-2 border-r border-gray-400 font-bold ">addressNumber</div>
                                <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                <div className="flex-1 p-2 font-bold">postal_code</div>
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
                                <div className="p-2 underline ">email</div>
                            </div>
                        </div>

                        {/* VAT row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">
                                    {/* Α.Φ.Μ.: */}
                                </div>
                                <div className="flex-1 p-2 font-bold">
                                    {/* taxIdentificationNumber */}
                                </div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">
                                    {/* Δ.Ο.Υ.: */}
                                </div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                            </p>
                            <p className="mb-1">
                                Εγω ο/η (Surname-Name Owner) ο/η οποίος/οποία έχω στην ιδιοκτησία μου την αυτοτελή διηρημένη οριζόντια
                            </p>
                            <p className="mb-1">
                                Εγω ο/η (Surname-Name Owner) ο/η οποίος/οποία έχω στην ιδιοκτησία μου την αυτοτελή διηρημένη οριζόντια
                            </p>
                            <p className="mb-1">
                                ιδιοκτησία «Horizontal property name/descripsion», που βρίσκεται στον (floor) όροφο πολυκατοικίας στην οδό
                            </p>
                            <p className="mb-1">
                                (Adrees Property), στο οικοδομικό τετράγωνο (Ο.Τ. Number), στα/στην/στον (Place Property) , του Δήμου (Municipality-City Property)---, με είδος
                            </p>
                            <p className="mb-1">
                                ιδιοκτησίας (Owner's type of ownership) ΚΥΡΙΟΤΗΤΑΣ ΚΑΤΑ (
                                Property ownership percentage )στη διηρημένη ιδιοκτησία, στην οποία αναλογεί
                            </p>
                            <p className="mb-1">
                                (percentage of co-ownership of the plot)/1000 ποσοστό συνιδιοκτησίας εξ αδιαιρέτου στο σύνολο του οικοπέδου, εξουσιοδοτώ
                            </p>
                            <p className="mb-1">
                                τον /την (Surname and Name Engineer User)-(Professional specialty Engineers User) με ΑΜ ΤΕΕ (TEE NUMBER),
                            </p>
                            <p className="mb-1">
                                για να προβεί σε όλες τις απαραίτητες ενέργειες σχετικά με τη ρύθμιση αυθαίρετων κατασκευών, όπως αυτές περιγράφονται στο κεφάλαιο ΦΕΚ 167Α/3-11-2017 του Ν.4495/2017.
                            </p>
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="flex justify-between p-5">
                            <div>
                                <p>Βεβαιώνεται το γνήσιο της υπογραφής </p>
                            </div>
                            <div>
                                <div>
                                    <div className="flex justify-center gap-10">
                                        <p>Ημερομηνία: </p>
                                        <p>- 20</p>
                                    </div>
                                    <p className="text-center mt-6"> Ο – Η Δηλ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EDIT MODAL */}
                </div>
            </div>
        </div>
    )

}
