import FcsvD1 from '@/components/servicesOne/FinalOverview/f-csvGreenFile/fcsvD1'
import FcsvD2 from '@/components/servicesOne/FinalOverview/f-csvGreenFile/fcsvD2'
import FcsvD3 from '@/components/servicesOne/FinalOverview/f-csvGreenFile/fcsvD3'
function page() {
  return (
    <div>
      <h3>test page</h3>
      {/* <FcsvD1/> */}
      {/* <FcsvD2 /> */}
      {/* <FcsvD3/> */}
    </div>
  )
}

export default page




  // < div className = "mb-8 space-y-4" >
  //   {/* Project Name */ }
  //   < div className = "flex items-center justify-between" >
  //                   <span className="min-w-[120px] text-sm font-medium">Έργο:</span>
  //                   <h3 className="flex-1 text-sm text-center uppercase">
  //                       {projectDescriptions || "N/A"}
  //                   </h3>
  //               </ >

  // {/* Property Address */ }
  // < div className = "flex items-center justify-between" >
  //                   <span className="min-w-[120px] text-sm font-medium">Θέση:</span>
  //                   <h3 className="flex-1 text-sm text-center">
  //                       {propertyAddress || "N/A"} {propertyNumber || "N/A"},{" "}
  //                       {propertyPlace || "N/A"}, ΔΗΜΟΣ {municipalityCommunity || "N/A"}, ΤΚ{" "}
  //                       {propertyPostalCode || "N/A"}
  //                   </h3>
  //               </ >

  // {/* Owner Section */ }
  // < div className = "flex items-start justify-between" >
  //                   <span className="min-w-[120px] text-sm font-medium">Ιδιοκτήτης:</span>
  //                   <div className="flex-1 text-center">
  //                       {owner?.length > 0 ? (
  //                           <h3 className="text-sm">
  //                               {owner
  //                                   .map(
  //                                       (e: any) =>
  //                                           `${e.firstName || e.first_name || "N/A"} ${e.lastName || e.last_name || "N/A"
  //                                           }`
  //                                   )
  //                                   .join(", ")}
  //                           </h3>
  //                       ) : (
  //                           <h3 className="text-sm">N/A</h3>
  //                       )}
  //                   </div>
  //               </ >

  //           </div >

