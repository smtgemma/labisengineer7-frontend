"use client"

import StampComponent from "../../shared/signture/signture"

export default function F5D1() {

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white">
            {/* Title */}
            <h2 className="text-center font-semibold underline text-sm mb-2">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
            </h2>

            {/* Project Information */}
            <div className="mb-8 space-y-4">
                <div className="flex items-start justify-between max-w-[450px]">
                    <span className=" min-w-[80px] text-sm">Έργο:</span>
                    <h3 className=" text-sm">PROJECT DESCRIPTION</h3>
                </div>

                <div className="flex items-start justify-between gap-4 max-w-xl">
                    <span className=" text-sm">Θέση:</span>
                    <h3 className=" text-sm">ADDRESS, TOWN/AREA , POSTAL CODE ( FOR BUILDING)</h3>
                </div>

                <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
                    <span className="">Ιδιοκτήτης:</span>
                    <h3 className=" text-sm">OWNER/OWNERS</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property</span> επί της οδού <br /> <span className="font-semibold">Address,Town/Area , postal code ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            <div className="space-y-6 ml-10">
                <div>
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
                </div>
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



