/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { blogPosts, BlogPost } from "../BlogPageSection/BlogData";
import BlogCard from "../BlogPageSection/BlogCard";
import { IBlog } from "@/base/interface/IBlog";
import { AnimatePresence } from "motion/react";
import BlogPostOverlay from "../BlogPageSection/BlogPostOverlay";

/* ---------------------------------------------------------------------- */
/*  Scroll-reveal primitive                                               */
/* ---------------------------------------------------------------------- */

function useInView(
  threshold: number = 0.15,
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,.61,.36,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Tokens                                                                */
/* ---------------------------------------------------------------------- */

interface ColorTokens {
  bg: string;
  heading: string;
  body: string;
  badgeBg: string;
  badgeText: string;
  frameMark: string;
  lime: string;
}

const COLORS: ColorTokens = {
  bg: "#FFFFFF",
  heading: "#181C10",
  body: "#3A3E30",
  badgeBg: "#D6D6C9",
  badgeText: "#2B2E20",
  frameMark: "#8C9080",
  lime: "#CFEA46",
};

const FONT: string =
  "'Plus Jakarta Sans', 'DM Sans', ui-sans-serif, system-ui, sans-serif";

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

interface BlogSectionProps {
  posts?: IBlog[];
}

export default function BlogSection({ posts }: BlogSectionProps = {}) {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const displayPosts: BlogPost[] = posts && posts.length > 0
    ? posts.map((post) => ({
        id: post.id || post.slug,
        title: post.title,
        excerpt: post.excerpt || "",
        content: post.content || { html: "" },
        image: post.image?.url || "",
        category: post.category || "General",
        date: post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : "",
        readTime: post.readTime || "5 min read",
        author: {
          name: post.author?.name || "John Design",
          avatar: post.author?.profilePic?.url || "/images/me.png",
          role: "",
        },
        tag: post.category || "General",
      }))
    : blogPosts;

  return (
    <section
      className="w-full px-6 py-20 sm:py-28"
      style={{ backgroundColor: COLORS.bg, fontFamily: FONT }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionBadge>Process</SectionBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-6 text-4xl font-medium leading-tight sm:text-6xl"
                style={{ color: COLORS.heading }}
              >
                From The Squarespace
                <br />
                Website Design Blog
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mt-6 text-sm leading-relaxed sm:text-base"
                style={{ color: COLORS.body }}
              >
                Are you a DIYer, Squarespace web designer, or newbie to
                Squarespace looking to level up your site? Our Squarespace
                website design blog has you covered with tips and insights
                from a professional web designer covering the Squarespace
                platform, website templates, how to grow your business,
                navigating SEO services, getting a functional website and
                much more!
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="flex-shrink-0">
            <button
              onClick={() => router.push("/blog")}
              className="rounded-full px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.lime, color: COLORS.heading }}
            >
              View All Blog
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.id} delay={0.1 * i} y={30}>
              <BlogCard
                post={post}
                idx={i}
                animate={false}
                onClick={() => setSelectedPost(post)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <BlogPostOverlay
            post={selectedPost}
            posts={displayPosts}
            onClose={() => setSelectedPost(null)}
            onSelectPost={(p) => setSelectedPost(p)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}