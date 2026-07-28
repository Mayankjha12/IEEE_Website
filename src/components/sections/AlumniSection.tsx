"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heading, Paragraph } from "../includes/TypoGraphy";
import { TextRise } from "../custom/TextRise";
import { Pin } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: `Joining IEEE NSUT in my first year, driven simply by my love for video editing, turned out to be one of the best decisions of my college life. IEEE NSUT transformed me from an introverted student into a confident leader, giving me countless opportunities to learn, contribute, and grow. The journey from a student member to mentor was filled with challenges, exciting opportunities, and unforgettable moments. I met incredible people, some of whom became lifelong friends.

I extend my heartfelt gratitude to Prof. Prerna Gaur for her unwavering support and trust she placed in me. IEEE NSUT has been my second home, shaping both my personal and professional growth. Representing IEEE NSUT has always been a privilege. If given the choice, I would relive this journey without a second thought, no regrets, only gratitude.
`,
    name: "TARUN KUMAR SHARMA",
    role: "EX CHAIRPERSON",
    image: "https://i.postimg.cc/LX0Xj3gh/1.jpg",
  },
  {
    text: `My journey with the IEEE NSUT Student Branch has been truly amazing. I joined as a member, eager to learn something new, and never imagined that I would one day become the Vice Chairperson. This society gave me much more than just technical knowledge—it helped me grow, make great friends, and become more confident.

IEEENSUT was not just about events, it was about teamwork, late-night planning, and celebrating small wins together. Every experience, from organizing events to tackling unexpected challenges during execution, helped me become a better version of myself.

I will always be grateful for the memories, the people, and the lessons I learned here. If you want to grow, explore, and be part of an amazing community, IEEENSUT is the perfect place to start!`,
    name: "ABHIMANYU VERMA",
    role: "EX VICE-CHAIRPERSON",
    image: "https://i.postimg.cc/rwSK743Y/2.jpg",
  },
  {
    text: `I had joined IEEE because of my seniors, and looking back, it was one of the best decisions I have ever made. My journey with IEEE has been truly transformative—filled with invaluable experiences, meaningful collaborations, and opportunities for growth. From actively contributing to my Student Branch (SB) to serving as the Student Representative for IEEE Delhi Section, every step has helped me evolve both personally and professionally.

IEEE has provided me with a platform to network, collaborate, and learn from a diverse community, offering exposure across multiple domains. The skills, insights, and connections I have gained here have been instrumental in shaping my journey.

To my juniors, my advice is simple: "Believe in the power of hard work—it always pays off." You are in the right place—embrace every opportunity, participate actively, and make the most of your time here. Each experience will add immense value to your growth.`,
    name: "RISHABH JHA",
    role: "SSR, IEEE DELHI SECTION",
    image: "https://i.postimg.cc/2yb5GLnG/6.jpg",
  },
  {
    text: `Joining IEEE NSUT in my first year, all thanks to my love for writing and a curiosity to try my hand at event management, turned out to be the best decision I made in college. What started as just an interest soon became a journey that gave me way more than skills — it gave me confidence, countless memories, and friends who feel like family.

From brainstorming crazy event ideas to pulling off last-minute content deadlines, to those legendary late-night meetings and even night stays before big events — every bit of it made this journey unforgettable. Honestly, I ended up making more friends here than in my own class, and I wouldn't have it any other way.

The transition from being a clueless first-year to mentoring juniors and leading teams was full of challenges, but the people around me made sure it was also full of fun, learning, and insane bonding moments.

A huge thanks to Prof. Prerna Gaur for always supporting us and trusting us with so much responsibility. IEEE NSUT wasn't just a society for me — it was my comfort zone, my playground, and my biggest learning ground all rolled into one. If I could, I'd happily relive it all — the chaos, the laughter, and everything in between — no second thoughts, just gratitude and a whole lot of love!`,
    name: "YASHESH PRATAP SINGH",
    role: "EX VICE-CHAIRPERSON",
    image: "https://i.postimg.cc/CKSz01VM/3.jpg",
  },
  {
    text: `IEEE NSUT: More Than Just a Tech Society

As a Computer Science Engineering student, joining IEEE NSUT seemed like the obvious choice—to learn coding, be part of the tech culture, and grow in a technical community. However, what I didn't anticipate was that by my fourth year, I would be stepping into the role of a Product Manager. IEEE not only sharpened my technical skills but also played a crucial role in shaping my ability to manage tasks efficiently and deliver under pressure.

From being a member to now serving as a mentor, my journey with IEEE has been truly fulfilling. I take immense pride in being part of this incredible society and feel grateful for the opportunities it has given me to contribute and grow.

Whether it was organizing hackathons and speaker sessions, celebrating with Amul treats and farmhouse parties, or forming lifelong bonds with seniors, juniors, and buddies—every moment has been special. I am truly thankful for this organization and wish my juniors all the best for their journey ahead!`,
    name: "VENUS DHARMIK",
    role: "EX VICE-CHAIRPERSON",
    image: "https://i.postimg.cc/fLby3rL6/5.webp",
  },
  {
    text: `Joining IEEE NSUT was one of the crazy things I did in college! This society gave me so many opportunities to grow—whether it was organizing events, or just vibing with an amazing bunch of people i found here. The late-night planning, crazy events, and all the after-parties made everything so much more fun. I have loved all the time i spent here. I'm super grateful for all the memories, friendships, and learning I got here. Huge thanks to IEEE NSUT and lastly college is all about balancing studies and fun, and societies make the journey 10x better! (societies do make a difference).`,
    name: "KARANDEEP SINGH",
    role: "EX- PES VICE CHAIR",
    image: "https://i.postimg.cc/K8X19fqM/7.jpg",
  },
];

function TestimonialCard({
  testimonial,
  onReadMore,
}: {
  testimonial: Testimonial;
  onReadMore: () => void;
}) {
  return (
    <div className="group relative flex h-[440px] w-[340px] shrink-0 flex-col justify-between rounded-[20px] bg-white/[0.06] p-8 shadow-xl backdrop-blur-sm sm:w-[400px] transition-all duration-300 hover:scale-105 border border-white/5 hover:border-[#00A8E8]/30">
      <div className="absolute top-2 left-2 text-[#00A8E8] opacity-70 drop-shadow-md z-10 ">
        <Pin className="w-6 h-6 -rotate-45" />
      </div>

      <div className="flex-1 overflow-hidden mt-3 relative">
        <p className="text-[16px] leading-relaxed text-gray-200 line-clamp-8">
          <span className="mr-1.5 inline-block font-serif text-3xl font-bold text-[#00A8E8] leading-[0.5]">
            “
          </span>
          {testimonial.text}
          <span className="ml-1 inline-block font-serif text-2xl font-bold text-[#00A8E8] leading-[0]">
            ”
          </span>
        </p>
      </div>

      <div className="mt-2 flex justify-start">
        <button
          onClick={onReadMore}
          className="text-[12px] font-semibold text-[#00A8E8] hover:text-white transition-colors duration-200"
        >
          Read More
        </button>
      </div>

      <div className="my-5 h-[2px] w-full bg-white/10 rounded-full relative overflow-hidden"></div>

      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 border-2 border-[#00a8cc] shadow-md transition-transform duration-300 group-hover:scale-110">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback className="bg-white/10 text-white font-semibold">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[16px] font-bold text-white uppercase tracking-wide">
            {testimonial.name}
          </p>
          <p className="truncate text-[11px] font-bold text-[#00A8E8] uppercase mt-1 tracking-wider">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  duration,
  direction = "left",
  onItemClick,
}: {
  items: Testimonial[];
  duration: number;
  direction?: "left" | "right";
  onItemClick: (testimonial: Testimonial) => void;
}) {
  const looped = [...items, ...items, ...items, ...items];
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative flex w-full overflow-hidden py-4">
      <div
        className={`${animationClass} flex w-max gap-6 will-change-transform`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {looped.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.name.replace(/\s+/g, "-")}-${i}`}
            testimonial={testimonial}
            onReadMore={() => onItemClick(testimonial)}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const [activeTestimonial, setActiveTestimonial] =
    React.useState<Testimonial | null>(null);
  return (
    <section className="w-full overflow-hidden py-10">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.75rem)); }
        }
        
        @keyframes scroll-right {
          from { transform: translateX(calc(-50% - 0.75rem)); }
          to { transform: translateX(0); }
        }
        
        .animate-marquee-left {
          animation: scroll-left var(--marquee-duration) linear infinite;
        }
        
        .animate-marquee-right {
          animation: scroll-right var(--marquee-duration) linear infinite;
        }
        
        .testimonials-carousel:has(.group:hover) .animate-marquee-left,
.testimonials-carousel:has(.group:hover) .animate-marquee-right,
.testimonials-carousel.is-paused .animate-marquee-left,
.testimonials-carousel.is-paused .animate-marquee-right {
  animation-play-state: paused !important;
}

        @media (prefers-reduced-motion: reduce) {
          .testimonials-carousel * { animation: none !important; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <Heading className="">
          <TextRise text="Alumni Reflections" />
        </Heading>
        <Paragraph className="text-lg text-white/90 max-w-2xl mx-auto">
          Celebrating the journeys and voices of our distinguished IEEE NSUT
          alumni
        </Paragraph>
      </motion.div>

      <div
        className={`testimonials-carousel relative mx-auto w-full max-w-[1400px] px-4 ${
          activeTestimonial ? "is-paused" : ""
        }`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {/* First 3 going left to right (moving right) */}
        <MarqueeRow
          items={testimonials.slice(0, 3)}
          duration={70}
          direction="right"
          onItemClick={setActiveTestimonial}
        />

        {/* Last 3 going right to left (moving left) */}
        <MarqueeRow
          items={testimonials.slice(3, 6)}
          duration={70}
          direction="left"
          onItemClick={setActiveTestimonial}
        />
      </div>

      <Dialog
        open={!!activeTestimonial}
        onOpenChange={(open) =>
          setActiveTestimonial(open ? activeTestimonial : null)
        }
      >
        {activeTestimonial && (
          <DialogContent className="w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl rounded-2xl border-0 p-0 bg-gradient-to-br from-[#002147] via-[#003865] to-[#006ba6] text-white shadow-2xl backdrop-blur-2xl">
            <DialogHeader className="p-0">
              <DialogTitle className="flex items-center gap-4 px-6 pt-6">
                <Avatar className="w-16 h-16 border-2 border-[#00a8cc] shadow-lg">
                  <AvatarImage
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                  />
                  <AvatarFallback>
                    {activeTestimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white text-lg">
                    {activeTestimonial.name}
                  </div>
                  <div className="text-[#00a8cc] text-xs uppercase tracking-wider font-bold opacity-80">
                    {activeTestimonial.role}
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="w-full max-h-[60vh] mb-4">
              <div className="p-6 pt-2 text-base text-white/90 leading-relaxed whitespace-pre-line">
                <span className="text-[#00a8cc] text-3xl font-serif leading-none align-top mr-1">
                  “
                </span>
                {activeTestimonial.text}
                <span className="text-[#00a8cc] text-3xl font-serif leading-none align-top ml-1">
                  ”
                </span>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
