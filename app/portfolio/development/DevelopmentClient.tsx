"use client";

import { useQuery } from "@apollo/client/react";
import { IProjectWebData } from "@/base/interface/IProject";
import { PROJECT_WEB_QUERY } from "@/base/queries/project";

import DevHero from "@/components/pages/ServicesPage/Development/DevHero";
import DevPricingSection from "@/components/pages/ServicesPage/Development/DevPricingSection";
import WhatWeOfferSection from "@/components/pages/ServicesPage/Development/WhatWeOffer";
import WhoAmISection from "@/components/pages/ServicesPage/Development/WhoAmISection";
import WhyChooseUsSection from "@/components/pages/ServicesPage/Development/WhyChooseUs";
import ProjectSection from "@/components/pages/HomeProjectSection/HomeProjectSection";
import DevFAQSection from "@/components/pages/ServicesPage/Development/DevFAQSection";
import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";

export default function DevelopmentClient() {
  const { data, loading } = useQuery<IProjectWebData>(PROJECT_WEB_QUERY);
  const projects = data?.webProjects || [];

  return (
    <>
      <DevHero />
      <WhyChooseUsSection />
      {loading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-[#eef0e6]">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading projects...</span>
        </div>
      ) : (
        <ProjectSection projects={projects} />
      )}
      <WhatWeOfferSection />
      <DevPricingSection />
      <DevFAQSection />
      <ContactMeSection />
    </>
  );
}
