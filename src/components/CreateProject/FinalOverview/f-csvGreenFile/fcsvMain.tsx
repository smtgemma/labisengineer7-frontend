
"use client"
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import FcsvD0 from './fcsvD0'
import FcsvD1 from './fcsvD1'
import FcsvD2 from './fcsvD2';
import FcsvD3 from './fcsvD3';

function FcsvMain({ allData }: { allData: any }) {
    const [activeTab, setActiveTab] = useState("ΕΞΩΦΥΛΛΟ");
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };
    const tabs = [
        {id: "ΕΞΩΦΥΛΛΟ", label: "ΕΞΩΦΥΛΛΟ"},
        { id: "1. ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ", label: "1. ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ" },
        { id: "2. ΕΚΤΙΜΗΣΗ ΠΑΡΑΓΟΜΕΝΩΝ ΑΕΚΚ", label: "2. ΕΚΤΙΜΗΣΗ ΠΑΡΑΓΟΜΕΝΩΝ ΑΕΚΚ" },
        { id: "ΦΑΣΗ 1", label: "2.1 ΦΑΣΗ 1" },
        { id: "ΦΑΣΗ 2", label: "2.2 ΦΑΣΗ 2" },
        { id: "ΦΑΣΗ 3", label: "2.3 ΦΑΣΗ 3" },
        { id: "ΦΑΣΗ 4", label: "2.4 ΦΑΣΗ 4" },
        { id: "ΦΑΣΗ 5", label: "2.5 ΦΑΣΗ 5" },
        { id: "ΦΑΣΗ 6", label: "2.6 ΦΑΣΗ 6" },
        { id: "ΦΑΣΗ 7", label: "2.7 ΦΑΣΗ 7" },
        { id: "ΦΑΣΗ 8", label: "2.8 ΦΑΣΗ 8" },
        { id: "ΦΑΣΗ 9", label: "2.9 ΦΑΣΗ 9" },
        { id: "ΦΑΣΗ 10", label: "2.10 ΦΑΣΗ 10" },
    ];
    return (
        <div>
            {/* Conditional Tab Content */}
            <div className="p-6">
                {activeTab === "ΕΞΩΦΥΛΛΟ" && <FcsvD0 allData={allData} />}
                {activeTab === "1. ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ" && <FcsvD1 />}
                {activeTab === "2. ΕΚΤΙΜΗΣΗ ΠΑΡΑΓΟΜΕΝΩΝ ΑΕΚΚ" && <FcsvD2 />}
                {activeTab === "ΦΑΣΗ 1" && <FcsvD3 number= "1" />}
                {activeTab === "ΦΑΣΗ 2" && <FcsvD3 number= "2" />}
                {activeTab === "ΦΑΣΗ 3" && <FcsvD3 number= "3" />}
                {activeTab === "ΦΑΣΗ 4" && <FcsvD3 number= "4" />}
                {activeTab === "ΦΑΣΗ 5" && <FcsvD3 number= "5" />}
                {activeTab === "ΦΑΣΗ 6" && <FcsvD3 number= "6" />}
                {activeTab === "ΦΑΣΗ 7" && <FcsvD3 number= "7" />}
                {activeTab === "ΦΑΣΗ 8" && <FcsvD3 number= "8" />}
                {activeTab === "ΦΑΣΗ 9" && <FcsvD3 number= "9" />}
                {activeTab === "ΦΑΣΗ 10" && <FcsvD3 number= "10" />}
            </div>
            {/* Fixed Bottom Buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md z-50">
                <div className="relative flex items-center">
                    {/* Left Scroll Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 h-full px-2 bg-white/80 hover:bg-gray-100 z-10"
                    >
                        <ChevronLeft size={20} className='mb-3' />
                    </button>

                    {/* Tabs Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto no-scrollbar scroll-smooth w-full px-8"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`flex-shrink-0 px-6 py-2 whitespace-nowrap transition ${activeTab === tab.id
                                    ? "bg-[#D3E3FD] text-blue-600 font-semibold"
                                    : "text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 h-full px-2 bg-white/80 hover:bg-gray-100 z-10"
                    >
                        <ChevronRight size={20} className='mb-3' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FcsvMain




// 1. ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ
// 2. ΕΚΤΙΜΗΣΗ ΠΑΡΑΓΟΜΕΝΩΝ ΑΕΚΚ
// 2.1 ΦΑΣΗ 1
// 2.2 ΦΑΣΗ 2
// 2.3 ΦΑΣΗ 3
// 2.4 ΦΑΣΗ 4
// 2.5 ΦΑΣΗ 5
// 2.6 ΦΑΣΗ 6
// 2.7 ΦΑΣΗ 7
// 2.8 ΦΑΣΗ 8
// 2.9 ΦΑΣΗ 9
// 2.10 ΦΑΣΗ 10

