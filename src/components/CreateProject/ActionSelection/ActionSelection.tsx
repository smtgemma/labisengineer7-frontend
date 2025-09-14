import {
  setActionSelectName,
  setSelectTemplate,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "@/components/Others/Loading";
import { useGetCreditServiceQuery, useRemainingCreditQuery, useUseCreditsMutation } from "@/redux/features/credit/creditSlice";

interface Service {
  id: string;
  title: string;
  price: number;
  description: string;
  delivery: string;
  required?: boolean;
}

interface TemplateName {
  id: string;
  title: string;
  price: number;
  required?: boolean;
}

const templateName: TemplateName[] = [
  {
    id: "owner_assignment_1",
    title: "YΔ Ανάθεσης Ιδιοκτήτη",
    price: 0.5,
  },
  {
    id: "engineer_assumption_2",
    title: "YΔ Ανάληψης Έργου Μηχανικού",
    price: 0.5,
  },
  {
    id: "bearing_organization_3",
    title: "YΔ Φέροντα Οργανισμού",
    price: 0.5,
  },
  // {
  //   id: "co_owners_4",
  //   title: "YΔ Συνιδιοκτητών",
  //   price: 0.5,
  // },
  {
    id: "technical_report_5",
    title: "Τεχνική Έκθεση / Τεχνική Περιγραφή Έργου",
    price: 1,
  },
  {
    id: "detailed_budget_6",
    title: "Αναλυτικός Προϋπολογισμός Εργασιών",
    price: 0.5,
  },
  {
    id: "safety_file_7",
    title: "ΣΑΥ – ΦΑΥ (Σχέδιο & Φάκελος Ασφάλειας & Υγείας)",
    price: 1,
  },
  {
    id: "waste_management_8",
    title: "ΣΔΑ (Σχέδιο Διαχείρισης Αποβλήτων)",
    price: 0.5,
  },
  {
    id: "table_3_9",
    title: "Πίνακας 3",
    price: 0.5,
  },
  {
    id: "active_fire_protection_10",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ενεργητικής Πυροπροστασίας",
    price: 0.5,
  },
  {
    id: "passive_fire_protection_11",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Παθητικής Πυροπροστασίας",
    price: 0.5,
  },
  {
    id: "electrical_mechanical_12",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Η/Μ Εγκαταστάσεων",
    price: 0.5,
  },
  {
    id: "plumbing_sewage_13",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Μελέτης Ύδρευσης/Αποχέτευσης",
    price: 0.5,
  },
  {
    id: "notarial_deed_14",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Συμβολαιογραφικής Πράξης",
    price: 0.5,
  },
  {
    id: "co_owners_consent_15",
    title: "Ενημερωτικό Σημείωμα μη απαίτησης Συναίνεσης Συνιδιοκτητών",
    price: 0.5,
  },
  {
    id: "autofill_16",
    title: "Autofill (προαιρετικό add-on)",
    price: 1,
  },
];

const services: Service[] = [
  {
    id: "technical",
    title: "Generate Engineer Declaration (YA)",
    price: 300,
    description: "Comprehensive technical analysis show the tempatete",
    delivery: "10–15 business days",
    required: true,
  },
  {
    id: "Responsibility",
    title: "Generate Assignment of Responsibility",
    price: 200,
    description: "Official engineering certificate for Article 30 compliance",
    delivery: "5 -7 business days",
  },
  {
    id: "supporting",
    title: "Create Technical Description",
    price: 100,
    description: "Additional declarations and Technical Description.",
    delivery: "1–3 business days",
  },
];

interface ActionSelectionProps {
  selectedActions: string[];
  onActionsChange: (actions: string[]) => void;
  currentStep: number
  nextStep: () => void
  canProceed: () => boolean
}

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
  canProceed,
  currentStep,
  nextStep
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
  ];
  const [selectedActionsValue, setSelectedActionsValue] = useState<string[]>(
    []
  );
  const [selected, setSelected] = useState<string[]>(["technical", "engineer"]);
  const [template, setTemplate] = useState([]);
  const { data: remainingCredit } = useRemainingCreditQuery("")
  const [useCredit] = useUseCreditsMutation()
  const dispatch = useDispatch();
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const id = stepByStepData?.projectId?.id;
  const { data, isLoading } = useGetCreditServiceQuery(id);
  console.log(data);

  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const subtotal = templateName
    .filter((s) => selected.includes(s.id))
    .reduce((acc, s) => acc + s.price, 0);

  useEffect(() => {

    const filtered: any = templateName.filter((s) => selected.includes(s.id));
    if (filtered.length > 0) {
      setTemplate(filtered);
    } else {
      setTemplate([]);
    }

  }, [selected]);

  dispatch(setSelectTemplate(template));

  const toggleAction = (action: string) => {
    if (selectedActions.includes(action)) {
      onActionsChange(selectedActions.filter((a) => a !== action));
      setSelectedActionsValue(selectedActions.filter((a) => a !== action));
    } else {
      onActionsChange([...selectedActions, action]);
      setSelectedActionsValue([...selectedActions, action]);
    }
  };

  console.log("Remaining Credit", remainingCredit?.data?.credits)
  // const userData = useSelector(
  //   (state: RootState) => state.user.userData as UserData | null
  // );

  // dispatch(setActionSelectName(selectedActionsValue));

  useEffect(() => {
    if (selected.length > 0) {
      dispatch(setActionSelectName(selected));
    }
  }, [selected]);


  const handleUseCredit = async (number: number) => {
    console.log(number)
    const payload = { totalCredits: number }
    const res = await useCredit(payload)
    console.log(res)
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Select The Templates
        </h1>
        <p className="text-gray-600 text-lg">
          Here is the template information. Please choose the template.
        </p>
      </div>

      {/* Actions List */}
      {/* <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={action}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedActions.includes(action)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
            onClick={() => toggleAction(action)}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-medium ${
                  selectedActions.includes(action)
                    ? "text-blue-900"
                    : "text-gray-900"
                }`}
              >
                {action}
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedActions.includes(action)
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedActions.includes(action) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="container mx-auto  grid lg:grid-cols-3 gap-6">
        {/* Services List */}
        {/* <div className="lg:col-span-2 space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`cursor-pointer border-2 rounded-lg shadow-md hover:bg-blue-100 transition-all hover:shadow-lg p-6 ${
                selected.includes(service.id)
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => toggleSelect(service.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {service.title}
                    {service.required && (
                      <span className="text-xs border border-blue-700 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                        Required
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{service.price}</p>
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} /> {service.delivery}
                  </p>
                </div>
              </div>
       
            </div>
          ))}
        </div> */}

        {/* 
THIS IS THE DYNAMIC TEMPLATE NAME SECTION
DO NOT CHNAGE EXCEPT DEDIGN
THAISN */}
        {/* template Name  */}
        <div className="lg:col-span-2 space-y-2">
          {templateName.map((tem, i) => (
            <div
              key={i}
              className={`cursor-pointer border-2 rounded-lg  hover:bg-blue-100 transition-all hover:shadow-sm px-4 py-2 ${selected.includes(tem.id)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
                }`}
              onClick={() => toggleSelect(tem.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-medium flex items-center gap-2">
                    {tem.title}
                    {tem.required && (
                      <span className="text-xs border border-blue-700 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                        Required
                      </span>
                    )}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-base font-medium">{tem.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="p-6 shadow-md rounded-2xl border border-gray-200">
            <div>
              <h3 className="text-lg font-bold mb-4">Credit Summary</h3>
            </div>
            <div className="space-y-2 text-sm">
              {templateName
                .filter((s) => selected.includes(s.id))
                .map((s) => (
                  <div key={s.id} className="flex justify-between">
                    <span>{s.title}</span>
                    <span className="tex-block font-semibold">{s.price}</span>
                  </div>
                ))}
            </div>
            <hr className="my-3 border-gray-400" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>{subtotal}</span>
            </div>

            <button onClick={() => handleUseCredit(subtotal)} className="w-full cursor-pointer mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Proceed to Credit
            </button>

            <div className="mt-6 text-xs text-gray-500 text-center">
              <p className="font-bold mb-1 text-lg">My Total Credit:</p>
              <p className="font-bold  text-lg">{remainingCredit?.data?.credits}</p>
            </div>
          </div>
        </div>
      </div>
      {currentStep < 6 && (
        <div className="flex justify-end mt-4">
          <button
            onClick={nextStep}
            // disabled={canProceed()}
            className={`px-8 py-3 rounded-lg text-white flex items-center justify-center transition-colors ${canProceed()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionSelection;

// "use client"

// import React, { useState } from "react";
// import { toast } from "sonner";
// import { useSelector,useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import { UserData } from "@/redux/features/auth/userDataCatchSlice";
// import { setTempateName } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

// interface ActionSelectionProps {
//   selectedActions: string[];
//   onActionsChange: (actions: string[]) => void;
// }

// const ActionSelection: React.FC<ActionSelectionProps> = ({
//   selectedActions,
//   onActionsChange,
// }) => {
//   const actions = [
//     "Generate Engineer Declaration (YA)",
//     "Generate Assignment of Responsibility",
//     "Create Technical Description",
//     "Export CSV File",
//   ];
//   const dispatch = useDispatch();
//   const [allCategories, setAllCategories] = useState<string[]>([])

//   const stepByStepData: any = useSelector((state: RootState) => state.aiData);
//   const subCategoryData = stepByStepData.subcategory;
//   //   console.log(subCategoryData.ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗΣ_ΚΑΙ_ΕΠΙΣΚΕΥΗΣ_ΕΤΕΡΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_Αυτοψία
//   // , "====================================");
//   //   console.log(subCategoryData, "all data ==="
//   // , "====================================");
//   const project = stepByStepData.projectIdCode;
//   const allInputData = stepByStepData.aiInputData;

//   const toggleAction = (action: string) => {
//     if (selectedActions.includes(action)) {
//       onActionsChange(selectedActions.filter((a) => a !== action));
//     } else {
//       onActionsChange([...selectedActions, action]);
//     }
//   };

//   const userData = useSelector(
//     (state: RootState) => state.user.userData as UserData | null
//   );

//   const projectAndUserHexCode = `${userData?.hexToken}-${project?.projectCode}`;

//   // auto filed funtion
//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(projectAndUserHexCode);
//       toast.success("successfully Id copy !. Use is id your extension.");
//     } catch (err) {
//       console.error("Copy failed:", err);
//     }
//   };

//   const categroyTemplate = (cat: string) => {
//    toggleAction(cat);
//     setAllCategories(prev => {
//       if (prev.includes(cat)) {
//         return prev.filter(item => item !== cat);
//       } else {
//         return [...prev, cat];
//       }
//     });

//   }

//   dispatch(setTempateName(allCategories));

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Select Actions
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Here is the extracted information. Please review and confirm.
//         </p>
//       </div>

//       {/* Actions List */}
//       <div className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {subCategoryData.ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΑΜΑΞΙ_ΧΡΗΣΗ?.map((action: string, index: string) => (
//             <div
//               key={action}
//               className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${selectedActions.includes(action)
//                 ? "border-blue-500 bg-blue-50"
//                 : "border-gray-200 bg-white hover:border-gray-300"
//                 }`}
//               onClick={() => categroyTemplate(action)}
//             >
//               <div className="flex items-center justify-between">
//                 <span
//                   className={`font-medium ${selectedActions.includes(action)
//                     ? "text-blue-900"
//                     : "text-gray-900"
//                     }`}
//                 >
//                   {action}
//                 </span>
//                 <div
//                   className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedActions.includes(action)
//                     ? "border-blue-500 bg-blue-500"
//                     : "border-gray-300"
//                     }`}
//                 >
//                   {selectedActions.includes(action) && (
//                     <div className="w-2 h-2 bg-white rounded-full" />
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {subCategoryData.ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗΣ_ΚΑΙ_ΕΠΙΣΚΕΥΗΣ_ΕΤΕΡΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_Αυτοψία?.map((action: string, index: string) => (
//             <div
//               key={action}
//               className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${selectedActions.includes(action)
//                 ? "border-blue-500 bg-blue-50"
//                 : "border-gray-200 bg-white hover:border-gray-300"
//                 }`}
//               onClick={() => categroyTemplate(action)}
//             >
//               <div className="flex items-center justify-between">
//                 <span
//                   className={`font-medium ${selectedActions.includes(action)
//                     ? "text-blue-900"
//                     : "text-gray-900"
//                     }`}
//                 >
//                   {action}
//                 </span>
//                 <div
//                   className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedActions.includes(action)
//                     ? "border-blue-500 bg-blue-500"
//                     : "border-gray-300"
//                     }`}
//                 >
//                   {selectedActions.includes(action) && (
//                     <div className="w-2 h-2 bg-white rounded-full" />
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>

//         <div
//           className={` flex gap-5
//           }`}
//         >
//           <div className="p-4 w-1/2 rounded-lg   cursor-pointer transition-all duration-200  border-gray-200 bg-white hover:border-gray-30">
//             <span className={`font-medium `}>Auto-Fill Government Form</span>
//           </div>
//           {/* auto copy file  */}
//           <button
//             onClick={handleCopy}
//             className="bg-blue-400 text-white px-4  rounded hover:bg-blue-700 cursor-pointer"
//           >
//             Copy User ID
//           </button>
//         </div>
//       </div>

//       {/* Next Button */}
//       {/* <div className="flex justify-end pt-6">
//         <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg">
//           Next
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default ActionSelection;
