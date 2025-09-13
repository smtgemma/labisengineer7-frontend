import {
  setAiExtractCatchData
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePostFileAiDataExtractMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import Lottie from "lottie-react";
import { Brain, CheckCircle, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import aiLoadingExtract from "../../../../public/aiFIleLoadingThree.json";

import { toast } from "sonner";

interface AIExtractionProps {
  currentStep: number
  nextStep: () => void
  canProceed: () => boolean
}

// const projectDescriptionAll = [
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6: [
//       "•	EZf2TEPIKEE AIAPPYO•MIEEIZ Xf2PIZ NA O•IFONTAI TA AOMIKA ZTOIXEIA TOY GEPONTOZ OPFANIZMOY ZTO AIAMEPIZMA A-4 TOY A OPOGOY",
//       "ΕΣΩΤΕΡΙΚΕΣ ΔΙΑΡΡΥΘΜΙΣΕΙΣ ΚΤΙΡΙΟΥ/ΑΚΙΝΗΤΟΥ ΧΩΡΙΣ ΝΑ ΘΙΓΟΝΤΑΙ ΤΑ ΔΟΜΙΚΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΦΕΡΟΝΤΟΣ ΟΡΓΑΝΙΣΜΟΥ",
//     ],
//   },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΛΛΑΦ_ΧΡΗΣΗΣ_1:[
//   //     "ΑΛΛΑΓΗ ΧΡΗΣΗΣ ΑΠΟ ΚΑΤΑΣΤΗΜΑ ΣΕ ΚΑΤΟΙΚΙΑ ΣΤΟ Κ-1 ΚΑΤΑΣΤΗΜΑ ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ"," •	AAAAFH XPHZHZ AHO KATAZTHMA ZE KATOIKIA ETO K-1(From Ktimatologio paper 050014	./0/10) KATAZTHMA TOY IZOFEIOY OPOGOY", ""],
//   // },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟΠΟΙΗΣΗΣ_ΙΟΚΘΕΙΑΣ_5: [
//       "ΕΡΓΑΣΙΕΣ ΕΠΙΣΚΕΥΗΣ & ΧΡΩΜΑΤΙΣΜΩΝ ΟΨΕΩΝ ΚΤΙΡΙΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
//       "ΕΡΓΑΣΙΕΣ ΕΠΙΣΚΕΥΗΣ & ΧΡΩΜΑΤΙΣΜΩΝ ΟΨΕΩΝ ΣΕ ΠΟΛΥΩΡΟΦΗ ΟΙΚΟΔΟΜΗ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
//     ],
//   },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΤΟΠΟΘΕΤΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_15:
//   //     "ΤΟΠΟΘΕΤΗΣΗ ΙΚΡΙΩΜΑΤΩΝ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “1-4” ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ - ΤΟΠΟΘΕΤΗΣΗ ΙΚΡΙΩΜΑΤΩΝ ΣΕ ΟΙΚΟΔΟΜΗ",
//   // },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΝΕΑ_ΑΝΟΙΞΜΑΤΑ_ΕΠΙ_ΤΩΝ_ΟΙΚΕΩΝ_10: [
//       "ΕΠΕΜΒΑΣΕΙΣ ΣΤΙΣ ΟΨΕΙΣ & ΝΕΑ ΑΝΟΙΓΜΑΤΑ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Α-4” ΤΟΥ Α’ ΟΡΟΦΟΥ",
//       " ΕΠΕΜΒΑΣΕΙΣ ΣΤΙΣ ΟΨΕΙΣ ΚΤΙΡΙΟΥ & ΝΕΑ ΑΝΟΙΓΜΑΤΑ",
//     ],
//   },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗ_ΚΑΙ_ΕΠΙΣΚΕΥΗ_ΣΤΕΓΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑ_14: [
//       "ΣΥΝΤΗΡΗΣΗ & ΕΠΙΣΚΕΥΗ ΣΤΕΓΗΣ ΚΤΙΡΙΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
//       "ΣΥΝΤΗΡΗΣΗ & ΕΠΙΣΚΕΥΗ ΣΤΕΓΗΣ ΑΚΙΝΗΤΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
//     ],
//   },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΝΑΚΑΤΑΣΚΕΥΗ_ΥΠΕΡΗΧΩΝ_2: [
//       "ΑΝΑΚΑΤΑΣΚΕΥΗ ΣΤΕΓΗΣ ΚΤΙΡΙΟΥ",
//       "ΑΝΑΚΑΤΑΣΚΕΥΗ ΣΤΕΓΗΣ ΑΚΙΝΗΤΟΥ",
//     ],
//   },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΡΜΟΠΡΟΖΩΗΣ_7: [
//       "ΤΟΠΟΘΕΤΗΣΗ ΕΞΩΤΕΡΙΚΗΣ ΘΕΡΜΟΜΟΝΩΣΗΣ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Α-4” ΤΟΥ Α’ ΟΡΟΦΟΥ",
//       "ΤΟΠΟΘΕΤΗΣΗ ΕΞΩΤΕΡΙΚΗΣ ΘΕΡΜΟΜΟΝΩΣΗΣ ΣΕ ΚΤΙΡΙΟ/ΟΙΚΟΔΟΜΗ",
//     ],
//   },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΥΤΟΝΟΜΟ_ΣΥΣΤΗΜΑ_ΕΡΓΑΣΙΑΣ_3:
//   //     "- ΤΟΠΟΘΕΤΗΣΗ ΑΥΤΟΝΟΜΟΥ ΣΥΣΤΗΜΑΤΟΣ ΘΕΡΜΑΝΣΗΣ (ΦΥΣΙΚΟ ΑΕΡΙΟ) ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Ι-4” ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ - ΤΟΠΟΘΕΤΗΣΗ ΑΥΤΟΝΟΜΟΥ ΣΥΣΤΗΜΑΤΟΣ ΘΕΡΜΑΝΣΗΣ (ΑΝΤΛΙΑ ΘΕΡΜΟΤΗΤΑΣ) ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Ι-4” ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ- ΤΟΠΟΘΕΤΗΣΗ ΑΥΤΟΝΟΜΟΥ ΣΥΣΤΗΜΑΤΟΣ ΘΕΡΜΑΝΣΗΣ ΣΕ ΟΙΚΟΔΟΜΗ/ΚΤΙΡΙΟ",
//   // },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΙΣΙΝΑ_COMPACT_ΕΩΣ_50_Τ_Μ_13:
//   //     " ΚΑΤΑΣΚΕΥΗ ΑΣΚΕΠΟΥΣ ΔΕΞΑΜΕΝΗΣ Ή ΠΙΣΙΝΑΣ COMPACT ΜΕΧΡΙ 50 Τ.Μ.",
//   // },
//   {
//     ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΚΟΙΝΗ_ΔΡΑΣΗ_ΕΝΤΟΣ_ΟΙΚΟΠΕΔΟΥ_8: [
//       "ΕΡΓΑΣΙΕΣ ΚΟΠΗΣ ΔΕΝΤΡΩΝ ΣΕ ΑΚΑΛΥΠΤΟ ΧΩΡΟ ΕΝΤΟΣ ΟΙΚΟΠΕΔΟΥ/ΓΗΠΕΔΟΥ",
//     ],
//   },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΕΙΤΟΥΡΓΙΚΗ_ΣΥΝΕΧΗΣ_ΧΡΟΝΟΣ_9:
//   //     "ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “1-4” ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ ΣΕ ΔΥΟ (2) ΝΕΕΣ ΙΔΙΟΚΤΗΣΙΕΣ - ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ ΣΤΟ ΚΑΤΑΣΤΗΜΑ “Κ-1” ΤΟΥ ΙΣΟΓΕΙΟΥ ΟΡΟΦΟΥ ΣΕ ΔΥΟ (2) ΝΕΕΣ ΙΔΙΟΚΤΗΣΙΕΣ - ΔΙΑΧΩΡΙΣΜΟΣ ΟΡΙΖΟΝΤΙΑΣ ΙΔΙΟΚΤΗΣΙΑΣ ΣΤΟ ΓΡΑΦΕΙΟ “Δ-1” ΤΟΥ Δ’ ΟΡΟΦΟΥ ΣΕ ΔΥΟ (2) ΝΕΕΣ ΙΔΙΟΚΤΗΣΙΕΣ",
//   // },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΕΡΙΦΡΑΞΗ_ΕΚΤΟΣ_ΞΕΛΟΥ_11:
//   //     "ΠΕΡΙΦΡΑΞΗ ΟΙΚΟΠΕΔΟΥ/ΓΗΠΕΔΟΥ ΜΕ ΛΙΘΟΔΟΜΗ & ΕΛΑΦΡΙΑ ΚΑΤΑΣΚΕΥΗ - ΠΕΡΙΦΡΑΞΗ ΟΙΚΟΠΕΔΟΥ/ΓΗΠΕΔΟΥ ΜΕ ΠΡΟΧΕΙΡΗ ΚΑΤΑΣΚΕΥΗ/ΣΥΡΜΑΤΟΠΛΕΓΜΑ",
//   // },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΕΡΙΦΡΑΞΗ_ΕΝΤΟΣ_ΞΕΛΟΥ_12:
//   //     "ΠΕΡΙΦΡΑΞΗ ΟΙΚΟΠΕΔΟΥ/ΓΗΠΕΔΟΥ ΜΕ ΠΡΟΧΕΙΡΗ ΚΑΤΑΣΚΕΥΗ/ΣΥΡΜΑΤΟΠΛΕΓΜΑ",
//   // },
//   // {
//   //   ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟ_4: "ΛΕΙΤΟΥΡΓΙΚΗ ΣΥΝΕΝΩΣΗ ΧΩΡΩΝ",
//   // },
// ];
type ProjectDescription = Record<string, string[]>;
const projectDescriptionAll: ProjectDescription[] = [
  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6: [
      "ΕΣΩΤΕΡΙΚΕΣ ΔΙΑΡΡΥΘΜΙΣΕΙΣ ΧΩΡΙΣ ΝΑ ΘΙΓΟΝΤΑΙ ΤΑ ΔΟΜΙΚΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΦΕΡΟΝΤΟΣ ΟΡΓΑΝΙΣΜΟΥ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ Α-4 ΤΟΥ Α’ ΟΡΟΦΟΥ",
      "ΑΛΛΑΓΗ ΧΡΗΣΗΣ ΑΠΟ ΚΑΤΑΣΤΗΜΑ ΣΕ ΚΑΤΟΙΚΙΑ ΣΤΟ A-4",
    ],
  },

  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟΠΟΙΗΣΗΣ_ΙΟΚΘΕΙΑΣ_5: [
      "ΕΡΓΑΣΙΕΣ ΕΠΙΣΚΕΥΗΣ & ΧΡΩΜΑΤΙΣΜΩΝ ΟΨΕΩΝ ΚΤΙΡΙΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
      "ΕΡΓΑΣΙΕΣ ΕΠΙΣΚΕΥΗΣ & ΧΡΩΜΑΤΙΣΜΩΝ ΟΨΕΩΝ ΣΕ ΠΟΛΥΩΡΟΦΗ ΟΙΚΟΔΟΜΗ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
    ],
  },

  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΝΕΑ_ΑΝΟΙΞΜΑΤΑ_ΕΠΙ_ΤΩΝ_ΟΙΚΕΩΝ_10: [
      "ΕΠΕΜΒΑΣΕΙΣ ΣΤΙΣ ΟΨΕΙΣ & ΝΕΑ ΑΝΟΙΓΜΑΤΑ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Α-4” ΤΟΥ Α’ ΟΡΟΦΟΥ",
      " ΕΠΕΜΒΑΣΕΙΣ ΣΤΙΣ ΟΨΕΙΣ ΚΤΙΡΙΟΥ & ΝΕΑ ΑΝΟΙΓΜΑΤΑ",
    ],
  },
  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗ_ΚΑΙ_ΕΠΙΣΚΕΥΗ_ΣΤΕΓΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑ_14: [
      "ΣΥΝΤΗΡΗΣΗ & ΕΠΙΣΚΕΥΗ ΣΤΕΓΗΣ ΚΤΙΡΙΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
      "ΣΥΝΤΗΡΗΣΗ & ΕΠΙΣΚΕΥΗ ΣΤΕΓΗΣ ΑΚΙΝΗΤΟΥ ΜΕ ΧΡΗΣΗ ΙΚΡΙΩΜΑΤΩΝ",
    ],
  },
  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΝΑΚΑΤΑΣΚΕΥΗ_ΥΠΕΡΗΧΩΝ_2: [
      "ΑΝΑΚΑΤΑΣΚΕΥΗ ΣΤΕΓΗΣ ΚΤΙΡΙΟΥ",
      "ΑΝΑΚΑΤΑΣΚΕΥΗ ΣΤΕΓΗΣ ΑΚΙΝΗΤΟΥ",
    ],
  },
  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΡΜΟΠΡΟΖΩΗΣ_7: [
      "ΤΟΠΟΘΕΤΗΣΗ ΕΞΩΤΕΡΙΚΗΣ ΘΕΡΜΟΜΟΝΩΣΗΣ ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ “Α-4” ΤΟΥ Α’ ΟΡΟΦΟΥ",
      "ΤΟΠΟΘΕΤΗΣΗ ΕΞΩΤΕΡΙΚΗΣ ΘΕΡΜΟΜΟΝΩΣΗΣ ΣΕ ΚΤΙΡΙΟ/ΟΙΚΟΔΟΜΗ",
    ],
  },

  {
    ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΚΟΙΝΗ_ΔΡΑΣΗ_ΕΝΤΟΣ_ΟΙΚΟΠΕΔΟΥ_8: [
      "ΕΡΓΑΣΙΕΣ ΚΟΠΗΣ ΔΕΝΤΡΩΝ ΣΕ ΑΚΑΛΥΠΤΟ ΧΩΡΟ ΕΝΤΟΣ ΟΙΚΟΠΕΔΟΥ/ΓΗΠΕΔΟΥ",
    ],
  },
];

const AIExtraction: React.FC<AIExtractionProps> = ({
  currentStep,
  nextStep,
  canProceed
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const dispatch = useDispatch();

  const [aiFileUpload, { isLoading }] = usePostFileAiDataExtractMutation();

  const input = useSelector((state: any) => state.aiData.subcategory);

  const newFiles = useSelector((state: any) => state.aiData.multiFiles);


  // --- Matching process ---
  const allDescriptions: string[] = Object.values(input)
    .flat()
    .map((v: any) => v.toString().trim());

  const description: string[] = projectDescriptionAll.flatMap((obj) => {
    const key = Object.keys(obj)[0];
    return allDescriptions.includes(key) ? obj[key] : [];
  });

  const ktimatologio = newFiles[0];
  const contract = newFiles[1];
  const permit = newFiles[2];
  const Law = newFiles[3];

  // timer function
  const timerControling = () => {
    if (time >= 120) return;
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startExtraction = async () => {


    const technicalDescription =
      "Το ακίνητο βρίσκεται (Within_outside_city_plan), συνολικής επιφάνειας (Αrea Plot) τ.μ , είναι καταχωρημένο στο Εθνικό Κτηματολόγιο με ΚΑΕΚ Kaek_property στην οδό Property_address, Property_number στο Place_property στο Municipality_community με Τ.Κ. Property_postal_code .Πρόκειται για Horizontal_property_name (, επιφανείας Title_area ,το οποίο αποτελεί αυτοτελή οριζόντια ιδιοκτησία κατά τις διατάξεις του Ν.3741/1929 και του Ν.Δ. 1024/1971. Η πολυκατοικία ανεγέρθηκε βάσει της υπ’ αριθμ. Permit_number οικοδομικής άδειας, που εκδόθηκε από την Issuing_authority Η παραπάνω ιδιοκτησία έχει ενταχθεί στο ν.3843/2010 ή 4178/2013 ή 4495/2017 με Α/Α Δήλωσης  Legalization_statement_number ηλεκτρονικό κωδικό, Electronic_code και ημερομηνία υπαγωγής Inclusion_date_legalization από τον /την Engineer_full_name, (Specialty ) με αριθμό μητρώου ΤΕΕ (Tee_registration_number )";
    const technicalDescriptionTwo =
      "Το ακίνητο βρίσκεται (Within_outside_city_plan), δεν εμπίπτει σε Ζώνες Απαγόρευσης (π.χ. Δασική, Αιγιαλός, Ζώνες προστασίας ΥΠΠΟ ή Natura), ούτε εντοπίζεται εντός χαρακτηρισμένων παραδοσιακών οικισμών ή διατηρητέων κελυφών.Δηλώνεται ότι δεν συντρέχουν οι απαγορευτικές περιπτώσεις του άρθρου 1 του Ν.4495/2017, ούτε απαιτείται έγκριση άλλων αρχών. Το κτίσμα είναι νομίμως υφιστάμενο κατά την έννοια του άρθρου 23 του Ν.4495/2017 και συνοδεύεται από τα απαραίτητα νομιμοποιητικά στοιχεία.Οι εργασίες πληρούν τις προϋποθέσεις του άρθρου 2 της ΥΑ ΥΠΕΝ/ΔΑΟΚΑ/43266/1174/13.5.2020, και ως εκ τούτου η άδεια Μικρής Κλίμακας μπορεί να εκδοθεί χωρίς περαιτέρω εγκρίσεις ή έλεγχο ΣΑ.";


    if (newFiles.length === 0) return;

    setIsProcessing(true);
    setProgress(0);
    setIsCompleted(false);
    timerControling();

    const formData = new FormData();

    if (ktimatologio) formData.append("file1", ktimatologio);
    if (contract) formData.append("file2", contract);
    if (permit) formData.append("file3", permit);
    if (Law) formData.append("file4", Law);

    formData.append("project_descriptions", JSON.stringify(description));
    formData.append(
      "technical_description",
      JSON.stringify(technicalDescription)
    );
    formData.append(
      "technical_description_two",
      JSON.stringify(technicalDescriptionTwo)
    );

    try {
      const res = await aiFileUpload(formData).unwrap();
      console.log(res);
      if (res) {
        dispatch(setAiExtractCatchData(res));

        // Simulate AI processing
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
          // setExtractedData(3);
        }, 200);
      }
    } catch (error: any) {
      // need to work here 
      toast.error(error.data.message);
    }
  };



  return (
    <div className="space-y-8">
      {newFiles.length === 0 ? (
        <div className="text-center py-16">
          <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            Please upload documents first to begin extraction.
          </p>
        </div>
      ) : isCompleted ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl  text-center">
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
          {progress === 0 ? (
            <div>
              <div className="w-[300px]">
                <Lottie animationData={aiLoadingExtract} loop={true} />
              </div>
              {/* timeer  */}
              <div className="flex items-center justify-center text-black mt-10">
                <div className="text-center">
                  <p className="text-6xl mt-4 font-mono">
                    {minutes}:{seconds.toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-lg mb-6">
                AI is analyzing your data...
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-center mt-4">
                <span className="text-6xl font-light text-gray-400">
                  {Math.round(progress)}%
                </span>
              </div>
            </>
          )}
        </div>
      ) : (
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
            Processing {newFiles.length} document{newFiles.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
      {currentStep < 6 && (
        <div className="flex justify-end">
          <button
            onClick={nextStep}
            disabled={newFiles.length === 0}
            className={`px-8 py-3 rounded-lg text-white flex items-center justify-center transition-colors ${newFiles.length === 0
              ? "bg-gray-400 cursor-not-allowed" // ✅ disabled color
              : "bg-blue-500 hover:bg-blue-600" // ✅ enabled color
              }`}
          >
            Next <ChevronRight className="inline w-5 h-5 ml-2" />
          </button>
        </div>

      )}
    </div>
  );

  // return (
  //   <div className="space-y-8">
  //     {files.length === 0 ? (
  //       <div className="text-center py-16">
  //         <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
  //         <p className="text-gray-500 text-lg">
  //           Please upload documents first to begin extraction.
  //         </p>
  //       </div>
  //     ) : !isProcessing ? (
  //       <div className="text-center py-16">
  //         <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
  //         <h3 className="text-xl font-semibold text-gray-900 mb-4">
  //           Ready for AI Extraction
  //         </h3>
  //         <p className="text-gray-600 mb-8">
  //           Our AI will analyze your documents and extract key information
  //           automatically.
  //         </p>
  //         <button
  //           onClick={startExtraction}
  //           className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
  //         >
  //           Start AI Extraction
  //         </button>
  //         <p className="text-sm text-gray-500 mt-4">
  //           Processing {files.length} document{files.length !== 1 ? "s" : ""}
  //         </p>
  //       </div>
  //     ) : isProcessing ? (
  //       <div className="space-y-8">
  //         {isLoading ? (
  //           <div className=" min-h-[450px] flex justify-center items-center">
  //             <Lottie animationData={aiLoadingExtract} loop={true} />
  //           </div>
  //         ) : (
  //           <>
  //             <div className="text-center">
  //               <p className="text-gray-600 text-lg mb-8">
  //                 Here is the extracted information. Please review and confirm.
  //               </p>
  //               <p className="text-gray-700 font-medium mb-6">
  //                 AI is refining your resume...
  //               </p>
  //             </div>
  //             {/* Progress Bar */}
  //             <div className="space-y-4">
  //               <div className="w-full bg-gray-200 rounded-full h-3">
  //                 <div
  //                   className="bg-blue-500 h-3 rounded-full transition-all duration-300"
  //                   style={{ width: `${progress}%` }}
  //                 />
  //               </div>

  //               {/* Large Percentage Display */}
  //               <div className="text-center">
  //                 <span className="text-6xl font-light text-gray-300">
  //                   {Math.round(progress)}%
  //                 </span>
  //               </div>
  //             </div>
  //           </>
  //         )}
  //       </div>
  //     ) : (
  //       <div className="flex items-center justify-center min-h-[600px] ">
  //         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl  text-center">
  //           {/* Icon */}
  //           <div className="bg-blue-500 rounded-full p-4 mb-4 inline-block  ">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-8 w-8 text-white"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth="2"
  //                 d="M5 13l4 4L19 7"
  //               />
  //             </svg>
  //           </div>
  //           {/* Message */}
  //           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
  //             successfully
  //           </h2>
  //           <p className="text-gray-600 mb-6 text-sm sm:text-base">
  //             You have success Ai form data Extract.
  //           </p>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default AIExtraction;
