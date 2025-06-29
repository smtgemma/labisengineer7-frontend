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
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
      />
      <RightViewCard
      workImg={workImg}
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
        className='flex-row-reverse'
      />
      <RightViewCard
      workImg={workImg}
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
     
      />
      <RightViewCard
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
        className='flex-row-reverse'
        workImg={workImg}
      />
      <RightViewCard
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
        workImg={workImg}
     
      />
      <RightViewCard
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
        className='flex-row-reverse'
        workImg={workImg}
      />
      <RightViewCard
        stepNumber="Step- 2"
        title="Upload your Documents"
        description="Our platform supports the following formats and guides you step-by-step."
        list={['Scan and upload project files', 'Verify required fields', 'Auto-preview data']}
        formats={['PDF', 'DOCX', 'JPG', 'PNG']}
        buttonText="Continue"
        buttonLink="#"
         workImg={workImg}
      />
    

    </div>
  )
}
