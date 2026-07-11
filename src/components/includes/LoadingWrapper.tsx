"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingWrapperProps {
  children: React.ReactNode;
  duration?: number;
}

export default function LoadingWrapper({
  children,
  duration = 3500,
}: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[5000] flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                layoutId="logo"
                initial={{ y: 0, scale: 1 }}
                animate={{ y: -120 }}
                exit={{ y: -120 }}
                transition={{
                  layout: { duration: 0.8, ease: "easeInOut" },
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src="/logo.png"
                  alt="IEEE Logo"
                  width={120}
                  height={120}
                  className="w-auto h-[120px] md:h-[120px]"
                  priority
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                  transition: { duration: 1.8, delay: 0.7, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  y: -100,
                  transition: { duration: 0.8, delay: 3, ease: "easeIn" },
                }}
                className="text-5xl md:text-6xl font-extrabold text-white z-10 text-center mt-[140px]"
              >
                <span className="text-[#00bfff]">IEEE</span> NSUT
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading ? children : null}
    </>
  );
}
