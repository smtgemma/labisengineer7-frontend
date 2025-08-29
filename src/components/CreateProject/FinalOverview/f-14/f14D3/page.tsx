

// import { useState } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import StampComponent from "../../shared/signture/signture";

// interface allDataProps {
//     owner_address: string;
//     owner_afm: string;
//     owner_birth_date: string;
//     owner_birth_place: string;
//     owner_city: string;
//     owner_email: string;
//     owner_father_name: string;
//     owner_mother_name: string;
//     owner_name: string;
//     owner_phone: string;
//     owner_postal_code: string;
//     owner_surname: string;
//     ydom_name: string;
//     project_description?: string;
//     owner_id?: string;
//     owner_address_number?: string;
// }


// export default function F14D3({ allData }: { allData: allDataProps }) {
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [formData, setFormData] = useState(allData);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//         console.log("Updated Data:", formData);
//         setIsEditModalOpen(false);
//         setFormData(allData);
//         // you can call API here to update backend

//     }
//     const {
//         owner_address,
//         owner_afm,
//         owner_birth_date,
//         owner_birth_place,
//         owner_city,
//         owner_email,
//         owner_father_name,
//         owner_mother_name,
//         owner_name,
//         owner_phone,
//         owner_postal_code,
//         owner_surname,
//         ydom_name,
//         project_description,
//         owner_id,
//         owner_address_number,
//     } = allData;
//     return (
//         <div className="max-w-[794px] mx-auto p-4 bg-white">
//             <div className="text-right -mt-6">
//                 <button
//                     className="mt-1 px-4 py-1"
//                     onClick={() => setIsEditModalOpen(true)}
//                 >
//                     <FaRegEdit className="text-black text-2xl cursor-pointer" />
//                 </button>
//             </div>
//             {/* Header with coat of arms */}
//             <div className="text-center mb-6">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
//                     <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
//                         <div className="w-8 h-8 bg-white rounded-sm"></div>
//                     </div>
//                 </div>
//                 <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
//                 <p className="text-sm font-bold">(άρθρο 8 Ν.1599/1986)</p>
//             </div>

//             {/* Subtitle */}
//             <div className="text-center mb-6 text-sm">
//                 <p>
//                     Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να ελεγχθεί με βάση το αρχείο άλλων
//                     υπηρεσιών
//                 </p>
//                 <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
//             </div>

//             {/* Form table */}
//             <div className="border border-gray-400">
//                 {/* ΠΡΟΣ row */}
//                 <div className="border-b border-gray-400 bg-gray-50">
//                     <div className="flex">
//                         <div className="w-20 p-2 border-r border-gray-400 font-bold text-sm">ΠΡΟΣ(1):</div>
//                         <div className="flex-1 p-2  font-bold">{ydom_name || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Name Engineer row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
//                         <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner_name || "N/A"}</div>
//                         <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
//                         <div className="flex-1 p-2  font-bold">{owner_surname || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Father's name row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
//                         <div className="flex-1 p-2 font-bold">{owner_father_name || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Mother's name row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
//                         <div className="flex-1 p-2 font-bold">{owner_mother_name || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Birth date row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
//                         <div className="flex-1 p-2 font-bold">{owner_birth_date || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Birth town row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
//                         <div className="flex-1 p-2 font-bold">{owner_birth_place || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* ID and mobile row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
//                         <div className=" p-2 border-r border-gray-400 font-bold">{owner_id || "N/A"}</div>
//                         <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
//                         <div className="flex-1 p-2 font-bold">{owner_phone || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Address row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className=" p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
//                         <div className=" p-2 border-r border-gray-400 font-bold ">{owner_city || "N/A"}</div>
//                         <div className=" p-2 border-r border-gray-400 text-sm">Οδός</div>
//                         <div className=" p-2 border-r border-gray-400 font-bold ">{owner_address || "N/A"}</div>
//                         <div className=" p-2 border-r border-gray-400 text-sm">Αριθ</div>
//                         <div className=" p-2 border-r border-gray-400 font-bold ">{owner_address_number || "N/A"}</div>
//                         <div className=" p-2 border-r border-gray-400 text-sm">ΤΚ</div>
//                         <div className="flex-1 p-2 font-bold">{owner_postal_code || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* Contact details row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Αρ. Τηλεομοιότυπου (Fax):</div>
//                         <div className="flex-1 p-2">
//                             <div className="text-sm">
//                                 <div>Δ/νση</div>
//                                 <div>Ηλεκτρ.</div>
//                                 <div>Ταχυδρομ</div>
//                                 <div>ίου (Email):</div>
//                             </div>
//                         </div>
//                         <div className="p-2 underline">{owner_email || "N/A"}</div>
//                     </div>
//                 </div>

//                 {/* VAT row */}
//                 <div className="border-b border-gray-400">
//                     <div className="flex">
//                         <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
//                         <div className="flex-1 p-2 font-bold">{owner_afm || "N/A"}</div>
//                         <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
//                     </div>
//                 </div>

//                 {/* Declaration text */}
//                 <div className="p-4 text-sm">
//                     <p className="mb-4">
//                         Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
//                     </p>
//                     <p className=" font-bold">
//                         για το οικοδομικό έργο με τίτλο :
//                     </p>
//                     <p className=" mb-6">{project_description || "N/A"}</p>
//                 </div>

//                 {/* Additional disclaimer text */}
//                 <div className="p-4 text-sm ">
//                     <p className="mb-6">
//                         <span className="font-bold">ΔΕΝ επηρεάζεται, δεν τροποποιείται</span> και δεν θίγεται, καθ’ οιονδήποτε τρόπο ο φέρων οργανισμός (στατικός φορέας)
//                         του κτιρίου, και οι εργασίες δεν επιφέρουν
//                         επιβάρυνση ή αλλαγή στα στατικά ή γεωμετρικά χαρακτηριστικά του φέροντος οργανισμού, όπως αυτά υφίστανται σύμφωνα με την υφιστάμενη Οικοδομική Άδεια.
//                     </p>
//                     <p className="">
//                         Οι εργασίες θα εκτελεστούν σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές,
//                         τις ελάχιστες απαιτήσεις ασφάλειας και υγείας, καθώς και με πλήρη συμμόρφωση προς τις πολεοδομικές και λοιπές σχετικές διατάξεις.
//                     </p>
//                 </div>

//                 {/* Signature section */}
//                 <div className="flex items-center justify-center">
//                     <div className="flex justify-end p-4">
//                         <div className="text-right space-y-2">
//                             <div className="flex items-center gap-4">
//                                 <span className="text-sm">Ημερομηνία :</span>
//                                 <span className="text-sm font-medium">8/5/2025</span>
//                             </div>
//                             <div className="text-sm mt-8 text-center">
//                                 <div>( Υπογραφή )</div>
//                                 <div className="mt-4">Ο Δηλών</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* common component  */}
//                 <div className="flex justify-center items-center mt-6">
//                     <StampComponent />
//                 </div>
//                 {/* EDIT MODAL */}
//                 {isEditModalOpen && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                         <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
//                             {/* Close button */}
//                             <button
//                                 className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
//                                 onClick={() => setIsEditModalOpen(false)}
//                             >
//                                 ✕
//                             </button>

//                             <h2 className="text-lg font-bold mb-4">✍️ Edit Declaration Data</h2>

//                             <div className="grid grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-2">
//                                 {/* ΠΡΟΣ */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="ydom_name" className="text-sm font-medium mb-1">ΠΡΟΣ (Ydom)</label>
//                                     <input id="ydom_name" name="ydom_name" value={formData.ydom_name} onChange={handleChange} placeholder="ΠΡΟΣ (Ydom)" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Όνομα */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_name" className="text-sm font-medium mb-1">Όνομα</label>
//                                     <input id="owner_name" name="owner_name" value={formData.owner_name} onChange={handleChange} placeholder="Όνομα" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Επώνυμο */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_surname" className="text-sm font-medium mb-1">Επώνυμο</label>
//                                     <input id="owner_surname" name="owner_surname" value={formData.owner_surname} onChange={handleChange} placeholder="Επώνυμο" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Πατέρας */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_father_name" className="text-sm font-medium mb-1">Όνομα Πατρός</label>
//                                     <input id="owner_father_name" name="owner_father_name" value={formData.owner_father_name} onChange={handleChange} placeholder="Όνομα Πατρός" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Μητέρα */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_mother_name" className="text-sm font-medium mb-1">Όνομα Μητρός</label>
//                                     <input id="owner_mother_name" name="owner_mother_name" value={formData.owner_mother_name} onChange={handleChange} placeholder="Όνομα Μητρός" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Ημερομηνία Γέννησης */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_birth_date" className="text-sm font-medium mb-1">Ημερομηνία Γέννησης</label>
//                                     <input id="owner_birth_date" name="owner_birth_date" value={formData.owner_birth_date} onChange={handleChange} placeholder="Ημερομηνία Γέννησης" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Τόπος Γέννησης */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_birth_place" className="text-sm font-medium mb-1">Τόπος Γέννησης</label>
//                                     <input id="owner_birth_place" name="owner_birth_place" value={formData.owner_birth_place} onChange={handleChange} placeholder="Τόπος Γέννησης" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Αριθμός Ταυτότητας */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_id" className="text-sm font-medium mb-1">Αριθμός Δελτίου Ταυτότητας</label>
//                                     <input id="owner_id" name="owner_id" value={formData.owner_id || ""} onChange={handleChange} placeholder="Αριθμός Δελτίου Ταυτότητας" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Τηλέφωνο */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_phone" className="text-sm font-medium mb-1">Τηλέφωνο</label>
//                                     <input id="owner_phone" name="owner_phone" value={formData.owner_phone} onChange={handleChange} placeholder="Τηλέφωνο" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Πόλη */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_city" className="text-sm font-medium mb-1">Πόλη</label>
//                                     <input id="owner_city" name="owner_city" value={formData.owner_city} onChange={handleChange} placeholder="Πόλη" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Διεύθυνση */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_address" className="text-sm font-medium mb-1">Διεύθυνση</label>
//                                     <input id="owner_address" name="owner_address" value={formData.owner_address} onChange={handleChange} placeholder="Διεύθυνση" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Αριθμός Διεύθυνσης */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_address_number" className="text-sm font-medium mb-1">Αριθμός Διεύθυνσης</label>
//                                     <input id="owner_address_number" name="owner_address_number" value={formData.owner_address_number || ""} onChange={handleChange} placeholder="Αριθμός Διεύθυνσης" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Ταχυδρομικός Κώδικας */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_postal_code" className="text-sm font-medium mb-1">Ταχυδρομικός Κώδικας</label>
//                                     <input id="owner_postal_code" name="owner_postal_code" value={formData.owner_postal_code} onChange={handleChange} placeholder="Ταχυδρομικός Κώδικας" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Email */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_email" className="text-sm font-medium mb-1">Email</label>
//                                     <input id="owner_email" type="email" name="owner_email" value={formData.owner_email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* ΑΦΜ */}
//                                 <div className="flex flex-col">
//                                     <label htmlFor="owner_afm" className="text-sm font-medium mb-1">Α.Φ.Μ.</label>
//                                     <input id="owner_afm" name="owner_afm" value={formData.owner_afm} onChange={handleChange} placeholder="Α.Φ.Μ." className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Project Description - Full width */}
//                                 <div className="flex flex-col col-span-3">
//                                     <label htmlFor="project_description" className="text-sm font-medium mb-1">Project Description</label>
//                                     <textarea id="project_description" name="project_description" value={formData.project_description || ""} onChange={handleChange} placeholder="Project Description" className="border p-2 rounded w-full" />
//                                 </div>
//                             </div>


//                             {/* Save button */}
//                             <div className="flex justify-end mt-4">
//                                 <button
//                                     className="px-4 py-2 border border-black text-black rounded-md cursor-pointer"
//                                     onClick={handleSave}
//                                 >
//                                     Save Information
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }





import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import StampComponent from "../../shared/signture/signture";

interface allDataProps {
    owner_address: string;
    owner_afm: string;
    owner_birth_date: string;
    owner_birth_place: string;
    owner_city: string;
    owner_email: string;
    owner_father_name: string;
    owner_mother_name: string;
    owner_name: string;
    owner_phone: string;
    owner_postal_code: string;
    owner_surname: string;
    ydom_name: string;
    project_description?: string;
    owner_id?: string;
    owner_address_number?: string;
}


export default function F14D3({ allData }: { allData: allDataProps }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState(allData);

    // Extra editable paragraphs
    const [paragraphs, setParagraphs] = useState({
        p1: "ΔΕΝ επηρεάζεται, δεν τροποποιείται</span> και δεν θίγεται, καθ’ οιονδήποτε τρόπο ο φέρων οργανισμός (στατικός φορέας)  του κτιρίου, και οι εργασίες δεν επιφέρουν επιβάρυνση ή αλλαγή στα στατικά ή γεωμετρικά χαρακτηριστικά του φέροντος οργανισμού, όπως αυτά υφίστανται σύμφωνα με την υφιστάμενη Οικοδομική Άδεια.",
        p2: "Οι εργασίες θα εκτελεστούν σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές, τις ελάχιστες απαιτήσεις ασφάλειας και υγείας, καθώς και με πλήρη συμμόρφωση προς τις πολεοδομικές και λοιπές σχετικές διατάξεις.",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setParagraphs({ ...paragraphs, [name]: value });
    };

    const handleSave = () => {
        console.log("Updated Data:", formData);
        setIsEditModalOpen(false);
        setFormData(allData);
        // you can call API here to update backend

    }
    const {
        owner_address,
        owner_afm,
        owner_birth_date,
        owner_birth_place,
        owner_city,
        owner_email,
        owner_father_name,
        owner_mother_name,
        owner_name,
        owner_phone,
        owner_postal_code,
        owner_surname,
        ydom_name,
        project_description,
        owner_id,
        owner_address_number,
    } = allData;
    return (
        <div className="max-w-[794px] mx-auto p-4 bg-white">
            <div className="text-right -mt-6">
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
                <p className="text-sm font-bold">(άρθρο 8 Ν.1599/1986)</p>
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
                        <div className="flex-1 p-2  font-bold">{ydom_name || "N/A"}</div>
                    </div>
                </div>

                {/* Name Engineer row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                        <div className="w-40 p-2 border-r border-gray-400  font-bold">{owner_name || "N/A"}</div>
                        <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                        <div className="flex-1 p-2  font-bold">{owner_surname || "N/A"}</div>
                    </div>
                </div>

                {/* Father's name row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                        <div className="flex-1 p-2 font-bold">{owner_father_name || "N/A"}</div>
                    </div>
                </div>

                {/* Mother's name row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                        <div className="flex-1 p-2 font-bold">{owner_mother_name || "N/A"}</div>
                    </div>
                </div>

                {/* Birth date row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                        <div className="flex-1 p-2 font-bold">{owner_birth_date || "N/A"}</div>
                    </div>
                </div>

                {/* Birth town row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                        <div className="flex-1 p-2 font-bold">{owner_birth_place || "N/A"}</div>
                    </div>
                </div>

                {/* ID and mobile row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                        <div className=" p-2 border-r border-gray-400 font-bold">{owner_id || "N/A"}</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                        <div className="flex-1 p-2 font-bold">{owner_phone || "N/A"}</div>
                    </div>
                </div>

                {/* Address row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className=" p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                        <div className=" p-2 border-r border-gray-400 font-bold ">{owner_city || "N/A"}</div>
                        <div className=" p-2 border-r border-gray-400 text-sm">Οδός</div>
                        <div className=" p-2 border-r border-gray-400 font-bold ">{owner_address || "N/A"}</div>
                        <div className=" p-2 border-r border-gray-400 text-sm">Αριθ</div>
                        <div className=" p-2 border-r border-gray-400 font-bold ">{owner_address_number || "N/A"}</div>
                        <div className=" p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                        <div className="flex-1 p-2 font-bold">{owner_postal_code || "N/A"}</div>
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
                        <div className="p-2 underline">{owner_email || "N/A"}</div>
                    </div>
                </div>

                {/* VAT row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                        <div className="flex-1 p-2 font-bold">{owner_afm || "N/A"}</div>
                        <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                    </div>
                </div>

                {/* Declaration text */}
                <div className="p-4 text-sm">
                    <p className="mb-4">
                        Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                    </p>
                    <p className=" font-bold">
                        για το οικοδομικό έργο με τίτλο :
                    </p>
                    <p className=" mb-6">{project_description || "N/A"}</p>
                </div>

                {/* Additional disclaimer text */}
                <div className="p-4 text-sm ">
                    <p className="mb-6">
                        <span className="font-bold">ΔΕΝ επηρεάζεται, δεν τροποποιείται</span> και δεν θίγεται, καθ’ οιονδήποτε τρόπο ο φέρων οργανισμός (στατικός φορέας)
                        του κτιρίου, και οι εργασίες δεν επιφέρουν
                        επιβάρυνση ή αλλαγή στα στατικά ή γεωμετρικά χαρακτηριστικά του φέροντος οργανισμού, όπως αυτά υφίστανται σύμφωνα με την υφιστάμενη Οικοδομική Άδεια.
                    </p>
                    <p className="">
                        Οι εργασίες θα εκτελεστούν σύμφωνα με τις ισχύουσες τεχνικές προδιαγραφές,
                        τις ελάχιστες απαιτήσεις ασφάλειας και υγείας, καθώς και με πλήρη συμμόρφωση προς τις πολεοδομικές και λοιπές σχετικές διατάξεις.
                    </p>
                </div>

                {/* Signature section */}
                <div className="flex items-center justify-center">
                    <div className="flex justify-end p-4">
                        <div className="text-right space-y-2">
                            <div className="flex items-center gap-4">
                                <span className="text-sm">Ημερομηνία :</span>
                                <span className="text-sm font-medium">8/5/2025</span>
                            </div>
                            <div className="text-sm mt-8 text-center">
                                <div>( Υπογραφή )</div>
                                <div className="mt-4">Ο Δηλών</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* common component  */}
                <div className="flex justify-center items-center mt-6">
                    <StampComponent />
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

                            <h2 className="text-lg font-bold mb-4">✍️ Edit Declaration Data</h2>

                            <div className="grid grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-2">
                                {/* ΠΡΟΣ */}
                                <div className="flex flex-col">
                                    <label htmlFor="ydom_name" className="text-sm font-medium mb-1">ΠΡΟΣ (Ydom)</label>
                                    <input id="ydom_name" name="ydom_name" value={formData.ydom_name} onChange={handleChange} placeholder="ΠΡΟΣ (Ydom)" className="border p-2 rounded w-full" />
                                </div>

                                {/* Όνομα */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_name" className="text-sm font-medium mb-1">Όνομα</label>
                                    <input id="owner_name" name="owner_name" value={formData.owner_name} onChange={handleChange} placeholder="Όνομα" className="border p-2 rounded w-full" />
                                </div>

                                {/* Επώνυμο */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_surname" className="text-sm font-medium mb-1">Επώνυμο</label>
                                    <input id="owner_surname" name="owner_surname" value={formData.owner_surname} onChange={handleChange} placeholder="Επώνυμο" className="border p-2 rounded w-full" />
                                </div>

                                {/* Πατέρας */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_father_name" className="text-sm font-medium mb-1">Όνομα Πατρός</label>
                                    <input id="owner_father_name" name="owner_father_name" value={formData.owner_father_name} onChange={handleChange} placeholder="Όνομα Πατρός" className="border p-2 rounded w-full" />
                                </div>

                                {/* Μητέρα */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_mother_name" className="text-sm font-medium mb-1">Όνομα Μητρός</label>
                                    <input id="owner_mother_name" name="owner_mother_name" value={formData.owner_mother_name} onChange={handleChange} placeholder="Όνομα Μητρός" className="border p-2 rounded w-full" />
                                </div>

                                {/* Ημερομηνία Γέννησης */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_birth_date" className="text-sm font-medium mb-1">Ημερομηνία Γέννησης</label>
                                    <input id="owner_birth_date" name="owner_birth_date" value={formData.owner_birth_date} onChange={handleChange} placeholder="Ημερομηνία Γέννησης" className="border p-2 rounded w-full" />
                                </div>

                                {/* Τόπος Γέννησης */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_birth_place" className="text-sm font-medium mb-1">Τόπος Γέννησης</label>
                                    <input id="owner_birth_place" name="owner_birth_place" value={formData.owner_birth_place} onChange={handleChange} placeholder="Τόπος Γέννησης" className="border p-2 rounded w-full" />
                                </div>

                                {/* Αριθμός Ταυτότητας */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_id" className="text-sm font-medium mb-1">Αριθμός Δελτίου Ταυτότητας</label>
                                    <input id="owner_id" name="owner_id" value={formData.owner_id || ""} onChange={handleChange} placeholder="Αριθμός Δελτίου Ταυτότητας" className="border p-2 rounded w-full" />
                                </div>

                                {/* Τηλέφωνο */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_phone" className="text-sm font-medium mb-1">Τηλέφωνο</label>
                                    <input id="owner_phone" name="owner_phone" value={formData.owner_phone} onChange={handleChange} placeholder="Τηλέφωνο" className="border p-2 rounded w-full" />
                                </div>

                                {/* Πόλη */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_city" className="text-sm font-medium mb-1">Πόλη</label>
                                    <input id="owner_city" name="owner_city" value={formData.owner_city} onChange={handleChange} placeholder="Πόλη" className="border p-2 rounded w-full" />
                                </div>

                                {/* Διεύθυνση */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_address" className="text-sm font-medium mb-1">Διεύθυνση</label>
                                    <input id="owner_address" name="owner_address" value={formData.owner_address} onChange={handleChange} placeholder="Διεύθυνση" className="border p-2 rounded w-full" />
                                </div>

                                {/* Αριθμός Διεύθυνσης */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_address_number" className="text-sm font-medium mb-1">Αριθμός Διεύθυνσης</label>
                                    <input id="owner_address_number" name="owner_address_number" value={formData.owner_address_number || ""} onChange={handleChange} placeholder="Αριθμός Διεύθυνσης" className="border p-2 rounded w-full" />
                                </div>

                                {/* Ταχυδρομικός Κώδικας */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_postal_code" className="text-sm font-medium mb-1">Ταχυδρομικός Κώδικας</label>
                                    <input id="owner_postal_code" name="owner_postal_code" value={formData.owner_postal_code} onChange={handleChange} placeholder="Ταχυδρομικός Κώδικας" className="border p-2 rounded w-full" />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_email" className="text-sm font-medium mb-1">Email</label>
                                    <input id="owner_email" type="email" name="owner_email" value={formData.owner_email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" />
                                </div>

                                {/* ΑΦΜ */}
                                <div className="flex flex-col">
                                    <label htmlFor="owner_afm" className="text-sm font-medium mb-1">Α.Φ.Μ.</label>
                                    <input id="owner_afm" name="owner_afm" value={formData.owner_afm} onChange={handleChange} placeholder="Α.Φ.Μ." className="border p-2 rounded w-full" />
                                </div>

                                {/* Project Description - Full width */}
                                <div className="flex flex-col col-span-3">
                                    <label htmlFor="project_description" className="text-sm font-medium mb-1">Project Description</label>
                                    <textarea id="project_description" name="project_description" value={formData.project_description || ""} onChange={handleChange} placeholder="Project Description" className="border p-2 rounded w-full" />
                                </div>

                                {/* Paragraphs */}
                                <div className="col-span-3">
                                    <label>Paragraph 1</label>
                                    <textarea name="p1" value={paragraphs.p1} onChange={handleParagraphChange} className="border p-2 rounded w-full" />
                                </div>
                                <div className="col-span-3">
                                    <label>Paragraph 3</label>
                                    <textarea name="p3" value={paragraphs.p2} onChange={handleParagraphChange} className="border p-2 rounded w-full" />
                                </div>
                            </div>


                            {/* Save button */}
                            <div className="flex justify-end mt-4">
                                <button
                                    className="px-4 py-2 border border-black text-black rounded-md cursor-pointer"
                                    onClick={handleSave}
                                >
                                    Save Information
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

























