import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import SharedOwnerSelection from "@/components2.0/shared/ownerSelection/OwnerSelection";
import ProjectDescriptionSelection from "@/components2.0/shared/projectDescriptionSelection/ProjectDescriptionSelection";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const HtkTwoOwnerSelectionFour = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const [validationError, setValidationError] = useState<{ description: string; owner: string }>({
        description: "",
        owner: ""
    });

    const aiData = useSelector((state: any) => state.aiData?.aiDataState);
    const ownerBaseData = useSelector((state: any) => state.aiData?.ownerBaseData);
    const descriptionFormRedux = useSelector((state: any) => state.aiData?.description);
    const [descriptions, setDescriptions] = useState<string[]>([]);

    // Initialize descriptions from project_descriptions
    useEffect(() => {
        const description1 = aiData?.horizontal_property_name;
        const description2 = aiData?.horizontal_property_name_two;
        setDescriptions([description1, description2].filter(desc => desc));
    }, [aiData]);


    // Validate before proceeding
    const isValid = useMemo(() => {
        const descriptionValid = descriptionFormRedux !== "";
        const ownerValid = ownerBaseData?.length >= 1;
        return descriptionValid && ownerValid;
    }, [descriptionFormRedux, ownerBaseData]);
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
            <ProjectDescriptionSelection aiDescriptions={descriptions} setValidationError={setValidationError} validationError={validationError} />
            {/* Owners Section */}
            <SharedOwnerSelection aiOwner={aiData.owners || []} setValidationError={setValidationError} validationError={validationError} />

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

export default HtkTwoOwnerSelectionFour;