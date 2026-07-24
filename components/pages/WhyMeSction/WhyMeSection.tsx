/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200&auto=format&fit=crop",
    stat1: { value: "100+", label: "Clients Worldwide" },
    stat2: { value: "250+", label: "Successful Website" },
    titleLine1: "Mobile-Friendly And",
    titleLine2Muted: "Responsive",
    titleLine2White: "Designs",
    body: "Our Services Can Be Purchased Individually Or Bundled Together For A Comprehensive Solution. This Flexibility Allows You To Get Exactly What You Need, Without Paying For Features You Don't.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    stat1: { value: "40+", label: "Team Members" },
    stat2: { value: "10", label: "Years Experience" },
    titleLine1: "SEO-Ready From",
    titleLine2Muted: "The Ground",
    titleLine2White: "Up",
    body: "Every Build Ships With Clean Structure, Fast Load Times, And Metadata In Place, So Your Site Is Ready To Be Found The Moment It Goes Live.",
  },
];

/* ---------------------------------------------------------------------- */
/*  Corner marks                                                          */
/* ---------------------------------------------------------------------- */

function CornerMarks({ color = COLORS.frameMark }: { color?: string }){
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

export default function WhySection(){
  const [index, setIndex] = useState<number>(0);
  const max = SLIDES.length - 1;

  return (
    <section className="bg-white" style={{ fontFamily: FONT }}>
      {/* top — sage panel with heading + copy + nav */}
      <div className="w-full px-6 pb-44 pt-20 sm:pt-28" style={{ backgroundColor: COLORS.sage }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Reveal className="flex">
              <span className="relative inline-block">
                <CornerMarks />
                <span
                  className="inline-block px-5 py-2 text-sm font-medium"
                  style={{ backgroundColor: COLORS.badgeBg, color: COLORS.badgeText }}
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
                You need more than just a Squarespace web designer; you need
                a partner who creates websites that convert, transforming
                your site into your most valuable sales asset.
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
      <div className="w-full px-6 -mt-36 pt-29 overflow-hidden pb-24" >
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.15} className="-mt-16 overflow-hidden lg:overflow-visible sm:-mt-24">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div key={i} className="w-[92%] h-[660px] flex-shrink-0 sm:w-[95%]">
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
                        <span className="block text-white">{slide.titleLine1}</span>
                        <span className="block">
                          <span style={{ color: COLORS.cardMuted }}>
                            {slide.titleLine2Muted}{" "}
                          </span>
                          <span className="text-white">{slide.titleLine2White}</span>
                        </span>
                      </h3>
                      <p
                        className="max-w-md text-sm leading-relaxed sm:text-base"
                        style={{ color: COLORS.cardBodyText }}
                      >
                        {slide.body}
                      </p>
                      <p
                        className="max-w-md text-sm leading-relaxed sm:text-base"
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