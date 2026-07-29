import HomeClient from "./HomeClient";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Home | GrowthLobby",
  description:
    "Growthlobby is a web design and development agency that helps businesses increase their online visibility and revenue.",
});

export default function Home() {
  return <HomeClient />;
}
