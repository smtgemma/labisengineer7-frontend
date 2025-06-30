import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import AIExtractionData from "@/components/CreateProject/AIExtractionData/AIExtractionData";
import FileUpload from "@/components/CreateProject/FileUpload/FileUpload";
import AIExtraction from "@/components/CreateProject/AIExtraction/AIExtraction";
import OwnerSelection from "@/components/CreateProject/OwnerSelection/OwnerSelection";
import ActionSelection from "@/components/CreateProject/ActionSelection/ActionSelection";
import FinalOverview from "@/components/CreateProject/FinalOverview/FinalOverview";
import WorkflowStepper from "@/components/CreateProject/WorkflowStepper/WorkflowStepper";

const workflowSteps = [
  {
    id: 1,
    title: "Upload Documents",
  },
  {
    id: 2,
    title: "AI Data Extraction",
  },
  {
    id: 3,
    title: "Select Owner(s)",
  },
  {
    id: 4,
    title: "Select Actions",
  },
  {
    id: 5,
    title: "Final Overview",
  },
];

interface Owner {
  id: string;
  firstName: string;
  surname: string;
  fatherName: string;
  vatNo: string;
}

const WorkflowDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showExtractionData, setShowExtractionData] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [selectedOwners, setSelectedOwners] = useState<Owner[]>([
    {
      id: "1",
      firstName: "Giannis",
      surname: "Papadopoulos",
      fatherName: "Nikos",
      vatNo: "VAT-12213484",
    },
  ]);
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep === 2 && showExtractionData) {
      setShowExtractionData(false);
      return;
    }

    if (currentStep < workflowSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return uploadedFiles.length > 0;
      case 2:
        return extractedData !== null;
      case 3:
        return selectedOwners.length > 0;
      case 4:
        return selectedActions.length > 0;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
  };

  const resetWorkflow = () => {
    setCurrentStep(1);
    setShowExtractionData(false);
    setUploadedFiles([]);
    setExtractedData(null);
    setSelectedOwners([
      {
        id: "1",
        firstName: "Giannis",
        surname: "Papadopoulos",
        fatherName: "Nikos",
        vatNo: "VAT-12213484",
      },
    ]);
    setSelectedActions([]);
    setIsCompleted(false);
  };

  const handleExtractionDataContinue = () => {
    setShowExtractionData(false);
  };

  const renderStepContent = () => {
    if (currentStep === 2 && showExtractionData) {
      return <AIExtractionData onContinue={handleExtractionDataContinue} />;
    }

    switch (currentStep) {
      case 1:
        return (
          <FileUpload
            onFilesChange={setUploadedFiles}
            uploadedFiles={uploadedFiles}
          />
        );
      case 2:
        return (
          <AIExtraction
            files={uploadedFiles}
            onExtractionComplete={setExtractedData}
            extractedData={extractedData}
          />
        );
      case 3:
        return (
          <OwnerSelection
            selectedOwners={selectedOwners}
            onOwnersChange={setSelectedOwners}
          />
        );
      case 4:
        return (
          <ActionSelection
            selectedActions={selectedActions}
            onActionsChange={setSelectedActions}
          />
        );
      case 5:
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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Workflow Complete!
          </h2>
          <p className="text-gray-600 mb-6">
            Your document processing workflow has been successfully configured
            and is now active.
          </p>
          <button
            onClick={resetWorkflow}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Start New Workflow
          </button>
        </div>
      </div>
    );
  }

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

          {/* Footer with Next Button - Hide for extraction data page and final overview */}
          {!(currentStep === 2 && showExtractionData) && currentStep < 5 && (
            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2 font-medium text-lg"
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

export default WorkflowDemo;
