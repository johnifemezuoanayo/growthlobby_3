"use client"

import { motion } from "motion/react";
import { Award, Handshake, BarChart3 } from "lucide-react";
import NavButton from "@/components/ui/Navbar/NavButton";


export default function WhyChooseUsSection() {
  const points = [
    {
      id: "why-1",
      title: "Certified Design Expert",
      description:
        "As experienced Code and No-code experts and Designer, We know the inside and out, allowing us to push its capabilities to deliver a truly unique website.",
      icon: <Award className="h-6 w-6 text-brand-primary" />,
    },
    {
      id: "why-2",
      title: "Client-Centered Approach",
      description:
        "We prioritize your input at every step, ensuring your website feels authentically you.",
      icon: <Handshake className="h-6 w-6 text-brand-primary" />,
    },
    {
      id: "why-3",
      title: "Proven Results",
      description:
        "With 100+ successful projects completed, We've helped businesses like yours achieve their online goals with style and ease.",
      icon: <BarChart3 className="h-6 w-6 text-brand-primary" />,
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      className="relative bg-white text-zinc-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-100"
    >
      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Header Row with Button */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            {/* Gray Tag pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 border border-zinc-200/50 text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              <span>Why choose us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] font-sans">
              Designing Websites With Purpose And Passion
            </h2>
          </div>

          <div className="flex lg:justify-end shrink-0">
             <NavButton
                          href="/portfolio/development/all-projects"
                          size="large"
                          className=" bg-brand-primary text-black hover:bg-brand-primary"
                        >
                          See all Project
                        </NavButton>
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {points.map((point, idx) => (
            <motion.div
              key={point.id}
              id={`why-card-${point.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col items-start space-y-6"
            >
              {/* Rounded light gray box for the icon */}
              <div className="flex items-center justify-center h-14 w-14 rounded-sm bg-zinc-50 border border-zinc-100/80 shadow-inner">
                {point.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight font-sans">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
