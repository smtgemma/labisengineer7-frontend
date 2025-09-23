"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setMultipleDescriptionTask } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { CheckCheck } from "lucide-react";
import { toast } from "sonner";

interface Item {
    id: string;
    label: string;
    descriptions?: string;
    selected?: boolean;
}

// correct htkData
const htkData: Item[] = [
    { id: "htk1", label: "Building ID Horizontal Property" },
    { id: "htk2", label: "Building ID Vacant Land / Plot" },
];

const HtkCategory = () => {
    const [items, setItems] = useState<Item[]>(htkData);
    const dispatch = useDispatch();
    const router = useRouter();

    const toggleItem = (index: number) => {
        setItems((prev) =>
            prev.map((item, i) => ({
                ...item,
                selected: i === index ? !item.selected : false, // only one can be selected
            }))
        );
    };

    const handleSave = () => {
        const selected = items.find((item) => item.selected);

        if (!selected) {
            toast.warning("Please select an option before continuing.");
            return;
        }

        // save selected data in redux
        dispatch(
            setMultipleDescriptionTask({
                HTK: [{ label: selected.label, description: selected.descriptions }],
            })
        );

        // redirect to selected item's id
        router.push(`/htk/${selected.id}`);
    };

    return (
        <div className="py-4 bg-[#F1F5F9] min-h-screen">
            <h1 className="text-3xl font-bold mb-4">HTK Category</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <ol className="pl-6 space-y-2">
                        {items.map((item, i) => (
                            <li
                                key={item.id}
                                onClick={() => toggleItem(i)}
                                className={`px-8 py-3 flex items-center w-fit gap-2 font-medium shadow-sm rounded-2xl transition-colors cursor-pointer ${item.selected ? "!text-white" : "text-black"
                                    }`}
                                style={{
                                    borderRadius: "8px",
                                    background: item.selected
                                        ? "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%)"
                                        : "white",
                                }}
                            >
                                {item.selected && <CheckCheck />}
                                <p className="font-medium">{item.label}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="flex justify-end mt-8 w-fit ml-auto">
                <PrimaryButton label="Save & Continue" onClick={handleSave} />
            </div>
        </div>
    );
};

export default HtkCategory;
