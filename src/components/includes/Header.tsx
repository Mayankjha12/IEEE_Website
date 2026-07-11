"use client";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
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

const menuVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
  closed: {
    opacity: 0,
    scale: 0.5,
    rotateX: -30,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

const overlayVariants: Variants = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = tabs.map((tab) => tab.target);
  const activeSection = useActiveSection(sectionIds, 85);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full",
          "backdrop-blur-md bg-black/80",
          "flex justify-between items-center px-4 md:px-8 py-4 border-b border-white/10 z-[100] select-none",
          "overflow-x-hidden"
        )}
        style={{
          fontFamily: "Roboto, sans-serif",
          filter: "contrast(110%) brightness(105%)",
        }}
      >
        <motion.div
          className="flex flex-col items-start z-10 shrink-0"
          layoutId="logo"
        >
          <Image
            src="/logo.png"
            alt="IEEE Logo"
            width={100}
            height={68}
            className="ml-2 md:ml-5 h-[48px] md:h-[68px] w-auto transition hover:drop-shadow-[0_0_12px_#3aadfb]"
            priority
          />
        </motion.div>
        {/* Desktop nav */}
        <div className="ml-1 md:ml-20 flex-1 hidden lg:flex justify-center z-10">
          <ul className="flex list-none gap-3 md:gap-6 flex-wrap items-center">
            {tabs.map(
              (tab, idx) =>
                tab.label && (
                  <li key={tab.label} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + idx * 0.2, duration: 0.6 }}
                    >
                      {tab.target === "team" || !isHomePage ? (
                        <Link
                          href={`${tab.href}`}
                          className={cn(
                            "group relative inline-block cursor-pointer text-[rgb(207,206,206)] text-[19px] px-2 py-1 transition-colors duration-200",
                            "hover:text-[#00c8ff] focus:text-[#00ffff]",
                            activeSection === tab.target
                              ? "text-[#00ffff] font-bold"
                              : ""
                          )}
                          tabIndex={0}
                        >
                          <span className="relative z-10">{tab.label}</span>
                          <span
                            aria-hidden
                            className={cn(
                              "pointer-events-none absolute left-0 -bottom-[3px] h-[2px] w-full scale-x-0",
                              "group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300",
                              activeSection === tab.target ? "scale-x-100" : ""
                            )}
                            style={{
                              background: "#00ffff",
                              boxShadow: "0 0 6px #00ffff99",
                              borderRadius: "999px",
                            }}
                          ></span>
                          <style jsx>{`
                            .group:hover,
                            .group:focus {
                              text-shadow: 0 0 8px #00ffffaa;
                            }
                          `}</style>
                        </Link>
                      ) : (
                        <ScrollLink
                          to={tab.target}
                          spy={true}
                          smooth={true}
                          offset={-85}
                          duration={500}
                          className={cn(
                            "group relative inline-block cursor-pointer text-[rgb(207,206,206)] text-[19px] px-2 py-1 transition-colors duration-200",
                            "hover:text-[#00c8ff] focus:text-[#00ffff]",
                            activeSection === tab.target
                              ? "text-[#00ffff] font-bold"
                              : ""
                          )}
                          tabIndex={0}
                        >
                          <span className="relative z-10">{tab.label}</span>
                          <span
                            aria-hidden
                            className={cn(
                              "pointer-events-none absolute left-0 -bottom-[3px] h-[2px] w-full scale-x-0",
                              "group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300",
                              activeSection === tab.target ? "scale-x-100" : ""
                            )}
                            style={{
                              background: "#00ffff",
                              boxShadow: "0 0 6px #00ffff99",
                              borderRadius: "999px",
                            }}
                          ></span>
                          <style jsx>{`
                            .group:hover,
                            .group:focus {
                              text-shadow: 0 0 8px #00ffffaa;
                            }
                          `}</style>
                        </ScrollLink>
                      )}
                    </motion.div>
                  </li>
                )
            )}
          </ul>
        </div>
        {/* Desktop join button and mobile menu icon */}
        <div className="flex items-center gap-3 z-10 shrink-0">
          <Button
            className={cn(
              "hidden md:inline-block bg-[#23a4fb] text-white px-6 py-2 text-base font-semibold rounded-full border-2 border-transparent shadow-none",
              "transition-all duration-300",
              "hover:bg-[#158ad6] hover:border-[#00bfff] hover:shadow-[inset_0_0_0_2px_#2c3e50,_0_0_12px_#00bfff,_0_0_4px_#2c3e50] hover:scale-110",
              "max-w-[180px] overflow-hidden"
            )}
            style={{
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <a href={joinNowLink} target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </Button>
          <div
            className={cn(
              "lg:hidden me-4 flex flex-col gap-1.5 cursor-pointer p-2 border border-[#3aadfb] rounded-lg bg-[#3aadfb] shadow",
              "hover:bg-cyan-100/20 hover:scale-105 transition-all",
              menuOpen ? "open" : ""
            )}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <span
              className={cn(
                "block w-[23px] h-[3px] bg-white rounded transition-all duration-300",
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              )}
            />
            <span
              className={cn(
                "block w-[23px] h-[3px] bg-white rounded transition-all duration-300",
                menuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-[23px] h-[3px] bg-white rounded transition-all duration-300",
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              )}
            />
          </div>
        </div>
      </nav>
      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-[100] flex justify-end items-start lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={(e) => {
              if ((e.target as HTMLElement).classList.contains("fixed")) {
                setMenuOpen(false);
              }
            }}
          >
            <motion.div
              className="bg-[rgba(20,20,20,0.9)] p-8 rounded-xl mt-24 mr-6 border border-white/10 backdrop-blur-md shadow-2xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col gap-5 items-start min-w-[140px]">
                {tabs.map(
                  (tab, idx) =>
                    tab.label && (
                      <motion.li
                        key={tab.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                      >
                        {tab.href.startsWith("/") ? (
                          <Link
                            href={tab.href}
                            className={cn(
                              "group relative inline-block cursor-pointer text-white text-base py-1 transition-colors duration-200",
                              "hover:text-[#00ffff] focus:text-[#00ffff]",
                              activeSection === tab.target
                                ? "text-[#00ffff] font-bold"
                                : ""
                            )}
                            tabIndex={0}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="relative z-10">{tab.label}</span>
                            <span
                              aria-hidden
                              className={cn(
                                "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full scale-x-0",
                                "group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300",
                                activeSection === tab.target
                                  ? "scale-x-100"
                                  : ""
                              )}
                              style={{
                                background: "#00ffff",
                                boxShadow: "0 0 6px #00ffff99",
                                borderRadius: "999px",
                              }}
                            ></span>
                            <style jsx>{`
                              .group:hover,
                              .group:focus {
                                text-shadow: 0 0 8px #00ffffaa;
                              }
                            `}</style>
                          </Link>
                        ) : (
                          <ScrollLink
                            to={tab.target}
                            spy={true}
                            smooth={true}
                            offset={-85}
                            duration={500}
                            className={cn(
                              "group relative inline-block cursor-pointer text-white text-base py-1 transition-colors duration-200",
                              "hover:text-[#00ffff] focus:text-[#00ffff]",
                              activeSection === tab.target
                                ? "text-[#00ffff] font-bold"
                                : ""
                            )}
                            tabIndex={0}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="relative z-10">{tab.label}</span>
                            <span
                              aria-hidden
                              className={cn(
                                "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full scale-x-0",
                                "group-hover:scale-x-100 group-focus:scale-x-100 origin-left transition-transform duration-300",
                                activeSection === tab.target
                                  ? "scale-x-100"
                                  : ""
                              )}
                              style={{
                                background: "#00ffff",
                                boxShadow: "0 0 6px #00ffff99",
                                borderRadius: "999px",
                              }}
                            ></span>
                            <style jsx>{`
                              .group:hover,
                              .group:focus {
                                text-shadow: 0 0 8px #00ffffaa;
                              }
                            `}</style>
                          </ScrollLink>
                        )}
                      </motion.li>
                    )
                )}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + tabs.length * 0.1 }}
                  className="w-full"
                >
                  <Button
                    className={cn(
                      "bg-[#23a4fb] text-[#283848] px-6 py-2 text-sm font-semibold rounded-full border-2 border-transparent transition-all duration-300 animate-pulse w-full mt-2",
                      "hover:bg-[#158ad6]",
                      "max-w-full overflow-hidden"
                    )}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                    }}
                    onClick={() => setMenuOpen(false)}
                    asChild
                  >
                    <a
                      href={joinNowLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                    </a>
                  </Button>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
