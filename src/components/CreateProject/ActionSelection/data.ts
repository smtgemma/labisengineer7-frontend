

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
            id: "51",
            title: "Αναλυτικός Προϋπολογισμός Εργασιών",
            price: 0.5,
        },
        {
            id: "52",
            title: "Ενημερωτικό Σημείωμα Σχεδίων Όψεων",
            price: 0.5,
        },
        {
            id: "53",
            title: "Πίνακας 3(ΙΚΑ)",
            price: 0.5,
        },
        {
            id: "54",
            title: "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)",
            price: 0.5,
        },
        {
            id: "55",
            title: "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)",
            price: 0.5,
        },
        {
            id: "56",
            title: "ΥΔ Ανάθεσης Επίβλεψης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "77",
            title: "ΥΔ Ανάθεσης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "58",
            title: "ΥΔ Ανάληψης Επίβλεψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "59",
            title: "ΥΔ Ανάληψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "510",
            title: "ΥΔ μη ύπαρξης ΑΕΚΚ_ΣΔΑ Μηχανικού",
            price: 0.5,
        },
        {
            id: "511",
            title: "Υπόδειγμα Συναίνεσης Συνιδιοκτητών",
            price: 0.5,
        },
        {
            id: "512",
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
            id: "61",
            title: "YΔ Ανάθεσης Ιδιοκτήτη",
            price: 0.5,
        },
        {
            id: "62",
            title: "YΔ Ανάληψης Έργου Μηχανικού",
            price: 0.5,
        },
        {
            id: "63",
            title: "YΔ Φέροντα Οργανισμού",
            price: 0.5,
        },
        {
            id: "65",
            title: "Τεχνική Έκθεση / Τεχνική Περιγραφή Έργου",
            price: 1,
        },
        {
            id: "66",
            title: "Αναλυτικός Προϋπολογισμός Εργασιών",
            price: 0.5,
        },
        {
            id: "67",
            title: "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)",
            price: 1,
        },
        {
            id: "68",
            title: "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)",
            price: 0.5,
        },
        {
            id: "69",
            title: "Πίνακας 3",
            price: 0.5,
        },
        {
            id: "610",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ενεργητικής Πυροπροστασίας",
            price: 0.5,
        },
        {
            id: "611",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Παθητικής Πυροπροστασίας",
            price: 0.5,
        },
        {
            id: "612",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Η/Μ Εγκαταστάσεων",
            price: 0.5,
        },
        {
            id: "613",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ύδρευσης/Αποχέτευσης",
            price: 0.5,
        },
        {
            id: "614",
            title:
                "Ενημερωτικό Σημείωμα μη απαίτησης Συμβολαιογραφικής Πράξης",
            price: 0.5,
        },
        {
            id: "615",
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
            id: "101",
            title: "ten_one",
            price: 0.5,
        },
        {
            id: "102",
            title: "ten_two",
            price: 0.5,
        },
        {
            id: "103",
            title: "ten_three",
            price: 0.5,
        },
        {
            id: "104",
            title: "ten_four",
            price: 0.5,
        },
        {
            id: "105",
            title: "ten_five",
            price: 0.5,
        },
        {
            id: "106",
            title: "ten_six",
            price: 0.5,
        },
        {
            id: "107",
            title: "ten_seven",
            price: 0.5,
        },
        {
            id: "108",
            title: "ten_eight",
            price: 0.5,
        },
        {
            id: "109",
            title: "ten_nine",
            price: 0.5,
        },
        {
            id: "1010",
            title: "ten_ten",
            price: 0.5,
        },
        {
            id: "1011",
            title: "ten_eleven",
            price: 0.5,
        },
        {
            id: "1012",
            title: "ten_tweleve",
            price: 0.5,
        },

    ],

    // subcategory 7
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΡΜΟΠΡΟΖΩΗΣ_7: [
        {
            id: "71",
            title: "seven_one",
            price: 0.5,
        },
        {
            id: "72",
            title: "seven_two",
            price: 0.5,
        },
        {
            id: "73",
            title: "seven_three",
            price: 0.5,
        },
        {
            id: "74",
            title: "seven_four",
            price: 0.5,
        },
        {
            id: "75",
            title: "seven_five",
            price: 0.5,
        },
        {
            id: "76",
            title: "seven_six",
            price: 0.5,
        },
        {
            id: "77",
            title: "seven_seven",
            price: 0.5,
        },
        {
            id: "78",
            title: "seven_eight",
            price: 0.5,
        },
        {
            id: "79",
            title: "seven_nine",
            price: 0.5,
        },
        {
            id: "710",
            title: "seven_ten",
            price: 0.5,
        },
        {
            id: "711",
            title: "seven_eleven",
            price: 0.5,
        },

    ],

    // subcategory 14
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗ_ΚΑΙ_ΕΠΙΣΚΕΥΗ_ΣΤΕΓΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑ_14: [
        {
            id: "141",
            title: "fourteen_one",
            price: 0.5,
        },
        {
            id: "142",
            title: "fourteen_two",
            price: 0.5,
        },
        {
            id: "143",
            title: "fourteen_three",
            price: 0.5,
        },
        {
            id: "144",
            title: "fourteen_four",
            price: 0.5,
        },
        {
            id: "145",
            title: "fourteen_five",
            price: 0.5,
        },
        {
            id: "146",
            title: "fourteen_six",
            price: 0.5,
        },
        {
            id: "147",
            title: "fourteen_seven",
            price: 0.5,
        },
        {
            id: "148",
            title: "fourteen_eight",
            price: 0.5,
        },
        {
            id: "149",
            title: "fourteen_nine",
            price: 0.5,
        },
        {
            id: "1410",
            title: "fourteen_ten",
            price: 0.5,
        },
        {
            id: "1411",
            title: "fourteen_eleven",
            price: 0.5,
        },
        {
            id: "1412",
            title: "fourteen_tweleve",
            price: 0.5,
        },

    ],
    // subcategory 2
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΝΑΚΑΤΑΣΚΕΥΗ_ΥΠΕΡΗΧΩΝ_2: [
        {
            id: "21",
            title: "two_one",
            price: 0.5,
        },
        {
            id: "22",
            title: "two_two",
            price: 0.5,
        },
        {
            id: "23",
            title: "two_three",
            price: 0.5,
        },
        {
            id: "24",
            title: "two_four",
            price: 0.5,
        },
        {
            id: "25",
            title: "two_five",
            price: 0.5,
        },
        {
            id: "26",
            title: "two_six",
            price: 0.5,
        },
        {
            id: "27",
            title: "two_seven",
            price: 0.5,
        },
        {
            id: "28",
            title: "two_eight",
            price: 0.5,
        },

    ],
    // subcategory 
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