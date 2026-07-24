"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroCopy } from "./HeroCopy";
import ContactForm from "../../ui/ContactForm/ContactForm";

export default function HomeHeroSection() {


  return (
    <section id="contact-me" className="relative isolate min-h-[120vh] overflow-x-hidden bg-[#060606] font-sans text-white selection:bg-brand-primary selection:text-black">
      <HeroBackground />

      <div className="relative z-20 flex mt-[250px] lg:mt-[120px] pt-6 min-h-screen flex-col">
        <main className="relative flex flex-grow items-center justify-center px-4 py-12 sm:px-8 md:py-20 -mt-44 lg:px-0">
          <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <HeroCopy />

            <ContactForm />
          </div>
        </main>
      </div>
    </section>
  );
}
