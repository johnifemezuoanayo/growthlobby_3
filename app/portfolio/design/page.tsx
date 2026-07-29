import DesignClient from "./DesignClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Design Services",
  description:
    "Brand systems, web interfaces, presentation design, and polished visual direction for modern businesses.",
});

export default function DesignServicePage() {
  return <DesignClient />;
}
