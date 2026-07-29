import DevelopmentClient from "./DevelopmentClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Development Services",
  description:
    "Responsive websites, application builds, and technical delivery built for performance, speed, and growth.",
});

export default function DevelopmentServicePage() {
  return <DevelopmentClient />;
}
