import React from 'react'
import RightViewCard from './WorksCard/RightViewCard'
import workImg from '@/assets/landing-page/login.png'

export default function HowItWorks() {
  return (
    <div className='bg-background'>
      <h2 className="text-3xl md:text-5xl font-bold text-center  text-primary mb-12 pt-[100px]">
        How It Works
      </h2>
      <RightViewCard
      workImg={workImg}
        stepNumber="Step 1"
        title="Register or Log In"
        description="Create a free account or log in to your existing one to access your personalized dashboard."
      
      />
      <RightViewCard
      workImg={workImg}
        stepNumber="Step- 2"
        title="Select Service Type"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['HTK (Electronic Building ID)', 'e-Adeies (Building Permit)', 'Law 4495/17 Declarations','Engineer Certificate']}
        className='flex-row-reverse'
      />
      <RightViewCard
      workImg={workImg}
        stepNumber="Step- 3 "
        title="Choose Subcategory"
        description="Based on your selected service, pick a multiple subcategory "     
      />
      <RightViewCard
        stepNumber="Step- 4"
        title="Upload your Documents"
        description="Upload all required documents such as floor plans, contracts, declarations, or permit copies."
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        className='flex-row-reverse'
        workImg={workImg}
      />
      <RightViewCard
        stepNumber="Step- 5"
        title="AI Data Extraction"
        description="Our AI engine automatically reads and extracts critical data fields (like KAEK, usage, coordinates, owner name, permit number)."
       
        workImg={workImg}
     
      />
      <RightViewCard
        stepNumber="Step- 6"
        title="Review & Edit"
        description="Manually verify and edit the extracted data if needed to ensure accuracy and compliance."
        formats={['Json', 'CSV']}
        className='flex-row-reverse'
        workImg={workImg}
      />
      <RightViewCard
        stepNumber="Step- 7"
        title="Generate & Submit"
        description="Generate professional documents (PDF, DOCX, CSV) and auto-fill online government forms using automation tools."
         workImg={workImg}
      />
    

    </div>
  )
}
