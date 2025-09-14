"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import FileUploadPage from "./UploadFile";
import { Extraction } from "./Extraction";
import { useRouter, useSearchParams } from "next/navigation";
import WorkflowStepper from "../CreateProject/WorkflowStepper/WorkflowStepper";

const workflowSteps = [
    { id: 1, title: "Upload Documents" },
    { id: 2, title: "AI Data Extraction" },
    { id: 3, title: "Select Owner(s)" },
    { id: 4, title: "AI Extraction Data" },
    { id: 5, title: "Select Actions" },
    { id: 6, title: "Question And Answer" },
    { id: 7, title: "Final Overview" },
];

interface CreateEngCertProps {
    startStep?: number; // optional prop to start at a specific step
}

const CreateEngCert: React.FC<CreateEngCertProps> = ({ startStep = 1 }) => {
    const [currentStep, setCurrentStep] = useState(startStep);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [extractedData, setExtractedData] = useState<any>(null);
    const searchParams = useSearchParams();
    const stepParam = Number(searchParams.get("step")) || 1;

    const router = useRouter()
    useEffect(() => {
        if (startStep > 1 && startStep <= workflowSteps.length) {
            setCurrentStep(startStep);
        }
    }, [startStep]);

    const goToStep = (step: number) => {
        router.push(`?step=${step}`);
    };

    const nextStep = () => {
        if (currentStep < workflowSteps.length) {
            goToStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    useEffect(() => {
        setCurrentStep(stepParam);
    }, [stepParam]);
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <FileUploadPage />;
            case 2:
                return <Extraction estimatedTime={20} onComplete={() => setExtractedData({})} />;
            default:
                return <p className="text-gray-600">Step {currentStep} content here...</p>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Left Sidebar - Stepper */}
            <div className="bg-white shadow-sm">
                <WorkflowStepper steps={workflowSteps} currentStep={currentStep} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-12">
                <div className="max-w-6xl">
                    {/* Step Content */}
                    <div className="mb-8">{renderStepContent()}</div>

                    {/* Footer with Back & Next Buttons */}
                    {currentStep < 7 && (
                        <div className="flex justify-between">
                            {currentStep > 1 ? (
                                <button
                                    onClick={prevStep}
                                    className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-200 flex items-center space-x-2 font-medium text-lg"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    <span>Back</span>
                                </button>
                            ) : (
                                <div />
                            )}

                            <button
                                onClick={nextStep}
                                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium text-lg"
                            >
                                <span>Next</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateEngCert;
