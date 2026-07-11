import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


export function Heading({ children , className }: { children: ReactNode , className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
            }}
            className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight whitespace-break-spaces text-center mb-2", className)}
        >
            {children}
        </motion.div>
    );
}

export function Subheading({ children , className }: { children: ReactNode , className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
            }}
            className={cn("text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white drop-shadow-md leading-tight whitespace-break-spaces text-center mb-4", className)}
        >
            {children}
        </motion.div>
    );
}

export function Paragraph({ children , className }: { children: ReactNode , className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.25,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      }}
      className={cn("text-xs sm:text-sm md:text-lg font-medium text-blue-50 leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-3 md:px-5 break-words mt-0 mb-1", className)}
      style={{ wordBreak: "break-word" }}
    >
      {children}
    </motion.p>
  );
}
