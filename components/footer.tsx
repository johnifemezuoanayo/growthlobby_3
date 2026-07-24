import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import Navbar from "./ui/Navbar/Navbar";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-5 py-12 text-white md:px-5 lg:px-0 lg:px-20 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:18px_18px] opacity-35" />
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-7xl flex-col justify-between gap-16 lg:min-h-[640px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
          <div className="flex flex-col gap-8 sm:gap-10">
            <BrandLogo showText={false} size="lg" priority />

            <Navbar />
          </div>

          <p className="max-w-xl text-4xl leading-tight tracking-normal text-zinc-50 sm:text-5xl lg:text-[5xl]">
            Tell us what you&apos;re building and we&apos;ll tell you how we can
            help.
          </p>
        </div>

        <div className="relative flex flex-1 items-end">
          <p
            aria-hidden="true"
            className="pointer-events-none w-full select-none bg-gradient-to-b from-white via-zinc-500 to-black bg-clip-text text-[20vw] font-black leading-[0.82] tracking-normal text-transparent opacity-80 sm:text-[18vw] lg:text-[13vw]"
          >
            Growthlobby
          </p>
        </div>

        <div className="flex flex-col gap-5 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 Growthlobby · All rights reserved</p>
          <div className="flex gap-8">
            <Link href="/terms" className="transition hover:text-brand-primary">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="transition hover:text-brand-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
