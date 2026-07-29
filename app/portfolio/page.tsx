import Link from "next/link";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore project work by discipline, from visual design systems to production-ready web development.",
});

const portfolioAreas = [
  {
    href: "/portfolio/design",
    title: "Design",
    description: "Brand systems, web interfaces, and polished visual direction.",
  },
  {
    href: "/portfolio/development",
    title: "Development",
    description: "Responsive websites, application builds, and technical delivery.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <section className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected design and development work.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore project work by discipline, from visual design systems to
            production-ready web development.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-lg border border-zinc-200 bg-white p-6 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
            >
              <h2 className="text-2xl font-semibold">{area.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
