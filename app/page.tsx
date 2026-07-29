import HomeClient from "./HomeClient";
import { HeroData } from "@/components/pages/HomeHeroSection/HeroData";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Home | " + HeroData.title,
  description: HeroData.description,
});

export default function Home() {
  return <HomeClient />;
}
