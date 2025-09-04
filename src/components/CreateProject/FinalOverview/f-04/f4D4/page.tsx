

"use client"

import StampComponent from "../../shared/signture/signture"


export default function F4D4() {
    const descriptions = [
        {
            "id": 1,
            "description": "Technical Description 1 of the project"
        },
        {
            "id": 2,
            "description": "Technical Description 2 of the project"
        },
        {
            "id": 3,
            "description": "Technical Description 3 of the project"
        },
        {
            "id": 4,
            "description": "Technical Description 4 of the project"
        },
        {
            "id": 5,
            "description": "Technical Description 5 of the project"
        },
        {
            "id": 6,
            "description": "Technical Description 6 of the project"
        },
        {
            "id": 7,
            "description": "Technical Description 7 of the project"
        },
        {
            "id": 8,
            "description": "Technical Description 8 of the project"
        },
        {
            "id": 9,
            "description": "Technical Description 9 of the project"
        },
        {
            "id": 10,
            "description": "Technical Description 10 of the project"
        },
        {
            "id": 11,
            "description": "Technical Description 11 of the project"
        },
        {
            "id": 12,
            "description": "Technical Description 12 of the project"
        },
        {
            "id": 13,
            "description": "Technical Description 13 of the project"
        },
        {
            "id": 14,
            "description": "Technical Description 14 of the project"
        },
        {
            "id": 15,
            "description": "Technical Description 15 of the project"
        },
        {
            "id": 16,
            "description": "Technical Description 16 of the project"
        },
        {
            "id": 17,
            "description": "Technical Description 17 of the project"
        },
        {
            "id": 18,
            "description": "Technical Description 18 of the project"
        },
        {
            "id": 19,
            "description": "Technical Description 19 of the project"
        },
        {
            "id": 20,
            "description": "Technical Description 20 of the project"
        },
        {
            "id": 21,
            "description": "Technical Description 21 of the project"
        },
        {
            "id": 22,
            "description": "Technical Description 22 of the project"
        }
    ]
    const descriptions2 = [
        {
            "id": 1,
            "description": "Technical Description 1 of the project"
        },
        {
            "id": 2,
            "description": "Technical Description 2 of the project"
        },
        {
            "id": 3,
            "description": "Technical Description 3 of the project"
        },
        {
            "id": 4,
            "description": "Technical Description 4 of the project"
        },
        {
            "id": 5,
            "description": "Technical Description 5 of the project"
        },
        {
            "id": 6,
            "description": "Technical Description 6 of the project"
        },
        {
            "id": 7,
            "description": "Technical Description 7 of the project"
        },
        {
            "id": 8,
            "description": "Technical Description 8 of the project"
        },
        {
            "id": 9,
            "description": "Technical Description 9 of the project"
        },
        {
            "id": 10,
            "description": "Technical Description 10 of the project"
        },
        {
            "id": 11,
            "description": "Technical Description 11 of the project"
        },
        {
            "id": 12,
            "description": "Technical Description 12 of the project"
        },
        {
            "id": 13,
            "description": "Technical Description 13 of the project"
        },
    ]

    return (
        <div className="max-w-[794px] mx-auto p-4 bg-white space-y-8">
            <div className="border border-black">
                {/* Header */}
                <div className="text-center p-4">
                    <h1 className="text-xl font-bold mb-2">ΦΑΚΕΛΟΣ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΥΓΕΙΑΣ </h1>
                    <p className="text-xl font-bold">(Φ.Α.Υ.)</p>
                    <p className="text-lg font-bold">(Π.Δ. 305/96, άρθρο 3 - παρ. 3, 7, 8, 9, 10, 11)</p>
                </div>

                {/* Α. ΓΕΝΙΚΑ */}
                <div className="p-4 border-b border-black">
                    <h2 className="font-bold mb-4">Α. ΓΕΝΙΚΑ</h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΕΡΓΟ :</span>
                            <span className="flex-1  font-bold">PROJECT DESCRIPTION</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΔΙΕΥΘΥΝΣΗ :</span>
                            <span className=" font-bold">ADDRESS</span>
                            <span className=" font-bold">, CITY</span>
                            <span className=" font-bold">, TOWN</span>
                            <span className=" font-bold">, POSTAL CODE</span>
                            <span className=" font-bold">FOR BUILDING</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΙΔΙΟΚΤΗΤΗΣ :</span>
                            <span className="flex-1  font-bold">OWNER/OWNERS</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">ΥΠΟΧΡΕΟΣ ΓΙΑ ΤΗΝ ΕΚΠΟΝΗΣΗ ΤΟΥ Σ.Α.Υ. :</span>
                            <div className="flex flex-col items-center justify-center">
                                <span className="flex-1  font-bold">NAME AND SURNAME ENGINEER</span>
                                <span className="flex-1  font-bold">SPECIALTY</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Β. ΜΗΤΡΩΟ ΕΡΓΟΥ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Β. ΜΗΤΡΩΟ ΕΡΓΟΥ</h2>

                    <div className="mb-4">
                        <h3 className="font-medium mb-2 underline">1. TECHNICAL DESCRIPTION OF PROJECT</h3>
                        <div className="mb-2">
                            {/* Mapping over the fetched data */}
                            {descriptions.map((description, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="">{i + 1}</span>
                                    <span className=" "></span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-medium mb-2">3. ΣΧΕΔΙΑ</h3>
                        <p className="mb-2">Για την κατασκευή του κτιρίου χρειάστηκε να γίνουν οι παρακάτω μελέτες:</p>
                        <div className="space-y-1 text-sm">
                            <div className="">1. Αρχιτεκτονικά</div>
                            <div className="">2. Στατικά</div>
                            <div className="">3. Παθητική Πυροπροστασία</div>
                            <div className="">4. Θερμομόνωση</div>
                            <div className="">5. Ύδρευση</div>
                            <div className="">6. Αποχέτευση</div>
                            <div className="">7. Ηλεκτρικές Εγκαταστάσεις</div>
                            <div className="">8. Κλιματισμός</div>
                            <div className="">9. Μελέτη Ενεργειακής Απόδοσης</div>
                            <div className="">10. Τοπογραφικό</div>
                        </div>
                        <p className="mt-2 text-sm">
                            Θα προσαρτηθούν στο Φ.Α.Υ. με τη μορφή παραρτήματος τα "ως κατασκευάστηκε" σχέδια του έργου, μετά την
                            ολοκλήρωση της εκτέλεσής του.
                        </p>
                    </div>
                </div>

                {/* Γ. ΕΠΙΣΗΜΑΝΣΕΙΣ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Γ. ΕΠΙΣΗΜΑΝΣΕΙΣ</h2>
                    <div className="space-y-2 text-sm">
                        <p>Δεν υπάρχουν ζώνες ιδιαίτερου κινδύνου στο εργοτάξιο της οικοδομής.</p>
                        <p>Δεν υπάρχουν ιδιαιτερότητες στη στατική δομή, ευστάθεια και αντοχή του έργου.</p>
                        <p>Θέσεις δικτύων κεντρικών παροχών και κεντρικών διακοπτών θα σημανθούν.</p>
                        <p>Θέσεις εξόδων κινδύνου και πυροσβεστικές φωλεές θα επισημανθούν.</p>
                    </div>

                    <div className="mt-4 text-sm">
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Οδοί διαφυγής:</p>
                            <p className="grid-cols-1">Δημοτική οδός</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Έξοδοι κινδύνου:</p>
                            <p className="grid-cols-1">Εξωτερικός Χώρος</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Ιδιαίτερες στατικές μελέτες:</p>
                            <p className="grid-cols-1">Όχι</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Δίκτυα προστασίας:</p>
                            <p className="grid-cols-1">Όχι</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Θέση υλικών:</p>
                            <p className="grid-cols-1">Εκτός Κτιρίου</p>
                        </div>
                        <div className="grid grid-cols-4">
                            <p className="grid-cols-1">Ζώνες κινδύνου:</p>
                            <p className="grid-cols-1">Οπές - Περίμετρος Κτιρίου</p>
                        </div>
                    </div>
                </div>

                {/* Δ. ΟΔΗΓΙΕΣ ΚΑΙ ΧΡΗΣΙΜΑ ΣΤΟΙΧΕΙΑ */}
                <div className="p-4">
                    <h2 className="font-bold mb-4">Δ. ΟΔΗΓΙΕΣ ΚΑΙ ΧΡΗΣΙΜΑ ΣΤΟΙΧΕΙΑ</h2>
                    <div className="space-y-2 text-sm">
                        <p>
                            Οι εργασίες συντήρησης και καθαρισμού των εξωτερικών τμημάτων της οικοδομής και τυχόν φωταγωγών που
                            απαιτούν τη χρήση ικριωμάτων θα γίνουν από εξειδικευμένα συνεργεία με λήψη των αναγκαίων μέτρων προστασίας
                            βάσει των ισχυουσών διατάξεων.
                        </p>
                        <p>
                            Η συντήρηση των δικτύων διανομής ηλεκτρικού ρεύματος θα γίνεται σε τακτά χρονικά διαστήματα μόνο από
                            εξειδικευμένους τεχνίτες, σύμφωνα με τις ισχύουσες διατάξεις.
                        </p>
                    </div>

                    <div className="mt-12 text-right">
                        <div className="flex justify-start items-start gap-30">
                            <div className="">
                                <h3 className="text-center mb-4">Ο ΣΥΝΤΑΞΑΣ</h3>
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
                            <div className="flex items-center justify-center gap-2">
                                <span className=" ">Ημερομηνία :</span>
                                <span className=" ">2/8/2025</span>
                            </div>
                        </div>
                    </div>
                </div>



                {/* second step====================== */}
                {/* Header */}
                <div className="text-center p-4 mt-6">
                    <h1 className="text-xl font-bold mb-2">ΣΧΕΔΙΟ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΥΓΕΙΑΣ</h1>
                    <p className="text-xl font-bold">(Σ.Α.Υ.)</p>
                    <p className="text-lg font-bold">(Π.Δ. 305/96, άρθρο 3 - παρ. 3, 7, 8, 9, 10, 11)</p>
                </div>

                {/* Α. ΓΕΝΙΚΑ */}
                <div className="p-4 border-b border-black">
                    <h2 className="font-bold mb-4">Α. ΓΕΝΙΚΑ</h2>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΕΡΓΟ :</span>
                            <span className="flex-1 font-bold">PROJECT DESCRIPTION</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΔΙΕΥΘΥΝΣΗ :</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-medium">ΙΔΙΟΚΤΗΤΗΣ :</span>
                        </div>
                        <div className="flex justify-start gap-12">
                            <span className="font-medium">ΥΠΟΧΡΕΟΣ ΓΙΑ ΤΗΝ ΕΚΠΟΝΗΣΗ ΤΟΥ Σ.Α.Υ. :</span>
                            <div className="flex flex-col items-start justify-center">
                                <span className="flex-1 font-bold">NAME AND SURNAME ENGINEER</span>
                                <span className="flex-1 font-bold">SPECIALTY</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Β. ΜΗΤΡΩΟ ΕΡΓΟΥ */}
                <div className="p-4">
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">PROJECT WORKS FOR TECHNICAL DESCRIPTION</h3>
                        <div className="mb-2">
                            {/* Mapping over the fetched data */}
                            {descriptions2.map((description, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="w-6">{i + 1}</span>
                                    <span className=" "></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Β. ΚΙΝΔΥΝΟΙ ΠΟΥ ΕΝΔΕΧΕΤΑΙ ΝΑ ΠΑΡΟΥΣΙΑΣΤΟΥΝ */}
                <div>
                    <div className="p-2 font-bold">
                        Β. ΚΙΝΔΥΝΟΙ ΠΟΥ ΕΝΔΕΧΕΤΑΙ ΝΑ ΠΑΡΟΥΣΙΑΣΤΟΥΝ
                    </div>

                    <div className="px-2 border-b border-black text-sm">
                        Η συγκεκριμένη κατασκευή δεν μπορεί να θεωρηθεί ιδιαίτερα επικίνδυνη κατά την εκτέλεση των διάφορων φάσεων
                        των έργων. Οι πιθανότεροι κίνδυνοι είναι:
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                Πιθανός κίνδυνος πτώσεως εργαζομένων από ύψος στις εργασίες κατασκευής ξυλοτύπων, σκυροδέτησης,
                                τοποθέτησης σιδηροπλισμών, κατασκευής τοιχοδομών και επιχρισμάτων, χρωματισμών κτλ.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">Πιθανός κίνδυνος πτώσεως αντικειμένων και υλικών. </div>
                        </div>
                    </div>
                </div>

                {/* Γ. ΜΕΤΡΑ ΓΙΑ ΤΗΝ ΠΡΟΛΗΨΗ ΚΑΙ ΑΠΟΤΡΟΠΗ ΤΩΝ ΚΙΝΔΥΝΩΝ */}


                <div>
                    <div className="p-2 font-bold mt-20">
                        Γ. ΜΕΤΡΑ ΓΙΑ ΤΗΝ ΠΡΟΛΗΨΗ ΚΑΙ ΑΠΟΤΡΟΠΗ ΤΩΝ ΚΙΝΔΥΝΩΝ
                    </div>

                    <div className="border-y border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                • Για να προλαμβάνονται οι πτώσεις εργαζομένων ή αντικειμένων πρέπει σε όλες τις εργασίες η κατασκευή των
                                ικριωμάτων πρέπει να είναι η σωστή και να πληρεί τις προδιαγραφές της κείμενης νομοθεσίας (ΠΔ 778/80 και
                                1073/81), να τοποθετούνται κιγκλιδώματα και κατάλληλες περιφράξεις στους διαδρόμους των ικριωμάτων, του
                                κτιρίου κλπ. στις σκάλες και φρεάτια ασανσέρ, στα πρανή των εκσκαφών και στις οπές του κτιρίου.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">
                                • Οι εργαζόμενοι πρέπει να φορούν τα προβλεπόμενα από τη νομοθεσία κράνη, να διαθέτουν την κατάλληλη
                                ένδυση και υπόδηση προς αποφυγή ολισθήσεων και ηλεκτροπληξιών. Σε ορισμένες εργασίες να διατίθενται ζώνες
                                ασφαλείας και να προσδένονται οι εργαζόμενοι.
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-black">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 border-r border-black p-2 text-center font-bold">#REF!</div>
                            <div className="col-span-11 p-2 text-sm">Ειδικοί κίνδυνοι του παραρτ. ΙΙΙ του ΠΔ 305/96 (πλην &1) δεν υπάρχουν. </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h1 className="p-2 font-bold mt-20">
                        Δ. ΠΡΟΣΘΕΤΑ ΣΤΟΙΧΕΙΑ
                    </h1>

                    <div className="space-y-6 text-sm">
                        <ul className="p-2 space-y-4">
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>1. Προσπέλαση στο εργοτάξιο, πρόσβαση στις θέσεις εργασίας:</p>
                                    <p className="ml-4">Δεν απαιτείται ιδιαίτερη μέριμνα πέραν των συνθηκών.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>2. Κυκλοφορία οχημάτων και πεζών εντός του εργοταξίου:</p>
                                    <p className="ml-4">Δεν απαιτείται ιδιαίτερη μέριμνα πέραν των συνθηκών.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>3. Χώροι αποθήκευσης υλικών και τρόπος αποκομιδής αχρήστων:</p>
                                    <p className="ml-4">Αποθήκευση στον ακάλυπτο χώρο της οικοδομής και αποκομιδή αχρήστων με μηχανικά μέσα.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>4. Διευθέτηση αποκομιδής επικίνδυνων υλικών:</p>
                                    <p className="ml-4">Συγκέντρωση επικίνδυνων υλικών για αποκομιδή και σωστή διάθεση.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>5. Χώροι υγιεινής, εστίασης και πρώτων βοηθειών:</p>
                                    <p className="ml-4">Θα δημιουργηθεί προχείρο W.C. και φραγμένο από το ισόγειο.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div>
                                    <p>6. Κατασκευή ικριωμάτων:</p>
                                    <p className="ml-4">Συνήθης μορφή ικριωμάτων χρησιμοποιώντας κανονιστικά πρότυπα.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-right ml-6">
                    <div className="flex justify-start items-start gap-30">
                        <div className="">
                            <h3 className="text-center mb-4">Ο ΣΥΝΤΑΞΑΣ</h3>
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
                        <div className="flex items-center justify-center gap-2">
                            <span className=" ">Ημερομηνία :</span>
                            <span className=" ">2/8/2025</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
