"use client";

import { motion, useInView } from "motion/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import MyRecord from "../../Icons/MyRecord";
import NavButton from "../../ui/Navbar/NavButton";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
}

function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/(\d+)(.*)/);
    
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2] || "";
    
    const duration = 1500; // 1.5 seconds count animation
    const startTime = performance.now();

    let animationFrameId: number;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentNumber = Math.floor(easedProgress * targetNumber);
      setDisplayValue(`${currentNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function RecordSection() {
  const stats = [
    {
      id: "stat-1",
      label: "Years of Experience",
      value: "7+",
      description:
        "Helping clients stay ahead with modern, responsive, and engaging digital experiences.",
    },
    {
      id: "stat-2",
      label: "Referral Rate",
      value: "60%",
      description:
        "New clients come from referrals, showing the confidence our clients have in recommending us.",
    },
    {
      id: "stat-3",
      label: "Client Satisfaction",
      value: "100%",
      description:
        "Our client-focused approach has led to consistent high ratings and satisfaction.",
    },
  ];

  return (
    <section
      id="results-section"
      className="relative [background-image:radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:14px_14px] bg-[#F0F2EC]/90 text-zinc-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Header Row with Column Alignment */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            {/* Gray tag */}
            <MyRecord />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-none font-sans">
              A Record Of Results
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal pt-2">
              Driven by our passion for excellence and supported by our
              incredible clients, our work has delivered impactful results
              across industries. Here&lsquo;s a look at the milestones that
              showcase our dedication and the success of our partnerships.
            </p>
          </div>

          <div className="flex lg:justify-end shrink-0">
            <NavButton
              href="/contact"
              size="large"
              className=" bg-brand-primary text-black hover:bg-white"
            >
              Get in touch
            </NavButton>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between bg-white rounded-sm border border-zinc-100 p-6 sm:p-8 - hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Label */}
              <div className="mb-6">
                <span className="text-xs sm:text-sm font-bold text-zinc-800 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>

              {/* Arrow and Large Metric Value */}
              <div className="flex items-end justify-between border-b border-zinc-100 pb-6 mb-6">
                {/* Arrow Icon */}
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:text-zinc-800 transition-colors">
                  <ArrowUp className="h-5 w-5 stroke-[2.5]" />
                </div>

                {/* Stat Big Number */}
                <span className="text-4xl sm:text-5xl font-black text-zinc-900 font-sans tracking-tight leading-none">
                  <AnimatedCounter value={stat.value} />
                </span>
              </div>

              {/* Description Paragraph */}
              <div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
