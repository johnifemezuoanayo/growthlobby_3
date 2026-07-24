import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="pointer-events-none  absolute inset-0 z-0 overflow-hidden bg-[#060606]">
      <div className="absolute inset-0 bg-black/40  z-10"  />
      <Image
        width={1920}
        height={1080}
        quality={100}
        priority
        src="/svgs/glassbg.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
