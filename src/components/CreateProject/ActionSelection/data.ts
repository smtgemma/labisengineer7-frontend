

interface Service {
    id: string;
    title: string;
    price: number;
    description: string;
    delivery: string;
    required?: boolean;
}

export interface TemplateName {
    id: string;
    title: string;
    price: number;
    required?: boolean;
}

export const templateName1: Record<string, TemplateName[]> = {

    // subcategory 5 
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟΠΟΙΗΣΗΣ_ΙΟΚΘΕΙΑΣ_5: [
        {
            id: "DOC001",
            title: "Αναλυτικός Προϋπολογισμός Εργασιών",
            price: 0.5,
        },
        {
            id: "DOC002",
            title: "Ενημερωτικό Σημείωμα Σχεδίων Όψεων",
            price: 0.5,
        },
        {
            id: "DOC003",
            title: "Πίνακας 3(ΙΚΑ)",
            price: 0.5,
        },
        {
            id: "DOC004",
            title: "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)",
            price: 0.5,
        },
        {
            id: "DOC005",
            title: "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)",
            price: 0.5,
        },
        {
            id: "DOC006",
            title: "ΥΔ Ανάθεσης Επίβλεψης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "DOC007",
            title: "ΥΔ Ανάθεσης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "DOC008",
            title: "ΥΔ Ανάληψης Επίβλεψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "DOC009",
            title: "ΥΔ Ανάληψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "DOC010",
            title: "ΥΔ μη ύπαρξης ΑΕΚΚ_ΣΔΑ Μηχανικού",
            price: 0.5,
        },
        {
            id: "DOC011",
            title: "Υπόδειγμα Συναίνεσης Συνιδιοκτητών",
            price: 0.5,
        },
        {
            id: "DOC012",
            title: "Τεχνική Έκθεση / Βεβαίωση Μηχανικού",
            price: 0.5,
        },
        {
            id: "autofill_16",
            title: "Autofill (προαιρετικό add-on)",
            price: 1,
        },
    ],

    // subcategory 6
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6: [
        {
            id: "owner_assignment_1",
            title: "YΔ Ανάθεσης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "engineer_assumption_2",
            title: "YΔ Ανάληψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "bearing_organization_3",
            title: "YΔ Φέροντα Οργανισμού",
            price: 0.5,
        },
        {
            id: "technical_report_5",
            title: "Τεχνική Έκθεση / Τεχνική Περιγραφή Έργου",
            price: 1,
        },
        {
            id: "detailed_budget_6",
            title: "Αναλυτικός Προϋπολογισμός Εργασιών",
            price: 0.5,
        },
        {
            id: "safety_file_7",
            title: "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)",
            price: 1,
        },
        {
            id: "waste_management_8",
            title: "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)",
            price: 0.5,
        },
        {
            id: "table_3_9",
            title: "Πίνακας 3",
            price: 0.5,
        },
        {
            id: "active_fire_protection_10",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ενεργητικής Πυροπροστασίας",
            price: 0.5,
        },
        {
            id: "passive_fire_protection_11",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Παθητικής Πυροπροστασίας",
            price: 0.5,
        },
        {
            id: "electrical_mechanical_12",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Η/Μ Εγκαταστάσεων",
            price: 0.5,
        },
        {
            id: "plumbing_sewage_13",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ύδρευσης/Αποχέτευσης",
            price: 0.5,
        },
        {
            id: "notarial_deed_14",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Συμβολαιογραφικής Πράξης",
            price: 0.5,
        },
        {
            id: "co_owners_consent_15",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Συναίνεσης Συνιδιοκτητών",
            price: 0.5,
        },
        {
            id: "autofill_16",
            title: "Autofill (προαιρετικό add-on)",
            price: 1,
        },
    ],
    
    // subcategory 10
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΝΕΑ_ΑΝΟΙΞΜΑΤΑ_ΕΠΙ_ΤΩΝ_ΟΙΚΕΩΝ_10: [
        {
            id: "DOC001",
            title: "ten_one",
            price: 0.5,
        },
        {
            id: "DOC002",
            title: "ten_two",
            price: 0.5,
        },
        {
            id: "DOC003",
            title: "ten_three",
            price: 0.5,
        },
        {
            id: "DOC004",
            title: "ten_four",
            price: 0.5,
        },
        {
            id: "DOC005",
            title: "ten_five",
            price: 0.5,
        },
        {
            id: "DOC00",
            title: "ten_six",
            price: 0.5,
        },
        {
            id: "DOC006",
            title: "ten_seven",
            price: 0.5,
        },
        {
            id: "DOC007",
            title: "ten_eight",
            price: 0.5,
        },
        {
            id: "DOC009",
            title: "ten_nine",
            price: 0.5,
        },
        {
            id: "DOC0010",
            title: "ten_ten",
            price: 0.5,
        },
        {
            id: "DOC0011",
            title: "ten_eleven",
            price: 0.5,
        },
        {
            id: "DOC0012",
            title: "ten_tweleve",
            price: 0.5,
        },

    ],

    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΡΜΟΠΡΟΖΩΗΣ_7: [
        {
            id: "DOC001",
            title: "Αναλυτικός Προϋπολογισμός Εργασιών 10",
            price: 0.5,
        },

    ],
};


export const services: Service[] = [
    {
        id: "technical",
        title: "Generate Engineer Declaration (YA)",
        price: 300,
        description: "Comprehensive technical analysis show the tempatete",
        delivery: "10–15 business days",
        required: true,
    },
    {
        id: "Responsibility",
        title: "Generate Assignment of Responsibility",
        price: 200,
        description: "Official engineering certificate for Article 30 compliance",
        delivery: "5 -7 business days",
    },
    {
        id: "supporting",
        title: "Create Technical Description",
        price: 100,
        description: "Additional declarations and Technical Description.",
        delivery: "1–3 business days",
    },
]