import FcsvD1 from '@/components/CreateProject/FinalOverview/f-csvGreenFile/fcsvD1'
import FcsvD2 from '@/components/CreateProject/FinalOverview/f-csvGreenFile/fcsvD2'
import FcsvD3 from '@/components/CreateProject/FinalOverview/f-csvGreenFile/fcsvD3'
function page() {
  return (
    <div>
      {/* <FcsvD1/> */}
      <FcsvD2 />
      {/* <FcsvD3/> */}
    </div>
  )
}

export default page




// {
//   isEditModalOpen && (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
//         {/* Close button */}
//         <button
//           className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
//           onClick={() => setIsEditModalOpen(false)}
//         >
//           ✕
//         </button>

//         <h2 className="text-lg font-bold mb-4">✍️ Edit Data</h2>
//         <div>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-4 p-4 border rounded-lg bg-white shadow-md"
//           >
//             {/* Project */}
//             <div className="flex items-center gap-4">
//               <label className="font-medium w-1/8">Έργο *:</label>
//               <input
//                 defaultValue={projectDescription || "Project Description "}
//                 type="text"
//                 {...register("projectDescription", { required: "projectDescription is required" })}
//                 className="flex-1 border p-2 rounded text-sm"
//               />
//             </div>

//             {/* Address */}
//             <div className="flex items-center gap-4">
//               <label className="font-medium w-1/8">Θέση*:</label>
//               <div className="flex-1 grid grid-cols-3 gap-2">
//                 <input
//                   type="text"
//                   defaultValue={propertyAddress || "propertyAddress"}
//                   {...register("propertyAddress", { required: "propertyAddress is required" })}
//                   className="border p-2 rounded text-sm"
//                 />
//                 <input
//                   type="text"
//                   defaultValue={propertyNumber || "propertyNumber"}
//                   {...register("propertyNumber", { required: "propertyNumber is required" })}
//                   className="border p-2 rounded text-sm"
//                 />
//                 <input
//                   type="text"
//                   defaultValue={municipalityCommunity || "municipalityCommunity"}
//                   {...register("municipalityCommunity", { required: "municipalityCommunity is required" })}
//                   className="border p-2 rounded text-sm"
//                 />
//                 <input
//                   type="text"
//                   defaultValue={propertyPostalCode || "propertyPostalCode"}
//                   {...register("propertyPostalCode", { required: "propertyPostalCode is required" })}
//                   className="border p-2 rounded text-sm"
//                 />
//                 <input
//                   type="text"
//                   defaultValue={propertyPlace || "propertyPlace"}
//                   {...register("propertyPlace", { required: "propertyPlace is required" })}
//                   className="border p-2 rounded text-sm"
//                 />
//               </div>
//             </div>
//             {/* technical description */}
//             <div className="w-full space-y-2">
//               <div className="w-full">
//                 <input
//                   type="text"
//                   defaultValue={technicalDescription || "technicalDescription"}
//                   {...register("technicalDescription", {
//                     required: "technicalDescription is required",
//                   })}
//                   className="border p-2 rounded text-sm w-full"
//                 />
//               </div>
//               <div className="w-full">
//                 <input
//                   type="text"
//                   defaultValue={technicalDescriptionTwo || "technicalDescriptionTwo"}
//                   {...register("technicalDescriptionTwo", {
//                     required: "technicalDescriptionTwo is required",
//                   })}
//                   className="border p-2 rounded text-sm w-full"
//                 />
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
//               >
//                 Update
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
