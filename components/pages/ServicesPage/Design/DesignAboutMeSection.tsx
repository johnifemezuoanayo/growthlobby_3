/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { Star, Check, Layers } from "lucide-react";
import Image from "next/image";
import YourExpertIconSvg from "@/components/Icons/YourExpertIconSvg";

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
  x?: number;
  className?: string;
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className = "",
}: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0px, 0px)" : `translate(${x}px, ${y}px)`,
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
  badgeDot: string;
  checkBg: string;
  checkIcon: string;
  overlayBg: string;
  frameMark: string;
}

const COLORS: ColorTokens = {
  bg: "#eceee4",
  heading: "#1E2733",
  body: "#4B5768",
  badgeBg: "#DDE5EC",
  badgeText: "#4B5768",
  badgeDot: "#4B7BAA",
  checkBg: "#c0ed0b",
  checkIcon: "#000000",
  overlayBg: "rgba(15, 20, 26, 0.72)",
  frameMark: "#33475B",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

interface Reason {
  text: string;
}

const REASONS: Reason[] = [
  { text: "Award-winning expertise in web design & optimization" },
  { text: "Deep understanding of what makes a website convert" },
  { text: "Proven track record of elevating brands globally" },
  { text: "Honest, no-pressure advice—just value-packed insights" },
];

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */
const stats = [
  { value: "100+", label: "Successful Websites" },
  { value: "08", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function DesignAboutMeSection() {
  return (
    <section
      className="w-full px-5 lg:px-0 py-20 sm:py-28"
      style={{ backgroundColor: COLORS.bg, fontFamily: FONT }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Right card */}
        <div className="relative">
          <div className="relative overflow-hidden bg-white rounded-[2rem] bg-[#E0E0E0] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] sm:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                priority
                width={914}
                height={1200}
                src="/images/Ceo.png"
                alt="John Ifemezuo speaking at an event"
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />

              {/* Stats overlay */}
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:gap-3 sm:p-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center justify-center px-2 py-2 text-center text-white ${
                      i !== 0 ? "border-l border-white/25" : ""
                    }`}
                  >
                    <div className="text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] leading-tight text-white/85 sm:text-xs">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* content column */}
        <div>
          <YourExpertIconSvg />

          <Reveal delay={0.1}>
            <h2
              className="mt-6 text-4xl font-medium leading-tight sm:text-5xl"
              style={{ color: COLORS.heading }}
            >
              Hi. I&lsquo;m Sam Crawford
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mt-5 max-w-xl text-base leading-relaxed"
              style={{ color: COLORS.body }}
            >
              With over five years of experience and a portfolio of 700+ custom
              Squarespace websites, I specialize in helping businesses create
              high-performing, visually stunning websites that drive real
              results.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h3
              className="mt-10 text-2xl font-medium"
              style={{ color: COLORS.heading }}
            >
              Why Book A Call With Me?
            </h3>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            {REASONS.map((reason: Reason, i: number) => (
              <Reveal key={reason.text} delay={0.35 + i * 0.08} y={16}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: COLORS.checkBg }}
                  >
                    <Check size={14} color={COLORS.checkIcon} strokeWidth={3} />
                  </span>
                  <span className="text-base" style={{ color: COLORS.heading }}>
                    {reason.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
