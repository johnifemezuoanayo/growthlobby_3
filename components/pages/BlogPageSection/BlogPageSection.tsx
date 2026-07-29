/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search } from "lucide-react";
import { blogPosts, BlogPost } from "./BlogData";
import BlogPostSvg from "@/components/Icons/BlogPostSvg";
import BlogCard from "./BlogCard";

interface BlogProps {
  posts?: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export default function Blog({ posts, onSelectPost }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  const displayPosts = useMemo(() => {
    return posts && posts.length > 0 ? posts : blogPosts;
  }, [posts]);

  // Extract unique categories from displayPosts dynamically
  const categories = useMemo(() => {
    const postCategories = displayPosts.map((post) => post.category).filter(Boolean);
    const uniqueCategories = Array.from(new Set(postCategories));
    return ["All", ...uniqueCategories];
  }, [displayPosts]);

  // Filter posts based on category and search query
  const filteredPosts = displayPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      id="blog-page-root"
      className="min-h-screen bg-zinc-950 text-zinc-900 selection:bg-brand-lime selection:text-black"
    >
      {/* White Grid & Filter Section */}
      <section
        id="blog-grid-section"
        className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header & Filter Dropdown Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/50 pb-8 gap-6">
            {/* Title Block */}
            <div className="space-y-4">
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
                  <span className="flex capitalize items-center gap-1.5">
                    Category:{" "}
                    <span className="text-[#4D6575]">{selectedCategory}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Overlay */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
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
                            className={`w-full capitalize text-left font-semibold text-sm px-3.5 py-2 rounded-lg transition-colors flex items-center justify-between ${
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

          {/* Grid of Blog Cards */}
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
                <BlogCard
                  key={post.id}
                  post={post}
                  idx={idx}
                  onClick={() => onSelectPost(post)}
                />
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

    </div>
  );
}
