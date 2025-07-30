import React, { useState, useEffect } from "react";
import { Brain, CheckCircle, Loader } from "lucide-react";
import { usePostFileAiDataExtractMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import Lottie from "lottie-react";
import aiLoadingExtract from "../../../../public/aiFIleLoading.json";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAiExtractCatchData } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

interface AIExtractionProps {
  files: File[];
  extractedData: any;
}

const AIExtraction: React.FC<AIExtractionProps> = ({
  files,

  extractedData,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();

  const [aiFileUpload, { isLoading }] = usePostFileAiDataExtractMutation();

  // ai data extract
  const startExtraction = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProgress(0);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
      console.log(file);
    });

    try {
      const res = await aiFileUpload(formData).unwrap();
      console.log(res);
      if (res?.success) {
        dispatch(setAiExtractCatchData(res.data));

        // Simulate AI processing
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsProcessing(false);

              return 100;
            }
            return prev + Math.random() * 15;
          });
        }, 200);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
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
          {isLoading ? (
            <div className=" min-h-[450px] flex justify-center items-center">
              <Lottie animationData={aiLoadingExtract} loop={true} />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[600px] ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl  text-center">
            {/* Icon */}
            <div className="bg-blue-500 rounded-full p-4 mb-4 inline-block  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Message */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              successfully
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              You have success Ai form data Extract.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIExtraction;
