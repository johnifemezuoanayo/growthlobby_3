"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  X,
  ExternalLink,
  Map as MapIcon,
  ChevronRight,
} from "lucide-react";
import NavButton from "../../ui/Navbar/NavButton";
import MyLocationSvg from "../../Icons/MyLocationSvg";
import Image from "next/image";

interface OfficesProps {
  onContactClick: (type: string) => void;
}

export default function LocationSection() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Office details matching the screenshot perfectly
  const officeDetails = {
    city: "Liverpool",
    address:
      "No.24 East Exchange, Lagos, Nigeria",
    email: "growthlobbyagency@gmail.com",
    phone: "+234 706 0696 371",
    // Embed URL for OpenStreetMap focused on Exchange Street East, Liverpool
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-2.9961%2C53.4063%2C-2.9861%2C53.4113&layer=mapnik&marker=53.4088%2C-2.9911",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Exchange+Street+East+Liverpool+L2+3AB",
  };

  return (
    <section
      id="offices-section"
      className="relative [background-image:radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:14px_14px] bg-white text-zinc-950 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-100"
    >
      <div className="relative w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Row */}
        <div className="space-y-4 max-w-3xl">
          {/* Gray Tag pill with dot */}
          <MyLocationSvg />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-none font-sans">
            Where We Make It Happen
          </h2>
        </div>

        {/* Office Card Container */}
        <motion.div
          id="office-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/50 rounded-sm  border border-zinc-200/80  overflow-hidden p-6 sm:p-8 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Office Image with Rounded Corners */}
            <div className="lg:col-span-4 w-full h-full min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden relative group">
              <Image
                src="/images/lagos.jpg"
                width={600}
                height={500}
                alt="Liverpool Waterfront Mann Island Office"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right: Info Layout */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8 lg:pl-4">
              {/* Detailed Columns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Column 1: City Title */}
                <div className="md:col-span-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans">
                    {officeDetails.city}
                  </h3>
                </div>

                {/* Column 2: Address & Email */}
                <div className="md:col-span-6 space-y-4">
                  {/* Address */}
                  <div className="flex gap-3 items-start">
                    <div className="mt-0.5 rounded-lg bg-zinc-50 p-2 text-zinc-500 border border-zinc-100 shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-800 leading-snug">
                        {officeDetails.address}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3 items-center">
                    <div className="rounded-lg bg-zinc-50 p-2 text-zinc-500 border border-zinc-100 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <a
                        href={`mailto:${officeDetails.email}`}
                        className="text-sm font-semibold text-zinc-800 hover:text-emerald-600 transition-colors break-all"
                      >
                        {officeDetails.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 3: Phone */}
                <div className="md:col-span-3">
                  <div className="flex gap-3 items-center">
                    <div className="rounded-lg bg-zinc-50 p-2 text-zinc-500 border border-zinc-100 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <a
                        href={`tel:${officeDetails.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-semibold text-zinc-800 hover:text-emerald-600 transition-colors"
                      >
                        {officeDetails.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100 md:justify-start">
                {/* <button
                  id="view-map-btn"
                  onClick={() => setIsMapOpen(true)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800 font-semibold text-sm px-6 py-3 transition-colors cursor-pointer"
                >
                  <MapIcon className="h-4 w-4 text-zinc-500" />
                  <span>View Map</span>
                </button> */}

                <NavButton
                  href="/contact"
                  size="large"
                  className=" bg-brand-primary border border-zinc-100 text-black hover:bg-white"
                >
                  Get in touch
                </NavButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div
            id="map-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              id="map-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              id="map-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white border border-zinc-200 text-zinc-950 shadow-2xl z-10"
            >
              <div className="p-4 sm:p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 font-sans">
                    Office Location: {officeDetails.city}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {officeDetails.address}
                  </p>
                </div>
                <button
                  id="close-map-btn"
                  onClick={() => setIsMapOpen(false)}
                  className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
                  aria-label="Close Map"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Map Iframe Wrapper with responsive aspect ratio */}
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-100">
                <iframe
                  id="map-iframe"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={officeDetails.mapEmbedUrl}
                  title={`${officeDetails.city} Location Map`}
                  className="filter grayscale-[10%] contrast-[110%]"
                />
              </div>

              {/* Footer Actions */}
              <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 font-mono">
                  Coordinates: 53.4088° N, 2.9911° W
                </span>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    id="external-directions-btn"
                    href={officeDetails.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 text-white font-semibold text-xs px-4 py-2.5 hover:bg-zinc-800 transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    id="map-footer-close-btn"
                    onClick={() => setIsMapOpen(false)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 font-semibold text-xs px-4 py-2.5 hover:bg-zinc-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
