"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Inbox } from "lucide-react";
import Image from "next/image";
import NavButton from "@/components/ui/Navbar/NavButton";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
}

export default function AllDesignProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Agency",
    "AI",
    "Automotive",
    "Church",
    "Consulting",
    "Education",
    "Energy",
    "Enterprise",
    "Entertainment",
    "Events",
    "Finance",
    "Fitness",
    "Hospitality",
    "Industrial",
    "Insurance",
    "Law",
    "Manufacturing",
    "Marketing",
    "Media",
    "Medical",
    "Nonprofit",
    "Real Estate",
    "Recruitment",
    "Retail",
    "SaaS",
    "Security",
    "Sport",
    "Tech",
    "Travel",
    "Vacation Rentals",
    "Venture Capital",
    "Video Production",
    "Web3",
  ];

  const projects: Project[] = [
    {
      id: "proj-beyond-court",
      title: "Beyond The Court",
      description:
        "Beyond The Court is the platform of former professional basketball player Zeke Marshall, built on the belief that the game is bigger than basketball.",
      longDescription:
        "They use sport as a vehicle for personal growth, identity and community, and needed a website that could carry both sides of that story: the athletic credibility and the deeper mission behind it.",
      image: "/images/project-1.png",
      tags: ["Sport", "Consulting"],
    },
    {
      id: "proj-aether-ai",
      title: "Aether AI Analytics",
      description:
        "Aether AI is an enterprise SaaS platform delivering powerful predictive intelligence and visual charts to operations leaders.",
      longDescription:
        "We built a modern, ultra-responsive dashboard interface with clean data visuals, custom charts, and a highly professional UI to convert visitors and serve active accounts.",
      image: "/images/project-2.png",
      tags: ["AI", "SaaS", "Tech", "Enterprise"],
    },
    {
      id: "proj-oasis-retreats",
      title: "Oasis Retreats",
      description:
        "A high-end luxury vacation rental and real estate portfolio showcasing pristine villas and boutique hospitality experiences.",
      longDescription:
        "Featuring seamless booking integration, immersive high-resolution photography layout, sophisticated serif typography, and natural earth-tone color palettes.",
      image: "/images/project-3.png",
      tags: ["Vacation Rentals", "Real Estate", "Hospitality"],
    },
  ];

  // Filter projects based on selectedCategory
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.tags.includes(selectedCategory);
  });

  return (
    <section
      id="portfolio-section"
      className="relative bg-white text-zinc-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-100"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Category Pills Header Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#4A6070] uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/50">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Crafted Projects Across Industries
            </h2>
          </div>

          {/* Category Filter Grid/Flex matching screenshot layout */}
          <div className="flex flex-wrap justify-center gap-2 max-w-7xl mx-auto pt-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full cursor-pointer text-xs font-semibold border  transition-all duration-300 ${
                    isSelected
                      ? "bg-brand-primary border-zinc-50 text-black shadow-md"
                      : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Display */}
        <div className="space-y-8 sm:space-y-12 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <div className="space-y-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    id={`portfolio-card-${project.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group bg-white rounded-3xl border border-6 border-zinc-200/60 p-5 sm:p-6 lg:p-4 flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch hover:shadow-xl hover:shadow-zinc-200/30 transition-all duration-300"
                  >
                    {/* Left: Image mockups container */}
                    <div className="relative w-full md:w-[35%] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100 flex items-center justify-center h-[350px] ">
                      <Image
                        width={600}
                        height={600}
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                      />
                    </div>

                    {/* Right: Project text details */}
                    <div className="flex flex-col justify-between py-2 md:w-[52%] space-y-6">
                      <div className="space-y-5">
                        {/* Dynamic category sub-tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1  bg-brand-primary/10 border border-zinc-200/40 text-xs font-semibold text-zinc-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight font-sans">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                            {project.description}
                          </p>
                          {project.longDescription && (
                            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal">
                              {project.longDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Read More button */}
                      <div className="pt-2">
                        <NavButton
                          href="/contact"
                          size="large"
                          className="w-[170px] bg-brand-primary text-black hover:bg-white border border-zinc-100"
                        >
                          Learn More
                        </NavButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Empty state placeholder when filtering is empty */
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl border border-dashed border-zinc-300 p-12 text-center max-w-xl mx-auto space-y-6"
              >
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-400">
                    <Inbox className="h-8 w-8 stroke-[1.5] text-brand-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-800">
                    No Showcase Built Yet
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mx-auto">
                    We&rsquo;ve designed websites for{" "}
                    <strong>{selectedCategory}</strong> projects, but
                    they&lsquo;re not in the showcase yet. Let&lsquo;s make
                    yours our next masterpiece!
                  </p>
                </div>
                <div>
                  <NavButton
                    href="/contact"
                    size="large"
                    className="w-[170px] mx-auto  bg-brand-primary text-black hover:bg-white border border-zinc-100"
                  >
                    Start project
                  </NavButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
