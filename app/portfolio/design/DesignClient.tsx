"use client";

import { useQuery } from "@apollo/client/react";
import { IProjectData } from "@/base/interface/IProject";
import { PROJECT_QUERY } from "@/base/queries/project";
import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import DesignAboutMeSection from "@/components/pages/ServicesPage/Design/DesignAboutMeSection";
import DesignFAQSection from "@/components/pages/ServicesPage/Design/DesignFAQSection";
import DesignHeroSection from "@/components/pages/ServicesPage/Design/DesignHeroSection";
import DesignPricingSection from "@/components/pages/ServicesPage/Design/DesignPricingSection";
import DesignProjectSection from "@/components/pages/ServicesPage/Design/DesignProjectSection";
import DesignServiceSection from "@/components/pages/ServicesPage/Design/DesignServiceSection";
import DesignStepSection from "@/components/pages/ServicesPage/Design/DesignStepSection";

export default function DesignClient() {
  const { data, loading } = useQuery<IProjectData>(PROJECT_QUERY);
  const projects = (data?.growthlobbyCaseStudies || [])
    .filter((p) => (p.projectType || "").toLowerCase() !== "development")
    .slice(0, 4);

  return (
    <>
      <DesignHeroSection />
      <DesignServiceSection />
      {loading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-[#eef0e6]">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading projects...</span>
        </div>
      ) : (
        <DesignProjectSection projects={projects} />
      )}
      <DesignPricingSection />
      <DesignFAQSection />
      <ContactMeSection />
    </>
  );
}
