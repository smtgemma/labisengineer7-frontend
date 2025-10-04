import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import {
    setMultipleDescription
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Edit3 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedProperty } from "./ownerTypes";
import { IoClose } from "react-icons/io5";
import { RootState } from "@/redux/store";

const DescriptionSelectionFour = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const [selectedProperty, setSelectedProperty] = useState<SelectedProperty[]>([]);
    const [validationError, setValidationError] = useState<{ description: string }>({
        description: "",
    });
    const [editingDescription, setEditingDescription] = useState<{ index: number, value: string } | null>(null);
    const [isEditDescriptionModalOpen, setIsEditDescriptionModalOpen] = useState(false);
    const [descriptionText, setDescriptionText] = useState("");
    const [descriptions, setDescriptions] = useState<string[]>([]);
    const horizontal: any = useSelector((state: RootState) => state.aiData.horizontal);

    console.log("horizontal", horizontal.horizontal, "................................")
    const dispatch = useDispatch();
    const aiData = useSelector((state: any) => state.aiData.aiDataState);

    console.log(aiData)

    // Initialize descriptions
    useEffect(() => {
        const descriptions =
            horizontal?.horizontal?.map((item: { id: number; description: string }) => `Εργασίες βάσει του άρθρου 30 του ν.4495 / 2017 στην ${item.description}`) || [];

        setDescriptions(descriptions.filter((desc: any) => desc));
    }, [aiData]);


    console.log("new descriptions", descriptions, "....")
    // Edit description
    const onEditDescriptionSubmit = () => {
        if (editingDescription !== null) {
            const updatedDescriptions = [...descriptions];
            updatedDescriptions[editingDescription.index] = descriptionText;
            setDescriptions(updatedDescriptions);

            // Update selected property if it was the one being edited
            const updatedSelectedProperty = selectedProperty.map(item =>
                item.index === editingDescription.index
                    ? { ...item, value: descriptionText }
                    : item
            );
            setSelectedProperty(updatedSelectedProperty);

            setDescriptionText("");
            setEditingDescription(null);
            setIsEditDescriptionModalOpen(false);
        }
    };

    // Handle property selection — enforce single selection only
    const togglePropertySelection = (index: number, value: string) => {
        const alreadySelected = selectedProperty.find(item => item.index === index);

        if (alreadySelected) {
            // Deselect if already selected
            setSelectedProperty(prev => prev.filter(item => item.index !== index));
        } else {
            // Select this one and deselect all others
            setSelectedProperty([{ index, value }]);
        }

        // Clear validation error when a selection is made
        if (validationError.description) {
            setValidationError(prev => ({ ...prev, description: "" }));
        }
    };

    // Open edit modal for description
    const openEditDescriptionModal = (e: React.MouseEvent, description: string, index: number) => {
        e.stopPropagation(); // Prevent triggering selection
        setEditingDescription({ index, value: description });
        setDescriptionText(description);
        setIsEditDescriptionModalOpen(true);
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
            description: !descriptionValid ? "Please select exactly one property description." : "",
        });
    }, [selectedProperty]); // Only re-run when these change

    console.log(descriptions)

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
            {descriptions.length > 0 && (
                <div>
                    <p className="mb-4 font-medium">Please select a property description:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {descriptions.map((property: any, index: number) => (
                            <div
                                onClick={() => togglePropertySelection(index, property)}
                                key={index}
                                className={`p-6 rounded-lg relative cursor-pointer transition-all duration-200 border-2 
                  ${selectedProperty.some(item => item.index === index)
                                        ? "border-blue-600 bg-blue-50 shadow-md"
                                        : "border-gray-200 bg-white hover:border-blue-300"
                                    }`}
                            >
                                <div className="flex gap-2 absolute top-4 right-4 text-gray-400">
                                    <button
                                        onClick={(e) => openEditDescriptionModal(e, property, index)}
                                        className="hover:text-gray-600 cursor-pointer"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Description {index + 1}
                                </h3>
                                <p className="text-gray-700">{property}</p>
                            </div>
                        ))}
                    </div>

                    {/* Validation Error for Property */}
                    {validationError.description && (
                        <p className="text-red-500 text-sm mt-2">{validationError.description}</p>
                    )}
                </div>
            )}

            {/* Edit Description Modal */}
            {isEditDescriptionModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-2xl mx-4">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold text-gray-900">Edit Description</h3>
                            <button
                                onClick={() => setIsEditDescriptionModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <IoClose className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Description:
                                </label>
                                <textarea
                                    value={descriptionText}
                                    onChange={(e) => setDescriptionText(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                                    placeholder="Enter property description"
                                />
                            </div>

                            <div className="flex justify-end mt-8">
                                <button
                                    onClick={onEditDescriptionSubmit}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Next Button */}
            {currentStep < 7 && (
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

export default DescriptionSelectionFour;