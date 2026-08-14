"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph } from "../includes/TypoGraphy";

// Add / edit mentors here. Each entry becomes one flip card.
// imageUrl should point to a file inside the /public/images folder.
const wordsOfWisdom = [
  {
    name: "Dr. Prerna Gaur",
    role: "Faculty Advisor",
    quote: "The only way to do great work is to love what you do.",
    imageUrl: "/images/prerna_gaur.jpg",
  },
];

function FlipCard({
  person,
  index,
}: {
  person: (typeof wordsOfWisdom)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      viewport={{ once: true }}
      className="group h-[380px] w-full [perspective:1400px]"
    >
      <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT FACE */}
        <div className="absolute inset-0 flex flex-col items-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-center text-white shadow-lg backdrop-blur [backface-visibility:hidden]">
          {/* decorative background quote mark */}
          <span className="pointer-events-none absolute left-4 top-2 select-none font-serif text-8xl leading-none text-cyan-400/10">
            &ldquo;
          </span>

          {/* spinning gradient ring around avatar */}
          <div className="relative mt-2 mb-4 size-32 rounded-full p-[3px] [background:conic-gradient(from_0deg,#22d3ee,#3b82f6,#818cf8,#22d3ee)] group-hover:[animation:wow-spin_6s_linear_infinite]">
            <div className="relative size-full overflow-hidden rounded-full bg-black">
              <Image
                src={person.imageUrl}
                alt={person.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold">{person.name}</h3>
          <span className="mt-2 rounded-full border border-cyan-400/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
            {person.role}
          </span>
          <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/30">
            hover to flip
          </span>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0c1424] to-[#0f1b30] p-8 text-center text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            &ldquo;{person.quote}&rdquo;
          </p>
          <span className="mt-6 text-sm font-semibold text-cyan-300">
            {person.name}
          </span>
          <span className="mt-1 text-xs text-white/50">{person.role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WordsOfWisdom() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 md:px-8">
      {/* dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(103,232,249,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center md:mb-14">
          <Heading>
            <TextRise text="Words of Wisdom" perWord />
          </Heading>
          <Paragraph>Insights and advice from notable individuals.</Paragraph>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {wordsOfWisdom.map((person, idx) => (
            <FlipCard key={person.name} person={person} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
