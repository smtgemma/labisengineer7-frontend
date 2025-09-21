import { usePdfToImageCoverterMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { useState, useRef, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import useDownloader from "react-use-downloader";
import Lottie from "lottie-react";
import aiLoadingTools from "../../../../public/AITools.json";
import { toast } from "sonner";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { FcRules } from "react-icons/fc";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const PDFToImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [downloadFile, setDownloadFile] = useState<string[]>([]);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);

  const { download } = useDownloader();
  const [fileUploadPdfToImg, { isLoading }] = usePdfToImageCoverterMutation();
  const host = "http://31.97.37.168:8019";

  const updatedImageUrls = downloadFile.map((url) => host + url);
  const filename = "converted-image.jpg";

  // 🔹 Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    maxSize: 30 * 1024 * 1024, // 30 MB
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  //  Manual file select fallback
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Convert PDF to Images
  const handleConvert = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("dpi", "200");
    formData.append("format", "PNG");
    formData.append("quality", "95");
    formData.append("first_page", "0");
    formData.append("last_page", "0");

    try {
      const res = await fileUploadPdfToImg(formData).unwrap();
      setDownloadFile(res?.download_urls);
      setIsOpen(true);
    } catch (error: any) {
      toast.error(error.data?.message || "Something went wrong!");
    }

    setIsConverting(true);
    setTimeout(() => setIsConverting(false), 1000);
  };

  // Download as ZIP
  const downloadZip = async (urls: string[]) => {
    setProgress(0);
    let completed = 0;
    const zip = new JSZip();
    for (const url of urls) {
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = url.split("/").pop();
      zip.file(filename!, blob);
      completed++;
      setProgress(Math.round((completed / urls.length) * 100));
    }
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "images.zip");
    });
  };

  // 🔹 Single image download
  const handleDownloadImg = () => {
    download(updatedImageUrls[0], filename);
  };

  // 🔹 Final download handler
  const handleDownloadZipAndImg = () => {
    setShowProgress(!showProgress);
    if (updatedImageUrls.length > 1) {
      downloadZip(updatedImageUrls);
    } else {
      handleDownloadImg();
    }
  };

  return (
    <div className="py-12 px-4 lg:px-8">
      <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="p-2 lg:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-500">
              PDF to Image Converter
            </h1>
            <p className="mt-2 text-gray-600">
              Convert PDF pages into JPG/PNG images easily.
            </p>
          </div>

          {/* 🔹 Drag & Drop Upload Area */}

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

          {/*  File Preview */}
          {file && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Download Modal */}
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

export default PDFToImageConverter;
