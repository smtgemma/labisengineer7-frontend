"use client";

import React, { useState } from "react";
import {
  Building2,
  Zap,
  Trees,
  Hammer,
  Settings,
  FileText,
  Sun,
} from "lucide-react";
import Header from "@/components/shared/Header/Header";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  setMultipleDescriptionTask,
  setMultipleSubcategory,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { GoDotFill } from "react-icons/go";

interface SubcategoryOption {
  id: string;
  label: string;
  selected?: boolean;
}

interface Category {
  id: string;
  title: string;
  options: SubcategoryOption[];
}

interface MultiSelectSubcategoryProps {
  onSave?: (selectedOptions: { [categoryId: string]: string[] }) => void;
}

const descriptionTask = () => {
  const [description, setDescription] = useState<Category[]>([
    {
      id: "Αποξηλώσεις / Καθαιρέσεις_1",
      title: "Αποξηλώσεις / Καθαιρέσεις",

      options: [
        {
          id: "Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών",
          label: "Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών",
          //   selected: true,
        },
        {
          id: "Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών κουζίνας και ντουλαπών",
          label:
            "Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών κουζίνας και ντουλαπών",
        },
        {
          id: "Αποξηλώσεις πλακιδίων σε δάπεδα/τοιχους λουτρού–WC",
          label: "Αποξηλώσεις πλακιδίων σε δάπεδα/τοιχους λουτρού–WC",
          //   selected: true,
        },
        {
          id: "Αποξηλώσεις παλαιών ειδών υγιεινής",
          label: "Αποξηλώσεις παλαιών ειδών υγιεινής",
        },
      ],
    },
    {
      id: "Οικοδομικές – Δομικές Εργασίες_2",
      title: "Οικοδομικές – Δομικές Εργασίες_2",

      options: [
        {
          id: "Αλλαγή Χρήσης Χώρου",
          label: "Αλλαγή Χρήσης Χώρου",
        },
        {
          id: "Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών",
          label:
            "Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών",
        },
        {
          id: "Γεμίσματα δαπέδων",
          label: "Γεμίσματα δαπέδων",
        },
        {
          id: "Κατασκευή από ξηρά δόμηση – Χώρισμα 1+1, Επένδυση 0+1 σε τοιχοποία και Οροφή από γυψοσανίδα",
          label:
            "Κατασκευή από ξηρά δόμηση – Χώρισμα 1+1, Επένδυση 0+1 σε τοιχοποία και Οροφή από γυψοσανίδα",
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
        },
        {
          id: "Υδραυλικές εργασίες",
          label: "Υδραυλικές εργασίες",
        },
        {
          id: "Τοποθέτηση και μετακίνηση σωμάτων καλοριφέρ",
          label: "Τοποθέτηση και μετακίνηση σωμάτων καλοριφέρ",
        },
        {
          id: "Θέρμανση / Ψύξη – Κλιματισμός",
          label: "Θέρμανση / Ψύξη – Κλιματισμός",
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
        },
        {
          id: "Τρίψιμο και γυάλισμα μαρμάρων",
          label: "Τρίψιμο και γυάλισμα μαρμάρων",
        },
        {
          id: "Τοποθέτηση πλακιδίων σε δάπεδο και τοίχους WC/Κουζίνας",
          label: "Τοποθέτηση πλακιδίων σε δάπεδο και τοίχους WC/Κουζίνας",
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
        },
      ],
    },
    {
      id: ". Ξυλουργικές Εργασίες – Ντουλάπια / Έπιπλα_6",
      title: ". Ξυλουργικές Εργασίες – Ντουλάπια / Έπιπλα_6",

      options: [
        {
          id: "Αντικατάσταση ξύλινων επιφανειών στην κουζίνα",
          label: "Αντικατάσταση ξύλινων επιφανειών στην κουζίνα",
        },
        {
          id: "Τοποθέτηση νέων εσωτερικών κουφωμάτων (πόρτες MDF/laminate)",
          label: "Τοποθέτηση νέων εσωτερικών κουφωμάτων (πόρτες MDF/laminate)",
        },
        {
          id: "Νέες ντουλάπες υπνοδωματίων",
          label: "Νέες ντουλάπες υπνοδωματίων",
        },
      ],
    },
    {
      id: " Χρωματισμοί / Επιχρίσματα_7",
      title: " Χρωματισμοί / Επιχρίσματα_7",

      options: [
        {
          id: "Εσωτερικοί χρωματισμοί",
          label: "Εσωτερικοί χρωματισμοί",
        },
        {
          id: "Εξωτερικοί χρωματισμοί",
          label: "Εξωτερικοί χρωματισμοί",
        },
      ],
    },
    {
      id: " Σκίαση / Εξοπλισμός_8",
      title: " Σκίαση / Εξοπλισμός_8",
      options: [
        {
          id: "Τοποθέτηση σκιάστρων / τεντών",
          label: "Τοποθέτηση σκιάστρων / τεντών",
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

  const handleSave = () => {
    const selectedOptions: { [categoryId: string]: string[] } = {};
    description.forEach((category) => {
      const selected = category.options
        .filter((option) => option.selected)
        .map((option) => option.id);
      if (selected.length > 0) {
        selectedOptions[category.id] = selected;
      }
    });

    console.log("Selected options:", selectedOptions);
    dispatch(setMultipleDescriptionTask(selectedOptions));

    navigate.push("/create-project");
  };

  return (
    <div className={`bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen`}>
      <Header title="Description Task" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Left Column */}
        <div className="space-y-6">
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

export default descriptionTask;
