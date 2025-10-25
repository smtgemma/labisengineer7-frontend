import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import SharedOwnerSelection from "@/components2.0/shared/ownerSelection/OwnerSelection";
import {
  setMultipleHorizontalDescription
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { useEffect, useMemo, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const
  OwnerSelection = ({
    currentStep,
    nextStep,
  }: {
    currentStep: number;
    nextStep: () => void;
  }) => {
    const [selectedProperty, setSelectedProperty] = useState<
      { id: number; description: string }[]
    >([]);
    const [ydomModalOpen, setYdomModalOpen] = useState(false);
    const [validationError, setValidationError] = useState<{
      description: string;
      owner: string;
    }>({
      description: "",
      owner: "",
    });

    const dispatch = useDispatch();
    const aidata = useSelector((state: any) => state.aiData.aiDataState);
    const mainData = useSelector((state: any) => state.aiData);
    const [ydom, setYdom] = useState<string>(aidata?.ydom || "");
    const [temp, setTemp] = useState<string>("");

    const [descriptionModal, setDescriptionModal] = useState<number | null>(null);
    const [horizontalDescription, setHorizontalDescription] = useState<
      { id: number; description: string }[]
    >([]);
    const horizontal_property_name = aidata?.horizontal_property_name || "";
    const horizontal_property_name_two =
      aidata?.horizontal_property_name_two || "";

    console.log(
      "Horizontal",
      horizontal_property_name,
      horizontal_property_name_two
    );
    // Generate descriptions from project_descriptions
    //here previously was description but now it will be horizontal property but the naming is same
    const description1 = horizontal_property_name;
    const description2 = horizontal_property_name_two;
    const ownerData = mainData.ownerBaseData;

    useEffect(() => {
      const data = [];

      if (description1) {
        data.push({ id: 1, description: description1 });
      }

      if (description2) {
        data.push({ id: 2, description: description2 });
      }

      setHorizontalDescription(data);
    }, [aidata]);


    // Handle property selection — enforce single selection only
    const togglePropertySelection = (index: number, value: string) => {
      const alreadySelected = selectedProperty.find((item) => item.id === index);

      if (alreadySelected) {
        // Deselect if already selected
        setSelectedProperty((prev) => prev.filter((item) => item.id !== index));
      } else {
        // Select this one and deselect all others
        setSelectedProperty([{ id: index, description: value }]);
      }

      // Clear validation error when a selection is made
      if (validationError.description) {
        setValidationError((prev) => ({ ...prev, description: "" }));
      }
    };


    // Handle YDOM save
    const handleYdomSave = () => {
      setYdomModalOpen(false);
    };

    const handleHorizontalDesSave = (id: number) => {
      setHorizontalDescription((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, description: temp } : item
        )
      );

      // If that property is already selected, update it in selectedProperty too
      setSelectedProperty((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, description: temp } : item
        )
      );

      setDescriptionModal(null); // close modal
      setTemp(""); // clear temp
    };

    // Update Redux store when selections change
    useEffect(() => {
      dispatch(
        setMultipleHorizontalDescription({
          horizontal: selectedProperty,
          ydom: ydom,
        })
      );
    }, [selectedProperty, ydom]);



    // Validate before proceeding
    const isValid = useMemo(() => {
      const descriptionValid = selectedProperty.length === 1;
      const ownerValid = ownerData?.length >= 1;
      return descriptionValid && ownerValid;
    }, [selectedProperty, ownerData]);

    // Add this useEffect right after your other useEffects
    useEffect(() => {
      const descriptionValid = selectedProperty.length === 1;
      const ownerValid = ownerData?.length >= 1;

      setValidationError({
        description: !descriptionValid
          ? "Please select exactly one property Horizontal description"
          : "",
        owner: !ownerValid ? "Please select at least one owner." : "",
      });
    }, [selectedProperty, ownerData]); // Only re-run when these change


    console.log(selectedProperty);



    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Select Owner(s)
            </h1>
            <p className="text-gray-600 text-lg">if not clear from document</p>
          </div>
        </div>

        {/* Property Descriptions */}
        {horizontalDescription.length > 0 && (
          <div>
            <p className="mb-4 font-medium">
              Please select a property Horizontal description:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {horizontalDescription.map((property) => (
                <div className="relative">
                  <div
                    onClick={() =>
                      togglePropertySelection(property.id, property.description)
                    }
                    key={property.id}
                    className={`p-6 rounded-lg relative cursor-pointer  transition-all duration-200 border-2 
                  ${selectedProperty.some((item) => item.id === property.id)
                        ? "border-blue-700 bg-blue-50 shadow-md"
                        : "border-blue-400 bg-white hover:border-blue-300"
                      }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Horizontal Description {property.id}
                    </h3>
                    <p className="text-gray-700">{property.description}</p>
                  </div>
                  <div
                    onClick={() => {
                      setDescriptionModal(property.id)
                      setTemp(property.description)
                    }}
                    className="absolute top-3 right-3 text-gray-500 hover:text-blue-500 cursor-pointer"
                  >
                    <FiEdit2 />
                  </div>

                  {descriptionModal === property?.id && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 min-h-screen">
                      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                          Edit YDOM {property.description}
                        </h2>
                        <textarea
                          value={temp}
                          onChange={(e) => setTemp(e.target.value)}
                          className="w-full border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                          rows={4}
                          placeholder="Enter YDOM description..."
                        />
                        <div className="flex justify-end gap-2 mt-4">
                          <button
                            onClick={() => setDescriptionModal(null)}
                            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleHorizontalDesSave(property.id)}
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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

        {/* YDOM Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2  border-primary rounded-lg p-4 bg-white shadow-sm relative">
            <div className="flex justify-end items-start mb-4">
              <button
                onClick={() => setYdomModalOpen(true)}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <FiEdit2 />
              </button>
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">YDOM:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {ydom || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* YDOM Modal */}
        {ydomModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white border  border-primary rounded-lg p-6 w-full max-w-md shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Edit YDOM</h2>
              <textarea
                value={ydom}
                onChange={(e) => setYdom(e.target.value)}
                className="w-full border-2 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                placeholder="Enter YDOM description..."
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setYdomModalOpen(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleYdomSave}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <SharedOwnerSelection aiOwner={aidata.owners || []} setValidationError={setValidationError} validationError={validationError} />

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

export default OwnerSelection;
