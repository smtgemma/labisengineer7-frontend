
"use client"

import { useForm } from "react-hook-form"
import { useGetMeQuery, useUpdateProject2Mutation } from "@/redux/features/templates/allTemplateSlice"
import { format } from "date-fns"
import QuestionAnswer from "../Question-answer"
import { useState } from "react"
import { FaRegEdit } from "react-icons/fa"

interface FormData {
    projectDescriptions: string
    propertyPlace: string
    propertyPostalCode: string
    municipalityCommunity: string
    propertyNumber: string
    propertyAddress: string

}

interface allDataProps {
    owners: any[]
    engineers: any[]
    projectDescriptions: string
    propertyPostalCode: string
    propertyPlace: string
    propertyAddress: string
    createdAt: string
    horizontalPropertyName: string
    municipalityCommunity: string
    propertyNumber: string
    issuingAuthority: string
    kaekProperty: string
    permitNumber: string
    lastName: string
    firstName: string
    specialty: string
    technicalDescriptionThree: string
    technicalDescriptionFour: string
    technicalDescriptionFive: string
    licenseNumberRevision: string
    serviceId: string
    id: string
    createdById: string
}

type questionProps = {
    question: string;
    answer: string;
};
type violationsProps = {
    age: string;
    category: string;
    createdAt: string;   // ISO date string
    formId: number;
    id: string;
    otherViolation: boolean;
    projectId: string;
    showRemainingViolations: boolean;
    updatedAt: string;   // ISO date string
    violations: string[];
};


export default function S2D2({ allData, question, violations, setIsModalOpen }: { allData: allDataProps, question: questionProps[], violations: violationsProps[], setIsModalOpen: (value: boolean) => void; }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const { projectDescriptions, horizontalPropertyName, propertyPostalCode, municipalityCommunity,
        propertyNumber, propertyAddress, propertyPlace, issuingAuthority, kaekProperty, permitNumber,
        createdAt, serviceId, id, createdById, lastName, firstName, specialty, technicalDescriptionThree, technicalDescriptionFour, technicalDescriptionFive, licenseNumberRevision, } = allData || {}
    const owner = allData?.owners || []
    console.log(allData, "allData=====================================")

    const [updateProject2] = useUpdateProject2Mutation()
    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature


    // for editing data 
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({})

    const onSubmit = async (data: FormData) => {
        console.log("Updated Data:", data)
        const addNewData = {
            serviceId: serviceId,
            ...data
        }
        const formData = new FormData()
        formData.append("data", JSON.stringify(addNewData))

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

        reset()
        setIsEditModalOpen(false)
        setIsModalOpen(false)
    }

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white leading-relaxed text-sm arial">
            <div className="text-right -mt-9">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            <h2 className="text-center text-2xl font-bold">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ
            </h2>
            <p className="text-sm font-semibold text-center mb-6">
                (σύμφωνα με το άρθρο 99 του ν.4495/2017)
            </p>

            {/* <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-12">
                    <h4 className="text-sm">Έργο</h4>
                    <p className="text-sm uppercase">{projectDescription || "N/A"}</p>
                </div>
                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">
                        {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
                        ΔΗΜΟΣ {municipalityCommunity || "N/A"},
                        ΤΚ {propertyPostalCode || "N/A"}
                    </h3>
                </div>
                <div className="flex">
                    <span className="text-sm">Ιδιοκτήτης: </span>
                    <div className="flex-1">
                        <div className="flex items-center justify-center gap-2">
                            {
                                owner?.map((e: any, i: number) => (
                                    <h3 key={i} className="text-sm">
                                        {e.firstName || e.first_name || "N/A"} {e.lastName || e.last_name || "N/A"}
                                    </h3>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> */}
            < div className="mb-8 space-y-4" >
                {/* Project Name */}
                < div className="flex items-center justify-between" >
                    <span className="min-w-[120px] text-sm font-medium">Έργο:</span>
                    <h3 className="flex-1 text-sm text-center uppercase">
                        {projectDescriptions || "N/A"}
                    </h3>
                </ div>

                {/* Property Address */}
                < div className="flex items-center justify-between" >
                    <span className="min-w-[120px] text-sm font-medium">Θέση:</span>
                    <h3 className="flex-1 text-sm text-center">
                        {propertyAddress || "N/A"} {propertyNumber || "N/A"},{" "}
                        {propertyPlace || "N/A"}, ΔΗΜΟΣ {municipalityCommunity || "N/A"}, ΤΚ{" "}
                        {propertyPostalCode || "N/A"}
                    </h3>
                </ div>

                {/* Owner Section */}
                < div className="flex items-start justify-between" >
                    <span className="min-w-[120px] text-sm font-medium">Ιδιοκτήτης:</span>
                    <div className="flex-1 text-center">
                        {owner?.length > 0 ? (
                            <h3 className="text-sm">
                                {owner
                                    .map(
                                        (e: any) =>
                                            `${e.firstName || e.first_name || "N/A"} ${e.lastName || e.last_name || "N/A"
                                            }`
                                    )
                                    .join(", ")}
                            </h3>
                        ) : (
                            <h3 className="text-sm">N/A</h3>
                        )}
                    </div>
                </ div>

            </div >
            <div className="mb-2 mt-6">
                <p
                    className="text-sm"
                    style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                >
                    {technicalDescriptionThree || "N/A"}
                </p>

                <p
                    className="text-sm mt-2"
                    style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                >
                    {technicalDescriptionFour || "N/A"}
                </p>

            </div>
            <div>
                <p
                    className="text-sm mt-2"
                    style={{ textIndent: "2em", whiteSpace: "pre-line" }}
                >
                    {technicalDescriptionFive || "N/A"}
                </p>
                <p className="mt-4">
                    <span className="ml-[28px]">Σύμφωνα με την σημερινή μας αυτοψία και συγκρίνοντας τα εγκεκριμένα Πολεοδομικά σχέδια της υπ΄αριθμόν</span>
                    <span className="mx-1">{permitNumber || "N/A"}</span> οικοδομικής αδείας και "{licenseNumberRevision || "N/A"}": αναθεώρησης αυτής,
                    διαπιστώθηκαν οι παρακάτω πολεοδομικές παραβάσεις που τακτοποιούνται με την παρούσα δήλωση :
                </p>
                <div className="mt-5">
                    {/* Step 1 — Show categories 1,2,4,5 */}
                    {violations.length > 0 && (() => {
                        let count = 1; // common counter for all Φ.Κ. numbers

                        const nonCategory3 = violations.filter((item) => String(item.category) !== "3");
                        const category3 = violations.find((item) => String(item.category) === "3");
                        const hasOther = violations.some((item) => item.otherViolation);

                        return (
                            <>
                                {/* Step 1 — Non-category 3 */}
                                {/* { !hasOther && nonCategory3.map((item) => (
                                    <p key={item.id || count} className="mt-2">
                                        Φ.Κ. #{count++}.{" "}
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
                                ))} */}
                                {violations.some((item) => item.category !== "3" && item.otherViolation === false) && (
                                    <>
                                        {violations
                                            .filter((item) => item.category !== "3" && item.otherViolation === false)
                                            .map((item) => (
                                                <p key={item.id || count} className="mt-2">
                                                    <span className="ml-[28px]">Φ.Κ. #{count++}.{" "}</span>
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
                                        <span className="ml-[28px]">Φ.Κ. #{count++}.{" "}</span> Αυθαίρετες μικρές παραβάσεις της κατηγορίας 3 του άρθρου 96,
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
                                            <span className="ml-[28px]">Φ.Κ. #{count++}.{" "}</span> Λοιπές Πολεοδομικές παραβάσεις του άρθρου 100 του Ν.4495/2017 –{" "}
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


                    {/* Step 4 — Common ending text */}
                    <div className="my-2">
                        <p>
                            <span className="ml-[28px]">Ο χρόνος κατασκευής των ανωτέρω αυθαίρετων κατασκευών τεκμηριώνεται από τα </span>
                            προσκομισθέντα στοιχεία, τα οποία επιβεβαιώνουν ότι οι κατασκευές προϋπήρχαν της
                            28.07.2011.
                            Συγκεκριμένα, χρησιμοποιήθηκαν: Αεροφωτογραφίες έτους{" "}
                            στις οποίες διακρίνονται οι αυθαίρετες επεμβάσεις.
                            Υπεύθυνη Δήλωση Ιδιοκτήτη, στην οποία δηλώνεται ο χρόνος εκτέλεσης των εργασιών.
                            Με βάση τα ανωτέρω, τεκμαίρεται ότι οι κατασκευές υφίστανται πριν την κρίσιμη
                            ημερομηνία της 28/07/2011, και συνεπώς είναι επιλέξιμες για υπαγωγή στις διατάξεις
                            του Ν.4495/2017.
                        </p>
                    </div>
                </div>

                <QuestionAnswer question={question} allData={allData} />

            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="my-4 text-center">
                    <h2>Hμερομηνία</h2>
                    <p><p>{createdAt
                        ? format(new Date(createdAt), "dd/MM/yyyy")
                        : "N/A"}</p></p>
                    <h3>Ο Συντάξας Μηχανικός</h3>
                </div>
                {/* signature  */}
                <div className="flex items-center justify-end p-4">
                    <img src={signature} alt="Engineer's Signature" className="w-[150px] h-[150px]" />
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
                                    <label className="font-medium w-1/8">Έργο *:</label>
                                    <input
                                        defaultValue={projectDescriptions || "Project Description "}
                                        type="text"
                                        {...register("projectDescriptions")}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/8">Θέση*:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            defaultValue={propertyAddress || "propertyAddress"}
                                            {...register("propertyAddress")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyNumber || "propertyNumber"}
                                            {...register("propertyNumber")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={municipalityCommunity || "municipalityCommunity"}
                                            {...register("municipalityCommunity")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPostalCode || "propertyPostalCode"}
                                            {...register("propertyPostalCode")}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            defaultValue={propertyPlace || "propertyPlace"}
                                            {...register("propertyPlace")}
                                            className="border p-2 rounded text-sm"
                                        />
                                    </div>
                                </div>
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
