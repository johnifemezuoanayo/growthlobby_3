"use client"

import React, { useRef, useState, useEffect, ReactNode } from "react";
import NavButton from "../../ui/Navbar/NavButton";

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitive                                               */
/* ---------------------------------------------------------------------- */

function useInView(threshold: number = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean >(false);

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
  grid: string;
  heading: string;
  lime: string;
  limeText: string;
}

const COLORS: ColorTokens = {
  bg: "#FFFFFF",
  grid: "#EFEFE9",
  heading: "#181C10",
  lime: "#CFEA46",
  limeText: "#181C10",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Corner screenshot images                                              */
/* ---------------------------------------------------------------------- */

interface CornerImage {
  src: string;
  rotate: number;
  position: string; // tailwind positioning classes
  delay: number;
  floatDelay: number;
}

const CORNER_IMAGES: CornerImage[] = [
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    rotate: -8,
    position: "left-[17%] top-[10%] w-[15%]",
    delay: 0.05,
    floatDelay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    rotate: 8,
    position: "right-[13%] top-[6%] w-[15%]",
    delay: 0.15,
    floatDelay: 0.6,
  },
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    rotate: -6,
    position: "left-[16%] bottom-[4%] w-[15%]",
    delay: 0.25,
    floatDelay: 1.2,
  },
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    rotate: 8,
    position: "right-[14%] bottom-[4%] w-[16%]",
    delay: 0.35,
    floatDelay: 1.8,
  },
];

function CornerShot({ item }: { item: CornerImage }){
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute hidden  rounded-sm   lg:block ${item.position}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? `rotate(${item.rotate}deg) translateY(0px)`
          : `rotate(${item.rotate}deg) translateY(30px)`,
        transition: `opacity 0.8s cubic-bezier(.22,.61,.36,1) ${item.delay}s, transform 0.8s cubic-bezier(.22,.61,.36,1) ${item.delay}s`,
        animation: inView ? `ctaFloat 7s ease-in-out ${item.floatDelay}s infinite` : "none",
      }}
    >
      <img
        src={item.src}
        alt=""
        className=" w-[300px] object-cover"
      />
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

export default function DownCTASection(){
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-28 text-center sm:py-36"
      style={{
        backgroundColor: COLORS.bg,
        backgroundImage: `linear-gradient(${COLORS.grid} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.grid} 1px, transparent 1px)`,
        backgroundSize: "120px 120px",
        backgroundPosition: "center",
        fontFamily: FONT,
      }}
    >
      <style>{`
        @keyframes ctaFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ctaFloat"] { animation: none !important; }
        }
      `}</style>

      {/* soft fade so the grid doesn't feel harsh at the section edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 75%)",
        }}
      />

      {CORNER_IMAGES.map((item, i) => (
        <CornerShot key={i} item={item} />
      ))}

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <h2
            className="text-4xl font-medium lg:w-[560px] text-center mx-auto text-black leading-tight sm:text-6xl lg:text-6xl"
          >
            Be the agency that always has
            capacity.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <NavButton size="large" href="#contact" className="bg-brand-primary text-black">
            Book A Call
          </NavButton>
        </Reveal>
      </div>
    </section>
  );
}