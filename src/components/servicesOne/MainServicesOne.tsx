"use client";

import AIExtraction from "@/components/servicesOne/AIExtraction/AIExtraction";
import ActionSelection from "@/components/servicesOne/ActionSelection/ActionSelection";
import FileUpload from "@/components2.0/shared/FileUpload/FileUpload";
import FinalOverview from "@/components/servicesOne/FinalOverview/FinalOverview";
import OwnerSelection from "@/components/servicesOne/OwnerSelection/OwnerSelection";
import WorkflowStepper from "@/components/servicesOne/WorkflowStepper/WorkflowStepper";
import AIExtractionDataInPut from "@/components/servicesOne/aAIExtractionData/AIExtractionData";
import DescriptionSelection from "@/components/servicesOne/descriptionSelections/DescriptionSelections";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const workflowSteps = [
    { id: 1, title: "Upload Documents" },
    { id: 2, title: "AI Data Extraction" },
    { id: 3, title: "Select Owner(s)" },
    { id: 4, title: "Description Selections" },
    { id: 5, title: "AI Extraction Data" },
    { id: 6, title: "Select Actions" },
    { id: 7, title: "Final Overview" },
];

const MainServicesOne: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const stepParam = Number(searchParams.get("step")) || 1;
    const [currentStep, setCurrentStep] = useState(stepParam);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [extractedData, setExtractedData] = useState<any>(null);
    const [selectedOwners, setSelectedOwners] = useState<any[]>([]);
    const [selectedActions, setSelectedActions] = useState<string[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setCurrentStep(stepParam);
    }, [stepParam]);

    const goToStep = (step: number) => {
        router.push(`?step=${step}`);
    };

    const nextStep = () => {
        if (currentStep < workflowSteps.length) {
            goToStep(currentStep + 1);
        }
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return uploadedFiles.length > 0;
            case 2:
                return extractedData !== null;
            default:
                return true;
        }
    };

    console.log(uploadedFiles)
    const handleComplete = () => setIsCompleted(true);

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    //completed
                    <FileUpload
                        onFilesChange={setUploadedFiles}
                        uploadedFiles={uploadedFiles}
                        currentStep={currentStep}
                        nextStep={nextStep}
                    />
                );
            case 2:
                return (
                    //button addewd
                    <AIExtraction
                        uploadedFiles={uploadedFiles}
                        currentStep={currentStep}
                        nextStep={nextStep}
                    />
                );
            case 3:
                return <OwnerSelection
                    currentStep={currentStep}
                    nextStep={nextStep}
                />;
            case 4:
                return <DescriptionSelection
                    currentStep={currentStep}
                    nextStep={nextStep}
                />;
            case 5:
                return <AIExtractionDataInPut currentStep={currentStep}
                    nextStep={nextStep}
                />;
            case 6:
                return (
                    <ActionSelection
                        selectedActions={selectedActions}
                        onActionsChange={setSelectedActions}
                        currentStep={currentStep}
                        canProceed={canProceed}
                        nextStep={nextStep}
                    />
                );
            case 7:
                return (
                    <FinalOverview
                        files={uploadedFiles}
                        extractedData={extractedData}
                        selectedOwners={selectedOwners}
                        selectedActions={selectedActions}
                        onComplete={handleComplete}
                    />
                );
            default:
                return null;
        }
    };

    if (isCompleted) {
        return <div>✅ Workflow Complete</div>;
    }

    return (
        <div className="min-h-screen flex">
            <div className="bg-white shadow-sm">
                <WorkflowStepper steps={workflowSteps} currentStep={currentStep} />
            </div>
            <div className="flex-1 p-12">
                <div className="max-w-6xl">
                    <div className="mb-8">{renderStepContent()}</div>

                </div>
            </div>
        </div>
    );
};

export default MainServicesOne;