import React from "react";
import { FileSpreadsheet, FileText, AlertCircle } from "lucide-react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import TemplateFIle from "./Template";
import ReactDOMServer from "react-dom/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TemplateFile from "./Template";

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
  const printRef = React.useRef(null);
  const openPreview = () => {
    const htmlContent = ReactDOMServer.renderToStaticMarkup(<TemplateFIle />);
    const newTab = window.open("", "_blank");
    if (newTab) {
      newTab.document.write(`
        <html>
          <head>
            <title>DOCX Preview</title>
             <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            <style>
              body { font-family: Arial, sans-serif; padding: 2rem; }
              h1, h2, h3 { color: #2563eb; }
              p { line-height: 1.6; }
            </style>
          </head>
          <body>
            <div class="word-container">
              ${htmlContent}
            </div>
          </body>
        </html>
      `);
      newTab.document.close();
    }
  };

  // ✅ 2. DOWNLOAD CSV FILE
  const downloadCSV = () => {
    const headers = ["First Name", "Surname", "Father Name", "VAT No"];
    const rows = selectedOwners.map((owner) =>
      [owner.firstName, owner.surname, owner.fatherName, owner.vatNo].join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "owners.csv");
  };

  // ✅ 3. DOWNLOAD DOCX FILE
  const downloadDocx = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun("Greek Declaration Form")],
              heading: "Heading1",
            }),
            ...selectedOwners.map(
              (owner) =>
                new Paragraph({
                  children: [
                    new TextRun(`Name: ${owner.firstName} ${owner.surname}`),
                    new TextRun(
                      `\nFather Name: ${owner.fatherName} - VAT: ${owner.vatNo}`
                    ),
                  ],
                  spacing: { after: 200 },
                })
            ),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "document.docx");
  };

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };
  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   if (!element) return;

  //   // Clone the element to avoid modifying the original DOM
  //   const clone = element.cloneNode(true);
  //   document.body.appendChild(clone);

  //   // Convert LAB colors to RGB (inline styles)
  //   const elementsWithLabColors = clone.querySelectorAll("*");
  //   elementsWithLabColors.forEach((el) => {
  //     const styles = window.getComputedStyle(el);
  //     if (styles.color.includes("lab(")) {
  //       el.style.color = "#000000"; // Fallback to black
  //     }
  //   });

  //   // Generate PDF
  //   const canvas = await html2canvas(clone, { scale: 2 });
  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "px",
  //     format: "a4",
  //   });
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("document.pdf");

  //   // Clean up
  //   document.body.removeChild(clone);
  // };
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Final Overview
        </h1>
        <p className="text-gray-600 text-lg">Preview & download your files</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CSV */}
        <div
          onClick={downloadCSV}
          className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">CSV File</h3>
              <p className="text-sm text-gray-500">Structured spreadsheet</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Click to download owners.csv</p>
        </div>

        {/* fdf */}
        <div
          onClick={handleDownloadPdf}
          className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Pdf File</h3>
              <p className="text-sm text-gray-500">Download pdf</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Click to download document.docx
          </p>
        </div>
        {/* DOCX */}
        <div className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">DOCX File</h3>
              <p className="text-sm text-gray-500">Download Word Document</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Click to download document.docx
          </p>
        </div>

        <div
          onClick={openPreview}
          className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Preview file
              </h3>
              <p className="text-sm text-gray-500">Open in new tab</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Click to preview Word-style output
          </p>
        </div>
      </div>

      <div ref={printRef}>
        <TemplateFIle />
      </div>

      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default FinalOverview;
