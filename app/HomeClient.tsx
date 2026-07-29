"use client";
import HomeHeroSection from "@/components/pages/HomeHeroSection/HomeHeroSection";
import HomePortfolioSection from "@/components/pages/HomePortfolioSection/HomePortfolioSection";
import HomeAboutSection from "@/components/pages/HomeAboutSection/HomeAboutSection";
import ServiceSection from "@/components/pages/ServiceSection/ServiceSection";
import ProjectSection from "@/components/pages/HomeProjectSection/HomeProjectSection";
import ProcessSection from "@/components/pages/ProcessSection/ProcessSection";
import TestimonialSection from "@/components/pages/TestimonialSection/TestimonialSection";
import ContactMeSection from "@/components/pages/ContactMeSection/ContactMeSection";
import IntegrationSection from "@/components/pages/IntegrationSection/IntegrationSection";
import WhySection from "@/components/pages/WhyMeSction/WhyMeSection";
import BlogSection from "@/components/pages/BlogSection/BlogSection";
import HomeFAQSection from "@/components/pages/BookaCallFAQ.tsx/HomeFAQ";
import DownCTASection from "@/components/pages/DownCTASection/DownCTASection";

import { BLOG_FEATURED_QUERY } from "@/base/queries/blog";
import { IBlogData } from "@/base/interface/IBlog";
import { useQuery } from "@apollo/client/react";
import { PROJECT_WEB_QUERY } from "@/base/queries/project";
import { IProjectWebData } from "@/base/interface/IProject";

export default function HomePage() {
  const { data: blogData, loading: blogLoading } = useQuery<IBlogData>(BLOG_FEATURED_QUERY);
  const blogContents = blogData?.blogs || [];

  const { data: devProjectData, loading: devLoading } = useQuery<IProjectWebData>(PROJECT_WEB_QUERY);
  const devProjects = devProjectData?.webProjects || [];
  const latestDevProjects = [...devProjects]
    .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, 4);

  return (
    <>
      <HomeHeroSection />
      <HomePortfolioSection />
      <HomeAboutSection />
      <ServiceSection />
      {devLoading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-[#eef0e6]">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading projects...</span>
        </div>
      ) : (
        <ProjectSection projects={latestDevProjects} />
      )}
      <ProcessSection />
      <TestimonialSection />
      <ContactMeSection />
      <IntegrationSection />
      <WhySection />
      {blogLoading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-white">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-zinc-950 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2">Loading featured news...</span>
        </div>
      ) : (
        <BlogSection posts={blogContents} />
      )}
      <HomeFAQSection />
      <DownCTASection />
    </>
  );
}
