"use client"

import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import NavButton from "@/components/ui/Navbar/NavButton";
import TopRightIcon from "@/components/Icons/TopRightIcon";

interface PricingProps {
  onScheduleClick: (type: string) => void;
}

export default function DesignPricingSection() {
  const packages = [
    {
      id: "pkg-essentials",
      badge: "Essentials",
      price: "$4,500",
      isPrice: true,
      description:
        "Perfect for lean builds and fast turnarounds. Built directly in Squarespace—no code, no fuss. A sleek, functional design that reflects your brand's ambitions.",
      features: [
        "Up to 4 pages",
        "No-code build",
        "1 round of revisions",
        "2-week timeline cap",
        "Direct-to-Squarespace design",
      ],
      buttonText: "Schedule a call",
      isHighlight: false,
    },
    {
      id: "pkg-premium",
      badge: "Premium",
      price: "$9,500",
      isPrice: true,
      description:
        "For businesses that need more flexibility and finesse. A hybrid approach for extra polish and performance that helps your organisation scale quickly.",
      features: [
        "Up to 7 pages",
        "Custom styling (CSS)",
        "2 rounds of revisions",
        "5-week timeline cap",
        "Hybrid build",
      ],
      buttonText: "Schedule a call",
      isHighlight: false,
    },
    {
      id: "pkg-enterprise",
      badge: "Enterprise",
      price: "Let's talk",
      isPrice: false,
      description:
        "Our flagship offer for high-level organisations that demand excellence. A bespoke solution combining strategy, innovation, and cutting-edge design. Best for complex builds.",
      features: [
        "Unlimited pages",
        "Unlimited code",
        "Unlimited revisions",
        "No timeline cap",
        "Dedicated design phase",
      ],
      buttonText: "Schedule a call",
      isHighlight: true,
    },
  ];

  return (
    <section
      id="pricing-section"
      className="relative bg-white border-t-12 border-brand-primary/20 text-zinc-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-100"
    >
      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 font-sans">
            Flexible Squarespace Web Design Packages
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Find the Perfect Plan for Your Business
          </p>
        </div>

        {/* Large Dark Rounded Wrapper */}
        <motion.div
          id="pricing-grid-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-zinc-900 text-white rounded-xl p-4 sm:p-8 lg:p-12 shadow-xl border border-zinc-800"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              if (pkg.isHighlight) {
                // Enterprise highlighted white card
                return (
                  <div
                    key={pkg.id}
                    id={`pricing-card-${pkg.id}`}
                    className="bg-white text-zinc-950 rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-lg border border-zinc-100 transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="space-y-8">
                      {/* Badge */}
                      <div className="inline-block">
                        <span className="inline-flex items-center justify-center bg-zinc-100 border border-zinc-200/80 rounded px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-800">
                          {pkg.badge}
                        </span>
                      </div>

                      {/* Header title */}
                      <div className="space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-sans">
                          {pkg.price}
                        </h3>
                        <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Checklist */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                          What&lsquo;s Included
                        </h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#E2E8F0] text-[#4A6070] shrink-0">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </div>
                              <span className="text-sm sm:text-base text-zinc-800">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8">
                      <NavButton
                        href="/contact"
                        size="large"
                        className=" border border-white/50 bg-brand-primary text-black hover:text-brand-primary hover:bg-white rounded-sm
                      "
                      >
                        Schedule a Call
                      </NavButton>
                    </div>
                  </div>
                );
              }

              // Normal dark plans (Essentials / Premium)
              return (
                <div
                  key={pkg.id}
                  id={`pricing-card-${pkg.id}`}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/80 last:border-0 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="inline-flex items-center justify-center bg-zinc-800 border border-zinc-700/80 rounded px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                        {pkg.badge}
                      </span>
                    </div>

                    {/* Price / Desc */}
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-medium text-zinc-500">
                          From
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                          {pkg.price}
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">
                        What&#39;s Included
                      </h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50 shrink-0">
                              <Check className="h-3 w-3 stroke-[3]" />
                            </div>
                            <span className="text-sm sm:text-base  text-zinc-300">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-8">
                    <NavButton
                      href="/contact"
                      size="large"
                      className=" border border-white/50 bg-white text-black hover:text-brand-primary hover:bg-white rounded-sm
                      "
                    >
                      Schedule a Call
                    </NavButton>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
