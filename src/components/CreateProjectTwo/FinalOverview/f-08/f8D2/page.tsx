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


export default function F8D2({ allData }: { allData: allDataProps }) {
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
        <div className="max-w-[796px] mx-auto bg-white">
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
                        <div className="flex-1 p-2  font-bold">{ydom_name || "N/A"}</div>
                    </div>
                </div>

                {/* Name Owner row */}
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
                        <div className="w-20 p-2 border-r border-gray-400 font-bold">{owner_id || "N/A"}</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                        <div className="flex-1 p-2 font-bold">{owner_phone || "N/A"}</div>
                    </div>
                </div>

                {/* Address row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                        <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner_city || "N/A"}</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                        <div className="w-24 p-2 border-r border-gray-400 font-bold ">{owner_address || "N/A"}</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                        <div className="w-20 p-2 border-r border-gray-400 font-bold ">{owner_address_number || "N/A"}</div>
                        <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
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
                        <div className="w-32 p-2 underline ">{owner_email || "N/A"}</div>
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

                    <p className=" font-bold">για το οικοδομικό έργο με τίτλο :</p>
                    <p className=" mb-6">{project_description || "N/A"}</p>
                </div>

                {/* Additional disclaimer text */}
                <div className="space-y-4 text-sm m p-4">
                    <p> δεν προβλέπεται παραγωγή ΑΕΚΚ, καθώς οι εργασίες αφορούν αποκλειστικά κοπή δέντρων και η διαχείριση των υπολειμμάτων (κορμοί – κλαδιά) θα γίνει σύμφωνα με τις οδηγίες του Δήμου, ως πράσινα οργανικά απόβλητα.»
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
        </div>
    )
}
