import { CheckCheck } from "lucide-react";
import React from "react";

interface Option {
    id: string;
    label: string;
    selected?: boolean;
}

interface SelectOptionProps {
    option: Option;
    categoryId?: string | number;
    toggleOption: (
        categoryId: string | number | undefined,
        optionId: string | number
    ) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
    option,
    categoryId,
    toggleOption,
}) => {
    return (
        <button
            key={option.id}
            onClick={() => toggleOption(categoryId, option.id)}
            className={`px-8 py-3 flex items-center gap-2 font-medium shadow-sm  rounded-2xl transition-colors cursor-pointer ${option.selected ? "!text-white" : "text-black"
                }`}
            style={{
                borderRadius: "8px",
                background: option.selected
                    ? "linear-gradient(44deg, #017AFF 37.44%, #61BDFF 67.11%) "
                    : "white",
            }}
        >
            {option.selected && <CheckCheck />}
            <span>{option.label}</span>
        </button>
    );
};

export default SelectOption;

