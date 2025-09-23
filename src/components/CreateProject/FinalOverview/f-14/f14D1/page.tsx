"use client"
import { useState } from "react"
import StampComponent from "../../shared/signture/signture"

import { FaRegEdit } from "react-icons/fa";

// for editing 
import { useForm } from "react-hook-form"

interface FormData {
  owner_name: string
  project_description: string
  owner_address: string
  owner_city: string
  owner_postal_code: string
}
// end editing 

interface allDataProps {
    owners: any[];
    projectDescription: string;
    propertyPostalCode: string;
    propertyAddress: string;
    propertyPlace: string;
}

interface BudgetItem {
  code: string
  description: string
  unit: string
  unitPrice: string
  last: number
}

interface BudgetCategory {
  id: number
  title: string
  items: BudgetItem[]
  subtotal: number
}

export default function F14D1({ allData }: { allData: allDataProps }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const owner = allData?.owners?.[0] || {};
  const {projectDescription, propertyPostalCode, propertyAddress, propertyPlace} = allData || {}

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
          description: "Γενικές εκσκαφές γαιώδεις με μηχανικά μέσα (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,002",
          last: 1,
        },
        {
          code: "1.02",
          description:
            "Γενικές εκσκαφές ημιβραχώδεις με μηχανικά μέσα εκτός κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,004",
          last: 1,
        },
        {
          code: "1.03",
          description:
            "Γενικές εκσκαφές βραχώδεις με μηχανικά μέσα εκτός κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,005",
          last: 1,
        },
        {
          code: "1.04",
          description: "Εκσκαφές θεμελίων γαιώδεις με μηχανικά μέσα (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,003",
          last: 1,
        },
        {
          code: "1.05",
          description:
            "Εκσκαφές θεμελίων ημιβραχώδεις με μηχανικά μέσα εκτός κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,004",
          last: 1,
        },
        {
          code: "1.06",
          description:
            "Εκσκαφές θεμελίων βραχώδεις με μηχανικά μέσα εκτός κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,006",
          last: 1,
        },
        {
          code: "1.07",
          description:
            "Επιχώσεις με μηχανικά μέσα (περιλαμβάνεται φόρτωση, μεταφορά, διάστρωση, συμπύκνωση, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,002",
          last: 1,
        },
        {
          code: "1.08",
          description:
            "Εκσκαφές γαιώδεις με τα χέρια (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,36",
          last: 1,
        },
        {
          code: "1.09",
          description:
            "Εκσκαφές ημιβραχώδεις με τα χέρια ή κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,45",
          last: 1,
        },
        {
          code: "1.10",
          description:
            "Εκσκαφές βραχώδεις με τα χέρια ή κομπρεσέρ (περιλαμβάνεται φόρτωση, μεταφορά, κ.λπ.)",
          unit: "μ³",
          unitPrice: "0,72",
          last: 1,
        },
        {
          code: "1.11",
          description:
            "Επιχώσεις πάσης φύσεως με χέρια (περιλαμβάνεται φόρτωση, μεταφορά, διάστρωση, συμπύκνωση .λπ.)",
          unit: "μ³",
          unitPrice: "0,18",
          last: 1,
        },
      ],
    },
    {
      id: 2,
      title: "ΚΑΘΑΙΡΕΣΕΙΣ (με τα χέρια ή με κομπρεσέρ)",
      subtotal: 0,
      items: [
        { code: "2.01", description: "Καθαίρεση οπλισμένου σκυροδέματος", unit: "μ³", unitPrice: "1,440", last: 1 },
        { code: "2.02", description: "Καθαίρεση σκυροδεμάτων δαπέδων (άοπλο ή οπλισμένο με πλέγμα)", unit: "μ³", unitPrice: "0,900", last: 1 },
        { code: "2.03", description: "Καθαίρεση πλινθοδομής συνήθους κονιάματος", unit: "μ³", unitPrice: " 0,270", last: 1 },
        { code: "2.04", description: "Καθαίρεση πλινθοδομής ισχυρού κονιάματος", unit: "μ³", unitPrice: "0,360", last: 1 },
        { code: "2.05", description: "Καθαίρεση πλινθοδομής πάσης φύσεως", unit: "μ³", unitPrice: "0,450", last: 1 },
        { code: "2.06", description: "Καθαίρεση επιχρισμάτων", unit: "μ²", unitPrice: "0,090", last: 1 },
        { code: "2.07", description: "Καθαίρεση τοίχων εκ πλινθοδομών για διανοίξη ανοιγμάτων (θυρών, παραθύρων κ.λπ.)", unit: "τεμ.", unitPrice: "0,333", last: 1 },
        { code: "2.08", description: "Αποξήλωση ξύλινων ή μεταλλικών κουφωμάτων μετά των κασσωμάτων τους", unit: "μ²", unitPrice: "0,202", last: 1 },
        { code: "2.09", description: "Αποξήλωση κεραμιδιών στέγης (κεραμίδια καρφωτά, δετά ή κολλητά)", unit: "μ²", unitPrice: " 0,018", last: 1 },
        { code: "2.10", description: "Αποξήλωση σκελετού (τεξυτών κ.λπ.) στέγης πάσης φύσεως", unit: "μ²", unitPrice: "0,036", last: 1 },
        { code: "2.11", description: "Αποξήλωση κυματοειδών φύλλων επικάλυψης πάσης φύσεως (αμιαντοτσιμέντου, μεταλλικών κ.λπ.)", unit: "μ²", unitPrice: " 0,013", last: 1 },
        { code: "2.12", description: "Αποξήλωση δαπέδων εκ φυσικών ή τεχνητών πλακών ή πλακιδίων ή μαρμάρου", unit: "μ²", unitPrice: "0,027", last: 1 },
        { code: "2.13", description: "Αποξήλωση ξύλινων δαπέδων", unit: "μ²", unitPrice: "0,022", last: 1 },
        { code: "2.14", description: "Αποξήλωση υγρομόνωσης με άσφαλτο και μεμβράνη", unit: "μ²", unitPrice: "0,050", last: 1 },
        { code: "2.15", description: "Αποξήλωση θερμομόνωσης πάσης φύσεως", unit: "μ²", unitPrice: "0,007", last: 1 },
        { code: "2.16", description: "Καθαίρεση και φόρτωση δια χειρών προϊόντων καθαιρέσεων πάσης φύσεως", unit: "μ³", unitPrice: "0,270", last: 1 },
      ],
    },
    {
      id: 3,
      title: "ΣΚΥΡΟΔΕΜΑΤΑ",
      subtotal: 0,
      items: [
        { code: "3.01", description: "Οπλισμένα σκυροδέματα", unit: "μ³", unitPrice: "0,810", last: 1 },
        { code: "3.02", description: "Ελαφρά οπλισμένα σκυροδέματα (με πλέγμα)", unit: "μ³", unitPrice: " 0,450", last: 1 },
        { code: "3.03", description: "Ελαφρομπετόν πάσης φύσεως (BETOCEL, περλιτόδεμα κ.λπ.)", unit: "μ³", unitPrice: "0,270", last: 1 },
        { code: "3.04", description: "Άοπλο σκυρόδεμα (GROS-BETON)", unit: "μ³", unitPrice: "0,315", last: 1 },
        { code: "3.05", description: "Εξομαλυντικές στρώσεις (γεμίσματα δαπέδων με γαρμπιλομπετόν, τσιμεντοκονία κ.λπ.)", unit: "μ²", unitPrice: "0,018", last: 1 },
        { code: "3.06", description: "Επιφάνειες εμφανους σκυροδέματος", unit: "μ²", unitPrice: "0,027", last: 1 },
        { code: "3.07", description: "Ξενάι δρομικά", unit: "μ.μ.", unitPrice: "0,036", last: 1 },
        { code: "3.08", description: "Ξενάι μπατικά", unit: "μ.μ.", unitPrice: "0,063", last: 1 },
        { code: "3.09", description: "Μανδύες έγχυτου σκυροδέματος (οπλισμένος, ξυλότυπος, σκυρόδεμα)", unit: "μ³", unitPrice: "1,350", last: 1 },
        { code: "3.10", description: "Μανδύες εκτοξευόμενου σκυροδέματος (οπλισμός, σκυρόδεμα)", unit: "μ³", unitPrice: "0,225", last: 1 },
        { code: "3.11", description: "Βάσεις αγιονευρητηρίου (εφόσον δεν υπάρχει προϋπολογισμός)", unit: "μ³", unitPrice: "0,180", last: 1 },
        { code: "3.12", description: "Οπλισμένο σκυρόδεμα αντιστήριξης πρανών βαθέων εκσκαφών", unit: "μ³", unitPrice: "0,270", last: 1 },
        { code: "3.13", description: "Οπλισμένα σκυροδέματα περιβάλλοντος χώρου", unit: "μ³", unitPrice: "0,400", last: 1 },
      ],
    },
    {
      id: 4,
      title: "ΤΟΙΧΟΠΟΙΙΕΣ",
      subtotal: 0,
      items: [
        { code: "4.01", description: "Λιθοδομές με αργούς λίθους", unit: "μ²", unitPrice: "0,270", last: 2 },
        { code: "4.02", description: "Λιθοδομές με λαξευτούς λίθους (λάξευμα επί τόπου)", unit: "μ²", unitPrice: "0,630", last: 2 },
        { code: "4.03", description: "Πλινθοδομές δρομικές", unit: "μ²", unitPrice: "0,054", last: 2 },
        { code: "4.04", description: "Πλινθοδομές μπατικές", unit: "μ²", unitPrice: "0,090", last: 2 },
        { code: "4.05", description: "Τσιμεντοπλινθοδομές", unit: "μ²", unitPrice: "0,036", last: 2 },
        { code: "4.06", description: "Πλινθοδομές εξ ελαφρών πλίνθων (κισσηροπλινθοδομές, τύπου)", unit: "μ²", unitPrice: " 0,031", last: 2 },
        { code: "4.07", description: "Διακοσμητικά τούβλα και μαλτούβλα", unit: "μ²", unitPrice: "0,180", last: 2 },
      ],
    },
    {
      id: 5,
      title: "ΕΠΙΧΡΙΣΜΑΤΑ",
      subtotal: 0,
      items: [
        { code: "5.01", description: "Ασβεστοτσιμεντοκονιάματα τριπτά", unit: "μ²", unitPrice: "0,040", last: 3 },
        { code: "5.02", description: "Τσιμεντοκονιάματα τριπτά (με ή χωρίς μονοτικά πρόσμικτα)", unit: "μ²", unitPrice: "0,072", last: 3 },
        { code: "5.03", description: "Ασβεστοτσιμεντοκονιάματα με τελευταία στρώση σαγρέ", unit: "μ²", unitPrice: "0,045", last: 3 },
        { code: "5.04", description: "Επιχρίσματα τύπου αρχιτεκτή", unit: "μ²", unitPrice: "0,063", last: 3 },
        { code: "5.05", description: "Επιχρίσματα με τελευταία στρώση κετσαπή (χωρίς λευκού τύπου)", unit: "μ²", unitPrice: "0,036", last: 3 },
        { code: "5.06", description: "Επιχρίσματα τραθυτά", unit: "μ.μ.", unitPrice: "0,198", last: 3 },
      ],
    },
    {
      id: 6,
      title: "ΕΠΕΝΔΥΣΕΙΣ ΤΟΙΧΩΝ",
      subtotal: 0,
      items: [
        { code: "6.01", description: "Με κεραμικά πλακάκια κολλητά", unit: "μ²", unitPrice: "0,090", last: 3 },
        { code: "6.02", description: "Με κεραμικά πλακάκια με χρήση τσιμεντοκονίας", unit: "μ²", unitPrice: "0,108", last: 3 },
        { code: "6.03", description: "Με ξύλο", unit: "μ²", unitPrice: "0,000", last: 0 },
        { code: "6.04", description: "Με διακοσμητικά τούβλα", unit: "μ²", unitPrice: "0,162", last: 3 },
        { code: "6.05", description: "Με τεχνητές ή φυσικές πλάκες ή πέτρα (π.χ. οχατόλιθο κ.λπ.)", unit: "μ²", unitPrice: "0,144", last: 3 },
        { code: "6.06", description: "Με ορθομαρμάρωση", unit: "μ²", unitPrice: "0,133", last: 3 },
        { code: "6.07", description: "Με φύλλα μεταλλικά (αλουμίνιο κ.λπ.)", unit: "μ²", unitPrice: "0,000", last: 0 },
      ],
    },
    {
      id: 7,
      title: "ΕΠΙΣΤΡΩΣΕΙΣ ΔΑΠΕΔΩΝ",
      subtotal: 0,
      items: [
        { code: "7.01", description: "Με τσιμεντοκονίαμα", unit: "μ²", unitPrice: "0,036", last: 4 },
        { code: "7.02", description: "Με τσιμεντόπλακες πάσης φύσεως", unit: "μ²", unitPrice: "0,045", last: 4 },
        { code: "7.03", description: "Με κεραμόπλακες (χωρίς λειότριψη και στίλβωση)", unit: "μ²", unitPrice: "0,045", last: 4 },
        { code: "7.04", description: "Με μωσαϊκό λευκού τσιμέντου (χωρίς λειότριψη και στίλβωση)", unit: "μ²", unitPrice: "0,054", last: 4 },
        { code: "7.05", description: "Με φυσικές πλάκες (Καρύστου κ.λπ.)", unit: "μ²", unitPrice: "0,099", last: 4 },
        { code: "7.06", description: "Με πλάκες μαρμάρου (χωρίς λειότριψη και στίλβωση)", unit: "μ²", unitPrice: "0,108", last: 4 },
        { code: "7.07", description: "Με κεραμικά πλακάκια", unit: "μ²", unitPrice: "0,099", last: 4 },
        { code: "7.08", description: "Με ξύλινα δάπεδα καρφωτά επί καδρονιών (χωρίς τρίψιμο και βερνίκωμα)", unit: "μ²", unitPrice: "0,126", last: 4 },
        { code: "7.09", description: "Με ξύλινα κολλητά δάπεδα (χωρίς τρίψιμο και βερνίκωμα)", unit: "μ²", unitPrice: "0,081", last: 4 },
        { code: "7.10", description: "Με πλαστικά πλακάκια ή τάπητα (πλαστικά, μοκέτα κ.λπ.)", unit: "μ²", unitPrice: "0,000", last: 0 },
        { code: "7.11", description: "Λειότριψη και στίλβωση δαπέδων μωσαϊκών ή μαρμάρων", unit: "μ²", unitPrice: "0,036", last: 4 },
        { code: "7.12", description: "Τρίψιμο και βερνίκωμα ξύλινων δαπέδων", unit: "μ²", unitPrice: "0,031", last: 4 },
      ],
    },
    {
      id: 8,
      title: "ΜΟΝΩΣΕΙΣ - ΣΤΕΓΑΝΩΣΕΙΣ",
      subtotal: 0,
      items: [
        { code: "8.01", description: "Υγρομόνωση με πάσης φύσεως μεμβράνες ή ασφαλτόπανο", unit: "μ²", unitPrice: "0,018", last: 5 },
        { code: "8.02", description: "Υγρομόνωση με πάσης φύσεως επαλειφόμενα υλικά", unit: "μ²", unitPrice: "0,009", last: 5 },
        { code: "8.03", description: "Θερμομόνωση με αποθετημένη πάση φύσεως θερμομονωτικών υλικών", unit: "μ²", unitPrice: "0,006", last: 5 },
      ],
    },
    {
      id: 9,
      title: "ΜΑΡΜΑΡΙΚΑ",
      subtotal: 0,
      items: [
        { code: "9.01", description: "Ποδιές, κατώφλια, επίστρωση στέψεων στηθαίων", unit: "μ.μ.", unitPrice: "0,045", last: 4 },
        { code: "9.02", description: "Επένδυση βαθμιδίων (πάτημα, ρίχτι)", unit: "μ.μ.", unitPrice: "0,090", last: 4 },
        { code: "9.03", description: "Σκολοπέντα", unit: "τεμ/τό", unitPrice: "0,018", last: 4 },
        { code: "9.04", description: "Σοβατεπί", unit: "μ.μ.", unitPrice: "0,022", last: 4 },
      ],
    },
    {
      id: 10,
      title: "ΨΕΥΔΟΡΟΦΕΣ",
      subtotal: 0,
      items: [
        { code: "10.01", description: "Επίχρισμα σε μεταλλικό πλέγμα", unit: "μ²", unitPrice: "0,090", last: 3 },
        { code: "10.02", description: "Από γυψοσανίδες", unit: "μ²", unitPrice: "0,000", last: 0 },
        { code: "10.03", description: "Από πλάκες αργυντών ινών σε μεταλλικό σκελετό", unit: "μ²", unitPrice: "0,000", last: 0 },
        { code: "10.04", description: "Από ξύλο", unit: "μ²", unitPrice: "0,000", last: 0 },
      ],
    },
    {
      id: 11,
      title: "ΕΠΙΚΑΛΥΨΕΙΣ",
      subtotal: 0,
      items: [
        { code: "11.01", description: "Επικεράμωση με κεραμίδια κολυμπητά", unit: "μ²", unitPrice: "0,081", last: 1 },
        { code: "11.02", description: "Επικεράμωση με κεραμίδια καρφωτά ή δετά", unit: "μ²", unitPrice: "0,031", last: 1 },
        { code: "11.03", description: "Ξύλινος σκελετός στέγης εδραζόμενος", unit: "μ²", unitPrice: "0,045", last: 1 },
        { code: "11.04", description: "Ξύλινος σκελετός στέγης αυτοφερόμενος", unit: "μ²", unitPrice: "0,108", last: 1 },
        { code: "11.05", description: "Επικάλυψη με οχατόπλακες εν ξηρώ", unit: "μ²", unitPrice: "0,031", last: 1 },
        { code: "11.06", description: "Επικάλυψη με οχατόπλακες κολυμπητές", unit: "μ²", unitPrice: "0,090", last: 1 },
        { code: "11.07", description: "Επικάλυψη με κυματοειδείς πλάκες αμιαντοτσιμέντου, πλαστικού,", unit: "μ²", unitPrice: "0,009", last: 1 },
      ],
    },
    {
      id: 12,
      title: "ΣΤΗΘΑΙΑ",
      subtotal: 0,
      items: [
        { code: "12.01", description: "Από οπλισμένο σκυρόδεμα", unit: "μ.μ.", unitPrice: "0,090", last: 1 },
      ],
    },
    {
      id: 13,
      title: "ΧΡΩΜΑΤΙΣΜΟΙ",
      subtotal: 0,
      items: [
        { code: "13.01", description: "Υδροχρωματισμοί πάσης φύσεως", unit: "μ²", unitPrice: "0,009", last: 5 },
        { code: "13.02", description: "Πλαστικά απλά επί τοίχου", unit: "μ²", unitPrice: "0,027", last: 5 },
        { code: "13.03", description: "Πλαστικά ή ριπολίνες σπατουλαριστά επί τοίχου", unit: "μ²", unitPrice: "0,040", last: 5 },
        { code: "13.04", description: "Επαναχρωματισμός τοίχων με πλαστικά ή ριπολίνες", unit: "μ²", unitPrice: "0,027", last: 5 },
        { code: "13.05", description: "Χρωματισμοί ή επαναχρωματισμοί με ακρυλικό ή τσιμεντόχρωμα", unit: "μ²", unitPrice: "0,027", last: 5 },
        { code: "13.06", description: "Χρωματισμοί ή επαναχρωματισμοί με λελβέ", unit: "μ²", unitPrice: "0,036", last: 5 },
        { code: "13.07", description: "Χρωματισμοί ξύλινων επιφανειών", unit: "μ²", unitPrice: "0,063", last: 5 },
        { code: "13.08", description: "Χρωματισμοί σιδηρών επιφανειών", unit: "μ²", unitPrice: "0,072", last: 5 },
        { code: "13.09", description: "Χρωματισμοί σωλήνων και ξύλινων ή σιδηρών κουφωμάτων", unit: "μ.μ.", unitPrice: "0,027", last: 5 },
        { code: "13.10", description: "Επαναχρωματισμός ξύλινων ή σιδηρών επιφανειών", unit: "μ²", unitPrice: "0,045", last: 5 },
        { code: "13.11", description: "Βερνικοχρωματισμοί ξύλινων επιφανειών", unit: "μ²", unitPrice: "0,135", last: 5 },
      ],
    },
    {
      id: 14,
      title: "ΔΙΑΦΟΡΑ",
      subtotal: 0,
      items: [
        { code: "14.01", description: "Κατασκευή ταχιού", unit: "τεμ.", unitPrice: "2,700", last: 6 },
        { code: "14.02", description: "Καμινάδα μετά των κρημώτων", unit: "μ.μ.", unitPrice: "0,225", last: 6 },
        { code: "14.03", description: "Κριώματα ξύλινα ή σιδηρά", unit: "μ²", unitPrice: "0,013", last: 6 },
      ],
    },
    {
      id: 15,
      title: "ΠΕΡΙΒΑΛΛΟΝ ΧΩΡΟΣ",
      subtotal: 0,
      items: [
        {
          code: "15.01",
          description: "Ο αριθμός ημερομισθίων περιβάλλοντος χώρου προκύπτει με την προσμέτρηση των εργασιών και εφαρμογή του παρόντος πίνακας",
          unit: "",
          unitPrice: "0,000",
          last: 6
        },
      ],
    },

  ]

  // 🔹 Calculate totals
  const grandTotal = categories.reduce((acc, category) => acc + category.subtotal, 0)
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
    setIsEditModalOpen(false)
  }

  return (
    <div className="max-w-[794px] mx-auto p-4 bg-white">
      {/* <div className="text-right -mt-7">
        <button
          className="mt-1 px-4 py-1"
          onClick={() => setIsEditModalOpen(true)}
        >
          <FaRegEdit className="text-black text-2xl cursor-pointer" />
        </button>
      </div> */}
      {/* Project Info */}
      <div className="mb-6 space-y-4">
        <div className="flex items-center gap-4">
          <span className="font-medium w-1/4">Εργοδότες *:</span>
          <h3 className="flex-1 text-black text-sm">{owner?.firstName || "N/A"} {owner?.lastName || "N/A"}</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium w-1/4">Έργο *:</span>
          <h3 className="flex-1 text-black text-sm">{projectDescription || "N/A"}</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium w-1/4">Διεύθυνση Έργου *:</span>
          <h3 className="flex-1 text-black text-sm">
            {propertyAddress || "N/A"},  {propertyPlace || "N/A"},  {propertyPostalCode || "N/A"}(FOR BUILDING)
          </h3>
        </div>
      </div>

      {/* Budget Title */}
      <div className="text-center bg-white p-2 border border-black border-b-0">
        <h2 className="text-lg font-bold mb-4">Π Ι Ν Α Κ Α Σ 3</h2>
        <p className="text-sm mb-1">
          που προσδιορίζει τον αριθμό των ημερομισθίων ανά μονάδα οικοδομικής εργασίας και{" "}
        </p>
        <p className="text-sm mb-1">οι οποίες αναφέρονται στον αναλυτικό Προϋπολογισμό του έργου.</p>
      </div>

      {/* Budget Table */}
      <div className="border border-black">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-white border-b border-black font-bold text-sm">
          <div className="col-span-1 py-2 border-r border-black text-xs px-1 flex flex-col justify-center items-center gap-2">
            <span>a/a</span>
            <span>(1)</span>
          </div>
          <div className="col-span-3 p-2 border-r border-black text-xs flex flex-col justify-center items-center gap-2">
            <span>Εργασία</span>
            <span>(2)</span>
          </div>
          <div className="col-span-1 py-2 border-r border-black text-xs px-1 text-center flex flex-col justify-center items-center gap-2">
            <span>Μονάδα</span>
            <span>(3)</span>
          </div>
          <div className="col-span-2 py-2 border-r border-black text-xs px-1 text-center flex flex-col justify-center items-center gap-2">
            <span>Αριθμός Ημερομισθίων ανά Μονάδα Εργασίας</span>
            <span>(4)</span>
          </div>
          <div className="col-span-1 p-2 border-r border-black text-xs text-center flex flex-col justify-center items-center gap-2">
            <span>Μονάδες Εργασίας</span>
            <span>(5)</span>
          </div>
          <div className="col-span-2 p-2 border-r border-black text-xs text-center flex flex-col justify-center items-center gap-2">
            <span>Αριθμός Ημερομισθίων</span>
            <span>(6)</span>
          </div>
          <div className="col-span-2 p-2 text-center flex flex-col justify-center items-center gap-2">
            <span>Κατασκευ-αστική Φάση</span>
            <span>(7)</span>
          </div>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id}>
            {/* Category Header */}
            <div className="grid grid-cols-12 bg-white border-b border-black">
              <div className="col-span-1 p-2 border-r border-black font-bold text-center">{category.id}</div>
              <div className="col-span-9 p-2 font-bold">{category.title}</div>
            </div>

            {/* Category Items */}
            {category.items.map((item) => (
              <div key={item.code} className="grid grid-cols-12 border-b border-black text-sm">
                <div className="col-span-1 p-2 border-r border-black text-center">{item.code}</div>
                <div className="col-span-3 p-2 border-r border-black">{item.description}</div>
                <div className="col-span-1 py-2 border-r border-black text-center">{item.unit}</div>
                <div className="col-span-2 p-2 border-r border-black text-center">{item.unitPrice}</div>
                <div className="col-span-1 p-2 border-r border-black text-center"></div>
                <div className="col-span-2 p-2 border-r border-black text-center"></div>
                <div className="col-span-1 p-2 text-center font-medium">{item.last}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border-2 border-t-0 font-bold">
        <h2 className="ml-16">ΣΥΝΟΛΟ ΗΜΕΡΟΜΙΣΘΙΩΝ :</h2>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <p>Ελάχιστη προκαταβολή*₁ :</p>
          <p className=" font-semibold">33,40 €</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Ποσοστό προκαταβολής*₁ :</p>
          <p className=" font-semibold">1,00%</p>
        </div>

        <div className="flex justify-between mb-2">
          <p>Τεκμαρτό ημερομίσθιο 8ης ασφαλιστικής κλάσης (Τ.Η.)*₂ :</p>
          <p className=" font-semibold">33,40 €</p>
        </div>

        <div className="flex justify-between mb-1">
          <p>Ποσοστό εισφοράς εργοδότη*₃ :</p>
          <p>58,365%</p>
        </div>
        <div className="flex justify-between mb-1">
          <p>Ποσοστό ασφαλιζομένου*₃ :</p>
          <p>17,570%</p>
        </div>
        <div className="flex justify-between mb-2 font-semibold">
          <p>Ποσοστό εισφοράς (εργοδότη+ασφαλιζομένου)*₃ :</p>
          <p>75,935%</p>
        </div>

        <div className="border-t border-gray-300 pt-2">
          <div className="flex justify-between mb-2 font-bold">
            <p>Προκαταβολή ΙΚΑ-ΕΤΑΜ*₄ =</p>
            <p className="">33,40 €</p>
          </div>
          <div className="text-xs">
            <p>(Ποσοστό προκαταβολής Χ Σύνολο Ημερομισθίων Χ</p>
            <p>Χ Τεκμαρτό Ημερομίσθιο Χ Ποσοστό εισφοράς)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        {/* Dashed Border Box = common component */}
        <StampComponent
          title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
          instructions={["Με δεξί κλικ", "Αλλαγή εικόνας", " Βάζετε την σφραγίδα σας"]}
        />
        <div>
          <p className="text-center">Ο Συντάξας</p>
        </div>
      </div>

      {/* EDIT MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
              onClick={() => setIsEditModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4">✍️ Edit Data</h2>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 p-4 border rounded-lg bg-white shadow-md"
              >
                {/* Employer */}
                <div className="flex items-center gap-4">
                  <label className="font-medium w-1/4">Εργοδότες *:</label>
                  <input
                     placeholder={owner?.firstName || "owner_name"}
                    type="text"
                    {...register("owner_name", { required: "This field is required" })}
                    className="flex-1 border p-2 rounded text-sm"
                  />
                </div>

                {/* Project */}
                <div className="flex items-center gap-4">
                  <label className="font-medium w-1/4">Έργο *:</label>
                  <input
                    // placeholder={project_description || "Project description"}
                    type="text"
                    {...register("project_description", { required: "This field is required" })}
                    className="flex-1 border p-2 rounded text-sm"
                  />
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <label className="font-medium w-1/4">Διεύθυνση Έργου *:</label>
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder={owner?.address || "Address"}
                      {...register("owner_address", { required: "Address is required" })}
                      className="border p-2 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder={owner?.city || "City"}
                      {...register("owner_city", { required: "City is required" })}
                      className="border p-2 rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder={owner?.postalCode || "Postal Code"}
                      {...register("owner_postal_code", { required: "Postal code is required" })}
                      className="border p-2 rounded text-sm"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
