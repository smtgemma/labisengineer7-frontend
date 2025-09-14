import {
  setActionSelectName,
  setSelectTemplate,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle, AlertTriangle, CreditCard, Loader2 } from "lucide-react";

import Loading from "@/components/Others/Loading";
import {
  useGetCreditServiceQuery,
  useRemainingCreditQuery,
  useUseCreditsMutation,
} from "@/redux/features/credit/creditSlice";
import { templateName } from "./data";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";

interface ActionSelectionProps {
  selectedActions: string[];
  onActionsChange: (actions: string[]) => void;
  currentStep: number;
  nextStep: () => void;
  canProceed: () => boolean;
}

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
  canProceed,
  currentStep,
  nextStep,
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
  ];

  const [selected, setSelected] = useState<string[]>(["technical", "engineer"]); // default selected
  const [template, setTemplate] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { data: remainingCredit } = useRemainingCreditQuery("");
  const [useCredit] = useUseCreditsMutation();
  const dispatch = useDispatch();
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const id = stepByStepData?.projectId?.id;

  const { data, isLoading } = useGetCreditServiceQuery(id || "", { skip: !id });

  console.log("Credit Service Data:", data);

  // Compute subtotal
  const subtotal = templateName
    .filter((s) => selected.includes(s.id))
    .reduce((acc, s) => acc + s.price, 0);

  // Update template list when selections change
  useEffect(() => {
    const filtered = templateName.filter((s) => selected.includes(s.id));
    setTemplate(filtered);
  }, [selected]);

  // Sync selected templates with Redux
  useEffect(() => {
    dispatch(setSelectTemplate(template));
  }, [template, dispatch]);

  // Sync selected action names with Redux
  useEffect(() => {
    dispatch(setActionSelectName(selected));
  }, [selected, dispatch]);

  // Handle template selection toggle
  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  // Handle checkout & continue
  const handleCheckout = async () => {
    if (subtotal === 0) {
      setError("Please select at least one template.");
      return;
    }

    if (
      !remainingCredit?.data?.credits ||
      remainingCredit.data.credits < subtotal
    ) {
      setError(
        `Insufficient credits. You need ${subtotal} credits, but only have ${remainingCredit?.data?.credits} available.`
      );
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccess(null);

    try {
      const res: any = await useCredit({ totalCredits: subtotal }).unwrap();
      if (res.success) {
        setSuccess("Credit deducted successfully! Proceeding...");
        setTimeout(() => {
          nextStep();
        }, 1500);
      } else {
        setError(res.message || "Failed to deduct credits. Please try again.");
      }
    } catch (err: any) {
      setError(err?.data?.message || "An unexpected error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Select The Templates
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0">
          Choose the required documents to generate. Your selected templates
          will be used to create official files automatically.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Template Selection Panel */}
        <div className="lg:col-span-2 space-y-4">
          {templateName.map((tem, i) => (
            <div
              key={i}
              className={`cursor-pointer border rounded-xl px-6 py-4 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 ${
                selected.includes(tem.id)
                  ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
              onClick={() => toggleSelect(tem.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-base font-medium flex items-center gap-2 text-gray-800">
                    {tem.title}
                    {tem.required && (
                      <span className="text-xs border border-red-700 bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                        Required
                      </span>
                    )}
                  </h3>
                  {/* <p className="text-sm text-gray-600 mt-1">{tem.description}</p> */}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-semibold text-gray-900">
                    {tem.price} credits
                  </span>
                  {tem.required && (
                    <span className="text-xs text-gray-400 mt-1">
                      Mandatory
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Panel */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-26 h-fit">
          <div className="flex items-center mb-6">
            <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Credit Summary</h3>
          </div>

          <div className="space-y-3 mb-6">
            {template.length > 0 ? (
              template.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{item.title}</span>
                  <span className="font-medium text-gray-900">
                    {item.price} pts
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">
                No templates selected
              </p>
            )}
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between font-bold text-lg text-gray-800 mb-6">
            <span>Total</span>
            <span>{subtotal} credits</span>
          </div>

          {/* Credit Balance */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Available Credits</span>
              <span className="font-bold text-blue-700">
                {remainingCredit?.data?.credits || 0}
              </span>
            </div>
          </div>

          {/* Error / Success Messages */}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-4">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg mb-4">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">{success}</p>
            </div>
          )}

          {/* Primary Action Button */}
          <PrimaryButton
            onClick={handleCheckout}
            disabled={
              isProcessing ||
              subtotal === 0 ||
              !remainingCredit?.data?.credits ||
              remainingCredit.data.credits < subtotal ||
              !canProceed()
            }
          >
            <div className="flex items-center justify-center">
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Checkout & Continue"
              )}
            </div>
          </PrimaryButton>

          <p className="text-xs text-gray-500 text-center mt-4">
            Templates are automatically generated using AI. Only pay for what
            you use.
          </p>
        </div>
      </div>
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

{
  /* Actions List */
}
{
  /* <div className="space-y-4">
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
      </div> */
}

{
  /* Services List */
}
{
  /* <div className="lg:col-span-2 space-y-6">
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
        </div> */
}

{
  /* 
THIS IS THE DYNAMIC TEMPLATE NAME SECTION
DO NOT CHNAGE EXCEPT DEDIGN
THAISN */
}

// const userData = useSelector(
//   (state: RootState) => state.user.userData as UserData | null
// );

// dispatch(setActionSelectName(selectedActionsValue));
