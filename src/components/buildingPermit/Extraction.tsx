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
    // const [progress, setProgress] = useState(0);
    // const [time, setTime] = useState(0);
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




    // const project_descriptions = ["ΕΣΩΤΕΡΙΚΕΣ ΔΙΑΡΡΥΘΜΙΣΕΙΣ ΧΩΡΙΣ ΝΑ ΘΙΓΟΝΤΑΙ ΤΑ ΔΟΜΙΚΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΦΕΡΟΝΤΟΣ ΟΡΓΑΝΙΣΜΟΥ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ A-4 ΤΟΥ Α' ΟΡΟΦΟΥ", "ΑΛΛΑΓΗ ΧΡΗΣΗΣ ΑΠΟ ΚΑΤΑΣΤΗΜΑ ΣΕ ΚΑΤΟΙΚΙΑ ΣΤΟ A-4"]

    const technical_description = `Πρόκειται για την "horizontal_property_name":, που βρίσκεται σε πολυκατοικία, επί της οδού "property_address","property_number":, στη περιοχή: "property_place" του Δήμου "municipality_community": Χαλάνδρι, ΤΚ "property _postal_code", και έχει υπαχθεί στις περί οριζοντίου ιδιοκτησίας διατάξεις με την υπ΄ αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place / municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη τροποποίησης Σ.Ο.Ι του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": "`

    const technical_description_two = `Η οικοδομή έχει ανεγερθεί σύμφωνα με την υπ΄αριθμόν "permit_number": οικοδομική άδεια της "issuing_authority", και σύμφωνα με την υπ΄ αριθμόν "license_number_revision" αναθεώρηση αυτής, σε οικόπεδο , "within_outside_city_plan", συνολικής επιφάνειας Ε= "plot_area":. Η ως άνω "horizontal_property_name" αποτελεί ιδιοκτησία σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας, "Owner's type of ownership" κυριότητα, τον "last_name owner 1" "first_name owner 1":  και σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας "Owner's type of ownership" κυριότητα, την "last_name owner 2" "first_name owner 2" και έχει δηλωθεί στο κτηματολόγιο με αριθμό ΚΑΕΚ "ΚΑΕΚ Property"`


    const technical_description_three = `Πρόκειται για την "horizontal_property_name":, που βρίσκεται σε πολυκατοικία, επί της οδού "property_address","property_number":, στη περιοχή: "property_place" του Δήμου "municipality_community": Χαλάνδρι, ΤΚ "property _postal_code", και έχει υπαχθεί στις περί οριζοντίου ιδιοκτησίας διατάξεις με την υπ΄ αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη τροποποίησης Σ.Ο.Ι του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": "`


    const technical_description_four = ` Η οικοδομή έχει ανεγερθεί σύμφωνα με την υπ΄αριθμόν "permit_number": οικοδομική άδεια της "issuing_authority", και σύμφωνα με την υπ΄ αριθμόν "license_number_revision" αναθεώρηση αυτής, σε οικόπεδο , "within_outside_city_plan", συνολικής επιφάνειας Ε= "plot_area":. Η ως άνω "horizontal_property_name" αποτελεί ιδιοκτησία σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας, "Owner's type of ownership" κυριότητα, τον "last_name owner 1" "first_name owner 1":  και σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας "Owner's type of ownership" κυριότητα, την "last_name owner 2" "first_name owner 2" και έχει δηλωθεί στο κτηματολόγιο με αριθμό ΚΑΕΚ "ΚΑΕΚ Property"`

    const technical_description_five = `Στην "horizontal_property_name", έχει εκδοθεί βεβαίωση απώλειας φακέλου της οικοδομικής αδεια με αριθμό πρωτοκόλλου "protocol_number_loss_certificate" , ημερομηνία έκδοσης  "protocol_date_loss_certificate" από την "issuing_authority_loss_certificate".Στην "horizontal_property_name", έχει πραγματοποιηθεί τακτοποίηση σύμφωνα με τις διατάξεις του ν. 3843/2010, η οποία ολοκληρώθηκε στις "completion_declaration_3843_number" με αριθμό δήλωσης "description_validations_3843", στην αρμόδια "issuing_authority_3843" λόγω "description_validations_3843".Το σχετικό έγγραφο έχει αναρτηθεί στο πληροφοριακό σύστημα του ΤΕΕ, στο πεδίο “Έγγραφα ρύθμισης με προηγούμενους νόμους” (Ν. 1337/83, Ν. 3843/10 κ.λπ.).Στην "horizontal_property_name", έχει πραγματοποιηθεί τακτοποίηση σύμφωνα με τις διατάξεις του ν. 1337/1983,με αριθμό δήλωσης "declaration_number_1337", η οποία ολοκληρώθηκε στις "date_of_submission_1337", στην αρμόδια  "issuing_authority_1337".Το σχετικό έγγραφο έχει αναρτηθεί στο πληροφοριακό σύστημα του ΤΕΕ, στο πεδίο “Έγγραφα ρύθμισης με προηγούμενους νόμους” (Ν. 1337/83, Ν. 3843/10 κ.λπ.).Επιπρόσθετα, στην ώς άνω ιδιοκτησία έχει εκδοθεί Έγκριση εργασιών δόμησης μικρής κλίμακας με Α/Α Πράξης  "license_number_eemk", ημερομηνία έκδοσης "date issue permit paper _EEMK", από την  "issuing_authority_eemk"" λόγω "project title descripsion_ΕΕΜΚ", και αναθεωρήθηκε με την υπ΄ αριθμόν "license_number_revision_eemk" και ημερομηνία έκδοσης "date_of_issue_building_permit_revision_eemk".`

    const technical_description_six = `Το περίγραμμα της οριζόντιας ιδιοκτησίας ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": "`

    const technical_description_seven = `Βεβαιώνεται ότι ευρέθη απόκλιση έως 2 % σε σχέση με της επιφάνεια και το περίγραμμα της υπ΄ αριθμόν αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous συνεπώς συντρέχουν οι προϋποθέσεις του άρθρου 16 παράγραφος 1.β του ν.5142/2024 , και δεν απαιτείται η τροποποίηση ή διόρθωση των πράξεων σύστασης και των τίτλων κτήσης, προκειμένου για τη μεταβίβαση των οριζοντίων ή καθέτων ιδιοκτησιών ή για τη σύσταση εμπραγμάτων δικαιωμάτων επί αυτών.`

    const technical_description_eight = `Το περίγραμμα της οριζόντιας ιδιοκτησίας δεν ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous)`

    const technical_description_nine = `Η "horizontal_property_name",  αποτελείται από  "mini descripsion of horizontal property", και έχει εμβαδό Ε = ………τ.μ. Στη παραπάνω ιδιοκτησία ανήκει επίσης και η "exclusive_use for Property"`
    const declaration_owner_for_4495_2017 = `Εγω ο/η (Surname-Name Owner) ο/η οποίος/οποία έχω στην ιδιοκτησία μου την αυτοτελή διηρημένη οριζόντια 
ιδιοκτησία «Horizontal property name», που βρίσκεται στον (floor) όροφο πολυκατοικίας στην οδό
(Adrees Property), στο οικοδομικό τετράγωνο (Ο.Τ. Number), στα/στην/στον (Place Property) , του Δήμου (Municipality-City Property)---, με είδος 
ιδιοκτησίας (owner_type_ownership) ΚΥΡΙΟΤΗΤΑΣ ΚΑΤΑ (
Property ownership percentage ) στη διηρημένη ιδιοκτησία, στην οποία αναλογεί 
(percentage of co-ownership of the plot)/1000 ποσοστό συνιδιοκτησίας εξ αδιαιρέτου στο σύνολο του οικοπέδου, εξουσιοδοτώ`

    //     Εγω ο/η (Surname-Name Owner) ο/η οποίος/οποία έχω στην ιδιοκτησία μου την αυτοτελή διηρημένη οριζόντια 
    // ιδιοκτησία «Horizontal property name/descripsion», που βρίσκεται στον (floor) όροφο πολυκατοικίας στην οδό
    // (Adrees Property), στο οικοδομικό τετράγωνο (Ο.Τ. Number), στα/στην/στον (Place Property) , του Δήμου (Municipality-City Property)---, με είδος 
    // ιδιοκτησίας (Owner's type of ownership) ΚΥΡΙΟΤΗΤΑΣ ΚΑΤΑ (
    // Property ownership percentage )στη διηρημένη ιδιοκτησία, στην οποία αναλογεί 
    // (percentage of co-ownership of the plot)/1000 ποσοστό συνιδιοκτησίας εξ αδιαιρέτου στο σύνολο του οικοπέδου, εξουσιοδοτώ
    // τον /την (Surname and Name Engineer User)-(Professional specialty Engineers User) με ΑΜ ΤΕΕ (TEE NUMBER),
    // create nre var and sent it 


    const startExtraction = async () => {
        setErrorMsg(""); // reset previous error

        if (!hasValidFiles(uploadedFiles)) {
            setErrorMsg("Please upload valid files before starting extraction.");
            return;
        }

        setIsProcessing(true);
        // setProgress(0);
        setIsCompleted(false);

        const formData = new FormData();
        uploadedFiles.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });

        // formData.append("project_descriptions", JSON.stringify(project_descriptions));
        formData.append("technical_description", JSON.stringify(technical_description));
        formData.append("technical_description_two", JSON.stringify(technical_description_two));
        formData.append("technical_description_three", JSON.stringify(technical_description_three));
        formData.append("technical_description_four", JSON.stringify(technical_description_four));
        formData.append("technical_description_five", JSON.stringify(technical_description_five));
        formData.append("technical_description_six", JSON.stringify(technical_description_six));
        formData.append("technical_description_seven", JSON.stringify(technical_description_seven));
        formData.append("technical_description_eight", JSON.stringify(technical_description_eight));
        formData.append("technical_description_nine", JSON.stringify(technical_description_nine));
        formData.append("technical_description_nine", JSON.stringify(technical_description_nine));
        formData.append("declaration_owner_for_4495_2017", JSON.stringify(declaration_owner_for_4495_2017));

        try {
            const res = await aiFileUpload(formData).unwrap();
            if (res) {
                dispatch(setAiExtractCatchData(res));

                // simulate progress
                // const interval = setInterval(() => {
                //     setProgress((prev) => {
                //         if (prev >= 100) {
                //             clearInterval(interval);
                //             setIsCompleted(true);
                //             setIsProcessing(false);
                //             return 100;
                //         }
                //         return prev + Math.random() * 15;
                //     });
                // }, 200);

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