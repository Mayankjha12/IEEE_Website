"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TextRise } from "../custom/TextRise";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Heading, Paragraph } from "../includes/TypoGraphy";
import { joinNowLink } from "../includes/Header";
import { Button } from "../ui/button";

const MotionButton = motion(Button);

export default function HeroBanner() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageContainerRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });
  const isMobile = useIsMobile();
  const aspectRatio = isMobile ? 5 / 4 : 21 / 8;

  return (
    <section
      className="relative w-full py-5 md:py-7 lg:py-8 flex flex-col items-center justify-start overflow-visible font-sans bg-black min-h-[60vh] mt-[56px] md:mt-[100px] lg:mt-[120px]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      id="home"
    >
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 animate-gradient-x"
        />
        <motion.div
          className="absolute left-0 top-1/3 w-24 h-24 sm:w-36 sm:h-36 bg-[#42a5f5]/20 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-14 h-14 sm:w-24 sm:h-24 bg-[#1565c0]/30 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
      </div>
      <div className="w-full max-w-[900px] mx-auto px-2 sm:px-4 md:px-8 lg:px-10 text-center">
        <div className="bg-black/75 rounded-xl shadow-xl py-4 px-2 sm:px-5 md:px-10 flex flex-col items-center gap-2">
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/IEEE_logo.svg"
              alt="IEEE Logo"
              width={100}
              height={100}
              className="w-44 h-24 sm:w-56 sm:h-36 mb-2 mt-6 md:mt-4"
              priority
            />
          </a>
          <Heading>
            <TextRise
              text="Welcome to IEEE NSUT"
              delay={0.5}
              perWord
              duration={1}
            />
          </Heading>
          <Paragraph>
            At IEEE NSUT, we empower young minds by fostering a culture of
            collaboration, innovation, and continuous learning, inspiring
            students to grow, lead, and make meaningful impact.
          </Paragraph>
          <MotionButton
            asChild
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center
    bg-[#23a4fb] text-white 
    px-6 md:px-8
    py-3 md:py-3.5
    text-sm md:text-base 
    font-semibold 
    rounded-full 
    border-2 border-transparent 
    shadow-md 
    transition-transform duration-300 ease-in-out 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bfff] focus-visible:ring-offset-2 
    max-w-[220px] md:max-w-[260px]
    overflow-hidden
    before:absolute before:inset-0 before:rounded-full before:p-[2px] 
    before:bg-[conic-gradient(from_0deg,_#00bfff,_#23a4fb,_#00bfff)] 
    before:animate-spin-slow before:z-[-1]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <a
              href="https://industrial-ideathon-vjo4um39jvw5x7x.s3.us-east-1.amazonaws.com/statics/IEEE-NSUT-App-beta.apk"
              download="IEEE-NSUT-App.apk"
              className="w-full text-center whitespace-nowrap"
            >
              Download the IEEE NSUT App
            </a>
          </MotionButton>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 md:mt-6 flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-1 sm:px-2 md:px-4 lg:px-8">
        <motion.div
          ref={imageContainerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-11/12 md:w-full"
        >
          <AspectRatio
            ratio={aspectRatio}
            className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl bg-gradient-to-br from-[#0a2540] via-[#1565c0] to-black"
          >
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scale: 1.08 }}
                animate={isInView ? { scale: 1 } : { scale: 1.08 }}
                transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
                className="w-full h-full"
                style={{ willChange: "transform" }}
              >
                <Image
                  src="/CoreMembers.jpg"
                  alt="IEEE NSUT Core Members Group Photo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  priority
                />
                <motion.div
                  initial={{ x: "0%" }}
                  animate={
                    isInView ? { x: "-100%", zoom: 1 } : { x: "0%", zoom: 1.4 }
                  }
                  transition={{ duration: 1.15, ease: [0.42, 0, 0.58, 1] }}
                  className="absolute top-0 left-0 w-full h-full bg-black z-20"
                  style={{ pointerEvents: "none" }}
                />
              </motion.div>
            </div>
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
}
