import { usePdfPackageAutoNameMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Lottie from "lottie-react";
import aiLoadingTools from "../../../../public/AITools.json";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import { FcRules } from "react-icons/fc";
import Link from "next/link";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { Loader2 } from "lucide-react";
import { FaRegFileLines } from "react-icons/fa6";

interface FileInfo {
  filename: string;
  file_path: string;
  relative_path: string;
  file_url: string;
  file_size: number;
}

const PdfPackageAutoName = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [downloadFile, setDownloadFile] = useState<FileInfo | null>(null);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);

  const [fileUploadAutoNameToPdf, { isLoading }] =
    usePdfPackageAutoNameMutation();
  const host = "http://31.97.37.168:8019";

  // Handle multiple file selection in dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 5, // Allow multiple files (up to 5)
    maxSize: 30 * 1024 * 1024, // 30MB max file size
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Add new files to existing ones
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Type assertion
      setFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(e.target.files as FileList), // Assert that files is not null
      ]);
    }
  };

  // File converter function
  const handleConvert = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const res = await fileUploadAutoNameToPdf(formData).unwrap();
      setDownloadFile(res?.file_info);
      console.log(res);
    } catch (error: any) {
      toast.error(error.data.message);
    }

    setIsConverting(true);

    // Simulate conversion
    setTimeout(() => {
      setIsConverting(false);
      setIsOpen(true);
    }, 100);
  };

  const handleDownloadPdf = async () => {
    if (!downloadFile) return;

    setShowProgress(true);
    setProgress(0);

    try {
      const url = `${host}/${downloadFile.file_path}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to download");

      const total = +(res.headers.get("content-length") || 0);
      const reader = res.body?.getReader();
      let loaded = 0;
      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        chunks.push(value!);
        loaded += value!.length;
        setProgress(Math.round((loaded / total) * 100));
      }

      saveAs(
        new Blob(chunks, { type: "application/pdf" }),
        downloadFile.filename || "file.pdf"
      );
    } catch (err) {
      console.error("Download error:", err);
      toast.error("Download failed!");
    } finally {
      setTimeout(() => {
        setShowProgress(false);
        setIsOpen(false);
        setFiles([]);
        setProgress(0);
      }, 800);
    }
  };

  // Make sure this calls the progress-aware downloader
  const handleDownloadZipAndImg = () => {
    handleDownloadPdf();
  };

  // Remove file from the list
  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  // Check mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="py-12 px-4 lg:px-8">
      <div className="max-w-md mx-auto overflow-hidden md:max-w-3xl">
        <div className="p-2 lg:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-500">
              PDF Packager & Auto Naming
            </h1>
            <p className="mt-2 text-gray-600">
              Automatically merges documents in correct order and renames files
              (e.g. Scan_1 → Klimatologio.pdf).
            </p>
          </div>
          <div>
            <div className="bg-white p-8 rounded-2xl">
              <div>
                <h2 className="text-xl font-semibold">File Upload</h2>
                <p className="text-[#7D7D7D] mb-5">
                  Choose a file and upload securely to proceed.
                </p>
              </div>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 lg:p-16 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                <input {...getInputProps()} onChange={handleFileChange} />
                {isLoading ? (
                  <div className="w-[200px] mx-auto">
                    <Lottie animationData={aiLoadingTools} loop />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FcRules className="min-w-20" size={50} />

                    <p className="text-base text-gray-600 mb-2 font-medium">
                      Drag and drop your files
                    </p>
                    <p className="text-gray-500 mb-6">
                      PDF formats, up to 50MB 25 MB
                    </p>

                    <button className="border border-gray-300 px-4 py-2 rounded-xl hover:cursor-pointer">
                      Select file
                    </button>
                  </div>
                )}
              </div>
              {/* 🔹 Convert Button */}
              <div className="text-center lg:mt-6 flex gap-10">
                <Link
                  href={"/advance-tools"}
                  className="px-8 py-3 w-full block font-medium border border-gray-200  cursor-pointer  hover:shadow-sm transition-colors rounded-lg"
                >
                  Cancel{" "}
                </Link>

                <PrimaryButton onClick={handleConvert} disabled={isLoading}>
                  <div className="flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Converter to Image  ➔"
                    )}
                  </div>
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Column-style display for selected files */}
          {files.length > 0 && (
            <div className="mt-6 flex flex-col space-y-4">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="bg-white border border-gray-300 rounded-lg p-3 flex  justify-between items-center"
                >
                  <div className="flex gap-1 items-center">
                    <FaRegFileLines className="text-red-600 text-2xl " />
                    <div>
                      <p className="text-sm text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFile(file.name)}
                    className="mt-2 text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for conversion completion */}
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-600">
                Conversion Complete
              </h3>
              <button
                onClick={() => {
                  setShowProgress(false);
                  setIsOpen(false);
                }}
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Your PDF has been converted successfully.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowProgress(false);
                  setIsOpen(false);
                }}
                className="px-4 py-2 border rounded-md cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleDownloadZipAndImg}
                className=" px-6 py-2 cursor-pointer  font-medium shadow-sm transition-colors rounded-lg"
                style={{
                  background:
                    "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)",
                }}
              >
                Download
              </button>
            </div>

            {showProgress && (
              <>
                <div className="w-full bg-gray-200 rounded-lg h-3 mt-3">
                  <div
                    className="h-3 rounded-lg transition-all duration-300"
                    style={{
                      width: `${progress}%`,
                      background: `${
                        progress
                          ? "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)"
                          : ""
                      }`,
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-1 font-bold text-center text-gray-600">
                  {progress}%
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPackageAutoName;
