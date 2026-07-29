import FAQSection from "@/components/pages/BookaCallFAQ.tsx/BookaCallFAQ";
import BookACallSection from "@/components/pages/BookACallSection/BookACallSection";
import ExpertSection from "@/components/pages/BookACallSection/ExpertSection";
import WhatToExpectSection from "@/components/pages/BookACallSection/WhyBookACall";
import TestimonialSection from "@/components/pages/TestimonialSection/TestimonialSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Book a Call",
  description:
    "Schedule a free strategy session to discuss your website, brand, and business growth goals.",
});

export default function BookACall() {
  return (
    <>
      <BookACallSection />
      <WhatToExpectSection />
      <ExpertSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
