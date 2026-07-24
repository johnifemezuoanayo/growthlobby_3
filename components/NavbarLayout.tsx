"use client";

import React, { useRef, useState } from "react";
import { NoticeBanner } from "./pages/HomeHeroSection/NoticeBanner";
import { SiteHeader } from "./pages/HomeHeroSection/SiteHeader";

function NavbarLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);



  return (
    <div className="flex flex-col min-h-screen">
     

      <SiteHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1" ref={formRef}>
        {children}
      </main>
    </div>
  );
}

export default NavbarLayout;
