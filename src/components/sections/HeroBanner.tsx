"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

const MotionButton = motion.create(Button);
const MotionImage = motion.create(Image);


const wordVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};


export default function HeroBanner() {
  

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(imageContainerRef, {
    once: true,
    amount: 0.2,
  });
  const title = "Welcome to IEEE NSUT";
  return (
    <section
      id="home"
      className="relative w-full min-h-fit overflow-hidden bg-black pt-44 md:pt-56 pb-16 md:pb-24"
    >
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03040A] via-[#050816] to-[#020308]" />

      {/* Left Glow */}
      <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[170px]" />

      {/* FIXED: Removed the premature closing tag here so that all internal items center correctly */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        
      
        <motion.a
          href="https://www.ieee.org/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.06,
            rotate: 2,
          }}
          className="mb-6 block"
        >
          <MotionImage
            src="/IEEE_logo.svg"
            alt="IEEE Logo"
            width={180}
            height={100}
            priority
            className="w-44 h-auto sm:w-56 brightness-200 transition-all duration-300"
          />
        </motion.a>

        <motion.h1
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center text-4xl font-extrabold leading-[1.1] md:text-6xl"
        >
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariant}
              whileHover={{
                color: "#50A2FF",
                scale: 1.05,
              }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 max-w-3xl text-center font-sans leading-8 text-gray-400 md:text-lg"
        >
          Empowering young minds through collaboration,
          innovation, and continuous learning—creating a
          community where students grow, lead, and make
          an impact.
        </motion.p>

        <MotionButton
          asChild
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(14,165,233,.45)",
          }}
          whileTap={{ scale: 0.96 }}
          className="mt-5 rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-600"
        >
          <a
            href="https://industrial-ideathon-vjo4um39jvw5x7x.s3.us-east-1.amazonaws.com/statics/IEEE-NSUT-App-beta.apk"
            download="IEEE-NSUT-App.apk"
          >
            Download the IEEE NSUT App
          </a>
        </MotionButton>
        <motion.div
          ref={imageContainerRef}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.96,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 w-full max-w-6xl"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">

            <Image
              src="/CoreMembers.jpg"
              alt="IEEE NSUT Event"
              width={1800}
              height={800}
              priority
              sizes="(max-width:768px) 100vw, 1200px"
              className="
                cursor-zoom-in
                w-full
                h-full
                object-cover
                object-center
                scale-[1.18]
                -translate-y-[8%]
                transition-all
                duration-700
                ease-out
                hover:scale-[1.22]
                hover:-translate-y-[9%]
              "
            />

            {/* Top Highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

            <motion.div
              initial={{ x: "-250%", y: "-10%" }}
              animate={{ x: "250%", y: "10%" }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "linear",
              }}
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <div
                className="
                  absolute
                  top-[-35%]
                  left-0
                  h-[180%]
                  w-32
                  rotate-[25deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  blur-md
                "
              />
            </motion.div>

          </div>
        </motion.div>
      </div> 
    </section>
  );
}