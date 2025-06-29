import React, { useState } from "react";

interface ActionSelectionProps {
  selectedActions: string[];
  onActionsChange: (actions: string[]) => void;
}

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
    "Export CSV File",
    "Auto-Fill Government Form",
  ];

  const toggleAction = (action: string) => {
    if (selectedActions.includes(action)) {
      onActionsChange(selectedActions.filter((a) => a !== action));
    } else {
      onActionsChange([...selectedActions, action]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Select Actions
        </h1>
        <p className="text-gray-600 text-lg">
          Here is the extracted information. Please review and confirm.
        </p>
      </div>

      {/* Actions List */}
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={action}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedActions.includes(action)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
            onClick={() => toggleAction(action)}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-medium ${
                  selectedActions.includes(action)
                    ? "text-blue-900"
                    : "text-gray-900"
                }`}
              >
                {action}
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedActions.includes(action)
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedActions.includes(action) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      {/* <div className="flex justify-end pt-6">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ActionSelection;
