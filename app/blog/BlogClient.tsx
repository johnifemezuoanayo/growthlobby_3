"use client";

import { useQuery } from "@apollo/client/react";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence } from "motion/react";
import { IBlogData } from "@/base/interface/IBlog";
import { BLOG_QUERY } from "@/base/queries/blog";
import BlogPageHero from "@/components/pages/BlogPageSection/BlogPageHero";
import BlogPageSection from "@/components/pages/BlogPageSection/BlogPageSection";
import BlogPostOverlay from "@/components/pages/BlogPageSection/BlogPostOverlay";
import { blogPosts, BlogPost } from "@/components/pages/BlogPageSection/BlogData";

export default function BlogClient() {
  const { data, loading } = useQuery<IBlogData>(BLOG_QUERY);
  const blogContents = data?.blogs || [];

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Map IBlog[] to BlogPost[]
  const displayPosts: BlogPost[] = useMemo(() => {
    return blogContents.length > 0
      ? blogContents.map((post) => ({
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
          readTime: post.readTime ? `${post.readTime} min read` : "5 min read",
          author: {
            name: post.author?.name || "John Design",
            avatar: post.author?.profilePic?.url || "/images/me.png",
            role: post.author?.role || "",
          },
          tag: post.category || "General",
          featured: post.featured,
        }))
      : blogPosts;
  }, [blogContents]);

  const featuredPosts = useMemo(() => {
    return displayPosts.filter((post) => post.featured);
  }, [displayPosts]);

  // URL deep-linking support
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const postId = params.get("post");
      if (postId) {
        const post = displayPosts.find((p) => p.id === postId);
        if (post) {
          setSelectedPost(post);
        }
      }
    }
  }, [displayPosts]);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("post", post.id);
      window.history.replaceState({}, "", url.pathname + url.search);
    }
  };

  const handleCloseOverlay = () => {
    setSelectedPost(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("post");
      window.history.replaceState({}, "", url.pathname + url.search);
    }
  };

  return (
    <>
      <BlogPageHero posts={featuredPosts} onSelectPost={handleSelectPost} />

      {loading ? (
        <div className="py-20 text-center font-sans text-sm text-zinc-500 font-semibold bg-zinc-950">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <span className="ml-2 text-zinc-400">Loading blog posts...</span>
        </div>
      ) : (
        <BlogPageSection
          posts={displayPosts}
          onSelectPost={handleSelectPost}
        />
      )}

      {/* Detailed Blog Post Overlay Reader Component */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostOverlay
            post={selectedPost}
            posts={displayPosts}
            onClose={handleCloseOverlay}
            onSelectPost={handleSelectPost}
          />
        )}
      </AnimatePresence>
    </>
  );
}
