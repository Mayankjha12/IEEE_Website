"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Play, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA & IMAGE GENERATION HELPERS
// ==========================================
const U = (id: string, w: number = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const P = (seed: number, ev: any, n: number, ars?: string[]) => {
    const set = ars || ['3/4', '4/3', '1/1', '4/5', '3/4', '16/10'];
    const pool = ev.pool || [];
    const out = [];
    for (let i = 0; i < n; i++) {
        out.push({
            id: seed + '-' + i,
            ar: set[(i + seed) % set.length],
            img: pool.length ? pool[(seed + i * 3) % pool.length] : ''
        });
    }
    return out;
};

const mkTiles = (ev: any, s: number) => ({
    photos: P(s, ev, 12),
    videos: P(s + 3, ev, 3, ['16/10', '16/10', '16/10']),
    moments: P(s + 7, ev, 6),
    closing: P(s + 11, ev, 3, ['4/3', '4/3', '4/3']),
    certs: P(s + 13, ev, 3, ['7/5', '7/5', '7/5']),
    bts: P(s + 17, ev, 4)
});

const POOLS: Record<string, string[]> = {
  smartsensing: [
  '1526374965328-7f61d4dc18c5',
  '1555949963-aa79dcee981c',
  '1528901166007-3784c7dd3653',
  '1492684223066-81342ee5ff30',
  '1543269865-cbf427effbad',
  '1504384308090-c894fdcc538d'
],

leadershipconclave: [
  '1511578314322-379afb476865',
  '1587825140708-dfaf72ae4b04',
  '1540575467063-178a50c2df87',
  '1521737604893-d14cc237f11d',
  '1475721027785-f74eccf877e2',
  '1478737270239-2f02b77fc618'
],

hilsttp: [
  '1528901166007-3784c7dd3653',
  '1492684223066-81342ee5ff30',
  '1543269865-cbf427effbad',
  '1504384308090-c894fdcc538d',
  '1461749280684-dccba630e2f6',
  '1515187029135-18ee286d815b'
],

dsaverse: [
  '1461749280684-dccba630e2f6',
  '1504384308090-c894fdcc538d',
  '1492684223066-81342ee5ff30',
  '1543269865-cbf427effbad',
  '1528901166007-3784c7dd3653',
  '1517048676732-d65bc937f952'
],

dataverse: [
  '1526378722484-bd91ca387e72',
  '1555949963-aa79dcee981c',
  '1523240795612-9a054b0db644',
  '1571260899304-425eee4c7efc',
  '1519389950473-47ba0277781c',
  '1475721027785-f74eccf877e2'
],

ieeeday: [
  '1511578314322-379afb476865',
  '1587825140708-dfaf72ae4b04',
  '1521737604893-d14cc237f11d',
  '1540575467063-178a50c2df87',
  '1478737270239-2f02b77fc618',
  '1475721027785-f74eccf877e2'
],

cipherquest: [
  '1550751827-4bd374c3f58b',
  '1563986768609-322da13575f3',
  '1573164713988-8665fc963095',
  '1526374965328-7f61d4dc18c5',
  '1531545514256-b1400bc00f31',
  '1555949963-aa79dcee981c'
],

aiethics: [
  '1526378722484-bd91ca387e72',
  '1511578314322-379afb476865',
  '1587825140708-dfaf72ae4b04',
  '1540575467063-178a50c2df87',
  '1523240795612-9a054b0db644',
  '1571260899304-425eee4c7efc'
],
};

const upcomingData = [
    { id: 'nn', badge: 'New Event', statusColor: '#34d399', name: 'Neural Nexus', tagline: 'ML Mastery Bootcamp', category: 'Bootcamp', desc: 'Three weeks of hands-on machine learning — from tensors to transformers — with mentor-led labs and a capstone showcase.', date: '24 Jan – 09 Feb 2026', time: '6:00 PM IST', venue: 'APJ - 11 NSUT, DELHI', chapter: 'Computer Society', deadline: '20 Jan 2026', seats: '42 seats left', status: 'Registration Open', img: U('1555949963-aa79dcee981c', 1200) },
    { id: 'cv', badge: 'Flagship', statusColor: '#34d399', name: 'CircuitVerse', tagline: '24-Hour Hardware Hackathon', category: 'Hackathon', desc: 'Build a working prototype in a single night. Components, mentors and midnight chai provided — bring the idea, we bring the lab.', date: '21 – 22 Feb 2026', time: '9:00 AM IST', venue: 'APJ - 11 NSUT, DELHI', chapter: 'Circuits & Systems', deadline: '15 Feb 2026', seats: '80 team slots', status: 'Registration Open', img: U('1518770660439-4636190af475', 1200) },
    { id: 'wi', badge: 'Opening Soon', statusColor: '#fbbf24', name: 'WIE Ignite', tagline: 'Women in Engineering Summit', category: 'Summit', desc: 'A full day of keynotes, mentorship circles and a project expo celebrating the women shaping tomorrow’s technology.', date: '08 Mar 2026', time: '10:00 AM IST', venue: 'APJ - 11 NSUT, DELHI', chapter: 'Women in Engineering', deadline: '03 Mar 2026', seats: 'Limited seats', status: 'Opening Soon', img: U('1581091226825-a6a2a5aee158', 1200) }
];

const pastDataRaw = [
    {
  id: "smartsensing",
  name: "Smart Sensing with IoT",
  date: "14–16 July 2025",
  category: "IoT Workshop",
  blurb:
    "A hands-on workshop introducing students to the fundamentals and practical applications of the Internet of Things (IoT).",
  tagline: "Connecting Ideas with Smart Technologies",
  venue: "Incubation and Innovation Foundation (NSUT-IIF), NSUT, Dwarka, Delhi",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["IoT Experts", "Faculty Mentors"],
  highlights: [
    "Hands-on IoT projects",
    "Sensors & Microcontrollers",
    "Prototype development",
    "Practical problem solving",
    "Automation concepts"
  ],
  stats: [
    { v: "3", l: "Days" },
    { v: "100+", l: "Participants" },
    { v: "10+", l: "Hands-on Sessions" },
    { v: "IoT", l: "Projects" }
  ],
  participants: "100+ students"
},

{
  id: "leadershipconclave",
  name: "IEEE Leadership Conclave",
  date: "25 July 2025",
  category: "Leadership Conclave",
  blurb:
    "A leadership conclave focused on fostering global collaboration, innovation, and knowledge sharing within the IEEE community.",
  tagline: "Leading Innovation Together",
  venue: "APJ 11, NSUT Main Campus, Dwarka",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["IEEE Leaders", "Academicians"],
  highlights: [
    "Visionary keynote sessions",
    "Leadership development",
    "Innovation discussions",
    "Global collaboration",
    "IEEE networking"
  ],
  stats: [
    { v: "1", l: "Day" },
    { v: "15+", l: "Speakers" },
    { v: "300+", l: "Participants" },
    { v: "IEEE", l: "Leaders" }
  ],
  participants: "300+ attendees"
},

{
  id: "hilsttp",
  name: "Hardware-In-the-Loop (HIL) STTP",
  date: "28 Jul – 01 Aug 2025",
  category: "Technical Training",
  blurb:
    "A short-term training program focused on Hardware-in-the-Loop simulation, automation, and intelligent control systems.",
  tagline: "Bridging Theory with Real-Time Engineering",
  venue: "Incubation and Innovation Foundation (NSUT-IIF), NSUT, Dwarka, Delhi",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["Industry Experts"],
  highlights: [
    "Real-time simulation",
    "Automation technologies",
    "Smart grids",
    "Electric vehicle applications",
    "Industrial engineering tools"
  ],
  stats: [
    { v: "5", l: "Days" },
    { v: "50+", l: "Participants" },
    { v: "10+", l: "Expert Sessions" },
    { v: "HIL", l: "Training" }
  ],
  participants: "50+ participants"
},

{
  id: "dsaverse",
  name: "DSAVerse",
  date: "16 October 2025",
  category: "Coding Competition",
  blurb:
    "A coding competition focused on strengthening Data Structures & Algorithms and problem-solving skills.",
  tagline: "Code. Compete. Conquer.",
  venue: "Online",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["Industry Experts"],
  highlights: [
    "Competitive coding contest",
    "DSA challenges",
    "Problem-solving sessions",
    "Industry insights",
    "Logical thinking"
  ],
  stats: [
    { v: "1", l: "Day" },
    { v: "500+", l: "Participants" },
    { v: "4", l: "Challenge Rounds" },
    { v: "DSA", l: "Focus" }
  ],
  participants: "500+ coders"
},
    
  {
  id: "dataverse",
  name: "DataVerse",
  date: "18 October 2025",
  category: "Data Science Competition",
  blurb:
    "A data science competition focused on applying machine learning and analytics to solve real-world problems.",
  tagline: "Transform Data into Intelligence",
  venue: "Online",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["Data Science Mentors"],
  highlights: [
    "Machine Learning challenges",
    "Predictive modeling",
    "Real-world datasets",
    "Analytics workflow",
    "AI-driven solutions"
  ],
  stats: [
    { v: "1", l: "Day" },
    { v: "400+", l: "Participants" },
    { v: "5", l: "Challenge Tracks" },
    { v: "ML", l: "Projects" }
  ],
  participants: "400+ participants"
},

{
  id: "ieeeday",
  name: "IEEE Day 2025",
  date: "7 October 2025",
  category: "IEEE Celebration",
  blurb:
    "A celebration of IEEE Day promoting innovation, collaboration, and technology for a better tomorrow.",
  tagline: "Leveraging Technology for a Better Tomorrow",
  venue: "NSUT Campus",
  organisers: ["IEEE NSUT"],
  sponsors: ["IEEE"],
  guests: ["Faculty", "Industry Speakers"],
  highlights: [
    "Technical competitions",
    "Expert speaker sessions",
    "Interactive activities",
    "Networking opportunities",
    "IEEE community celebration"
  ],
  stats: [
    { v: "1", l: "Day" },
    { v: "500+", l: "Participants" },
    { v: "10+", l: "Activities" },
    { v: "IEEE", l: "Community" }
  ],
  participants: "500+ attendees"
},

{
  id: "cipherquest",
  name: "Cipher Quest",
  date: "4 November 2025",
  category: "National Technical Competition",
  blurb:
    "A national-level competition combining logical reasoning, teamwork, and technical problem-solving through immersive challenges.",
  tagline: "Think. Solve. Escape.",
  venue: "NSUT Campus",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["Technical Mentors"],
  highlights: [
    "Escape room challenges",
    "Logic puzzles",
    "Circuit challenges",
    "Team-based competition",
    "Technical problem solving"
  ],
  stats: [
    { v: "30", l: "Teams" },
    { v: "1", l: "Day" },
    { v: "5+", l: "Challenge Rounds" },
    { v: "National", l: "Level" }
  ],
  participants: "30 Teams"
},

{
  id: "aiethics",
  name: "AI: Ethics & Security Conclave",
  date: "26–27 January 2026",
  category: "AI Conclave",
  blurb:
    "A conclave exploring the ethical, legal, governance, and cybersecurity aspects of Artificial Intelligence.",
  tagline: "Responsible AI for Humanity",
  venue: "APJ 11, NSUT",
  organisers: ["IEEE NSUT"],
  sponsors: [],
  guests: ["AI Researchers", "Cybersecurity Experts"],
  highlights: [
    "Responsible AI discussions",
    "Cybersecurity sessions",
    "Keynote talks",
    "Ethics workshops",
    "Interdisciplinary dialogue"
  ],
  stats: [
    { v: "2", l: "Days" },
    { v: "20+", l: "Expert Sessions" },
    { v: "500+", l: "Participants" },
    { v: "AI", l: "Focus" }
  ],
  participants: "500+ attendees"
}
]; 

const pastData = pastDataRaw.map((ev, i) => {
    const pool = (POOLS[ev.id] || []).map((id) => U(id));
    const e2 = { ...ev, isPast: true, img: pool[0], imgWide: U(POOLS[ev.id][0], 1600), pool, tiles: {} as any };
    e2.tiles = mkTiles(e2, i * 13 + 5);
    return e2;
});

const INFINITE_PAST_DATA = Array(15).fill(pastData).flat();

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function LatestEventsRedesign() {
    const [route, setRoute] = useState<'events' | 'album'>('events');
    const [upIndex, setUpIndex] = useState(0);
    const initialArchiveIndex = Math.floor(INFINITE_PAST_DATA.length / 2);
    const [archiveIndex, setArchiveIndex] = useState(initialArchiveIndex);
    const archiveIndexRef = useRef(initialArchiveIndex);
    const [isArchiveAutoScrolling, setIsArchiveAutoScrolling] = useState(true);
    const isArchiveAutoScrollingRef = useRef(true);
    const archiveTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [modalId, setModalId] = useState<string | null>(null);
    const [modalHeroImg, setModalHeroImg] = useState<string | null>(null);
    const [albumId, setAlbumId] = useState<string | null>(null);
    const [lightbox, setLightbox] = useState<{ items: any[], index: number, label: string } | null>(null);
    const [toast, setToast] = useState<string | null>(null);

    const bannerHoverRef = useRef(false);
    const archiveHoverRef = useRef(false);
    const archiveTrackRef = useRef<HTMLDivElement>(null);

    // rAF-based auto-scroll refs
    const scrollPosRef = useRef(initialArchiveIndex);
    const rafIdRef = useRef<number>(0);
    const tweenRef = useRef<{ from: number; to: number; start: number; duration: number } | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -((y - centerY) / centerY) * 4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        cardRef.current.style.setProperty('--tilt-x', `${rotateX}deg`);
        cardRef.current.style.setProperty('--tilt-y', `${rotateY}deg`);
    };

    const handleCardMouseLeave = () => {
        bannerHoverRef.current = false;
    };

    const handleCardMouseEnter = () => {
        bannerHoverRef.current = true;
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (route !== 'events' || modalId != null || lightbox != null || bannerHoverRef.current) return;
            setUpIndex((prev) => (prev + 1) % upcomingData.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [route, modalId, lightbox]);

    // rAF-based archive carousel auto-scroll
    const CARD_EXPR = 'clamp(240px, 26vw, 340px)';
    const GAP_EXPR = 'clamp(14px, 2vw, 24px)';
    const SCROLL_SPEED = 1 / 2800; // cards per ms (~1 card every 2.8s)

    const applyTrackTransform = useCallback((pos: number) => {
        const track = archiveTrackRef.current;
        if (track) {
            track.style.transform = `translateX(calc(-${pos} * (${CARD_EXPR} + ${GAP_EXPR}) - (${CARD_EXPR} / 2)))`;
        }
    }, []);

    useEffect(() => {
        let lastTime = 0;

        const animate = (now: number) => {
            if (lastTime === 0) { lastTime = now; }
            const dt = Math.min(now - lastTime, 100); // cap dt to avoid jumps after tab switch
            lastTime = now;

            // Handle tween animation (manual nav)
            const tw = tweenRef.current;
            if (tw) {
                const elapsed = now - tw.start;
                const progress = Math.min(elapsed / tw.duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                scrollPosRef.current = tw.from + (tw.to - tw.from) * eased;
                if (progress >= 1) {
                    scrollPosRef.current = tw.to;
                    tweenRef.current = null;
                }
            } else if (
                !archiveHoverRef.current &&
                isArchiveAutoScrollingRef.current &&
                route === 'events' && modalId == null && lightbox == null
            ) {
                // Auto-scroll: advance position
                scrollPosRef.current += SCROLL_SPEED * dt;
            }

            // Silent reset for infinite loop (no React re-render needed)
            if (scrollPosRef.current > 90) {
                scrollPosRef.current -= pastData.length * 4;
            } else if (scrollPosRef.current < 30) {
                scrollPosRef.current += pastData.length * 4;
            }

            // Apply transform directly to DOM
            applyTrackTransform(scrollPosRef.current);

            // Sync archiveIndex state for dot indicator (only when integer changes)
            const nearestIndex = Math.round(scrollPosRef.current);
            if (nearestIndex !== archiveIndexRef.current) {
                archiveIndexRef.current = nearestIndex;
                setArchiveIndex(nearestIndex);
            }

            rafIdRef.current = requestAnimationFrame(animate);
        };

        rafIdRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafIdRef.current);
    }, [route, modalId, lightbox, applyTrackTransform]);

    useEffect(() => {
        if (modalId || lightbox) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [modalId, lightbox]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (lightbox) setLightbox(null);
                else if (modalId) setModalId(null);
                else if (route === 'album') setRoute('events');
            }
            if (lightbox) {
                if (e.key === 'ArrowRight') lbNext();
                if (e.key === 'ArrowLeft') lbPrev();
            } else if (route === 'events' && !modalId) {
                if (e.key === 'ArrowRight') next();
                if (e.key === 'ArrowLeft') prev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox, route, modalId]);

    const triggerToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2600);
    };
    const next = () => setUpIndex((prev) => (prev + 1) % upcomingData.length);
    const prev = () => setUpIndex((prev) => (prev - 1 + upcomingData.length) % upcomingData.length);

    const handleArchiveInteraction = () => {
        setIsArchiveAutoScrolling(false);
        isArchiveAutoScrollingRef.current = false;
        if (archiveTimerRef.current) clearTimeout(archiveTimerRef.current);
        archiveTimerRef.current = setTimeout(() => {
            setIsArchiveAutoScrolling(true);
            isArchiveAutoScrollingRef.current = true;
        }, 5000);
    };

    const tweenToIndex = (targetIndex: number) => {
        tweenRef.current = {
            from: scrollPosRef.current,
            to: targetIndex,
            start: performance.now(),
            duration: 300
        };
        archiveIndexRef.current = targetIndex;
        setArchiveIndex(targetIndex);
    };

    const jumpToArchiveDot = (targetDot: number) => {
        handleArchiveInteraction();
        const currentPos = Math.round(scrollPosRef.current);
        const currentDot = ((currentPos % pastData.length) + pastData.length) % pastData.length;
        let diff = targetDot - currentDot;
        if (diff > pastData.length / 2) diff -= pastData.length;
        if (diff < -pastData.length / 2) diff += pastData.length;
        tweenToIndex(currentPos + diff);
    };
    const nextArchive = () => {
        handleArchiveInteraction();
        tweenToIndex(Math.round(scrollPosRef.current) + 1);
    };
    const prevArchive = () => {
        handleArchiveInteraction();
        tweenToIndex(Math.round(scrollPosRef.current) - 1);
    };

    const lbNext = useCallback(() => {
        setLightbox((s) => s ? { ...s, index: (s.index + 1) % s.items.length } : null);
    }, []);
    const lbPrev = useCallback(() => {
        setLightbox((s) => s ? { ...s, index: (s.index - 1 + s.items.length) % s.items.length } : null);
    }, []);

    const getEventById = (id: string | null) => {
        if (!id) return null;
        return [...upcomingData, ...pastData].find(e => e.id === id) || null;
    };

    const marqueeState = (modalId != null || lightbox != null || route !== 'events') ? 'paused' : 'running';
    const activeModal = getEventById(modalId);
    const activeAlbum = getEventById(albumId) as any;

    const PrimaryButton = ({ onClick, children, className = "" }: any) => (
        <button onClick={onClick} className={className} style={{ padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px)', borderRadius: '8px', background: '#00bfff', color: '#000', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </button>
    );

    const SecondaryButton = ({ onClick, children, className = "" }: any) => (
        <button onClick={onClick} className={className} style={{ padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px)', borderRadius: '8px', background: 'transparent', color: '#fff', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </button>
    );

    return (
        <div style={{ position: "relative", minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes ieeeMarquee { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(calc(-100% - 22px), 0, 0); } }
        .ieee-marquee-container:hover .ieee-marquee-track { animation-play-state: paused !important; }
        .ieee-hover-border:hover { border-color: #00bfff !important; }
        .ieee-hover-bg:hover { background: rgba(255,255,255,0.1) !important; }

        /* Global Card Scaler — Desktop default */
        .ieee-card-scaler { transform: scale(0.90); transform-origin: top center; margin-bottom: -40px; }

        /* Responsive Card Inner Layout */
        .ieee-card-inner { display: flex; flex-wrap: wrap; align-items: stretch; }
        .ieee-card-text-panel { flex: 0.4 1 340px; min-width: min(340px, 100%); padding: clamp(24px, 3.5vw, 48px); display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2; background: #0a0c10; }
        .ieee-card-poster-panel { flex: 1 1 700px; min-width: min(320px, 100%); position: relative; min-height: 320px; overflow: hidden; }

        /* Responsive Modal Layout */
        .ieee-modal-inner { position: relative; width: min(860px, 92vw); max-height: 88vh; overflow: hidden; display: flex; flex-direction: row; flex-wrap: wrap; }
        .ieee-modal-poster-panel { flex: 1 1 320px; min-width: min(280px, 100%); position: relative; min-height: 280px; overflow: hidden; }
        .ieee-modal-text-panel { flex: 0.4 1 340px; min-width: min(320px, 100%); max-height: 88vh; overflow-y: auto; padding: clamp(24px, 3.5vw, 48px); display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2; background: #0a0c10; scrollbar-width: thin; scrollbar-color: rgba(0,191,255,0.4) rgba(255,255,255,0.05); }

        /* Premium Smooth Image Blending */
        .ieee-image-blend {
          background: linear-gradient(90deg, #0a0c10 0%, rgba(10,12,16,0.95) 8%, rgba(10,12,16,0.6) 20%, rgba(10,12,16,0.1) 35%, transparent 50%), radial-gradient(circle at 100% 50%, transparent 50%, rgba(10,12,16,0.5) 100%);
        }
        .ieee-modal-image-blend {
          background: linear-gradient(270deg, #0a0c10 0%, rgba(10,12,16,0.95) 8%, rgba(10,12,16,0.6) 20%, rgba(10,12,16,0.1) 35%, transparent 50%);
        }

        /* ===== TABLET (769px – 1024px) ===== */
        @media (max-width: 1024px) {
          .ieee-card-scaler { transform: scale(0.95); margin-bottom: -20px; }
          .ieee-card-text-panel { flex: 0.5 1 280px; min-width: min(280px, 100%); }
          .ieee-card-poster-panel { flex: 1 1 400px; min-width: min(280px, 100%); min-height: 260px; }
          .ieee-modal-inner { width: min(800px, 94vw); max-height: 88vh; }
          .ieee-modal-poster-panel { min-height: 240px; }
          .ieee-modal-text-panel { max-height: 88vh; }
        }

        /* ===== MOBILE (≤768px) ===== */
        @media (max-width: 768px) {
          .ieee-card-scaler { transform: none; margin-bottom: 0; }
          .ieee-card-inner { flex-direction: column-reverse; }
          .ieee-card-text-panel { flex: 1 1 100%; min-width: 100%; padding: clamp(18px, 5vw, 32px); }
          .ieee-card-poster-panel { flex: 1 1 100%; min-width: 100%; min-height: clamp(180px, 50vw, 280px); }
          .ieee-image-blend {
            background: linear-gradient(0deg, #0a0c10 0%, rgba(10,12,16,0.95) 8%, rgba(10,12,16,0.6) 20%, rgba(10,12,16,0.1) 35%, transparent 50%), radial-gradient(circle at 50% 100%, transparent 50%, rgba(10,12,16,0.5) 100%);
          }
          .ieee-modal-image-blend {
            background: linear-gradient(0deg, #0a0c10 0%, rgba(10,12,16,0.95) 8%, rgba(10,12,16,0.6) 20%, rgba(10,12,16,0.1) 35%, transparent 50%);
          }
          .ieee-archive-card[data-tier="spotlight"] .ieee-archive-card-meta { opacity: 1; transform: translateY(0); }
          .ieee-modal-inner { flex-direction: column; flex-wrap: nowrap; max-height: 90vh; overflow-y: auto; overflow-x: hidden; width: min(860px, 96vw); scrollbar-width: thin; scrollbar-color: rgba(0,191,255,0.4) rgba(255,255,255,0.05); }
          .ieee-modal-poster-panel { flex: 0 0 auto; min-height: clamp(160px, 40vw, 240px); max-height: 35vh; min-width: 100%; }
          .ieee-modal-text-panel { flex: 0 0 auto; min-width: 100%; min-height: 0; max-height: none; overflow-y: visible; padding: clamp(18px, 5vw, 32px); }
        }

        /* ===== SMALL MOBILE (≤480px) ===== */
        @media (max-width: 480px) {
          .ieee-card-poster-panel { min-height: clamp(150px, 45vw, 220px); }
          .ieee-modal-inner { max-height: 92vh; width: min(860px, 98vw); }
          .ieee-modal-poster-panel { min-height: clamp(120px, 30vw, 180px); max-height: 28vh; }
          .ieee-modal-text-panel { padding: clamp(16px, 4vw, 28px); }
        }

        /* ===== ULTRA-SMALL MOBILE (≤360px) ===== */
        @media (max-width: 360px) {
          .ieee-modal-inner { width: 98vw; max-height: 94vh; }
          .ieee-modal-poster-panel { min-height: clamp(100px, 28vw, 160px); max-height: 25vh; }
          .ieee-modal-text-panel { padding: clamp(12px, 4vw, 18px); }
        }
        
        .ieee-custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .ieee-custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .ieee-custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 191, 255, 0.4); border-radius: 4px; }
        .ieee-custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 191, 255, 0.8); }

        /* Modal scrollbar theming (WebKit) */
        .ieee-modal-inner::-webkit-scrollbar,
        .ieee-modal-text-panel::-webkit-scrollbar { width: 5px; }
        .ieee-modal-inner::-webkit-scrollbar-track,
        .ieee-modal-text-panel::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .ieee-modal-inner::-webkit-scrollbar-thumb,
        .ieee-modal-text-panel::-webkit-scrollbar-thumb { background: rgba(0, 191, 255, 0.35); border-radius: 4px; }
        .ieee-modal-inner::-webkit-scrollbar-thumb:hover,
        .ieee-modal-text-panel::-webkit-scrollbar-thumb:hover { background: rgba(0, 191, 255, 0.7); }

        /* Responsive Grid for Details & Stats */
        .ieee-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 480px) {
          .ieee-info-grid {
            grid-template-columns: 1fr;
          }
        }

        /* 3D Main Card CSS */
        .ieee-3d-card {
          border: 1px solid #181c2f;
          box-shadow: 0 0 24px 4px rgba(99,102,241,0.08), 0 0 16px 0 #181c2f;
          transform: rotateX(0deg) rotateY(0deg) scale(1);
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ieee-3d-card:hover {
          border-color: rgba(0, 191, 255, 0.45);
          box-shadow: 0 25px 50px -12px rgba(29, 78, 216, 0.25), 0 0 40px 0 rgba(0, 191, 255, 0.15), inset 0 0 24px rgba(0, 191, 255, 0.06);
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(1.012);
          transition: transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .ieee-3d-spotlight {
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 191, 255, 0.08), transparent 60%);
        }
        .ieee-3d-card:hover .ieee-3d-spotlight {
          opacity: 1;
        }

        .ieee-3d-glow {
          opacity: 0;
          transform: translate(0px, 0px);
          transition: transform 0.5s ease, opacity 0.4s ease;
          background: radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.25) 0%, rgba(29, 78, 216, 0.15) 45%, transparent 70%);
        }
        .ieee-3d-card:hover .ieee-3d-glow {
          opacity: 1;
          transform: translate(calc(var(--tilt-y, 0deg) * -1px), calc(var(--tilt-x, 0deg) * 1px));
        }

        /* Archive Spotlight Carousel — Tier-based depth system */
        .ieee-archive-card {
          transition: transform .6s cubic-bezier(0.25, 1, 0.5, 1), opacity .6s ease, box-shadow .6s ease, border-color .3s ease;
          transform: scale(0.62) translateZ(0);
          opacity: 0.35;
          will-change: transform, opacity;
        }
        .ieee-archive-card:hover {
          border-color: rgba(0, 191, 255, 0.5) !important;
        }

        /* Spotlight — center card */
        .ieee-archive-card[data-tier="spotlight"] {
          transform: scale(1) translateY(-6px) translateZ(0);
          opacity: 1;
          border-color: rgba(0, 191, 255, 0.3) !important;
          box-shadow: 0 20px 60px -10px rgba(0, 191, 255, 0.25), 0 0 40px rgba(0, 191, 255, 0.08) !important;
        }
        .ieee-archive-card[data-tier="spotlight"]:hover {
          transform: scale(1.03) translateY(-10px) translateZ(0);
          box-shadow: 0 25px 70px -10px rgba(0, 191, 255, 0.35), 0 0 50px rgba(0, 191, 255, 0.12) !important;
        }

        /* Adjacent — ±1 from center */
        .ieee-archive-card[data-tier="adjacent"] {
          transform: scale(0.82) translateZ(0);
          opacity: 0.65;
        }
        .ieee-archive-card[data-tier="adjacent"]:hover {
          transform: scale(0.87) translateY(-4px) translateZ(0);
          opacity: 0.85;
        }

        /* Distant — ±2+ from center */
        .ieee-archive-card[data-tier="distant"] {
          transform: scale(0.62) translateZ(0);
          opacity: 0.35;
        }
        .ieee-archive-card[data-tier="distant"]:hover {
          transform: scale(0.67) translateY(-3px) translateZ(0);
          opacity: 0.55;
        }

        .ieee-archive-card-img {
          transition: transform .5s ease, filter .5s ease;
          transform: scale(1.02);
        }
        .ieee-archive-card:hover .ieee-archive-card-img {
          transform: scale(1.1);
        }

        /* Glassmorphism meta overlay — visible only on spotlight */
        .ieee-archive-card-meta {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity .5s ease .1s, transform .5s ease .1s;
          pointer-events: none;
        }
        .ieee-archive-card[data-tier="spotlight"] .ieee-archive-card-meta {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card name — sizing adapts to tier */
        .ieee-archive-card-name {
          transition: font-size .5s ease;
        }
        .ieee-archive-card[data-tier="spotlight"] .ieee-archive-card-name {
          font-size: clamp(18px, 2vw, 24px) !important;
        }

        /* Category pill */
        .ieee-archive-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(0, 191, 255, 0.12);
          border: 1px solid rgba(0, 191, 255, 0.2);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .04em;
          color: #67e8f9;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity .4s ease;
        }
        .ieee-archive-card[data-tier="spotlight"] .ieee-archive-cat-pill,
        .ieee-archive-card[data-tier="adjacent"] .ieee-archive-cat-pill {
          opacity: 1;
        }

        /* Progress bar */
        .ieee-archive-progress-track {
          position: relative;
          width: clamp(120px, 16vw, 200px);
          height: 3px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .ieee-archive-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, #00bfff, #06b6d4);
          box-shadow: 0 0 8px rgba(0, 191, 255, 0.5);
          transition: transform .4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Modal Close Button — always visible, responsive */
        .ieee-modal-close-btn {
          position: absolute;
          top: clamp(14px, 2.5vw, 18px);
          right: clamp(14px, 2.5vw, 18px);
          z-index: 10;
          width: clamp(32px, 4vw, 40px);
          height: clamp(32px, 4vw, 40px);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(0,0,0,.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease;
          flex-shrink: 0;
        }
        .ieee-modal-close-btn:hover {
          background: rgba(255,255,255,.15);
          border-color: rgba(0, 191, 255, 0.5);
        }
      `}} />

            {/* =========================================
          ROUTE: EVENTS MAIN PAGE
          ========================================= */}
            {route === 'events' && (
                <main style={{ position: "relative" }}>

                    <section style={{ maxWidth: "min(1240px, 94vw)", margin: "0 auto", padding: "clamp(32px,6vw,72px) clamp(16px,4vw,40px) 0" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(24px,4vw,40px)", gap: "clamp(10px, 2vw, 16px)" }}>
                            <div>
                                <h1 style={{ margin: 0, fontSize: "clamp(36px,5.5vw,64px)", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", fontFamily: "var(--font-geist-sans)" }}>Upcoming Events</h1>
                                <div style={{ margin: "clamp(6px, 1vw, 10px) auto 0", fontSize: "clamp(19px,1.3vw,22px)", fontWeight: 500, color: "#9ca3af" }}>Next Big Thing !!!!</div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.5vw, 12px)", marginTop: "4px" }}>
                                <button onClick={prev} className="ieee-hover-bg" style={{ width: "clamp(32px, 5vw, 40px)", height: "clamp(32px, 5vw, 40px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.15)", background: "transparent", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all .2s ease" }}><ChevronLeft size={18} /></button>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    {upcomingData.map((ev, i) => (
                                        <button key={ev.id} onClick={() => setUpIndex(i)} aria-label={`Show ${ev.name}`} style={{ height: "8px", width: "8px", borderRadius: "50%", border: "none", padding: 0, cursor: "pointer", background: i === upIndex ? "#00bfff" : "rgba(255,255,255,.25)", transition: "background .3s ease" }} />
                                    ))}
                                </div>
                                <button onClick={next} className="ieee-hover-bg" style={{ width: "clamp(32px, 5vw, 40px)", height: "clamp(32px, 5vw, 40px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.15)", background: "transparent", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all .2s ease" }}><ChevronRight size={18} /></button>
                            </div>
                        </div>

                        <div className="ieee-card-scaler" style={{ position: "relative", perspective: "clamp(800px, 100vw, 1500px)" }}>
                            {/* Border container for Carousel */}
                            <div
                                ref={cardRef}
                                onMouseMove={handleCardMouseMove}
                                onMouseEnter={handleCardMouseEnter}
                                onMouseLeave={handleCardMouseLeave}
                                className="ieee-3d-card"
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    borderRadius: "clamp(12px, 2vw, 20px)",
                                    background: "#0a0c10",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Dynamic Outer 3D Blue Glow behind the card contents */}
                                <div className="ieee-3d-glow" style={{ position: "absolute", inset: "clamp(-20px, -2vw, -12px)", filter: "blur(30px)", pointerEvents: "none", zIndex: -1 }}></div>

                                {/* Dynamic Blue Spotlight Overlay inside the card */}
                                <div className="ieee-3d-spotlight" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }} />

                                {/* FADED EDGES FIX: Mask applied only to the sliding track container so borders stay solid */}
                                <div style={{
                                    overflow: "hidden", borderRadius: "clamp(12px, 2vw, 20px)",
                                    width: "100%", height: "100%",
                                    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
                                    maskImage: "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)"
                                }}>
                                    {/* SMOOTH TRANSITION: Upgraded to a 0.8s cubic bezier for a much more elegant sliding feel */}
                                    <div style={{ display: "flex", transition: "transform .8s cubic-bezier(0.25, 1, 0.5, 1)", transform: `translateX(-${upIndex * 100}%)` }}>
                                        {upcomingData.map((ev) => (
                                            <div key={ev.id} style={{ flex: "0 0 100%", minWidth: 0 }}>
                                                <div className="ieee-card-inner">

                                                    <div className="ieee-card-text-panel">
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: ev.statusColor }}></span>
                                                            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#00bfff" }}>{ev.badge}</span>
                                                        </div>
                                                        <h2 style={{ margin: "clamp(8px, 1.5vw, 14px) 0 0", fontSize: "clamp(26px,3.2vw,40px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-.02em", fontFamily: "var(--font-geist-sans)" }}>{ev.name}</h2>
                                                        <p style={{ margin: "clamp(8px, 1.2vw, 12px) 0 0", maxWidth: "52ch", fontSize: "clamp(13px,1.3vw,15px)", lineHeight: 1.65, color: "#9ca3af" }}>{ev.desc}</p>

                                                        <div className="ieee-info-grid" style={{ gap: "clamp(10px, 2vw, 16px) clamp(14px, 3vw, 24px)", margin: "clamp(16px, 3vw, 26px) 0 0", padding: "clamp(12px, 2.5vw, 20px) 0", borderTop: "1px solid rgba(255,255,255,.08)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                                                            <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Date</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{ev.date}</div></div>
                                                            <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Time</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{ev.time}</div></div>
                                                            <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Venue</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{ev.venue}</div></div>
                                                            <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Organising Chapter</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{ev.chapter}</div></div>
                                                        </div>

                                                        <div style={{ margin: "clamp(10px, 2vw, 16px) 0 clamp(14px, 2.5vw, 22px)", fontSize: "13px", fontWeight: 500, color: "#9ca3af" }}>Registration closes <span style={{ color: "#e6edf3", fontWeight: 600 }}>{ev.deadline}</span></div>

                                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 1.5vw, 12px)" }}>
                                                            <PrimaryButton onClick={() => triggerToast('Opening registration...')}>Register Now</PrimaryButton>
                                                        </div>

                                                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginTop: "clamp(12px, 2.5vw, 20px)", fontSize: "13px", fontWeight: 500, color: "#9ca3af" }}>
                                                            <span>{ev.seats}</span><span style={{ color: "#3d444d" }}>·</span>
                                                            <span>{ev.status}</span><span style={{ color: "#3d444d" }}>·</span>
                                                            <span>{ev.category}</span>
                                                        </div>
                                                    </div>

                                                    {/* Right Poster */}
                                                    <div className="ieee-card-poster-panel">

                                                        <Image src={ev.img} alt={ev.name} fill unoptimized style={{ objectFit: "cover" }} />

                                                        {/* Refined Smooth Blur Gradient */}
                                                        <div className="ieee-image-blend" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>

                                                        <span style={{ position: "absolute", top: "clamp(10px, 2vw, 16px)", right: "clamp(10px, 2vw, 16px)", padding: "clamp(6px, 1vw, 8px) clamp(12px, 2vw, 20px)", borderRadius: "999px", background: "rgba(0,0,0,.55)", border: "1px solid rgba(255,255,255,.18)", fontSize: "clamp(12px, 1.4vw, 16px)", fontWeight: 800, color: "#e6edf3", backdropFilter: "blur(4px)" }}>{ev.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* EVENT ARCHIVE — SPOTLIGHT CAROUSEL */}
                    <section style={{ position: "relative", padding: "clamp(56px,8vw,100px) 0 clamp(28px,4vw,48px)" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "clamp(24px,4vw,40px)", gap: "clamp(10px, 2vw, 16px)", maxWidth: "min(1240px, 94vw)", margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>
                            <div>
                                <h2 style={{ margin: 0, fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.1, fontWeight: 800, letterSpacing: "-.02em", fontFamily: "var(--font-geist-sans)" }}>Event Archive</h2>
                                <p style={{ margin: "clamp(6px, 1vw, 10px) auto 0", maxWidth: "44ch", fontSize: "clamp(19px,1.3vw,22px)", lineHeight: 1.6, fontWeight: 500, color: "#9ca3af" }}>Explore IEEE NSUT&apos;s legacy of innovation.</p>
                            </div>

                            {/* Controls + Progress Bar */}
                            <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 18px)", marginTop: "8px" }}>
                                <button onClick={prevArchive} className="ieee-hover-bg" style={{ width: "clamp(34px, 4.5vw, 42px)", height: "clamp(34px, 4.5vw, 42px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.04)", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all .2s ease" }}><ChevronLeft size={18} /></button>

                                <div className="ieee-archive-progress-track">
                                    <div className="ieee-archive-progress-fill" style={{ width: `${100 / pastData.length}%`, transform: `translateX(${((archiveIndex % pastData.length) + pastData.length) % pastData.length * 100}%)` }} />
                                </div>

                                <button onClick={nextArchive} className="ieee-hover-bg" style={{ width: "clamp(34px, 4.5vw, 42px)", height: "clamp(34px, 4.5vw, 42px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.04)", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all .2s ease" }}><ChevronRight size={18} /></button>
                            </div>
                        </div>

                        {/* Carousel viewport */}
                        <div
                            onMouseEnter={() => { archiveHoverRef.current = true; }}
                            onMouseLeave={() => { archiveHoverRef.current = false; }}
                            style={{ position: "relative", marginTop: "clamp(24px,4vw,40px)", overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%)", maskImage: "linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%)" }}
                        >
                            <div
                                ref={archiveTrackRef}
                                style={{
                                    display: "flex",
                                    gap: "clamp(14px, 2vw, 24px)",
                                    width: "max-content",
                                    padding: "clamp(20px, 4vw, 40px) 0",
                                    marginLeft: "50%"
                                }}
                            >
                                {INFINITE_PAST_DATA.map((ev, i) => {
                                    const distance = Math.abs(i - archiveIndex);
                                    const tier = distance === 0 ? 'spotlight' : distance <= 1 ? 'adjacent' : 'distant';
                                    return (
                                        <div
                                            key={`${ev.id}-${i}`}
                                            role="button"
                                            tabIndex={0}
                                            data-tier={tier}
                                            onClick={() => { setModalId(ev.id); setModalHeroImg(null); }}
                                            className="ieee-archive-card"
                                            style={{
                                                flex: "0 0 auto",
                                                width: "clamp(240px, 26vw, 340px)",
                                                textAlign: "left",
                                                padding: 0,
                                                borderRadius: "clamp(10px, 1.8vw, 18px)",
                                                border: "1px solid rgba(255,255,255,.1)",
                                                background: "#0a0c10",
                                                cursor: "pointer",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                                                <Image src={ev.img} alt={ev.name} fill unoptimized className="ieee-archive-card-img" style={{ objectFit: "cover" }} />

                                                {/* Gradient overlay */}
                                                <div style={{ pointerEvents: "none", position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.08) 70%, transparent 100%)" }}>

                                                    {/* Card content overlay */}
                                                    <div style={{ padding: "clamp(12px, 2vw, 20px) clamp(12px, 2vw, 18px) clamp(10px, 1.5vw, 16px)" }}>
                                                        {/* Category pill */}
                                                        <span className="ieee-archive-cat-pill">{ev.category}</span>

                                                        {/* Event name */}
                                                        <div className="ieee-archive-card-name" style={{ marginTop: "8px", fontSize: "clamp(14px, 1.6vw, 18px)", fontWeight: 700, color: "#fff", fontFamily: "var(--font-geist-sans)", lineHeight: 1.2 }}>{ev.name}</div>

                                                        {/* Meta info — glassmorphism bar (spotlight only via CSS) */}
                                                        <div className="ieee-archive-card-meta" style={{
                                                            marginTop: "10px",
                                                            padding: "10px 12px",
                                                            borderRadius: "10px",
                                                            background: "rgba(255,255,255,0.06)",
                                                            border: "1px solid rgba(255,255,255,0.08)",
                                                            backdropFilter: "blur(12px)",
                                                            WebkitBackdropFilter: "blur(12px)",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "6px"
                                                        }}>
                                                            <div style={{ fontSize: "12.5px", fontWeight: 500, color: "#c9d1d9", lineHeight: 1.5 }}>{ev.tagline}</div>
                                                            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                                                                <span style={{ fontSize: "11px", fontWeight: 600, color: "#9ca3af" }}>{ev.date}</span>
                                                                <span style={{ fontSize: "11px", color: "#3d444d" }}>·</span>
                                                                <span style={{ fontSize: "11px", fontWeight: 600, color: "#9ca3af" }}>{ev.participants}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>
            )}

            {/* =========================================
          ROUTE: ALBUM VIEW
          ========================================= */}
            {route === 'album' && activeAlbum && (
                <main style={{ position: "relative", maxWidth: "min(1240px, 94vw)", margin: "0 auto", padding: "clamp(24px,5vw,48px) clamp(16px,4vw,40px) clamp(60px,8vw,100px)" }}>
                    <button onClick={() => setRoute('events')} className="ieee-hover-bg" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "clamp(6px, 1vw, 9px) clamp(10px, 2vw, 16px)", borderRadius: "999px", border: "1px solid rgba(255,255,255,.15)", background: "transparent", color: "#e6edf3", cursor: "pointer", fontSize: "13px", fontWeight: 600, transition: "all .2s ease" }}>
                        <ArrowLeft size={16} /> Back to Events
                    </button>

                    <div style={{ position: "relative", marginTop: "clamp(12px, 2.5vw, 20px)", borderRadius: "clamp(12px, 2vw, 20px)", overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", minHeight: "clamp(200px, 35vw, 300px)", display: "flex", alignItems: "flex-end" }}>
                        <Image src={activeAlbum.imgWide} alt="" fill unoptimized style={{ objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg,rgba(0,0,0,.88) 8%,rgba(0,0,0,.25) 55%,rgba(0,0,0,.1))" }}></div>
                        <div style={{ position: "relative", padding: "clamp(24px,4vw,44px)", width: "100%" }}>
                            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#00bfff" }}>Event Album · {activeAlbum.category}</div>
                            <h1 style={{ margin: "clamp(8px, 1.2vw, 12px) 0 0", fontSize: "clamp(26px,4vw,44px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-.02em" }}>{activeAlbum.name}</h1>
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginTop: "clamp(8px, 1.2vw, 12px)", fontSize: "13px", fontWeight: 500, color: "#c9d1d9" }}>
                                <span>{activeAlbum.date}</span><span style={{ color: "#6e7681" }}>·</span>
                                <span>{activeAlbum.venue}</span><span style={{ color: "#6e7681" }}>·</span>
                                <span>{activeAlbum.participants}</span>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 clamp(16px, 3vw, 28px)", marginTop: "clamp(10px, 2vw, 18px)" }}>
                                {activeAlbum.stats?.map((st: any, i: number) => (
                                    <div key={i} style={{ padding: "6px 0" }}><span style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 800 }}>{st.v}</span><span style={{ marginLeft: "7px", fontSize: "12px", fontWeight: 500, color: "#9ca3af" }}>{st.l}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <section style={{ marginTop: "clamp(36px,5vw,60px)" }}>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "clamp(10px, 2vw, 16px)", flexWrap: "wrap", marginBottom: "clamp(10px, 2vw, 18px)" }}>
                            <h2 style={{ margin: 0, fontSize: "clamp(19px,2.3vw,24px)", fontWeight: 800, letterSpacing: "-.01em" }}>Photo Gallery</h2>
                            <span style={{ fontSize: "12px", fontWeight: 500, color: "#6e7681" }}>Tap any photo to open the viewer</span>
                        </div>
                        <div style={{ columnWidth: "clamp(160px, 22vw, 250px)", columnGap: "clamp(8px, 1.2vw, 12px)" }}>
                            {activeAlbum.tiles.photos.map((tile: any, i: number) => (
                                <button key={i} onClick={() => setLightbox({ items: activeAlbum.tiles.photos, index: i, label: "Gallery" })} className="ieee-hover-border" style={{ display: "inline-block", width: "100%", margin: "0 0 clamp(8px, 1.2vw, 12px)", padding: 0, border: "1px solid rgba(255,255,255,.1)", borderRadius: "clamp(8px, 1.2vw, 12px)", overflow: "hidden", cursor: "pointer", position: "relative", background: "#0a0c10", breakInside: "avoid", aspectRatio: tile.ar, transition: "border-color .25s ease" }}>
                                    <Image src={tile.img} alt="Gallery photo" fill unoptimized style={{ objectFit: "cover" }} />
                                </button>
                            ))}
                        </div>
                    </section>

                    <section style={{ marginTop: "clamp(36px,5vw,60px)" }}>
                        <h2 style={{ margin: "0 0 clamp(10px, 2vw, 18px)", fontSize: "clamp(19px,2.3vw,24px)", fontWeight: 800, letterSpacing: "-.01em" }}>Videos</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(clamp(180px, 24vw, 260px),100%),1fr))", gap: "clamp(8px, 1.2vw, 12px)" }}>
                            {activeAlbum.tiles.videos.map((tile: any, i: number) => (
                                <button key={i} onClick={() => triggerToast('Opening video player...')} className="ieee-hover-border" style={{ position: "relative", aspectRatio: "16/10", border: "1px solid rgba(255,255,255,.1)", borderRadius: "clamp(8px, 1.2vw, 12px)", overflow: "hidden", cursor: "pointer", padding: 0, background: "#0a0c10", transition: "border-color .25s ease" }}>
                                    <Image src={tile.img} alt="Video thumbnail" fill unoptimized style={{ objectFit: "cover", filter: "brightness(.78)" }} />
                                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ width: "clamp(36px, 5vw, 50px)", height: "clamp(36px, 5vw, 50px)", borderRadius: "50%", background: "rgba(0,0,0,.55)", border: "1px solid rgba(255,255,255,.4)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Play size={20} fill="currentColor" /></span>
                                    </span>
                                    <span style={{ position: "absolute", left: "clamp(8px, 1.2vw, 12px)", bottom: "clamp(8px, 1.2vw, 12px)", padding: "4px 10px", borderRadius: "999px", background: "rgba(0,0,0,.55)", fontSize: "10px", fontWeight: 600 }}>Aftermovie</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section style={{ marginTop: "clamp(36px,5vw,60px)", display: "flex", flexWrap: "wrap", gap: "clamp(20px,3vw,32px)" }}>
                        <div style={{ flex: "1 1 300px", minWidth: "min(300px,100%)" }}>
                            <h2 style={{ margin: "0 0 clamp(10px, 2vw, 18px)", fontSize: "clamp(19px,2.3vw,24px)", fontWeight: 800, fontFamily: "var(--font-geist-sans)" }}>Highlights</h2>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {activeAlbum.highlights?.map((h: string, i: number) => (
                                    <div key={i} style={{ display: "flex", gap: "11px", alignItems: "flex-start", padding: "clamp(8px, 1.5vw, 13px) 2px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                                        <span style={{ color: "#00bfff", marginTop: "3px", flex: "none" }}><ChevronRight size={14} /></span>
                                        <span style={{ fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 500, color: "#c9d1d9" }}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: "1.4 1 380px", minWidth: "min(320px,100%)" }}>
                            <h2 style={{ margin: "0 0 clamp(10px, 2vw, 18px)", fontSize: "clamp(19px,2.3vw,24px)", fontWeight: 800, fontFamily: "var(--font-geist-sans)" }}>Best Moments</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(clamp(100px, 14vw, 150px),100%),1fr))", gap: "clamp(6px, 1vw, 10px)" }}>
                                {activeAlbum.tiles.moments.map((tile: any, i: number) => (
                                    <button key={i} onClick={() => setLightbox({ items: activeAlbum.tiles.moments, index: i, label: "Best moment" })} className="ieee-hover-border" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(255,255,255,.1)", borderRadius: "clamp(6px, 1vw, 10px)", overflow: "hidden", cursor: "pointer", padding: 0, background: "#0a0c10" }}>
                                        <Image src={tile.img} alt="Moment" fill unoptimized style={{ objectFit: "cover" }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            )}

            {/* =========================================
          EVENT DETAIL MODAL
          ========================================= */}
            <AnimatePresence>
                {modalId && activeModal && (
                    <div onClick={() => setModalId(null)} role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(8px,2vw,24px)", paddingTop: "clamp(16px, 3vh, 60px)", paddingBottom: "clamp(12px, 2vh, 24px)", background: "rgba(0,0,0,.78)" }}>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="ieee-modal-inner"
                            style={{
                                borderRadius: "clamp(12px, 2vw, 20px)",
                                border: "1px solid rgba(0, 191, 255, 0.45)",
                                background: "#0a0c10",
                                boxShadow: "0 25px 50px -12px rgba(29, 78, 216, 0.25), 0 0 40px 0 rgba(0, 191, 255, 0.15), inset 0 0 24px rgba(0, 191, 255, 0.06)"
                            }}
                        >
                            <button onClick={() => setModalId(null)} className="ieee-modal-close-btn">
                                <X size={18} />
                            </button>

                            {/* Left Poster (Swapped) */}
                            <div className="ieee-modal-poster-panel">
                                <Image key={modalHeroImg || activeModal.img} src={modalHeroImg || activeModal.img} alt={activeModal.name} fill unoptimized style={{ objectFit: "cover" }} />

                                {/* Refined Smooth Blur Gradient */}
                                <div className="ieee-modal-image-blend" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>
                            </div>

                            {/* Right Text Content (Swapped) */}
                            <div className="ieee-modal-text-panel">
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00bfff" }}></span>
                                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#00bfff" }}>{activeModal.category}</span>
                                </div>
                                <h2 style={{ margin: "clamp(8px, 1.5vw, 14px) 0 0", fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-.02em", fontFamily: "var(--font-geist-sans)" }}>{activeModal.name}</h2>
                                <p style={{ margin: "clamp(8px, 1.2vw, 12px) 0 0", maxWidth: "52ch", fontSize: "clamp(13px,1.3vw,14.5px)", lineHeight: 1.65, color: "#9ca3af" }}>{(activeModal as any).blurb || (activeModal as any).desc}</p>

                                <div className="ieee-info-grid" style={{ gap: "clamp(10px, 2vw, 16px) clamp(14px, 3vw, 24px)", margin: "clamp(14px, 2.5vw, 22px) 0 0", padding: "clamp(12px, 2.5vw, 20px) 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                                    <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Date</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{activeModal.date}</div></div>
                                    <div><div style={{ fontSize: "11px", fontWeight: 600, color: "#6e7681" }}>Venue</div><div style={{ marginTop: "6px", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 600, color: "#e6edf3" }}>{activeModal.venue}</div></div>
                                </div>

                                {!(activeModal as any).isPast && (
                                    <>
                                        <div style={{ margin: "clamp(10px, 2vw, 16px) 0 clamp(14px, 2.5vw, 22px)", fontSize: "13px", fontWeight: 500, color: "#9ca3af" }}>Registration closes <span style={{ color: "#e6edf3", fontWeight: 600 }}>{(activeModal as any).deadline}</span></div>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 1.5vw, 12px)" }}>
                                            <PrimaryButton onClick={() => triggerToast('Opening registration...')}>Register Now</PrimaryButton>
                                        </div>
                                    </>
                                )}

                                {(activeModal as any).isPast && (
                                    <>
                                        <div className="ieee-info-grid" style={{ gap: "1px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "clamp(8px, 1.2vw, 12px)", overflow: "hidden", margin: "clamp(10px, 2vw, 18px) 0" }}>
                                            {(activeModal as any).stats?.map((st: any, i: number) => (
                                                <div key={i} style={{ padding: "clamp(8px, 1.5vw, 12px) clamp(8px, 1.5vw, 14px)", background: "#0a0c10" }}>
                                                    <div style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 800, color: "#00bfff" }}>{st.v}</div>
                                                    <div style={{ marginTop: "4px", fontSize: "10.5px", fontWeight: 600, color: "#6e7681", textTransform: "uppercase", letterSpacing: ".05em" }}>{st.l}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: "6px" }}>
                                            <div style={{ fontSize: "11px", fontWeight: 700, color: "#6e7681", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: "8px" }}>Gallery Preview</div>
                                            <div style={{ display: "flex", gap: "8px" }}>
                                                {[activeModal.img, ...((activeModal as any).tiles?.photos?.map((t: any) => t.img) || [])].slice(0, 5).map((imgSrc: string, i: number) => {
                                                    const isActive = modalHeroImg === imgSrc || (!modalHeroImg && i === 0);
                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => setModalHeroImg(imgSrc)}
                                                            className="ieee-hover-bg"
                                                            style={{ position: "relative", flex: 1, aspectRatio: "1/1", borderRadius: "clamp(6px, 1vw, 10px)", overflow: "hidden", border: isActive ? "2px solid #00bfff" : "1px solid rgba(255,255,255,.1)", padding: 0, cursor: "pointer", transition: "all .2s ease" }}
                                                        >
                                                            <Image src={imgSrc} alt="Gallery" fill unoptimized style={{ objectFit: "cover" }} />
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* =========================================
          LIGHTBOX VIEWER
          ========================================= */}
            {lightbox && (
                <div onClick={() => setLightbox(null)} role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(16px,4vw,48px)", background: "rgba(0,0,0,.92)" }}>
                    <button onClick={() => setLightbox(null)} className="ieee-hover-bg" style={{ position: "absolute", top: "clamp(12px, 2vw, 20px)", right: "clamp(12px, 2vw, 20px)", width: "clamp(34px, 5vw, 42px)", height: "clamp(34px, 5vw, 42px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><X size={18} /></button>

                    <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(860px,92vw)", maxHeight: "74vh", aspectRatio: lightbox.items[lightbox.index].ar, borderRadius: "clamp(8px, 1.2vw, 12px)", overflow: "hidden", border: "1px solid rgba(255,255,255,.14)", background: "#0a0c10" }}>
                        <Image src={lightbox.items[lightbox.index].img.replace('w=900', 'w=1600')} alt="Viewer photo" fill unoptimized style={{ objectFit: "cover" }} />
                    </div>

                    <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2.5vw, 20px)", marginTop: "clamp(10px, 2vw, 18px)" }}>
                        <button onClick={lbPrev} className="ieee-hover-bg" style={{ width: "clamp(34px, 5vw, 44px)", height: "clamp(34px, 5vw, 44px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={18} /></button>
                        <span style={{ fontSize: "13px", fontWeight: 500, color: "#9ca3af", minWidth: "min(150px, 40vw)", textAlign: "center" }}>{lightbox.label} — {lightbox.index + 1} / {lightbox.items.length}</span>
                        <button onClick={lbNext} className="ieee-hover-bg" style={{ width: "clamp(34px, 5vw, 44px)", height: "clamp(34px, 5vw, 44px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><ChevronRight size={18} /></button>
                    </div>
                </div>
            )}

            {/* =========================================
          TOAST
          ========================================= */}
            {toast && (
                <div role="status" style={{ position: "fixed", left: "50%", bottom: "clamp(16px, 3vw, 30px)", transform: "translateX(-50%)", zIndex: 400, display: "inline-flex", alignItems: "center", gap: "9px", padding: "clamp(8px, 1.5vw, 12px) clamp(12px, 2.5vw, 20px)", borderRadius: "999px", background: "#101318", border: "1px solid rgba(255,255,255,.15)" }}>
                    <span style={{ color: "#00bfff", display: "inline-flex" }}><ChevronRight size={15} /></span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "#e6edf3" }}>{toast}</span>
                </div>
            )}

        </div>
    );
}

