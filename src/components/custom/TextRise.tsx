import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface TextRiseProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  perWord?: boolean;
  once?: boolean;
  amount?: number;
}

export function TextRise({
  text,
  className,
  duration = 1.2,
  delay = 0,
  perWord = false,
  once = true,
  amount = 0.3
}: TextRiseProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount });
  
  const units = perWord ? text.split(/(\s+)/) : Array.from(text);

  return (
    <span
      ref={ref}
      className={cn(
        "",
        className
      )}
      style={{
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "pre-wrap"
      }}
    >
      {units.map((unit, i) =>
        perWord && unit.trim() === "" ? (
          <span key={i}>{unit}</span>
        ) : (
          <motion.span
            key={i}
            initial={{ y: 32, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
            animate={isInView ? {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
            } : {
              y: 32,
              opacity: 0,
              clipPath: "inset(100% 0% 0% 0%)"
            }}
            transition={{
              duration: duration * 0.5,
              delay: delay + i * 0.04,
              ease: [0.19, 1, 0.22, 1]
            }}
            style={{
              display: "inline-block"
            }}
          >
            {unit}
          </motion.span>
        )
      )}
    </span>
  );
}