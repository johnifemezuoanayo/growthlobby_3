"use client"

import FAQSvg from "@/components/Icons/FAQSvg";
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { FAQItem, FAQItemData } from "../../BookaCallFAQ.tsx/FAQItem";
import { FAQData } from "../../BookaCallFAQ.tsx/FaqData";


/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function DesignFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full px-6 py-20 bg-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-20">
        {/* left column */}
        <div>
          <FAQSvg />

          <h2 className="mt-6 text-4xl text-[#1E2733] font-medium leading-tight sm:text-5xl">
            Ask Us Anything
          </h2>

          <p className="mt-4 max-w-xs text-sm text-[#7A8593] leading-relaxed sm:text-base">
            Have a question? Find quick answers below or contact us for more
            details.
          </p>
        </div>

        {/* right column — accordion */}
        <div>
          {FAQData.map((item: FAQItemData, i: number) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              isLast={i === FAQData.length - 1}
              delay={0.1 + i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
