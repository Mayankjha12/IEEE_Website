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
    // Only play the intro loader once per browser session. On any subsequent
    // client-side navigation back to this page it is skipped instantly.
    if (sessionStorage.getItem("ieee-intro-shown")) {
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("ieee-intro-shown", "true");
      window.scrollTo(0, 0);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  const textDelay = 0.7;
  const textDuration = 1.8;

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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,191,255,0.25) 0%, rgba(0,191,255,0.08) 40%, transparent 65%)",
                filter: "blur(15px)",
                marginTop: "-120px",
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,191,255,0.3) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                layoutId="logo"
                initial={{ y: 0, scale: 1 }}
                animate={{ y: -120 }}
                exit={{ y: -120 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(0,191,255,0.4))",
                      "drop-shadow(0 0 35px rgba(0,191,255,0.6))",
                      "drop-shadow(0 0 20px rgba(0,191,255,0.4))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                  transition: {
                    duration: textDuration,
                    delay: textDelay,
                    ease: "linear",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -100,
                  transition: { duration: 0.8, ease: "easeIn" },
                }}
                className="text-5xl md:text-6xl font-extrabold text-white z-10 text-center mt-[140px]"
                style={{
                  textShadow: "0 0 30px rgba(0,191,255,0.3)",
                }}
              >
                <span className="text-[#00bfff]">IEEE</span> NSUT
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                  transition: {
                    duration: textDuration,
                    delay: textDelay,
                    ease: "linear",
                  },
                }}
                exit={{ opacity: 0 }}
                className="absolute text-sm md:text-base text-[#00bfff] tracking-[0.35em] uppercase mt-[260px] font-bold"
                style={{
                  textShadow: "0 0 15px rgba(0,191,255,0.2)",
                }}
              >
                Innovate{" "}
                <span className="text-white/60 mx-2">•</span> Inspire{" "}
                <span className="text-white/60 mx-2">•</span> Impact
              </motion.p>

              <motion.div
                className="absolute bottom-[15%] w-[200px] h-[3px] bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: textDelay, duration: 0.2 },
                }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00bfff, #00e5ff)",
                    boxShadow: "0 0 10px rgba(0,191,255,0.5)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{
                    width: "100%",
                    transition: {
                      duration: textDuration,
                      delay: textDelay,
                      ease: "linear",
                    },
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading ? children : null}
    </>
  );
}
