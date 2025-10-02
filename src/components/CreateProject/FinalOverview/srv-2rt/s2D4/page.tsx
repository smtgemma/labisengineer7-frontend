
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
    propertyAddress: string;
    propertyPlace: string;
    firstName: string;
    lastName: string;
    propertyNumber: string;
    propertyPostalCode: string;
    permitNumber: string;
    issuingAuthority: string;
}

type ViolationData = {
    age: string;
    category: string;
    createdAt: string;
    formId: number;
    id: string;
    otherViolation: boolean;
    projectId: string;
    showRemainingViolations: boolean;
    updatedAt: string;
    violations: string[];
};



export default function S2D4({ allData, owner, violations }: { allData: allDataProps, owner: any, violations: ViolationData[] }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwnerIndex, setSelectedOwnerIndex] = useState<number | null>(null);

    console.log(violations, "=========================> violations")

    const engineers = allData?.engineers?.[0] || {};
    // Removed duplicate 'owner' declaration
    const { id, createdById, serviceId, ydom, specialty, createdAt, propertyAddress, propertyPlace, firstName, lastName, propertyNumber, propertyPostalCode, permitNumber, issuingAuthority } = allData || {};

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
                                <div className="flex-1 p-2 font-bold">{owner?.father_first_last_name || "N/A"}</div>
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                <div className="flex-1 p-2 font-bold">{owner?.mothers_first_last_name || "N/A"}</div>
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
                                <div className="w-32 p-2 text-center border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
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
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">
                                    Α.Φ.Μ.:
                                </div>
                                <div className="flex-1 p-2 font-bold">
                                    {owner?.tax_identification_number || "N/A"}
                                </div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">
                                    {/* Δ.Ο.Υ.: */}
                                </div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις (3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν. 1599/1986,
                                δηλώνω ότι σχετικά με το δηλωθέν ακίνητό στην στην οδό {propertyAddress || "N/A"} {propertyNumber || "N/A"} περιοχή City/Place/Municipality Property με Τ.Κ.{propertyPostalCode || "N/A"} στο οποίο ως ιδιοκτήτης με ποσοστό  Owner Percent Property % ισχύουν τα εξής:
                            </p>
                            <p className="mb-1">
                                Αριθμός Οικοδομικής Άδειας: {permitNumber || "N/A"} Ημερομηνία Έκδοσης: {createdAt && format(new Date(createdAt), "dd/MM/yyyy")} {permitNumber || "N/A"} Πολεοδομική Υπηρεσία: {issuingAuthority || "N/A"}
                            </p>
                            <p className="mb-1">
                                Περιγραφή Αυθαίρετων Κατασκευών ή/και Χρήσεων:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                                {
                                violations && violations?.map((item: any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <p>Age: {item.age}</p>
                                            <p>Category: {item.category}</p>
                                            <p>CreatedAt: {item.createdAt && format(new Date(item.createdAt), "dd/MM/yyyy")}</p>
                                            <p>FormId: {item.formId}</p>
                                            <p>Id: {item.id}</p>
                                            <p>OtherViolation: {item.otherViolation}</p>
                                            <p>ProjectId: {item.projectId}</p>
                                            <p>ShowRemainingViolations: {item.showRemainingViolations}</p>
                                            <p>UpdatedAt: {item.updatedAt && format(new Date(item.updatedAt), "dd/MM/yyyy")}</p>
                                            <p>Violations: {item?.violations && item?.violations?.map((v: string, index: number) => {
                                                return <div key={index}>
                                                    <p>{v}</p>
                                                </div>
                                            })}</p>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    {/* EDIT MODAL */}
                </div>
            </div>
        </div>
    )

}
