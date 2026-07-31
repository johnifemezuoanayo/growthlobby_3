"use client";

import React, { useEffect } from "react";
import { HeroBackground } from "../HomeHeroSection/HeroBackground";

function BookACallSection() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative pt-24 md:pt-30 isolate min-h-screen overflow-x-hidden bg-[#060606] font-sans text-white selection:bg-brand-primary selection:text-black">
      <HeroBackground />
      <div className="relative z-20 max-w-7xl mx-auto py-12 lg:py-18 px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex mb-5 border items-center gap-3 rounded-sm border-white/20 px-1 py-1 shadow-inner backdrop-blur-sm">
            <div className="flex items-center gap-2 bg-linear-to-r/srgb from-[#539107] to-[#232B02]/20 from- py-2 px-3 rounded-sm">
              <span className="relative bg flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                <span className="relative inline-flex size-2.5 rounded-full bg-brand-primary" />
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-primary">
                Available for work
              </span>
            </div>
            <span className="h-3 w-px bg-neutral-800" />
            <span className="text-[10px] pr-3 font-medium uppercase tracking-widest text-neutral-300">
              Lets Kick Off
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Book Your Free <br className="hidden md:inline" />
            <span>Kickoff Call Today</span>
          </h1>

          <p className="mx-auto mt-3 text-white/70 max-w-3xl text-center text-base leading-relaxed text-neutral-300 ">
            I&apos;m here to transform your vision into a high-performing
            digital experience. Let&apos;s schedule a strategy session and
            discuss how we can take your business to the next level.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl backdrop-blur bg-white/10 border border-white/10 rounded-lg">
            <div
              className="calendly-inline-widget w-full rounded-lg overflow-hidden"
              data-url="https://calendly.com/growthlobbyagency/15-minute-website-brand-strategy-session"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>


      
    </section>
  );
}

export default BookACallSection;
