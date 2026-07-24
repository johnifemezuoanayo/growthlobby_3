import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import AllDesignProjects from "@/components/pages/ServicesPage/Design/AllDesignProjects";
import AllDesignProjectsHero from "@/components/pages/ServicesPage/Design/AllDesignProjectsHero";


export default function AllDesignProjectsPage() {
  return (
    <>
      <AllDesignProjectsHero />
      <AllDesignProjects />
      <ContactMeSection />
    </>
  );
}
