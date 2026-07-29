"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectSvg from "../../Icons/ProjectSvg";
import Image from "next/image";
import NavButton from "../../ui/Navbar/NavButton";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";
import { useRouter } from "next/navigation";

import { IProjectWeb } from "@/base/interface/IProject";

const DEFAULT_PROJECTS = [
  {
    id: "proj-storyline",
    title: "The Hybrid way",
    image: "/images/project-1.png",
    bg: "bg-[#ff6b6b]",
  },
  {
    id: "proj-beyond-court",
    title: "Tradie Marketing Hub",
    image: "/images/project-2.png",
    bg: "bg-neutral-200",
  },
  {
    id: "proj-aether-ai",
    title: "Fokus Training",
    image: "/images/project-3.png",
    bg: "bg-[#c6ff3d]",
  },
];

interface ProjectSectionProps {
  projects?: IProjectWeb[];
}

export default function ProjectSection({ projects }: ProjectSectionProps = {}) {
  const router = useRouter();
  const displayProjects = projects && projects.length > 0 ? projects.slice(0, 4) : DEFAULT_PROJECTS;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0, moved: false });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    };
    const onLeave = () => setCursor((c) => ({ ...c, visible: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const s = scrollerRef.current;
    if (!s) return;
    setIsDragging(true);
    drag.current = {
      startX: e.pageX - s.offsetLeft,
      scrollLeft: s.scrollLeft,
      moved: false,
    };
  };
  const onMouseMoveDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const s = scrollerRef.current;
    if (!s) return;
    e.preventDefault();
    const x = e.pageX - s.offsetLeft;
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 4) drag.current.moved = true;
    s.scrollLeft = drag.current.scrollLeft - walk;
  };
  const endDrag = () => setIsDragging(false);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#eef0e6] py-t md:pt-24 overflow-hidden [background-image:radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:14px_14px]"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl mt-12 px-6 lg:px-0">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionBadge>Projects</SectionBadge>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Building Websites That <br /> Drive Results
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
              Want a professional website that converts visitors into loyal
              customers? Explore my portfolio to see how I&apos;ve turned
              visions into vibrant realities. From sleek e-commerce sites to
              engaging portfolios, my designs are crafted to meet your thriving
              business needs and stand out in the digital landscape.
            </p>
          </div>
          <div className="flex md:justify-end">
            <NavButton
              href="/contact"
              className="sm:ml-6 bg-brand-primary text-black hover:bg-white"
            >
              View All Work
            </NavButton>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMoveDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={`mt-12 flex gap-6 overflow-x-auto scroll-smooth px-6 -mb-8 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none ${
          isDragging ? "cursor-none" : "cursor-none"
        }`}
      >
        {displayProjects.map((p, i) => (
          <article
            key={i}
            onClick={(e) => {
              if (drag.current.moved) {
                e.preventDefault();
                return;
              }
              if (p.id) {
                router.push(`/portfolio/development/${p.id}`);
              }
            }}
            className={`group relative overflow-hidden h-[800px] flex-none w-[85vw] sm:w-[520px] md:w-[600px] h-auto lg:w-[740px] rounded-2xl lg:rounded-4xl border-6 lg:border-12 border-[#EDF0DE] pt-6 lg:pt-14 pl-6 lg:pl-14 shadow-sm cursor-pointer ${(p as any).bg || "bg-white"}`}
          >
            <div className="pr-14">
              <div className="flex items-center justify-between">
                <span className=" bg-[#F0F1EC] font-mono capitalize rounded-full px-4 py-2 text-sm font-medium text-neutral-800">
                  {(p as any).sector || "Services"}
                </span>
                <span className="grid h-11 w-[70px] place-items-center rounded-full bg-[#c6ff3d] text-neutral-900">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-manrope font-semibold text-2xl text-neutral-900 md:text-3xl">
                {p.title}
              </h3>
            </div>
            <div className={`mt-5 overflow-hidden rounded-tl-4xl`}>
              <Image
                width={700}
                height={800}
                priority
                src={(p as any).coverImage?.url || (p as any).image || ""}
                alt={p.title}
                draggable={false}
                className="h-full w-full min-h-[700px] object-cover mix-blend-multiply pointer-events-none"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Custom cursor */}
      <div
        aria-hidden
        style={{
          transform: `translate(${cursor.x - 40}px, ${cursor.y - 40}px)`,
          opacity: cursor.visible ? 1 : 0,
        }}
        className="pointer-events-none absolute left-0 top-0 z-50 grid h-20 w-20 place-items-center rounded-full bg-[#c6ff3d] text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-opacity duration-150"
      >
        {isDragging ? "Drag" : "Click"}
      </div>
    </section>
  );
}
