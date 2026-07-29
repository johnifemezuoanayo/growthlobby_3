import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import AllProjectsClient from "./AllProjectsClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Design Projects",
  description:
    "Browse our full portfolio of brand, UI, and visual design work across industries.",
});

export default function AllDesignProjectsPage() {
  return (
    <>
      <AllProjectsClient />
      <ContactMeSection />
    </>
  );
}
