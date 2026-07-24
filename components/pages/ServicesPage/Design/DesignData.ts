export interface ProjectDetailData {
  id: string;
  title: string;
  sector: string;
  tags: string[];
  client: string;
  duration: string;
  intro: string;
  projectOverview: string;
  heroImage: string;
  detailLeftImage: string;
  detailRightImage: string;
  ourApproach: string;
  visitLink: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
}

export const projectsDetailsData: Record<string, ProjectDetailData> = {
  "proj-storyline": {
    id: "proj-storyline",
    title: "Storyline Church",
    sector: "Church",
    tags: ["Church", "Nonprofit"],
    client: "Storyline Church",
    duration: "15 weeks",
    intro:
      "Storyline Church, a faith-based organization, needed a website that communicated their values, mission, and community events. The goal was to create an online space that would resonate with current members and attract new visitors who were interested in joining the church community.",
    projectOverview:
      "We developed a welcoming and accessible website that showcased Storyline Church's mission, values, and service offerings. The site included event calendars, sermon archives, volunteer opportunities, and ways to get involved with the church. Since launching, Storyline Church has seen an increase in new visitors and engagement from both members and newcomers.",
    heroImage: "/images/project-1.png",
    detailLeftImage: "/images/project-1.png",
    detailRightImage: "/images/project-1.png",
    ourApproach:
      "FōKUS Group Designs Modern, Science-Backed Learning Experiences For Frontline Teams, Support Roles, And Highly Regulated Industries. Their Work Directly Impacts Onboarding Speed, Communication Quality, And Real-World Performance—Requiring A Brand And Website That Felt Credible, Energetic, And Results-Driven.",
    visitLink: "https://storylinechurch.example.com",
    accentColor: "bg-[#B4E615]",
    accentBg: "bg-[#1e1e1e]",
    accentText: "text-[#B4E615]",
  },
  "proj-beyond-court": {
    id: "proj-beyond-court",
    title: "Beyond The Court",
    sector: "Sport",
    tags: ["Sport", "Consulting"],
    client: "Zeke Marshall / Beyond The Court",
    duration: "8 weeks",
    intro:
      "Beyond The Court is the platform of former professional basketball player Zeke Marshall, built on the belief that the game is bigger than basketball. They use sport as a vehicle for personal growth, identity, and community development.",
    projectOverview:
      "We designed and developed an elegant, content-rich web experience that successfully carries both sides of Zeke's story: his professional athletic credibility and his deeper philanthropic mission. The platform hosts motivational resources, coaching modules, community programs, and an active blog.",
    heroImage: "/images/project-2.png",
    detailLeftImage: "/images/project-2.png",
    detailRightImage: "/images/project-2.png",
    ourApproach:
      "We prioritized dynamic high-contrast typography and motion-based layouts that mirror the physical energy of basketball, while employing sophisticated off-white tones and generous grid spaces to project professional consulting authority.",
    visitLink: "https://beyondthecourt.example.com",
    accentColor: "bg-orange-500",
    accentBg: "bg-zinc-900",
    accentText: "text-orange-500",
  },
  "proj-aether-ai": {
    id: "proj-aether-ai",
    title: "Aether AI Analytics",
    sector: "Tech",
    tags: ["AI", "SaaS", "Tech", "Enterprise"],
    client: "Aether Technologies Inc.",
    duration: "12 weeks",
    intro:
      "Aether AI is an enterprise SaaS platform delivering powerful predictive intelligence and visual charts to operations leaders. They needed a marketing site and customer dashboard that translated complex data streams into simple, actionable visual decisions.",
    projectOverview:
      "We designed a cohesive developer-friendly brand design system and built an ultra-fast React dashboard with customized chart controls, predictive analytics toggles, and seamless dark-mode support to convert corporate decision-makers.",
    heroImage: "/images/project-3.png",
    detailLeftImage: "/images/project-3.png",
    detailRightImage: "/images/project-3.png",
    ourApproach:
      "Emphasizing technical clarity, we introduced monospace metadata trackers, subtle blue and violet laser accents, and a razor-sharp grid system that mirrors the algorithmic precision of their AI engine.",
    visitLink: "https://aetherai.example.com",
    accentColor: "bg-indigo-500",
    accentBg: "bg-slate-900",
    accentText: "text-indigo-400",
  },
  "proj-oasis-retreats": {
    id: "proj-oasis-retreats",
    title: "Oasis Retreats",
    sector: "Hospitality",
    tags: ["Vacation Rentals", "Real Estate", "Hospitality"],
    client: "Oasis Luxury Portfolio",
    duration: "10 weeks",
    intro:
      "A curated vacation rental brand showcasing ultra-luxury villas and bespoke hospitality services in the world's most serene coastal destinations.",
    projectOverview:
      "We built an immersive web portal featuring a custom high-resolution photo masonry grid, real-time villa availability indicators, a high-touch reservation concierge interface, and custom travel guide elements.",
    heroImage: "/images/project-1.png",
    detailLeftImage: "/images/project-1.png",
    detailRightImage: "/images/project-1.png",
    ourApproach:
      "We implemented an editorial-style interface featuring elegant Italian-inspired serif headings, natural beige and deep olive color systems, and a lazy-loading masonry experience that puts premium photography first.",
    visitLink: "https://oasisretreats.example.com",
    accentColor: "bg-emerald-600",
    accentBg: "bg-stone-900",
    accentText: "text-emerald-400",
  },
};
