
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

function Test(allData: any) {
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
      <F7D2 allData={allData} />


    </div>
  )
}

export default Test


import { useGetMeQuery, useUpdateProjectMutation } from "@/redux/features/templates/allTemplateSlice";

const { data: userData } = useGetMeQuery()
const signature = userData?.data?.signature

{/* signature  */ }
<div className="flex items-center justify-end p-4">
  <img src={signature} alt="" />
</div>
