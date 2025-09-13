"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setMultipleDescriptionTask } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Services4DesData } from "./data/Services4DesData";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import { CheckCheck } from "lucide-react";
import { toast } from "sonner";

interface Item {
    label: string;
    descriptions?: string;
    selected?: boolean;
}

interface Category {
    category: string;
    items: Item[];
}

const Services4Des = () => {
    const [categories, setCategories] = useState<Category[]>(Services4DesData);
    const dispatch = useDispatch();
    const router = useRouter();

    const toggleItem = (catIndex: number, itemIndex: number) => {
        setCategories((prev) =>
            prev.map((cat, i) =>
                i === catIndex
                    ? {
                        ...cat,
                        items: cat.items.map((item, j) =>
                            j === itemIndex ? { ...item, selected: !item.selected } : item
                        ),
                    }
                    : cat
            )
        );
    };

    const handleSave = () => {
        const selectedOptions: {
            [category: string]: { label: string; description?: string }[];
        } = {};

        categories.forEach((cat) => {
            const selected = cat.items
                .filter((item) => item.selected)
                .map((item) => ({ label: item.label, description: item.descriptions }));
            if (selected.length > 0) {
                selectedOptions[cat.category] = selected;
            }
        });

        if (Object.keys(selectedOptions).length === 0) {
            toast.warning("Please select at least one option before continuing.");
            return;
        }

        console.log("Selected options:", selectedOptions);
        dispatch(setMultipleDescriptionTask(selectedOptions));
        router.push("/create-eng-certificates");
    };

    return (
        <div className="py-4 bg-[#F1F5F9] min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Description Task</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {categories.map((category, i) => (
                    <div key={i} className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
                        <ol className="pl-6 space-y-2">
                            {category.items.map((item, j) => (
                                <li
                                    key={j}
                                    onClick={() => toggleItem(i, j)}
                                    className={`px-8 py-3 flex items-center w-fit gap-2 font-medium shadow-sm  rounded-2xl transition-colors cursor-pointer ${item.selected ? "!text-white" : "text-black"
                                        }`}
                                    style={{
                                        borderRadius: "8px",
                                        background: item.selected
                                            ? "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%) "
                                            : "white",
                                    }}
                                >
                                    {item.selected && <CheckCheck />}
                                    <p className="font-medium">{item.label}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-8">
                <PrimaryButton label="Save & Continue" onClick={handleSave} />
            </div>
        </div>
    );
};

export default Services4Des;
