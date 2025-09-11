"use client";

import { ReactNode, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type TemplateItem = {
    id: string;      // unique id for DOM capture
    name: string;    // filename for the PDF
    component: ReactNode; // your TSX template
};

interface PdfZipDownloaderProps {
    templates: TemplateItem[];
    zipName?: string; // default "templates.zip"
}


// Capture template to multi-page PDF
async function captureToPdf(elementId: string): Promise<ArrayBuffer> {
    const element = document.getElementById(elementId);
    if (!element) throw new Error(`Element with id ${elementId} not found`);

    // Wait for all images to load
    const images = element.getElementsByTagName("img");
    await Promise.all(
        Array.from(images).map(
            (img) =>
                new Promise<void>((resolve) => {
                    if (img.complete) resolve();
                    else {
                        img.onload = () => resolve();
                        img.onerror = () => resolve();
                    }
                })
        )
    );

    // Capture full element as canvas
    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // PDF page height in canvas pixels
    const pageHeightPx = (pdfHeight * canvasWidth) / pdfWidth;

    let position = 0;
    while (position < canvasHeight) {
        // Create a temporary canvas slice
        const canvasSlice = document.createElement("canvas");
        canvasSlice.width = canvasWidth;
        canvasSlice.height = Math.min(pageHeightPx, canvasHeight - position);

        const ctx = canvasSlice.getContext("2d")!;
        ctx.drawImage(
            canvas,
            0,
            position,
            canvasWidth,
            canvasSlice.height,
            0,
            0,
            canvasWidth,
            canvasSlice.height
        );

        const imgData = canvasSlice.toDataURL("image/png");

        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            pdfWidth,
            (canvasSlice.height * pdfWidth) / canvasWidth
        );

        position += pageHeightPx;
        if (position < canvasHeight) pdf.addPage();
    }

    return pdf.output("arraybuffer");
}
export default function PdfZipDownloader({ templates, zipName = "templates.zip" }: PdfZipDownloaderProps) {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);
        setProgress(0);

        const zip = new JSZip();

        for (let i = 0; i < templates.length; i++) {
            const t = templates[i];
            try {
                const pdfBytes = await captureToPdf(t.id);
                zip.file(t.name, pdfBytes);
            } catch (err) {
                console.error(`Failed to generate PDF for ${t.name}`, err);
            }

            // Update progress
            setProgress(Math.round(((i + 1) / templates.length) * 100));
        }

        // Generate ZIP and download
        const zipBlob = await zip.generateAsync({ type: "blob" });
        saveAs(zipBlob, zipName);

        setLoading(false);
        setProgress(0);
    };

    return (
        <div>
            {/* Hidden render container */}
            <div style={{ position: "absolute", top: -9999, left: -9999 }}>
                {/* {templates.map((t) => (
          <div key={t.id} id={t.id}>
            {t.component}
          </div>
        ))} */}
                {templates.map((t, index) => (
                    <div key={`${t.id}-${index}`} id={t.id}>
                        {t.component}
                    </div>
                ))}
            </div>

            {/* Download button */}
            <button
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded mb-2"
                disabled={loading}
            >
                {loading ? "Generating..." : "Download Templates as ZIP"}
            </button>

            {/* Progress bar */}
            {loading && (
                <div className="w-full bg-gray-200 h-4 rounded overflow-hidden">
                    <div
                        className="bg-blue-600 h-4 transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
            {loading && <p className="mt-1 text-sm">Progress: {progress}%</p>}
        </div>
    );
}
