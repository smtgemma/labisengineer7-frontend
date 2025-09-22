
// import F5D2 from '@/components/CreateProject/FinalOverview/f-05/f5D2/page'
// import F5D3 from '@/components/CreateProject/FinalOverview/f-05/f5D3/page'
// import F5D4 from '@/components/CreateProject/FinalOverview/f-05/f5D4/page'
// import F5D6 from '@/components/CreateProject/FinalOverview/f-05/f5D6/page'
// import F5D7 from '@/components/CreateProject/FinalOverview/f-05/f5D7/page'
// import F5D8 from '@/components/CreateProject/FinalOverview/f-05/f5D8/page'
// import F5D9 from '@/components/CreateProject/FinalOverview/f-05/f5D9/page'
// import F5D10 from '@/components/CreateProject/FinalOverview/f-05/f5D10/page'
// import F5D11 from '@/components/CreateProject/FinalOverview/f-05/f5D11/page'
// import F5D12 from '@/components/CreateProject/FinalOverview/f-05/f5D12/page'
// import F5D13 from '@/components/CreateProject/FinalOverview/f-05/f5D13/page'
// import F5D14 from '@/components/CreateProject/FinalOverview/f-05/f5D14/page'
// import F5D15 from '@/components/CreateProject/FinalOverview/f-05/f5D15/page'
// import F5D16 from '@/components/CreateProject/FinalOverview/f-05/f5D16/page'
// import F5D17 from '@/components/CreateProject/FinalOverview/f-05/f5D17/page'

import F7D1 from '@/components/CreateProject/FinalOverview/f-07/f7D1/page'
import F7D2 from '@/components/CreateProject/FinalOverview/f-07/f7D2/page'

function Test(allData : any) {
  return (
    <div>
        {/* <F5D2 allData={allData}/>
        <F5D3 allData={allData}/>
        <F5D4 allData={allData}/> */}

        {/* <F5D6 allData={allData}/>
        <F5D7 allData={allData}/>
        <F5D8 allData={allData}/>
        <F5D9 allData={allData}/>
        <F5D10 allData={allData}/>
        <F5D11 allData={allData}/>
        <F5D12 allData={allData}/>
        <F5D13 allData={allData}/>
        <F5D14 allData={allData}/>
        <F5D15 allData={allData}/>
        <F5D16 allData={allData}/>
        <F5D17 allData={allData}/> */}

        {/* <F7D1 allData={allData}/> */}
        <F7D2 allData={allData}/>


    </div>
  )
}

export default Test


// "use client";
// import React, { useState } from "react";

// function Test() {
//   const [data, setData] = useState<any[]>([]);

//   const a = [
//     { title: "a1" },
//     { title: "a2" },
//     { title: "a3" },
//     { title: "a4" },
//     { title: "a5" },
//   ];

//   const b = [
//     { title: "b1" },
//     { title: "b2" },
//     { title: "b3" },
//     { title: "b4" },
//     { title: "b5" },
//   ];

//   const c = [
//     { title: "c1" },
//     { title: "c2" },
//     { title: "c3" },
//     { title: "c4" },
//     { title: "c5" },
//   ];

//   console.log(data, "data===========================");

//   const handleClick = (arr: any[]) => {
//     // check if first item of array exists in state → means array already added
//     const exists = data.some((item) => arr.some((x) => x.title === item.title));

//     if (exists) {
//       // remove the whole array (filter out all its items)
//       setData((prev) => prev.filter((item) => !arr.some((x) => x.title === item.title)));
//     } else {
//       // add the array
//       setData((prev) => [...prev, ...arr]);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={() => handleClick(a)}
//         className="m-2 p-2 bg-blue-500 text-white rounded"
//       >
//         Εσωτερικές διαρρυθμίσεις_6
//       </button>

//       <button
//         onClick={() => handleClick(b)}
//         className="m-2 p-2 bg-green-500 text-white rounded"
//       >
//         Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων_5
//       </button>

//       <button
//         onClick={() => handleClick(c)}
//         className="m-2 p-2 bg-purple-500 text-white rounded"
//       >
//         Εργασίες χρωματισμών & επισκευών με χρήση ικριωμάτων_7
//       </button>

//       <div className="mt-4">
//         <h3>Collected Array:</h3>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     </div>
//   );
// }

// export default Test;

