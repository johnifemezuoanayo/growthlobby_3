/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitive                                               */
/* ---------------------------------------------------------------------- */
import { Plus, Minus } from "lucide-react";

import { ReactNode, useEffect, useRef, useState } from "react";

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
  badgeDot: string;
  divider: string;
  toggleBg: string;
  toggleIcon: string;
}

const COLORS: ColorTokens = {
  bg: "#FFFFFF",
  heading: "#1E2733",
  body: "#7A8593",
  badgeBg: "#DDE5EC",
  badgeText: "#4B5768",
  badgeDot: "#4B7BAA",
  divider: "#a6a9acff",
  toggleBg: "#C0ED0B",
  toggleIcon: "#0e0d0d",
};



/* ---------------------------------------------------------------------- */
/*  Data                                                                  */
/* ---------------------------------------------------------------------- */

export interface FAQItemData {
  question: string;
  answer: string;
}

/* ---------------------------------------------------------------------- */
/*  Accordion item                                                        */
/* ---------------------------------------------------------------------- */

export interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
  delay: number;
}

export function FAQItem({
  item,
  isOpen,
  onToggle,
  isLast,
  delay,
}: FAQItemProps) {
  return (
      <div
        style={{
          borderBottom: isLast ? "none" : `1px solid ${COLORS.divider}`,
        }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
          aria-expanded={isOpen}
        >
          <span
            className="text-lg font-medium sm:text-xl"
            style={{ color: COLORS.heading }}
          >
            {item.question}
          </span>
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300"
            style={{ backgroundColor: COLORS.toggleBg }}
          >
            {isOpen ? (
              <Minus size={16} color={COLORS.toggleIcon} />
            ) : (
              <Plus size={16} color={COLORS.toggleIcon} />
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
              className="max-w-xl pb-6 text-sm leading-relaxed sm:text-base"
              style={{ color: COLORS.body }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      </div>
  );
}
