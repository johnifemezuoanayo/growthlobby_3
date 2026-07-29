
/* ---------------------------------------------------------------------- */
/*  Corner marks                                                          */
/* ---------------------------------------------------------------------- */

import { ReactNode } from "react";

function CornerMarks(){
  const markStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: 12,
    lineHeight: "10px",
    color: "#b6bba9",
  };
  return (
    <>
      <span style={{ ...markStyle, top: -6, left: -6 }}>+</span>
      <span style={{ ...markStyle, top: -6, right: -6 }}>+</span>
      <span style={{ ...markStyle, bottom: -6, left: -6 }}>+</span>
      <span style={{ ...markStyle, bottom: -6, right: -6 }}>+</span>
    </>
  );
}

export function SectionBadge({ children }: { children: ReactNode }){
  return (
    <span className="relative inline-block">
      <CornerMarks />
      <span className="inline-block px-5 py-2 text-sm font-medium bg-[#D4D9B7] text-[#2B2E20]">
        {children}
      </span>
    </span>
  );
}