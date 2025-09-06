import React, { useState } from "react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { UserData } from "@/redux/features/auth/userDataCatchSlice";
import { setActionSelectName } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

interface ActionSelectionProps {
  selectedActions: string[];
  onActionsChange: (actions: string[]) => void;
}

const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedActions,
  onActionsChange,
}) => {
  const actions = [
    "Generate Engineer Declaration (YA)",
    "Generate Assignment of Responsibility",
    "Create Technical Description",
  ];
  const [selectedActionsValue, setSelectedActionsValue] = useState<string[]>(
    []
  );

  const dispatch = useDispatch();
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const projectCodeId = stepByStepData.projectIdCode;

  const toggleAction = (action: string) => {
    if (selectedActions.includes(action)) {
      onActionsChange(selectedActions.filter((a) => a !== action));
      setSelectedActionsValue(selectedActions.filter((a) => a !== action));
    } else {
      onActionsChange([...selectedActions, action]);
      setSelectedActionsValue([...selectedActions, action]);
    }
  };

  const userData = useSelector(
    (state: RootState) => state.user.userData as UserData | null
  );

  dispatch(setActionSelectName(selectedActionsValue));

  const projectAndUserHexCode =
    userData?.hexToken + `-${projectCodeId?.projectCode}`;

  // auto filed funtion
  // const userId = "bihenda-chine-9981 asdfa";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(projectAndUserHexCode);
      toast.success("successfully Id copy !. Use is id your extension.");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Select Actions
        </h1>
        <p className="text-gray-600 text-lg">
          Here is the extracted information. Please review and confirm.
        </p>
      </div>

      {/* Actions List */}
      <div className="space-y-4">
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
        {/* 
        <div
          className={` flex gap-5
          }`}
        >
          <div className="p-4 w-1/2 rounded-lg   cursor-pointer transition-all duration-200  border-gray-200 bg-white hover:border-gray-30">
            <span className={`font-medium `}>Auto-Fill Government Form</span>
          </div>
      
          <button
            onClick={handleCopy}
            className="bg-blue-400 text-white px-4  rounded hover:bg-blue-700 cursor-pointer"
          >
            Copy User ID
          </button>
        </div> */}
      </div>

      {/* Next Button */}
      {/* <div className="flex justify-end pt-6">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg">
          Next
        </button>
      </div> */}
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
