
"use client"

import StampComponent from "../../shared/signture/signture"

export default function F3D2() {

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
                    <h3 className="text-sm font-bold"> ● Προμήθεια και Τοποθέτηση Θερμικής Μονάδας (Αντλία Θερμότητας)</h3>
                    <p className="text-sm mb-6">
                        Η αντλία θερμότητας τύπου air-to-water θα επιλεγεί βάσει των θερμικών αναγκών του διαμερίσματος ή του κτιρίου,
                        όπως αυτές προκύπτουν από τη σχετική θερμοτεχνική μελέτη. Η ισχύς της μονάδας αναμένεται να κυμαίνεται από 6 kW έως 16kW, ανάλογα με τις απαιτήσεις.
                    </p>
                </div>

                <div>
                    <p className="text-sm mb-6">
                        Η εξωτερική μονάδα θα τοποθετηθεί σε σημείο επαρκούς αερισμού
                        (συνήθως δώμα, βεράντα ή ακάλυπτος χώρος), σε ειδική μεταλλική βάση με αντικραδασμικά παρεμβύσματα για τον περιορισμό της μετάδοσης θορύβου και κραδασμών.
                    </p>

                </div>

                <div>
                    <p className="text-sm mb-6">
                        Η μονάδα θα είναι τύπου monoblock ή split-unit, με δυνατότητα λειτουργίας σε εξωτερικές
                        θερμοκρασίες έως -10°C ή χαμηλότερα. Θα διαθέτει πιστοποίηση κατά EN 14511 και ERP Class A+ ή ανώτερη, σύμφωνα με την Ευρωπαϊκή Οδηγία Οικολογικού Σχεδιασμού.
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Υδραυλικές Εγκαταστάσεις – Δίκτυο Θέρμανσης</h3>
                    <p className="text-sm mb-6">
                        Θα τοποθετηθούν σωληνώσεις προσαγωγής και επιστροφής ζεστού νερού θέρμανσης, χρησιμοποιώντας σωλήνες πολυστρωματικού τύπου (PEX/AL/PEX ή ισοδύναμου πολυπροπυλενικού υλικού), κατάλληλα θερμομονωμένες σύμφωνα με τις απαιτήσεις του Κανονισμού Ενεργειακής Απόδοσης Κτιρίων (KENAK).
                    </p>

                </div>

                <div>
                    <p className="text-sm mb-6">
                        Οι σωληνώσεις θα διατρέχουν εντός δαπέδου όπου είναι εφικτό ή θα είναι επιφανειακές με πλήρη θερμομόνωση και κάλυψη.
                    </p>

                </div>

                <div>
                    <p className="text-sm mb-6">
                        Θα εγκατασταθούν κυκλοφορητές, βαλβίδες ασφαλείας, βαλβίδες πλήρωσης-εκκένωσης, βαλβίδες διακοπής, φίλτρα νερού και δοχείο διαστολής, εφόσον απαιτείται.
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">●  Ηλεκτρολογική Τροφοδοσία – Πίνακας Ελέγχου
                    </h3>
                    <p className="text-sm mb-6">
                        Η αντλία θερμότητας θα τροφοδοτηθεί από τον υπάρχοντα ηλεκτρικό πίνακα του κτιρίου ή από νέο ειδικό διακλάδωμα γραμμής (MCCB ή RCBO), σύμφωνα με τις απαιτήσεις του ΕΛΟΤ HD384.

                    </p>
                    <p className="text-sm mb-6">
                        Θα εγκατασταθεί διακόπτης συντήρησης κοντά στην εξωτερική μονάδα και όλα τα ηλεκτρολογικά υλικά θα φέρουν πιστοποιήσεις CE και EN.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold">● Θερμομόνωση Σωληνώσεων</h3>
                    <p>
                        Περιγραφή:
                    </p>
                    <p className="text-sm mb-6">Θερμομόνωση όλων των σωληνώσεων θέρμανσης και επιστροφής με σωλήνες μόνωσης κλειστής κυψέλης (τύπου Armaflex ή ισοδύναμου υλικού), πάχους τουλάχιστον 9-13 mm για εσωτερικές διαδρομές και έως 19 mm για εξωτερικές διαδρομές, για την αποφυγή θερμικών απωλειών και συμπυκνωμάτων.</p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Υδραυλικός Διαχωριστής (Hydraulic Separator ή Buffer Tank)</h3>
                    <p>
                        Περιγραφή:
                    </p>
                    <p className="text-sm mb-6">Προμήθεια και τοποθέτηση δοχείου αδράνειας (buffer tank) ή υδραυλικού διαχωριστή, για τη σωστή λειτουργία της αντλίας θερμότητας σε περίπτωση μικρού υδραυλικού φορτίου ή για αποφυγή συχνών εκκινήσεων-παύσεων.</p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Θερμοστατικός Έλεγχος – Αυτοματισμοί</h3>
                    <p className="text-sm mb-6">
                        Τοποθέτηση ψηφιακού προγραμματιζόμενου θερμοστάτη χώρου, δυνατότητα ζωνών
                        θέρμανσης (multi-zone control) και δυνατότητα σύνδεσης με smart home εφαρμογές μέσω WiFi (όπου απαιτείται).
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold">Άρθρο 4, ΥΑ ΦΕΚ Β' 1843/2020</h3>
                </div>

                <div>
                    <h3 className="text-sm font-bold">1.Αντικείμενο Εργασιών:</h3>
                    <p className="text-sm mb-6">
                        Η παρούσα Τεχνική Έκθεση αφορά την εγκατάσταση νέου αυτόνομου συστήματος θέρμανσης με αντλία θερμότητας
                        τύπου air-to-water στο υφιστάμενο κτίριο, σύμφωνα με τις προβλέψεις του άρθρου 4 της ΥΑ ΦΕΚ Β’ 1843/2020 και τις διατάξεις του Ν.4495/2017 περί έκδοσης Άδειας Μικρής Κλίμακας.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">2. Αναγκαιότητα Εργασιών</h3>
                    <p className="text-sm mb-6">
                        Η ανάγκη για την εκτέλεση των εργασιών προκύπτει λόγω της αντικατάστασης ή αναβάθμισης του υπάρχοντος συστήματος θέρμανσης, με σκοπό τη βελτίωση της ενεργειακής απόδοσης, τη μείωση των εκπομπών ρύπων και την ευθυγράμμιση με τις απαιτήσεις του Κανονισμού Ενεργειακής Απόδοσης Κτιρίων (ΚΕΝΑΚ).
                    </p>
                    <p className="text-sm mb-6">
                        Η νέα εγκατάσταση θα συμβάλλει στην εξοικονόμηση ενέργειας, θα μειώσει τη συνολική κατανάλωση καυσίμων, και θα παρέχει βελτιωμένες συνθήκες θέρμανσης στους χώρους του κτιρίου.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-bold">3. Δήλωση Συμμόρφωσης – Πολεοδομική Νομιμότητα</h3>
                    <p className="text-sm mb-6">Δηλώνεται ότι οι προτεινόμενες εργασίες:</p>
                    <p className="text-sm mb-6">
                        ● Δεν θίγουν ή τροποποιούν τον φέροντα οργανισμό του κτιρίου
                    </p>
                    <p className="text-sm mb-6">
                        ● Δεν αυξάνουν τον όγκο, το ύψος ή τη γεωμετρία του κτιρίου
                    </p>
                    <p className="text-sm mb-6">
                        ● Δεν παραβιάζουν τις ισχύουσες πολεοδομικές διατάξεις
                    </p>
                    <p className="text-sm mb-6 font-bold">
                        Εκτελούνται σύμφωνα με το άρθρο 29 του Ν.4495/2017 και το άρθρο 4 <br /> της ΥΑ ΦΕΚ Β’ 1843/2020.
                    </p>
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



