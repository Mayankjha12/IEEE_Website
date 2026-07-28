"use client";

import { useState } from "react";
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

export const whatsAppLink = "https://chat.whatsapp.com/E1MfsiHEDGl7cgwumScIHA";

const usefulLinksData = [
  { href: "https://www.ieee.org/", label: "IEEE.org", icon: FaGlobe },
  { href: "https://ieeexplore.ieee.org/", label: "IEEE Xplore", icon: FaBookOpen },
  { href: "https://www.ieee.org/conferences/index.html", label: "IEEE Events", icon: FaCalendarAlt },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="pb-4 w-full">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center pt-4 gap-3 text-center"
        >
          {/* Centered logo + name */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block h-px w-16 md:w-32 bg-white/30" />
            <div className="flex flex-col items-center gap-1 p-0.5">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-[72px] h-[72px] object-contain"
                priority
                height={72}
                width={72}
              />
              <p className="max-w-xs text-sm md:text-base font-normal text-white">
                The Largest and the Oldest Technical Society of NSUT
              </p>
            </div>
            <div className="hidden sm:block h-px w-16 md:w-32 bg-white/30" />
          </div>

          {/* Three-across row: Contact | Socials | Useful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-start gap-4 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center md:items-start gap-1 md:justify-self-start">
              <h3 className="mb-1 text-sm md:text-base font-bold text-white">
                Contact us
              </h3>
              <ul className="flex flex-col items-center md:items-start gap-1">
                <li className="text-[#efefef] text-sm font-normal text-center md:text-left">
                  <a
                    href="mailto:ieeensut@gmail.com"
                    className="hover:text-[#00a8cc] transition"
                  >
                    ieeensut@gmail.com
                  </a>
                </li>
                <li className="text-[#efefef] text-sm font-normal text-center md:text-left">
                  NSUT, Sector-3 Dwarka, Delhi
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-1 md:justify-self-center">
              <h3 className="text-sm md:text-base font-bold text-white">
                Connect
              </h3>
              <div className="flex flex-row items-center gap-3">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#00a8cc] transition"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.instagram.com/ieee_nsut"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#00a8cc] transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://in.linkedin.com/company/ieee-nsut"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00a8cc] transition"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://www.facebook.com/ieeensut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#00a8cc] transition"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1 md:justify-self-end">
              <h3 className="mb-1 text-sm md:text-base font-bold text-white">
                IEEE Useful Links
              </h3>
              <ul className="flex flex-col items-center md:items-start gap-1">
                {usefulLinksData.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="text-[#efefef] text-sm font-normal">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-[#00a8cc] transition"
                      >
                        <Icon size={14} /> {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Vertical divider into newsletter */}
          <div className="h-[33px] w-px bg-white/30 -my-1" />

          {/* Centered newsletter */}
          <div className="flex flex-col items-center gap-1 w-full max-w-sm -mt-1">
            <h3 className="text-sm md:text-base font-bold text-white">
              Newsletter
            </h3>
            <p className="text-[#efefef] text-xs text-center">
              Subscribe to our newsletter for more updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Subscribe:", email);
              }}
              className="flex flex-col w-full gap-0 border border-white/30 rounded-md overflow-hidden"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@nsut.ac.in"
                className="bg-transparent px-3 py-1 text-white placeholder-white/50 text-xs outline-none border-b border-white/20"
              />
              <button
                type="submit"
                className="px-3 py-1 text-xs font-medium text-white hover:text-[#00a8cc] transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Centered copyright */}
          <div className="text-[#efefef] text-sm font-medium">
            &copy; 2026 IEEE NSUT. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
