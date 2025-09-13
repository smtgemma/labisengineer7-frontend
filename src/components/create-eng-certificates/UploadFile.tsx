"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { Upload, FileText, Trash2 } from "lucide-react"
import { Progress } from "../shared/Progress"

interface UploadedFile {
    id: string
    name: string
    size: number
    progress: number
    status: "uploading" | "success" | "error"
}

export default function FileUploadPage() {
    const [isDragOver, setIsDragOver] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
        const files = Array.from(e.dataTransfer.files)
        handleFiles(files)
    }, [])

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        handleFiles(files)
    }, [])

    const handleFiles = (files: File[]) => {
        files.forEach((file) => {
            const newFile: UploadedFile = {
                id: Date.now().toString() + Math.random(),
                name: file.name,
                size: Number.parseFloat((file.size / (1024 * 1024)).toFixed(1)),
                progress: 0,
                status: "uploading",
            }

            setUploadedFiles((prev) => [...prev, newFile])

            // Simulate upload progress
            let progress = 0
            const interval = setInterval(() => {
                progress += Math.random() * 20
                if (progress >= 100) {
                    progress = 100
                    clearInterval(interval)
                    setUploadedFiles((prev) =>
                        prev.map((f) =>
                            f.id === newFile.id ? { ...f, progress: 100, status: "success" } : f,
                        ),
                    )
                } else {
                    setUploadedFiles((prev) =>
                        prev.map((f) =>
                            f.id === newFile.id ? { ...f, progress: Math.floor(progress) } : f,
                        ),
                    )
                }
            }, 500)
        })
    }

    const removeFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((f) => f.id !== id))
    }

    const formatFileSize = (size: number) => `${size}MB`

    const getStatusText = (file: UploadedFile) => {
        if (file.status === "uploading") return "uploading"
        if (file.status === "success") return "uploaded successfully"
        return "error"
    }

    return (
        <div className="min-h-screen p-6 bg-slate-50">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-2xl font-semibold mb-2 text-slate-900">
                    Upload Documents
                </h1>
                <p className="text-slate-500">
                    Drag & drop or browse to upload PDFs, images, or DOCs
                </p>
            </div>

            {/* Upload Area */}
            <div
                className="max-w-4xl mx-auto border-2 border-dashed rounded-lg p-8 text-center transition-colors"
                style={{
                    borderColor: isDragOver ? "#3b82f6" : "#cbd5e1",
                    backgroundColor: isDragOver ? "#eff6ff" : "#f8fafc",
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-100">
                        <Upload className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-slate-900">
                        Drag and drop your files
                    </h3>
                    <p className="text-sm mb-4 text-slate-500">
                        JPEG, PNG, PDF formats, up to 50MB
                    </p>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-white border rounded hover:bg-slate-50 text-slate-700"
                    >
                        Select File
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
                <div className="max-w-4xl mx-auto mt-8 space-y-3">
                    <h4 className="text-sm font-medium border-b pb-1 text-slate-900 border-blue-500">
                        Uploaded Files
                    </h4>

                    {uploadedFiles.map((file) => (
                        <div key={file.id} className="p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3 flex-1">
                                    <div className="w-8 h-8 rounded flex items-center justify-center bg-slate-100">
                                        <FileText className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate text-slate-900">
                                            {file.name}
                                        </p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-slate-500">
                                                {formatFileSize(file.size)}
                                            </span>
                                            <span className="text-xs text-slate-400">•</span>
                                            <span className="text-xs text-slate-500">
                                                {file.progress}% {getStatusText(file)}
                                            </span>
                                        </div>
                                        {file.status === "uploading" && (
                                            <Progress value={file.progress} className="mt-2 h-1" />
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFile(file.id)}
                                    className="ml-2 p-1 rounded hover:bg-slate-100 text-slate-400"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer Actions */}
            <div className="max-w-4xl mx-auto mt-8 flex justify-end space-x-3">
                <button className="px-4 py-2 border rounded text-slate-600 hover:bg-slate-100">
                    Cancel
                </button>
                <button className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600">
                    Next
                </button>
            </div>
        </div>
    )
}
