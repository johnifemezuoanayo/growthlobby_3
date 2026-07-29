import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import AllDevProjectsClient from "./AllDevProjectsClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Development Projects",
  description:
    "Browse our full portfolio of websites and web applications built for startups and growing businesses.",
});

export default function DevelopmentProjects() {
  return (
    <>
      <AllDevProjectsClient />
      <ContactMeSection />
    </>
  );
}
