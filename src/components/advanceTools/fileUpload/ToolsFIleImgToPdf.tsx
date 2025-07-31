import { useImageToPdfCoverterMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useDownloader from "react-use-downloader";
import { toast } from "sonner";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const ImageToPdfConverter = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [downloadFile, setDownloadFile] = useState("");

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const [fileUploadImgToPdf, { isLoading }] = useImageToPdfCoverterMutation();
  const host = "http://172.252.13.69:8019";

  // const updatedImageUrls = downloadFile.map((url) => host + url);
  // console.log("yes", updatedImageUrls);

  // Handle multiple file selection in dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    maxFiles: 5, // Allow multiple files (up to 5)
    maxSize: 30 * 1024 * 1024, // 30MB max file size
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Add new files to existing ones
    },
  });

  // Handle file input changes
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files)]);
  //   }
  // };

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

    // Append other form data parameters
    formData.append("orientation", "portrait");
    formData.append("page_size", "letter");
    formData.append("margin_top", "0.5");
    formData.append("margin_bottom", "0.5");
    formData.append("margin_left", "0.5");
    formData.append("margin_right", "0.5");
    formData.append("fit_to_page", "true");

    try {
      const res = await fileUploadImgToPdf(formData).unwrap();
      setDownloadFile(res.file_path);
      console.log(res);
    } catch (error: any) {
      toast.error(error.data.message);
    }

    setIsConverting(true);

    // Simulate conversion
    setTimeout(() => {
      setIsConverting(false);
      setIsOpen(true);
    }, 2000);
  };

  const handleDownloadPdf = () => {
    const pdfFileUrl = `${host}/${downloadFile}`;

    fetch(pdfFileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "downloaded-file.pdf");
      })
      .catch((error) => {
        console.error("Error downloading PDF file:", error);
      });
  };

  // Download single image
  const handleDownloadImg = () => {
    handleDownloadPdf();
  };

  // Handle ZIP or image download
  const handleDownloadZipAndImg = () => {
    handleDownloadImg();
    setTimeout(() => {
      setIsConverting(false);
      setIsOpen(false);
      setFiles([]);
    }, 100);
  };

  // Remove file from the list
  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  // Close the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
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
      <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="p-2 lg:p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-500">
              Image to PDF Converter
            </h1>
            <p className="mt-2 text-gray-600">
              Convert each image page into a PDF or extract all images contained
              in an image.
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
              accept="image/*"
              className="hidden"
              multiple // Enable multiple file selection
            />

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={triggerFileInput}
                className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Browse Files
              </button>
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
                  <div>
                    <p className="text-sm text-gray-700">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
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

          <div className="text-center lg:mt-10">
            <button
              onClick={handleConvert}
              disabled={files.length === 0 || isConverting}
              className={`mt-12  px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                files.length === 0 || isConverting
                  ? "bg-blue-500 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isLoading ? "Converting..." : "Convert to Pdf"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for conversion completion */}
      {isOpen && (
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
                  {isMobile ? "Download" : `Download File`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageToPdfConverter;
