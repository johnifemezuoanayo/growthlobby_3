/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitive                                               */
/* ---------------------------------------------------------------------- */

function useInView(
  threshold: number = 0.15,
): [React.RefObject<HTMLDivElement | null>, boolean] {
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
      { threshold },
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
  sage: string;
  white: string;
  heading: string;
  body: string;
  badgeBg: string;
  badgeText: string;
  frameMark: string;
  lime: string;
  dark: string;
  statOverlay: string;
  cardBodyText: string;
  cardMuted: string;
}

const COLORS: ColorTokens = {
  sage: "#EAF0DA",
  white: "#FFFFFF",
  heading: "#181C10",
  body: "#5B5F53",
  badgeBg: "#DAD9CB",
  badgeText: "#2B2E20",
  frameMark: "#8C9080",
  lime: "#CFEA46",
  dark: "#15150F",
  statOverlay: "rgba(30, 30, 24, 0.82)",
  cardBodyText: "rgba(255,255,255,0.65)",
  cardMuted: "#9CA085",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

interface Slide {
  image: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  titleLine1: string;
  titleLine2Muted: string;
  titleLine2White: string;
  body: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/why1.png",
    stat1: { value: "130+", label: "Clients Worldwide" },
    stat2: { value: "100+", label: "Successful Website" },
    titleLine1: "Ai Powered.",
    titleLine2Muted: "Human",
    titleLine2White: "Centered.",
    body: "Anyone can generate a website with AI. Building a digital experience that earns trust, engages users, and grows your business is another story. We combine strategic thinking, user experience design, modern development, and AI-powered workflows to create websites and digital products that are fast, scalable, and built around your customers—not templates. Every project is designed to perform across every device, communicate your brand clearly, and help your business stay ahead in an increasingly AI-driven world.",
  },
  {
    image: "/images/why3.png",
    stat1: { value: "5+", label: "Team Members" },
    stat2: { value: "7+", label: "Years Experience" },
    titleLine1: "Built For Today's Users.",
    titleLine2Muted: "Ready For",
    titleLine2White: "Tomorrow.",
    body: "Technology changes fast. Customer expectations change even faster. We help ambitious businesses create websites and digital products that combine modern design, accessibility, performance, and intelligent user experiences. By blending human creativity with AI-powered workflows, we deliver solutions that are efficient to build, easy to scale, and designed for long-term success. Whether you're launching a startup, refreshing your brand, or building your next product, we create experiences that help you stay ahead of the competition.",
  },
  {
    image: "/images/why2.png",
    stat1: { value: "Ai Ready", label: "Design Process" },
    stat2: { value: "50+", label: "Businesses Partnered With" },
    titleLine1: "Modern Websites.",
    titleLine2Muted: "Smarter Digital",
    titleLine2White: "Products.",
    body: "Your website is often the first impression people have of your business—and in today's AI-driven world, first impressions matter more than ever. We partner with founders, startups, and growing businesses to design and build websites and digital products that combine strategy, creativity, and technology. From high-converting marketing sites to complex web applications, every experience is crafted to inspire confidence, simplify user journeys, and drive measurable business results. The tools may have changed. Great digital experiences still begin with understanding people.",
  },
];

/* ---------------------------------------------------------------------- */
/*  Corner marks                                                          */
/* ---------------------------------------------------------------------- */

function CornerMarks({ color = COLORS.frameMark }: { color?: string }) {
  const markStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: 12,
    lineHeight: "10px",
    color,
  };
  return (
    <>
      <span style={{ ...markStyle, top: -6, left: -6 }}>+</span>
      <span style={{ ...markStyle, top: -6, right: -6 }}>+</span>
      <span style={{ ...markStyle, bottom: -6, left: -6 }}>+</span>
      <span style={{ ...markStyle, bottom: -6, right: -6 }}>+</span>
    </>
  );
}

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function WhySection() {
  const [index, setIndex] = useState<number>(0);
  const max = SLIDES.length - 1;

  return (
    <section className="bg-white" style={{ fontFamily: FONT }}>
      {/* top — sage panel with heading + copy + nav */}
      <div
        className="w-full px-6 pb-44 pt-20 sm:pt-28"
        style={{ backgroundColor: COLORS.sage }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Reveal className="flex">
              <span className="relative inline-block">
                <CornerMarks />
                <span
                  className="inline-block px-5 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: COLORS.badgeBg,
                    color: COLORS.badgeText,
                  }}
                >
                  Integrations
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-6 text-4xl font-medium sm:text-6xl"
                style={{ color: COLORS.heading }}
              >
                Why by John?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mt-5 max-w-2xl text-sm leading-relaxed sm:text-base"
                style={{ color: COLORS.body }}
              >
                You need more than just a Squarespace web designer; you need a
                partner who creates websites that convert, transforming your
                site into your most valuable sales asset.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="flex flex-shrink-0 gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex h-14 w-14 items-center justify-center rounded-full transition-opacity disabled:opacity-40"
              style={{ backgroundColor: COLORS.lime, color: COLORS.heading }}
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(max, i + 1))}
              disabled={index === max}
              className="flex h-14 w-14 items-center justify-center rounded-full transition-opacity disabled:opacity-40"
              style={{ backgroundColor: COLORS.lime, color: COLORS.heading }}
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </Reveal>
        </div>
      </div>

      {/* bottom — white panel holding the carousel, card overlaps both panels */}
      <div className="w-full px-5 md:px-6 lg:px-0 -mt-36 pt-16 lg:pt-29 overflow-hidden pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal
            delay={0.15}
            className="-mt-16 overflow-hidden lg:overflow-visible sm:-mt-24"
          >
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className="w-[95%] h-auto lg:h-[660px] flex-shrink-0 sm:w-[95%]"
                >
                  <div
                    className="relative flex flex-col overflow-hidden rounded-2xl md:flex-row"
                    style={{ backgroundColor: COLORS.dark, minHeight: 560 }}
                  >
                    {/* image half */}
                    <div className="relative w-full md:w-[42%]">
                      <img
                        src={slide.image}
                        alt=""
                        className="h-72 w-full object-cover md:h-full"
                      />

                      <div className="absolute left-6 top-6">
                        <span className="relative inline-block">
                          <CornerMarks color="rgba(255,255,255,0.5)" />
                          <span
                            className="flex items-baseline gap-2 px-5 py-3.5 text-white"
                            style={{ backgroundColor: COLORS.statOverlay }}
                          >
                            <span className="text-2xl font-semibold sm:text-3xl">
                              {slide.stat1.value}
                            </span>
                            <span className="text-sm opacity-80">
                              {slide.stat1.label}
                            </span>
                          </span>
                        </span>
                      </div>

                      <div className="absolute bottom-6 right-0 md:right-[-1px]">
                        <span className="relative inline-block">
                          <CornerMarks color="rgba(255,255,255,0.5)" />
                          <span
                            className="flex flex-col px-6 py-3.5 text-white"
                            style={{ backgroundColor: COLORS.statOverlay }}
                          >
                            <span className="text-2xl font-semibold leading-none sm:text-3xl">
                              {slide.stat2.value}
                            </span>
                            <span className="mt-1 text-sm opacity-80">
                              {slide.stat2.label}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* copy half */}
                    <div className="flex w-full flex-col justify-center gap-5 p-8 md:w-[58%] md:p-14">
                      <h3 className="text-2xl font-medium leading-tight sm:text-4xl">
                        <span className="block text-white">
                          {slide.titleLine1}
                        </span>
                        <span className="block">
                          <span style={{ color: COLORS.cardMuted }}>
                            {slide.titleLine2Muted}{" "}
                          </span>
                          <span className="text-white">
                            {slide.titleLine2White}
                          </span>
                        </span>
                      </h3>
                      <p
                        className="max-w-lg text-sm leading-relaxed sm:text-base"
                        style={{ color: COLORS.cardBodyText }}
                      >
                        {slide.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
