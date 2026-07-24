import React from 'react'

function SpinningCircle() {
  return (
    <div className="absolute -top-16 left-12 md:-left-16 z-20 pointer-events-auto">
      <div className="relative w-28 h-28 md:w-28 md:h-28 rounded-full bg-[#ACD506]/30 backdrop-blur border border-white/20 flex items-center justify-center group overflow-hidden">
        {/* Subtle pulsing background glow in stamp */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,242,38,0.15)_0%,transparent_70%)] group-hover:scale-125 transition-transform duration-500" />

        {/* Rotating Circular Text SVG */}
        <svg
          className="w-full h-full animate-spin-slow group-hover:animate-none group-hover:scale-105 duration-300"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fill="#ffffff"
            className="text-[8.5px]  tracking-[0.16em] uppercase"
          >
            <textPath href="#circlePath" startOffset="0%">
              START A PROJECT • START A PROJECT •
            </textPath>
          </text>
        </svg>

        {/* Center Plus Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-brand-lime group-hover:scale-125 group-hover:text-white transition-all duration-300">
          <span className="text-lg font-light">+</span>
        </div>
      </div>
    </div>
  );
}

export default SpinningCircle