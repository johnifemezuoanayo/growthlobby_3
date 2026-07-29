"use client";

import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { motion } from "motion/react";
import { BlogPost } from "./BlogData";

interface BlogCardProps {
  post: BlogPost;
  idx: number;
  onClick?: () => void;
  animate?: boolean;
}

export default function BlogCard({
  post,
  idx,
  onClick,
  animate = true,
}: BlogCardProps) {
   console.log(post.image)
  const cardContent = (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-5">
        {/* Visual keyboard / computer backlit top image */}
        <div className="relative rounded-bl-3xl overflow-hidden aspect-[16/10] bg-zinc-900 shadow-inner">
          <Image
            width={600}
            height={600}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          {/* Color grading overlay matching keyboard lights */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" /> */}
        </div>

        {/* Dotted Grid Content Area */}
        <div className="space-y-4 px-1 pr-5">
          {/* Tag Badge */}
          <div className="inline-block px-3 py-1 bg-white text-zinc-600 text-[10px] font-bold uppercase tracking-wider rounded border border-zinc-200/50">
            {post.tag}
          </div>

          {/* Main Post Title */}
          <h3 className="text-lg text-linear-to-r/srgb from-[#539107] to-[#232B02]/20 sm:text-xl font-extrabold text-zinc-950 tracking-tight leading-snug group-hover:text-zinc-800 line-clamp-3">
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
    </div>
  );

  const className =
    "group flex flex-col justify-between bg-[#EEEEE3]/60 hover:bg-[#F5F4EC]/90 rounded-xl pl-6 pb-5 border border-zinc-200/50 hover:shadow-xl hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden";

  if (animate) {
    return (
      <motion.article
        id={`blog-card-${post.id}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: idx * 0.05 }}
        onClick={onClick}
        className={className}
      >
        {cardContent}
      </motion.article>
    );
  }

  return (
    <article
      id={`blog-card-${post.id}`}
      onClick={onClick}
      className={className}
    >
      {cardContent}
    </article>
  );
}
