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
import { setMultipleSubcategory } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

interface SubcategoryOption {
  id: string;
  label: string;
  selected?: boolean;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  options: SubcategoryOption[];
}

interface MultiSelectSubcategoryProps {
  onSave?: (selectedOptions: { [categoryId: string]: string[] }) => void;
}

const MultiSelectSubcategory = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "building-modifications",
      title: "Building Modifications & Structural Works",
      icon: <Building2 size={20} className="text-blue-600" />,
      options: [
        {
          id: "Εσωτερικές διαρρυθμίσεις",
          label: "Εσωτερικές διαρρυθμίσεις",
          selected: true,
        },
        { id: "other-works", label: "Εργασίες άλλης χρήσης" },
        {
          id: "Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων",
          label: "Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων",
          selected: true,
        },
        { id: "Τοποθέτηση ικριωμάτων", label: "Τοποθέτηση ικριωμάτων" },
        {
          id: "Επεμβάσεις στις όψεις και στα ανοίγματα",
          label: "Επεμβάσεις στις όψεις και στα ανοίγματα",
        },
        {
          id: "Συντήρηση, επισκευή στεγών με χρήση ικριωμάτων",
          label: "Συντήρηση, επισκευή στεγών με χρήση ικριωμάτων",
        },
        { id: "Ανακατασκευή στέγης", label: "Ανακατασκευή στέγης" },
      ],
    },
    {
      id: "energy-systems",
      title: "Energy Systems & Thermal Insulation",
      icon: <Zap size={20} className="text-orange-500" />,
      options: [
        {
          id: "Εξωτερική θερμομόνωση & τοποθέτηση ηλιακών συστημάτων",
          label: "Εξωτερική θερμομόνωση & τοποθέτηση ηλιακών συστημάτων",
        },
        {
          id: "Αυτόνομο Σύστημα Θέρμανσης",
          label: "Αυτόνομο Σύστημα Θέρμανσης",
        },
      ],
    },
    {
      id: "small-construction",
      title: "Small Construction & Installations",
      icon: <Hammer size={20} className="text-blue-500" />,
      options: [
        {
          id: "Κατασκευή ασκεπούς δεξαμενής ή πισίνας COMPACT μέχρι 50 τ.μ.",
          label: "Κατασκευή ασκεπούς δεξαμενής ή πισίνας COMPACT μέχρι 50 τ.μ.",
        },
      ],
    },
    {
      id: "landscaping-1",
      title: "Landscaping, Tree Works & Outdoor Installations",
      icon: <Trees size={20} className="text-green-600" />,
      options: [
        {
          id: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
          label: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
          selected: true,
        },
        {
          id: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)",
          label: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)",
        },
      ],
    },
    {
      id: "landscaping-2",
      title: "Landscaping, Tree Works & Outdoor Installations",
      icon: <Trees size={20} className="text-green-600" />,
      options: [
        {
          id: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
          label: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
        },
        {
          id: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)",
          label: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)",
        },
      ],
    },
    {
      id: "operational-space",
      title: "Operational Space Management",
      icon: <Settings size={20} className="text-purple-600" />,
      options: [
        {
          id: "Λειτουργική συνένωση χώρων",
          label: "Λειτουργική συνένωση χώρων",
        },
      ],
    },
    {
      id: "fencing",
      title: "Fencing & Boundaries",
      icon: <Building2 size={20} className="text-teal-600" />,
      options: [
        {
          id: "Περίφραξη ή περίφραξη σε εκτός σχεδίου γήπεδα & οικισμούς",
          label: "Περίφραξη ή περίφραξη σε εκτός σχεδίου γήπεδα & οικισμούς",
        },
        {
          id: "Περίφραξη με πρόχειρη κατασκευή σε μη ρυμοτομ. εντός σχεδίου",
          label: "Περίφραξη με πρόχειρη κατασκευή σε μη ρυμοτομ. εντός σχεδίου",
        },
      ],
    },
    {
      id: "property-documentation",
      title: "Property Documentation & Division",
      icon: <FileText size={20} className="text-indigo-600" />,
      options: [
        { id: "functional-space-2", label: "Λειτουργική συνένωση χώρων" },
      ],
    },
    {
      id: "photovoltaic",
      title: "Photovoltaic (PV) Installations",
      icon: <Sun size={20} className="text-yellow-500" />,
      options: [
        {
          id: "Εγκατάσταση Φ/Β συστημάτων (α. γήπεδα & κτίρια εκτός σχεδίου)",
          label:
            "Εγκατάσταση Φ/Β συστημάτων (α. γήπεδα & κτίρια εκτός σχεδίου)",
        },
        {
          id: "Εγκατάσταση Φ/Β συστημάτων (β. κτίρια εντός σχεδίου)",
          label: "Εγκατάσταση Φ/Β συστημάτων (β. κτίρια εντός σχεδίου)",
        },
      ],
    },
  ]);

  const navigate = useRouter();
  const dispatch = useDispatch();

  const toggleOption = (categoryId: string, optionId: string) => {
    setCategories((prevCategories) =>
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
    categories.forEach((category) => {
      const selected = category.options
        .filter((option) => option.selected)
        .map((option) => option.id);

      if (selected.length > 0) {
        selectedOptions[category.id] = selected;
      }
    });

    console.log("Selected options:", selectedOptions);
    dispatch(setMultipleSubcategory(selectedOptions));

    navigate.push("/create-project");
  };

  return (
    <div className={`bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen`}>
      <Header title="Select Multiple Subcategory" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Left Column */}
        <div className="space-y-6">
          {categories
            .slice(0, Math.ceil(categories.length / 2))
            .map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(category.id, option.id)}
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        option.selected
                          ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {categories
            .slice(Math.ceil(categories.length / 2))
            .map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(category.id, option.id)}
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        option.selected
                          ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      {option.label}
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

export default MultiSelectSubcategory;

// "use client";

// import React, { useState } from "react";
// import {
//   Building2,
//   Zap,
//   Trees,
//   Hammer,
//   Settings,
//   FileText,
//   Sun,
// } from "lucide-react";
// import Header from "@/components/shared/Header/Header";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setMultipleSubcategory } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

// interface SubcategoryOption {
//   id: string;
//   label: string;
//   selected?: boolean;
// }

// interface Category {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   options: SubcategoryOption[];
// }

// interface MultiSelectSubcategoryProps {
//   onSave?: (selectedOptions: { [categoryId: string]: string[] }) => void;
// }

// const MultiSelectSubcategory = () => {
//   const [categories, setCategories] = useState<Category[]>([
//     {
//       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΑΜΑΞΙ_ΧΡΗΣΗ",
//       title: "ΑΔΕΙΑ ΜΙΚΡΗΣ ΚΛΙΜΑΚΑΣ ΑΜΑΞΙ ΧΡΗΣΗ",
//       icon: <Sun size={20} className="text-yellow-500" />,
//       options: [
//         {
//           id: "ΥΠΟΔΕΙΓΜΑ-ΣΥΝΑΙΝΕΣΗΣ-ΣΥΝΙΔΙΟΚΤΗΤΩΝ",
//           label:
//             "ΕγκατάσΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ",
//         },
//         {
//           id: "ΥΔ_ΣΥΝΑΙΝΕΣΗΣ_ΣΥΝΙΔΙΟΚΤΗΤΗ",
//           label: "ΥΔ_ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΗ",
//         },
//         {
//           id: "ΥΔ_ΜΗΧΑΝΙΚΟΥ_ΣΤΑΤΙΚΟΣ_ΦΟΡΕΑΣ_ΚΤΙΡΙΟΥ",
//           label: "ΥΔ ΜΗΧΑΝΙΚΟΥ_ΣΤΑΤΙΚΟΣ ΦΟΡΕΑΣ ΚΤΙΡΙΟΥ",
//         },
//         {
//           id: "ΥΔ_ΜΗ_ΥΠΑΡΞΗΣ_ΑΕΚΚ_ΣΔΑ",
//           label: "ΥΔ ΜΗ ΥΠΑΡΞΗΣ ΑΕΚΚ_ΣΔΑ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΛΗΨΗΣ_ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//           label: "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΛΗΨΗΣ_ΕΠΙΒΛΕΨΗΣ_ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//           label: "ΥΔ ΑΝΑΛΗΨΗΣ ΕΠΙΒΛΕΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΘΕΣΗΣ_ΙΔΙΟΚΤΗΤΗ",
//           label: "ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΘΕΣΗΣ_ΕΠΙΒΛΕΨΗΣ_ΙΔΙΟΚΤΗΤΗ",
//           label: "ΥΔ ΑΝΑΘΕΣΗΣ ΕΠΙΒΛΕΨΗΣ ΙΔΙΟΚΤΗΤΗ",
//         },
//         {
//           id: "ΤΕΧΝΙΚΗ_ΕΚΘΕΣΗ_ΕΡΓΑΣΙΩΝ",
//           label: "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ",
//         },
//         {
//           id: "ΤΕΧΝΙΚΗ_ΕΚΘΕΣΗ_ΕΡΓΑΣΙΩΝ",
//           label: "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ",
//         },
//         {
//           id: "ΣΔΑ_ΕΡΓΟΥ",
//           label: "ΣΔΑ ΕΡΓΟΥ",
//         },
//         {
//           id: "ΣΑΥ_ΦΑΥ",
//           label: "ΣΑΥ_ΦΑΥ",
//         },
//         {
//           id: "ΑΝΑΛΥΤΙΚΟΣ_ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ",
//           label: "ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ",
//         },
//       ],
//     },

//     {
//       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗΣ_ΚΑΙ_ΕΠΙΣΚΕΥΗΣ_ΕΤΕΡΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_Αυτοψία",
//       title: "ΑΔΕΙΑ ΜΙΚΡΗΣ ΚΑΙΜΑΚΑΣ ΣΥΝΤΗΡΗΣΗΣ ΚΑΙ ΕΠΙΣΚΕΥΗΣ ΕΤΕΡΩΝ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ - Αυτοψία",
//       icon: <Building2 size={20} className="text-blue-600" />,
//       options: [
//         {
//           id: "ΥΠΟΔΕΙΓΜΑ_ΣΥΝΑΙΝΕΣΗΣ_ΣΥΝΙΔΙΟΚΤΗΤΩΝ",
//           label: "ΥΠΟΔΕΙΓΜΑ ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΩΝ",
//           selected: true,
//         },
//         {
//           id: "ΥΔ_ΣΥΝΑΙΝΕΣΗΣ_ΣΥΝΙΔΙΟΚΤΗΤΗ",
//           label: "ΥΔ_ΣΥΝΑΙΝΕΣΗΣ ΣΥΝΙΔΙΟΚΤΗΤΗ"
//         },
//         {
//           id: "ΥΔ ΜΗΧΑΝΙΚΟΥ_ΣΤΑΤΙΚΟΣ ΦΟΡΕΑΣ ΚΤΙΡΙΟΥ",
//           label: "ΥΔ ΜΗΧΑΝΙΚΟΥ_ΣΤΑΤΙΚΟΣ ΦΟΡΕΑΣ ΚΤΙΡΙΟΥ",
//           selected: true,
//         },
//         { id: "ΥΔ_ΜΗ_ΥΠΑΡΞΗΣ_ΑΕΚΚ_ΣΔΑ", label: "ΥΔ ΜΗ ΥΠΑΡΞΗΣ ΑΕΚΚ_ΣΔΑ" },
//         {
//           id: "ΥΔ_ΑΝΑΛΗΨΗΣ_ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//           label: "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΛΗΨΗΣ_ΕΠΙΒΛΕΨΗΣ_ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//           label: "ΥΔ ΑΝΑΛΗΨΗΣ ΕΠΙΒΛΕΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
//         },
//         {
//           id: "ΥΔ_ΑΝΑΘΕΣΗΣ_ΕΠΙΒΛΕΨΗΣ_ΙΔΙΟΚΤΗΤΗ",
//           label: "ΥΔ ΑΝΑΘΕΣΗΣ ΕΠΙΒΛΕΨΗΣ ΙΔΙΟΚΤΗΤΗ"
//         },
//         {
//           id: "ΤΕΧΝΙΚΗ_ΕΚΘΕΣΗ_ΕΡΓΑΣΙΩΝ",
//           label: "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ"
//         },
//         {
//           id: "ΤΕΧΝΙΚΗ_ΕΚΘΕΣΗ_ΕΡΓΑΣΙΩΝ",
//           label: "ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ"
//         },
//         {
//           id: "ΣΔΑ_ΕΡΓΟΥ",
//           label: "ΣΔΑ ΕΡΓΟΥ"
//         },
//         {
//           id: "ΣΑΥ_ΦΑΥ",
//           label: "ΣΑΥ_ΦΑΥ"
//         },
//         {
//           id: "ΑΝΑΛΥΤΙΚΟΣ_ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ_4495_2017",
//           label: "ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ_4495_2017"
//         },
//       ],
//     },
//   ]);

//   const navigate = useRouter();
//   const dispatch = useDispatch();

//   const toggleOption = (categoryId: string, optionId: string) => {
//     setCategories((prevCategories) =>
//       prevCategories.map((category) =>
//         category.id === categoryId
//           ? {
//             ...category,
//             options: category.options.map((option) =>
//               option.id === optionId
//                 ? { ...option, selected: !option.selected }
//                 : option
//             ),
//           }
//           : category
//       )
//     );
//   };

//   const handleSave = () => {
//     const selectedOptions: { [categoryId: string]: string[] } = {};
//     categories.forEach((category) => {
//       const selected = category.options
//         .filter((option) => option.selected)
//         .map((option) => option.id);

//       if (selected.length > 0) {
//         selectedOptions[category.id] = selected;
//       }
//     });

//     console.log("Selected options:", selectedOptions);
//     dispatch(setMultipleSubcategory(selectedOptions));

//     navigate.push("/create-project");
//   };

//   return (
//     <div className={`bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen`}>
//       <Header title="Select Multiple Subcategory" />

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
//         {/* Left Column */}
//         <div className="space-y-6">
//           {categories
//             .slice(0, Math.ceil(categories.length / 2))
//             .map((category) => (
//               <div
//                 key={category.id}
//                 className="bg-white rounded-lg p-6 shadow-sm"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   {category.icon}
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {category.title}
//                   </h2>
//                 </div>

//                 <div className="space-y-3">
//                   {category.options.map((option) => (
//                     <button
//                       key={option.id}
//                       onClick={() => toggleOption(category.id, option.id)}
//                       className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all ${option.selected
//                         ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
//                         : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
//                         }`}
//                     >
//                       {option.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {categories
//             .slice(Math.ceil(categories.length / 2))
//             .map((category) => (
//               <div
//                 key={category.id}
//                 className="bg-white rounded-lg p-6 shadow-sm"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   {category.icon}
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     {category.title}
//                   </h2>
//                 </div>

//                 <div className="space-y-3">
//                   {category.options.map((option) => (
//                     <button
//                       key={option.id}
//                       onClick={() => toggleOption(category.id, option.id)}
//                       className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-all ${option.selected
//                         ? "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200"
//                         : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
//                         }`}
//                     >
//                       {option.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* Save Button */}
//       <div className="flex justify-end mt-8">
//         <button
//           onClick={handleSave}
//           className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
//         >
//           Save & Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MultiSelectSubcategory;
