"use client";

import SpinningCircle from "@/components/ui/ContactForm/SpinningCircle";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import NavButton from "@/components/ui/Navbar/NavButton";

function DesignHeroSection() {
  return (
    <section className="relative  overflow-x-hidden bg-[#060606] font-sans pt-62 lg:pt-30 text-white selection:bg-brand-primary selection:text-black">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#060606]">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <Image
          width={1920}
          height={1080}
          quality={100}
          priority
          src="/svgs/aboutbg.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 lg:pt-53 lg:pb-12 flex  flex-col">
        <main className="relative flex flex-grow items-center justify-center px-4 py-12 sm:px-8 md:py-20 -mt-44 lg:px-16">
          <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
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
                  Product Design | BRANDING
                </span>
              </div>

              <h1 className="text-4xl font-bold font-mono leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                Design That Drives Growth.
              </h1>

              <p className="max-w-xl text-sm font-light leading-relaxed text-white/90 sm:text-base">
                We design digital experiences that go beyond websites—combining responsive mobile design, bold branding, and custom logos to help businesses stand out.              </p>

              <div className="flex w-full items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
                <NavButton
                  href="/book-a-call"
                  size="large"
                  className=" bg-brand-primary text-black hover:bg-white"
                >
                  Schedule a call
                </NavButton>
                <NavButton
                  href="/portfolio/design/all-projects"
                  size="large"
                  className=" bg-white text-black hover:bg-white"
                >
                  See all projects
                </NavButton>
              </div>
            </motion.div>

            {/* Portrait Card */}
            <div
              id="portrait-image-card"
              className="relative lg:w-[500px] h-full "
            >
              <SpinningCircle />
              <Image
                src="/images/design-hero.png"
                alt=""
                className="w-full z-10 "
                width={2000}
                height={900}
              />
              {/* Subtle Overlay to match mock shadow */}
            </div>
          </div>
        </main>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </section>
  );
}

export default DesignHeroSection;
