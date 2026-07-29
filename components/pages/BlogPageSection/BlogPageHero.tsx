"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { blogPosts, BlogPost } from "./BlogData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import TopRightIcon from "@/components/Icons/TopRightIcon";

interface BlogPageHeroProps {
  posts?: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

function BlogPageHero({ posts, onSelectPost }: BlogPageHeroProps) {
  const slides = useMemo(() => {
    const list = posts && posts.length > 0 ? posts : blogPosts;
    return list.slice(0, 3); // limit to 3 featured posts for indicators consistency
  }, [posts]);

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
  };

  // Clamp the active index to make sure it's valid
  const currentIdx = activeSlide < slides.length ? activeSlide : 0;
  const currentSlide = slides[currentIdx];

  return (
    <section
      id="blog-trending-header-section"
      className="bg-[#F5F4EC] pt-28 pb-16 px-4 sm:px-6 lg:pt-38 lg:px-8 border-b border-zinc-200/40 relative overflow-hidden"
    >
      {/* Soft background light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header Row: Available for Work pill, large headline, description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left side */}
          <div className="space-y-4 max-w-xl">
            {/* Available for work badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#DCEAD6] text-[#2E581C] border border-[#C5D9BD] text-[11px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#429E2D] animate-pulse" />
              <span>Available for work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.05] font-sans">
              Trending Blogs &amp; News
            </h1>
          </div>

          {/* Right side description */}
          <div className="md:max-w-sm">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Insights to help you stay ahead and make the most of every
              opportunity. In-depth articles, curated tips, and inspiration for
              curious minds.
            </p>
          </div>
        </div>

        {/* 2. Featured Interactive Carousel Banner */}
        <div
          id="featured-blog-slider-card"
          className="relative rounded-md sm:rounded-xl bg-zinc-900 overflow-hidden shadow-2xl shadow-zinc-950/20 aspect-[16/10] md:aspect-[21/9] min-h-[450px] flex flex-col justify-between border border-zinc-800"
        >
          {/* Carousel background image with fade effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                width={1200}
                height={800}
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.4]"
              />
              {/* Horizontal dramatic shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Inner Content overlay: Top Tag, Title, Read More */}
          <div className="relative z-10 p-6 sm:p-10 md:p-12 flex-1 flex flex-col justify-between">
            {/* Category tag */}
            <div className="flex items-start">
              <span className="bg-white/10 backdrop-blur border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full capitalize">
                {currentSlide.tag}
              </span>
            </div>

            {/* Title & Subtext Block */}
            <div className="max-w-3xl space-y-4 my-auto pt-6 pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                    {currentSlide.title}
                  </h2>
                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal opacity-90 line-clamp-2 sm:line-clamp-none">
                    {currentSlide.excerpt}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Read more button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectPost(currentSlide)}
                  className="flex items-center justify-center gap-2 rounded transition h-10 px-4 text-sm bg-brand-primary max-w-[150px] text-black hover:bg-white cursor-pointer font-bold"
                >
                  <span>Read More</span>
                  <span aria-hidden="true">
                    <TopRightIcon />
                  </span>
                </button>
              </div>
            </div>

            {/* Navigation Indicators & Arrow Controls at Bottom */}
            <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between border-t border-white/15 pt-6 gap-6">
              {/* 3 mini slide pagination indicators */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 flex-1 max-w-3xl">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className="text-left flex flex-col group/indicator relative focus:outline-none text-white text-xs"
                  >
                    {/* Active line indicator at the top */}
                    <div className="h-0.5 w-full bg-white/20 mb-2.5 overflow-hidden rounded-full">
                      <div
                        className={`h-full bg-white transition-all duration-500 rounded-full ${
                          currentIdx === idx
                            ? "w-full"
                            : "w-0 group-hover/indicator:w-1/3"
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <span
                      className={`font-mono text-[10px] md:text-xs mb-1 font-bold ${
                        currentIdx === idx ? "text-white" : "text-white/40"
                      }`}
                    >
                      {idx === 0 ? "01" : idx === 1 ? "02" : "03"}
                    </span>
                    <span
                      className={`text-[9px] md:text-xs font-semibold leading-snug line-clamp-1 sm:line-clamp-2 transition-opacity duration-300 ${
                        currentIdx === idx
                          ? "text-white font-bold opacity-100"
                          : "text-white/40 opacity-70 group-hover/indicator:opacity-90"
                      }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-2.5 shrink-0 self-end">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/25 bg-white/10 hover:bg-white text-white hover:text-zinc-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/25 bg-white/10 hover:bg-white text-white hover:text-zinc-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPageHero;
