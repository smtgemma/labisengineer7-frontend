"use client"

import StampComponent from "../../shared/signture/signture"

export default function F2D2() {

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
                    <h3 className="text-sm font-bold"> ● Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου</h3>
                    <p className="text-sm mb-6">
                        Περιλαμβάνεται η εγκατάσταση μεταλλικών ικριωμάτων κατά μήκος των όψεων του κτιρίου, σύμφωνα με την ισχύουσα νομοθεσία περί μέτρων ασφαλείας. Η τοποθέτηση διασφαλίζει ασφαλή και πλήρη πρόσβαση
                        στα σημεία επέμβασης για τις εργασίες αποκατάστασης και χρωματισμού των εξωτερικών επιφανειών.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold">● Έλεγχος & Αποκατάσταση Φθαρμένων Υλικών:</h3>
                    <p className="text-sm mb-6">
                        Έλεγχος της στέγης για ανίχνευση φθαρμένων ή αποσαθρωμένων στοιχείων (κεραμίδια, επικάλυψη,
                        υδρορροές, μεταλλικά στηρίγματα κ.λπ.). Αντικατάσταση ή επισκευή των φθαρμένων υλικών.
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Αποξήλωση παλαιών, φθαρμένων ή σαθρών κεραμιδιών ή άλλου τύπου επικάλυψης στεγών.</h3>
                    <p className="text-sm mb-6">
                        Αφαίρεση υποστρώσεων (π.χ. παλιά ελαφρομπετά, φύλλα ασφαλτικών μεμβρανών κ.λπ.) όπου απαιτείται.
                        Αποξήλωση φθαρμένων υδρορροών και λοιπών στοιχείων απορροής ομβρίων.
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Επισκευή Φέροντος Ξύλινου Σκελετού</h3>
                    <p className="text-sm mb-6">
                        Αντικατάσταση σάπιων ή φθαρμένων τμημάτων του φέροντος ξύλινου σκελετού της στέγης (π.χ. ζευκτών, τεγίδων, δοκαριών), χωρίς αλλαγή στη γεωμετρία και χωρίς τροποποίηση της στατικής δομής.
                        Εφαρμογή αντισηπτικών και προστατευτικών υλικών στα νέα και στα υπάρχοντα ξύλινα στοιχεία.Η γεωμετρία, οι διαστάσεις και ο τρόπος στήριξης της στέγης θα παραμείνουν αμετάβλητα, ώστε να μην επηρεαστεί ο φέρον οργανισμός του κτιρίου..
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Στεγανοποίηση – Υδατοστεγανότητα
                    </h3>
                    <p className="text-sm mb-6">
                        Εφαρμογή νέων ασφαλτικών μεμβρανών ή άλλων σύγχρονων υλικών στεγανοποίησης.
                        Προσθήκη ή αντικατάσταση υδρορροών, καναλιών απορροής και τελικών στοιχείων απορροής υδάτων.
                        Στεγανοποίηση αρμών και κρίσιμων σημείων διέλευσης (π.χ. καμινάδες, φωταγωγοί).
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Καθαρισμός Υδρορροών & Συστήματος Απορροής
                    </h3>
                    <p className="text-sm mb-6">
                        Απομάκρυνση φερτών υλικών, φύλλων, και ξένων σωμάτων από υδρορροές, υδροσυλλέκτες και κατακόρυφες στήλες αποχέτευσης ομβρίων.
                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Τοποθέτηση Νέας Επικάλυψης Στέγης

                    </h3>
                    <p className="text-sm mb-6">
                        Τοποθέτηση νέων κεραμιδιών ή άλλης εγκεκριμένης επικάλυψης (π.χ. κεραμίδια βυζαντινού ή ρωμαϊκού τύπου ή άλλο κατάλληλο υλικό).
                        Εξασφάλιση σωστής πρόσδεσης και στερέωσης για αντοχή σε ανεμοπιέσεις.
                        Εφαρμογή αναπνεόμενης μεμβράνης όπου απαιτείται από τη μελέτη.

                    </p>

                </div>

                <div>
                    <h3 className="text-sm font-bold">● Εφαρμογή προστατευτικών επιστρώσεων (όπου απαιτείται): </h3>
                    <p className="text-sm mb-6">
                        Τοπική ή συνολική εφαρμογή ελαστομερούς υδατοστεγανωτικής βαφής, αν απαιτείται από τη φύση των επεμβάσεων.
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

            </div>
        </div>
    )
}



