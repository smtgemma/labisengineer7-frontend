"use client";
import Loading from "@/components/Others/Loading";
import tokenCatch from "@/lib/token";
import { useGetMyDocumentsQuery } from "@/redux/features/myDocument/DocumentSlice";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";

export interface DocumentData {
  fileName: string;
  invoiceUrl: string;
  projectId: string;
  projectName: string;
  type: "PDF" | "DOCX" | "XLSX" | string; // extendable if other file types possible
  uploadedOn: string; // ISO date string (e.g., "2025-08-20")
}

interface DocumentTableProps {
  data: DocumentData[];
}

// const data: DocumentData[] = [
//   {
//     fileName: "Contract_LandPlot.pdf",
//     projectName: "Permit 102",
//     type: "PDF",
//     uploadedOn: "July 1, 2025",
//   },
//   {
//     fileName: "FloorPlan_A1.jpg",
//     projectName: "House Cert",
//     type: "Image",
//     uploadedOn: "July 1, 2025",
//   },
//   {
//     fileName: "Declaration_YD.docx",
//     projectName: "My Apartment ID",
//     type: "Generated Document",
//     uploadedOn: "July 1, 2025",
//   },
//   {
//     fileName: "Technical_Description.docx",
//     projectName: "Residential Renovation",
//     type: "Generated Document",
//     uploadedOn: "July 1, 2025",
//   },
// ];

const DocumentTable = () => {
  const token = tokenCatch();
  console.log(token);
  const { data: document, isLoading } = useGetMyDocumentsQuery(token);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const allDocument = document?.data?.documents;
  console.log(document);

  const handleDownload = (fileUrl: string, fileName: string) => {
    console.log(fileUrl);
    saveAs(fileUrl, fileName);
  };

  return (
    <section className="bg-[#F1F5F9] py-8 px-4 md:px-12 min-h-screen">
      {/* <Header title="My Documents" /> */}

      <div className={`rounded-lg shadow-sm overflow-auto my-6 `}>
        <table className="w-full">
          <thead className="bg-[#017AFF]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">
                File Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">
                Project Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">
                Uploaded On
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">
                Invoice
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {allDocument?.map((row: any, index: number) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-4 text-sm text-gray-900">
                  {row.fileName}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {row.projectName}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{row.type}</td>
                <td className="px-4 py-4 text-sm text-gray-900">
                  {row.uploadedOn}
                </td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => handleDownload(row.invoiceUrl, row.fileName)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded hover:bg-green-100 transition-colors"
                  >
                    <Download size={12} />
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DocumentTable;
