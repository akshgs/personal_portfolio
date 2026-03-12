"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ScrollyVideo({
  src,
  children,
}: {
  src: string;
  children?: (progress: any) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative h-[200vh] w-full">

      {/* Sticky video + overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay content inside sticky container for true centering */}
        {children && children(scrollYProgress)}
      </div>

    </div>
  );
}
