import { useEffect, useRef, useState } from "react"


interface AIExtractionProps {
    estimatedTime: number // in seconds
    onComplete?: () => void
}
export function Extraction({ estimatedTime, onComplete }: AIExtractionProps) {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const startTimeRef = useRef<number>(Date.now())
    const intervalRef = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        startTimeRef.current = Date.now()

        // Simulate AI processing with intelligent progress
        const updateProgress = () => {
            const elapsed = (Date.now() - startTimeRef.current) / 1000
            let newProgress: number

            if (elapsed < estimatedTime) {
                // Normal progress based on estimated time
                newProgress = (elapsed / estimatedTime) * 90 // Cap at 90% until actual completion
            } else {
                // If taking longer than estimated, slow down progress increase
                const overtime = elapsed - estimatedTime
                const slowdownFactor = Math.max(0.1, 1 / (1 + overtime / estimatedTime))
                newProgress = 90 + (overtime / (estimatedTime * 2)) * 10 * slowdownFactor
                newProgress = Math.min(newProgress, 95) // Never exceed 95% until actual completion
            }

            setProgress(Math.floor(newProgress))
        }

        intervalRef.current = setInterval(updateProgress, 100)

        // Simulate actual completion (random time between 80% and 120% of estimated)
        const actualCompletionTime = estimatedTime * (0.8 + Math.random() * 0.4)

        setTimeout(() => {
            setProgress(100)
            setIsComplete(true)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            setTimeout(() => {
                onComplete?.()
            }, 1000)
        }, actualCompletionTime * 1000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [estimatedTime, onComplete])

    return (
        <div className="text-center max-w-md mx-auto px-6">
            <h1 className="text-3xl font-bold mb-4" style={{ color: "#1e293b" }}>
                AI Extraction
            </h1>
            <p className="text-base mb-12" style={{ color: "#64748b" }}>
                Here is the extracted information. Please review and confirm.
            </p>

            {/* AI Logo with decorative elements */}
            <div className="relative mb-12">
                {/* Decorative diamonds */}
                <div className="absolute -top-4 -left-8">
                    <div className="w-4 h-4 rotate-45" style={{ backgroundColor: "#3b82f6" }}></div>
                </div>
                <div className="absolute -top-2 -right-6">
                    <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#f97316" }}></div>
                </div>
                <div className="absolute top-8 -right-8">
                    <div className="w-3 h-3 rotate-45" style={{ backgroundColor: "#3b82f6" }}></div>
                </div>

                {/* Main AI text */}
                <div className="text-8xl font-bold" style={{ color: "#3b82f6" }}>
                    AI
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300 ease-out"
                                style={{
                                    backgroundColor: "#3b82f6",
                                    width: `${progress}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <span className="ml-4 text-lg font-medium" style={{ color: "#1e293b" }}>
                        {progress}%
                    </span>
                </div>
            </div>
        </div>
    )
}