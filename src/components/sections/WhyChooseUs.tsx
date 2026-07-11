"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import {
  Globe,
  Heart,
  Lightbulb,
  Rocket
} from "lucide-react";
import { useRef, useState } from "react";
import { TextRise } from "../custom/TextRise";
import { Heading } from "../includes/TypoGraphy";

const BACKGROUND_ANIM = {
  initial: { scale: 1, opacity: 0.1 },
  animate: { scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] },
};

const FEATURE_COLORS = [
  {
    bg: "bg-blue-950",
    border: "border-blue-900",
    iconBg: "bg-blue-950",
    title: "text-blue-200",
    desc: "text-blue-300",
  },
  {
    bg: "bg-blue-900",
    border: "border-blue-800",
    iconBg: "bg-blue-900",
    title: "text-cyan-100",
    desc: "text-cyan-200",
  },
  {
    bg: "bg-blue-800",
    border: "border-blue-700",
    iconBg: "bg-blue-800",
    title: "text-sky-100",
    desc: "text-sky-200",
  },
  {
    bg: "bg-blue-600",
    border: "border-sky-600",
    iconBg: "bg-blue-600",
    title: "text-sky-50",
    desc: "text-sky-100",
  },
  {
    bg: "bg-blue-400",
    border: "border-cyan-400",
    iconBg: "bg-blue-400",
    title: "text-cyan-950",
    desc: "text-cyan-800",
  },
  {
    bg: "bg-cyan-200",
    border: "border-cyan-300",
    iconBg: "bg-cyan-200",
    title: "text-blue-900",
    desc: "text-blue-800",
  },
];

const features = [
  {
    icon: Globe ,
    title: "Global Recognition",
    description:
      "Join a network of over 400,000 professionals in 160+ countries. At IEEE NSUT, be part of a community renowned for its contributions to cutting-edge technology and innovation.",
  },
  {
    icon: Rocket,
    title: "Professional Edge",
    description:
      "Access internships, certifications, conferences, and research opportunities. IEEE NSUT helps bridge classroom learning with real-world impact, building a profile that stands out.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Culture",
    description:
      "Immerse yourself in an environment where ideas thrive. With technical workshops, hands-on projects, and expert sessions, every member is encouraged to explore, experiment, and evolve.",
  },
  {
    icon: Heart,
    title: "Friends and Connections for Life",
    description:
      "Join a vibrant, supportive community where collaboration and lasting friendships go hand in hand with learning. At IEEE NSUT, you gain more than skills—you build relationships that last far beyond college.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.18,
    },
  }),
};

const textShakeVariants: Variants = {
  initial: { x: 0 },
  shake: {
    x: [],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const iconWobbleVariants: Variants = {
  initial: { rotate: 0 },
  wobble: {
    rotate: [],
    x: [],
    y: [],
    transition: {
      repeat: Infinity,
      duration: 2.8,
      ease: "easeInOut",
    },
  },
};

const FeatureCard = ({
  feature,
  index,
  parentInView,
}: {
  feature: (typeof features)[0];
  index: number;
  parentInView: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const IconComponent = feature.icon;
  const row = Math.floor(index / 2);
  const color = FEATURE_COLORS[row % FEATURE_COLORS.length];

  return (
    <motion.div
      id="about"
      custom={index}
      initial="hidden"
      animate={parentInView ? "visible" : "hidden"}
      variants={cardVariants}
      className={cn(
        "rounded-3xl border-4 shadow-2xl px-7 py-7 sm:px-12 sm:py-9",
        "transition-all duration-500",
        "w-full flex items-center gap-7 sm:gap-9",
        "backdrop-blur-sm bg-opacity-90",
        color.bg,
        color.border
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        initial="initial"
        animate="wobble"
        variants={iconWobbleVariants}
        className={cn(
          "flex-shrink-0 w-14 h-14 sm:w-24 sm:h-24 rounded-2xl",
          "flex items-center justify-center shadow-lg",
          color.iconBg
        )}
      >
        <IconComponent className="w-8 h-8 sm:w-14 sm:h-14 text-white drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="flex flex-col flex-1 min-w-0"
        initial="initial"
        animate={isHovering ? "shake" : "initial"}
        variants={textShakeVariants}
      >
        <h3
          className={cn(
            "text-lg sm:text-2xl font-bold mb-2 sm:mb-3",
            "drop-shadow-sm",
            color.title
          )}
        >
          {feature.title}
        </h3>
        <p className={cn("text-xs sm:text-lg leading-relaxed", color.desc)}>
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section
      ref={sectionRef}
      className="bg-black text-blue px-4 w-full min-h-screen flex items-center py-14 sm:py-24 sm:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          {...BACKGROUND_ANIM}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl"
        />
        <motion.div
          initial={BACKGROUND_ANIM.initial}
          animate={BACKGROUND_ANIM.animate}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center relative z-10">
        <Heading>
          <TextRise text="Why Choose Us?" perWord delay={0.2} />
        </Heading>

        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative min-h-[440px]"
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              parentInView={isSectionInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
