import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import {
    setAiExtractCatchData
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePostFileAiDataExtractMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { RootState } from "@/redux/store";
import Lottie from "lottie-react";
import { Brain, CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { FcFinePrint } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import aiLoadingExtract from "../../../../public/aiFIleLoadingTwo.json";

interface AIExtractionProps {
    currentStep: number
    nextStep: () => void
    uploadedFiles: File[]
}

const HtkTwoAiExtraction: React.FC<AIExtractionProps> = ({
    currentStep,
    nextStep,
    uploadedFiles
}) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const [errorMsg, setErrorMsg] = useState(""); // ✅ Error message state
    const dispatch = useDispatch();

    const [aiFileUpload] = usePostFileAiDataExtractMutation();

    const aiExtractData = useSelector((state: RootState) => state.aiData);
    console.log(aiExtractData)
    // Helper: check if files are valid
    const hasValidFiles = (files: any[]) => {
        if (!Array.isArray(files) || files.length === 0) return false;

        return files.every(
            (file) =>
                file &&
                typeof file === "object" &&
                "name" in file &&
                "size" in file &&
                "type" in file &&
                file.name.trim() !== "" &&
                file.size > 0 &&
                file.type.trim() !== ""
        );
    };


    const technical_description = "Το ακίνητο βρίσκεται {{Within_outside_city_plan}}, συνολικής επιφάνειας {{Area_plot}} τ.μ., είναι καταχωρημένο στο Εθνικό Κτηματολόγιο με ΚΑΕΚ {{Kaek_property}}, στην οδό {{Property_address}} {{Property_number}}, στη θέση {{Place_property}}, στο Δήμο {{Municipality_community}}, με Τ.Κ. {{Property_postal_code}}.Πρόκειται για {{Horizontal_property_name}}, επιφανείας {{Title_area}} τ.μ., η οποία αποτελεί αυτοτελή οριζόντια ιδιοκτησία κατά τις διατάξεις του Ν.3741/1929 και του Ν.Δ. 1024/1971."


    const startExtraction = async () => {
        setErrorMsg(""); // reset previous error

        if (!hasValidFiles(uploadedFiles)) {
            setErrorMsg("Please upload valid files before starting extraction.");
            return;
        }

        setIsProcessing(true);
        setIsCompleted(false);

        const formData = new FormData();

        uploadedFiles.forEach((file, index) => {
            if (file) formData.append(`file${index + 1}`, file);
        });


        formData.append("technical_description", JSON.stringify(technical_description));

        try {
            const res = await aiFileUpload(formData).unwrap();
            if (res) {
                dispatch(setAiExtractCatchData(res));
                nextStep();
            }
        } catch (error: any) {
            setErrorMsg("Error during AI extraction. Please try again."); // show error in <p>
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Empty files */}
            {uploadedFiles.length === 0 ? (
                <div className="text-center py-16">
                    <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                        Please upload documents first to begin extraction.
                    </p>
                </div>
            ) : isCompleted ? (
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
                        <div className="bg-blue-500 rounded-full p-4 mb-4 inline-block">
                            <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                            Extraction Successful
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm">
                            Your document data has been extracted.
                        </p>
                    </div>
                </div>
            ) : isProcessing ? (
                <div className="space-y-8 min-h-[450px] flex flex-col justify-center items-center">
                    <div className="w-[300px]">
                        <Lottie animationData={aiLoadingExtract} loop={true} />
                    </div>
                </div>
            ) : (
                <div className="text-center py-16">
                    <FcFinePrint className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Ready for AI Extraction
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Our AI will analyze your documents and extract key information automatically.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        {
                            hasValidFiles(uploadedFiles) ? `Processing ${uploadedFiles.length} document${uploadedFiles.length !== 1 ? "s" : ""}` : "Please upload valid files to start extraction."
                        }

                    </p>
                </div>
            )}

            {/* Error message */}
            {errorMsg && (
                <p className="text-red-500 text-center font-medium">{errorMsg}</p>
            )}

            {/* Button */}
            {currentStep < 6 && (
                <div className="flex justify-end w-fit ml-auto">
                    <PrimaryButton
                        onClick={startExtraction}
                        disabled={!hasValidFiles(uploadedFiles)}
                    >
                        Start AI Extraction
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
};

export default HtkTwoAiExtraction;