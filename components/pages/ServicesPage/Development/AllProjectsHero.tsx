"use client"

import SpinningCircle from '@/components/ui/ContactForm/SpinningCircle';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react";
import NavButton from '@/components/ui/Navbar/NavButton';

function AllProjectsHero() {
  return (
    <div
      id="hero-section"
      className="  w-full u lg:min-h-[90vh] bg-[#EDEFE7]  overflow-hidden pt-30 pb-12 lg:pt-44   px-4 sm:px-6 lg:px-8"
    >
      <Image
        src="/svgs/aboutbg.svg"
        alt=""
        className="w-full hidden h-screen absolute z- inset-0"
        width={2000}
        height={1200}
      />

      <div className="relative  bg-[#17191C] rounded-3xl lg:p-20 border-12 px-6 py-12 border-zinc-300 w-full max-w-7xl mx-auto grid lg:flex justify-between items-center">
        {/* Left Column: Copy & Call-to-Action */}
        <div className="flex flex-col  items-start space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl  tracking-tight text-white leading-[1.1] font-sans">
              Web Design <br/> Portfolio
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
          >
            Growthlobby is a Web Design Agency that specializes in creating stunning, high-performance websites for businesses of all sizes. We combine creativity, strategy, and cutting-edge technology to deliver exceptional digital experiences that drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-2"
          >

            <NavButton
              href="/book-a-call"
              size="large"
              className=" bg-brand-primary text-black hover:bg-brand-primary"
            >
              Book a call Now
            </NavButton>
          </motion.div>
        </div>

        {/* Right Column: Profile Portrait & Glowing Cards */}
        <div className=" lg:flex justify-center hidden lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full "
          >
            {/* Portrait Card */}
            <div
              id="portrait-image-card"
              className="relative w-[500px] h-full "
            >
              <SpinningCircle />
              <Image
                src="/images/dev-hero.png"
                alt=""
                className="w-full z-10 "
                width={2000}
                height={900}
              />
              {/* Subtle Overlay to match mock shadow */}
            </div>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}

export default AllProjectsHero;