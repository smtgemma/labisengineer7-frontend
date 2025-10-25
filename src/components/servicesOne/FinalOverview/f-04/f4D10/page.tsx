import StampComponent from "../../shared/signture/signture";




export default function F4D10() {
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
                        <div className="flex-1 p-2  font-bold">YDOM</div>
                    </div>
                </div>

                {/* Name Owner row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
                        <div className="w-40 p-2 border-r border-gray-400  font-bold">Name Owner</div>
                        <div className="w-20 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
                        <div className="flex-1 p-2  font-bold">Surname Owner</div>
                    </div>
                </div>

                {/* Father's name row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
                        <div className="flex-1 p-2 font-bold">Fathers name and surname Owner</div>
                    </div>
                </div>

                {/* Mother's name row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
                        <div className="flex-1 p-2 font-bold">Mothers name and surname Owner</div>
                    </div>
                </div>

                {/* Birth date row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
                        <div className="flex-1 p-2 font-bold">Born date</div>
                    </div>
                </div>

                {/* Birth town row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
                        <div className="flex-1 p-2 font-bold">Born Town</div>
                    </div>
                </div>

                {/* ID and mobile row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Αριθμός Δελτίου Ταυτότητας</div>
                        <div className="w-20 p-2 border-r border-gray-400 font-bold">ID</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Τηλ.:</div>
                        <div className="flex-1 p-2 font-bold">mobile</div>
                    </div>
                </div>

                {/* Address row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
                        <div className="w-20 p-2 border-r border-gray-400 font-bold ">Town</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Οδός</div>
                        <div className="w-24 p-2 border-r border-gray-400 font-bold ">Address</div>
                        <div className="w-16 p-2 border-r border-gray-400 text-sm">Αριθ</div>
                        <div className="w-20 p-2 border-r border-gray-400 font-bold ">Number</div>
                        <div className="w-12 p-2 border-r border-gray-400 text-sm">ΤΚ</div>
                        <div className="flex-1 p-2 font-bold">postal code</div>
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
                        <div className="w-32 p-2 underline ">email owner</div>
                    </div>
                </div>

                {/* VAT row */}
                <div className="border-b border-gray-400">
                    <div className="flex">
                        <div className="w-32 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.:</div>
                        <div className="flex-1 p-2 font-bold">VAT Owner</div>
                        <div className="w-32 p-2 border-l border-gray-400 text-sm">Δ.Ο.Υ.:</div>
                    </div>
                </div>

                {/* Declaration text */}
                <div className="p-4 text-sm">
                    <p className="mb-4">
                        Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του Ν.1599/1986, δηλώνω ότι:
                    </p>
                    <p className="mb-4">
                        ως κύριος/ιδιοκτήτης του ακινήτου που βρίσκεται επί της οδού ([Address, Number, Town, Postal code],συναινώ ρητά και ανεπιφύλακτα στην έκδοση Έγκρισης Εργασιών Μικρής Κλίμακας για την εκτέλεση των  εργασιών,                    </p>

                    <p className="mb-4 font-bold">για το έργο με τίτλο :</p>
                    <p className=" mb-6">PROJECT DESCRIPTION</p>
                </div>

                {/* Additional disclaimer text */}
                <div className="space-y-4 text-sm m p-4">
                    <p>Η παρούσα δήλωση παρέχεται αποκλειστικά για την κάλυψη των απαιτήσεων του άρθρου 29 του Ν.4495/2017 και των σχετικών κανονιστικών πράξεων.</p>
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
