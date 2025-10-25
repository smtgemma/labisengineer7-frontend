"use client";

import React, { useState } from "react";
interface allDataProps {
  owner_address: string;
  owner_city: string;
  owner_name: string;
  owner_postal_code: string;
  project_description?: string;
}

export default function F1D4({ allData }: { allData: allDataProps }) {
  const {
    project_description,
  } = allData;

  const [formData, setFormData] = useState({
    projectDescription: project_description || "PROJECT DESCRIPTION",
    responsibleAuthority: "YDOM",
    submissionDate: "DATE OF PROJECT",
    protocolNumber: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
          <div className="flex items-center">
            <label className="text-black font-bold text-sm flex-1">
              ΤΙΤΛΟΣ ΕΡΓΟΥ:
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={formData.projectDescription}
                onChange={(e) =>
                  handleInputChange("projectDescription", e.target.value)
                }
                className="w-full p-3 border-1 border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
                placeholder={project_description || "Enter project description"}
              />
            </div>
          </div>

          {/* Responsible Authority */}
          <div className="flex items-center">
            <label className="text-black font-bold text-sm flex-1">
              ΑΡΜΟΔΙΑ ΑΡΧΗ ΠΟΥ ΥΠΟΒΑΛΛΕΤΑΙ:
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={formData.responsibleAuthority}
                onChange={(e) =>
                  handleInputChange("responsibleAuthority", e.target.value)
                }
                className="w-full p-3 border-1 border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
                placeholder="Enter responsible authority"
              />
            </div>
          </div>

          {/* Submission Date */}
          <div className="flex items-center">
            <label className="text-black font-bold text-sm flex-1">
              ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΒΟΛΗΣ:
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={formData.submissionDate}
                onChange={(e) =>
                  handleInputChange("submissionDate", e.target.value)
                }
                className="w-full p-3 border-1 border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
                placeholder="Enter submission date"
              />
            </div>
          </div>

          {/* Protocol Number */}
          <div className="flex items-center">
            <label className="text-black font-bold text-sm flex-1">
              ΑΡ. ΠΡΩΤΟΚΟΛΛΟΥ ΚΑΤΑΘΕΣΗΣ:
            </label>
            <div className="flex-1">
              <input
                type="text"
                value={formData.protocolNumber}
                onChange={(e) =>
                  handleInputChange("protocolNumber", e.target.value)
                }
                className="w-full p-3 border-1 border-black bg-white text-black text-base"
                placeholder="Enter protocol number"
                style={{ minHeight: "48px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}