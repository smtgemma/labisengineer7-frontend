import React from "react";

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface WorkflowStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const WorkflowStepper: React.FC<WorkflowStepperProps> = ({
  steps,
  currentStep,
  className = "",
}) => {
  return (
    <div className={`bg-white p-8 w-80  ${className}`}>
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="relative flex items-center">
              {/* Connecting Line */}
              {!isLast && (
                <div
                  className={`absolute left-6 top-12 w-0.5 h-8 ${isCompleted ? "bg-blue-500" : "bg-gray-200"
                    }`}
                />
              )}

              {/* Step Circle */}
              <div
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-sm font-bold ${isActive
                    ? "bg-blue-500 text-white"
                    : isCompleted
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                {String(step.id).padStart(2, "0")}
              </div>

              {/* Step Content */}
              <div className="ml-6 flex-1">
                <h3
                  className={`text-base font-medium ${isActive
                      ? "text-gray-900"
                      : isCompleted
                        ? "text-gray-700"
                        : "text-gray-400"
                    }`}
                >
                  {step.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowStepper;
