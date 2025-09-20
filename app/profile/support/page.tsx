"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    id: "1",
    question: "How can I track my order?",
    answer:
      "You can track your order by visiting the Orders section in your profile. Click on the order number to see real-time updates.",
  },
  {
    id: "2",
    question: "What should I do if my payment fails?",
    answer:
      "If your payment fails, please check your bank statement. Any deducted amount will be refunded automatically within 3-5 business days. You can try placing the order again.",
  },
  {
    id: "3",
    question: "How can I cancel an order?",
    answer:
      "You can cancel your order from the Orders page, but only before it is shipped. Once shipped, please contact customer support.",
  },
  {
    id: "4",
    question: "How can I contact customer support?",
    answer:
      "You can reach out to customer support through the Support section in your profile, or call our helpline during working hours.",
  },
  {
    id: "5",
    question: "How do I update my account details?",
    answer:
      "Go to your Profile page and click on 'Edit Profile' to update your personal information, address, or phone number.",
  },
];

export default function SupportPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Support</h1>

      <div className="flex flex-col gap-2">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
            >
              <span className="font-medium">{faq.question}</span>
              {openId === faq.id ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Answer section */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openId === faq.id
                  ? "max-h-screen px-4 pt-2 pb-4"
                  : "max-h-0 px-0 pt-0 pb-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
