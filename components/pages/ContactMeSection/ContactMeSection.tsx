"use client"

import React from 'react'
import NavButton from '../../ui/Navbar/NavButton';
import { motion } from "motion/react";
import AvatarStack from './AvatarComp';
import ContactForm from '../../ui/ContactForm/ContactForm';

function ContactMeSection() {
  return (
    <section
      id="contact-section"
      className=" relative isolate lg:py-20 bg-white overflow-x-hidden bg-[#060606] font-sans text-white selection:bg-brand-primary selection:text-black  [background-image:radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:14px_14px]"
    >
      <div className="bg-black/20 max-w-7xl mx-auto lg:rounded-2xl px-0 lg:p-3">
        <div className="relative z-20 flex ts-dotgrid bg-[#7F9D05]  flex-col lg:rounded-xl">
          <main className="relative flex flex-grow items-center justify-center px-4 py-12 sm:px-8 md:py-20 lg:px-16">
            <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start gap-6 w- lg:col-span-7 lg:pr-6"
              >
                <div className="inline-flex border items-center gap-3 rounded-sm  border-white/20 px-1 py-1 shadow-inner backdrop-blur-sm">
                  <div className="flex items-center gap-2 bg-linear-to-r/srgb from-[#539107] to-[#232B02]/20 from- py-2 px-3 rounded-sm">
                    <span className="relative bg flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-brand-primary" />
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-white">
                      Available for work
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Start your project
                </h1>

                <p className="max-w-xl text-sm font-light leading-relaxed text-white/90 sm:text-base">
                  Meet Your New AI-Native Production Partner. Take On 3x More
                  Clients Without Hiring A Single Full-Time Designer Or
                  Developer. Fully Managed By Your Dedicated PM.
                </p>

                <div className="lg:flex  w-full grid items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
                  <NavButton
                    href="/contact"
                    size="large"
                    className=" bg-brand-primary text-black hover:bg-white"
                  >
                    Schedule a call
                  </NavButton>

                  <AvatarStack />
                </div>
              </motion.div>

              <ContactForm />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection