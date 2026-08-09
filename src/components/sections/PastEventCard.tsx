"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Heading, Paragraph } from "../includes/TypoGraphy";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Card Connector
export function CardConnector({ isHovered }: { isHovered: boolean }) {
  const pins = [0, 1, 2, 3];

  return (
    <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0.6 }}>
      <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#5fb8ff] shadow-[0_0_4px_#5fb8ff]" />

      <svg width={0} height={0} className="absolute">
        <defs>
          <linearGradient id="metallic-pin-grad" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="20%" stopColor="#e2e8f0" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <radialGradient id="solder-dot-grad" cx="35%" cy="35%" r="65%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="80%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
          <filter id="pin-shadow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx={0} dy={2} stdDeviation="1.5" floodColor="#000000" floodOpacity={0.8} result="shadow" />
            <feDropShadow dx={0} dy={0} stdDeviation={3} floodColor="#5fb8ff" floodOpacity={0.5} result="glow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Left Pins */}
      <div className="absolute top-[20%] bottom-[20%] -left-[20px] flex flex-col justify-between" style={{ transformOrigin: 'left center' }}>
        {pins.map((i) => (
          <svg key={`l-${i}`} width={20} height={6} viewBox="0 0 20 6" className="overflow-visible transition-transform duration-300" style={{ transformOrigin: 'left center', transform: isHovered ? 'scaleX(1.1) skewY(-15deg)' : 'scaleX(1) skewY(0deg)' }}>
            <g filter="url(#pin-shadow-glow)">
              <path d="M 20 1 L 20 5 L 4 4 L 4 2 Z" fill="url(#metallic-pin-grad)" />
              <line x1={20} y1={1} x2={4} y2={2} stroke="#ffffff" strokeWidth={0.5} opacity={0.9} />
              <circle cx={4} cy={3} r={2.5} fill="url(#solder-dot-grad)" />
            </g>
          </svg>
        ))}
      </div>

      {/* Right Pins */}
      <div className="absolute top-[20%] bottom-[20%] -right-[20px] flex flex-col justify-between" style={{ transformOrigin: 'right center' }}>
        {pins.map((i) => (
          <svg key={`r-${i}`} width={20} height={6} viewBox="0 0 20 6" className="overflow-visible transition-transform duration-300" style={{ transformOrigin: 'right center', transform: isHovered ? 'scaleX(1.1) skewY(15deg)' : 'scaleX(1) skewY(0deg)' }}>
            <g filter="url(#pin-shadow-glow)">
              <path d="M 0 1 L 0 5 L 16 4 L 16 2 Z" fill="url(#metallic-pin-grad)" />
              <line x1={0} y1={1} x2={16} y2={2} stroke="#ffffff" strokeWidth={0.5} opacity={0.9} />
              <circle cx={16} cy={3} r={2.5} fill="url(#solder-dot-grad)" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}

// Event Data
interface Event {
  id: string;
  img: string;
  title: string;
  desc: string;
  date: string;
  year: string;
  theme?: string;
  venue?: string;
  highlights?: string[];
  chiefGuests?: string[];
  gallery?: string[];
}

const events: Event[] = [
  {
    id: "1",
    img: "/images/tensymp.png",
    title: "Tensymp'24",
    desc: "IEEE TENSYMP'24, is a premier symposium showcasing cutting-edge technological advancements, fostering global collaboration, and empowering researchers, professionals, and students through insightful sessions, workshops, and networking opportunities across diverse domains.",
    date: "12 MAR",
    year: "2024",
    theme: "Technology & Innovation",
    venue: "Main Auditorium, NSUT",
    highlights: ["Over 500+ participants from 10 countries", "Interactive coding sessions and hackathons", "Keynote speeches by industry leaders"],
    chiefGuests: ["Dr. Anuradha Tomar", "Dr. Prerna Gaur"],
    gallery: ["/images/image1.jpg", "/images/image2.png", "/images/image4.png", "/images/image5.png"]
  },
  {
    id: "2",
    img: "/images/dssywlc.png",
    title: "DSSYWLC'24",
    desc: "IEEE DSSYWLC is a dynamic event focused on networking, knowledge-sharing, and community building through technical symposiums, discussions and cultural festivities.",
    date: "5 APR",
    year: "2024",
    theme: "Networking & Community",
    venue: "APJ Abdul Kalam Block",
    highlights: ["Cultural festivities and technical symposiums", "Interactive panel discussions"]
  },
  {
    id: "3",
    img: "/images/image2.png",
    title: "Algoverse 3.0",
    desc: "IEEE NSUT AlgoVerse is a vibrant, community-driven initiative that provides an engaging and structured platform to thoroughly master DSA through consistent, daily problem-solving challenges like Problem of the Day (POTD), fostering both collaboration and growth.",
    date: "22 APR",
    year: "2024",
    theme: "Competitive Coding",
    venue: "CS Lab 2, NSUT",
    highlights: ["Daily problem-solving challenges (POTD)", "Live leaderboard tracking", "Prizes for top 3 competitive coders"],
    chiefGuests: ["Prof. XYZ"],
    gallery: ["/images/image2.png", "/images/image4.png"]
  },
  {
    id: "4",
    img: "/images/pedal.png",
    title: "Pedal Playground",
    desc: "Pedal Playground, organized by IEEE NSUT in collaboration with Crescendo, is an interactive workshop exploring the art of sound design and audio synthesis through pedals. Dive into creative experimentation, music tech.",
    date: "9 MAY",
    year: "2024",
    theme: "Sound Design",
    venue: "Mini Auditorium",
    highlights: ["Hands-on workshop with sound synthesis", "Collaboration with Crescendo"],
    gallery: ["/images/image5.png"]
  },
  {
    id: "5",
    img: "/images/image1.jpg",
    title: "AI Summit 2025",
    desc: "A summit discussing the future of AI and machine learning across industries. Connect with leading researchers and industry professionals.",
    date: "15 JAN",
    year: "2025",
    theme: "Artificial Intelligence",
    venue: "Main Auditorium, NSUT",
    highlights: ["Future of AI across global industries", "Connect with leading researchers"]
  }
];

// PCB Pattern
const CELL = 32;
const PATTERN_SIZE = 20;
const patternVias: { x: number; y: number }[] = [];
for (let r = 0; r < PATTERN_SIZE; r++) {
  for (let c = 0; c < PATTERN_SIZE; c++) {
    const h = ((c * 2654435761) ^ (r * 2246822519)) >>> 0;
    if ((h % 100) < 62) patternVias.push({ x: c * CELL, y: r * CELL });
  }
}

// Main Section
export default function PastEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const gridX = useTransform(scrollX, (v) => -(v % 640));
  const cardsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const hasEnteredRef = useRef(false);
  const [dialogEvent, setDialogEvent] = useState<Event | null>(null);
  const sweepRafRef = useRef(0);

  const checkEdges = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setAtStart(container.scrollLeft <= 10);
    setAtEnd(Math.ceil(container.scrollLeft) >= maxScroll - 10);
  }, []);

  const performSweep = useCallback((fromIdx: number, toIdx: number, duration = 2000) => {
    const container = scrollRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    const fromCard = cards.children[fromIdx] as HTMLElement;
    const toCard = cards.children[toIdx] as HTMLElement;
    if (!fromCard || !toCard) return;

    const initialFromScroll = fromCard.offsetLeft - container.offsetWidth / 2 + fromCard.offsetWidth / 2;
    container.style.scrollBehavior = "auto";
    container.scrollLeft = initialFromScroll;

    cancelAnimationFrame(sweepRafRef.current);

    setTimeout(() => {
      const startTime = performance.now();
      const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const currentFromScroll = fromCard.offsetLeft - container.offsetWidth / 2 + fromCard.offsetWidth / 2;
        const currentToScroll = toCard.offsetLeft - container.offsetWidth / 2 + toCard.offsetWidth / 2;
        const distance = currentToScroll - currentFromScroll;

        container.scrollLeft = currentFromScroll + distance * ease(progress);

        if (progress < 1) {
          sweepRafRef.current = requestAnimationFrame(step);
        } else {
          setActive(toIdx);
          targetRef.current = toIdx;
          checkEdges();
          container.style.scrollBehavior = "smooth";
        }
      };

      sweepRafRef.current = requestAnimationFrame(step);
    }, 150);
  }, [checkEdges]);

  const targetRef = useRef(0);
  const isNavScrollingRef = useRef(false);
  const navScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigateTo = useCallback((index: number) => {
    if (index < 0 || index >= events.length) return;
    targetRef.current = index;
    setActive(index);

    isNavScrollingRef.current = true;
    if (navScrollTimerRef.current) clearTimeout(navScrollTimerRef.current);
    navScrollTimerRef.current = setTimeout(() => {
      isNavScrollingRef.current = false;
    }, 800);

    const container = scrollRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;
    const card = cards.children[index] as HTMLElement;
    if (!card) return;
    const targetScroll = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
    container.scrollTo({ left: targetScroll, behavior: "smooth" });

    setTimeout(checkEdges, 850);
  }, [checkEdges]);

  const goLeft = useCallback(() => {
    navigateTo(Math.max(0, targetRef.current - 2));
  }, [navigateTo]);

  const goRight = useCallback(() => {
    navigateTo(Math.min(events.length - 1, targetRef.current + 2));
  }, [navigateTo]);

  const syncFromScroll = useCallback(() => {
    checkEdges();
    if (isNavScrollingRef.current) return;
    const container = scrollRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    const center = container.scrollLeft + (container.offsetWidth / 2);
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < events.length; i++) {
      const el = cards.children[i] as HTMLElement;
      if (!el) continue;
      const cardCenter = el.offsetLeft + (el.offsetWidth / 2);
      const d = Math.abs(cardCenter - center);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    targetRef.current = best;
    setActive(best);
  }, [checkEdges]);

  useEffect(() => {
    const container = scrollRef.current;
    const cards = cardsRef.current;
    if (!container || !cards) return;

    checkEdges();
    window.addEventListener("resize", checkEdges);
    const resizeObserver = new ResizeObserver(() => checkEdges());
    resizeObserver.observe(container);
    resizeObserver.observe(cards);

    return () => {
      window.removeEventListener("resize", checkEdges);
      resizeObserver.disconnect();
    };
  }, [checkEdges]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    checkEdges();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredRef.current) {
          hasEnteredRef.current = true;
          setTimeout(() => {
            performSweep(events.length - 1, 0, 2000);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: [0, 1] }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(sweepRafRef.current);
    };
  }, [checkEdges, performSweep]);

  return (
    <section ref={sectionRef} className="flex flex-col w-full text-white bg-black relative overflow-hidden pt-10 md:pt-20 pb-12" id="events">
      <style>{`
        #past-events-scroll::-webkit-scrollbar { display: none; }

        .card3d-scene { position: relative; }
        
        .card3d-floor-shadow {
          position: absolute;
          inset: 10px -10px -10px 10px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 12px;
          filter: blur(12px);
          transition: transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 0;
          pointer-events: none;
        }

        .card3d-shadow-face {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0e1522, #04080c);
          border-radius: 7px;
          z-index: 5;
        }
        
        .card3d-isometric-right {
          position: absolute;
          top: 0; right: -12px;
          width: 12px; height: 100%;
          background: linear-gradient(180deg, #1a2738, #0a111a);
          transform-origin: left top;
          transform: skewY(45deg) scaleX(0);
          transition: transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
          border-right: 1px solid rgba(0,0,0,0.8);
          border-bottom: 1px solid rgba(0,0,0,0.8);
          border-top: 1px solid rgba(60,80,110,0.3);
          border-radius: 0 3px 3px 0;
          z-index: 10;
        }
        .card3d-scene:hover .card3d-isometric-right { transform: skewY(45deg) scaleX(1); }

        .card3d-isometric-bottom {
          position: absolute;
          bottom: -12px; left: 0;
          width: 100%; height: 12px;
          background: linear-gradient(90deg, #0a111a, #1a2738);
          transform-origin: left top;
          transform: skewX(45deg) scaleY(0);
          transition: transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
          border-bottom: 1px solid rgba(0,0,0,0.8);
          border-left: 1px solid rgba(55,75,105,0.3);
          border-radius: 0 0 3px 3px;
          z-index: 10;
        }
        .card3d-scene:hover .card3d-isometric-bottom { transform: skewX(45deg) scaleY(1); }

        .card3d-front {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(22,30,45,0.95) 0%, rgba(10,15,25,0.95) 50%, rgba(5,8,15,0.95) 100%);
          border-top: 1px solid rgba(60,80,110,0.4);
          border-left: 1px solid rgba(55,75,105,0.35);
          border-bottom: 1px solid rgba(0,0,0,0.7);
          border-right: 1px solid rgba(0,0,0,0.6);
          padding: 8px;
          border-radius: 7px;
        }
      `}</style>

      {/* Header */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center z-10 mb-8 md:mb-12 px-6">
  <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 font-bold leading-tight tracking-tight">
    Crafting Excellence: Pioneering Events by IEEE NSUT
  </Heading>

  <Paragraph className="max-w-4xl text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
    A showcase of innovation, learning, and collaboration. IEEE NSUT&apos;s
    events create opportunities for meaningful networking, hands-on
    skill-building, immersive learning, and real-world problem-solving.
  </Paragraph>
</div>

      {/* Event Cards */}
      <div className="relative w-full flex-1 flex flex-col mt-6 md:mt-10">
        <div
          className="absolute -top-[100px] -bottom-[160px] left-0 right-0 pointer-events-none z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 180px), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 120px, black calc(100% - 180px), transparent 100%)',
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, height: '100%', width: 'calc(100% + 640px)', display: 'block', x: gridX, willChange: 'transform' }}
          >
            <defs>
              <pattern id="pcb-grid-lines" x={0} y={0} width={CELL} height={CELL} patternUnits="userSpaceOnUse">
                <line x1={0} y1={0} x2={0} y2={CELL} stroke="rgba(95,184,255,0.28)" strokeWidth={0.8} />
                <line x1={0} y1={0} x2={CELL} y2="0" stroke="rgba(95,184,255,0.28)" strokeWidth={0.8} />
              </pattern>
              <pattern id="pcb-vias" x={0} y={0} width={CELL * PATTERN_SIZE} height={CELL * PATTERN_SIZE} patternUnits="userSpaceOnUse">
                {patternVias.map((v, i) => (
                  <g key={i}>
                    <circle cx={v.x} cy={v.y} r={2.6} fill="none" stroke="rgba(40,100,180,0.45)" strokeWidth={1} />
                    <circle cx={v.x} cy={v.y} r={1.1} fill="rgba(95,184,255,0.35)" />
                  </g>
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pcb-grid-lines)" />
            <rect width="100%" height="100%" fill="url(#pcb-vias)" />
          </motion.svg>
        </div>

        <div className="w-full relative select-none mt-1 overflow-hidden group/nav">
          <div className="absolute left-0 top-2 bottom-10 z-30 flex items-center justify-start pointer-events-none">
            <button
              onClick={goLeft}
              disabled={atStart}
              className="px-2 md:px-6 h-full flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover/nav:opacity-100 disabled:!opacity-0 transition-opacity duration-300 outline-none pointer-events-auto cursor-pointer"
            >
              <div className="w-8 h-24 md:w-12 md:h-32">
                <svg viewBox="0 0 40 80" className="w-full h-full drop-shadow-[0_0_8px_rgba(27,61,114,0.6)] text-[rgba(95,184,255,0.4)] hover:text-[#5fb8ff] transition-all hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_rgba(95,184,255,0.8)]">
                  <path d="M30 10 L10 40 L30 70 L25 70 L5 40 L25 10 Z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>

          <div className="absolute right-0 top-2 bottom-10 z-30 flex items-center justify-end pointer-events-none">
            <button
              onClick={goRight}
              disabled={atEnd}
              className="px-2 md:px-6 h-full flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover/nav:opacity-100 disabled:!opacity-0 transition-opacity duration-300 outline-none pointer-events-auto cursor-pointer"
            >
              <div className="w-8 h-24 md:w-12 md:h-32">
                <svg viewBox="0 0 40 80" className="w-full h-full drop-shadow-[0_0_8px_rgba(27,61,114,0.6)] text-[rgba(95,184,255,0.4)] hover:text-[#5fb8ff] transition-all hover:scale-110 active:scale-95 hover:drop-shadow-[0_0_12px_rgba(95,184,255,0.8)]">
                  <path d="M10 10 L30 40 L10 70 L15 70 L35 40 L15 10 Z" fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>

          <div
            id="past-events-scroll"
            ref={scrollRef}
            className="w-full overflow-hidden relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={syncFromScroll}
          >
            <div
              ref={cardsRef}
              className="relative flex items-start gap-16 sm:gap-24 md:gap-[96px] lg:gap-[128px] px-[10vw] pt-2 pb-6 min-w-max"
              style={{ perspective: "1000px" }}
            >
              {events.map((event, idx) => {
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={event.id}
                    className="relative z-10 flex flex-col items-center shrink-0"
                    onClick={() => setDialogEvent(events[idx])}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="card3d-scene w-[192px] h-[210px] sm:w-[256px] sm:h-[280px] md:w-[320px] md:h-[350px]">
                      <div
                        className="card3d-floor-shadow"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? 'translate(10px, 10px) scale(0.95)' : 'translate(0, 0) scale(1)',
                        }}
                      />

                      <div className="card3d-shadow-face" />

                      <CardConnector isHovered={isHovered} />

                      <div
                        className="card3d-front flex flex-col cursor-pointer"
                        style={{
                          zIndex: 20,
                          transform: isHovered ? 'translate(-12px, -12px)' : 'translate(0, 0)',
                          boxShadow: isHovered ? 'inset 0 1px 0 rgba(60,85,120,0.15)' : 'inset 0 1px 0 rgba(50,70,100,0.12)',
                          transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 400ms ease-out',
                        }}
                      >
                        <div className="card3d-isometric-right pointer-events-none" />
                        <div className="card3d-isometric-bottom pointer-events-none" />
                        <div
                          className="absolute inset-[3px] rounded-[5px] pointer-events-none z-0"
                          style={{
                            border: '1px solid rgba(0,0,0,0.35)',
                            boxShadow: 'inset 0 1px 0 rgba(50,70,100,0.12), inset 0 -1px 0 rgba(0,0,0,0.2)',
                          }}
                        />

                        <div
                          className="absolute top-[9px] left-[9px] w-1.5 h-1.5 rounded-full z-10"
                          style={{
                            background: 'radial-gradient(circle at 35% 35%, rgba(50,80,130,0.9), rgba(15,25,50,0.8))',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.5), 0 0 2px rgba(95,184,255,0.15)',
                          }}
                        />

                        <div
                          className="w-full h-[140px] sm:h-[190px] md:h-[250px] rounded-[3px] overflow-hidden relative mb-2 pointer-events-none shrink-0 z-10"
                          style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.4), 0 1px 0 rgba(50,70,100,0.08)' }}
                        >
                          <Image
                            src={event.img}
                            alt={event.title}
                            fill
                            className="object-cover"
                            draggable={false}
                          />
                        </div>

                        <div className="flex flex-col flex-1 justify-center items-center px-1 sm:px-2 pointer-events-none bg-transparent mt-auto w-full z-10">
                          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl text-center leading-tight tracking-tight">
                            {event.title}
                          </h3>
                          {event.theme && (
                            <p className="text-[#29ABE2] font-medium text-[9px] sm:text-[10px] md:text-xs tracking-wider text-center mt-1">
                              {event.theme.toUpperCase()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={!!dialogEvent} onOpenChange={(o) => { if (!o) setDialogEvent(null); }}>
        {dialogEvent && (
          <DialogContent
            showCloseButton={false}
            className="bg-transparent border-none shadow-none sm:max-w-none max-w-none p-0 flex items-center justify-center"
          >
            <DialogTitle className="sr-only">{dialogEvent.title}</DialogTitle>

            <style>{`
              [data-slot="dialog-overlay"] {
                z-index: 100 !important;
                backdrop-filter: blur(8px) !important;
                -webkit-backdrop-filter: blur(8px) !important;
              }
              [data-slot="dialog-content"] {
                z-index: 100 !important;
              }
            `}</style>

            <div
              className="absolute inset-0 z-0"
              onClick={() => setDialogEvent(null)}
              aria-label="Close dialog"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1280px] h-[80vh] sm:h-[85vh] md:h-[90vh] max-w-[98vw] max-h-[98vh] relative overflow-hidden z-10 flex text-white font-sans"
              style={{
                background: 'rgba(15, 20, 32, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(100, 150, 255, 0.4)',
                boxShadow: 'inset 0 0 25px rgba(100, 160, 255, 0.3), 0 20px 60px rgba(0, 0, 0, 0.8)',
                borderRadius: '16px',
                willChange: 'transform, opacity'
              }}
            >
              <button
                onClick={() => setDialogEvent(null)}
                className="absolute top-4 left-4 w-3.5 h-3.5 bg-[#ff5f56] rounded-full border border-[#e0443e] flex items-center justify-center group z-50 focus:outline-none shadow-sm"
                aria-label="Close"
              >
                <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>

              <div className="w-full h-full flex flex-col md:flex-row pl-12 sm:pl-16 overflow-y-auto overflow-x-hidden custom-scrollbar overscroll-contain">
                <div className="w-full md:w-[40%] p-6 sm:p-8 flex flex-col border-b md:border-b-0 md:border-r border-[#64a0ff]/20 bg-gradient-to-br from-white/5 to-transparent pt-12 md:pt-8">
                  <div className="relative w-fit mx-auto rounded-xl overflow-hidden mb-6 border border-[#64a0ff]/40 shadow-[0_0_20px_rgba(100,160,255,0.15)] group bg-black/40">
                    <div className="absolute inset-0 bg-[#64a0ff]/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                    <Image src={dialogEvent.img} alt={dialogEvent.title} width={600} height={400} className="max-w-full h-auto max-h-[40vh] md:max-h-[50vh] block relative z-0" />
                    <div className="absolute inset-0 pointer-events-none z-20 opacity-30" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,160,255,0.1) 2px, rgba(100,160,255,0.1) 4px)' }} />
                  </div>

                  <div className="mb-6 flex-1">
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                      {dialogEvent.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8cbfff] mb-3 block font-bold">Gallery Preview</span>
                    <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                      {dialogEvent.gallery && dialogEvent.gallery.length > 0 ? (
                        dialogEvent.gallery.map((img, i) => (
                          <div key={i} className="relative w-24 h-16 sm:w-28 sm:h-20 rounded-lg overflow-hidden shrink-0 border border-[#64a0ff]/40 opacity-70 hover:opacity-100 hover:shadow-[0_0_15px_rgba(100,160,255,0.3)] transition-all cursor-pointer">
                            <Image src={img} alt="Gallery image" fill className="object-cover" />
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center justify-center w-full h-16 sm:h-20 text-xs sm:text-sm text-[#8cbfff]/40 font-bold tracking-widest border border-dashed border-[#64a0ff]/30 rounded-lg bg-white/5">
                          N/A
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[60%] p-6 sm:p-8 flex flex-col relative">
                  <div className="mb-8 pr-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 uppercase drop-shadow-[0_0_12px_rgba(100,160,255,0.4)]">
                      {dialogEvent.title}
                    </h2>
                    {dialogEvent.theme && (
                      <p className="text-[#a6cdff] text-xs sm:text-sm font-bold tracking-[0.15em] uppercase">
                        {dialogEvent.theme}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 bg-black/40 p-4 sm:p-5 rounded-xl border border-white/10 shadow-inner">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8cbfff] mb-1.5 font-bold">Date</span>
                      <span className="text-base sm:text-lg font-bold text-white tracking-wide">{dialogEvent.date}, {dialogEvent.year}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8cbfff] mb-1.5 font-bold">Venue</span>
                      <span className="text-base sm:text-lg font-bold text-white tracking-wide">{dialogEvent.venue || "TBA"}</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-1">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8cbfff] mb-4 block font-bold">Highlights</span>
                    {dialogEvent.highlights && dialogEvent.highlights.length > 0 ? (
                      <ul className="space-y-3 sm:space-y-4">
                        {dialogEvent.highlights.map((h, i) => (
                          <li key={i} className="flex items-start text-sm sm:text-base text-white/90 font-medium">
                            <svg className="w-5 h-5 text-[#8cbfff] mr-3 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(100,160,255,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-[#8cbfff]/50 italic font-bold tracking-widest">CLASSIFIED</p>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#64a0ff]/20">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8cbfff] mb-3 block font-bold">Chief Guests</span>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {dialogEvent.chiefGuests && dialogEvent.chiefGuests.length > 0 ? (
                        dialogEvent.chiefGuests.map((guest, i) => (
                          <span key={i} className="text-xs sm:text-sm font-bold text-[#e6f0ff] uppercase tracking-wider">
                            {guest}{i < dialogEvent.chiefGuests!.length - 1 ? "," : ""}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs sm:text-sm text-[#8cbfff]/40 font-bold tracking-widest">N/A</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
