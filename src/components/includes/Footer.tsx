"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGlobe,
  FaBookOpen,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const whatsAppLink = "https://chat.whatsapp.com/E1MfsiHEDGl7cgwumScIHA";

const linksArr = [
  {
    title: "Contact us",
    links: [
      // <a
      //   key="phone"
      //   href="tel:+919534781286"
      //   className="hover:text-[#00a8cc] transition"
      // >
      //   +91 88264 90096
      // </a>,
      <a
        key="mail"
        href="mailto:ieeensut@gmail.com"
        className="hover:text-[#00a8cc] transition"
      >
        ieeensut@gmail.com
      </a>,
      "NSUT, Sector-3 Dwarka, Delhi",
    ],
  },
  {
    title: "IEEE Useful Links",
    links: [
      <a
        key="ieee-main"
        href="https://www.ieee.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-[#00a8cc] transition"
      >
        <FaGlobe /> IEEE.org
      </a>,
      <a
        key="ieee-xplore"
        href="https://ieeexplore.ieee.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-[#00a8cc] transition"
      >
        <FaBookOpen /> IEEE Xplore
      </a>,
      <a
        key="ieee-events"
        href="https://www.ieee.org/conferences/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-[#00a8cc] transition"
      >
        <FaCalendarAlt /> IEEE Events
      </a>,
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pb-14 w-full">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col pt-12 pb-0 gap-12"
        >
          <div className="flex flex-col md:flex-row justify-between w-full gap-8">
            {/* Logo and text side by side, socials below on mobile, side on desktop */}
            <div
              className={cn(
                "flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-lg border border-dashed border-white/80 bg-white/5"
              )}
            >
              <Image
                src="/logo.png"
                alt="logo"
                className="w-20 h-20 object-contain"
                priority
                height={80}
                width={80}
              />
              <div className="flex flex-col justify-center">
                <p className="max-w-xs text-lg md:text-2xl font-normal text-white">
                  The Largest and the Oldest Technical Society of NSUT
                </p>
                <div className="flex flex-row items-center gap-4 mt-3 md:mt-4">
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="hover:text-[#00a8cc] transition"
                  >
                    <FaWhatsapp size={24} />
                  </a>

                  <a
                    href="https://www.instagram.com/ieee_nsut"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-[#00a8cc] transition"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/ieee-nsut"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-[#00a8cc] transition"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/ieeensut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-[#00a8cc] transition"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            {/* Footer links */}
            <div
              className={cn(
                "grid gap-10 md:gap-8 w-full md:w-auto",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {linksArr.map((section, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start min-w-[10rem]"
                >
                  {section.title && (
                    <h3 className="mb-2 text-base md:text-lg font-bold text-white">
                      {section.title}
                    </h3>
                  )}
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className={cn(
                          "text-[#efefef] text-base font-normal transition-all duration-300 hover:pl-2"
                        )}
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* <hr className="border-white/20" /> */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2 text-[#efefef] text-base font-medium">
              &copy; 2025 IEEE NSUT. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
