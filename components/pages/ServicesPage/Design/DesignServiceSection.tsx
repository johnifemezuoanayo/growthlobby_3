"use client"

import { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Layers,
  LayoutGrid,
  Sparkles,
  Presentation,
  AppWindow,
  PlayCircle,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function DesignServiceSection() {
  const items: ServiceItem[] = [
    {
      id: "srv-website-design",
      title: "Website Design",
      description:
        "We build wireframes, mockups and full-scale designs for your website. We can build this to spec for any web design platform.",
      icon: <Layers className="h-5 w-5 text-[#FF2E93]" />,
    },
    {
      id: "srv-platform-design",
      title: "Platform Design",
      description:
        "Apps, interfaces, SaaS - whatever it is, we can build bespoke platform designs for it. These designs can be provided in low or high def, depending on your development requirements.",
      icon: <LayoutGrid className="h-5 w-5 text-[#FF2E93]" />,
    },
    {
      id: "srv-branding",
      title: "Branding",
      description:
        "Whether it's a logo, brand guidelines, fonts or even pitch decks, we cover every element of branding for your business. We can offer the full suite of branding services under one roof.",
      icon: <Sparkles className="h-5 w-5 text-[#FF2E93]" />,
    },
    {
      id: "srv-deck-design",
      title: "Deck Design",
      description:
        "Particularly useful for companies pitching or reporting to investors. Blow clients away with industry-leading decks that showcase your work to its full potential.",
      icon: <Presentation className="h-5 w-5 text-[#FF2E93]" />,
    },
    {
      id: "srv-ux-design",
      title: "UX Design",
      description:
        "Make sure your users are getting the absolute maximum from their time on your website or app. Our specialists can guide and execute on your vision.",
      icon: <AppWindow className="h-5 w-5 text-[#FF2E93]" />,
    },
    {
      id: "srv-motion-graphics",
      title: "Motion Graphics",
      description:
        "It can be difficult to find the right GIF designer. Luckily, we have several in-house who can animate any image you supply. We can also build these from scratch.",
      icon: <PlayCircle className="h-5 w-5 text-[#FF2E93]" />,
    },
  ];

  return (
    <section
      id="services-section"
      className="relative bg-[#EAF3FA] text-zinc-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-100"
    >
      <div className="relative w-full max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5DCD3]/65 border border-zinc-200/40 text-xs font-semibold text-zinc-700 tracking-wider">
            <span>Education</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E0B36] leading-[1.15] font-sans">
            Everything you need,
            <br />
            for one monthly fee
          </h2>
        </div>

        {/* 3x2 Bento Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`service-card-${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between bg-white rounded-3xl p-8 shadow-md border border-zinc-100/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Soft pink rounded container for icon */}
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#FFF0F5] border border-[#FFE4E1] transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Text Block */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E0B36] tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
