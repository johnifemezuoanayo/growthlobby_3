"use client";

import React from "react";
import ProjectSvg from "../../Icons/ProjectSvg";
import Image from "next/image";
import TestimonialSvg from "../../Icons/TestimonialSvg";
import { testimonials } from "./testimonialData";



export default function TestimonialSection() {
  return (
    <section className="relative bg-[#14160C] w-full overflow-hidden px-5 py-24 sm:px-10 md:px-5 lg:px-0">
      {/* dotted background texture */}
      <div className="ts-dotgrid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        {/* eyebrow badge */}
        <TestimonialSvg />

        {/* headline */}
        <h2 className="mb-16 mt-5 max-w-3xl text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-5xl">
          My Clients have never been more happier
        </h2>

        {/* testimonial rows */}
        <div className="flex flex-col gap-10 lg:gap-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="ts-row flex max-w-4xl flex-col items-start gap-5 sm:flex-row sm:items-start"
            >
              <Image
                width={300}
                height={400}
                src={t.img}
                alt={t.name}
                className="ts-card h-32 w-24 flex-shrink-0 rounded-sm object-cover sm:h-20 sm:w-20"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <div className="pt-1">
                <p className="text-lg leading-relaxed text-white sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-white/50 sm:text-base">
                  {t.name} – {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
