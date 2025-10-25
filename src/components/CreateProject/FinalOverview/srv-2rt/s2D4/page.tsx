
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
    municipalityCommunity: string;
    ownership_percentage_owner: string;
    dateIssuanceBuildingPermit: string;
    owner_type_ownership: string;
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



export default function S2D4({ allData, violations, ownerIndex }: { allData: allDataProps, violations: ViolationData[], ownerIndex: number }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const engineers = allData?.engineers?.[0] || {};
    const owner = allData?.owners?.[ownerIndex]
    // Removed duplicate 'owner' declaration
    const { municipalityCommunity, owner_type_ownership, ownership_percentage_owner, dateIssuanceBuildingPermit, id, createdById, serviceId, ydom, specialty, createdAt, propertyAddress, propertyPlace, firstName, lastName, propertyNumber, propertyPostalCode, permitNumber, issuingAuthority } = allData || {};

    const [updateProject2] = useUpdateProject2Mutation()
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
        if (ownerIndex === null) return;

        // // old owner copy
        const updatedOwners = [...allData.owners];

        // //    owner replace of old owner 
        updatedOwners[ownerIndex] = {
            ...updatedOwners[ownerIndex],
            ...data
        };

        // // make formData 
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            owners: updatedOwners,
            projectDescription: data.projectDescription || allData.projectDescription,
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
            // setSelectedOwnerIndex(null)

        } catch (error) {
            console.error("Update failed", error)
        }

    }

    return (
        <div className="arial">
            <div className="max-w-[796px] mx-auto bg-white mb-16">
                <div className="max-w-[796px] mx-auto bg-white">
                    {/* Header with coat of arms */}
                    <div className="text-right -mt-3">
                        <button
                            className="mt-1 px-4 py-1"
                            onClick={() => setIsEditModalOpen(true)}
                        >
                            <FaRegEdit className="text-black text-2xl cursor-pointer" />
                        </button>
                    </div>
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
                                <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner?.firstName || "N/A"}</div>
                                <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                <div className="flex-1 p-2  font-bold">{owner?.lastName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Father's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                <div className="flex-1 p-2 font-bold">{owner?.fatherFirstLastName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                <div className="flex-1 p-2 font-bold">{owner?.motherFirstLastName || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth date row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                <div className="flex-1 p-2 font-bold">{owner?.dateOfBirth || "N/A"}</div>
                            </div>
                        </div>

                        {/* Birth town row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                <div className="flex-1 p-2 font-bold">{owner?.placeOfBirth || "N/A"}</div>
                            </div>
                        </div>

                        {/* ID and mobile row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                <div className="w-72 p-2 border-r border-gray-400 font-bold">{owner?.idNumber || "N/A"}</div>
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                <div className="flex-1 p-2 font-bold">{owner?.phone || "N/A"}</div>
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-35 p-2 text-center border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                <div className="w-50 p-2 text-center border-r border-gray-400 font-bold ">{owner?.city || "N/A"}</div>
                                <div className="w-16 p-2 text-center border-r border-gray-400 text-sm">Οδός</div>
                                <div className="w-50 p-2 text-center border-r border-gray-400 font-bold ">{owner?.ownerAddress || "N/A"}</div>
                                <div className="w-16 p-2 text-center border-r border-gray-400 text-sm">Αριθ</div>
                                <div className="w-12 p-2 text-center border-r border-gray-400 font-bold ">{owner?.addressNumber || "N/A"}</div>
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
                                    {owner?.taxIdentificationNumber || "N/A"}
                                </div>
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">
                                    Δ.Ο.Υ.:
                                </div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <div className="border border-b-0 mb-10">
                                <div className="">
                                    <p className="mb-1 p-2">
                                        Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις (3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν. 1599/1986,
                                        δηλώνω ότι σχετικά με το δηλωθέν ακίνητό στην στην οδό <span className="font-bold">{propertyAddress || "N/A"} {propertyNumber || "N/A"}</span> περιοχή <span className="font-bold">{propertyPlace || "N/A"}</span> στον Δήμο <span className="font-bold">{municipalityCommunity || "N/A"}</span> με <span className="font-bold">Τ.Κ.{propertyPostalCode || "N/A"}</span> στο οποίο ως ιδιοκτήτης με ποσοστό  <span className="font-bold">{owner?.ownershipPercentageOwner || "N/A"}</span> ισχύουν τα εξής:
                                    </p>
                                    <div className="border-b border-dashed p-0"></div>
                                    <p className="my-3 p-2">
                                        Αριθμός Οικοδομικής Άδειας: <span className="font-bold">{permitNumber || "N/A"}</span> Ημερομηνία Έκδοσης: <span className="font-bold">{dateIssuanceBuildingPermit || "N/A"}</span> Πολεοδομική Υπηρεσία: <span className="font-bold">{issuingAuthority || "N/A"}</span>
                                    </p>
                                    <div className="border-b border-dashed"></div>
                                    <p className="font-bold p-2">
                                        Περιγραφή Αυθαίρετων Κατασκευών ή/και Χρήσεων:
                                    </p>
                                    {/* <div className="grid grid-cols-1 md:grid-cols-2 my-6 p-2">
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
                                </div> */}
                                    <div className=" p-2">
                                        {/* Step 1 — Show categories 1,2,4,5 */}
                                        {violations.length > 0 && (() => {
                                            let count = 1; // common counter for all Φ.Κ. numbers

                                            const nonCategory3 = violations.filter((item) => String(item.category) !== "3");
                                            const category3 = violations.find((item) => String(item.category) === "3");
                                            const hasOther = violations.some((item) => item.otherViolation);

                                            return (
                                                <>
                                                    {violations.some((item) => item.category !== "3" && item.otherViolation === false) && (
                                                        <>
                                                            {violations
                                                                .filter((item) => item.category !== "3" && item.otherViolation === false)
                                                                .map((item) => (
                                                                    <p key={item.id || count} className="mt-2">
                                                                        <span className="font-bold">Φ.Κ. # {count++}</span>{" "}
                                                                        <span>
                                                                            {item?.violations?.map((v: string, i: number) => (
                                                                                <span key={i}>
                                                                                    {v}
                                                                                    {i < item.violations.length - 1 && ", "}
                                                                                </span>
                                                                            ))}
                                                                        </span>{" "}
                                                                        Κατηγορία {item.category || "N/A"}, Έτος κατασκευής: {item.age || "N/A"}.
                                                                    </p>
                                                                ))}
                                                        </>
                                                    )}


                                                    {/* Step 2 — Category 3 (once) */}
                                                    {category3 && (
                                                        <p key="category3" className="mt-2">
                                                            <span className="font-bold">Φ.Κ. # {count++}</span>. Αυθαίρετες μικρές παραβάσεις της κατηγορίας 3 του άρθρου 96,
                                                            του Ν.4495/17, Κατηγορία 3, Έτος κατασκευής: {category3.age || "N/A"}.{" "}
                                                            <span>
                                                                {category3?.violations?.map((v: string, i: number) => (
                                                                    <span key={i}>
                                                                        {v}
                                                                        {i < category3.violations.length - 1 && ", "}
                                                                    </span>
                                                                ))}
                                                            </span>
                                                        </p>
                                                    )}

                                                    {/* Step 3 — Other violations */}
                                                    {hasOther && (() => {
                                                        const other = violations.find((item) => item.otherViolation);
                                                        return (
                                                            <p key="other" className="mt-2">
                                                                <span className="font-bold">Φ.Κ. #{count++}.</span> Λοιπές Πολεοδομικές παραβάσεις του άρθρου 100 του Ν.4495/2017 –{" "}
                                                                <span>
                                                                    {other?.violations?.map((v: string, i: number) => (
                                                                        <span key={i}>
                                                                            {v}
                                                                            {i < other.violations.length - 1 && ", "}
                                                                        </span>
                                                                    ))}
                                                                </span>{" "}
                                                                και σύμφωνα με το Παράρτημα Β του Ν.4495/2017 ορίζονται ως (1) Πολεοδομική παράβαση.
                                                                (επισυνάπτεται αναλυτικός προϋπολογισμός).
                                                            </p>
                                                        );
                                                    })()}
                                                </>
                                            );
                                        })()}
                                    </div>

                                </div>
                                <div className="border-t border-dashed"></div>
                            </div>
                            <div className="border border-t-0">
                                <div className="border-b border-dashed"></div>
                                <div className="">
                                    <div className="my-2 p-2"><span className="font-bold mr-2">Ημερομηνία Ολοκλήρωσης ή Εγκατάστασης Αυθαίρετων Κατασκευών:</span>
                                        {
                                            [...new Set(violations?.map((item) => item.age))].map((uniqueAge, i, arr) => (
                                                <span key={i}>
                                                    {uniqueAge}
                                                    {i < arr.length - 1 && ", "}
                                                </span>
                                            ))
                                        }
                                    </div>
                                    <div><span className="font-bold p-2">Έγγραφο Παλαιότητας:</span> Αεροφωτογραφία από Ελληνικό Κτηματολόγιο, Συμβόλαιο ιδιοκτησίας</div>
                                    <div className="border-b border-dashed my-2 px-2"></div>
                                    <p className="font-bold px-2">Κατηγορία Χρήσης:</p>
                                    <div className="border-b border-dashed my-2"></div>
                                    <p className="font-bold px-2">Τιμή Ζώνης: - <span className="ml-10">Ποσοστό  και Είδος Ιδιοκτησίας:</span> <span className="ml-2">{owner?.ownershipPercentageOwner || "N/A"}</span> <span>{owner?.ownerTypeOwnership || "N/A"}</span> <span className="ml-5">Χρήση Γής: Αμιγής / Γενική Κατοικία</span>
                                    </p>
                                    <div className="border-b border-dashed my-2"> </div>
                                    <p className="p-2">Δηλώνω ρητά ότι δεν εμπίπτει σε καμία από τις περιπτώσεις του άρθρου 89 του Ν. 4495/17 και ότι οι ως άνω παραβάσεις είχαν ολοκληρωθεί προ της 28.07.2011 και σύμφωνα με το άρθρο 96 του Ν. 4495/17</p>
                                </div>
                            </div>
                            <div className="my-3">
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
                            <div className="text-xs pt-12 pb-8">
                                <p> (1) Αναγράφεται από τον ενδιαφερόμενο πολίτη ή Αρχή ή η Υπηρεσία του δημόσιου τομέα, που απευθύνεται η αίτηση.</p>
                                <p>(2) Αναγράφεται ολογράφως.</p>
                                <p> (3) «Όποιος εν γνώσει του δηλώνει ψευδή γεγονότα ή αρνείται ή αποκρύπτει τα αληθινά με έγγραφη υπεύθυνη δήλωση του άρθρου 8 τιμωρείται με φυλάκιση τουλάχιστον τριών μηνών. Εάν ο υπαίτιος αυτών των πράξεων σκόπευε να προσπορίσει στον εαυτόν του ή σε άλλον περιουσιακό όφελος βλάπτοντας τρίτον ή σκόπευε να βλάψει άλλον, τιμωρείται με κάθειρξη μέχρι 10 ετών.</p>
                                <p>(4) Σε περίπτωση ανεπάρκειας χώρου η δήλωση συνεχίζεται στην πίσω όψη της και υπογράφεται από τον δηλούντα ή την δηλούσα.</p>
                            </div>
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
                                        {/* <div className="flex flex-col gap-2">
                                            <label className="font-medium">ΠΡΟΣ *:</label>
                                            <input
                                                type="text"
                                                {...register("ydom", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                defaultValue={allData?.ydom || ""}
                                            />
                                        </div> */}
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
                                                {...register("projectDescription")}
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
        </div>
    )

}
