"use client"

import React, { useState } from "react";
import { format } from "date-fns"

interface AllDataProps {
    owners: any[];
    projectDescriptions: string;
    ydom: string;
    createdAt: string;
}

export default function FcsvD0({ allData }: { allData: AllDataProps }) {
    const { projectDescriptions, createdAt, ydom } = allData || {};

    const [formData, setFormData] = useState({
        projectDescriptions: projectDescriptions || "N/A",
        ydom: ydom || "YDOM",
        submissionDate: createdAt && format(new Date(createdAt), "dd/MM/yyyy") || "DATE OF PROJECT",
        protocolNumber: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = () => {
        console.log("Updated data:", formData);
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-[794px] mx-auto bg-[#99cc00] pb-35 p-5 arial">
            {/* <div className="text-right -mt-6">
                <button
                    className="mt-1 px-4 py-1"
                    onClick={() => setIsModalOpen(true)}
                >
                    <FaRegEdit className="text-black text-2xl cursor-pointer" />
                </button>
            </div> */}
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-xl font-semibold text-black tracking-wide">
                        ΣΤΟΙΧΕΙΑ ΔΙΑΧΕΙΡΙΣΗΣ ΑΠΟΒΛΗΤΩΝ
                    </h1>
                </div>

                {/* ---- Inline Form ---- */}
                <div className="space-y-8">
                    {/* Project Title */}
                    <div className="flex items-center">
                        <label className="text-black font-bold text-sm flex-1">
                            ΤΙΤΛΟΣ ΕΡΓΟΥ:
                        </label>
                        <div className="flex-1">
                            <input
                                type="text"
                                value={formData.projectDescriptions}
                                onChange={(e) =>
                                    handleInputChange("projectDescriptions", e.target.value)
                                }
                                className="w-full p-3 border border-black bg-gray-100 text-black text-base"
                                style={{ minHeight: "48px" }}
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
                                value={formData.ydom}
                                onChange={(e) => handleInputChange("ydom", e.target.value)}
                                className="w-full p-3 border border-black bg-white text-black text-base"
                                style={{ minHeight: "48px" }}
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
                                className="w-full p-3 border border-black bg-gray-100 text-black text-base"
                                style={{ minHeight: "48px" }}
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
                                className="w-full p-3 border border-black bg-white text-black text-base"
                                placeholder="-"
                                style={{ minHeight: "48px" }}
                            />
                        </div>
                    </div>
                </div>

                {/* ---- Update Modal ---- */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                            {/* Modal Buttons */}
                            <div className="flex justify-between gap-3">
                                <h2 className="text-lg font-semibold mb-4">Edit Information</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                            <button
                                className="absolute top-4 right-2 text-red-600 bg-gray-200 px-2 py-1 rounded-full hover:text-red-600 cursor-pointer"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✕
                            </button>

                            {/* Modal Form Fields */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-bold mb-1">
                                        ΤΙΤΛΟΣ ΕΡΓΟΥ:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.projectDescriptions}
                                        onChange={(e) =>
                                            handleInputChange("projectDescriptions", e.target.value)
                                        }
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1">
                                        ΑΡΜΟΔΙΑ ΑΡΧΗ ΠΟΥ ΥΠΟΒΑΛΛΕΤΑΙ:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.ydom}
                                        onChange={(e) => handleInputChange("ydom", e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1">
                                        ΗΜΕΡΟΜΗΝΙΑ ΥΠΟΒΟΛΗΣ:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.submissionDate}
                                        onChange={(e) =>
                                            handleInputChange("submissionDate", e.target.value)
                                        }
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1">
                                        ΑΡ. ΠΡΩΤΟΚΟΛΛΟΥ ΚΑΤΑΘΕΣΗΣ:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.protocolNumber}
                                        onChange={(e) =>
                                            handleInputChange("protocolNumber", e.target.value)
                                        }
                                        className="w-full p-2 border rounded"
                                    />
                                </div>

                                <div className="text-right">
                                    <button
                                        onClick={handleSave}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm cursor-pointer"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
