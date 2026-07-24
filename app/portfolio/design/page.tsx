import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import DesignAboutMeSection from "@/components/pages/ServicesPage/Design/DesignAboutMeSection";
import DesignFAQSection from "@/components/pages/ServicesPage/Design/DesignFAQSection";
import DesignHeroSection from "@/components/pages/ServicesPage/Design/DesignHeroSection";
import DesignPricingSection from "@/components/pages/ServicesPage/Design/DesignPricingSection";
import DesignProjectSection from "@/components/pages/ServicesPage/Design/DesignProjectSection";
import DesignServiceSection from "@/components/pages/ServicesPage/Design/DesignServiceSection";
import DesignStepSection from "@/components/pages/ServicesPage/Design/DesignStepSection";

export default function DesignServicePage() {
  return (
    <>
      <DesignHeroSection />
      <DesignServiceSection />
      <DesignStepSection />
      <DesignProjectSection />
      <DesignPricingSection />
      <DesignAboutMeSection />
      <DesignFAQSection />
      <ContactMeSection />
    </>
  );
}
