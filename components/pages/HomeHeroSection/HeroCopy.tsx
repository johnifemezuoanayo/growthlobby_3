"use client";

import { Play } from "lucide-react";
import { motion } from "motion/react";
import NavButton from "../../ui/Navbar/NavButton";
import AvatarStack from "../ContactMeSection/AvatarComp";



export function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-start gap-6 w- lg:col-span-7 lg:pr-6"
    >
      <div className="inline-flex border items-center gap-3 rounded-sm  border-white/20 px-1 py-1 shadow-inner backdrop-blur-sm">
        <div className="flex items-center gap-2 bg-linear-to-r/srgb from-[#539107] to-[#232B02]/20  py-2 px-3 rounded-sm">
          <span className="relative bg flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
            <span className="relative inline-flex size-2.5 rounded-full bg-brand-primary" />
          </span>
          <span className="text-[9px] uppercase tracking-widest text-brand-primary">
            Available for work
          </span>
        </div>
        <span className="h-3 w-px bg-white" />
        <span className="text-[9px] pr-3 font-medium uppercase tracking-widest text-neutral-300">
          Get in touch now
        </span>
      </div>

      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
        The #1 Award-Winning <br className="hidden md:inline" />
        <span>Squarespace Experts</span>
      </h1>

      <p className="max-w-xl text-sm font-light leading-relaxed text-white/90 sm:text-base">
        Meet Your New AI-Native Production Partner. Take On 3x More Clients
        Without Hiring A Single Full-Time Designer Or Developer. Fully Managed
        By Your Dedicated PM.
      </p>

      <div className="flex w-full flex items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
        <NavButton
          href="/book-a-call"
          size="large"
          className=" bg-brand-primary text-black hover:bg-white"
        >
          Schedule a call
        </NavButton>
        
        <AvatarStack />
        {/* <NavButton
          href="#contact-section"
          size="large"
          showIcon={false}
          className=" bg-white text-black hover:bg-white"
        >
          Get in touch
        </NavButton> */}
      </div>
    </motion.div>
  );
}
