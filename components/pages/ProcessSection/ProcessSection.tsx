/* eslint-disable @next/next/no-img-element */
import OnboardingIcon from "../../Icons/OnboardingIcon";
import FeedbackIcon from "../../Icons/FeedbackIcon";
import HandoverIcon from "../../Icons/HandoverIcon";
import { SectionBadge } from "@/components/ui/SectionBadge/SectionBadge";

const steps = [
  {
    number: "01",
    icon: <OnboardingIcon />,
    title: "Client Onboarding & Design",
    body: "Book a discovery call to discuss your vision and see if we're a perfect match. Afterwards, you'll receive a detailed proposal outlining the scope of work, deliverables, timeline, and pricing.",
    image: "/images/onboardingimg.png",
  },
  {
    number: "02",
    icon: <FeedbackIcon />,
    title: "Development And Feedback",
    body: "Once we agree on the scope and you accept the proposal, the website build begins. Using Figma, you can provide feedback easily, ensuring a seamless and collaborative process from start to finish.",
    image: "/images/df.png",
  },
  {
    number: "03",
    icon: <HandoverIcon />,
    title: "Handover Training",
    body: "Upon your approval of the finished website, you'll receive bespoke handover training via a recorded Loom link. Plus, enjoy 30 days of free email support to help you transition smoothly.",
    image: "/images/rec.png",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white px-5 py-16  md:py-24 lg:px-0">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-12">
          <SectionBadge>Smooth & efficient process</SectionBadge>

          <h2 className="mt-6 font-serif text-3xl leading-[1.05] tracking-tight text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Our smooth & efficient process
            <br className="hidden sm:block" /> for your web design project
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 rounded-3xl md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-2xl bg-[#eeece2] pt-6 sm:pt-8 px-8 md:rounded-none md:first:rounded-l-2xl md:last:rounded-r-2xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
                backgroundColor: "#eeece2",
              }}
            >
              {/* Big faded number */}
              <span className="pointer-events-none absolute right-4 top-4 font-serif text-6xl text-black/10 sm:text-7xl md:text-8xl">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative mb-8">{step.icon}</div>

              {/* Title */}
              <h3 className="relative lg:h-[80px] font-serif text-2xl leading-tight text-neutral-900 sm:text-3xl md:text-[28px] lg:text-4xl">
                {step.title}
              </h3>

              {/* Body */}
              <p className="relative  lg:h-[140px] mt-4 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base">
                {step.body}
              </p>

              {/* Image */}
              <div className="relative mt-8 overflow-hidden ">
                <img
                  src={step.image}
                  alt={step.title}
                  className=" w-full object-cover "
                  loading="lazy"
                />
              </div>

              {/* Divider between cards on desktop */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-8 bottom-8 hidden w-px bg-black/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
