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

type RecordingSheet = {
  id: string;
  field1: string;
  field2: string;
  field3: string;
};

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
  ];

  const [selectedViolations, setSelectedViolations] = useState<
    ViolationOption[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredViolations, setFilteredViolations] =
    useState<ViolationOption[]>(violations);
  const [isInputEnabled, setIsInputEnabled] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const dispatch = useDispatch();
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const projectCodeId = stepByStepData.projectIdCode;

  const categories: CategoryValue[] = [1, 2, 3, 4, 5];

  // Initial state with one recording sheet (A1)
  const [recordingSheets, setRecordingSheets] = useState<RecordingSheet[]>([
    { id: "A1", field1: "", field2: "", field3: "" },
  ]);

  // Function to add a new recording sheet
  const addRecordingSheet = () => {
    const newSheetId = `A${recordingSheets.length + 1}`;
    setRecordingSheets([
      ...recordingSheets,
      { id: newSheetId, field1: "", field2: "", field3: "" },
    ]);
  };

  // Function to handle input change for each field
  const handleFieldChange = (id: string, field: string, value: string) => {
    setRecordingSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === id ? { ...sheet, [field]: value } : sheet
      )
    );
  };

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
      <div className=" space-y-6">
        {/* Recording Sheets Section */}
        <div className="space-y-4">
          {recordingSheets.map((sheet) => (
            <div
              key={sheet.id}
              className="flex flex-col space-y-2 bg-gray-100  rounded-md"
            >
              <h3 className="text-xl font-semibold">
                Recording Sheet {sheet.id}
              </h3>
              <div className="space-x-2 space-y-2">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-1/3"
                  placeholder="Field 1"
                  value={sheet.field1}
                  onChange={(e) =>
                    handleFieldChange(sheet.id, "field1", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-1/3"
                  placeholder="Field 2"
                  value={sheet.field2}
                  onChange={(e) =>
                    handleFieldChange(sheet.id, "field2", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-1/3"
                  placeholder="Field 3"
                  value={sheet.field3}
                  onChange={(e) =>
                    handleFieldChange(sheet.id, "field3", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add Recording Sheet Button */}
        <button
          onClick={addRecordingSheet}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          + Add Recording Sheet
        </button>
      </div>
    </div>
  );
};

export default ActionSelection;
