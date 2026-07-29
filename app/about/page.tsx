import AboutFAQSection from "@/components/pages/AboutSections/AboutFAQSection";
import AboutHero from "@/components/pages/AboutSections/AboutHero";
import CoreValues from "@/components/pages/AboutSections/CoreValueSection";
import LocationSection from "@/components/pages/AboutSections/LocationSection";
import RecordSection from "@/components/pages/AboutSections/RecordSection";
import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import ProjectSection from "@/components/pages/HomeProjectSection/HomeProjectSection";
import ProcessSection from "@/components/pages/ProcessSection/ProcessSection";
import ServiceSection from "@/components/pages/ServiceSection/ServiceSection";
import HomeTestimonialSection from "@/components/pages/TestimonialSection/HomeTestimonialSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet John, a design engineer helping businesses build trust and grow online through strategy, design, and development.",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CoreValues />
      <RecordSection />
      <ServiceSection />
      <AboutFAQSection />
      <ProcessSection />
      <HomeTestimonialSection />
      <LocationSection /> 
      <ContactMeSection />
    </>
  );
}
