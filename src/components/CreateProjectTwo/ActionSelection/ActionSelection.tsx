import React, { useState } from "react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { UserData } from "@/redux/features/auth/userDataCatchSlice";
import { setActionSelectName } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import Select, { OnChangeValue } from "react-select";
import { FaCheckCircle } from "react-icons/fa";

interface ActionSelectionProps {
  selectedActions: string[];
  onActionsChange: (actions: string[]) => void;
}

export type CategoryValue = 1 | 2 | 3 | 4 | 5;

interface ViolationOption {
  value: string;
  label: string;
}
const violations: ViolationOption[] = [
  { value: "Μεταβολές & νέα ανοίγματα", label: "Μεταβολές & νέα ανοίγματα" },
  {
    value: "Μεταβολή περιγράμματος εξώστρων",
    label: "Μεταβολή περιγράμματος εξώστρων",
  },
  { value: "Αλλαγές ", label: "Αλλαγές στην πρόσοψη" },
  { value: "Νέες κατασκευές", label: "Νέες κατασκευές" },
  { value: "New openings", label: "New openings" },
  { value: "Change of facades", label: "Change of facades" },
];

type DropdownOption = {
  label: string;
  value: string;
};

const options: DropdownOption[] = [
  { label: "Προ της 9/6/1975", value: "before_9_6_1975" },
  { label: "Μέχρι 31/12/1982", value: "until_31_12_1982" },
  {
    label: "Από 1/1/1933 μέχρι 31/12/992",
    value: "from_1_1_1933_to_31_12_992",
  },
  {
    label: "Από 1/1/1904 μέχρι 28/7/2011",
    value: "from_1_1_1904_to_28_7_2011",
  },
];

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
  ];
  const [selectedActionsValue, setSelectedActionsValue] = useState<string[]>(
    []
  );
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedViolations, setSelectedViolations] = useState<
    ViolationOption[]
  >([]);
  const [searchText, setSearchText] = useState<string>(""); // Search input for filtering violations
  const [filteredViolations, setFilteredViolations] =
    useState<ViolationOption[]>(violations); // Filtered violations based on search text
  const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false); //

  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const dispatch = useDispatch();
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const projectCodeId = stepByStepData.projectIdCode;

  const categories: CategoryValue[] = [1, 2, 3, 4, 5];

  // Handle input change for search text
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);

    // Filter violations based on search query
    const filtered = violations.filter((violation) =>
      violation.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredViolations(filtered);
  };

  // Handle selecting a violation
  const handleSelectViolation = (violation: ViolationOption) => {
    // Add the selected violation to the list of selected violations if it's not already added
    if (!selectedViolations.some((v) => v.value === violation.value)) {
      setSelectedViolations((prev) => [...prev, violation]);
    }
    setSearchText(""); // Clear search text after selection
    setFilteredViolations(violations); // Reset filtered violations after selection
  };

  // Handle removing a violation
  const handleRemoveViolation = (violation: ViolationOption) => {
    setSelectedViolations((prev) =>
      prev.filter((v) => v.value !== violation.value)
    );
  };

  // Handle enabling/disabling input field based on checkbox
  const handleCheckboxChange = () => {
    setIsInputEnabled(!isInputEnabled);
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Recording Sheet (Φύλλο Καταγραφής)
        </h1>
        <p className="text-gray-600 text-lg">
          Here is the extracted information. Please review and confirm.
        </p>
      </div>
      {/* Category of Inclusion */}
      <div className="w-full max-w-xl">
        <label className="block text-lg font-medium text-gray-700 mb-3">
          Category of Inclusion
        </label>
        <select className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select a category…</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {/* =========================================  */}
      <div className="max-w-xl ">
        {/* Checkbox to toggle input field */}
        <div className="mb-4 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isInputEnabled}
            onChange={handleCheckboxChange}
            className="h-5 w-5"
          />
          <label className="text-lg font-semibold">
            Ενεργοποιήστε το πεδίο περιγραφής
          </label>
        </div>

        {/* Input field (enabled/disabled based on checkbox) */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">
            Περιγραφή Παράβασης
          </label>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            className={`mt-2 w-full p-2 border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md ${
              isInputEnabled
                ? "bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "bg-gray-200 cursor-not-allowed"
            }`}
            placeholder="Αναζητήστε Παραβάσεις"
            disabled={!isInputEnabled}
          />
          {/* Suggestions for violations */}
          {isInputEnabled && searchText && (
            <div className="mt-2 max-h-48 overflow-auto border border-gray-300 rounded-md">
              {filteredViolations.length > 0 ? (
                filteredViolations.map((violation) => (
                  <div
                    key={violation.value}
                    onClick={() => handleSelectViolation(violation)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {violation.label}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No matches found</div>
              )}
            </div>
          )}
        </div>

        {/* Selected Violations */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">
            Επιλεγμένες Παραβάσεις
          </label>
          <div className="mt-2  space-y-2 ">
            {selectedViolations.map((violation) => (
              <div
                key={violation.value}
                className="bg-blue-200 text-blue-800 px-4 py-1 rounded-md flex justify-between items-center space-x-2"
              >
                <div className="flex items-center rounded-full pr-4 py-2">
                  <span className="text-xl">
                    <FaCheckCircle className="text-xl" />
                  </span>
                  <span className="ml-2 text-sm font-semibold">
                    {violation.label}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveViolation(violation)}
                  className="text-red-600 hover:text-red-800"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =========================================  */}
      <div className="max-w-xl">
        <label
          htmlFor="dropdown"
          className="block text-lg font-semibold text-gray-700"
        >
          Παλαιότητα
        </label>
        <select
          id="dropdown"
          value={selectedValue}
          onChange={handleChange}
          className="mt-2 p-2 w-full border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* Actions List */}
    </div>
  );
};

export default ActionSelection;
