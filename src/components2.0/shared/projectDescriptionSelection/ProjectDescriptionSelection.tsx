import { setMultipleDescription } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Edit3 } from "lucide-react";
import React, { Dispatch, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface SelectedProperty {
    index: number;
    value: string;
}

interface ProjectDescriptionSelectionProps {
    aiDescriptions: string[];
    setValidationError: Dispatch<
        React.SetStateAction<{
            description: string;
            owner: string;
        }>
    >;
    validationError: {
        description: string;
        owner: string;
    };
}

const ProjectDescriptionSelection: React.FC<ProjectDescriptionSelectionProps> = ({
    aiDescriptions,
    validationError,
    setValidationError,
}) => {
    const [descriptions, setDescriptions] = useState<string[]>([]);
    const [selectedProperty, setSelectedProperty] = useState<SelectedProperty[]>([]);
    const [editingDescription, setEditingDescription] = useState<{ index: number; value: string } | null>(
        null
    );
    const [isEditDescriptionModalOpen, setIsEditDescriptionModalOpen] = useState(false);
    const [descriptionText, setDescriptionText] = useState("");

    const dispatch = useDispatch();

    // Load descriptions from props
    useEffect(() => {
        if (aiDescriptions && aiDescriptions.length > 0) {
            setDescriptions(aiDescriptions);
        }
    }, [aiDescriptions]);

    // Handle selection
    const togglePropertySelection = (index: number, value: string) => {
        const alreadySelected = selectedProperty.find((item) => item.index === index);

        if (alreadySelected) {
            // Deselect
            setSelectedProperty((prev) => prev.filter((item) => item.index !== index));

            // Validation if nothing selected after deselect
            setTimeout(() => {
                if (selectedProperty.length === 1) {
                    setValidationError((prev) => ({
                        ...prev,
                        description: "Please select at least one property description.",
                    }));
                }
            }, 0);
        } else {
            // Select only one property
            setSelectedProperty([{ index, value }]);

            // Clear validation error if any
            if (validationError.description) {
                setValidationError((prev) => ({ ...prev, description: "" }));
            }
        }
    };

    // Open modal for editing
    const openEditDescriptionModal = (
        e: React.MouseEvent,
        description: string,
        index: number
    ) => {
        e.stopPropagation();
        setEditingDescription({ index, value: description });
        setDescriptionText(description);
        setIsEditDescriptionModalOpen(true);
    };

    // Save edited description
    const onEditDescriptionSubmit = () => {
        if (editingDescription !== null) {
            const updated = [...descriptions];
            updated[editingDescription.index] = descriptionText;
            setDescriptions(updated);

            const updatedSelected = selectedProperty.map((item) =>
                item.index === editingDescription.index ? { ...item, value: descriptionText } : item
            );
            setSelectedProperty(updatedSelected);

            setDescriptionText("");
            setEditingDescription(null);
            setIsEditDescriptionModalOpen(false);
        }
    };

    // Update Redux
    useEffect(() => {
        dispatch(setMultipleDescription({ description: selectedProperty }));

        // Validation: must have exactly one selected
        if (selectedProperty.length === 0) {
            setValidationError((prev) => ({
                ...prev,
                description: "Please select one property description.",
            }));
        } else if (selectedProperty.length > 1) {
            setValidationError((prev) => ({
                ...prev,
                description: "You can select only one description.",
            }));
        } else {
            setValidationError((prev) => ({ ...prev, description: "" }));
        }
    }, [selectedProperty, dispatch, setValidationError]);

    return (
        <div>
            {/* Property Descriptions */}
            {descriptions.length > 0 && (
                <div>
                    <p className="mb-4 font-medium">Please select a property description:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {descriptions.map((property, index) => (
                            <div
                                key={index}
                                onClick={() => togglePropertySelection(index, property)}
                                className={`p-6 rounded-lg relative cursor-pointer border-2 transition-all duration-200 
                ${selectedProperty.some((item) => item.index === index)
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

                    {validationError.description && (
                        <p className="text-red-500 text-sm mt-2">{validationError.description}</p>
                    )}
                </div>
            )}

            {/* Edit Modal */}
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
                                <label className="block text-gray-700 font-medium mb-2">Description:</label>
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
        </div>
    );
};

export default ProjectDescriptionSelection;
