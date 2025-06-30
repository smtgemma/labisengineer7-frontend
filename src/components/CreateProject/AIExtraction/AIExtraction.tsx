import React, { useState, useEffect } from "react";
import { Brain, CheckCircle, Loader } from "lucide-react";

interface AIExtractionProps {
  files: File[];
  onExtractionComplete: (data: any) => void;
  extractedData: any;
}

const AIExtraction: React.FC<AIExtractionProps> = ({
  files,
  onExtractionComplete,
  extractedData,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startExtraction = () => {
    setIsProcessing(true);
    setProgress(0);

    // Simulate AI processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          onExtractionComplete({
            entities: ["John Doe", "ABC Corporation", "Contract #12345"],
            dates: ["2024-01-15", "2024-12-31"],
            amounts: ["$50,000", "$2,500"],
            documentType: "Service Agreement",
          });
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  return (
    <div className="space-y-8">
      {files.length === 0 ? (
        <div className="text-center py-16">
          <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            Please upload documents first to begin extraction.
          </p>
        </div>
      ) : !extractedData && !isProcessing ? (
        <div className="text-center py-16">
          <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready for AI Extraction
          </h3>
          <p className="text-gray-600 mb-8">
            Our AI will analyze your documents and extract key information
            automatically.
          </p>
          <button
            onClick={startExtraction}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
          >
            Start AI Extraction
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Processing {files.length} document{files.length !== 1 ? "s" : ""}
          </p>
        </div>
      ) : isProcessing ? (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-8">
              Here is the extracted information. Please review and confirm.
            </p>
            <p className="text-gray-700 font-medium mb-6">
              AI is refining your resume...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Large Percentage Display */}
            <div className="text-center">
              <span className="text-6xl font-light text-gray-300">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-green-600 mb-6">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Extraction Complete</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                Entities Found
              </h4>
              <ul className="space-y-2">
                {extractedData.entities.map((entity: string, index: number) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {entity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                Key Dates
              </h4>
              <ul className="space-y-2">
                {extractedData.dates.map((date: string, index: number) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {date}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                Amounts
              </h4>
              <ul className="space-y-2">
                {extractedData.amounts.map((amount: string, index: number) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {amount}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                Document Type
              </h4>
              <p className="text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                {extractedData.documentType}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIExtraction;
