
"use client"

import StampComponent from "../../shared/signture/signture"

interface allDataProps {
  owner_address: string;
  owner_city: string;
  owner_name: string;
  owner_postal_code: string;
  project_description?: string;
}

export default function F11D1({ allData }: { allData: allDataProps }) {
    
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
                    <h3 className=" text-sm">{owner_postal_code || "N/A"}</h3>
                </div>
            </div>

            {/* Main Description */}
            <div className="text-sm mb-4 ml-10">
                <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property
                </span> επί της οδού <br /> <span className="font-semibold">{owner_address || "N/A"}, {owner_city || "N/A"} , {owner_postal_code || "N/A"} ( FOR BUILDING),</span>
                    πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
            </div>

            {/* one  */}
            <div className="space-y-6 ml-10">
                <div>
                    <h1 className="text-sm font-semibold">● Χάραξη και Οριοθέτηση Θέσεων Περίφραξης</h1>
                    <p className="text-sm mb-6">
                        Θα πραγματοποιηθεί επιτόπια χάραξη των ορίων της ιδιοκτησίας, βάσει των στοιχείων του
                        τοπογραφικού διαγράμματος. Η οριοθέτηση θα γίνει με σημειακή σήμανση των θέσεων τοποθέτησης των στύλων.
                    </p>
                </div>
            </div>

            {/* two  */}
            <div className=" ml-10">
                <h1 className="text-sm font-semibold mt-6">● Διενέργεια τοπικών εκσκαφών μικρού βάθους (20-60cm) για
                    τη θεμελίωση των στοιχείων στήριξης (στύλοι ή χαμηλά στηθαία). </h1>
                <p className="text-sm mb-6">
                    Οι εκσκαφές θα γίνουν με ελαφρά μηχανικά μέσα ή χειρωνακτικά, χωρίς επεμβάσεις μεγάλης κλίμακας και
                    χωρίς αλλοίωση της γενικής μορφολογίας του εδάφους.
                </p>
            </div>

            {/* three */}
            <div className="pl-10 mt-12">
                <h1 className="text-sm font-semibold">
                    ● Κατασκευή Χαμηλής Περιτοίχισης (έως 1,00μ)
                </h1>
                <div className="space-y-3">
                    <p className="text-sm">
                        Κατασκευή χαμηλού στηθαίου ή τοιχίου ύψους έως 1,00m κατά μήκος των ορίων του γηπέδου.
                        Υλικά που δύνανται να χρησιμοποιηθούν:
                    </p>
                    <p className="text-sm">
                        Λιθοδομή (ξερολιθιά ή αρμολογητή) από φυσική ή τεχνητή πέτρα
                    </p>
                    <p className="text-sm">
                        Σκυρόδεμα (οπλισμένο ή άοπλο)
                    </p>
                    <p className="text-sm">
                        Τσιμεντόλιθοι ή προκατασκευασμένα στοιχεία (όπου επιτρέπεται)
                    </p>
                    <p className="text-sm">
                        Τούβλα ή άλλα ανόργανα υλικά
                    </p>
                    <p className="text-sm">
                        Η επιλογή υλικού θα γίνει σύμφωνα με την αισθητική,
                        τη στατική επάρκεια και τις τοπικές πολεοδομικές διατάξεις
                    </p>
                </div>
            </div>

            {/* four */}
            <div className="pl-10 mt-12">
                <h1 className="text-sm font-semibold">
                    ● Τοποθέτηση Ελαφράς Περίφραξης (άνω του στηθαίου) μέγιστου
                    συνολικού ύψους μαζί με τη περιτοίχηση έως 1,5 μ
                </h1>
                <div className="space-y-3">
                    <p className="text-sm">
                        Πάνω από τη χαμηλή περιτοίχιση ή απευθείας στο έδαφος (όπου δεν υπάρχει στηθαίο), τοποθέτηση ελαφρών στοιχείων περίφραξης όπως:
                    </p>
                    <p className="text-sm">
                        Γαλβανισμένο συρματόπλεγμα
                    </p>
                    <p className="text-sm">
                        Ηλεκτροσυγκολλητό πλέγμα (πλέγμα κλουβιού)
                    </p>
                    <p className="text-sm">
                        Ξύλινη ή μεταλλική πέργκολα τύπου αγροτικής περίφραξης
                    </p>
                    <p className="text-sm">
                        Σιδερένιες λάμες ή κάγκελα ελαφρού τύπου
                    </p>
                    <p className="text-sm">
                        Η στερέωση θα γίνεται σε κατάλληλους μεταλλικούς ή ξύλινους στύλους, οι οποίοι θα αγκυρώνονται σε κατάλληλες βάσεις μέσα στο στηθαίο ή στο έδαφος.
                    </p>
                </div>
            </div>

            {/* five  */}
            <div className="mt-12 ml-10">
                <p className="text-sm">
                    ● Τοποθέτηση Θύρας Πρόσβασης (όπου απαιτείται)
                    Σε επιλεγμένο σημείο του γηπέδου (πύλη εισόδου), προβλέπεται
                    τοποθέτηση μεταλλικής ή ξύλινης θύρας / αυλόπορτας, αναλόγως χρήσης και αισθητικής.
                </p>
            </div>
            {/* {/* Signature Section */}
            <div className="mt-6 text-right flex items-center justify-center p-5">
                <div className="max-w-[300px]">

                    <div className="text-center">
                        <p>Ημερομηνία :</p>
                        <p>25/06/2025</p>
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
    )
}



