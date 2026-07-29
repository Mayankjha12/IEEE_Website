"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { Globe, Heart, Lightbulb, Rocket } from "lucide-react";
import { useRef } from "react";
import { TextRise } from "../custom/TextRise";
import { Heading } from "../includes/TypoGraphy";

/**
 * Same 4 reasons, "circuit trace" layout — horizontal on desktop (lg+),
 * vertical on mobile. Static trace (no traveling pulse). Title is the
 * large heading; the stat is the small subheading above it. Accent
 * color is sky-blue instead of amber, to stay within the site's blue
 * palette.
 */
const features = [
  {
    icon: Globe,
    stat: "400,000+",
    unit: "members",
    label: "Global Recognition",
    description:
      "Join a network of over 400,000 professionals in 160+ countries. At IEEE NSUT, be part of a community renowned for its contributions to cutting-edge technology and innovation.",
  },
  {
    icon: Rocket,
    stat: "50+",
    unit: "opportunities",
    label: "Professional Edge",
    description:
      "Access internships, certifications, conferences, and research opportunities. IEEE NSUT helps bridge classroom learning with real-world impact, building a profile that stands out.",
  },
  {
    icon: Lightbulb,
    stat: "30+",
    unit: "workshops",
    label: "Innovation-Driven Culture",
    description:
      "Immerse yourself in an environment where ideas thrive. With technical workshops, hands-on projects, and expert sessions, every member is encouraged to explore, experiment, and evolve.",
  },
  {
    icon: Heart,
    stat: "500+",
    unit: "members",
    label: "Lifelong Bonds",
    description:
      "Join a vibrant, supportive community where collaboration and lasting friendships go hand in hand with learning — building relationships that last far beyond college.",
  },
];

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
};

const FeatureNode = ({
  feature,
  index,
  parentInView,
}: {
  feature: (typeof features)[0];
  index: number;
  parentInView: boolean;
}) => {
  const IconComponent = feature.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={parentInView ? "visible" : "hidden"}
      variants={nodeVariants}
      className={cn(
        "relative pl-16 lg:pl-0",
        index !== features.length - 1 && "mb-10 lg:mb-0"
      )}
    >
      {/* node icon: sits on the vertical trace (mobile) or above the
          horizontal trace (desktop) */}
      <div
        className={cn(
          "absolute -left-[2px] top-0 lg:static lg:mx-auto",
          "w-11 h-11 sm:w-12 sm:h-12 rounded-full",
          "flex items-center justify-center mb-0 lg:mb-5",
          "bg-blue-950 border-[1.5px] border-blue-700 shadow-lg shadow-blue-950/50"
        )}
      >
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
      </div>

      <div className="lg:text-center">
        {/* heading: the label, large and prominent */}
        <h3 className="text-lg sm:text-xl font-bold text-sky-50 mb-2 leading-snug">
          {feature.label}
        </h3>

        {/* stat line, sits under the heading */}
        <div className="flex items-baseline gap-2 mb-3 lg:justify-center">
          <span className="text-xs font-semibold text-sky-400">
            {feature.stat}
          </span>
          <span className="text-xs font-medium text-blue-300/70">
            {feature.unit}
          </span>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-blue-200/80 max-w-sm lg:max-w-[240px] lg:mx-auto">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black text-blue w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-14 lg:mb-20">
          <Heading>
            <TextRise text="Why Choose Us?" perWord delay={0.2} />
          </Heading>
        </div>

        {/* mobile / tablet: vertical trace (static, no pulse) */}
        <div className="relative pl-6 sm:pl-8 lg:hidden">
          <div
            className="absolute left-[19px] top-3 bottom-3 w-[2px] opacity-60"
            style={{
              background:
                "linear-gradient(to bottom, #1d4ed8, #38bdf8 50%, #1d4ed8)",
            }}
          />

          {features.map((feature, index) => (
            <FeatureNode
              key={feature.label}
              feature={feature}
              index={index}
              parentInView={isSectionInView}
            />
          ))}
        </div>

        {/* desktop: horizontal trace spanning the full container width (static, no pulse) */}
        <div className="hidden lg:block relative">
          <div
            className="absolute left-0 right-0 top-[22px] h-[2px] opacity-60"
            style={{
              background:
                "linear-gradient(to right, #1d4ed8, #38bdf8 50%, #1d4ed8)",
            }}
          />

          <div className="grid grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureNode
                key={feature.label}
                feature={feature}
                index={index}
                parentInView={isSectionInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
