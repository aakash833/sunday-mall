"use client";
import React, { useState } from "react";

export default function FooterAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "About Store", content: "Details about the store." },
    { title: "Customer Service", content: "Customer service information." },
    { title: "Information", content: "General information." },
    { title: "Sign Up to Newsletter", content: "Newsletter signup form." },
  ];

  return (
    <footer className="md:hidden bg-black text-white p-6">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 focus:outline-none"
            >
              <span className="text-lg font-medium">{section.title}</span>
              <span className="text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="text-sm text-gray-300 mb-4">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 mb-24 text-center text-sm">
        <p>Copyright © 2024 | All Rights Reserved</p>
        <p>SundayMall</p>
      </div>

      {/* <div className="mt-4 flex justify-center">
        <img
          src="/path/to/payment-logos.png" // Replace with actual payment logos image path
          alt="Payment Logos"
          className="w-full max-w-xs"
        />
      </div> */}

      {/* <div className="fixed bottom-8 right-8"> */}
      {/* <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/path/to/whatsapp-logo.png" // Replace with actual WhatsApp logo image path
            alt="WhatsApp"
            className="h-12 w-12"
          />
        </a> */}
      {/* </div> */}
    </footer>
  );
}
