"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BrandLogo } from "../../BrandLogo";
import { navLinks } from "./data";
import Navbar from "../../ui/Navbar/Navbar";
import { NoticeBanner } from "./NoticeBanner";
import { useRef, useState } from "react";
import NavButton from "@/components/ui/Navbar/NavButton";

type SiteHeaderProps = {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

export function SiteHeader({
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: SiteHeaderProps) {
  const pathname = usePathname();

 
  return (
    <>
      <header className="fixed bg-[#050505]/20 backdrop-blur w-full top-0 z-50  px-0  sm:px-8 lg:px-0">
        <NoticeBanner />

        <div className="mx-auto flex lg:px-0 px-5 py-4 max-w-7xl items-center justify-between">
          <BrandLogo priority />

          {/* <nav className="hidden items-center gap-1.5 rounded-full border border-neutral-800/60 bg-[#0f110f]/90 p-1.5 backdrop-blur-md md:flex">
            {navLinks.slice(0, 3).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  index === 0
                    ? "rounded-full border border-brand-primary/20 bg-[#1a1f1a]/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-primary shadow-sm"
                    : "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => onPortfolioOpenChange(true)}
              onMouseLeave={() => onPortfolioOpenChange(false)}
            >
              <button className="flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:text-white">
                Portfolio
                <ChevronDown
                  className={`size-3 transition-transform duration-200 ${
                    isPortfolioOpen ? "rotate-180 text-brand-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-neutral-800/80 bg-[#121412] p-2 shadow-xl backdrop-blur-xl"
                  >
                    {portfolioLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="flex flex-col rounded-xl p-2.5 text-left transition-colors hover:bg-[#1c1f1c]"
                      >
                        <span className="text-xs font-bold text-white">
                          {link.title}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {link.description}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
            >
              Pricing
            </Link>
          </nav>

         */}

          <Navbar />

          <button
            onClick={onToggleMobileMenu}
            className="cursor-pointer p-2 border rounded-full text-brand-color/80 transition-colors hover:text-brand-primary lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-0 w-full z-40 flex flex-col gap-4 pt-44 border-b border-neutral-800 h-screen bg-[#0e100e] p-6 text-center  backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onCloseMobileMenu}
                  className={
                    isActive
                      ? "py-2 font-bold uppercase tracking-wider text-brand-primary"
                      : "py-2 font-medium uppercase tracking-wider text-neutral-300 hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <NavButton
              href="/book-a-call"
              className="sm:ml-6 w-full  bg-brand-primary text-black hover:bg-white"
            >
              Schedule a call
            </NavButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
