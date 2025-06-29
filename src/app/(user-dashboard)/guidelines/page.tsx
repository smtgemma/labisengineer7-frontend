"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["1"])
  );

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What is this platform for?",
      answer:
        "It helps civil engineers in Greece automate technical documentation like HTK, e-Aubas, etc.",
      isExpanded: true,
    },
    {
      id: "2",
      question: "How does the AI extract data from documents?",
      answer:
        "Our AI uses advanced machine learning algorithms to analyze and extract relevant information from your uploaded documents automatically.",
    },
    {
      id: "3",
      question: "What types of documents can I upload?",
      answer:
        "You can upload various document formats including PDF, DOC, DOCX, JPG, PNG, and other common file types used in civil engineering.",
    },
    {
      id: "4",
      question: "Is the data I upload secure?",
      answer:
        "Yes, all data is encrypted and stored securely. We follow industry-standard security practices to protect your information.",
    },
    {
      id: "5",
      question: "Can I edit extracted data manually?",
      answer:
        "Yes, you can review and manually edit any extracted data to ensure accuracy before generating your final documents.",
    },
    {
      id: "6",
      question: "What do I get in the free plan?",
      answer:
        "The free plan includes 1 active project, basic AI extraction, and manual download capabilities.",
    },
    {
      id: "7",
      question: "How do automation scripts work?",
      answer:
        "Automation scripts help streamline your workflow by automatically processing documents and generating required outputs based on predefined rules.",
    },
    {
      id: "8",
      question: "Can I download all my documents at once?",
      answer:
        "Yes, you can download all your generated documents in a single ZIP file for convenience.",
    },
    {
      id: "9",
      question: "How do I contact support?",
      answer:
        "You can contact our support team through the help section in your dashboard or by emailing support@platform.com.",
    },
  ];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={` min-h-screen bg-[#F1F5F9] py-8 px-12 ${className}`}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => {
              const isExpanded = expandedItems.has(item.id);
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Minus size={14} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <Plus size={14} className="text-gray-600" />
                        </div>
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => {
              const isExpanded = expandedItems.has(item.id);
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Minus size={14} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <Plus size={14} className="text-gray-600" />
                        </div>
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
