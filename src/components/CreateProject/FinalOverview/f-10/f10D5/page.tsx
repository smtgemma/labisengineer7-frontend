"use client"

import StampComponent from "../../shared/signture/signture"
import { FaRegEdit } from "react-icons/fa";

import { format } from "date-fns";

// for editing 
import { useForm } from "react-hook-form"
import { useState } from "react";

interface FormData {
    owner_name: string
    project_description: string
    owner_address: string
    owner_city: string
    owner_postal_code: string
}
// end editing 
interface allDataProps {
    owners: any[];
    allDescriptionTasks: any[]
    projectDescription: string;
    horizontalPropertyName: string;
    propertyPostalCode: string;
    propertyAddress: string;
    propertyPlace: string;
    createdAt: string;
}

export default function F10D5({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owner = allData?.owners?.[0] || {};
    const {allDescriptionTasks} = allData || {}
    const { horizontalPropertyName, propertyPostalCode, propertyAddress, propertyPlace, projectDescription, createdAt } = allData || {};
    console.log(allDescriptionTasks)


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
        setIsEditModalOpen(false)
    }


    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
            <div className="text-right -mt-7">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsEditModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div>
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΕΝΗΜΕΡΩΤΙΚΟ ΣΗΜΕΙΩΜΑ ΜΗ ΑΠΑΙΤΗΣΗΣ ΣΧΕΔΙΩΝ ΟΨΕΩΝ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm">{projectDescription || "N/A"}</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">{propertyAddress || "N/A"}, {propertyPlace || "N/A"}, {propertyPostalCode || "N/A"} ( FOR BUILDING)</h3>
                </div>

                <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
                    <span className="">Ιδιοκτήτης:</span>
                    <h3 className=" text-sm">{owner?.firstName || "N/A"} {owner?.lastName || "N/A"}</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ {horizontalPropertyName || "N/A"}</span> επί της οδού <br /> <span className="font-semibold">{propertyAddress || "N/A"}, {propertyPlace || "N/A"}, {propertyPostalCode || "N/A"} ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            <div className="space-y-6 ml-10">
                {/* <div>
                    <h3 className="text-sm font-bold">● Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου
                    </h3>
                    <p className="text-sm mb-6">Περιλαμβάνεται η εγκατάσταση μεταλλικών ικριωμάτων κατά μήκος των όψεων του κτιρίου, σύμφωνα με την ισχύουσα νομοθεσία περί μέτρων ασφαλείας. Η τοποθέτηση διασφαλίζει ασφαλή και πλήρη πρόσβαση στα σημεία επέμβασης για τις εργασίες αποκατάστασης και χρωματισμού των εξωτερικών επιφανειών.</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">● Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών
                    </h3>
                    <p className="text-sm mb-6">Αφορά την αποκατάσταση φθαρμένων ή αποσαθρωμένων επιχρισμάτων εξωτερικής τοιχοποιίας. Περιλαμβάνονται καθαίρεση σαθρών επιχρισμάτων, εφαρμογή νέου σοβά, στοκάρισμα ρωγμών και λείανση επιφανειών, χωρίς επέμβαση στον φέροντα οργανισμό ή στη γεωμετρία του κτιρίου.</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">● Εξωτερικοί χρωματισμοί επί των όψεων
                    </h3>
                    <p className="text-sm mb-6">Προβλέπεται η πλήρης προετοιμασία και βαφή των εξωτερικών επιφανειών του κτιρίου με ακρυλικό ή σιλικονούχο χρώμα υψηλής αντοχής. Περιλαμβάνει καθαρισμό, αστάρωμα και εφαρμογή δύο στρώσεων τελικού χρώματος, με κατάλληλο υλικό και μέθοδο ανάλογα με τις απαιτήσεις του υποστρώματος.</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">● Επισκευή και στερέωση μαρμάρινων στοιχείων( π.χ περβαζιών, στηθαίων)
                    </h3>
                    <p className="text-sm mb-6">Προβλέπεται η επαναστερέωση ή αντικατάσταση φθαρμένων ή αποκολλημένων μαρμάρινων επιστρώσεων στις όψεις, με χρήση αγκυρίων ή κόλλας κατάλληλης για εξωτερική χρήση. Οι αρμοί θα σφραγιστούν με σιλικονούχα ή πολυουρεθανική μαστίχη για αποτροπή εισροής υγρασίας.</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">● Αποκατάσταση στοιχείων απορροής όμβριων και μεταλλικών εξαρτημάτων
                    </h3>
                    <p className="text-sm mb-6">Περιλαμβάνεται ο έλεγχος και η αποκατάσταση ή αντικατάσταση φθαρμένων υδρορροών, στομίων, καναλιών ή σταγονόδρομων από λαμαρίνα ή συνθετικά υλικά. Στόχος είναι η αποκατάσταση της λειτουργικής απορροής όμβριων και η προστασία των όψεων από φθορές λόγω υγρασίας.</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">● Χρωματισμός μεταλλικών κιγκλιδωμάτων (σιδηρών στοιχείων)
                    </h3>
                    <p className="text-sm mb-6">Προβλέπεται ο καθαρισμός, αποσκουριάσμα και βαφή των μεταλλικών κιγκλιδωμάτων (κάγκελα, εξώστες, αυλόπορτες) με εφαρμογή αντιδιαβρωτικού υποστρώματος και τελικής βαφής δύο στρώσεων με χρώμα μετάλλου εξωτερικής χρήσης. Η εργασία αφορά υφιστάμενα στοιχεία και δεν μεταβάλλει τη μορφή ή τον χαρακτήρα του κτιρίου</p>
                </div> */}

                {
                    allDescriptionTasks ? (allDescriptionTasks?.map((task: any, index: number) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold">● {task?.id}</h3>
                            <p className="text-sm">{task?.description}</p>
                        </div>
                    ))) : (
                        <h2 className="text-3xl font-bold">Data not found</h2>
                    )
                }
                <div>
                    <p className="text-sm mb-6">Για το σύνολο των προβλεπόμενων εργασιών <span className="text-sm font-bold">δεν απαιτείται η υποβολή αρχιτεκτονικών όψεων,</span> καθώς:</p>
                    <p className="text-sm mb-6">● Οι εργασίες δεν τροποποιούν το αρχιτεκτονικό περίγραμμα ή τα γεωμετρικά χαρακτηριστικά των όψεων (όπως ανοίγματα, εξώστες, μορφολογικά στοιχεία).
                    </p>
                    <p className="text-sm mb-6">● Δεν πραγματοποιούνται επεμβάσεις που θα είχαν ως αποτέλεσμα την αισθητική ή λειτουργική αλλοίωση των υφιστάμενων όψεων.
                    </p>
                    <p className="text-sm mb-6">● Οι εργασίες αφορούν συντηρήσεις, επισκευές ή επαναχρωματισμούς επί των όψεων, με χρήση υλικών παρόμοιων ή ταυτόσημων με τα υφιστάμενα.
                    </p>
                    <p className="text-sm mb-6">Η μορφή και η εικόνα του κτιρίου παραμένει αμετάβλητη, συνεπώς δεν απαιτείται η υποβολή όψεων σύμφωνα με τις διατάξεις του άρθρου 29 του Ν.4495/2017 και τις σχετικές ερμηνευτικές εγκυκλίους.</p>
                </div>
                {/* {/* Signature Section */}
                <div className="mt-6 text-right flex items-center justify-center p-5">
                    <div className="max-w-[300px]">

                        <div className="text-center">
                            <p>Ημερομηνία :</p>
                            <p>{createdAt && format(new Date(createdAt), "dd/MM/yyyy") || "N/A"}</p>
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
                                        placeholder={owner?.firstName || "owner_name"}
                                        type="text"
                                        {...register("owner_name", { required: "This field is required" })}
                                        className="flex-1 border p-2 rounded text-sm"
                                    />
                                </div>

                                {/* Project */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium w-1/4">Έργο *:</label>
                                    <input
                                        // placeholder={project_description || "Project description"}
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
                                            placeholder={owner?.address || "Address"}
                                            {...register("owner_address", { required: "Address is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner?.city || "City"}
                                            {...register("owner_city", { required: "City is required" })}
                                            className="border p-2 rounded text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder={owner?.postalCode || "Postal Code"}
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



