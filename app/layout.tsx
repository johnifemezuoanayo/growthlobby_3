import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavbarLayout from "@/components/NavbarLayout";
import { FloatingCallButton } from "@/components/pages/HomeHeroSection/FloatingCallButton";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/site-metadata";
import { ApolloWrapper } from "@/base/lib/apollo-client";
import { Wix_Madefor_Display } from "next/font/google";
import { Footer } from "@/components/Footer";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-wix-madefor",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Web Design Experts for Modern Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${wixMadefor.variable} ${sfPro.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col"> 
        <ApolloWrapper>
          <NavbarLayout>
            <div className="flex-1">{children}</div>
          </NavbarLayout>
          
          <ScrollToTopButton />
          <FloatingCallButton />
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
