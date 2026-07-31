"use client"

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Settings,
  Headphones,
  Hand,
  Compass,
  RefreshCw,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function WhatWeOfferSection() {
  const items: ServiceItem[] = [
    {
      id: "srv-1",
      title: "No-code Tools, Mastered",
      description:
        "We've built hundreds of websites using No-code tools. We know how to push the platform without breaking it—and when to add custom code to elevate function.",
      icon: (
        <Compass className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
    {
      id: "srv-2",
      title: "Strategic Design",
      description:
        "We don't design in a vacuum. Every layout decision is informed by your goals, your audience, and your brand voice.",
      icon: (
        <RefreshCw className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
    {
      id: "srv-3",
      title: "Built To Convert",
      description:
        "Strong visuals are important—but structure is what converts. We make sure your site does both.",
      icon: (
        <Layers className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
    {
      id: "srv-4",
      title: "Seamless Functionality",
      description:
        "Whether it's an online store, booking system, portfolio, or blog—to ensure your website works as hard as you do.",
      icon: (
        <Settings className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
    {
      id: "srv-5",
      title: "Collaborative Process",
      description:
        "We work with you directly throughout. No handoffs. No surprises.",
      icon: (
        <Headphones className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
    {
      id: "srv-6",
      title: "You Own Your Site",
      description:
        "No ongoing retainers, no confusing IP clauses. You'll walk away with a website you can confidently manage—or have us continue to manage it for you.",
      icon: (
        <Hand className="h-6 w-6 text-zinc-300 group-hover:text-brand-primary transition-colors duration-300" />
      ),
    },
  ];

  return (
    <section
      id="services-section"
      className="relative bg-zinc-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decor Ambient Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] -right-[10%] w-[45%] h-[45%] rounded-full bg-brand-primary/10 blur-[170px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-zinc-900/40 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Text Block */}
        <div className="space-y-5 max-w-4xl">
          {/* Custom Tag Pill matching the screenshot style */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-brand-primary/20 border border-zinc-800/80 text-xs text-zinc-300 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>What we offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            Designed For Growth, Not Just Launch
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl font-normal pt-1">
            Your website is your first impression. It&lsquo;s also your
            infrastructure. That&#39;s why our custom Squarespace web design
            projects are built with your future in mind. From scalable page
            architecture to CMS-integrated content systems, we design sites that
            can evolve with your business. Whether you&#39;re adding team
            members, launching a product, or building out a blog or course
            platform, your site is ready.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`service-card-${item.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between bg-zinc-900/40 border border-zinc-900 rounded-sm p-6 sm:p-8 hover:bg-zinc-900/70 hover:border-zinc-800/80 transition-all duration-300 h-full"
            >
              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-brand-primary/30 group-hover:bg-zinc-950 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text Group */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
