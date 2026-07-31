"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import parse from "html-react-parser";

import { projectsDetailsData } from "./DesignData";
import { PROJECT_DETAIL_QUERY } from "@/base/queries/project";
import { IProject } from "@/base/interface/IProject";

interface ProjectDetailProps {
  projectId: string;
  onScheduleClick: (type: string) => void;
}

export default function DesignProjectDetails({
  projectId,
  onScheduleClick,
}: ProjectDetailProps) {
  const router = useRouter();

  // Fallback local mockup data if not found in GraphQL API
  const localProject =
    projectsDetailsData[projectId] || projectsDetailsData["proj-storyline"];

  const { data, loading } = useQuery<{ growthlobbyCaseStudies: IProject[] }>(
    PROJECT_DETAIL_QUERY,
    {
      variables: { slug: projectId },
    }
  );

  console.log(data);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const apiProject = data?.growthlobbyCaseStudies?.[0];

  const displayProject = useMemo(() => {
    return {
      id: apiProject?.id ,
      title: apiProject?.title ,
      description: apiProject?.description,
      sector: apiProject?.industry ,
      visitLink: apiProject?.livesite,
      heroImage: apiProject?.introImage?.url,
      projectOverview: apiProject?.description,
      client: apiProject?.title,
      duration: apiProject?.timeline,
      contentHtml: apiProject?.content?.html,
    };
  }, [apiProject]);

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
      className="min-h-screen pt-[90px] lg:pt-[150px] bg-white text-zinc-900 pb-24 font-sans selection:bg-zinc-900 selection:text-white"
    >
      {/* Top Header Navigation */}
      <div className="border-b border-zinc-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Back button */}
          <button
            id="back-to-portfolio-btn"
            onClick={() => router.push("/portfolio/design")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            <span>Back</span>
          </button>

          {/* Breadcrumbs */}
          <div className="text-zinc-400 text-xs font-medium tracking-wider flex items-center gap-1.5 font-mono">
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => router.push("/portfolio/design")}
            >
              Work
            </span>
            <span>/</span>
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => router.push("/portfolio/design")}
            >
              {displayProject.sector}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 mt-10 space-y-16 sm:space-y-24">
        {/* Large Featured Mockup Banner Container */}
        <div className="relative h-[400px] lg:h-full  group rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-200/40 bg-zinc-50  flex flex-col justify-between">
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
                className="w-full h-full  object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
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
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
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
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
              {displayProject.description}
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
        {displayProject.contentHtml && (
          <div className="pageStyle">
            {parse(displayProject.contentHtml)}
          </div>
        )}

        {/* Back to Design page button at the bottom */}
        <div className="flex justify-center pt-12 border-t border-zinc-100">
          <button
            type="button"
            onClick={() => router.push("/portfolio/design")}
            className="group flex items-center justify-center gap-2 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm px-8 py-4 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-zinc-200"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Design Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
}
