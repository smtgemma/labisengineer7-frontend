

"use client"

import StampComponent from "../../shared/signture/signture"

interface allDataProps {
  owner_address: string;
  owner_city: string;
  owner_name: string;
  owner_postal_code: string;
  project_description?: string;
}


export default function F12D1({ allData }: { allData: allDataProps }) {
    
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
                {/* one  */}
                <div>
                    <h3 className="font-bold">
                        ● Χάραξη και Οριοθέτηση Θέσεων Περίφραξης</h3>
                    <p className="text-sm">
                        Θα πραγματοποιηθεί επιτόπια χάραξη των ορίων της
                        ιδιοκτησίας, βάσει των στοιχείων του τοπογραφικού διαγράμματος.
                        Η οριοθέτηση θα γίνει με σημειακή σήμανση των θέσεων τοποθέτησης των στύλων.
                    </p>
                </div>
                {/* two */}
                <div>
                    <h3 className="font-bold">
                        ● Εκσκαφές για τη Βάση Στήριξης
                    </h3>
                    <p className="text-sm">
                        Θα εκτελεστούν τοπικές εκσκαφές μικρού βάθους (έως 35-40 cm) για τη θεμελίωση των
                        κατακόρυφων μεταλλικών στύλων της περίφραξης. Οι εκσκαφές δεν επηρεάζουν το
                        φυσικό ανάγλυφο του οικοπέδου ούτε τον φέροντα οργανισμό οποιουδήποτε κτιρίου.
                    </p>
                </div>
                {/* three */}
                <div>
                    <h3 className="font-bold">
                        ● Τοποθέτηση Μεταλλικών Στύλων Στήριξης
                    </h3>
                    <p className="text-sm">
                        Θα γίνει τοποθέτηση μεταλλικών
                        σωληνωτών ή γαλβανισμένων στύλων ύψους περίπου 1,50–2,00
                        μέτρων, οι οποίοι θα αγκυρωθούν με σκυρόδεμα κατάλληλης κατηγορίας για
                        σταθερότητα.
                    </p>
                </div>
                {/* four */}
                <div>
                    <h3 className="font-bold">
                        ● Εγκατάσταση Συρματόπλεγματος
                    </h3>
                    <p className="text-sm">
                        Μεταξύ των στύλων θα τοποθετηθεί συρματόπλεγμα τύπου πλέγματος (π.χ. γαλβανισμένο, ή με επικάλυψη PVC),
                        το οποίο θα στερεωθεί κατάλληλα με συνδετήρες ή συρματόδεση. Εφόσον απαιτείται, θα τοποθετηθεί και
                        συρμάτινος οπλισμός ή σύρμα τάσης κατά μήκος της περίφραξης
                    </p>
                </div>
                {/* five  */}
                <div>
                    <h3 className="font-bold">
                        ● Ειδικές Διαμορφώσεις (όπου απαιτείται)
                    </h3>
                    <p className="text-sm">
                        Σε γωνιακές θέσεις ή σε σημεία εισόδου (π.χ. πύλες, αυλόπορτες) θα γίνει ειδική ενίσχυση με διπλούς στύλους ή διαγώνιες αντηρίδες.
                    </p>
                </div>
            </div>

            {/* {/* Signature Section */}
            <div className="mt-6 text-right flex items-center justify-center p-5">
                <div className="max-w-[300px]">

                    <div className="text-center mb-4">
                        <p>Ημερομηνία </p>
                        <p>6/25/2025</p>
                    </div>
                    <div className="">
                        <h3 className="text-center mb-2">Ο ΣΥΝΤΑΞΑΣ</h3>
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



