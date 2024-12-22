import React from "react";

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  openIndex,
  toggleFAQ,
}) => (
  <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Section (FAQ Info) */}
    <div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>

    {/* Right Section (Questions) */}
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);
export default FAQSection;
