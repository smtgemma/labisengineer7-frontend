"use client";

import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { setMultipleSubcategory } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { RootState } from "@/redux/store";
import {
  Building2,
  Trees,
  Zap
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectOption from "./SelectOption";

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

// interface MultiSelectSubcategoryProps {
//   onSave?: (selectedOptions: { [categoryId: string]: string[] }) => void;
// }

const Category = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "building-modifications",
      title: "Building Modifications & Structural Works",
      icon: <Building2 size={20} className="text-blue-600" />,
      options: [
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6",
          label: "Εσωτερικές διαρρυθμίσεις_6",
          selected: true,
        },
        // {
        //   id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΛΛΑΦ_ΧΡΗΣΗΣ_1",
        //   label: "Εργασίες άλλης χρήσης_1",
        // },
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟΠΟΙΗΣΗΣ_ΙΟΚΘΕΙΑΣ_5",
          label: "Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων_5",
          selected: true,
        },
        // {
        //   id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΤΟΠΟΘΕΤΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_15",
        //   label: "Τοποθέτηση ικριωμάτων_15",
        // },
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΝΕΑ_ΑΝΟΙΞΜΑΤΑ_ΕΠΙ_ΤΩΝ_ΟΙΚΕΩΝ_10",
          label: "Επεμβάσεις στις όψεις και στα ανοίγματα_10",
        },
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗ_ΚΑΙ_ΕΠΙΣΚΕΥΗ_ΣΤΕΓΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑ_14",
          label: "Συντήρηση, επισκευή στεγών με χρήση ικριωμάτων_14",
        },
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΝΑΚΑΤΑΣΚΕΥΗ_ΥΠΕΡΗΧΩΝ_2",
          label: "Ανακατασκευή στέγης_2",
        },
      ],
    },
    {
      id: "energy-systems",
      title: "Energy Systems & Thermal Insulation",
      icon: <Zap size={20} className="text-orange-500" />,
      options: [
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΡΜΟΠΡΟΖΩΗΣ_7",
          label: "Εξωτερική θερμομόνωση & τοποθέτηση ηλιακών συστημάτων_7",
        },
        // {
        //   id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΥΤΟΝΟΜΟ_ΣΥΣΤΗΜΑ_ΕΡΓΑΣΙΑΣ_3",
        //   label: "Αυτόνομο Σύστημα Θέρμανσης_3",
        // },
      ],
    },
    // {
    //   id: "small-construction",
    //   title: "Small Construction & Installations",
    //   icon: <Hammer size={20} className="text-blue-500" />,
    //   options: [
    //     {
    //       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΙΣΙΝΑ_COMPACT_ΕΩΣ_50_Τ_Μ__13",
    //       label:
    //         "Κατασκευή ασκεπούς δεξαμενής ή πισίνας COMPACT μέχρι 50 τ.μ._13",
    //     },
    //   ],
    // },
    {
      id: "landscaping-2",
      title: "Landscaping, Tree Works & Outdoor Installations",
      icon: <Trees size={20} className="text-green-600" />,
      options: [
        {
          id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΚΟΙΝΗ_ΔΡΑΣΗ_ΕΝΤΟΣ_ΟΙΚΟΠΕΔΟΥ_8",
          label: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)_8",
        },
      ],
    },
    // {
    //   id: "operational-space",
    //   title: "Operational Space Management",
    //   icon: <Settings size={20} className="text-purple-600" />,
    //   options: [
    //     {
    //       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΕΙΤΟΥΡΓΙΚΗ_ΣΥΝΕΧΗΣ_ΧΡΟΝΟΣ_9",
    //       label: "Λειτουργική συνένωση χώρων_9",
    //     },
    //   ],
    // },
    // {
    //   id: "fencing",
    //   title: "Fencing & Boundaries",
    //   icon: <Building2 size={20} className="text-teal-600" />,
    //   options: [
    //     {
    //       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΕΡΙΦΡΑΞΗ_ΕΚΤΟΣ_ΞΕΛΟΥ_11",
    //       label: "Περίφραξη ή περίφραξη σε εκτός σχεδίου γήπεδα & οικισμούς_11",
    //     },
    //     {
    //       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΕΡΙΦΡΑΞΗ_ΕΝΤΟΣ_ΞΕΛΟΥ_12",
    //       label:
    //         "Περίφραξη με πρόχειρη κατασκευή σε μη ρυμοτομ. εντός σχεδίου_12",
    //     },
    //   ],
    // },
    // {
    //   id: "property-documentation",
    //   title: "Property Documentation & Division",
    //   icon: <FileText size={20} className="text-indigo-600" />,
    //   options: [
    //     {
    //       id: "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟ_4",
    //       label: "Λειτουργική συνένωση χώρων_4",
    //     },
    //   ],
    // },
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
    navigate.push("/description-task");
  };
  const aiExtractData = useSelector((state: RootState) => state.aiData);
  console.log("Redux Data", aiExtractData, "....................")
  console.log(categories, "==========================category")

  return (
    <div className={`bg-[#F1F5F9] py-8 min-h-screen`}>
      <h2 className="text-2xl text-black font-semibold">
        Select Multiple Subcategory
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Left Column */}
        <div className="space-y-6">
          {categories
            .slice(0, Math.ceil(categories.length / 2))
            .map((category) => (
              <div
                key={category.id}
                className=" rounded-lg p-6 "
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.options.map((option) => (
                    <div key={option.id}>
                      <SelectOption
                        option={option}
                        categoryId={option.id}
                        toggleOption={() => toggleOption(category.id, option.id)}
                      />
                    </div>
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
                className=" rounded-lg p-6 "
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.options.map((option) => (
                    <SelectOption
                      key={option.id}
                      option={option}
                      categoryId={option.id}
                      toggleOption={() => toggleOption(category.id, option.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8 w-fit ml-auto">
        <PrimaryButton
          label="Save & Continue"
          onClick={handleSave}
        >
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Category;
