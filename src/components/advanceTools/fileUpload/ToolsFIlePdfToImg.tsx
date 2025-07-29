import { usePdfToImageCoverterMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useDownloader from "react-use-downloader";
import { toast } from "sonner";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const PDFToImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<"jpg" | "png">("jpg");
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [downloadFile, setDownloadFile] = useState([]);
  const [downloadFormat, setDownloadFormart] = useState(false);

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const [fileUploadPdfToImg, { isLoading }] = usePdfToImageCoverterMutation();
  const host = "http://172.252.13.69:8019";

  const updatedImageUrls = downloadFile.map((url) => host + url);
  console.log("yes", updatedImageUrls);

  // const fileUrl = `http://172.252.13.69:8019${downloadFile}`;
  const filename = "beautiful-carpathia.jpg";

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    maxSize: 30 * 1024 * 1024, // 30MB
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // file converter
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
      console.log(res?.download_urls);
    } catch (error: any) {
      toast.error(error.data.message);
    }

    setIsConverting(true);
    // Conversion logic would go here
    // This would typically involve calling an API or using a client-side library
    console.log(`Converting ${file.name} to ${format}`);

    // Simulate conversion
    setTimeout(() => {
      setIsConverting(false);
      setIsOpen(true);
      // In a real app, you would provide the converted images for download
    }, 2000);
  };

  // Function to download images as ZIP
  const downloadZip = async (urls: any) => {
    const zip = new JSZip();

    // Loop through image URLs, fetch and add to ZIP
    for (const url of urls) {
      const response = await fetch(url);
      const blob = await response.blob(); // Get image as blob
      const filename = url.split("/").pop(); // Extract filename from URL
      zip.file(filename, blob); // Add the image to the ZIP file
    }

    // Generate and download the ZIP file
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "images.zip"); // Save as 'images.zip'
    });
  };

  // signle image download
  const handleDownloadImg = () => {
    console.log("Download initiated", updatedImageUrls[0]);
    download(updatedImageUrls[0], filename);
  };

  // final download funciton funciton
  const handleDownloadZipAndImg = () => {
    if (updatedImageUrls.length > 1) {
      setDownloadFormart(true);
      downloadZip(updatedImageUrls);
    } else {
      setDownloadFormart(false);
      handleDownloadImg();
    }
  };

  // module colse funciotn
  const handleClose = () => {
    setIsOpen(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="  py-12 px-4  lg:px-8">
      <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl">
        <div className={" p-2 lg:p-8"}>
          <div className="text-center mb-12">
            <h1 className=" text-3xl lg:text-5xl font-bold text-blue-500">
              PDF to Image Converter
            </h1>
            <p className="mt-2 text-gray-600">
              Convert each PDF page into a JPG or extract all images contained
              in a PDF.
            </p>
          </div>
          <div
            className={`border-2 border-dashed rounded-lg p-8 lg:p-16 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }`}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-center space-y-2">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-lg font-medium text-gray-700">
                  {isDragActive
                    ? "Drop the PDF file here"
                    : "Drop file or browse"}
                </p>
                <p className="text-sm text-gray-500">
                  Format: pdf | Max file size: 30 MB
                </p>
              </div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf"
              className="hidden"
            />

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={triggerFileInput}
                className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Browse Files
              </button>

              {/* <div className="w-full sm:w-auto flex items-center gap-2">
              <label
                htmlFor="format"
                className="text-sm font-medium text-gray-700"
              >
                Format:
              </label>
              <select
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value as "jpg" | "png")}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
              </select>
            </div> */}
            </div>
          </div>

          {file && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}

          <div className="text-center lg:mt-10">
            <button
              onClick={handleConvert}
              disabled={!file || isConverting}
              className={`mt-12  px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                !file || isConverting
                  ? "bg-blue-500 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isLoading ? "Converting..." : "Convert to image"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          {" "}
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
            <div
              className={`bg-white rounded-lg shadow-xl w-full ${
                isMobile ? "max-w-full" : "max-w-md"
              } mx-auto overflow-hidden`}
            >
              <div className="p-4 sm:p-8">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">
                    Conversion Complete
                  </h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-sm sm:text-base text-gray-600  mb-4 sm:mb-6">
                  Your PDF has been successfully converted to JPG images.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-10">
                  <button
                    onClick={handleClose}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleDownloadZipAndImg}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isMobile
                      ? "Download"
                      : `Download File
                            `}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PDFToImageConverter;
