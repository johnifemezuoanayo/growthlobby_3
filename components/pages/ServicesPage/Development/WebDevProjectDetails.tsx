"use client";

import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import Image from "next/image";

import { projectsDetailsData } from "../Design/DesignData";
import { WEB_PROJECT_DETAIL_QUERY } from "@/base/queries/project";
import { IProjectWeb } from "@/base/interface/IProject";
import AvatarStack from "../../ContactMeSection/AvatarComp";

interface ProjectDetailProps {
  projectId: string;
  onScheduleClick: (type: string) => void;
}

export default function WebDevProjectDetails({
  projectId,
  onScheduleClick,
}: ProjectDetailProps) {
  const router = useRouter();

  // Fallback to local mockup data if not found in GraphQL API
  const localProject =
    projectsDetailsData[projectId] || projectsDetailsData["proj-storyline"];

  const { data, loading } = useQuery<{ webProjects: IProjectWeb[] }>(
    WEB_PROJECT_DETAIL_QUERY,
    {
      variables: { id: projectId },
      skip: projectId.startsWith("proj-"), // skip query if it's a local mockup project ID
    }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const apiProject = data?.webProjects?.[0];

  const displayProject = useMemo(() => {
    const leftImage = apiProject?.projectImage?.[0]?.url || localProject.detailLeftImage;
    const rightImage = apiProject?.projectImage?.[1]?.url || apiProject?.projectImage?.[0]?.url || localProject.detailRightImage;
    return {
      id: apiProject?.id || localProject.id,
      title: apiProject?.title || localProject.title,
      sector: apiProject?.sector || localProject.sector,
      visitLink: apiProject?.liveSite || localProject.visitLink,
      heroImage: apiProject?.coverImage?.url || localProject.heroImage,
      intro: apiProject?.description || localProject.intro,
      client: apiProject?.title || localProject.client,
      duration: (apiProject as any)?.duration || localProject.duration,
      projectOverview: apiProject?.projectOverview,
      detailLeftImage: leftImage,
      detailRightImage: rightImage,
      scrollImage: apiProject?.scrollImage?.url || localProject.heroImage,
      ourApproach: apiProject?.ourApproach || localProject.ourApproach,
    };
  }, [apiProject, localProject]);

  const detailImages = useMemo(() => {
    if (apiProject?.projectImage && apiProject.projectImage.length > 0) {
      return apiProject.projectImage.map((img) => img.url);
    }
    return [
      localProject.detailLeftImage,
      localProject.detailRightImage
    ].filter(Boolean);
  }, [apiProject, localProject]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-zinc-950 border-r-transparent align-[-0.125em]" />
        <span className="ml-3 text-zinc-600 font-semibold">Loading project details...</span>
      </div>
    );
  }

  return (
    <div
      id="project-detail-view"
      className="min-h-screen pt-[64px] lg:pt-[120px] bg-white text-zinc-900 pb-24 font-sans selection:bg-zinc-900 selection:text-white"
    >
      {/* Top Header Navigation */}
      <div className="border-b border-zinc-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Back button */}
          <button
            id="back-to-portfolio-btn"
            onClick={() => router.push("/portfolio/development")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            <span>Back</span>
          </button>

          {/* Breadcrumbs */}
          <div className="text-zinc-400 text-xs font-medium tracking-wider flex items-center gap-1.5 font-mono">
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => router.push("/portfolio/development")}
            >
              Work
            </span>
            <span>/</span>
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => router.push("/portfolio/development")}
            >
              {displayProject.sector} Dev
            </span>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">{displayProject.title}</span>
          </div>

          {/* Visit site link */}
          <a
            id="header-visit-site-link"
            href={displayProject.visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 text-xs font-semibold tracking-wider font-mono transition-colors"
          >
            <span>Launch Web App</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16 sm:space-y-24">
        {/* Large Featured Mockup Banner Container */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-200/40 bg-zinc-50  flex flex-col justify-between">
          {/* Device Browser Header Bar */}
          <div className="bg-zinc-100/80 backdrop-blur-md px-4 py-3 border-b border-zinc-200/50 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
            </div>
            <div className="bg-white/80 border border-zinc-200/30 text-[10px] text-zinc-400 font-mono px-8 py-0.5 rounded-md max-w-xs truncate">
              {displayProject.visitLink}
            </div>
            <div className="w-12"></div>
          </div>

          {/* Actual mockup screen content */}
          <div className="relative flex-1 overflow-hidden">
            {displayProject.heroImage && (
              <Image
                width={1000}
                height={1000}
                src={displayProject.heroImage}
                alt={`${displayProject.title} website design`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
            )}
          </div>

          {/* Bottom Floating Visit Button */}
          <div className="absolute bottom-6 right-6 z-10">
            <a
              id="live-visit-button"
              href={displayProject.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase text-zinc-950 transition-all duration-300 shadow-xl ${
                displayProject.id === "proj-storyline"
                  ? "bg-[#B4E615] hover:bg-[#c2f716]"
                  : "bg-white hover:bg-zinc-100"
              }`}
            >
              <span>Visit Site</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Introduction & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4 border-t border-zinc-100">
          {/* Left Column: Pill & Title */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/40 text-xs font-semibold text-zinc-600">
                <span className="w-1.5 h-1.5 rounded-full font-mono  bg-zinc-400"></span>
                {displayProject.sector}
              </span>
            </div>
            <h1
              id="project-detail-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight font-sans"
            >
              {displayProject.title}
            </h1>
          </div>

          {/* Right Column: Intro text and Client Info Row */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              {displayProject.intro}
            </p>

            {/* Metrics & Client Table */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-zinc-100 font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Client
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {displayProject.client}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Sector
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {displayProject.sector}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Duration
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {displayProject.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview Paragraph */}
        <div className="space-y-6 pt-10 border-t border-zinc-100 max-w-full">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Project Overview
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            {displayProject.projectOverview}
          </p>
        </div>

        {/* Project Showcase Gallery */}
        {detailImages.length > 0 && (
          <div className="space-y-6 pt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
                Project Gallery
              </h2>
              <div className="flex gap-2">
                <button
                  id="gallery-scroll-left"
                  onClick={() => scroll("left")}
                  className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  id="gallery-scroll-right"
                  onClick={() => scroll("right")}
                  className="p-3 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {detailImages.map((imageUrl, idx) => (
                <div
                  key={idx}
                  className="flex-none snap-start w-[85vw] sm:w-[550px] md:w-[650px] lg:w-[750px] group bg-[#f7f8f9] rounded-3xl p-4 sm:p-8 border border-zinc-200/40 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300"
                >
                  {/* Browser Address Bar Mockup */}
                  <div className="bg-zinc-200/40 px-4 py-2 rounded-t-xl border-b border-zinc-200/40 flex items-center justify-between gap-4 mb-4">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                    <div className="flex-1 max-w-md bg-white rounded-md text-[10px] text-zinc-400 text-center py-0.5 border border-zinc-100 select-none truncate font-mono">
                      {displayProject.visitLink || "https://growthlobby.com"}
                    </div>
                    <div className="w-10"></div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative w-full flex-1 rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-white aspect-[16/10]">
                    <Image
                      width={1000}
                      height={800}
                      src={imageUrl}
                      alt={`${displayProject.title} screen ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-10 border-t border-zinc-100 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
              Our approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              {displayProject.ourApproach}
            </p>

            {/* Schedule CTA Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button
                id="cta-schedule-call-btn"
                onClick={() => onScheduleClick("design")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#B4E615] hover:bg-zinc-900 hover:text-white text-zinc-950 font-bold text-sm px-6 py-4 hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <span>Schedule a call</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <AvatarStack onWhiteBg={true} />
            </div>
          </div>
        </div>

        {/* Scrollable Live Interactive Preview: "Here's how it looks" */}
        <div className="bg-[#eff1f3]/70 rounded-3xl p-6 sm:p-10 lg:p-12 border border-zinc-200/50 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Here&lsquo;s how it looks
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Interactive high-fidelity website preview. Scroll within the
              browser frame to explore the entire page layout.
            </p>
          </div>

          {/* Browser Window mockup container */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">
            {/* Browser frame header */}
            <div className="bg-zinc-100 border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="bg-zinc-200/50 border border-zinc-200/30 text-[10px] text-zinc-500 font-mono px-12 py-0.5 rounded-md max-w-sm truncate text-center">
                {displayProject.visitLink}
              </div>
              <div className="w-12"></div>
            </div>

            {/* Inner scrollable area representing the complete website */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 hover:scrollbar-thumb-zinc-400 bg-zinc-50">
              {displayProject.scrollImage && (
                <div className="w-full">
                  <Image
                    width={1200}
                    height={3000}
                    src={displayProject.scrollImage}
                    alt={`${displayProject.title} scroll preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
