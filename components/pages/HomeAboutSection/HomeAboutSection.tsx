import Image from "next/image";
import BehanceIcon from "../../Icons/BehanceIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import DribbbleIcon from "../../Icons/DribbbleIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";

const stats = [
  { value: "100+", label: "Successful Websites" },
  { value: "7+", label: "Years Of Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function HomeAboutSection() {
  return (
    <section className="w-full bg-white  px-5 py-16 lg:px-0 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        //   backgroundSize: "22px 22px",
        // }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="flex flex-col">
          <div className="inline-block mb-3">
            <SectionBadge> Who I am</SectionBadge>
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
            Meet John Ifemezuo – Your Web Designer expert
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#4a4a4a] sm:text-base">
            <p>
              Looking to create a high-performing website or digital product
              that does more than just look great? Partner with Growthlobby—a
              design and development studio helping ambitious businesses build
              experiences that stand out in an AI-first world.
            </p>
            <p>
              As AI transforms how websites are created, the real advantage
              comes from thoughtful strategy, exceptional user experience, and
              products designed around real customer needs. We combine human
              creativity with modern technology to design websites and digital
              products that build trust, increase conversions, and support
              long-term business growth.
            </p>
            <p>
              From high-converting marketing websites and SaaS platforms to
              e-commerce experiences and custom web applications, every project
              is crafted with performance, accessibility, scalability, and
              measurable business outcomes in mind.
            </p>
            <p>
              We&lsquo;re not here to simply build another website—we&lsquo;re here to help
              you create a digital experience that stays relevant, competitive,
              and impactful in a world where AI is raising the standard every
              day.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { label: "Behance", href: "#", src: <BehanceIcon /> },
              { label: "Dribbble", href: "#", src: <DribbbleIcon /> },
              { label: "LinkedIn", href: "#", src: <LinkedinIcon /> },
              { label: "Twitter", href: "#", src: <TwitterIcon /> },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#1a1a1a]/20 text-sm text-[#1a1a1a] transition-colors hover:bg-brand-primary hover:text-white"
                aria-label={social.label}
              >
                {social.src}
              </a>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="relative">
          <div className="relative overflow-hidden  rounded-[2rem] bg-[#E0E0E0] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] sm:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                priority
                width={914}
                height={1200}
                src="/images/ceo.png"
                alt="John Ifemezuo speaking at an event"
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />

              {/* Stats overlay */}
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:gap-3 sm:p-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center justify-center px-2 py-2 text-center text-white ${
                      i !== 0 ? "border-l border-white/25" : ""
                    }`}
                  >
                    <div className="text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] leading-tight text-white/85 sm:text-xs">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
