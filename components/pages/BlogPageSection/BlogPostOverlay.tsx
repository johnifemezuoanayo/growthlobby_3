"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import parse from "html-react-parser";

import {
  ArrowLeft,
  Clock,
  Calendar,
  Sparkles,
  X,
  Share2,
  Check,
} from "lucide-react";
import Image from "next/image";
import { blogPosts, BlogPost } from "./BlogData";

interface BlogPostOverlayProps {
  post: BlogPost;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
  posts?: BlogPost[];
}

export default function BlogPostOverlay({
  post,
  onClose,
  onSelectPost,
  posts,
}: BlogPostOverlayProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (p: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/blog?post=${p.id}`);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex justify-center items-stretch overflow-y-auto"
    >
      {/* Scroll Container wrapper */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-16 md:py-24 relative flex flex-col justify-start">
        {/* Back to Blog top floating trigger */}
        <div className="sticky top-4 z-40 flex justify-between items-center bg-zinc-900/60 backdrop-blur border border-zinc-800/80 rounded-full px-5 py-2.5 shadow-lg mb-8">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => handleShare(post, e)}
              className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 active:scale-95"
              title="Copy Article Link"
            >
              {copiedId === post.id ? (
                <Check className="h-4 w-4 text-[#D2EC00]" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-[#444] flex items-center justify-center text-zinc-300 hover:text-white transition-all active:scale-95"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Reading Canvas */}
        <motion.article
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-[#F5F4EC] rounded-xl p-6 sm:p-12 md:p-16 border border-zinc-200 text-zinc-900 space-y-10 shadow-2xl relative"
        >
          {/* Meta details header info */}
          <div className="space-y-6">
            {/* Category Pill Tag */}
            <div className="inline-block px-4 py-1.5 bg-zinc-100 text-[#4D6575] border border-zinc-300/60 text-xs font-bold uppercase tracking-wider rounded-md">
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight font-sans">
              {post.title}
            </h1>

            {/* Horizontal Meta: Author Avatar, Name, Date, Readtime */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-zinc-200/60 py-5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-zinc-100">
                  <Image
                    width={500}
                    height={500}
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">
                    {post.author.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-zinc-500 font-medium">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs text-zinc-500 font-semibold font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-zinc-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-zinc-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cover visual Banner Image */}
          <div className="rounded-3xl overflow-hidden aspect-[21/10] bg-zinc-900 border border-zinc-200 shadow-inner">
            <Image
              width={1200}
              height={600}
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Copy Content */}
          <div className="space-y-6 text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed font-sans font-normal max-w-none">
            <div className="pageStyle">
              {parse(post.content.html as string)}
            </div>
          </div>

          {/* Author Card Footer Segment */}
          <div className="bg-[#EEEDE5] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-zinc-300/40">
            <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 bg-zinc-200 border-2 border-white shadow-md">
              <Image
                width={200}
                height={200}
                src={post.author.avatar}
                alt={post.author.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-base font-extrabold text-zinc-950">
                Written by {post.author.name}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                John is  a professional Web Design Expert, Partner, and
                Entrepreneur who has crafted over 100+ high-fidelity
                responsive websites.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Read Next Section */}
        <div className="mt-12 space-y-6 text-white">
          <h3 className="text-lg font-bold font-mono tracking-wide uppercase text-zinc-400 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D2EC00]" /> Read Next
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(posts || blogPosts)
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectPost(p);
                    // Scroll element into view
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 cursor-pointer group"
                >
                  <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 bg-zinc-800 border border-zinc-700">
                    <Image
                      width={500}
                      height={500}
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">
                      {p.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-2 leading-snug group-hover:text-brand-lime transition-colors">
                      {p.title}
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
