
"use client"
import { useState } from "react"
import { format } from "date-fns"

// for editing 
import { useForm } from "react-hook-form"
import { useGetMeQuery } from "@/redux/features/templates/allTemplateSlice"

interface FormData {
  owner_name: string
  project_description: string
  owner_address: string
  owner_city: string
  owner_postal_code: string
}
// end editing 

interface allDataProps {
  owners: any[]
  projectDescription: string
  propertyPostalCode: string
  propertyPlace: string
  propertyAddress: string
  createdAt: string
  municipalityCommunity: string
  propertyNumber: string
}

interface BudgetItem {
  code: string
  description: string
  unit: string
  unitPrice: number
  quantity: number
  total: number
}

interface BudgetCategory {
  id: number
  title: string
  items: BudgetItem[]
  subtotal: number
}

export default function F10D4({ allData }: { allData: allDataProps }) {
  const owner = allData?.owners || []
  const { projectDescription, propertyPostalCode, propertyPlace, propertyAddress, createdAt, propertyNumber, municipalityCommunity } = allData || "";
  console.log(allData)

  const { data: userData } = useGetMeQuery()
  const signature = userData?.data?.signature

  const [formData, setFormData] = useState({
    employer: "",
    project: "",
    address: "",
    date: "6/25/2025",
    unforeseen: 0,
  })

  const categories: BudgetCategory[] = [
    {
      id: 1,
      title: "ΧΩΜΑΤΟΥΡΓΙΚΑ",
      subtotal: 0,
      items: [
        {
          code: "1.01",
          description: "Γενικές εκσκαφές γαιώδεις",
          unit: "κ.μ.",
          unitPrice: 3.22,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.02",
          description: "Γενικές εκσκαφές ημιβραχώδεις",
          unit: "κ.μ.",
          unitPrice: 3.22,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.03",
          description: "Γενικές εκσκαφές βραχώδεις",
          unit: "κ.μ.",
          unitPrice: 11.74,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.04",
          description: "Εκσκαφές θεμελίων γαιώδεις",
          unit: "κ.μ.",
          unitPrice: 5.28,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.05",
          description: "Εκσκαφές θεμελίων ημιβραχώδεις",
          unit: "κ.μ.",
          unitPrice: 5.28,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.06",
          description: "Εκσκαφές θεμελίων βραχώδεις",
          unit: "κ.μ.",
          unitPrice: 5.28,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.07",
          description: "Επιχώσεις με προϊόντα εκσκαφής",
          unit: "κ.μ.",
          unitPrice: 1.18,
          quantity: 0,
          total: 0,
        },
        {
          code: "1.08",
          description: "Ειδικές επιχώσεις (σκύρα κ.λπ.)",
          unit: "κ.μ.",
          unitPrice: 5.86,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 2,
      title: "ΚΑΘΑΙΡΕΣΕΙΣ",
      subtotal: 0,
      items: [
        {
          code: "2.01",
          description: "Καθαίρεση πλινθοδομής με συνήθη κονιάματα",
          unit: "κ.μ.",
          unitPrice: 11.74,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.02",
          description: "Καθαίρεση πλινθοδομής με ισχυρό κονίαμα",
          unit: "κ.μ.",
          unitPrice: 14.68,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.03",
          description: "Καθαίρεση άοπλου σκυροδέματος",
          unit: "κ.μ.",
          unitPrice: 41.08,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.04",
          description: "Καθαίρεση οπλισμένου σκυροδέματος",
          unit: "κ.μ.",
          unitPrice: 64.56,
          quantity: 0,
          total: 0,
        },
        { code: "2.05", description: "Καθαίρεση επιχρισμάτων", unit: "τ.μ.", unitPrice: 4.1, quantity: 0, total: 0 },
        {
          code: "2.06",
          description: "Καθαίρεση τοίχων δια τη διαμόρφωση θυρών",
          unit: "τεμ.",
          unitPrice: 14.68,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.07",
          description: "Καθαίρεση ξύλινων ή σιδηρών θυρών και παραθύρων",
          unit: "τ.μ.",
          unitPrice: 8.8,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.08",
          description: "Αποξήλωση σκελετού στέγης πάσης φύσεως",
          unit: "τ.μ.",
          unitPrice: 1.5,
          quantity: 0,
          total: 0,
        },
        {
          code: "2.09",
          description: "Αποξήλωση υλικών επικάλυψης στέγης (κεραμίδια, πάνελς κ.λπ.)",
          unit: "τ.μ.",
          unitPrice: 0.8,
          quantity: 0,
          total: 0,
        },
        { code: "2.10", description: "Αποξήλωση κιγκλιδωμάτων", unit: "τ.μ.", unitPrice: 0.8, quantity: 0, total: 0 },
      ],
    },
    {
      id: 3,
      title: "ΣΚΥΡΟΔΕΜΑΤΑ",
      subtotal: 0,
      items: [
        { code: "3.01", description: "Οπλισμένο σκυρόδεμα", unit: "κ.μ.", unitPrice: 146.74, quantity: 0, total: 0 },
        {
          code: "3.02",
          description: "Ελαφρά οπλισμένο σκυρόδεμα (με πλέγμα)",
          unit: "κ.μ.",
          unitPrice: 105.64,
          quantity: 0,
          total: 0,
        },
        { code: "3.03", description: "Ελαφρό Μπετόν", unit: "κ.μ.", unitPrice: 70.44, quantity: 0, total: 0 },
        { code: "3.04", description: "Άοπλο σκυρόδεμα δαπέδων", unit: "τ.μ.", unitPrice: 5.86, quantity: 0, total: 0 },
        { code: "3.05", description: "Εξισωτικές στρώσεις", unit: "τ.μ.", unitPrice: 4.1, quantity: 0, total: 0 },
        {
          code: "3.06",
          description: "Επιφάνειες εμφανούς σκυροδέματος",
          unit: "τ.μ.",
          unitPrice: 5.86,
          quantity: 0,
          total: 0,
        },
        { code: "3.07", description: "Σενάζ δρομικά", unit: "μ.", unitPrice: 7.04, quantity: 0, total: 0 },
        { code: "3.08", description: "Σενάζ μπατικά", unit: "μ.", unitPrice: 11.74, quantity: 0, total: 0 },
        {
          code: "3.09",
          description: "Μανδύες χυτού σκυροδέματος",
          unit: "κ.μ.",
          unitPrice: 234.78,
          quantity: 0,
          total: 0,
        },
        {
          code: "3.10",
          description: "Μανδύες εκτοξευόμενου σκυροδέματος",
          unit: "τ.μ.",
          unitPrice: 46.96,
          quantity: 0,
          total: 0,
        },
        {
          code: "3.11",
          description: "Σιδηροδοκοί (IPE, IPN, HEB, Κοίλοι κ.λπ.) ως φέρων οργανισμός",
          unit: "κιλό",
          unitPrice: 1.8,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 4,
      title: "ΤΟΙΧΟΠΟΙΙΕΣ",
      subtotal: 0,
      items: [
        {
          code: "4.01",
          description: "Λιθοδομές με αργούς λίθους",
          unit: "τ.μ.",
          unitPrice: 29.34,
          quantity: 0,
          total: 0,
        },
        {
          code: "4.02",
          description: "Λιθοδομές με λαξευτούς λίθους",
          unit: "τ.μ.",
          unitPrice: 46.96,
          quantity: 0,
          total: 0,
        },
        { code: "4.03", description: "Πλινθοδομές δρομικές", unit: "τ.μ.", unitPrice: 8.22, quantity: 0, total: 0 },
        { code: "4.04", description: "Πλινθοδομές μπατικές", unit: "τ.μ.", unitPrice: 15.26, quantity: 0, total: 0 },
        { code: "4.05", description: "Τσιμεντολιθοδομές", unit: "τ.μ.", unitPrice: 7.64, quantity: 0, total: 0 },
        { code: "4.06", description: "Κισσηρολιθομές", unit: "τ.μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        {
          code: "4.07",
          description: "Τοίχοι γυψοσανιδών απλοί",
          unit: "τ.μ.",
          unitPrice: 23.48,
          quantity: 0,
          total: 0,
        },
        {
          code: "4.08",
          description: "Τοίχοι γυψοσανιδών με 2 γύψους",
          unit: "τ.μ.",
          unitPrice: 29.34,
          quantity: 0,
          total: 0,
        },
        { code: "4.09", description: "Τσιμεντοσανίδες", unit: "τ.μ.", unitPrice: 36.0, quantity: 0, total: 0 },
        {
          code: "4.10",
          description: "Από ελαφρά δομικά στοιχεία τύπου YTONG, ALFA BLOCK κ.λπ.",
          unit: "τ.μ.",
          unitPrice: 12.0,
          quantity: 0,
          total: 0,
        },
        { code: "4.11", description: "Διαχωριστικοί υαλότοιχοι", unit: "τ.μ.", unitPrice: 40.0, quantity: 0, total: 0 },
        {
          code: "4.12",
          description:
            "Διαχωριστικοί τοίχοι με υλικά βιομηχανικής προέλευσης (MDF, μελαμίνες κ.λπ.) σε μεταλλικό σκελετό",
          unit: "τ.μ.",
          unitPrice: 35.0,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 5,
      title: "ΕΠΙΧΡΙΣΜΑΤΑ",
      subtotal: 0,
      items: [
        {
          code: "5.01",
          description: "Ασβεστοτσιμεντοκονιάματα τριπτά",
          unit: "τ.μ.",
          unitPrice: 5.86,
          quantity: 0,
          total: 0,
        },
        {
          code: "5.02",
          description: "Τσιμεντοκονιάματα τριπτά με διογκωμένο περλίτη στη 2η στρώση",
          unit: "τ.μ.",
          unitPrice: 6.46,
          quantity: 0,
          total: 0,
        },
        {
          code: "5.03",
          description: "Ασβεστοκονιάματα με επικάλυψη σαγρέ",
          unit: "τ.μ.",
          unitPrice: 7.04,
          quantity: 0,
          total: 0,
        },
        { code: "5.04", description: "Αρτιφισιέλ τριπτά", unit: "τ.μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        {
          code: "5.05",
          description: "Επιχρίσματα χωριάτικου τύπου",
          unit: "τ.μ.",
          unitPrice: 7.64,
          quantity: 0,
          total: 0,
        },
        { code: "5.06", description: "Επιχρίσματα τραβηχτά", unit: "τ.μ.", unitPrice: 29.34, quantity: 0, total: 0 },
      ],
    },
    {
      id: 6,
      title: "ΕΠΕΝΔΥΣΕΙΣ ΤΟΙΧΩΝ",
      subtotal: 0,
      items: [
        { code: "6.01", description: "Με πλακάκια πορσελάνης", unit: "τ.μ.", unitPrice: 29.34, quantity: 0, total: 0 },
        { code: "6.02", description: "Με ξύλο", unit: "τ.μ.", unitPrice: 29.34, quantity: 0, total: 0 },
        { code: "6.03", description: "Με διακοσμητικά τούβλα", unit: "τ.μ.", unitPrice: 35.22, quantity: 0, total: 0 },
        {
          code: "6.04",
          description: "Με λίθινες πλάκες (Καρύστου)",
          unit: "τ.μ.",
          unitPrice: 41.08,
          quantity: 0,
          total: 0,
        },
        { code: "6.05", description: "Με πλάκες μαρμάρου", unit: "τ.μ.", unitPrice: 41.08, quantity: 0, total: 0 },
        { code: "6.06", description: "Με αλουμίνιο", unit: "τ.μ.", unitPrice: 117.38, quantity: 0, total: 0 },
      ],
    },
    {
      id: 7,
      title: "ΣΤΡΩΣΕΙΣ ΔΑΠΕΔΩΝ",
      subtotal: 968.0,
      items: [
        { code: "7.01", description: "Με τσιμεντοκονία", unit: "τ.μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        { code: "7.02", description: "Με τσιμεντόπλακες", unit: "τ.μ.", unitPrice: 11.74, quantity: 0, total: 0 },
        { code: "7.03", description: "Με γαρμπιλομωσαϊκό", unit: "τ.μ.", unitPrice: 11.74, quantity: 0, total: 0 },
        {
          code: "7.04",
          description: "Με μωσαϊκό λευκού τσιμέντου",
          unit: "τ.μ.",
          unitPrice: 17.6,
          quantity: 0,
          total: 968.0,
        },
        {
          code: "7.05",
          description: "Με λίθινες πλάκες (Καρύστου κ.λπ.)",
          unit: "τ.μ.",
          unitPrice: 29.34,
          quantity: 0,
          total: 0,
        },
        { code: "7.06", description: "Με πλάκες μαρμάρου", unit: "τ.μ.", unitPrice: 35.22, quantity: 0, total: 0 },
        {
          code: "7.07",
          description: "Με πλακάκια κεραμικά ή πορσελάνης",
          unit: "τ.μ.",
          unitPrice: 35.22,
          quantity: 0,
          total: 0,
        },
        {
          code: "7.08",
          description: "Με λωρίδες σουηδικής ξυλείας",
          unit: "τ.μ.",
          unitPrice: 35.22,
          quantity: 0,
          total: 0,
        },
        {
          code: "7.09",
          description: "Με λωρίδες αφρικανικής ξυλείας",
          unit: "τ.μ.",
          unitPrice: 46.96,
          quantity: 0,
          total: 0,
        },
        {
          code: "7.10",
          description: "Με πλακίδια πλαστικά ή τάπητα",
          unit: "τ.μ.",
          unitPrice: 11.74,
          quantity: 0,
          total: 0,
        },
        { code: "7.11", description: "Με λωρίδες δρυός", unit: "τ.μ.", unitPrice: 58.7, quantity: 0, total: 0 },
        { code: "7.12", description: "Με μοκέτα", unit: "τ.μ.", unitPrice: 17.6, quantity: 0, total: 0 },
        { code: "7.13", description: "Ασφαλτικές στρώσεις", unit: "τ.μ.", unitPrice: 14.0, quantity: 0, total: 0 },
      ],
    },
    {
      id: 8,
      title: "ΚΟΥΦΩΜΑΤΑ",
      subtotal: 0,
      items: [
        {
          code: "8.01",
          description: "Πόρτες πρεσσαριστές κοινές",
          unit: "τ.μ.",
          unitPrice: 58.7,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.02",
          description: "Πόρτες πρεσσαριστές οκουμέ",
          unit: "τ.μ.",
          unitPrice: 70.44,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.03",
          description: "Πόρτες πρεσσαριστές με καπλαμά & κάσες από συμπαγή δρυ ή καρυδιά",
          unit: "τ.μ.",
          unitPrice: 146.74,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.04",
          description: "Πόρτες ραμποτέ ή ταμπλαδωτές από σουηδική ξυλεία",
          unit: "τ.μ.",
          unitPrice: 102.72,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.05",
          description: "Πόρτες ραμποτέ ή ταμπλαδωτές από δρυ, καρυδιά κ.λπ.",
          unit: "τ.μ.",
          unitPrice: 234.78,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.06",
          description: "Υαλοστάσια από σουηδική ξυλεία",
          unit: "τ.μ.",
          unitPrice: 88.04,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.07",
          description: "Υαλοστάσια από όρεγκον πάιν",
          unit: "τ.μ.",
          unitPrice: 117.38,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.08",
          description: "Σκούρα από σουηδική ξυλεία",
          unit: "τ.μ.",
          unitPrice: 88.04,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.09",
          description: "Σκούρα από όρεγκον πάιν",
          unit: "τ.μ.",
          unitPrice: 117.38,
          quantity: 0,
          total: 0,
        },
        { code: "8.10", description: "Ρολλά από όρεγκον πάιν", unit: "τ.μ.", unitPrice: 88.04, quantity: 0, total: 0 },
        { code: "8.11", description: "Ρολλά πλαστικά", unit: "τ.μ.", unitPrice: 35.22, quantity: 0, total: 0 },
        { code: "8.12", description: "Σιδερένιες πόρτες", unit: "τ.μ.", unitPrice: 58.7, quantity: 0, total: 0 },
        { code: "8.13", description: "Σιδερένια παράθυρα", unit: "τ.μ.", unitPrice: 46.96, quantity: 0, total: 0 },
        { code: "8.14", description: "Σιδερένιες βιτρίνες", unit: "τ.μ.", unitPrice: 46.96, quantity: 0, total: 0 },
        {
          code: "8.15",
          description: "Συρόμενα ή σταθερά υαλοστάσια αλουμινίου",
          unit: "τ.μ.",
          unitPrice: 76.3,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.16",
          description: "Συρόμενα ή σταθερά σκούρα με πλαστικά φύλλα",
          unit: "τ.μ.",
          unitPrice: 41.08,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.17",
          description: "Ανοιγόμενα (περιστρεφόμενα) κουφώματα αλουμινίου",
          unit: "τ.μ.",
          unitPrice: 105.64,
          quantity: 0,
          total: 0,
        },
        { code: "8.18", description: "Βιτρίνες αλουμινίου", unit: "τ.μ.", unitPrice: 70.44, quantity: 0, total: 0 },
        {
          code: "8.19",
          description: "Μονόφυλλη πυράντοχη πόρτα Τ30 ως Τ90 πλήρως εξοπλισμένη",
          unit: "τεμ.",
          unitPrice: 704.32,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.20",
          description: "Δίφυλλη πυράντοχη πόρτα Τ30 ως Τ90 πλήρως εξοπλισμένη",
          unit: "τεμ.",
          unitPrice: 1173.88,
          quantity: 0,
          total: 0,
        },
        {
          code: "8.21",
          description: "Γκαραζόπορτες ανακλινόμενες ή τυλιγόμενες",
          unit: "τ.μ.",
          unitPrice: 120.0,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 9,
      title: "ΝΤΟΥΛΑΠΙΑ",
      subtotal: 0,
      items: [
        {
          code: "9.01",
          description: "Ντουλάπες κοινές (υπνοδωματίων)",
          unit: "τ.μ. όψης",
          unitPrice: 117.38,
          quantity: 0,
          total: 0,
        },
        { code: "9.02", description: "Ντουλάπια κουζίνας κοινά", unit: "μ.", unitPrice: 88.04, quantity: 0, total: 0 },
        {
          code: "9.03",
          description: "Ντουλάπια κουζίνας με φορμάικα ή καπλαμά",
          unit: "μ.",
          unitPrice: 117.38,
          quantity: 0,
          total: 0,
        },
        {
          code: "9.04",
          description: "Ντουλάπια κουζίνας από συμπαγή ξυλεία",
          unit: "μ.",
          unitPrice: 293.48,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 10,
      title: "ΜΟΝΩΣΕΙΣ – ΣΤΕΓΑΝΩΣΕΙΣ",
      subtotal: 0,
      items: [
        {
          code: "10.01",
          description: "Θερμομόνωση - υγρομόνωση δώματος",
          unit: "τ.μ.",
          unitPrice: 29.34,
          quantity: 0,
          total: 0,
        },
        {
          code: "10.02",
          description: "Θερμομόνωση - υγρομόνωση βεραντών",
          unit: "τ.μ.",
          unitPrice: 14.68,
          quantity: 0,
          total: 0,
        },
        {
          code: "10.03",
          description: "Θερμομόνωση κατακόρυφων επιφανειών",
          unit: "τ.μ.",
          unitPrice: 5.86,
          quantity: 0,
          total: 0,
        },
        {
          code: "10.04",
          description: "Υγρομόνωση τοιχείων υπογείων",
          unit: "τ.μ.",
          unitPrice: 4.1,
          quantity: 0,
          total: 0,
        },
        {
          code: "10.05",
          description: "Υγρομόνωση δαπέδων επί εδάφους",
          unit: "τ.μ.",
          unitPrice: 5.86,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 11,
      title: "ΜΑΡΜΑΡΙΚΑ",
      subtotal: 0,
      items: [
        {
          code: "11.01",
          description: "Κατώφλια, επίστρωση στηθαίων, ποδιές παραθύρων μπαλκονιών",
          unit: "μ.",
          unitPrice: 8.8,
          quantity: 0,
          total: 0,
        },
        { code: "11.02", description: "Μαρμαροεπένδυση βαθμίδος", unit: "μ.", unitPrice: 29.34, quantity: 0, total: 0 },
      ],
    },
    {
      id: 12,
      title: "ΚΛΙΜΑΚΕΣ",
      subtotal: 0,
      items: [
        { code: "12.01", description: "Σιδερένια βαθμίδα", unit: "μ.", unitPrice: 23.48, quantity: 0, total: 0 },
        { code: "12.02", description: "Ξύλινη βαθμίδα", unit: "μ.", unitPrice: 58.7, quantity: 0, total: 0 },
      ],
    },
    {
      id: 13,
      title: "ΥΑΛΟΠΙΝΑΚΕΣ",
      subtotal: 0,
      items: [
        { code: "13.01", description: "Απλοί", unit: "τ.μ.", unitPrice: 6.46, quantity: 0, total: 0 },
        { code: "13.02", description: "Διπλοί θερμομονωτικοί", unit: "τ.μ.", unitPrice: 38.16, quantity: 0, total: 0 },
      ],
    },
    {
      id: 14,
      title: "ΨΕΥΔΟΡΟΦΕΣ",
      subtotal: 0,
      items: [
        {
          code: "14.01",
          description: "Επίχρισμα σε μεταλλικό πλέγμα",
          unit: "τ.μ.",
          unitPrice: 15.26,
          quantity: 0,
          total: 0,
        },
        { code: "14.02", description: "Από γυψοσανίδες", unit: "τ.μ.", unitPrice: 17.6, quantity: 0, total: 0 },
        {
          code: "14.03",
          description: "Από πλάκες ορυκτών ινών σε μεταλλικό σκελετό",
          unit: "τ.μ.",
          unitPrice: 17.6,
          quantity: 0,
          total: 0,
        },
        { code: "14.04", description: "Από ξύλο", unit: "τ.μ.", unitPrice: 23.48, quantity: 0, total: 0 },
      ],
    },
    {
      id: 15,
      title: "ΕΠΙΚΑΛΥΨΕΙΣ",
      subtotal: 0,
      items: [
        {
          code: "15.01",
          description: "Επικεράμωση πλάκας σκυροδέματος",
          unit: "τ.μ.",
          unitPrice: 23.48,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.02",
          description: "Ξύλινη στέγη με κεραμίδια εδραζόμενη σε πλάκα σκυροδέματος",
          unit: "τ.μ.",
          unitPrice: 41.08,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.03",
          description: "Ξύλινη στέγη αυτοφερόμενη με κεραμίδια",
          unit: "τ.μ.",
          unitPrice: 70.44,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.04",
          description: "Σιδερένια στέγη με αυλακωτή λαμαρίνα",
          unit: "τ.μ.",
          unitPrice: 23.48,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.05",
          description: "Σιδερένια στέγη με φύλλα αμιαντοτσιμέντου",
          unit: "τ.μ.",
          unitPrice: 23.48,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.06",
          description: "Επικάλυψη με σχιστόπλακες",
          unit: "τ.μ.",
          unitPrice: 32.0,
          quantity: 0,
          total: 0,
        },
        {
          code: "15.07",
          description: "Επικάλυψη με πολυκαρβονικά φύλλα",
          unit: "τ.μ.",
          unitPrice: 16.0,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 16,
      title: "ΣΤΗΘΑΙΑ",
      subtotal: 0,
      items: [
        { code: "16.01", description: "Από οπλισμένο σκυρόδεμα", unit: "μ.", unitPrice: 23.48, quantity: 0, total: 0 },
        { code: "16.02", description: "Από δρομική πλινθοδομή", unit: "μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        { code: "16.03", description: "Από κιγκλίδωμα σιδερένιο", unit: "μ.", unitPrice: 23.48, quantity: 0, total: 0 },
        {
          code: "16.04",
          description: "Από κιγκλίδωμα αλουμινίου",
          unit: "μ.",
          unitPrice: 35.22,
          quantity: 0,
          total: 0,
        },
        { code: "16.05", description: "Από κιγκλίδωμα ξύλινο", unit: "μ.", unitPrice: 46.96, quantity: 0, total: 0 },
        {
          code: "16.06",
          description: "Από υαλοπίνακες ασφαλείας (SECURIT)",
          unit: "μ.",
          unitPrice: 61.5,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 17,
      title: "ΧΡΩΜΑΤΙΣΜΟΙ",
      subtotal: 0,
      items: [
        { code: "17.01", description: "Υδροχρωματισμοί απλοί", unit: "τ.μ.", unitPrice: 1.18, quantity: 0, total: 0 },
        {
          code: "17.02",
          description: "Υδροχρωματισμοί με τσίγκο και κόλλα",
          unit: "τ.μ.",
          unitPrice: 1.46,
          quantity: 0,
          total: 0,
        },
        { code: "17.03", description: "Πλαστικά επί τοίχου", unit: "τ.μ.", unitPrice: 3.52, quantity: 0, total: 0 },
        { code: "17.04", description: "Πλαστικά σπατουλαριστά", unit: "τ.μ.", unitPrice: 5.86, quantity: 0, total: 0 },
        { code: "17.05", description: "Τσιμεντοχρώματα", unit: "τ.μ.", unitPrice: 5.86, quantity: 0, total: 0 },
        { code: "17.06", description: "Ακρυλικά και ρελιέφ", unit: "τ.μ.", unitPrice: 7.04, quantity: 0, total: 0 },
        { code: "17.07", description: "Ριπολίνες κοινές", unit: "τ.μ.", unitPrice: 7.04, quantity: 0, total: 0 },
        { code: "17.08", description: "Ριπολίνες σατινέ", unit: "τ.μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        { code: "17.09", description: "Ντουκοχρώματα", unit: "τ.μ.", unitPrice: 8.8, quantity: 0, total: 0 },
        { code: "17.10", description: "Λούστρα", unit: "τ.μ.", unitPrice: 23.48, quantity: 0, total: 0 },
      ],
    },
    {
      id: 18,
      title: "ΔΙΑΦΟΡΕΣ ΟΙΚΟΔΟΜΙΚΕΣ ΕΡΓΑΣΙΕΣ",
      subtotal: 484.0,
      items: [
        {
          code: "18.01",
          description: "Μεταλλικά πλέγματα για επιχρίσματα πυροπροστασίας",
          unit: "τ.μ.",
          unitPrice: 8.8,
          quantity: 0,
          total: 484.0,
        },
        { code: "18.02", description: "Ικριώματα", unit: "τ.μ.", unitPrice: 2.06, quantity: 0, total: 0 },
        { code: "18.03", description: "Τζάκι με καπνοδόχο", unit: "αποκοπή", unitPrice: 880.42, quantity: 0, total: 0 },
        {
          code: "18.04",
          description: "Κλειδαριές και πόμολα",
          unit: "κάτοψης",
          unitPrice: 0.88,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 19,
      title: "ΠΕΡΓΚΟΛΕΣ",
      subtotal: 0,
      items: [
        { code: "19.01", description: "Από μεταλλικό σκελετό", unit: "τ.μ.", unitPrice: 20.0, quantity: 0, total: 0 },
        { code: "19.02", description: "Από σκελετό αλουμινίου", unit: "τ.μ.", unitPrice: 25.0, quantity: 0, total: 0 },
        {
          code: "19.03",
          description: "Από ξυλεία προλουστραρισμένη",
          unit: "κ.μ.",
          unitPrice: 900.0,
          quantity: 0,
          total: 0,
        },
        {
          code: "19.04",
          description: "Από ξυλεία (χωρίς λούστρο)",
          unit: "κ.μ.",
          unitPrice: 550.0,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 20,
      title: "ΠΕΡΙΦΡΑΞΕΙΣ",
      subtotal: 45.0,
      items: [
        { code: "20.01", description: "Πάσσαλοι σιδερένιοι", unit: "μ.", unitPrice: 1.5, quantity: 0, total: 45.0 },
        { code: "20.02", description: "Πάσσαλοι ξύλινοι", unit: "μ.", unitPrice: 2.2, quantity: 0, total: 0 },
        {
          code: "20.03",
          description: "Συρματόπλεγμα (κοτετσόσυρμα)",
          unit: "τ.μ.",
          unitPrice: 5.0,
          quantity: 0,
          total: 0,
        },
        {
          code: "20.04",
          description: "Συρματόπλεγμα τετράγωνης οπής",
          unit: "τ.μ.",
          unitPrice: 5.0,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 21,
      title: "ΕΙΔΗ ΥΓΙΕΙΝΗΣ",
      subtotal: 0,
      items: [
        { code: "21.01", description: "Πλήρες σετ λουτρού", unit: "αποκοπή", unitPrice: 469.56, quantity: 0, total: 0 },
        { code: "21.02", description: "Σετ W.C.", unit: "αποκοπή", unitPrice: 176.08, quantity: 0, total: 0 },
        {
          code: "21.03",
          description: "Νεροχύτης - μπαταρία κουζίνας",
          unit: "αποκοπή",
          unitPrice: 176.08,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 22,
      title: "ΥΔΡΑΥΛΙΚΕΣ ΕΓΚΑΤΑΣΤΑΣΕΙΣ",
      subtotal: 0,
      items: [
        {
          code: "22.01",
          description: "Ύδρευση - αποχέτευση πλήρους λουτρού ή εργαστηρίου",
          unit: "αποκοπή",
          unitPrice: 645.64,
          quantity: 0,
          total: 0,
        },
        {
          code: "22.02",
          description: "Ύδρευση - αποχέτευση W.C. νεροχύτη κουζίνας ή εργαστηρίου",
          unit: "αποκοπή",
          unitPrice: 352.16,
          quantity: 0,
          total: 0,
        },
        {
          code: "22.03",
          description: "Ύδρευση - αποχέτευση κουζίνας ή εργαστηρίου",
          unit: "αποκοπή",
          unitPrice: 352.16,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 23,
      title: "ΘΕΡΜΑΝΣΗ – ΨΥΞΗ",
      subtotal: 0,
      items: [
        { code: "23.01", description: "Κεντρική θέρμανση", unit: "kcal", unitPrice: 0.14, quantity: 0, total: 0 },
        { code: "23.02", description: "Κλιματισμός", unit: "btu", unitPrice: 0.14, quantity: 0, total: 0 },
      ],
    },
    {
      id: 24,
      title: "ΦΥΣΙΚΟ ΑΕΡΙΟ",
      subtotal: 0,
      items: [
        {
          code: "24.01",
          description: "Εγκατάσταση μιας κατοικίας",
          unit: "αποκοπή",
          unitPrice: 293.48,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 25,
      title: "ΗΛΕΚΤΡΙΚΕΣ ΕΓΚΑΤΑΣΤΑΣΕΙΣ",
      subtotal: 0,
      items: [
        { code: "25.01", description: "Κατοικίας", unit: "κάτοψης", unitPrice: 11.74, quantity: 0, total: 0 },
        { code: "25.02", description: "Καταστήματος", unit: "κάτοψης", unitPrice: 5.86, quantity: 0, total: 0 },
        { code: "25.03", description: "Γραφείου", unit: "κάτοψης", unitPrice: 5.86, quantity: 0, total: 0 },
      ],
    },
    {
      id: 26,
      title: "ΑΝΕΛΚΥΣΤΗΡΕΣ",
      subtotal: 0,
      items: [
        {
          code: "26.01",
          description: "Ανελκυστήρας μέχρι 4 (τεσσάρων) στάσεων",
          unit: "τεμ.",
          unitPrice: 5869.4,
          quantity: 0,
          total: 0,
        },
        {
          code: "26.02",
          description: "Προσαύξηση ανά στάση πέρα των 4 (τεσσάρων)",
          unit: "στάση",
          unitPrice: 586.94,
          quantity: 0,
          total: 0,
        },
      ],
    },
    {
      id: 27,
      title: "ΔΙΑΦΟΡΕΣ ΕΓΚΑΤΑΣΤΑΣΕΙΣ",
      subtotal: 0,
      items: [
        { code: "27.01", description: "Ηλιακός συλλέκτης", unit: "τεμ.", unitPrice: 880.42, quantity: 0, total: 0 },
      ],
    },
    {
      id: 28,
      title: "ΠΕΡΙΒΑΛΛΩΝ ΧΩΡΟΣ",
      subtotal: 0,
      items: [
        { code: "28.01", description: "Περιβάλλων χώρος", unit: "αποκοπή", unitPrice: 0, quantity: 0, total: 0 },
        { code: "Π.1", description: "Ύδρευση Πισίνας", unit: "αποκοπή", unitPrice: 0, quantity: 0, total: 0 },
        { code: "Π.2", description: "Αποχέτευση Πισίνας", unit: "αποκοπή", unitPrice: 0, quantity: 0, total: 0 },
        { code: "Π.3", description: "Ηλεκτρολογικά Πισίνας", unit: "αποκοπή", unitPrice: 0, quantity: 0, total: 0 },
      ],
    },
  ]
  const grandTotal = categories.reduce((sum, category) => sum + category.subtotal, 0)
  const finalTotal = grandTotal + formData.unforeseen

  // for editing data 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({})

  const onSubmit = (data: FormData) => {
    console.log("Updated Data:", data)
    reset()
  }

  return (
    <div className="max-w-[794px] mx-auto p-4 bg-white arial">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold mb-2 bg-[#D8D8D8] border-1">ΣΥΝΤΑΞΗ ΑΝΑΛΥΤΙΚΟΥ ΠΡΟΫΠΟΛΟΓΙΣΜΟΥ ΕΡΓΟΥ</h1>
        <p className="text-sm ">(σύμφωνα με το Παράρτημα Β' του Ν.4495/17)</p>
      </div>

      {/* Project Info */}
      <div className="mb-6 space-y-4">
        <div className="flex">
          <span className="font-medium">Εργοδότες *:</span>
          <div className="flex-1">
            <div className="flex items-center justify-center gap-2">
              {
                owner?.map((e: any, i: number) => (
                  <h3 key={i} className="text-sm">
                    {e.firstName || e.first_name || "N/A"} {e.lastName || e.last_name || "N/A"}
                  </h3>
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium w-1/5">Έργο *:</span>
          <h3 className="flex-1 text-black text-sm text-center">{projectDescription || "N/A"}</h3>
        </div>
        <div className="flex">
          <span className="font-medium">Διεύθυνση Έργου *:</span>
          <div className="flex-1">
            <h3 className=" text-sm flex items-center justify-center">
            {propertyAddress || "N/A"} {propertyNumber || "N/A"}, {propertyPlace || "N/A"},
            ΔΗΜΟΣ {municipalityCommunity || "N/A"},
            ΤΚ {propertyPostalCode || "N/A"}
          </h3>
          </div>
        </div>
      </div>
      {/* Budget Title */}
      <div className="text-center bg-white border border-black border-b-0">
        <h2 className="text-lg font-bold bg-[#D8D8D8] p-2">ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΫΠΟΛΟΓΙΣΜΟΣ ΒΑΣΕΙ ΠΑΡΑΡΤΗΜΑΤΟΣ Β' Ν.4495/17)</h2>
      </div>

      {/* Budget Table */}
      <div className="border border-black">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b border-black font-bold text-sm bg-[#F2F2F2]">
          <div className="col-span-1 py-2 border-r border-black text-xs px-1">Κωδικός</div>
          <div className="col-span-5 p-2 border-r border-black text-xs">Εργασία</div>
          <div className="col-span-1 py-2 border-r border-black text-xs px-1">Μονάδα Μέτρησης</div>
          <div className="col-span-1 py-2 border-r border-black text-xs px-1">Τιμή Μονάδος €</div>
          <div className="col-span-2 p-2 border-r border-black text-xs">Ποσότητα</div>
          <div className="col-span-2 p-2">Σύνολο €</div>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id}>
            {/* Category Header */}
            <div className="grid grid-cols-12 border-b  bg-[#F2F2F2]">
              <div className="col-span-1 p-2 border-r border-gray-black font-bold bg-[#F2F2F2]  ">{category.id}</div>
              <div className="col-span-9 p-2 border-r border-gray-black font-bold bg-[#F2F2F2] ">{category.title}</div>
              {/* <div className="col-span-2 p-2 font-bold text-right ">{category.subtotal.toFixed(2)}</div> */}
            </div>

            {/* Category Items */}
            {category.items.map((item) => (
              <div key={item.code} className="grid grid-cols-12 border-b border-black text-sm">
                <div className="col-span-1 p-2 border-r border-black ">{item.code}</div>
                <div className="col-span-5 p-2 border-r border-black">{item.description}</div>
                <div className="col-span-1 py-2 border-r border-black text-center">{item.unit}</div>
                <div className="col-span-1 p-2 border-r border-black text-right ">
                  {item.unitPrice.toFixed(2)}
                </div>
                <div className="col-span-2 p-2 border-r border-black text-right ">
                  {item.quantity > 0 ? item.quantity.toFixed(2) : ""}
                </div>
                <div className="col-span-2 p-2 text-right font-medium ">
                  {item.total > 0 ? item.total.toFixed(2) : ""}
                </div>
              </div>
            ))}

            {/* Category Subtotal */}
            <div className="grid grid-cols-12 bg-white border-b border-black">
              <div className="col-span-10 p-2 pl-18 font-bold bg-[#F2F2F2]">Μερικό Σύνολο =</div>
              <div className="col-span-2 p-2 text-right font-bold bg-[#F2F2F2] ">{category.subtotal.toFixed(2)}</div>
            </div>
            <div className="p-3 border-b "></div>
          </div>
        ))}

        {/* Grand Totals */}
        <div className="">
          <div className="grid grid-cols-12 border-b border-black bg-white">
            <div className="col-span-10 p-2 text-right font-bold">Γενικό Σύνολο Αναλυτικού Προϋπολογισμού*. =</div>
            <div className="col-span-2 p-2 text-right font-bold ">{grandTotal.toFixed(2)} €</div>
          </div>

          <div className="grid grid-cols-12 border-b border-black">
            <div className="col-span-10 p-2 text-right font-bold">Απρόβλεπτα*. =</div>
            <div className="col-span-2 p-2 text-right font-bold ">{formData.unforeseen.toFixed(2)} €</div>
          </div>

          <div className="grid grid-cols-12 bg-white">
            <div className="col-span-10 p-2 text-right font-bold ">
              Σύνολο Αναλυτικού Προϋπολογισμού βάσει Παραρτήματος Β' Ν.4495/17)*. =
            </div>
            <div className="col-span-2 p-2 text-right font-bold text-lg">{finalTotal.toFixed(2)} €</div>
          </div>
        </div>
      </div>
      {/* Signature Section */}
      <div className="mt-6 text-right p-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center justify-between gap-2">
            <span className="">Ημερομηνία :</span>
            <span className="ml-30">{createdAt && format(new Date(createdAt), "dd/MM/yyyy")}</span>
          </div>
          <div className="">
            <h3 className="text-center mb-4">Ο Συντάξας Μηχανικός</h3>
            {/* <h3 className="text-center mb-4">SIGN ENGINEER</h3> */}
            <div className="flex items-center justify-end p-4">
              <img src={signature} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-2">
        <div className="col-span-1"></div>
        <div className="col-span-2 flex justify-center gap-6">
          <p className="w-1/2">
            Here, the date the engineer starts the project should automatically appear.
          </p>
          <p className="w-1/2">
            stamp and signature of an engineer, he should save it in his profile and display it there or if he doesn't want it for personal data reasons, we put a picture and he changes it
          </p>
        </div>
      </div>
    </div >
  )
}



