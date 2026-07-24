/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ChevronDown,
  Clock,
  Calendar,
  Sparkles,
  Search,
  X,
  Share2,
  Check,
} from "lucide-react";
import { blogPosts } from "./BlogData";
import BlogPostSvg from "@/components/Icons/BlogPostSvg";
import Image from "next/image";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    "All",
    "Web Design",
    "Squarespace",
    "AI & Design",
    "Process",
    "SEO",
  ];

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  const handleShare = (post: any, e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/blog/${post.id}`);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      id="blog-page-root"
      className="min-h-screen bg-zinc-950 text-zinc-900 selection:bg-brand-lime selection:text-black"
    >
      {/* 1. Trending Blogs & News Header Section */}

      {/* 3. White Grid & Filter Section */}
      <section
        id="blog-grid-section"
        className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header & Filter Dropdown Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/50 pb-8 gap-6">
            {/* Title Block */}
            <div className="space-y-4">
              {/* Process Tag Pill */}
              <BlogPostSvg />
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-zinc-950 tracking-tight leading-[1.1] font-sans">
                From The Squarespace <br />
                Website Design Blog
              </h2>
            </div>

            {/* Interactive Filters: Search Bar & Dropdown Select */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-50 border border-zinc-200 rounded-sm pl-9 pr-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-brand-lime focus:border-zinc-300 w-full sm:w-56 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Dropdown Selector */}
              <div className="relative">
                <button
                  type="button"
                  id="category-dropdown-trigger"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full sm:w-52 flex justify-between items-center bg-[#F6F5F0] hover:bg-[#EEEDEA] text-zinc-800 font-bold text-sm px-4 py-3 rounded-sm border border-zinc-200/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-1.5">
                    Category:{" "}
                    <span className="text-[#4D6575]">{selectedCategory}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu Overlay */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      {/* Invisible backdrop to close dropdown */}
                      <div
                        className="fixed inset-0 z-20"
                        onClick={() => setIsDropdownOpen(false)}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-full sm:w-52 bg-white rounded-xl shadow-xl border border-zinc-100 p-1.5 z-30"
                      >
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left font-semibold text-sm px-3.5 py-2 rounded-lg transition-colors flex items-center justify-between ${
                              selectedCategory === cat
                                ? "bg-[#F5F4EC] text-zinc-950 font-bold"
                                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                          >
                            <span>{cat}</span>
                            {selectedCategory === cat && (
                              <div className="h-1.5 w-1.5 rounded-full bg-[#4D6575]" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 4. Grid of Blog Cards */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
              <p className="text-zinc-500 font-medium">
                No blog posts found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#4D6575] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(0, visibleCount).map((post, idx) => (
                <motion.article
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setSelectedPost(post)}
                  className="group flex flex-col justify-between bg-[#EEEEE3]/60 hover:bg-[#F5F4EC]/90 rounded-xl pl-6 pb-5   border-zinc-200/50 hover:shadow-xl hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Visual keyboard / computer backlit top image */}
                    <div className="relative rounded-bl-3xl overflow-hidden aspect-[16/10] bg-zinc-900  shadow-inner">
                      <Image
                        width={600}
                        height={600}
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      />
                      {/* Color grading overlay matching keyboard lights */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Dotted Grid Content Area */}
                    <div className="space-y-4 px-1 pr-5">
                      {/* Tag Badge */}
                      <div className="inline-block px-3 py-1 bg-white text-zinc-600 text-[10px] font-bold uppercase tracking-wider rounded- border border-zinc-200/50">
                        {post.tag}
                      </div>

                      {/* Main Post Title */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight leading-snug group-hover:text-zinc-800 line-clamp-3">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-zinc-600 leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card bottom meta */}
                  <div className="flex items-center justify-between pr-6 border-t border-zinc-200/50 pt-4 mt-6 px-1">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200">
                        <Image
                          width={300}
                          height={300}
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-800">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px]">
                      <Clock className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* See More Pagination Button */}
          {filteredPosts.length > visibleCount && (
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="group flex items-center justify-center gap-2.5 rounded-sm bg-brand-primary hover:bg-zinc-900 hover:text-white text-zinc-950 font-semibold text-sm px-6 py-3 active:scale-95 transition-all duration-300"
              >
                <span>See More</span>
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Detailed Blog Post Overlay Reader Component */}
      <AnimatePresence>
        {selectedPost && (
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
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Blog</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(selectedPost, e)}
                    className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300 active:scale-95"
                    title="Copy Article Link"
                  >
                    {copiedId === selectedPost.id ? (
                      <Check className="h-4 w-4 text-[#D2EC00]" />
                    ) : (
                      <Share2 className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
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
                    {selectedPost.category}
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight font-sans">
                    {selectedPost.title}
                  </h1>

                  {/* Horizontal Meta: Author Avatar, Name, Date, Readtime */}
                  <div className="flex flex-wrap items-center justify-between gap-6 border-y border-zinc-200/60 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-zinc-100">
                        <Image
                          width={500}
                          height={500}
                          src={selectedPost.author.avatar}
                          alt={selectedPost.author.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-950">
                          {selectedPost.author.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-zinc-500 font-medium">
                          {selectedPost.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 text-xs text-zinc-500 font-semibold font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-zinc-400" />
                        <span>{selectedPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-zinc-400" />
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover visual Banner Image */}
                <div className="rounded-3xl overflow-hidden aspect-[21/10] bg-zinc-900 border border-zinc-200 shadow-inner">
                  <Image
                    width={500}
                    height={500}
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Copy Content */}
                <div className="space-y-6 text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed font-sans font-normal max-w-none">
                  {selectedPost.content.map((paragraph: any, index: number) => {
                    // Check if paragraph is custom code format
                    if (paragraph.includes(".user-items-list-simple")) {
                      return (
                        <pre
                          key={index}
                          className="bg-zinc-950 text-emerald-400 font-mono text-xs sm:text-sm p-5 rounded-2xl overflow-x-auto my-4 border border-zinc-800 shadow-inner"
                        >
                          <code>{paragraph}</code>
                        </pre>
                      );
                    }

                    return (
                      <p
                        key={index}
                        className="first-letter:text-2xl first-letter:font-bold first-letter:text-zinc-950"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Author Card Footer Segment */}
                <div className="bg-[#EEEDE5] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-zinc-300/40">
                  <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 bg-zinc-200 border-2 border-white shadow-md">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <h4 className="text-base font-extrabold text-zinc-950">
                      Written by {selectedPost.author.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      John is an official Squarespace Expert, Partner, and
                      Community Leader who has crafted over 700+ high-fidelity
                      responsive websites. He leads a thriving community of 200+
                      elite designers globally.
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
                  {blogPosts
                    .filter((post) => post.id !== selectedPost.id)
                    .slice(0, 2)
                    .map((post) => (
                      <div
                        key={post.id}
                        onClick={() => {
                          setSelectedPost(post);
                          // Scroll element into view
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 p-5 rounded-2xl flex items-start gap-4 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 bg-zinc-800 border border-zinc-700">
                          <Image
                            width={500}
                            height={500}
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500">
                            {post.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-2 leading-snug group-hover:text-brand-lime transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
