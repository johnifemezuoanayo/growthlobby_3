"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import React, { useRef, useState, useEffect, ReactNode } from "react";
import {
  Triangle,
  Zap,
  ShoppingBag,
  NotebookText,
  X as XIcon,
  Package,
  Asterisk,
  Share2,
  Diamond,
  BarChart3,
  Timer,
  Flame,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitives                                              */
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
  bg: string;
  heading: string;
  body: string;
  badgeBg: string;
  badgeText: string;
  frameMark: string;
  dot: string;
  line: string;
  nodeBg: string;
  nodeBorder: string;
  hubBorder: string;
  hubIcon: string;
}

const COLORS: ColorTokens = {
  bg: "#FFFFFF",
  heading: "#181C10",
  body: "#5B5F53",
  badgeBg: "#DAD9CB",
  badgeText: "#2B2E20",
  frameMark: "#979b8dff",
  dot: "#E6E6DD",
  line: "#D9DACE",
  nodeBg: "#FFFFFF",
  nodeBorder: "#E9E9E1",
  hubBorder: "#A9AEA0",
  hubIcon: "#33372A",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Node data — percentage positions within the diagram box               */
/*  bendX: horizontal elbow stop before diagonalling into the hub         */
/* ---------------------------------------------------------------------- */

interface Node {
  Icon?: LucideIcon;
  label?: string;
  color: string;
  x: number;
  y: number;
  bendX?: number;
}

function CornerMarks() {
  const markStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: 14,
    lineHeight: "9px",
    color: COLORS.frameMark,
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

export default function IntegrationSection() {
  return (
    <section
      className="w-full px-6 py-20 sm:py-28"
      style={{ backgroundColor: COLORS.bg, fontFamily: FONT }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionBadge>Integrations</SectionBadge>

        <Reveal delay={0.1}>
          <h2
            className="mt-6 text-4xl font-medium sm:text-6xl"
            style={{ color: COLORS.heading }}
          >
            We handle all integrations
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="mx-auto mt-5 max-w-xl text-sm sm:text-base"
            style={{ color: COLORS.body }}
          >
            From intricate challenges to seamless execution, we&lsquo;ll
            integrate all your marketing tools and automations with your
            website.
          </p>
        </Reveal>
        <div className="pt-10 max-w-7xl mx-auto">
          <Image
            src="/images/integration.png"
            alt="john ifemezuo integration justify-center"
            width={2600}
            height={1000}
            className="mx-auto justify-center "
          />
        </div>
      </div>

      {/* diagram — horizontally scrollable on narrow screens */}
    </section>
  );
}
