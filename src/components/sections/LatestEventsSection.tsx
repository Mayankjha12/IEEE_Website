"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TextRise } from "../custom/TextRise";

const events = [
  {
    src: "/images/image5.png",
    title: "Web Wizards - The Web Development Bootcamp",
    description:
      "Web Wizards, a hands-on web dev bootcamp where learners build responsive sites using HTML, CSS, JavaScript, and modern frameworks.",
    className: "md:col-start-3 md:col-end-5 md:row-start-4 md:row-end-7 aspect-square",

  },
  {
    src: "/images/image2.png",
    title: "Algoverse - The DSA Bootcamp Speaker Session",
    description:
      "AlgoVerse, a DSA bootcamp that builds problem-solving skills through real-world coding challenges and algorithm mastery.",
    className: "md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-4 aspect-square",
  },
  {
    src: "/images/image3_new.png",
    title: "Saumya Singh",
    description:
      "Inspiring insights from SIH winner Saumya Singh as she shares her journey, problem-solving strategies, and tips for innovators",
    className: "md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-7 aspect-[2/4]",
  },
  {
    src: "/images/image4.png",
    title: "Women-Centric Cybersecurity Ideathon",
    description:
      "WIE Cybersprint, a women-centric cybersecurity ideathon empowering female innovators to solve digital security challenges with tech-driven solutions",
    className: "md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-7 aspect-square",
  },
  {
    src: "/images/image1.jpg",
    title: "Neural Nexus - The Machine Learning Bootcamp",
    description:
      "Neural Nexus, a hands-on machine learning bootcamp equipping participants with AI skills through expert-led projects and sessions.",
          className: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4 aspect-square",

  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.1,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.06,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  idle: {
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function LatestEventsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            <TextRise text="Igniting Innovation" />
            <br />
            <TextRise
              text="Spotlight on IEEE NSUT Events"
              className="text-blue-400"
              perWord
            />
          </h2>
          <p className="text-lg text-blue-200">
            Discover transformative experiences that blend technology,
            creativity, and community to shape future-ready leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-blue-800/60 bg-[#181c2f] shadow-lg flex",
                event.className
              )}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              animate={hovered === idx ? "hover" : "idle"}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                cursor: "pointer",
                minHeight: 150,
                minWidth: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  className="object-cover object-center transition-all duration-300"
                  style={{
                    filter:
                      hovered === idx ? "brightness(0.5)" : "brightness(0.9)",
                    transition: "filter 0.3s",
                  }}
                  priority={idx === 0}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 py-7 z-10"
                  animate={{
                    opacity: hovered === idx ? 1 : 0,
                    y: hovered === idx ? 0 : 20,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{
                    pointerEvents: "none",
                    background:
                      hovered === idx
                        ? "linear-gradient(0deg, rgba(10,17,34,0.88) 92%, transparent 100%)"
                        : "transparent",
                  }}
                >
                  {hovered === idx ? (
                    <>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow">
                        <TextRise
                          text={event.title}
                          className="text-blue-400"
                          perWord
                        />
                      </h3>
                      <p className="text-blue-200 text-sm lg:text-base">
                        <TextRise
                          text={event.description}
                          className="text-blue-200"
                          perWord
                        />
                      </p>
                    </>
                  ) : (
                    <span className="text-blue-400">{event.title}</span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
