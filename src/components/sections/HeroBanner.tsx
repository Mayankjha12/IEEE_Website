"use client";

import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

const MotionButton = motion.create(Button);
const MotionImage = motion.create(Image);

const wordVariant: Variants = {
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
     {/* Clean black background */}
<div className="absolute inset-0 bg-black" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        {/* IEEE Logo */}
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

        {/* Main Heading */}
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

        {/* Description */}
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

        {/* Download App Button */}
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
          className="mt-5 rounded-full bg-sky-500 px-6 py-3 text-base font-extrabold text-white transition-all duration-300 hover:bg-sky-600"
        >
          <a
            href="https://industrial-ideathon-vjo4um39jvw5x7x.s3.us-east-1.amazonaws.com/statics/IEEE-NSUT-App-beta.apk"
            download="IEEE-NSUT-App.apk"
          >
            <span className="font-extrabold">
              Download the IEEE NSUT App
            </span>
          </a>
        </MotionButton>

        <motion.div
  ref={imageContainerRef}
  initial={{
    opacity: 1,
  }}
  animate={
    isInView
      ? {
          opacity: 1,
        }
      : {}
  }
  className="mt-14 w-full max-w-6xl"
>

          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">

  {/* Right → Left Image Reveal */}
  <motion.div
    initial={{
      clipPath: "inset(0 0 0 100%)",
    }}
    animate={
      isInView
        ? {
            clipPath: "inset(0 0 0 0%)",
          }
        : {}
    }
    transition={{
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute inset-0"
  >
    <Image
      src="/NewCoreMembers.jpeg"
      alt="IEEE NSUT Core Team"
      fill
      priority
      sizes="(max-width:768px) 100vw, 1200px"
      className="object-cover object-center"
    />
  </motion.div>

</div>
        </motion.div>
      </div>
    </section>
  );
}
