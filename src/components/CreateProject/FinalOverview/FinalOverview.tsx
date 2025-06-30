import React from "react";
import { FileSpreadsheet, FileText, AlertCircle } from "lucide-react";

interface Owner {
  id: string;
  firstName: string;
  surname: string;
  fatherName: string;
  vatNo: string;
}

interface FinalOverviewProps {
  files: File[];
  extractedData: any;
  selectedOwners: Owner[];
  selectedActions: string[];
  onComplete: () => void;
}

const FinalOverview: React.FC<FinalOverviewProps> = ({
  files,
  extractedData,
  selectedOwners,
  selectedActions,
  onComplete,
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Final Overview
        </h1>
        <p className="text-gray-600 text-lg">
          Preview generated documents and data before export or submission.
        </p>
      </div>

      {/* Document Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* CSV File Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">CSV File</h3>
              <p className="text-sm text-gray-500">Structured data export</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            All extracted information organized in spreadsheet format for easy
            analysis and processing.
          </p>
        </div>

        {/* Docx File Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Docx File</h3>
              <p className="text-sm text-gray-500">Formatted document</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Professional document with extracted data formatted according to
            standard templates.
          </p>
        </div>
      </div>

      {/* Information Alert */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start space-x-3 mb-8">
        <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
        <p className="text-orange-800">
          You can modify and review the extracted data in this CSV file and the
          DOCX file if you wish.
        </p>
      </div>

      {/* Save & Continue Button */}
      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default FinalOverview;
