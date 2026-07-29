"use client";

import { useState } from "react";
import Image from "next/image";
import { section } from "motion/react-m";
import NavButton from "../../ui/Navbar/NavButton";
import PlayIcon from "../../Icons/PlayIcon";
import PartnershipSvg from "../../Icons/PartnershipSvg";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";

const YOUTUBE_VIDEOS = [
  "jNQXAC9IVRw", // Do They Know It's Christmas
  "9bZkp7q19f0", // PSY - GANGNAM STYLE
  "kJQP7kiw9Vs", // Luis Fonsi - Despacito
  "60nblzGoRAQ", // Adele - Hello
  "kffacxfA7g4", // Justin Timberlake - Mirrors
];

const BRANDS = [
  { id: 1, name: "brand 1", path: "/images/brand 1.png" },
  { id: 2, name: "brand 2", path: "/images/brand 2.png" },
  { id: 3, name: "brand 3", path: "/images/brand 3.png" },
  { id: 4, name: "brand 4", path: "/images/brand 4.png" },
  { id: 5, name: "brand 5", path: "/images/brand 5.png" },
];

export default function HomePortfolioSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(YOUTUBE_VIDEOS[0]);

  const handlePlayClick = () => {
    const randomVideo =
      YOUTUBE_VIDEOS[Math.floor(Math.random() * YOUTUBE_VIDEOS.length)];
    setSelectedVideoId(randomVideo);
    setIsVideoOpen(true);
  };

  return (
    <section className="relative w-full bg-white py-20 px-5 md:px-5">
      <div className="mx-auto max-w-7xl">
        {/* Video Section */}
        <div className="lg:-mt-[200px] mb-20 md:mb-32">
          <div className="relative w-full border-6 lg:border-12 overflow-hidden rounded-xl lg:rounded-4xl">
            {/* Video Overlay Background */}
            <div className="relative aspect-video w-full">
              <Image
                src="/images/Video overlay.png"
                alt="Video overlay"
                fill
                className="object-cover"
                priority
              />

              {/* Play Button Overlay */}
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 max-w-full mx-auto flex items-center justify-center rounded-2xl "
                aria-label="Play video"
              >
                <NavButton
                  href="/contact"
                  size="large"
                  icon={<PlayIcon />}
                  className=" bg-brand-primary text-black hover:bg-white rounded-full
                      "
                >
                  Play Video
                </NavButton>
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative aspect-video w-full max-w-4xl rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
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
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
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
