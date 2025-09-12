import React, { useState, useRef } from "react";
import { Upload, X, FileText } from "lucide-react";
import { useForm } from "react-hook-form";

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  uploadedFiles: File[];
}

type FormValues = {
  ktimatologio: FileList;
  contract: FileList;
  permit: FileList;
  law4495: FileList;
  project_descriptions: string;
  sub_categories: string;
};
const FileUpload: React.FC<FileUploadProps> = ({
  onFilesChange,
  uploadedFiles,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(
      (file) =>
        file.type === "application/pdf" ||
        file.type.startsWith("image/") ||
        file.name.endsWith(".doc") ||
        file.name.endsWith(".docx")
    );

    onFilesChange([...uploadedFiles, ...validFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      console.log(files);
      onFilesChange([...uploadedFiles, ...files]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    onFilesChange(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const description: string =
      "ΕΣΩΤΕΡΙΚΕΣ ΔΙΑΡΡΥΘΜΙΣΕΙΣ ΧΩΡΙΣ ΝΑ ΘΙΓΟΝΤΑΙ ΤΑ ΔΟΜΙΚΑ ΣΤΟΙΧΕΙΑ ΤΟΥ ΦΕΡΟΝΤΟΣ ΟΡΓΑΝΙΣΜΟΥ ΟΡΓΑΝΙΣΜΟΥ  ΣΤΟ ΔΙΑΜΕΡΙΣΜΑ A-4 ΤΟΥ Α ΟΡΟΦΟΥ";
    try {
      const formData = new FormData();
      formData.append("project_descriptions", JSON.stringify(description));
      formData.append("ktimatologio", data.ktimatologio[0]);
      formData.append("contract", data.contract[0]);
      formData.append("permit", data.permit[0]);
      if (data.law4495?.length) {
        formData.append("law4495", data.law4495[0]);
      }

      const res = await fetch(
        "http://172.252.13.69:8019/api/v1/process-documents-advanced",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");
      alert("Upload successful!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Error uploading files");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 ">
      <div className="">
        {/* ktimatologio   */}
        <div>
          <div
            className={`
          border-2 border-dashed rounded-xl p-16 text-center transition-all h-[500px] flex justify-center items-center flex-col duration-200
          ${isDragOver
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400 bg-gray-50"
              }
        `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 mb-2 font-medium">
              ktimatologio File
            </p>
            <p className="text-gray-500 mb-6">
              Format: PDF & Max file size: 25 MB
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Browse Files
            </button>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-lg">
            Uploaded Files ({uploadedFiles.length})
          </h4>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <FileText className="w-6 h-6 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
