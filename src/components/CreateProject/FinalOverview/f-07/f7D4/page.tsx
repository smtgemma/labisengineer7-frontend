"use client"

import StampComponent from "../../shared/signture/signture"

interface allDataProps {
  owner_address: string;
  owner_city: string;
  owner_name: string;
  owner_postal_code: string;
  project_description?: string;
}

export default function F7D4({ allData }: { allData: allDataProps }) {
    
  const {
    owner_address,
    owner_city,
    owner_name,
    owner_postal_code,
    project_description,
  } = allData;

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
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
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property</span> επί της οδού <br /> <span className="font-semibold">Address,Town/Area , postal code ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            <div className="space-y-6 ml-10">
                <div>
                    <h3 className="text-sm font-bold">● Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου</h3>
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
                </div>
                {/* {/* Signature Section */}
                <div className="mt-6 text-right flex items-center justify-center p-5">
                    <div className="max-w-[300px]">

                        <div className="text-center">
                            <p>Ημερομηνία :</p>
                            <p>6/25/2025</p>
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
        </div>
    )
}



