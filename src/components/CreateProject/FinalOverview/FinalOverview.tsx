// import React, { useRef } from "react";
// import { FileSpreadsheet, FileText, AlertCircle } from "lucide-react";
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import { saveAs } from "file-saver";
// import TemplateFIle from "./Template";
// import ReactDOMServer from "react-dom/server";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import TemplateFile from "./Template";
// import TemplateTow from "./TemplateTow";
// import TemplateThree from "./TemplateThree";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { downloadZip } from "client-zip";
// import DesignOne from "./file-one/design-one/page";
// import DesignTwo from "./file-one/design-two/page";
// import DesignThree from "./file-one/design-three/page";
// import DesignFour from "./file-one/design-four/page";
// import DesignFive from "./file-one/design-five/page";

// interface Owner {
//   id: string;
//   firstName: string;
//   surname: string;
//   fatherName: string;
//   vatNo: string;
// }

// interface FinalOverviewProps {
//   files: File[];
//   extractedData: any;
//   selectedOwners: Owner[];
//   selectedActions: string[];
//   onComplete: () => void;
// }

// const FinalOverview: React.FC<FinalOverviewProps> = ({
//   files,
//   extractedData,
//   selectedOwners,
//   selectedActions,
//   onComplete,
// }) => {
//   const printRef = React.useRef(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const stepByStepData: any = useSelector((state: RootState) => state.aiData);
//   const allTempate = stepByStepData.tempateName;
//   const dataAllFIled = stepByStepData.aiInputData;

//   console.log(dataAllFIled, "stepByStepData");
//   const { arbitrary_constructions_description, area, building, buildingCode, building_permi, cadastralCode, co2Emissions, construction, createdById, energyCategory, epcCode, expectation_Document,
//     floor, issueAuthority, issueDate, land_use, licenseIssueNumber, licenseNumber, licenseRevision, lotSquare, municipal, neighborhood, notary, owners, primaryEnergy,
//     projectDescription, propertyDesc1, propertyDesc2, protocolNumber, reexamineNumbers, region, serviceId, subCategories, titleArea, type, ydom, zonePrice,
//   } = dataAllFIled;

//   const { address, afm, birthDate, birthPlace, city, email, fatherName, firstName, lastName, motherName, phone, postalCode } = owners[0]
//   console.log(address)
//   // const {} = subCategories
//   const openPreview = () => {
//     const htmlContent = ReactDOMServer.renderToStaticMarkup(<TemplateFIle />);
//     const newTab = window.open("", "_blank");
//     if (newTab) {
//       newTab.document.write(`
//         <html>
//           <head>
//             <title>DOCX Preview</title>
//              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
//           <style>
//             <style>
//               body { font-family: Arial, sans-serif; padding: 2rem; }
//               h1, h2, h3 { color: #2563eb; }
//               p { line-height: 1.6; }
//             </style>
//           </head>
//           <body>
//             <div class="word-container">
//               ${htmlContent}
//             </div>
//           </body>
//         </html>
//       `);
//       newTab.document.close();
//     }
//   };

//   // ✅ 2. DOWNLOAD CSV FILE
//   const downloadCSV = () => {
//     const headers = ["First Name", "Surname", "Father Name", "VAT No"];
//     const rows = selectedOwners.map((owner) =>
//       [owner.firstName, owner.surname, owner.fatherName, owner.vatNo].join(",")
//     );

//     const csvContent = [headers.join(","), ...rows].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "owners.csv");
//   };

//   // ✅ 3. DOWNLOAD DOCX FILE
//   // const downloadDocx = async () => {
//   //   const doc = new Document({
//   //     sections: [
//   //       {
//   //         children: [
//   //           new Paragraph({
//   //             children: [new TextRun("Greek Declaration Form")],
//   //             heading: "Heading1",
//   //           }),
//   //           ...selectedOwners.map(
//   //             (owner) =>
//   //               new Paragraph({
//   //                 children: [
//   //                   new TextRun(`Name: ${owner.firstName} ${owner.surname}`),
//   //                   new TextRun(
//   //                     `\nFather Name: ${owner.fatherName} - VAT: ${owner.vatNo}`
//   //                   ),
//   //                 ],
//   //                 spacing: { after: 200 },
//   //               })
//   //           ),
//   //         ],
//   //       },
//   //     ],
//   //   });

//   //   const blob = await Packer.toBlob(doc);
//   //   saveAs(blob, "document.docx");
//   // };

//   const templates = [
//     { name: "TemplateFile", component: <TemplateFile /> },
//     { name: "TemplateTwo", component: <TemplateTow /> },
//     { name: "TemplateThree", component: <TemplateThree /> },
//   ];

//   // pdf file download
//   const handleDownloadPdf = async () => {
//     const element = printRef.current;
//     if (!element) {
//       return;
//     }

//     const canvas = await html2canvas(element, {
//       scale: 2,
//     });
//     const data = canvas.toDataURL("image/png");

//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "px",
//       format: "a4",
//     });

//     const imgProperties = pdf.getImageProperties(data);
//     const pdfWidth = pdf.internal.pageSize.getWidth();

//     const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

//     pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("examplepdf.pdf");
//   };

//   //pdf file dowload zip funciton working
//   const handleZipDownload = async () => {
//     const files: { name: string; lastModified: Date; input: Blob }[] = [];

//     for (let t of templates) {
//       const html = ReactDOMServer.renderToStaticMarkup(t.component);
//       const container = document.createElement("div");
//       container.innerHTML = html;
//       container.style.width = "794px";
//       container.style.background = "#fff";
//       document.body.appendChild(container);

//       const canvas = await html2canvas(container, { scale: 2 });
//       const imgData = canvas.toDataURL("image/png");

//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "px",
//         format: "a4",
//       });
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

//       const pdfBlob = pdf.output("blob");

//       files.push({
//         name: `${t.name}.pdf`,
//         lastModified: new Date(),
//         input: pdfBlob,
//       });

//       document.body.removeChild(container);
//     }

//     // Create ZIP in browser
//     const zipBlob = await downloadZip(files).blob();
//     saveAs(zipBlob, "templates.zip");
//   };

//   const handlePdfDownloadTempate = () => {
//     if (templates.length === 0) {
//       handleDownloadPdf();
//     } else {
//       handleZipDownload();
//     }
//   };

//   // const handleDownloadPdf = async () => {
//   //   const element = printRef.current;
//   //   if (!element) return;

//   //   // Clone the element to avoid modifying the original DOM
//   //   const clone = element.cloneNode(true);
//   //   document.body.appendChild(clone);

//   //   // Convert LAB colors to RGB (inline styles)
//   //   const elementsWithLabColors = clone.querySelectorAll("*");
//   //   elementsWithLabColors.forEach((el) => {
//   //     const styles = window.getComputedStyle(el);
//   //     if (styles.color.includes("lab(")) {
//   //       el.style.color = "#000000"; // Fallback to black
//   //     }
//   //   });

//   //   // Generate PDF
//   //   const canvas = await html2canvas(clone, { scale: 2 });
//   //   const data = canvas.toDataURL("image/png");

//   //   const pdf = new jsPDF({
//   //     orientation: "portrait",
//   //     unit: "px",
//   //     format: "a4",
//   //   });
//   //   const imgProperties = pdf.getImageProperties(data);
//   //   const pdfWidth = pdf.internal.pageSize.getWidth();
//   //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

//   //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
//   //   pdf.save("document.pdf");

//   //   // Clean up
//   //   document.body.removeChild(clone);
//   // };
//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Final Overview
//         </h1>
//         <p className="text-gray-600 text-lg">Preview & download your files</p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div
//           onClick={openPreview}
//           className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
//               <FileText className="w-6 h-6 text-yellow-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Preview file
//               </h3>
//               <p className="text-sm text-gray-500">Open in new tab</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Click to preview Word-style output
//           </p>
//         </div>

//         {/* fdf */}
//         <div
//           onClick={handlePdfDownloadTempate}
//           className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
//               <FileText className="w-6 h-6 text-red-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">Pdf File</h3>
//               <p className="text-sm text-gray-500">Download pdf</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Click to download document.docx
//           </p>
//         </div>
//         {/* CSV */}
//         <div
//           onClick={downloadCSV}
//           className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//               <FileSpreadsheet className="w-6 h-6 text-green-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">CSV File</h3>
//               <p className="text-sm text-gray-500">Structured spreadsheet</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">Click to download owners.csv</p>
//         </div>
//         {/* DOCX */}
//         {/* <div
//           onClick={downloadDocx}
//           className="bg-white border p-6 rounded-lg cursor-pointer hover:shadow-md"
//         >
//           <div className="flex items-center space-x-4 mb-4">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//               <FileText className="w-6 h-6 text-blue-600" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">DOCX File</h3>
//               <p className="text-sm text-gray-500">Download Word Document</p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-sm">
//             Click to download document.docx
//           </p>
//         </div> */}
//         {/* Export content with inline styles */}
//         <div ref={contentRef} style={{ display: "none" }}>
//           {/* <TemplateThree /> */}
//         </div>
//       </div>

//       <div ref={printRef} className="space-y-30">
//         <TemplateFIle />
//         <DesignOne/>
//         <DesignFour/>
//         <DesignThree/>
//         <DesignFive/>
//       </div>

//       <div className="flex justify-end">
//         <button
//           onClick={onComplete}
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
//         >
//           Save & Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FinalOverview;

import React, { useRef } from "react";
import { FileSpreadsheet, FileText, AlertCircle } from "lucide-react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import TemplateFIle from "./Template";
import ReactDOMServer from "react-dom/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TemplateFile from "./Template";
import TemplateTow from "./TemplateTow";
import TemplateThree from "./TemplateThree";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { downloadZip } from "client-zip";
import ProjectDescriptionSix from "./file-one/design-six/page";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
import DesignEight from "@/components/CreateProject/FinalOverview/file-one/design-eight/page";
import FileOneDesignFive from "./file-one/design-five/page";
import FileOneDesignSeven from "./file-one/design-seven/page";
import FileOneDesignEleven from "./file-one/design-eleven/page";
import FileOneDesignThirteen from "./file-one/design-thirteen/page";
import FileOneDesignFour from "./file-one/design-four/page";
import FileOneDesignSix from "./file-one/design-six/page";
import { createRoot } from "react-dom/client";
import { useGetTemplateDataQuery } from "@/redux/features/createService/serviceSlice";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const allTempate = stepByStepData.actionSelection;
  const dataAllFIled = stepByStepData.aiInputData;
  const subCategoryData = stepByStepData.subcategory;
  console.log(subCategoryData, "==================------------------");

  const buildingMods = subCategoryData["building-modifications"] || [];
  const energy = subCategoryData["energy-systems"] || [];
  const fencing = subCategoryData["fencing"] || [];
  const landscaping = subCategoryData["landscaping-2"] || [];
  const operational = subCategoryData["operational-space"] || [];
  const property = subCategoryData["property-documentation"] || [];
  const small = subCategoryData["small-construction"] || [];

  const store = makeStore();

  console.log(allTempate, "stepByStepData>>>>>>");
  const { data, isLoading } = useGetTemplateDataQuery("un");
  const ydomName = data?.data;
  console.log("ydomName?", ydomName);

  const { owners } = dataAllFIled;

  const {
    address,
    afm,
    birthDate,
    birthPlace,
    city,
    email,
    fatherName,
    firstName,
    lastName,
    motherName,
    phone,
    postalCode,
  } = owners[0];
  console.log(address);
  // const {} = subCategories
  // const openPreview = () => {
  //   const htmlContent = ReactDOMServer.renderToStaticMarkup(<TemplateFIle />);
  //   const newTab = window.open("", "_blank");
  //   if (newTab) {
  //     newTab.document.write(`
  //       <html>
  //         <head>
  //           <title>DOCX Preview</title>
  //            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  //         <style>
  //           <style>
  //             body { font-family: Arial, sans-serif; padding: 2rem; }
  //             h1, h2, h3 { color: #2563eb; }
  //             p { line-height: 1.6; }
  //           </style>
  //         </head>
  //         <body>
  //           <div class="word-container">
  //             ${htmlContent}
  //           </div>
  //         </body>
  //       </html>
  //     `);
  //     newTab.document.close();
  //   }
  // };

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
  const templates = [
    { name: "TemplateFile", component: <TemplateFile /> },
    {
      name: "ProjectDescriptionSix",
      component: <FileOneDesignEleven ydomName={ydomName} />,
    },
  ];

  // pdf file download
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

  //pdf file dowload zip funciton working
  // const handleZipDownload = async () => {
  //   const files: { name: string; lastModified: Date; input: Blob }[] = [];

  //   for (let t of templates) {
  //     // const html = ReactDOMServer.renderToStaticMarkup(t.component);

  //     // Wrap the component in Provider
  //     const html = ReactDOMServer.renderToStaticMarkup(
  //       <Provider store={store}>{t.component}</Provider>
  //     );
  //     const container = document.createElement("div");
  //     container.innerHTML = html;
  //     container.style.width = "794px";
  //     container.style.background = "#fff";
  //     document.body.appendChild(container);

  //     const canvas = await html2canvas(container, { scale: 2 });
  //     const imgData = canvas.toDataURL("image/png");

  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "px",
  //       format: "a4",
  //     });
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //     const pdfBlob = pdf.output("blob");

  //     files.push({
  //       name: `${t.name}.pdf`,
  //       lastModified: new Date(),
  //       input: pdfBlob,
  //     });

  //     document.body.removeChild(container);
  //   }

  //   // Create ZIP in browser
  //   const zipBlob = await downloadZip(files).blob();
  //   saveAs(zipBlob, "templates.zip");
  // };

  const handleZipDownload = async () => {
    const files = await Promise.all(
      templates.map(async (t) => {
        const html = ReactDOMServer.renderToStaticMarkup(
          <Provider store={store}>{t.component}</Provider>
        );

        const container = document.createElement("div");
        container.innerHTML = html;
        container.style.width = "794px";
        container.style.background = "#fff";
        document.body.appendChild(container);

        const canvas = await html2canvas(container, {
          scale: 3,
          useCORS: true,
        });
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          unit: "px",
          format: [imgWidth, imgHeight],
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        const pdfBlob = pdf.output("blob");
        document.body.removeChild(container);

        return {
          name: `${t.name}.pdf`,
          lastModified: new Date(),
          input: pdfBlob,
        };
      })
    );

    const zipBlob = await downloadZip(files).blob();
    saveAs(zipBlob, "templates.zip");
  };

  const handlePdfDownloadTempate = () => {
    if (templates.length === 0) {
      handleDownloadPdf();
    } else {
      handleZipDownload();
    }
  };
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
        <div
          // onClick={openPreview}
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

        {/* fdf */}
        <div
          onClick={handlePdfDownloadTempate}
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
      </div>

      <div ref={printRef} className="space-y-30">
        {/* building-modifications  */}
        {/* {
          buildingMods.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              return <FileOneDesignFive key={index} />;
              // return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {buildingMods?.map((item: string, index: number) => {
          const elements: React.ReactElement[] = [];

          if (
            item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
            allTempate.includes("Generate Engineer Declaration (YA)")
          ) {
            elements.push(
              <FileOneDesignEleven ydomName={ydomName} key={`five-${index}`} />
            );
          }

          if (
            item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΛΛΑΦ_ΧΡΗΣΗΣ_1" &&
            allTempate.includes("Generate Assignment of Responsibility")
          ) {
            elements.push(<FileOneDesignThirteen key={`seven-${index}`} />);
          }
          if (
            item ===
              "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΔΑΧΤΥΛΙΔΙΩΝ_ΟΠΙΣΘΙΟΠΟΙΗΣΗΣ_ΙΟΚΘΕΙΑΣ_5" &&
            allTempate.includes("Create Technical Description")
          ) {
            elements.push(<FileOneDesignFour key={`four-${index}`} />);
          }
          if (
            item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΤΟΠΟΘΕΤΗΣΗ_ΙΚΡΙΩΜΑΤΩΝ_15" &&
            allTempate.includes("Generate Engineer Declaration (YA)")
          ) {
            elements.push(<FileOneDesignEleven key={`seven-${index}`} />);
          }
          // if (
          //   item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΝΕΑ_ΑΝΟΙΞΜΑΤΑ_ΕΠΙ_ΤΩΝ_ΟΙΚΕΩΝ_10" &&
          //   allTempate.includes("Generate Engineer Declaration (YA)")
          // ) {
          //   elements.push(<FileOneDesignEleven key={`seven-${index}`} />);
          // }
          // if (
          //   item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΛΙΜΑΚΑΣ_ΣΥΝΤΗΡΗΣΗ_ΚΑΙ_ΕΠΙΣΚΕΥΗ_ΣΤΕΓΩΝ_ΜΕ_ΧΡΗΣΗ_ΙΚΡΙΩΜΑ_14" &&
          //   allTempate.includes("Generate Engineer Declaration (YA)")
          // ) {
          //   elements.push(<FileOneDesignSeven key={`seven-${index}`} />);
          // }
          if (
            item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΑΝΑΚΑΤΑΣΚΕΥΗ_ΥΠΕΡΗΧΩΝ_2" &&
            allTempate.includes("Create Technical Description")
          ) {
            elements.push(<FileOneDesignSix key={`seven-${index}`} />);
          }

          return elements.length > 0 ? elements : null;
        })}

        {/* energy-systems  */}
        {/* {
          energy.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              // return <DesignOne key={index} />;
              return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {/* fencing  */}
        {/* {
          fencing.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              // return <DesignOne key={index} />;
              return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {/* landscaping-2  */}
        {/* {
          landscaping.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              // return <DesignOne key={index} />;
              return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {/* operational-space  */}
        {/* {
          operational.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              // return <DesignOne key={index} />;
              return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {/* property-documentation  */}
        {/* {
          property.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΕΣΠΕΡΙΚΕΣ_ΔΙΑΡΡΥΜΙΣΕΙΣ_6" &&
              allTempate.includes("Generate Engineer Declaration (YA)")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              // return <DesignOne key={index} />;
              return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}

        {/* small-construction  */}
        {/* {
          small.map((item: string, index: number) => {
            if (
              item === "ΑΔΕΙΑ_ΜΙΚΡΗΣ_ΚΑΙΜΑΚΑΣ_ΠΙΣΙΝΑ_COMPACT_ΕΩΣ_50_Τ.Μ._13" &&
              allTempate.includes("Create Technical Description")
            ) {
              console.log(item, allTempate[0], "000000000000000000000000000000000");
              return (
                <div className="space-y-12">
                  <div> <DesignEight key={index} /></div>
                  <div> <DesignEight key={index} /></div>
                </div>
              );
              // return 'Generate Engineer Declaration (YA)';

            }
            return null;
          })
        } */}
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
