"use client"

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import johnPortraitImg from "../assets/images/john_portrait_1784550954073.jpg";

import Image from "next/image";
import { projectsDetailsData } from "./DesignData";



interface ProjectDetailProps {
  projectId: string;
  onScheduleClick: (type: string) => void;
}

export default function DesignProjectDetails({
  projectId,
  onScheduleClick,
}: ProjectDetailProps) {

   const [contactInitialType, setContactInitialType] = useState("design");
   const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Fallback to Storyline Church if not found
  const project =
    projectsDetailsData[projectId] || projectsDetailsData["proj-storyline"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  return (
    <div
      id="project-detail-view"
      className="min-h-screen bg-white text-zinc-900 pb-24 font-sans selection:bg-zinc-900 selection:text-white"
    >
      {/* Top Header Navigation */}
      <div className="border-b border-zinc-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Back button */}
          <button
            id="back-to-portfolio-btn"
            onClick={() => setActiveProjectId(null)}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            <span>Back</span>
          </button>

          {/* Breadcrumbs */}
          <div className="text-zinc-400 text-xs font-medium tracking-wider flex items-center gap-1.5 font-mono">
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => setActiveProjectId(null)}
            >
              Work
            </span>
            <span>/</span>
            <span
              className="hover:text-zinc-600 cursor-pointer transition-colors"
              onClick={() => setActiveProjectId(null)}
            >
              {project.sector} Dev
            </span>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">{project.title}</span>
          </div>

          {/* Visit site link */}
          <a
            id="header-visit-site-link"
            href={project.visitLink}
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
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-200/40 bg-zinc-50 aspect-[16/9] flex flex-col justify-between">
          {/* Device Browser Header Bar */}
          <div className="bg-zinc-100/80 backdrop-blur-md px-4 py-3 border-b border-zinc-200/50 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300"></span>
            </div>
            <div className="bg-white/80 border border-zinc-200/30 text-[10px] text-zinc-400 font-mono px-8 py-0.5 rounded-md max-w-xs truncate">
              {project.visitLink}
            </div>
            <div className="w-12"></div>
          </div>

          {/* Actual mockup screen content */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={project.heroImage}
              alt={`${project.title} website design`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Bottom Floating Visit Button */}
          <div className="absolute bottom-6 right-6 z-10">
            <a
              id="live-visit-button"
              href={project.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase text-zinc-950 transition-all duration-300 shadow-xl ${
                project.id === "proj-storyline"
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
                {project.sector}
              </span>
            </div>
            <h1
              id="project-detail-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight font-sans"
            >
              {project.title}
            </h1>
          </div>

          {/* Right Column: Intro text and Client Info Row */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed">
              {project.intro}
            </p>

            {/* Metrics & Client Table */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-zinc-100 font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Client
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {project.client}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Sector
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {project.sector}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-sans">
                  Duration
                </span>
                <span className="text-sm font-bold text-zinc-800">
                  {project.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview Paragraph */}
        <div className="space-y-6 pt-10 border-t border-zinc-100 max-w-4xl">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Project Overview
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            {project.projectOverview}
          </p>
        </div>

        {/* Side-by-Side Double Mockup Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-6">
          {/* Left Mockup Card (Slightly slanted or flat clean responsive view) */}
          <div className="group bg-[#f7f8f9] rounded-3xl p-6 sm:p-10 border border-zinc-200/40 flex items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 min-h-[300px]">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-white aspect-[4/3]">
              <Image
                width={1000}
                height={1000}
                src={project.detailLeftImage}
                alt={`${project.title} values section`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Right Mockup Card (Narrower/Tablet aspect) */}
          <div className="group bg-[#f7f8f9] rounded-3xl p-6 sm:p-10 border border-zinc-200/40 flex items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 min-h-[300px]">
            <div className="relative w-[80%] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-white aspect-[3/4]">
              <Image
                width={1000}
                height={1000}
                src={project.detailRightImage}
                alt={`${project.title} interactive calendar`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-10 border-t border-zinc-100 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
              Our approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              {project.ourApproach}
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

              {/* Client Social Proof Group */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image
                    width={1000}
                    height={800}
                    src={johnPortraitImg}
                    alt="John Portfolio"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm font-mono">
                    JD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#B4E615] text-zinc-950 flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm font-mono">
                    SC
                  </div>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-zinc-900 block leading-tight">
                    100+ Loved working with John
                  </span>
                  <span className="text-zinc-500">
                    Real client feedback verified
                  </span>
                </div>
              </div>
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
                {project.visitLink}
              </div>
              <div className="w-12"></div>
            </div>

            {/* Inner scrollable area representing the complete website */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 hover:scrollbar-thumb-zinc-400 bg-zinc-50">
              {/* Fake web structure representing the website inside */}
              <div className="w-full">
                {/* Hero block of the inside website */}
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.heroImage}
                    alt="Homepage hero scroll preview"
                    referrerPolicy="no-referrer"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-zinc-950/80 text-white text-xs font-mono tracking-wider uppercase">
                      Hero Section
                    </span>
                  </div>
                </div>

                {/* Values block of the inside website */}
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.detailLeftImage}
                    alt="Homepage content section 1 scroll preview"
                    referrerPolicy="no-referrer"
                    className="w-full object-cover border-t border-zinc-100"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-zinc-950/80 text-white text-xs font-mono tracking-wider uppercase">
                      Overview &amp; Values Section
                    </span>
                  </div>
                </div>

                {/* Calendar / Involved block of the inside website */}
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.detailRightImage}
                    alt="Homepage content section 2 scroll preview"
                    referrerPolicy="no-referrer"
                    className="w-full object-cover border-t border-zinc-100"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-zinc-950/80 text-white text-xs font-mono tracking-wider uppercase">
                      Events &amp; Integration Section
                    </span>
                  </div>
                </div>

                {/* Simulated Footer of the inside website */}
                <div className="bg-zinc-900 text-zinc-400 py-12 px-8 text-center space-y-4">
                  <div className="text-white font-mono font-bold text-xs tracking-wider">
                    {project.title.toUpperCase()}
                  </div>
                  <p className="text-[10px] max-w-md mx-auto">
                    Designed and built with extreme digital execution standards
                    by JOHN.DESIGN engineering consulting.
                  </p>
                  <div className="text-[9px] text-zinc-600">
                    &copy; 2026 {project.client}. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
