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
          id: "interior-renovations",
          label: "Εσωτερικές διαρρυθμίσεις",
          selected: true,
        },
        { id: "other-works", label: "Εργασίες άλλης χρήσης" },
        {
          id: "color-works",
          label: "Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων",
          selected: true,
        },
        { id: "scaffolding-placement", label: "Τοποθέτηση ικριωμάτων" },
        {
          id: "openings-repairs",
          label: "Επεμβάσεις στις όψεις και στα ανοίγματα",
        },
        {
          id: "roof-maintenance",
          label: "Συντήρηση, επισκευή στεγών με χρήση ικριωμάτων",
        },
        { id: "roof-reconstruction", label: "Ανακατασκευή στέγης" },
      ],
    },
    {
      id: "energy-systems",
      title: "Energy Systems & Thermal Insulation",
      icon: <Zap size={20} className="text-orange-500" />,
      options: [
        {
          id: "thermal-insulation",
          label: "Εξωτερική θερμομόνωση & τοποθέτηση ηλιακών συστημάτων",
        },
        { id: "autonomous-heating", label: "Αυτόνομο Σύστημα Θέρμανσης" },
      ],
    },
    {
      id: "small-construction",
      title: "Small Construction & Installations",
      icon: <Hammer size={20} className="text-blue-500" />,
      options: [
        {
          id: "compact-tank",
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
          id: "tree-cutting-city",
          label: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
          selected: true,
        },
        {
          id: "tree-cutting-private",
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
          id: "tree-cutting-city-2",
          label: "Κοπή δέντρων (α. Σε κοινόχρηστο χώρο πόλης ή οικισμού)",
        },
        {
          id: "tree-cutting-private-2",
          label: "Κοπή δέντρων (β. Σε ακάλυπτο ή γήπεδο)",
        },
      ],
    },
    {
      id: "operational-space",
      title: "Operational Space Management",
      icon: <Settings size={20} className="text-purple-600" />,
      options: [
        { id: "functional-space", label: "Λειτουργική συνένωση χώρων" },
      ],
    },
    {
      id: "fencing",
      title: "Fencing & Boundaries",
      icon: <Building2 size={20} className="text-teal-600" />,
      options: [
        {
          id: "fencing-natural",
          label: "Περίφραξη ή περίφραξη σε εκτός σχεδίου γήπεδα & οικισμούς",
        },
        {
          id: "fencing-existing",
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
          id: "pv-installation-a",
          label:
            "Εγκατάσταση Φ/Β συστημάτων (α. γήπεδα & κτίρια εκτός σχεδίου)",
        },
        {
          id: "pv-installation-b",
          label: "Εγκατάσταση Φ/Β συστημάτων (β. κτίρια εντός σχεδίου)",
        },
      ],
    },
  ]);

  const navigate = useRouter();

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
