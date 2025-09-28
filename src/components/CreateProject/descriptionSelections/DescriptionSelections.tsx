import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { setMultipleDescription } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedProperty } from "../OwnerSelection/types";

const DescriptionSelection = ({
  currentStep,
  nextStep,
}: {
  currentStep: number;
  nextStep: () => void;
}) => {
  const [selectedProperty, setSelectedProperty] = useState<SelectedProperty[]>(
    []
  );
  const [validationError, setValidationError] = useState<{
    description: string;
  }>({
    description: "",
  });

  const dispatch = useDispatch();
  const ownerData = useSelector((state: any) => state.aiData.aiDataState);

  // Generate descriptions from project_descriptions
  const description1 = ownerData?.project_descriptions
    ?.filter((_: any, i: number) => i % 2 === 0)
    .join(" & ");
  const description2 = ownerData?.project_descriptions
    ?.filter((_: any, i: number) => i % 2 === 1)
    .join(" & ");

  const descriptionShow = [description1, description2].filter((desc) => desc);

  // Handle property selection — enforce single selection only
  const togglePropertySelection = (index: number, value: string) => {
    const alreadySelected = selectedProperty.find(
      (item) => item.index === index
    );

    if (alreadySelected) {
      // Deselect if already selected
      setSelectedProperty((prev) =>
        prev.filter((item) => item.index !== index)
      );
    } else {
      // Select this one and deselect all others
      setSelectedProperty([{ index, value }]);
    }

    // Clear validation error when a selection is made
    if (validationError.description) {
      setValidationError((prev) => ({ ...prev, description: "" }));
    }
  };

  // Update Redux store when selections change
  useEffect(() => {
    dispatch(setMultipleDescription({ description: selectedProperty }));
  }, [selectedProperty]);

  // Validate before proceeding
  const isValid = useMemo(() => {
    const descriptionValid = selectedProperty.length === 1;
    return descriptionValid;
  }, [selectedProperty]);

  // Add this useEffect right after your other useEffects
  useEffect(() => {
    const descriptionValid = selectedProperty.length === 1;

    setValidationError({
      description: !descriptionValid
        ? "Please select exactly one property description."
        : "",
    });
  }, [selectedProperty]); // Only re-run when these change
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Select Projects Description(s)
          </h1>
          <p className="text-gray-600 text-lg">if not clear from document</p>
        </div>
      </div>

      {/* Property Descriptions */}
      {descriptionShow.length > 0 && (
        <div>
          <p className="mb-4 font-medium">
            Please select a property description:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {descriptionShow.map((property: string, index: number) => (
              <div
                onClick={() => togglePropertySelection(index, property)}
                key={index}
                className={`p-6 rounded-lg relative cursor-pointer transition-all duration-200 border-2 
                  ${
                    selectedProperty.some((item) => item.index === index)
                      ? "border-blue-700 bg-blue-50 shadow-md"
                      : "border-blue-400 bg-white hover:border-blue-300"
                  }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description {index + 1}
                </h3>
                <p className="text-gray-700">{property}</p>
              </div>
            ))}
          </div>

          {/* Validation Error for Property */}
          {validationError.description && (
            <p className="text-red-500 text-sm mt-2">
              {validationError.description}
            </p>
          )}
        </div>
      )}
      {/* Next Button */}
      {currentStep < 6 && (
        <div className="flex justify-end w-fit ml-auto">
          <PrimaryButton
            onClick={() => {
              if (isValid) {
                nextStep();
              }
            }}
            label="Save and Continue"
            disabled={!isValid}
          />
        </div>
      )}
    </div>
  );
};

export default DescriptionSelection;
