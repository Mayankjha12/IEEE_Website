"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import { GridBackground } from "../custom/GridBackground";
import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph } from "../includes/TypoGraphy";
import { AnimatedCountRise } from "../custom/AnimatedCountRise";
import { motion, Variants } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "Power & Energy Society (PES)",
    description:
      "Formerly the Power Engineering Society, PES of IEEE is empowering students to lead the future of smart, sustainable energy systems.",
    logoUrl:
      "https://pessyp.ieee.org/wp-content/uploads/sites/37/2024/09/image-4-1024x647.png",
  },
  {
    id: 2,
    title: "Circuits & Systems Chapter",
    description:
      "Circuits and Systems Chapter is innovating the building blocks of technology through advanced circuit and system design.",
    logoUrl:
      "https://vcip2025.itec.aau.at/wp-content/uploads/2025/06/assets_task_01jx2tkbb3f4evyyg832rqdhtw_1749220517_img_0-e1749221232467-768x273.webp",
  },
  {
    id: 3,
    title: "Robotics & Automation Chapter (RAS)",
    description:
      "RAS chapter of IEEE is fueling the future with intelligent machines and real-world robotics innovation.",
    logoUrl:
      "https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png",
  },
  {
    id: 4,
    title: "Computer Society Chapter",
    description:
      "The IEEE Computer Society Chapter is driving the next wave of computing through collaboration, code, and creativity.",
    logoUrl:
      "https://www.ieeecsvit.com/static/darklogo-0604a0fe26f4c4783ef9e27819e9bb25.png",
  },
  {
    id: 5,
    title: "WIE Affinity Group",
    description:
      "WIE of IEEE is championing gender equity in STEM by empowering women to lead and innovate.",
    logoUrl:
      "https://wie.ieeer10.org/wp-content/uploads/2016/10/ieeer10_wie_logo_retina.png",
  },
];

const stats = [
  { value: 250, suffix: "+", label: "MEMBERS" },
  { value: 20, suffix: "+", label: "AWARDS" },
  { value: 80, suffix: "+", label: "EVENTS" },
  { value: 1, suffix: "", label: "STUDENT BRANCH" },
];

export default function ChaptersSection() {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  let ratio = 21 / 6;
  if (isMobile) {
    if (typeof window !== "undefined" && window.innerWidth <= 480) {
      ratio = 16 / 4;
    } else {
      ratio = 21 / 6;
    }
  }

  React.useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const logoWobble: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: [],
      x: [],
      y: [],
      transition: {
        repeat: Infinity,
        duration: 3.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="flex flex-col px-4 items-center justify-center min-h-screen w-full bg-black py-16"
      id="chapters"
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Heading>
          <TextRise text="Chapters and Affinity Groups" perWord delay={0.2} />
        </Heading>
        <Paragraph>
          Chapters and affinity groups are the pivotal segments of the IEEE
          architecture, meticulously designed to provide tailored opportunities,
          foster innovation, and cultivate professional growth among students.
        </Paragraph>
      </div>
      <div className="w-full max-w-4xl relative flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div
            className="w-full h-full rounded-2xl"
            style={{
              boxShadow:
                "0 0 24px 4px rgba(99,102,241,0.08), 0 0 16px 0 #181c2f",
              filter: "blur(0px)",
            }}
          />
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          setApi={setApi}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
          <CarouselContent>
            {activities.map((activity) => (
              <CarouselItem key={activity.id} className="p-0 pb-8">
                <div className="relative rounded-4xl shadow-2xl overflow-hidden min-h-[200px] flex flex-col justify-center items-center bg-transparent">
                  <GridBackground />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-2xl pointer-events-none" />
                  <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-10 py-8 overflow-hidden rounded-4xl">
                    <AspectRatio
                      ratio={ratio}
                      className="w-full max-w-[480px] sm:max-w-[680px] md:max-w-[900px] mx-auto relative"
                    >
                      <div className="flex items-center justify-center w-full h-full relative z-20">
                        {/* Animate logo with Framer Motion */}
                        <motion.div
                          variants={logoWobble}
                          initial="initial"
                          animate="animate"
                          className="w-full h-full flex items-center justify-center"
                          style={{ willChange: "transform" }}
                        >
                          <Image
                            src={activity.logoUrl}
                            alt={activity.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 900px"
                            priority={activity.id === 1}
                            unoptimized
                          />
                        </motion.div>
                      </div>
                    </AspectRatio>
                    <div className="mt-8 w-full text-center">
                      <p className="text-lg md:text-xl text-neutral-200 font-medium max-w-2xl mx-auto">
                        <TextRise
                          text={activity.description}
                          perWord
                          duration={0.5}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30" />
          <div
            className={cn(
              "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30"
            )}
          >
            {activities.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
                className={cn(
                  "relative flex items-center justify-center w-4 h-4"
                )}
              >
                <span
                  className={cn(
                    "block rounded-full transition-all duration-500",
                    selectedIndex === idx
                      ? "w-4 h-4 bg-primary shadow-lg ring-2 ring-primary/60"
                      : "w-2 h-2 bg-neutral-400 opacity-50"
                  )}
                />
                {selectedIndex === idx && (
                  <span className="absolute w-8 h-8 rounded-full border-2 border-primary/40 animate-ping" />
                )}
              </button>
            ))}
          </div>
        </Carousel>
      </div>
      <section className="w-full bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center flex-1 min-w-[150px]"
            >
              <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                <AnimatedCountRise
                  value={stat.value}
                  className="inline-block"
                  suffix={stat.suffix}
                />
              </span>
              <span className="mt-4 text-lg md:text-xl font-medium text-neutral-300 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
