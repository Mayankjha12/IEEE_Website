"use client";

import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const joinNowLink = "https://docs.google.com/forms/d/e/1FAIpQLScqFjGM-Wm7sQPCdjc7n4SRokKWRUHzYh_7rubpiMV5m-W_ig/viewform";

const tabs = [
  { label: "Home", target: "home", href: "/" },
  { label: "Events", target: "events", href: "/" },
  { label: "About Us", target: "about", href: "/" },
  { label: "Chapters", target: "chapters", href: "/" },
  { label: "Team", target: "team", href: "/team" },
  { label: "", target: "faq", href: "/" },
  { label: "", target: "contact", href: "/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const sectionIds = tabs.map((tab) => tab.target);
  const activeSection = useActiveSection(sectionIds, 85);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Floating Glass Container wrapper */}
      <div className="fixed top-5 left-0 right-0 w-full z-[100] px-4 md:px-8 flex justify-center select-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.19, ease: "easeOut" }}
          className={cn(
            "w-full max-w-8xl flex justify-between items-center px-8 py-4 rounded-[24px] transition-all duration-300",
            " backdrop-blur-xl",
            "border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.18),inset_0_1px_1px_rgba(255,255,255,0.15)]"
          )}
        >
          {/* Logo with Original Animation & Hover Rotation */}
          
          <motion.div
            className="flex flex-col items-start z-10 shrink-0"
            layoutId="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.06, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="IEEE Logo"
              width={100}
              height={68}
              className="ml-1 h-14 w-auto object-contain"
              priority
              
            />
          </motion.div>

          {/* Desktop Nav Links with Staggered Entrance */}
          <div className="flex-1 hidden md:flex justify-center z-10">
            <ul className="flex list-none gap-2 bg-black border border-cyan-500 px-3 py-2 rounded-full backdrop-blur-md items-center">
              {tabs.map((tab, idx) => {
                if (!tab.label) return null;
                const isActive = activeSection === tab.target;
                const isTeamOrExternal = tab.target === "team" || !isHomePage;

                const linkElement = isTeamOrExternal ? (
                  <Link
                    href={tab.href}
                    className={cn(
                      "relative z-10 block px-5 py-2.5 text-[18px] font-semibold rounded-full transition-colors duration-300",
                      isActive ? "text-[#3DBDFF]" : "text-white/80 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </Link>
                ) : (
                  <ScrollLink
                    to={tab.target}
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={500}
                    className={cn(
                      "relative z-10 block px-5 py-2.5 text-[18px] font-semibold rounded-full transition-colors duration-300 cursor-pointer",
                      isActive ? "text-[#3DBDFF]" : "text-white/80 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </ScrollLink>
                );

                return (
                  <motion.li
                    key={tab.label}
                    className="relative"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    onMouseEnter={() => setHoveredTab(tab.label)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    {/* Modern Glass Pill Tracker (Stays Unchanged As Requested) */}
                    {(hoveredTab === tab.label || isActive) && (
                      <motion.span
                        layoutId="nav-pill"
                        className={cn(
                          "absolute inset-0 rounded-full",
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                            : "bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/20 shadow-[0_0_8px_rgba(34,211,238,0.15)]"
                        )}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {linkElement}
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4 z-10 shrink-0">
            <Button
              asChild
              className="p-0 bg-transparent hover:bg-transparent shadow-none h-auto border-none"
            >
              <motion.a
                href={joinNowLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(14,165,233,.45)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={cn(
  "hidden md:inline-flex items-center justify-center bg-sky-500 text-white px-7 py-3 text-lg font-bold rounded-full border border-sky-300/30 shadow-[0_0_18px_rgba(14,165,233,0.35)] cursor-pointer",
  "transition-all duration-300 relative overflow-hidden group hover:bg-sky-400"
)}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Join Now
              </motion.a>
            </Button>

            {/* Glass Mobile Hamburger */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={cn(
                "md:hidden flex flex-col gap-1.5 cursor-pointer p-3 border border-white/10 rounded-xl bg-sky-500 text-white transition-all duration-300"
              )}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-[2.5px] bg-white rounded" />
              <span className="block w-5 h-[2.5px] bg-white rounded" />
              <span className="block w-5 h-[2.5px] bg-white rounded" />
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Nav Overlay Menu & Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blended Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[190]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Right Sliding Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-[#111] z-[200] shadow-2xl flex flex-col border-l border-white/5"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
            >
              {/* Close Button Header */}
              <div className="p-6 border-b border-gray-800 flex justify-end">
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="bg-sky-500 text-white rounded-xl w-12 h-12 text-3xl flex items-center justify-center font-light"
                >
                  &times;
                </motion.button>
              </div>

              {/* Side Staggered Drawer Content Links */}
              <ul className="flex flex-col gap-8 mt-12 px-10 text-white text-xl font-semibold">
                {tabs.map((tab, index) => {
                  if (!tab.label) return null;
                  return (
                    <motion.li
                      key={tab.label}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tab.href.startsWith("/") && tab.target === "team" || !isHomePage ? (
                        <Link
                          href={tab.href}
                          className="hover:text-cyan-400 transition-colors duration-300 block py-1"
                          onClick={() => setMenuOpen(false)}
                        >
                          {tab.label}
                        </Link>
                      ) : (
                        <ScrollLink
                          to={tab.target}
                          spy={true}
                          smooth={true}
                          offset={-85}
                          duration={500}
                          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer block py-1"
                          onClick={() => setMenuOpen(false)}
                        >
                          {tab.label}
                        </ScrollLink>
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              {/* Drawer Bottom CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-10 mt-12"
              >
                <motion.a
                  href={joinNowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(14,165,233,.45)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-sky-500 py-3 rounded-full text-lg font-semibold text-white not-italic flex items-center justify-center shadow-md cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Join Now
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}






