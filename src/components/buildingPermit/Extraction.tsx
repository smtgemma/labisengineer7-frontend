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
import aiLoadingExtract from "../../../public/aiFIleLoadingTwo.json";

interface AIExtractionProps {
    currentStep: number
    nextStep: () => void
    uploadedFiles: File[]
}

const AIExtractionFour: React.FC<AIExtractionProps> = ({
    currentStep,
    nextStep,
    uploadedFiles
}) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [progress, setProgress] = useState(0);
    const [time, setTime] = useState(0);
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




    const project_descriptions = ["ΕΣΩΤΕΡΙΚΕΣ ΔΙΑΡΡΥΘΜΙΣΕΙΣ ΧΩΡΙΣ ΝΑ ΘΙΓΟΝΤΑΙ ΤΑ ΔΟΜΙΚΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΦΕΡΟΝΤΟΣ ΟΡΓΑΝΙΣΜΟΥ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ A-4 ΤΟΥ Α' ΟΡΟΦΟΥ", "ΑΛΛΑΓΗ ΧΡΗΣΗΣ ΑΠΟ ΚΑΤΑΣΤΗΜΑ ΣΕ ΚΑΤΟΙΚΙΑ ΣΤΟ A-4"]

    const technical_description = "Το ακίνητο βρίσκεται (Within_outside_city_plan), συνολικής επιφάνειας (Αrea Plot) τ.μ , είναι καταχωρημένο στο Εθνικό Κτηματολόγιο με ΚΑΕΚ Kaek_property στην οδό Property_address, Property_number στο Place_property στο Municipality_community με Τ.Κ. Property_postal_code .Πρόκειται για Horizontal_property_name (, επιφανείας Title_area ,το οποίο αποτελεί αυτοτελή οριζόντια ιδιοκτησία κατά τις διατάξεις του Ν.3741/1929 και του Ν.Δ. 1024/1971. Η πολυκατοικία ανεγέρθηκε βάσει της υπ’ αριθμ. Permit_number οικοδομικής άδειας, που εκδόθηκε από την Issuing_authority Η παραπάνω ιδιοκτησία έχει ενταχθεί στο ν.3843/2010 ή 4178/2013 ή 4495/2017 με Α/Α Δήλωσης  Legalization_statement_number ηλεκτρονικό κωδικό, Electronic_code και ημερομηνία υπαγωγής Inclusion_date_legalization από τον /την Engineer_full_name, (Specialty ) με αριθμό μητρώου ΤΕΕ (Tee_registration_number )"

    const technical_description_two = "Το ακίνητο βρίσκεται (Within_outside_city_plan), δεν εμπίπτει σε Ζώνες Απαγόρευσης (π.χ. Δασική, Αιγιαλός, Ζώνες προστασίας ΥΠΠΟ ή Natura), ούτε εντοπίζεται εντός χαρακτηρισμένων παραδοσιακών οικισμών ή διατηρητέων κελυφών.   Δηλώνεται ότι δεν συντρέχουν οι απαγορευτικές περιπτώσεις του άρθρου 1 του Ν.4495/2017, ούτε απαιτείται έγκριση άλλων αρχών. Το κτίσμα είναι νομίμως υφιστάμενο κατά την έννοια του άρθρου 23 του Ν.4495/2017 και συνοδεύεται από τα απαραίτητα νομιμοποιητικά στοιχεία.   Οι εργασίες πληρούν τις προϋποθέσεις του άρθρου 2 της ΥΑ ΥΠΕΝ/ΔΑΟΚΑ/43266/1174/13.5.2020, και ως εκ τούτου η άδεια Μικρής Κλίμακας μπορεί να εκδοθεί χωρίς περαιτέρω εγκρίσεις ή έλεγχο ΣΑ."


    const startExtraction = async () => {
        setErrorMsg(""); // reset previous error

        if (!hasValidFiles(uploadedFiles)) {
            setErrorMsg("Please upload valid files before starting extraction.");
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setIsCompleted(false);

        const formData = new FormData();
        uploadedFiles.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });

        formData.append("project_descriptions", JSON.stringify(project_descriptions));
        formData.append("technical_description", JSON.stringify(technical_description));
        formData.append("technical_description_two", JSON.stringify(technical_description_two));

        try {
            const res = await aiFileUpload(formData).unwrap();
            if (res) {
                dispatch(setAiExtractCatchData(res));

                // simulate progress
                const interval = setInterval(() => {
                    setProgress((prev) => {
                        if (prev >= 100) {
                            clearInterval(interval);
                            setIsCompleted(true);
                            setIsProcessing(false);
                            return 100;
                        }
                        return prev + Math.random() * 15;
                    });
                }, 200);

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

export default AIExtractionFour;


// trash


// Timer
// const timerControling = () => {
//   if (time >= 120) return;
//   const timer = setInterval(() => {
//     setTime((prev) => prev + 1);
//   }, 1000);

//   return () => clearInterval(timer);
// };

// const minutes = Math.floor(time / 60);
// const seconds = time % 60;