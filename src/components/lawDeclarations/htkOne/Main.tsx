"use client";

import FileUpload from "@/components/CreateProject/FileUpload/FileUpload";
import WorkflowStepper from "@/components/CreateProject/WorkflowStepper/WorkflowStepper";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HtkOneAIExtractionDataInPut from "./HtkOneAIExtractionDataInPut";
import HtkOneAiExtraction from "./HtkOneAiExtraction";
import HtkOneOwnerSelectionFour from "./HtkOneOwnerSelectionFour";
import HtkOneTemplateSelectionComponents from "./HtkOneTemplateSelectionComponents";
import HtkOneFinalSteps from "./HtkOneFinalSteps";


const workflowSteps = [
    { id: 1, title: "Upload Documents" },
    { id: 2, title: "AI Data Extraction" },
    { id: 3, title: "Select Owner(s)" },
    { id: 4, title: "AI Extraction Data" },
    // { id: 5, title: "Record Violation" },
    // { id: 6, title: "Questions Answer" },
    // need to chnage  
    { id: 7, title: "Select Actions" },
    { id: 8, title: "Final Overview" },
];

const MainHtkOne: React.FC = () => {
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
        console.log("nest step")
        if (currentStep < workflowSteps.length) {
            console.log("nest step")

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
                    //same
                    <FileUpload
                        onFilesChange={setUploadedFiles}
                        uploadedFiles={uploadedFiles}
                        currentStep={currentStep}
                        nextStep={nextStep}
                    />
                );
            case 2:
                return (
                    //same
                    <HtkOneAiExtraction
                        uploadedFiles={uploadedFiles}
                        currentStep={currentStep}
                        nextStep={nextStep}
                    />
                );
            case 3:
                //same
                return <HtkOneOwnerSelectionFour
                    currentStep={currentStep}
                    nextStep={nextStep}
                />;
            case 4:
                //same
                return <HtkOneAIExtractionDataInPut
                    uploadedFiles={uploadedFiles}
                    currentStep={currentStep}
                    nextStep={nextStep}
                />;
            case 5:
                //need to work
                return (
                    <HtkOneTemplateSelectionComponents
                        selectedActions={selectedActions}
                        onActionsChange={setSelectedActions}
                        currentStep={currentStep}
                        canProceed={canProceed}
                        nextStep={nextStep}
                    />
                );
            case 6:
                return (
                    //need to work
                    <HtkOneFinalSteps
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
            <div className="bg-white shadow-sm h-fit sticky top-36">
                <WorkflowStepper className="rounded-2xl" steps={workflowSteps} currentStep={currentStep} />
            </div>
            <div className="flex-1 p-12">
                <div className="max-w-6xl">
                    <div className="mb-8">{renderStepContent()}</div>

                </div>
            </div>
        </div>
    );
};

export default MainHtkOne;



//trash

{/* {currentStep < 6 && (
            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-green-500 text-white px-8 py-3 rounded-lg"
              >
                Next <ChevronRight className="inline w-5 h-5 ml-2" />
              </button>
            </div>
          )} */}