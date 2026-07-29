"use client"

import FAQSvg from "@/components/Icons/FAQSvg";
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { FAQItem, FAQItemData } from "../BookaCallFAQ.tsx/FAQItem";
import { AboutFaqData } from "./AboutFaqData";


/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function AboutFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full px-6 py-20 bg-[#E6E4E8]/90 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-20">
        {/* left column */}
        <div>
          <FAQSvg />

          <h2 className="mt-6 text-4xl text-[#1E2733] font-medium leading-tight sm:text-5xl">
            Frequently asked by people
          </h2>

          <p className="mt-4 max-w-xs text-sm text-[#7A8593] leading-relaxed sm:text-base">
            Common questions about working with me.
          </p>
        </div>

        {/* right column — accordion */}
        <div>
          {AboutFaqData.map((item: FAQItemData, i: number) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              isLast={i === AboutFaqData.length - 1}
              delay={0.1 + i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
