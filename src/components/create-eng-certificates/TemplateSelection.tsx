import {
    setActionSelectName,
    setSelectTemplate,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { RootState } from "@/redux/store";
import { AlertTriangle, CheckCircle, CreditCard, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "@/components/Others/Loading";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { useGetCreditServiceQuery, useRemainingCreditQuery, useUseCreditsMutation } from "@/redux/features/credit/creditSlice";
import { TemplateName } from "../CreateProject/ActionSelection/data";


export const templateName: TemplateName[] = [
    {
        id: "owner_assignment_1",
        title: "ΥΔ ΑΝΑΛΗΨΗΣ ΕΡΓΟΥ_ΜΗΧΑΝΙΚΟΣ",
        price: 0.5,
    },
    {
        id: "engineer_assumption_2",
        title: "ΥΔ ΑΝΑΘΕΣΗΣ ΙΔΙΟΚΤΗΤΗ",
        price: 0.5,
    },
]
interface ActionSelectionProps {
    selectedActions: string[];
    onActionsChange: (actions: string[]) => void;
    currentStep: number;
    nextStep: () => void;
    canProceed: () => boolean;
}

const TemplateSelectionComponents: React.FC<ActionSelectionProps> = ({
    canProceed,
    nextStep,
}) => {


    const [selected, setSelected] = useState<string[]>(["technical", "engineer"]); // default selected
    const [template, setTemplate] = useState<any[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const { data: remainingCredit } = useRemainingCreditQuery("");
    const [useCredit] = useUseCreditsMutation();
    const dispatch = useDispatch();
    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    const id = stepByStepData?.projectId?.id;

    const { data, isLoading } = useGetCreditServiceQuery(id || "", { skip: !id });

    console.log("Credit Service Data:", data);

    // Compute subtotal
    const subtotal = templateName
        .filter((s) => selected.includes(s.id))
        .reduce((acc, s) => acc + s.price, 0);

    // Update template list when selections change
    useEffect(() => {
        const filtered = templateName.filter((s) => selected.includes(s.id));
        setTemplate(filtered);
    }, [selected]);

    // Sync selected templates with Redux
    useEffect(() => {
        dispatch(setSelectTemplate(template));
    }, [template, dispatch]);

    // Sync selected action names with Redux
    useEffect(() => {
        dispatch(setActionSelectName(selected));
    }, [selected, dispatch]);

    // Handle template selection toggle
    const toggleSelect = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((s) => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    // Handle checkout & continue
    const handleCheckout = async () => {
        if (subtotal === 0) {
            setError("Please select at least one template.");
            return;
        }

        if (!remainingCredit?.data?.credits || remainingCredit.data.credits < subtotal) {
            setError(`Insufficient credits. You need ${subtotal} credits, but only have ${remainingCredit?.data?.credits} available.`);
            return;
        }

        setIsProcessing(true);
        setError(null);
        setSuccess(null);

        try {
            const res: any = await useCredit({ totalCredits: subtotal }).unwrap();
            if (res.success) {
                setSuccess("Credit deducted successfully! Proceeding...");
                setTimeout(() => {
                    nextStep();
                }, 1500);
            } else {
                setError(res.message || "Failed to deduct credits. Please try again.");
            }
        } catch (err: any) {
            setError(err?.data?.message || "An unexpected error occurred.");
        } finally {
            setIsProcessing(false);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Select The Templates
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0">
                    Choose the required documents to generate. Your selected templates will be used to create official files automatically.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Template Selection Panel */}
                <div className="lg:col-span-2 space-y-4">
                    {templateName.map((tem, i) => (
                        <div
                            key={i}
                            className={`cursor-pointer border rounded-xl px-6 py-4 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 ${selected.includes(tem.id)
                                ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                                : "border-gray-200 bg-white hover:border-blue-300"
                                }`}
                            onClick={() => toggleSelect(tem.id)}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium flex items-center gap-2 text-gray-800">
                                        {tem.title}
                                        {tem.required && (
                                            <span className="text-xs border border-red-700 bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                                                Required
                                            </span>
                                        )}
                                    </h3>
                                    {/* <p className="text-sm text-gray-600 mt-1">{tem.description}</p> */}
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-lg font-semibold text-gray-900">{tem.price} credits</span>
                                    {tem.required && (
                                        <span className="text-xs text-gray-400 mt-1">Mandatory</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary Panel */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-26 h-fit">
                    <div className="flex items-center mb-6">
                        <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="text-lg font-bold text-gray-800">Credit Summary</h3>
                    </div>

                    <div className="space-y-3 mb-6">
                        {template.length > 0 ? (
                            template.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-700">{item.title}</span>
                                    <span className="font-medium text-gray-900">{item.price} pts</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm italic">No templates selected</p>
                        )}
                    </div>

                    <hr className="my-4 border-gray-200" />

                    <div className="flex justify-between font-bold text-lg text-gray-800 mb-6">
                        <span>Total</span>
                        <span>{subtotal} credits</span>
                    </div>

                    {/* Credit Balance */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Available Credits</span>
                            <span className="font-bold text-blue-700">{remainingCredit?.data?.credits || 0}</span>
                        </div>
                    </div>

                    {/* Error / Success Messages */}
                    {error && (
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-4">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {success && (
                        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg mb-4">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" />
                            <p className="text-sm">{success}</p>
                        </div>
                    )}

                    {/* Primary Action Button */}
                    <PrimaryButton
                        onClick={handleCheckout}
                        disabled={
                            isProcessing ||
                            subtotal === 0 ||
                            !remainingCredit?.data?.credits ||
                            remainingCredit.data.credits < subtotal ||
                            !canProceed()
                        }
                    >
                        <div className="flex items-center justify-center">
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                "Checkout & Continue"
                            )}
                        </div>
                    </PrimaryButton>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        Templates are automatically generated using AI. Only pay for what you use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelectionComponents;
