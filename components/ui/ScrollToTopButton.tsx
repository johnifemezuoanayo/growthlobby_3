"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-[96px] right-6 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-100 bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-[1.08] hover:bg-neutral-50 active:scale-[0.95] md:right-8 md:bottom-[104px]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-4 text-neutral-700" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
