import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Field {
    label: string;
    dataKey: string;
}

interface CollapsibleSectionProps {
    title?: string;
    data?: Record<string, any>;
    fields?: Field[];
    defaultOpen?: boolean;
}

const CollapsibleSection = ({
    title = "Section Title",
    data = {},
    fields = [],
    defaultOpen = false
}: CollapsibleSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50";

    return (
        <div className="mt-10">
            <div className="bg-white p-6 border border-primary rounded-xl shadow-md w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {!isOpen ? (
                                <IoIosArrowDown className="text-2xl" />
                            ) : (
                                <IoIosArrowUp className="text-2xl" />
                            )}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                        {fields.map((field, index) => {
                            const fieldValue = data[field.dataKey];
                            return (
                                <div key={index}>
                                    <label className="block text-sm font-medium mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        className={inputStyle}
                                        readOnly
                                        value={fieldValue ?? 'No value'} // Using nullish coalescing
                                    />
                                    {fieldValue === undefined && (
                                        <p className="text-xs text-yellow-600 mt-1">
                                            No value extracted for this field
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollapsibleSection;