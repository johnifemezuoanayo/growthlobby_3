import Link from "next/link";
import React from "react";
import NavButton from "./NavButton";
import { navLinks } from "@/components/pages/HomeHeroSection/data";



function Navbar() {
  return (
    <div className="hidden lg:flex w-full flex-col gap-3 rounded-lg border border-white/5 bg-white/5 p-2  backdrop-blur sm:w-fit sm:flex-row sm:items-center">
      <nav
        aria-label="Footer navigation"
        className="grid grid-cols-2 gap-2 text-sm text-zinc-200 sm:flex sm:items-center sm:gap-1"
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              index === 0
                ? "rounded bg-white/10 px-5 py-2.5 text-brand-primary"
                : "rounded px-5 py-2.5 transition hover:bg-white/10 hover:text-brand-primary"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <NavButton
        href="/book-a-call"
        className="sm:ml-6 bg-brand-primary text-black hover:bg-white"
      >
        Schedule a call
      </NavButton>
    </div>
  );
}

export default Navbar;
