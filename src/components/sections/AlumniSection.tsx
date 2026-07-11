"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import * as React from "react";

import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph } from "../includes/TypoGraphy";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

const alumniTestimonials = [
  {
    text: `Joining IEEE NSUT in my first year, driven simply by my love for video editing, turned out to be one of the best decisions of my college life. IEEE NSUT transformed me from an introverted student into a confident leader, giving me countless opportunities to learn, contribute, and grow. The journey from a student member to mentor was filled with challenges, exciting opportunities, and unforgettable moments. I met incredible people, some of whom became lifelong friends.

I extend my heartfelt gratitude to Prof. Prerna Gaur for her unwavering support and trust she placed in me. IEEE NSUT has been my second home, shaping both my personal and professional growth. Representing IEEE NSUT has always been a  privilege. If given the choice, I would relive this journey without a second thought, no regrets, only gratitude.
`,
    name: "TARUN KUMAR SHARMA",
    role: "Ex Chairperson",
    image: "https://i.postimg.cc/LX0Xj3gh/1.jpg",
  },
  {
    text: `My journey with the IEEE NSUT Student Branch has been truly amazing. I joined as a member, eager to learn something new, and never imagined that I would one day become the Vice Chairperson. This society gave me much more than just technical knowledge—it helped me grow, make great friends, and become more confident.

IEEENSUT was not just about events, it was about teamwork, late-night planning, and celebrating small wins together. Every experience, from organizing events to tackling unexpected challenges during execution, helped me become a better version of myself.

I will always be grateful for the memories, the people, and the lessons I learned here. If you want to grow, explore, and be part of an amazing community, IEEENSUT is the perfect place to start!`,
    name: "ABHIMANYU VERMA",
    role: "Ex Vice-Chairperson",
    image: "https://i.postimg.cc/rwSK743Y/2.jpg",
  },
  {
    text: `I had joined IEEE because of my seniors, and looking back, it was one of the best decisions I have ever made. My journey with IEEE has been truly transformative—filled with invaluable experiences, meaningful collaborations, and opportunities for growth. From actively contributing to my Student Branch (SB) to serving as the Student Representative for IEEE Delhi Section, every step has helped me evolve both personally and professionally.

IEEE has provided me with a platform to network, collaborate, and learn from a diverse community, offering exposure across multiple domains. The skills, insights, and connections I have gained here have been instrumental in shaping my journey.

To my juniors, my advice is simple: "Believe in the power of hard work—it always pays off." You are in the right place—embrace every opportunity, participate actively, and make the most of your time here. Each experience will add immense value to your growth.`,
    name: "RISHABH JHA",
    role: "SSR, IEEE Delhi Section",
    image: "https://i.postimg.cc/2yb5GLnG/6.jpg",
  },
  {
    text: `Joining IEEE NSUT in my first year, all thanks to my love for writing and a curiosity to try my hand at event management, turned out to be the best decision I made in college. What started as just an interest soon became a journey that gave me way more than skills — it gave me confidence, countless memories, and friends who feel like family.

From brainstorming crazy event ideas to pulling off last-minute content deadlines, to those legendary late-night meetings and even night stays before big events — every bit of it made this journey unforgettable. Honestly, I ended up making more friends here than in my own class, and I wouldn't have it any other way.

The transition from being a clueless first-year to mentoring juniors and leading teams was full of challenges, but the people around me made sure it was also full of fun, learning, and insane bonding moments.

A huge thanks to Prof. Prerna Gaur for always supporting us and trusting us with so much responsibility. IEEE NSUT wasn't just a society for me — it was my comfort zone, my playground, and my biggest learning ground all rolled into one. If I could, I'd happily relive it all — the chaos, the laughter, and everything in between — no second thoughts, just gratitude and a whole lot of love!`,
    name: "YASHESH PRATAP SINGH",
    role: "Ex Vice-Chairperson",
    image: "https://i.postimg.cc/CKSz01VM/3.jpg",
  },
  {
    text: `IEEE NSUT: More Than Just a Tech Society

As a Computer Science Engineering student, joining IEEE NSUT seemed like the obvious choice—to learn coding, be part of the tech culture, and grow in a technical community. However, what I didn't anticipate was that by my fourth year, I would be stepping into the role of a Product Manager. IEEE not only sharpened my technical skills but also played a crucial role in shaping my ability to manage tasks efficiently and deliver  under pressure.

From being a member to now serving as a mentor, my journey with IEEE has been truly fulfilling. I take immense pride in being part of this incredible society and feel grateful for the opportunities it has given me to contribute and grow.

Whether it was organizing hackathons and speaker sessions, celebrating with Amul treats and farmhouse parties, or forming lifelong bonds with seniors, juniors, and buddies—every moment has been special. I am truly thankful for this organization and wish my juniors all the best for their journey ahead!`,
    name: "VENUS DHARMIK",
    role: "Ex Vice-Chairperson",
    image: "https://i.postimg.cc/fLby3rL6/5.webp",
  },
  {
    text: `Joining IEEE NSUT was one of the crazy things I did in college! This society gave me so many opportunities to grow—whether it was organizing events, or just vibing with an amazing bunch of people i found here. The late-night planning, crazy events, and all the after-parties made everything so much more fun. I have loved all the time i spent here. I'm super grateful for all the memories, friendships, and learning I got here. Huge thanks to IEEE NSUT and lastly college is all about balancing studies and fun, and societies make the journey 10x better! (societies do make a difference).`,
    name: "KARANDEEP SINGH",
    role: "Ex- PES Vice Chair",
    image: "https://i.postimg.cc/K8X19fqM/7.jpg",
  },
];

function needsReadMore(text: string) {
  return text.length > 500;
}

export default function AlumniSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="">
      <div className="w-11/12 max-w-7xl mx-auto mb-12 mt-4">
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
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[plugin.current]}
          setApi={setApi}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
          <CarouselContent>
            {alumniTestimonials.map((item, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.48,
                    delay: 0.08 * idx,
                    ease: "easeOut",
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl h-full w-full flex flex-col p-6 border border-white/15 scale-[0.97] hover:scale-[1] hover:shadow-2xl transition-transform"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-[#00a8cc] shadow-lg">
                      <AvatarImage src={item.image} alt={item.name} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-semibold text-white text-lg">
                        {item.name}
                      </div>
                      <div className="text-[#00a8cc] text-xs uppercase tracking-wider font-bold opacity-80">
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <blockquote className="flex-1 text-base text-white/90 leading-relaxed whitespace-pre-line line-clamp-6">
                    <span className="text-[#00a8cc] text-3xl font-serif leading-none align-top mr-1">
                      “
                    </span>
                    {item.text}
                  </blockquote>
                  {needsReadMore(item.text) && (
                    <button
                      className="mt-4 ml-auto text-[#00a8cc] hover:underline text-sm font-semibold transition-colors"
                      onClick={() => setOpenIdx(idx)}
                      tabIndex={0}
                    >
                      Read More
                    </button>
                  )}
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 md:mt-12">
            <div className={cn("flex items-center space-x-2 z-30 relative")}>
              <CarouselPrevious className="" />
              {alumniTestimonials.map((_, idx) => (
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
              <CarouselNext className="" />
            </div>
          </div>
        </Carousel>
      </div>

      <Dialog
        open={openIdx !== null}
        onOpenChange={(open) => setOpenIdx(open ? openIdx : null)}
      >
        {openIdx !== null && (
          <DialogContent className="w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl rounded-2xl border-0 p-0 bg-gradient-to-br from-[#002147] via-[#003865] to-[#006ba6] text-white shadow-2xl backdrop-blur-2xl">
            <DialogHeader className="p-0">
              <DialogTitle className="flex items-center gap-4 px-6 pt-6">
                <Avatar className="w-16 h-16 border-2 border-[#00a8cc] shadow-lg">
                  <AvatarImage
                    src={alumniTestimonials[openIdx].image}
                    alt={alumniTestimonials[openIdx].name}
                  />
                  <AvatarFallback>
                    {alumniTestimonials[openIdx].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white text-lg">
                    {alumniTestimonials[openIdx].name}
                  </div>
                  <div className="text-[#00a8cc] text-xs uppercase tracking-wider font-bold opacity-80">
                    {alumniTestimonials[openIdx].role}
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="w-full max-h-[60vh] mb-4">
              <div className="p-6 pt-2 text-base text-white/90 leading-relaxed whitespace-pre-line">
                <span className="text-[#00a8cc] text-3xl font-serif leading-none align-top mr-1">
                  “
                </span>
                {alumniTestimonials[openIdx].text}
                <span className="text-[#00a8cc] text-3xl font-serif leading-none align-top mr-1">
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
