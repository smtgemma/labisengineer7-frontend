"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FaRegEdit } from "react-icons/fa"

interface FormData {
  project_description?: string
  ydom_name: string
  submission_date?: string
  protocol_number?: string
}

interface allDataProps {
  protocolNumber?: string
  project_description?: string
  ydom?: string
  submission_date?: string
}

export default function F6D12({ allData }: { allData: allDataProps }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    projectDescription: allData.project_description || "PROJECT DESCRIPTION",
    responsibleAuthority: allData.ydom || "YDOM",
    submissionDate: allData.submission_date || "DATE OF PROJECT",
    protocolNumber: allData.protocolNumber || "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // for editing data
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({})

  const onSubmit = (data: FormData) => {
    console.log("Updated Data:", data)
    setFormData({
      projectDescription: data.project_description || formData.projectDescription,
      responsibleAuthority: data.ydom_name || formData.responsibleAuthority,
      submissionDate: data.submission_date || formData.submissionDate,
      protocolNumber: data.protocol_number || formData.protocolNumber,
    })
    reset()
    setIsEditModalOpen(false)
  }

  return (
    <div className="max-w-[794px] mx-auto bg-[#99cc00] pb-35 p-5">
      {/* Edit button */}
      <div className="text-right -mt-3">
        <button className="mt-1 px-4 py-1" onClick={() => setIsEditModalOpen(true)}>
          <FaRegEdit className="text-black text-2xl cursor-pointer" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-xl font-semibold text-black tracking-wide">
            ΣΤΟΙΧΕΙΑ ΔΙΑΧΕΙΡΙΣΗΣ ΑΠΟΒΛΗΤΩΝ
          </h1>
        </div>

        {/* Displayed Data */}
        <div className="space-y-8">
          {/* Project Title */}
          <div className="grid grid-cols-5">
            <label className="text-black font-bold text-sm col-span-2">ΤΙΤΛΟΣ ΕΡΓΟΥ:</label>
            <div className="col-span-3">
              <input
                type="text"
                value={formData.projectDescription}
                readOnly
                className="w-full p-3 border border-black bg-gray-100 text-black text-base"
                style={{ minHeight: "48px" }}
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
                value={formData.responsibleAuthority}
                readOnly
                className="w-full p-3 border border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
              />
            </div>
          </div>

          {/* Submission Date */}
          <div className="grid grid-cols-5">
            <label className="text-black font-bold text-sm col-span-2">ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΒΟΛΗΣ:</label>
            <div className="col-span-3">
              <input
                type="text"
                value={formData.submissionDate}
                readOnly
                className="w-full p-3 border border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
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
                value={formData.protocolNumber || "-"}
                readOnly
                className="w-full p-3 border border-black bg-white text-black text-base"
                style={{ minHeight: "48px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-3xl relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
              onClick={() => setIsEditModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4">✍️ Edit Data</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project Description */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-medium">Περιγραφή Έργου *:</label>
                <input
                  type="text"
                  {...register("project_description", { required: "This field is required" })}
                  className="flex-1 border p-2 rounded text-sm"
                  defaultValue={formData.projectDescription}
                />
                {errors.project_description && (
                  <span className="text-red-500 text-xs">{errors.project_description.message}</span>
                )}
              </div>

              {/* Responsible Authority */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Αρμόδια Αρχή *:</label>
                <input
                  type="text"
                  {...register("ydom_name", { required: "This field is required" })}
                  className="flex-1 border p-2 rounded text-sm"
                  defaultValue={formData.responsibleAuthority}
                />
                {errors.ydom_name && (
                  <span className="text-red-500 text-xs">{errors.ydom_name.message}</span>
                )}
              </div>

              {/* Submission Date */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Ημερομηνία Υποβολής:</label>
                <input
                  type="text"
                  {...register("submission_date")}
                  className="flex-1 border p-2 rounded text-sm"
                  defaultValue={formData.submissionDate}
                />
              </div>

              {/* Protocol Number */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Αρ. Πρωτοκόλλου:</label>
                <input
                  type="text"
                  {...register("protocol_number")}
                  className="flex-1 border p-2 rounded text-sm"
                  defaultValue={formData.protocolNumber}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end md:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
