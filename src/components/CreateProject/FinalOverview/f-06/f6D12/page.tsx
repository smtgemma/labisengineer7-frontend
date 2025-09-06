
"use client"
  import React, { useState } from 'react';
  interface allDataProps {
  ydom_name: string
  project_description?: string
}

  export default function f6D12({ allData }: { allData: allDataProps }) {
    
    const {
        ydom_name,
        project_description,
    } = allData;

    const [formData, setFormData] = useState({
      projectDescription: 'PROJECT DISCRIPISON',
      responsibleAuthority: 'YDOM',
      submissionDate: 'DATE OF PROJECT',
      protocolNumber: ''
    });

    const handleInputChange = (field: any, value: any) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    return (
      <div className="max-w-[794px] mx-auto bg-[#99cc00] pb-35 p-5">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-xl font-semibold text-black tracking-wide">
              ΣΤΟΙΧΕΙΑ ΔΙΑΧΕΙΡΙΣΗΣ ΑΠΟΒΛΗΤΩΝ
            </h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            {/* Project Title */}
            <div className="grid grid-cols-5">
              <label className="text-black font-bold text-sm col-span-2">
                ΤΙΤΛΟΣ ΕΡΓΟΥ:
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  value={project_description || formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  className="w-full p-3 border-1 border-black bg-gray-100 text-black text-base"
                  style={{ minHeight: '48px' }}
                />
              </div>
            </div>

            {/* Responsible Authority */}
            <div className="grid grid-cols-5">
              <label className="text-black font-bold text-sm col-span-2">
                ΑΡΜΟΔΙΑ ΑΡΧΗ ΠΟΥ ΥΠΟΒΑΛΛΕΤΑΙ:
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  value={ydom_name || formData.responsibleAuthority}
                  onChange={(e) => handleInputChange('responsibleAuthority', e.target.value)}
                  className="w-full p-3 border-1 border-black bg-white text-black text-base"
                  style={{ minHeight: '48px' }}
                />
              </div>
            </div>

            {/* Submission Date */}
            <div className="grid grid-cols-5">
              <label className="text-black font-bold text-sm col-span-2">
                ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΒΟΛΗΣ:
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  value={formData.submissionDate}
                  onChange={(e) => handleInputChange('submissionDate', e.target.value)}
                  className="w-full p-3 border-1 border-black bg-white text-black text-base"
                  style={{ minHeight: '48px' }}
                />
              </div>
            </div>

            {/* Protocol Number */}
            <div className="grid grid-cols-5">
              <label className="text-black font-bold text-sm col-span-2">
                ΑΡ. ΠΡΩΤΟΚΟΛΛΟΥ ΚΑΤΑΘΕΣΗΣ:
              </label>
              <div className="col-span-3">
                <input
                  type="text"
                  value={formData.protocolNumber}
                  onChange={(e) => handleInputChange('protocolNumber', e.target.value)}
                  className="w-full p-3 border-1 border-black bg-white text-black text-base"
                  placeholder="-"
                  style={{ minHeight: '48px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }