"use client";

import { useState } from "react";
import Image from "next/image";
import { section } from "motion/react-m";
import PlayIcon from "../../Icons/PlayIcon";
import PartnershipSvg from "../../Icons/PartnershipSvg";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";

const BRANDS = [
  { id: 1, name: "brand 1", path: "/images/brand 1.png" },
  { id: 2, name: "brand 2", path: "/images/brand 2.png" },
  { id: 3, name: "brand 3", path: "/images/brand 3.png" },
  { id: 4, name: "brand 4", path: "/images/brand 4.png" },
  { id: 5, name: "brand 5", path: "/images/brand 5.png" },
];

export default function HomePortfolioSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <section className="relative w-full bg-white py-20 px-5 md:px-5">
      <div className="mx-auto max-w-7xl">
        {/* Video Section */}
        <div className="lg:-mt-[200px] mb-20 md:mb-32">
          <div className="relative w-full border-6 lg:border-12 overflow-hidden rounded-xl lg:rounded-4xl">
            {/* Video Overlay Background */}
            <div className="relative aspect-video w-full bg-black group/video overflow-hidden">
              <video
                src="/video/project-preview.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-500">
                <button
                  onClick={handlePlayClick}
                  className="flex flex-col items-center gap-4 transition-transform duration-300 transform hover:scale-105 active:scale-95"
                  aria-label="Play video"
                >
                  {/* Circular Play Button with premium design & ring hover */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-brand-primary text-black shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 relative group/btn">
                    <span className="absolute inset-0 rounded-full border-2 border-brand-primary animate-ping opacity-20 pointer-events-none"></span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 text-black transition-transform duration-300 group-hover/btn:scale-110"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  
                  <span className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md shadow-md border border-white/10 hover:bg-black/80 transition-colors">
                    Watch Full Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-3 text-white transition-all hover:bg-black/80 hover:scale-105 active:scale-95 border border-white/10"
                aria-label="Close video"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <video
                src="/video/project-preview.mp4"
                autoPlay
                controls
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            </div>
          </div>
        )}

        {/* Partnerships Section */}
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-block mb-3">
            <SectionBadge>Clients I have worked with</SectionBadge>
          </div>
          <h2 className="mb-12 text-2xl md:text-3xl max-w-3xl mx-auto lg:text-4xl font-bold text-black">
            Trusted by ambitious businesses building the future.
          </h2>

          {/* Scrolling Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-8 md:gap-12 lg:gap-16">
              {/* Original set */}
              {BRANDS.map((brand) => (
                <div
                  key={`${brand.id}-1`}
                  className="relative h-16 md:h-20 lg:h-12 w-32 md:w-40 lg:w-34 flex-shrink-0"
                >
                  <Image
                    src={brand.path}
                    alt={brand.name}
                    fill
                    className="object-contain  object-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {BRANDS.map((brand) => (
                <div
                  key={`${brand.id}-2`}
                  className="relative h-16 md:h-20 lg:h-12 w-32 md:w-40 lg:w-34 flex-shrink-0"
                >
                  <Image
                    src={brand.path}
                    alt={brand.name}
                    fill
                    className="object-contain object-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
