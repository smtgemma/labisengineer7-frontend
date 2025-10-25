
"use client"
import { useState } from "react";
import StampComponent from "../../shared/signture/signture";
// for editing 
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"

interface FormData {
    owner_name?: string;
    owner_surname?: string;
    owner_father_name?: string;
    owner_mother_name?: string;
    owner_birth_date?: string;
    owner_birth_place?: string;
    owner_id?: string;
    owner_phone?: string;
    owner_city?: string;
    owner_address?: string;
    owner_address_number?: string;
    owner_postal_code?: string;
    owner_email?: string;
    owner_afm?: string;
    project_description?: string;
}
// end editing 

interface allDataProps {
    owners: any[];
}



export default function F5D4({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const owners = allData?.owners || [];
    console.log(owners, "-09-============================================")

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
        <div>
                <div className="max-w-[796px] mx-auto bg-white my-16">
                    <div className="text-right -mt-3">
                        <button
                            className="mt-1 px-4 py-1"
                            onClick={() => setIsEditModalOpen(true)}
                        >
                            <FaRegEdit className="text-black text-2xl cursor-pointer" />
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
                                {/* <div className="flex-1 p-2  font-bold">{owner?.ydom || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Name Owner row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                                {/* <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner?.firstName || "N/A"}</div> */}
                                <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                                {/* <div className="flex-1 p-2  font-bold">{owner?.lastName || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Father's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.fatherName || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Mother's name row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.motherName || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Birth date row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.birthDate || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Birth town row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.birthPlace}</div> */}
                            </div>
                        </div>

                        {/* ID and mobile row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                                {/* <div className=" p-2 border-r border-gray-400 font-bold">{owner?.idNumber || "N/A"}</div> */}
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.phone || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* Address row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                                {/* <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner?.city || "N/A"}</div> */}
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                                {/* <div className="w-24 p-2 border-r border-gray-400 font-bold ">{owner?.address || "N/A"}</div> */}
                                <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                                {/* <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner?.addressNumber || "N/A"}</div> */}
                                <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.postalCode || "N/A"}</div> */}
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
                                {/* <div className=" p-2 underline ">{owner?.email || "N/A"}</div> */}
                            </div>
                        </div>

                        {/* VAT row */}
                        <div className="border-b border-gray-400">
                            <div className="flex">
                                <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                                {/* <div className="flex-1 p-2 font-bold">{owner?.afm || "N/A"}</div> */}
                                <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                            </div>
                        </div>

                        {/* Declaration text */}
                        <div className="p-4 text-sm">
                            <p className="mb-4">
                                Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                            </p>

                            <p className=" font-bold">για το οικοδομικό έργο με τίτλο :</p>
                            {/* <p className=" mb-6">{project_description || "N/A"}</p> */}
                        </div>

                        {/* Additional disclaimer text */}
                        <div className="space-y-4 text-sm m p-4">
                            {/* <p>επί της οδού {owner?.address || "N/A"}, {owner?.city || "N/A"} , {owner?.postalCode || "N/A"} ( FOR PROPERTY)</p> */}
                            <p>
                                <span className="text-sm font-bold">Οι προβλεπόμενες επεμβάσεις δεν θίγουν, δεν επηρεάζουν και δεν επιφέρουν καμία τροποποίηση στον φέροντα οργανισμό (Φ.Ο.)</span> του κτιρίου,
                                όπως αυτός έχει κατασκευαστεί βάσει της εγκεκριμένης οικοδομικής άδειας και των εκάστοτε εγκεκριμένων στατικών μελετών.
                            </p>
                            <p>
                                <span className="text-sm font-bold">Οι επεμβάσεις δεν αντίκεινται σε ειδικότερες διατάξεις</span>, που αφορούν στατικά, πυροπροστασία, υγιεινή,
                                προσβασιμότητα, ενεργειακή απόδοση, προστασία πολιτιστικής κληρονομιάς ή οποιονδήποτε άλλον τομέα ειδικής νομοθεσίας που σχετίζεται με τις κατασκευές.
                            </p>
                        </div>

                        {/* Signature section */}
                        <div className="flex justify-end">
                            <div className="flex justify-end p-4">
                                <div className="text-right space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Ημερομηνία :</span>
                                        <span className="text-sm font-medium">8/18/2025</span>
                                    </div>
                                    <div className="text-sm mt-8 text-center">
                                        <div>( Υπογραφή )</div>
                                        <div className="mt-4">Ο/Η/ Δηλών/ούσα</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* common component  */}
                        <div className="flex items-center justify-end mt-6 p-4">
                            <StampComponent />
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
                                        {/* Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_name", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.firstName || ""}
                                            />
                                        </div>

                                        {/* Surname */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Επώνυμο *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_surname", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.lastName || ""}
                                            />
                                        </div>

                                        {/* Father's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Πατρός *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_father_name", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.fatherName || ""}
                                            />
                                        </div>

                                        {/* Mother's Name */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Όνομα Μητρός *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_mother_name", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.motherName || ""}
                                            />
                                        </div>

                                        {/* Birth Date */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ημερομηνία Γέννησης *:</label>
                                            <input
                                                type="date"
                                                {...register("owner_birth_date", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.birthDate || ""}
                                            />
                                        </div>

                                        {/* Birth Place */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τόπος Γέννησης *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_birth_place", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.birthPlace}
                                            />
                                        </div>

                                        {/* ID */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Ταυτότητας *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_id", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.idNumber || ""}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Τηλέφωνο *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_phone", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.phone || ""}
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Πόλη *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_city", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.city || ""}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Διεύθυνση *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_address", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.address || ""}
                                            />
                                        </div>

                                        {/* Address Number */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Αριθμός Διεύθυνσης *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_address_number", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.addressNumber || ""}
                                            />
                                        </div>

                                        {/* Postal Code */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Ταχυδρομικός Κώδικας *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_postal_code", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.postalCode || ""}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Email *:</label>
                                            <input
                                                type="email"
                                                {...register("owner_email", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={owner?.email || ""}
                                            />
                                        </div>

                                        {/* AFM */}
                                        <div className="flex flex-col gap-2">
                                            <label className="font-medium">Α.Φ.Μ. *:</label>
                                            <input
                                                type="text"
                                                {...register("owner_afm", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                //  defaultValue={owner?.afm || ""}
                                            />
                                        </div>

                                        {/* Project Description */}
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="font-medium">Περιγραφή Έργου *:</label>
                                            <input
                                                type="text"
                                                {...register("project_description", { required: "This field is required" })}
                                                className="flex-1 border p-2 rounded text-sm"
                                                // defaultValue={project_description || ""}
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
    )
}
