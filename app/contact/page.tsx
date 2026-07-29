import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Reach out to start a conversation about design, development, or a full digital growth build.",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <section className="mx-auto flex max-w-4xl flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s talk about your next project.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Reach out to start a conversation about design, development, or a full
          digital growth build.
        </p>
      </section>
    </main>
  );
}
