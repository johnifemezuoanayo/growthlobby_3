import BlogClient from "./BlogClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on web design, development, branding, and digital growth for founders and growing businesses.",
});

export default function BlogPage() {
  return <BlogClient />;
}
