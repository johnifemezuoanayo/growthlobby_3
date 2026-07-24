import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";
import Image from "next/image";

const services = [
  { title: "Ai Automation & Integration", image: "/images/ai-automation.png" },
  { title: "AI Design", image: "/images/ai-design.png" },
  { title: "Brand & Identity", image: "/images/brand-identity.png" },
  { title: "Mobile Design", image: "/images/mobile-design.png" },
  {
    title: "Website Design And Development",
    image: "/images/website design and development.png",
  },
  {
    title: "Presentation Design",
    image: "/images/presentation-design.png",
  },
];

// duplicate for seamless marquee
const loop = [...services, ...services];

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f1108] py-16 sm:py-20 lg:py-24">
      {/* subtle dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative">
        {/* Heading block */}
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <SectionBadge>Project</SectionBadge>
          <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            For all the creative &amp; development projects that slow you down.
          </h2>
        </div>

        {/* Auto scrolling cards */}
        <div
          className="group relative mt-12 sm:mt-16"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((s, i) => (
              <article
                key={i}
                className="relative h-[360px] w-[280px] shrink-0 overflow-hidden rounded-sm sm:h-[440px] sm:w-[360px] lg:h-[490px] lg:w-[440px]"
              >
                <Image
                  width={440}
                  height={490}
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 opacity-90 to-transparent backdrop-blur px-5 py-4">
                  <p className="font-mono text-sm tracking-wide text-white sm:text-base">
                    {s.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-7xl px-5 lg:px-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-800">
              <Image
                width={200}
                height={200}
                src="/images/stanley.png"
                alt="Stanley Okechukwu"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 max-w-3xl">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                &ldquo;The overall quality of his work is really good. What
                stood out to me is that He is very good in every area. So
                whenever I needed Design work, or needed graphic design, He is
                always active to deliver and on time.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/50">
                Stanley Okechukwu &nbsp;-&nbsp; Founder &nbsp;-&nbsp; Ventlio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
