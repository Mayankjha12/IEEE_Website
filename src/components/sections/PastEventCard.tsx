"use client";

import { useInterval } from "@/hooks/useInterval";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph } from "../includes/TypoGraphy";

interface Event {
  img: string;
  title: string;
  desc: string;
}

const events: Event[] = [
  {
    img: "/images/tensymp.png",
    title: "Tensymp'24",
    desc: "IEEE TENSYMP'24, is a premier symposium showcasing cutting-edge technological advancements, fostering global collaboration, and empowering researchers, professionals, and students through insightful sessions, workshops, and networking opportunities across diverse domains.",
  },
  {
    img: "/images/dssywlc.png",
    title: "DSSYWLC'24",
    desc: "IEEE DSSYWLC is a dynamic event focused on networking, knowledge-sharing, and community building through technical symposiums, discussions and cultural festivities.",
  },
  {
    img: "/images/image2.png",
    title: "Algoverse 3.0",
    desc: "IEEE NSUT AlgoVerse is a vibrant, community-driven initiative that provides an engaging and structured platform to thoroughly master DSA through consistent, daily problem-solving challenges like Problem of the Day (POTD), fostering both collaboration and growth.",
  },
  {
    img: "/images/pedal.png",
    title: "Pedal Playground",
    desc: "Pedal Playground, organized by IEEE NSUT in collaboration with Crescendo, is an interactive workshop exploring the art of sound design and audio synthesis through pedals. Dive into creative experimentation, music tech.",
  },
];

const CARD_WIDTH = 390;
const CARD_HEIGHT = 390;
const STACK_DEPTH = 3;
const stackConfig = [
  { scale: 1, y: 0, x: 0, rotate: 0, opacity: 1, z: 30 },
  { scale: 0.94, y: 30, x: -24, rotate: -7, opacity: 0.65, z: 20 },
  { scale: 0.88, y: 60, x: -48, rotate: -17, opacity: 0.4, z: 10 },
];

function getStackCards(activeIndex: number) {
  return Array.from({ length: STACK_DEPTH }, (_, i) => (activeIndex + i) % events.length);
}

export default function PastEvents() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animating, setAnimating] = useState(false);

  useInterval(() => {
    if (!dragging && !animating) navigate(1);
  }, 4300);

  function navigate(direction: 1 | -1) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + direction + events.length) % events.length);
      setAnimating(false);
    }, 600);
  }

  const stackOrder = getStackCards(active);

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[90vh] text-white bg-black relative overflow-hidden px-4 lg:px-0 pt-12 md:pt-20 pb-4" id="events">
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-start text-center lg:text-left px-2 py-6 lg:pl-12 lg:pr-8 z-10">
        <Heading className="text-3xl md:text-4xl lg:text-5xl mb-4">
          <TextRise
            text="Crafting Excellence: Pioneering Events by IEEE NSUT"
            delay={0.5}
            perWord
            duration={1}
          />
        </Heading>
        <Paragraph>
          A Showcase of Innovation, Learning, and Collaboration. With a strong
          focus on excellence and innovation, IEEE NSUT&apos;s events provide
          truly unparalleled opportunities for meaningful networking, hands-on
          skill-building, immersive learning, and effective real-world
          problem-solving.
        </Paragraph>
      </div>

      <div className="w-full lg:w-3/5 flex items-center justify-center py-4 lg:py-0">
        <div
          className={cn(
            "w-full h-full flex items-center justify-center relative min-h-[460px] select-none",
            dragging && "cursor-grabbing"
          )}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative w-[420px] h-[420px] max-w-full mx-auto">
            {/* Back stack layers */}
            {stackOrder.slice(1).map((idx, i) => (
              <motion.div
                key={`stack-${idx}`}
                className="absolute inset-0 pointer-events-none"
                animate={stackConfig[i + 1]}
                transition={{ type: 'tween', duration: 0.8, ease: 'easeInOut' }}
                style={{ zIndex: stackConfig[i + 1].z, willChange: 'transform, opacity' }}
              >
                <div className="relative w-full h-full bg-black/80 border-2 border-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-2/5 w-full flex items-center justify-center p-4 bg-black/70">
                    <Image
                      src={events[idx].img}
                      alt={events[idx].title}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT / 3.2}
                      className="object-contain h-full max-h-32 w-auto mx-auto"
                      draggable={false}
                    />
                  </div>
                  <div className="flex-1 flex flex-col px-6 pt-4 pb-6">
                    <Heading className="text-lg md:text-xl lg:text-2xl">
                      <TextRise text={events[idx].title} delay={0.4} perWord duration={1} />
                    </Heading>
                    <Paragraph>{events[idx].desc}</Paragraph>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Active card */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={stackConfig[1]}
                animate={stackConfig[0]}
                exit={{ ...stackConfig[0], opacity: 0, y: -120, transition: { duration: 0.5, ease: 'easeInOut' } }}
                transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  if (info.offset.x < -80) navigate(1);
                  else if (info.offset.x > 80) navigate(-1);
                }}
                whileTap={{ scale: 1.02 }}
                style={{ zIndex: 50, willChange: 'transform, opacity' }}
              >
                <div className="relative w-full h-full bg-black/90 border-2 border-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-2/5 w-full flex items-center justify-center p-4 bg-black/80">
                    <Image
                      src={events[active].img}
                      alt={events[active].title}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT / 3.2}
                      className="object-contain h-full max-h-32 w-auto mx-auto"
                      draggable={false}
                      priority
                    />
                  </div>
                  <div className="flex-1 flex flex-col px-6 pt-2 pb-4">
                    <Heading className="text-lg md:text-xl lg:text-2xl">
                      <TextRise text={events[active].title} delay={0.4} perWord duration={1} />
                    </Heading>
                    <Paragraph className="text-sm md:text-base">
                      {events[active].desc}
                    </Paragraph>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-50 pointer-events-auto max-md:hidden">
            {events.map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-3 h-3 rounded-full border border-white transition-all",
                  idx === active
                    ? "bg-blue-400 scale-110 shadow-lg"
                    : "bg-white/30 opacity-60"
                )}
                aria-label={`Show event ${idx + 1}`}
                onClick={() => idx !== active && setActive(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
