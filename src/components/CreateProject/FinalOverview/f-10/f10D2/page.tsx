
"use client"

import { useState } from "react"
import StampComponent from "../../shared/signture/signture"
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"

interface FormData {
    owner_name: string
    project_description: string
    owner_address: string
    owner_city: string
    owner_postal_code: string
}
// end editing 

interface allDataProps {
    owner_address: string;
    owner_city: string;
    owner_name: string;
    owner_postal_code: string;
    project_description?: string;
}

export default function F10D2({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    const {
        owner_address,
        owner_city,
        owner_name,
        owner_postal_code,
        project_description,
    } = allData;

    // for editing data 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({})

    const onSubmit = (data: FormData) => {
        console.log("Updated Data:", data)
        reset()
    }

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
            <div className="text-right -mt-9">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm">{project_description || "N/A"}</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">{owner_address || "N/A"}, {owner_city || "N/A"} , {owner_postal_code || "N/A"} ( FOR BUILDING)</h3>
                </div>

                <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
                    <span className="">Ιδιοκτήτης:</span>
                    <h3 className=" text-sm">{owner_name || "N/A"}</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property
                </span> επί της οδού <br /> <span className="font-semibold">{owner_address || "N/A"}, {owner_city || "N/A"}, {owner_postal_code || "N/A"} ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            {/* one  */}
            <div className="space-y-6 ml-10">
                <div>
                    <h1 className="text-sm font-semibold">● Κατεδάφιση/Αποξήλωση Υφιστάμενων Τοιχοπληρώσεων (μη φερόντων στοιχείων)</h1>
                    <p className="text-sm mb-6">
                        Τοπική καθαίρεση τμημάτων εξωτερικών τοιχοποιιών (οπτοπλινθοδομές ή άλλα υλικά πλήρωσης), χωρίς επέμβαση
                        στον φέροντα οργανισμό (π.χ. δοκούς, υποστυλώματα).
                    </p>
                </div>
            </div>

            {/* two  */}
            <div className=" ml-10">
                <h1 className="text-sm font-semibold mt-6"> ● Δημιουργία Νέων Ανοιγμάτων (Παράθυρα / Πόρτες / Βιτρίνες)</h1>
                <p className="text-sm mb-6">
                    Διάνοιξη νέων ανοιγμάτων με κατάλληλες λεπτομέρειες στήριξης και περιμετρικής ενίσχυσης (π.χ. γωνιόκρανα, μεταλλικά πλαίσια, αν χρειάζεται).
                    Τοποθέτηση νέων κουφωμάτων (αλουμινίου, PVC ή ξύλου) στις νέες θέσεις.
                </p>
            </div>

            {/* three */}
            <div className="pl-10 mt-12">
                <h1 className="text-sm font-semibold">
                    ● Μετατόπιση ή Τροποποίηση Υφιστάμενων Ανοιγμάτων
                </h1>
                <div className="space-y-3">
                    <p className="text-sm">
                        Κατάργηση ή μετατόπιση παλαιών κουφωμάτων.
                        Επαναδιαμόρφωση του κελύφους με επισκευές τοιχοποιίας και αποκατάσταση επιχρισμάτων.
                    </p>
                </div>
            </div>

            {/* four */}
            <div className="pl-10 mt-12">
                <h1 className="text-sm font-semibold">
                    ● Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών
                </h1>
                <div className="space-y-3">
                    <p className="text-sm">
                        Αφορά την αποκατάσταση φθαρμένων ή αποσαθρωμένων επιχρισμάτων εξωτερικής τοιχοποιίας.
                        Περιλαμβάνονται καθαίρεση σαθρών επιχρισμάτων, εφαρμογή νέου σοβά, στοκάρισμα ρωγμών
                        και λείανση επιφανειών, χωρίς επέμβαση στον φέροντα οργανισμό ή στη γεωμετρία του κτιρίου.
                    </p>
                </div>
            </div>

            {/* five  */}
            <div className="mt-12 ml-10">
                <h1 className="text-sm font-semibold">
                    ●Αποκατάσταση Όψεων/ Εξωτερικοί χρωματισμοί επί των όψεων
                </h1>
                <p className="text-sm">
                    Προβλέπεται η πλήρης προετοιμασία και βαφή των εξωτερικών επιφανειών του
                    κτιρίου με ακρυλικό ή σιλικονούχο χρώμα υψηλής αντοχής. Περιλαμβάνει καθαρισμό,
                    αστάρωμα και εφαρμογή δύο στρώσεων τελικού χρώματος, με κατάλληλο υλικό και μέθοδο
                    ανάλογα με τις απαιτήσεις του υποστρώματος.
                </p>
            </div>
            {/* {/* Signature Section */}
            <div className="mt-6 text-right flex items-center justify-center p-5">
                <div className="max-w-[300px]">

                    <div className="text-center">
                        <p>Ημερομηνία :</p>
                        <p>06/25/2025</p>
                    </div>
                    <div className="">
                        <h3 className="text-center mb-4">Ο ΜΗΧΑΝΙΚΟΣ</h3>
                        {/* Dashed Border Box = common component*/}
                        <StampComponent
                            title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
                            instructions={[
                                "Με δεξί κλικ",
                                "Αλλαγή εικόνας",
                                " Βάζετε την σφραγίδα σας",
                            ]}
                        />
                    </div>
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
                                {/* Employer */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Εργοδότες *:</label>
                                    <input
                                        placeholder={owner_name || "nowner_name"}
                                        type="text"
                                        {...register("owner_name", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Project */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Έργο *:</label>
                                    <input
                                        placeholder={project_description || "Project description"}
                                        type="text"
                                        {...register("project_description", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Διεύθυνση Έργου *:</label>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            placeholder={owner_address || "Address"}
                                            {...register("owner_address", { required: "Address is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner_city || "City"}
                                            {...register("owner_city", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner_postal_code || "Postal Code"}
                                            {...register("owner_postal_code", { required: "Postal code is required" })}
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



