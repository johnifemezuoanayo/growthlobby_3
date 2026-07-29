"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Inbox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavButton from "@/components/ui/Navbar/NavButton";
import { IProject } from "@/base/interface/IProject";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  slug?: string;
  projectType?: string;
}

interface AllDesignProjectsProps {
  projects?: IProject[];
}

export default function AllDesignProjects({ projects }: AllDesignProjectsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const mockProjects = [
    {
      id: "proj-beyond-court",
      slug: "proj-beyond-court",
      title: "Beyond The Court",
      description:
        "Beyond The Court is the platform of former professional basketball player Zeke Marshall, built on the belief that the game is bigger than basketball.",
      longDescription:
        "They use sport as a vehicle for personal growth, identity and community, and needed a website that could carry both sides of that story: the athletic credibility and the deeper mission behind it.",
      image: "/images/project-1.png",
      tags: ["Sport", "Consulting"],
      projectType: "Brand Design",
    },
    {
      id: "proj-aether-ai",
      slug: "proj-aether-ai",
      title: "Aether AI Analytics",
      description:
        "Aether AI is an enterprise SaaS platform delivering powerful predictive intelligence and visual charts to operations leaders.",
      longDescription:
        "We built a modern, ultra-responsive dashboard interface with clean data visuals, custom charts, and a highly professional UI to convert visitors and serve active accounts.",
      image: "/images/project-2.png",
      tags: ["AI", "SaaS", "Tech", "Enterprise"],
      projectType: "SaaS Dashboard",
    },
    {
      id: "proj-oasis-retreats",
      slug: "proj-oasis-retreats",
      title: "Oasis Retreats",
      description:
        "A high-end luxury vacation rental and real estate portfolio showcasing pristine villas and boutique hospitality experiences.",
      longDescription:
        "Featuring seamless booking integration, immersive high-resolution photography layout, sophisticated serif typography, and natural earth-tone color palettes.",
      image: "/images/project-3.png",
      tags: ["Vacation Rentals", "Real Estate", "Hospitality"],
      projectType: "Web Design",
    },
  ];

  const displayProjects: Project[] = useMemo(() => {
    const list = projects && projects.length > 0 ? projects : mockProjects;
    const filteredList = list.filter((p) => {
      const type = ((p as any).projectType || "").toLowerCase();
      return type !== "development";
    });
    return filteredList.map((p) => {
      const type = (p as any).projectType || "Design";
      return {
        id: p.id || p.slug || "",
        title: p.title,
        description: p.description || "",
        longDescription: (p as any).longDescription || "",
        image: (p as any).introImage?.url || (p as any).image || "",
        tags: [type],
        link: (p as any).livesite || (p as any).link || "",
        slug: p.slug || "",
        projectType: type,
      };
    });
  }, [projects]);

  // Extract unique categories dynamically based on project types
  const categories = useMemo(() => {
    const types = displayProjects.map((p) => p.projectType).filter(Boolean);
    const uniqueTypes = Array.from(new Set(types)) as string[];
    return ["All", ...uniqueTypes];
  }, [displayProjects]);

  // Filter projects based on selectedCategory
  const filteredProjects = displayProjects.filter((project) => {
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
            <h2 className="text-3xl mt-5 sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
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
                  className={`px-4 capitalize py-2 rounded-full cursor-pointer text-xs font-semibold border  transition-all duration-300 ${
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
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    id={`portfolio-card-${project.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group flex flex-col justify-between bg-white rounded-3xl border-6 border-zinc-200/60 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Top: Project text details */}
                    <div className="p-6 sm:p-8 flex items-start justify-between gap-4">
                      {/* Left: Tags & Title */}
                      <div className="space-y-3">
                        {/* Dynamic category sub-tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-brand-primary/10 border border-zinc-200/40 text-[10px] font-bold uppercase tracking-wider text-zinc-600 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight font-sans group-hover:text-zinc-800 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Right: Round Arrow Button */}
                      <Link
                        href={`/portfolio/design/${project.slug || project.id}`}
                        className="flex-none w-12 h-12 rounded-full bg-[#B4E615] hover:bg-zinc-900 hover:text-white border border-zinc-200/50 flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-lg active:scale-95 cursor-pointer text-zinc-950"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    </div>

                    {/* Bottom: Image mockup banner */}
                    <div className="relative w-full aspect-[4/3] pl-6 sm:pl-8 bg-zinc-50 overflow-hidden">
                      <Image
                        width={800}
                        height={600}
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-tl-[50px] group-hover:scale-[1.03] transition-transform duration-700"
                      />
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
