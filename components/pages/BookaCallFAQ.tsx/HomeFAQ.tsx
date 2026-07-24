/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { Plus, Minus, Monitor, Smartphone, Paintbrush, ArrowUpRight, LayoutTemplate } from "lucide-react";
import Image from "next/image";

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
  x?: number;
  className?: string;
}

function Reveal({ children, delay = 0, y = 24, x = 0, className = "" }: RevealProps) {
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
  dot: string;
  heading: string;
  body: string;
  badgeBg: string;
  badgeText: string;
  frameMark: string;
  lime: string;
  limeIcon: string;
  divider: string;
  chipBg: string;
}

const COLORS: ColorTokens = {
  bg: "#2A2D1C",
  dot: "rgba(255,255,255,0.05)",
  heading: "#FFFFFF",
  body: "rgba(255,255,255,0.55)",
  badgeBg: "#4B5233",
  badgeText: "#E7EFC7",
  frameMark: "rgba(255,255,255,0.5)",
  lime: "#CFEA46",
  limeIcon: "#1E2113",
  divider: "rgba(255,255,255,0.12)",
  chipBg: "rgba(30, 36, 20, 0.72)",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

interface FAQItemData {
  q: string;
  a: string;
}

const FAQS: FAQItemData[] = [
  {
    q: "How Long Does It Take To Build A Website?",
    a: "Typically 2–4 weeks, depending on the size and complexity of the project. We set a clear timeline at the start and stick to it.",
  },
  {
    q: "Do You Offer Ongoing Support After Launch?",
    a: "Yes — every project includes a support window, with retainer options available for anything beyond that.",
  },
  {
    q: "Can You Migrate My Existing Site?",
    a: "We handle content, SEO, and redirect migration so nothing is lost when you move platforms.",
  },
  {
    q: "What Do You Need From Me To Get Started?",
    a: "Brand assets, any existing copy, and a short kickoff call — we'll guide you through the rest.",
  },
];

/* ---------------------------------------------------------------------- */
/*  Corner marks + badge                                                  */
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
/*  Accordion item                                                        */
/* ---------------------------------------------------------------------- */

function FAQItem({
  item,
  isOpen,
  onToggle,
  isLast,
  delay,
}: {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
  delay: number;
}) {
  return (
    <Reveal delay={delay} y={16}>
      <div style={{ borderBottom: isLast ? "none" : `1px solid ${COLORS.divider}` }}>
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
          aria-expanded={isOpen}
        >
          <span
            className="text-xl font-medium sm:text-xl"
            style={{ color: COLORS.heading }}
          >
            {item.q}
          </span>
          <span
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.lime }}
          >
            {isOpen ? (
              <Minus size={18} color={COLORS.limeIcon} />
            ) : (
              <Plus size={18} color={COLORS.limeIcon} />
            )}
          </span>
        </button>

        <div
          className="grid transition-all duration-300 ease-out"
          style={{
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <p
              className="max-w-xl pb-6 text-base leading-relaxed"
              style={{ color: COLORS.body }}
            >
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="w-full px-6 md:px-5 lg:px-0 py-20 sm:py-28"
      style={{
        backgroundColor: COLORS.bg,
        backgroundImage: `radial-gradient(${COLORS.dot} 1.5px, transparent 1.5px)`,
        backgroundSize: "22px 22px",
        fontFamily: FONT,
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* left — heading + accordion */}
        <div>
          <Reveal>
            <span className="relative inline-block">
              <CornerMarks />
              <span
                className="inline-block px-5 py-2 text-sm font-medium tracking-wide"
                style={{
                  backgroundColor: COLORS.badgeBg,
                  color: COLORS.badgeText,
                }}
              >
                FAQS
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="mt-6 text-3xl font-medium leading-tight sm:text-4xl"
              style={{ color: COLORS.heading }}
            >
              Here are some quick answers to the things we get asked most often
            </h2>
          </Reveal>

          <div className="mt-10">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                isLast={i === FAQS.length - 1}
                delay={0.15 + i * 0.06}
              />
            ))}
          </div>
        </div>

        {/* right — product mockup */}
        <Image
          width={600}
          height={600}
          src="/images/faqimg.png"
          alt="Workspace"
          className="h-[420px] w-full hidden lg:block object-cover sm:h-[520px]"
        />
      </div>
    </section>
  );
}