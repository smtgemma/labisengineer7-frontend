"use client";
import { setMultipleDescriptionTask } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from "react-redux";

// interface SubcategoryOption {
//   id: string;
//   label: string;
//   selected?: boolean;
//   description?: string;
// }

interface Category {
  id: string;
  title: string;
  description?: string;
  options: SubcategoryOption[];
}

interface SubcategoryOption {
  id: string;
  label: string;
  selected?: boolean;
  description?: string;
  showDesc?: boolean;
}

const DescriptionTask = () => {
  const [description, setDescription] = useState<Category[]>([
    {
      id: "Αποξηλώσεις_Καθαιρέσεις_1",
      title: "Αποξηλώσεις / Καθαιρέσεις",

      options: [
        {
          id: "Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών",
          label: "Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών",
          description:
            "Αποξήλωση τοιχοποιιών από τούβλο ή γυψοσανίδα, απομάκρυνση μπαζών και καθαρισμός χώρου. Περιλαμβάνει χρήση κοπτικών εργαλείων και προστασία γειτονικών κατασκευών.",
        },
        {
          id: "Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών κουζίνας και ντουλαπών",
          label:
            "Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών κουζίνας και ντουλαπών",
          description:
            "Αφαίρεση με προσοχή για ελαχιστοποίηση φθορών, απομάκρυνση από τον χώρο και καθαρισμός υπολειμμάτων.",
        },
        {
          id: "Αποξηλώσεις πλακιδίων σε δάπεδα/τοιχους λουτρού–WC",
          label: "Αποξηλώσεις πλακιδίων σε δάπεδα/τοιχους λουτρού–WC",
          //   selected: true,
          description:
            "Χρήση εργαλείων αποκόλλησης, προστασία σωληνώσεων και κατασκευών, καθαρισμός και απόρριψη υλικών.",
        },
        {
          id: "Αποξηλώσεις παλαιών ειδών υγιεινής",
          label: "Αποξηλώσεις παλαιών ειδών υγιεινής",
          description:
            "Αποσύνδεση και απομάκρυνση λεκάνης, νιπτήρα, μπανιέρας ή καμπίνας, με ασφαλή τρόπο, χωρίς πρόκληση φθοράς σε δίκτυα ύδρευσης/αποχέτευσης.",
        },
      ],
    },
    {
      id: "Οικοδομικές–Δομικές Εργασίες_2",
      title: "Οικοδομικές – Δομικές Εργασίες_2",

      options: [
        {
          id: "Αλλαγή Χρήσης Χώρου",
          label: "Αλλαγή Χρήσης Χώρου",
          description:
            "Η παραπάνω αφορά την τροποποίηση της χρήσης του χώρου …………………… (π.χ. ισόγειου αποθηκευτικού χώρου με εμβαδόν … τ.μ.), ο οποίος βάσει της εγκεκριμένης οικοδομικής άδειας ………/……… φέρει χρήση …………………… (π.χ. αποθήκης/χώρου στάθμευσης) και βρίσκεται στον …………………… (όροφο/ισόγειο/υπόγειο), με αυτόνομη πρόσβαση μέσω …………………… (π.χ. ιδιωτικής εισόδου ή κοινόχρηστων χώρων). Η κατασκευή του χώρου είναι σύμφωνη με την εγκεκριμένη στατική και αρχιτεκτονική μελέτη της άδειας. Η προτεινόμενη αλλαγή χρήσης αφορά τη μετατροπή του σε …………………… (π.χ. κατοικία, κατάστημα κλπ.), χωρίς επέμβαση στον φέροντα οργανισμό ή τροποποίηση του εξωτερικού όγκου και των όψεων του κτιρίου, ενώ η νέα χρήση είναι πλήρως συμβατή με τις θεσμοθετημένες χρήσεις γης της περιοχής.",
        },
        {
          id: "Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών",
          label:
            "Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών",
          description:
            "Επιδιορθώσεις τοίχων, εφαρμογή σοβά για ευθυγράμμιση επιφανειών, στοκάρισμα αρμών και ατελειών με υλικά κατάλληλα για βάψιμο ή επικάλυψη",
        },
        {
          id: "Γεμίσματα δαπέδων",
          label: "Γεμίσματα δαπέδων",
          description:
            "dΣτρώση γεμισμάτων για εξισορρόπηση υψομετρικών διαφορών ή απόκρυψη εγκαταστάσεων. Εφαρμογή με ελαφρομπετόν ή τσιμεντοκονία, επιπέδωση και φινίρισμα.",
        },
        {
          id: "Κατασκευή από ξηρά δόμηση – Χώρισμα 1+1, Επένδυση 0+1 σε τοιχοποία και Οροφή από γυψοσανίδα",
          label:
            "Κατασκευή από ξηρά δόμηση – Χώρισμα 1+1, Επένδυση 0+1 σε τοιχοποία και Οροφή από γυψοσανίδα",
          description:
            "Κατασκευή χωρισμάτων με μεταλλικό σκελετό και γυψοσανίδα, πλήρωση με υλικά ηχομόνωσης. Οροφές με σκελετό και ανάρτηση, φινίρισμα με αρμόστοκο.",
        },
      ],
    },
    {
      id: " Ηλεκτρομηχανολογικές Εργασίες (Η/Μ)_3",
      title: " Ηλεκτρομηχανολογικές Εργασίες (Η/Μ)_3",
      options: [
        {
          id: "Ηλεκτρολογικές εργασίες",
          label: "Ηλεκτρολογικές εργασίες",
          description:
            "Νέες καλωδιώσεις σε υπάρχουσες ή νέες οδεύσεις, τοποθέτηση πριζών, διακοπτών, παροχών ρεύματος και πίνακα, βάσει προδιαγραφών ασφαλείας.",
        },
        {
          id: "Υδραυλικές εργασίες",
          label: "Υδραυλικές εργασίες",
          description:
            "Νέες σωληνώσεις παροχής και αποχέτευσης σε χώρο λουτρού/WC και κουζίνας, σύνδεση με υπάρχον δίκτυο, τοποθέτηση νέων ειδών υγιεινής, σιφώνια, νιπτήρες, καζανάκια κ.ά.",
        },
        {
          id: "Τοποθέτηση και μετακίνηση σωμάτων καλοριφέρ",
          label: "Τοποθέτηση και μετακίνηση σωμάτων καλοριφέρ",
          description:
            "Αποσύνδεση/τοποθέτηση νέων σωμάτων, μεταφορά σημείων βάσει μελέτης, νέες σωληνώσεις και υδραυλικές συνδέσεις, εξαερώσεις και δοκιμή.",
        },
        {
          id: "Θέρμανση / Ψύξη – Κλιματισμός",
          label: "Θέρμανση / Ψύξη – Κλιματισμός",
          description:
            "Τοποθέτηση κλιματιστικών (split unit, πολυδιαιρούμενα), προκαλωδίωση & σωληνώσεις ψυκτικού υγρού (χωνευτά), αντικατάσταση λεβητοστασίου ή μετάβαση σε αντλία θερμότητας, τοποθέτηση θερμοστατών – ζωνών θέρμανσης.",
        },
      ],
    },
    {
      id: "Εργασίες Δαπέδων / Επιφανειών_4",
      title: "Εργασίες Δαπέδων / Επιφανειών",

      options: [
        {
          id: "Τρίψιμο και γυάλισμα ξύλινου παρκέ",
          label: "Τρίψιμο και γυάλισμα ξύλινου παρκέ",
          description:
            "Λείανση με ειδικά μηχανήματα, στοκάρισμα και εφαρμογή προστατευτικού βερνικιού για ανανέωση της όψης και αντοχής του ξύλινου δαπέδου.",
        },
        {
          id: "Τρίψιμο και γυάλισμα μαρμάρων",
          label: "Τρίψιμο και γυάλισμα μαρμάρων",
          description:
            "Λείανση, στοκάρισμα και κρυσταλλοποίηση μαρμάρινων επιφανειών για αποκατάσταση λάμψης και καθαρότητας επιφάνειας.",
        },
        {
          id: "Τοποθέτηση πλακιδίων σε δάπεδο και τοίχους WC/Κουζίνας",
          label: "Τοποθέτηση πλακιδίων σε δάπεδο και τοίχους WC/Κουζίνας",
          description:
            "Προετοιμασία υποστρώματος, επικόλληση νέων πλακιδίων με κόλλα, αρμολόγηση και καθαρισμός.",
        },
      ],
    },
    {
      id: "Χρωματισμοί / Επιχρίσματα_5",
      title: "Χρωματισμοί / Επιχρίσματα_5",
      options: [
        {
          id: "Τοποθέτηση νέων κουφωμάτων αλουμινίου στα ίδια ανοίγματα",
          label: "Τοποθέτηση νέων κουφωμάτων αλουμινίου στα ίδια ανοίγματα",
          description:
            "Αποξήλωση παλαιών κουφωμάτων και τοποθέτηση νέων συστημάτων αλουμινίου (παράθυρα, μπαλκονόπορτες) με διπλούς υαλοπίνακες ασφαλείας.",
        },
      ],
    },
    {
      id: "Ξυλουργικές Εργασίες – Ντουλάπια / Έπιπλα_6",
      title: "Ξυλουργικές Εργασίες – Ντουλάπια / Έπιπλα_6",

      options: [
        {
          id: "Αντικατάσταση ξύλινων επιφανειών στην κουζίνα",
          label: "Αντικατάσταση ξύλινων επιφανειών στην κουζίνα",
          description: "",
        },
        {
          id: "Τοποθέτηση νέων εσωτερικών κουφωμάτων (πόρτες MDF/laminate)",
          label: "Τοποθέτηση νέων εσωτερικών κουφωμάτων (πόρτες MDF/laminate)",
          description: "",
        },
        {
          id: "Νέες ντουλάπες υπνοδωματίων",
          label: "Νέες ντουλάπες υπνοδωματίων",
          description: "",
        },
      ],
    },
    {
      id: "Χρωματισμοί / Επιχρίσματα_7",
      title: "Χρωματισμοί / Επιχρίσματα_7",

      options: [
        {
          id: "Εσωτερικοί χρωματισμοί",
          label: "Εσωτερικοί χρωματισμοί",
          description:
            "Στοκάρισμα και τρίψιμο επιφανειών, εφαρμογή αστάρι και δύο χεριών βαφή σε τοίχους και ταβάνια με πλαστικό ή ακρυλικό χρώμα.",
        },
        {
          id: "Εξωτερικοί χρωματισμοί",
          label: "Εξωτερικοί χρωματισμοί",
          description:
            "Στοκάρισμα και τρίψιμο επιφανειών, εφαρμογή αστάρι και δύο χεριών βαφή σε τοίχους και ταβάνια με πλαστικό ή ακρυλικό χρώμα.",
        },
      ],
    },
    {
      id: "Σκίαση / Εξοπλισμός_8",
      title: "Σκίαση / Εξοπλισμός_8",
      options: [
        {
          id: "Τοποθέτηση σκιάστρων / τεντών",
          label: "Τοποθέτηση σκιάστρων / τεντών",
          description:
            "Προμήθεια και τοποθέτηση τεντών ή σκιάστρων, με βραχίονες ή κάθετα συστήματα, χειροκίνητα ή ηλεκτροκίνητα. Στερέωση σε τοίχους ή οροφή με κατάλληλα στηρίγματα, τοποθέτηση κασετίνας όπου απαιτείται, ρύθμιση μηχανισμών κίνησης και δοκιμαστική λειτουργία. Δυνατότητα ενσωμάτωσης αισθητήρων (ήλιος–άνεμος) και αυτοματισμών για βελτιστοποίηση σκίασης.",
        },
      ],
    },
  ]);

  const navigate = useRouter();
  const dispatch = useDispatch();

  const toggleOption = (categoryId: string, optionId: string) => {
    setDescription((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              options: category.options.map((option) =>
                option.id === optionId
                  ? { ...option, selected: !option.selected }
                  : option
              ),
            }
          : category
      )
    );
  };

  //   const handleSave = () => {
  //     const selectedOptions: { [categoryId: string]: string[] } = {};
  //     description.forEach((category) => {
  //       const selected = category.options
  //         .filter((option) => option.selected)
  //         .map((option) => option.id);
  //       if (selected.length > 0) {
  //         selectedOptions[category.id] = selected;
  //       }
  //     });

  const handleSave = () => {
    const selectedOptions: {
      [categoryId: string]: { id: string; description?: string }[];
    } = {};
    description.forEach((cat) => {
      const selected = cat.options
        .filter((opt) => opt.selected)
        .map((opt) => ({ id: opt.id, description: opt.description }));
      if (selected.length > 0) {
        selectedOptions[cat.id] = selected;
      }
    });

    console.log("Selected options:", selectedOptions);
    dispatch(setMultipleDescriptionTask(selectedOptions));

    navigate.push("/create-project");
  };

  return (
    <div className={`bg-[#F1F5F9] py-3 px-4 md:px-12 min-h-screen`}>
      <h2 className="text-3xl text-black font-semibold">Description Task</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {/* Left Column */}
        <div className="space-y-2">
          {description
            .slice(0, Math.ceil(description.length / 2))
            .map((category) => (
              <div key={category.id} className=" rounded-lg p-2">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3 ">
                  {category.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(category.id, option.id)}
                      className={`block px-2 py-2 text-left rounded-sm  text-sm cursor-pointer font-medium border transition-all ${
                        option.selected
                          ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        <p>
                          <GoDotFill className="text-blue-600 mr-1" />
                        </p>
                        <p>{option.label}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {description
            .slice(Math.ceil(description.length / 2))
            .map((category) => (
              <div key={category.id} className=" rounded-lg p-2">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(category.id, option.id)}
                      className={`block px-2 py-2 rounded-sm text-sm font-medium border transition-all cursor-pointer ${
                        option.selected
                          ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        <p>
                          <GoDotFill className="text-blue-600 mr-1" />
                        </p>
                        <p>{option.label}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default DescriptionTask;
