/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";
import Image from "next/image";
import React, { useRef, useState, useEffect, ReactNode } from "react";

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitive                                               */
/* ---------------------------------------------------------------------- */

function useInView(threshold: number = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

function Reveal({ children, delay = 0, y = 24, className = "" }: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Tokens                                                                */
/* ---------------------------------------------------------------------- */

interface ColorTokens {
  bg: string;
  heading: string;
  body: string;
  badgeBg: string;
  badgeText: string;
  frameMark: string;
  lime: string;
  cardBg: string;
  cardDot: string;
  titleDark: string;
  titleOlive: string;
}

const COLORS: ColorTokens = {
  bg: "#FFFFFF",
  heading: "#181C10",
  body: "#3A3E30",
  badgeBg: "#D6D6C9",
  badgeText: "#2B2E20",
  frameMark: "#8C9080",
  lime: "#CFEA46",
  cardBg: "#EEEEE3",
  cardDot: "#E1E1D3",
  titleDark: "#181C10",
  titleOlive: "#78832E",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

interface TitleSegment {
  text: string;
  olive?: boolean;
}

interface BlogPost {
  tag: string;
  titleSegments: TitleSegment[];
  body: string;
  image: string;
}

const TITLE_SEGMENTS: TitleSegment[] = [
  { text: "Web Design " },
  { text: "Advice After 7 ", olive: true },
  { text: "Years: Principles " },
  { text: "That Build ", olive: true },
  { text: "High-Converting " },
  { text: "Websites", olive: true },
];

const BLOG_POSTS: BlogPost[] = [
  {
    tag: "Web Design",
    titleSegments: TITLE_SEGMENTS,
    body: "Discover 16 essential web design principles learned over 7 years of experience.",
    image:
      "/images/project-1.png",
  },
  {
    tag: "Web Design",
    titleSegments: TITLE_SEGMENTS,
    body: "Discover 16 essential web design principles learned over 7 years of experience.",
    image:
      "/images/project-2.png",
  },
  {
    tag: "Web Design",
    titleSegments: TITLE_SEGMENTS,
    body: "Discover 16 essential web design principles learned over 7 years of experience.",
    image:
      "/images/project-3.png",
  },
];


/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function BlogSection() {
  return (
    <section
      className="w-full px-6 py-20 sm:py-28"
      style={{ backgroundColor: COLORS.bg, fontFamily: FONT }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionBadge>Process</SectionBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-6 text-4xl font-medium leading-tight sm:text-6xl"
                style={{ color: COLORS.heading }}
              >
                From The Squarespace
                <br />
                Website Design Blog
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mt-6 text-sm leading-relaxed sm:text-base"
                style={{ color: COLORS.body }}
              >
                Are you a DIYer, Squarespace web designer, or newbie to
                Squarespace looking to level up your site? Our Squarespace
                website design blog has you covered with tips and insights
                from a professional web designer covering the Squarespace
                platform, website templates, how to grow your business,
                navigating SEO services, getting a functional website and
                much more!
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="flex-shrink-0">
            <button
              className="rounded-full px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.lime, color: COLORS.heading }}
            >
              View All Blog
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={i} delay={0.1 * i} y={30}>
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: COLORS.cardBg,
                  backgroundImage: `radial-gradient(${COLORS.cardDot} 1.5px, transparent 1.5px)`,
                  backgroundSize: "16px 16px",
                }}
              >
                <div className="p-3 pb-0">
                  <div className="h-52 w-full overflow-hidden rounded-xl">
                    <Image
                      width={500}
                      height={500}
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">

                  <a href="/blog" className="text-2xl font-medium leading-snug">
                    {post.titleSegments.map((seg, j) => (
                      <span
                        key={j}
                        className={
                          seg.olive
                            ? "bg-linear-to-r/srgb from-[#539107] to-[#232B02]/20 bg-clip-text text-transparent"
                            : ""
                        }
                        style={
                          seg.olive
                            ? undefined
                            : { color: COLORS.titleDark }
                        }
                      >
                        {seg.text}
                      </span>
                    ))}
                  </a>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: COLORS.body }}
                  >
                    {post.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}